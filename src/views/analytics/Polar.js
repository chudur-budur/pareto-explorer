import React, { useRef } from "react";
import "echarts-gl";
import ReactEcharts from "echarts-for-react";
import {
  buildEmphasisString,
  buildTooltipDom,
  getPointSizeFromMu,
  decideColors,
  mapIndices,
  pushAnchors2D,
  findClosestAnchorPoint,
} from "../utils";
import { toolbox, legend, dataZoom2D } from "./CommonEchartOptions";

class Polar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      echart: null,
    };
  }

  // echarts_react = useRef();
  // echarts_react = null;

  testGraphics = () => {
    //const echarts_react = useRef();
    let v = this.echarts_react.convertToPixel("scatter", [0, 0]);
    //let v = e.convertToPixel("scatter", [0, 0]);
    console.log(v);
  };

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
    if (this.props.pf.polar_anchors) {
      let id = findClosestAnchorPoint(
        params.value,
        this.props.pf.polar_anchors
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
        position: "top",
        color: "#000",
        borderWidth: 1,
        borderColor: "#ccc",
        fontWeight: "normal",
        fontSize: 13,
        backgroundColor: "#fff",
        padding: [2, 2, 2, 2],
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
        let ev = this.getTooltipExtraValues(globalIndices, params.dataIndex);
        ev.push([["u", "v"], params.value]);
        return buildTooltipDom(
          params,
          null,
          this.getTooltipValues(globalIndices, params.dataIndex),
          ev,
          globalIndices
        );
      },
    };
  };

  getDefaultOption = () => {
    return {
      grid: { id: "g1", show: false },
      xAxis: { show: false },
      yAxis: { show: false },
      tooltip: { trigger: "item" },
      // visualMap: {},
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
      type: "scatter",
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

  /* getGraphicElements = () => {
    return [
      {
        elements: [
          {
            id: "small_circle",
            type: "circle",
            z: 100,
            shape: {
              cx: 350,
              cy: 200,
              r: 50,
            },
            style: {
              fill: null, //"rgba(0, 140, 250, 0.5)",
              stroke: "grey", //"rgba(0, 50, 150, 0.5)",
              lineWidth: 2,
            },
          },
          {
            id: "anchor-f1",
            type: "circle",
            z: 100,
            shape: {
              cx: this.props.pf.polar_anchors[0][0] + 100,
              cy: this.props.pf.polar_anchors[0][1] + 100,
              r: 20,
            },
            style: {
              fill: "grey", //"rgba(0, 140, 250, 0.5)",
              stroke: "grey", //"rgba(0, 50, 150, 0.5)",
              lineWidth: 1,
            },
          },
        ],
      },
    ];
  }; */

  getOption = () => {
    //this.testGraphics();
    let colors = decideColors(this.props.pf, this.props.colorScheme);
    let dataPoints =
      this.props.mode === "star" ? this.props.pf.star : this.props.pf.radviz;
    let option = this.getDefaultOption();
    option.toolbox = toolbox();
    option.legend = legend(this.props.dataNames);
    option.dataZoom = dataZoom2D();
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
    option.series = pushAnchors2D(
      option.series,
      this.props.pf.polar_anchors,
      this.props.anchorPrefix,
      this.props
    );
    // option.graphic = this.getGraphicElements();
    return option;
  };

  render() {
    //this.testGraphics();
    //console.log("Polar: this.props.pf.name = " + this.props.pf.name);
    //console.log("Polar: this.props.pf.m = " + this.props.pf.m);
    return (
      <div id="polar-plot">
        <ReactEcharts
          ref={(e) => {
            this.echarts_react = e;
            //this.testGraphics(e);
          }}
          // option={pushAnchorsPolar(this.props.pf, this.getOption())}
          option={this.getOption()}
          notMerge={true}
          style={{ height: "425px", width: "100%" }}
        />
      </div>
    );
  }
}

export default Polar;
