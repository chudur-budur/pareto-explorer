import React from "react";
import "echarts-gl";
import ReactEcharts from "echarts-for-react";
import { toolbox, legend } from "./CommonEchartOptions";
import {
  buildEmphasisString,
  buildTooltipDom,
  mapIndicesAndSelectColumns,
  getPointSizeFromMu,
  decideColors,
} from "./Utils";

class Scatter3D extends React.PureComponent {
  getEmphasisData = (params) => {
    let emphasisData = [];
    if (this.props.pf.centroid_dist) {
      emphasisData.push(["CD", this.props.pf.centroid_dist[params.dataIndex]]);
    }
    if (this.props.pf.cv) {
      emphasisData.push(["CV", this.props.pf.cv[params.dataIndex]]);
    }
    return emphasisData;
  };

  getEmphasis = () => {
    return {
      label: {
        show: true,
        formatter: (params) => {
          return buildEmphasisString(params, this.getEmphasisData(params));
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
      grid3D: {
        axisPointer: { show: false },
        viewControl: { projection: "perspective", alpha: 0, beta: 30 },
        boxWidth: 120,
        boxHeight: 95,
        boxDepth: 120,
      },
      xAxis3D: {
        scale: true,
        gridIndex: 0,
        name: this.props.axisLabelPrefix + (this.props.axes[0] + 1),
      },
      yAxis3D: {
        scale: true,
        gridIndex: 1,
        name: this.props.axisLabelPrefix + (this.props.axes[1] + 1),
      },
      zAxis3D: {
        scale: true,
        gridIndex: 2,
        name: this.props.axisLabelPrefix + (this.props.axes[2] + 1),
      },
      tooltip: { trigger: "item" },
    };
  };

  getSeries = (name, indices, colors, factor, power) => {
    return {
      name: name,
      type: "scatter3D",
      data: mapIndicesAndSelectColumns(
        this.props.pf.f,
        indices,
        this.props.axes
      ),
      itemStyle: {
        color: (params) => {
          return colors[indices[params.dataIndex]];
        },
      },
      symbolSize: (value, params) => {
        return getPointSizeFromMu(
          this.props.pf.mu[indices[params.dataIndex]],
          factor,
          power
        );
      },
    };
  };

  getOption = () => {
    let colors = decideColors(this.props.pf, this.props.colorScheme);
    let option = this.getDefaultOption();
    option.toolbox = toolbox();
    option.legend = legend(this.props.dataNames);
    option.series = [];
    // all other points
    option.series.push(
      this.getSeries(
        this.props.dataNames[0],
        this.props.pf.ptid,
        colors,
        this.props.psf,
        0
      )
    );
    option.series[0].emphasis = this.getEmphasis();
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
          this.props.pf.muid,
          colors,
          this.props.ksf,
          1
        )
      );
      option.series[1].emphasis = this.getEmphasis();
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
      <div id="scatter3D-plot">
        <ReactEcharts
          option={this.getOption()}
          notMerge={true}
          style={{ height: "425px", width: "100%" }}
        />
      </div>
    );
  }
}

export default Scatter3D;
