import React from "react";
import ReactEcharts from "echarts-for-react";
import { toolbox, legend } from "./CommonEchartOptions";
import {
  mapIndices,
  decideColors,
  buildTooltipDom,
  getRadialIndicators,
} from "./Utils";

class Radar extends React.PureComponent {
  getEmphasis = () => {
    return {
      label: {
        show: true,
        position: "top",
        areaStyle: {
          opacity: 0.025,
        },
        textStyle: {
          color: "#000",
          borderWidth: 1,
          borderColor: "#ccc",
          backgroundColor: "rgba(245, 245, 245, 0.8)",
        },
      },
    };
  };

  getTooltipValues = (gidx, idx) => {
    let values = [];
    if (this.props.pf.f) {
      values = [[`<b>f</b>`, this.props.pf.f[gidx[idx]]]];
    }
    return values;
  };

  getTooltipExtraValues = (gidx, idx) => {
    let extraValues = [];
    if (this.props.pf.mu) {
      extraValues.push([
        "&mu;",
        parseFloat(this.props.pf.mu[gidx[idx]]).toFixed(4),
      ]);
    }
    if (this.props.pf.centroid_dist) {
      extraValues.push([
        "CD",
        parseFloat(this.props.pf.centroid_dist[gidx[idx]]).toFixed(4),
      ]);
    }
    if (this.props.pf.cv) {
      extraValues.push([
        "CV",
        parseFloat(this.props.pf.cv[gidx[idx]]).toFixed(4),
      ]);
    }
    return extraValues;
  };

  getTooltip = (xpos, ypos, globalIndices) => {
    return {
      show: true,
      trigger: "item",
      triggerOn: "mousemove",
      position: [xpos, ypos],
      formatter: (params, ticket, callback) => {
        return buildTooltipDom(
          params,
          null,
          this.getTooltipValues(globalIndices, params.dataIndex),
          this.getTooltipExtraValues(globalIndices, params.dataIndex),
          globalIndices
        );
      },
    };
  };

  getDefaultOption = () => {
    return {
      radar: {
        name: {
          textStyle: {
            color: "black",
            fontSize: 14,
            fontWeight: "bold",
          },
        },
        shape: "circle",
        radius: 160,
        startAngle: 0,
      },
      tooltip: { trigger: "item" },
    };
  };

  getSeries = (name, data, indices, colors) => {
    return {
      name: name,
      type: "radar",
      data: mapIndices(data, indices),
      itemStyle: {
        color: (params) => {
          return colors[indices[params.dataIndex]];
        },
      },
      lineStyle: {
        width: 0.5,
      },
      emphasis: this.getEmphasis(),
    };
  };

  getOption = () => {
    let colors = decideColors(this.props.pf, this.props.colorScheme);
    let option = this.getDefaultOption();
    option.toolbox = toolbox();
    option.legend = legend(this.props.dataNames);
    option.radar.indicator = getRadialIndicators(
      this.props.pf.bounds_f,
      this.props.indicatorPrefix
    );
    option.series = [];
    // all other points
    option.series.push(
      this.getSeries(
        this.props.dataNames[0],
        this.props.pf.f,
        this.props.pf.ptid,
        colors
      )
    );
    option.series[0].tooltip = this.getTooltip(
      "80%",
      "10%",
      this.props.pf.ptid
    );
    // knee points
    if (this.props.pf.muid) {
      option.series.push(
        this.getSeries(
          this.props.dataNames[1],
          this.props.pf.f,
          this.props.pf.muid,
          colors
        )
      );
      option.series[1].tooltip = this.getTooltip(
        "80%",
        "10%",
        this.props.pf.muid
      );
    }
    return option;
  };

  render() {
    return (
      <div id="radar-plot">
        <ReactEcharts
          option={this.getOption()}
          notMerge={true}
          style={{ height: "425px", width: "100%" }}
        />
      </div>
    );
  }
}

export default Radar;
