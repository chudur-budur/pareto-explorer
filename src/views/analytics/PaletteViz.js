import React from "react";
import "echarts-gl";
import ReactEcharts from "echarts-for-react";
import { toolbox, legend } from "./CommonEchartOptions";
import {
  buildEmphasisString,
  buildTooltipDom,
  mapIndices,
  getPointSizeFromMu,
  decideColors,
  pushAnchors3D,
  findClosestAnchorPoint,
} from "../utils";

class PaletteViz extends React.PureComponent {
  getEmphasisData = (params) => {
    let emphasisData = [];
    if (this.props.pf.centroid_dist) {
      emphasisData.push([
        "CD: ",
        this.props.pf.centroid_dist[params.dataIndex],
      ]);
    }
    if (this.props.pf.cv) {
      emphasisData.push(["CV: ", this.props.pf.cv[params.dataIndex]]);
    }
    if (this.props.pf.palette_anchors) {
      let idx = 0;
      for (let i = 0; i < this.props.pf.palette_anchors.length; i++) {
        if (params.value[2] === this.props.pf.palette_anchors[i][0][2]) {
          idx = i;
          break;
        }
      }
      let id = findClosestAnchorPoint(
        params.value,
        this.props.pf.palette_anchors[idx]
      );
      emphasisData.push([
        "Close to f",
        id === this.props.pf.m ? 1 : id + 1,
        "int",
      ]);
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
        show: false,
        //axisPointer: { show: false },
        viewControl: {
          projection: "perspective",
          alpha: 25,
          beta: this.props.mode === "star" ? 45 : 60,
        },
        boxWidth: 135,
        boxHeight: 110,
        boxDepth: 135,
      },
      xAxis3D: {},
      yAxis3D: {},
      zAxis3D: {},
      tooltip: { trigger: "item" },
    };
  };

  getSeries = (
    name,
    dataPoints,
    indices,
    colors,
    factor,
    power,
    seriesIndex
  ) => {
    return {
      name: name,
      type: "scatter3D",
      data: mapIndices(dataPoints, indices),
      itemStyle: {
        color: (params) => {
          return colors[indices[params.dataIndex]];
        },
      },
      symbolSize: (value, params) => {
        return getPointSizeFromMu(
          this.props.pf.mu[indices[params.dataIndex]],
          factor,
          power,
          seriesIndex
        );
      },
    };
  };

  getOption = () => {
    let colors = decideColors(this.props.pf, this.props.colorScheme);
    let dataPoints =
      this.props.mode === "star"
        ? this.props.pf.palette_starviz
        : this.props.pf.palette_radviz;
    let option = this.getDefaultOption();
    option.toolbox = toolbox();
    option.legend = legend(this.props.dataNames);
    option.series = [];
    // all other points
    option.series.push(
      this.getSeries(
        this.props.dataNames[0],
        dataPoints,
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
          dataPoints,
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
    option.series = pushAnchors3D(
      option.series,
      this.props.pf.palette_anchors,
      this.props.anchorPrefix,
      this.props
    );
    return option;
  };

  render() {
    return (
      <div id="paletteviz-plot">
        <ReactEcharts
          option={this.getOption()}
          notMerge={true}
          style={{ height: "425px", width: "100%" }}
        />
      </div>
    );
  }
}

export default PaletteViz;
