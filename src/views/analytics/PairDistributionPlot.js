import React from "react";
import ReactEcharts from "echarts-for-react";
import { sortIndices, mapIndices, formatVecToDom } from "../utils";

class PairDistributionPlot extends React.PureComponent {
  getDefaultOption = () => {
    return {
      legend: {
        left: 10,
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: "none",
          },
          restore: {},
          saveAsImage: {},
        },
      },
      axisPointer: {
        link: { xAxisIndex: "all" },
      },
      animationEasing: "elasticOut",
    };
  };

  getDataZoom = (flags) => {
    if (flags[0] && flags[1]) {
      return [
        {
          type: "slider",
          show: true,
          realtime: true,
          xAxisIndex: [0, 1],
        },
        {
          type: "inside",
          realtime: true,
          xAxisIndex: [0, 1],
        },
      ];
    } else {
      return {
        type: "slider",
        show: true,
        realtime: true,
        xAxisIndex: 0,
      };
    }
  };

  getGrid = (flags) => {
    if (flags[0] && flags[1]) {
      return [
        {
          left: 45,
          height: "30%",
        },
        {
          left: 45,
          top: "55%",
          height: "30%",
        },
      ];
    } else {
      return {
        left: 45,
        height: "70%",
      };
    }
  };

  getXaxis = (flags, indices) => {
    if (flags[0] && flags[1]) {
      return [
        {
          name: "Id",
          nameLocation: "end",
          type: "category",
          boundaryGap: false,
          axisLine: { onZero: true },
          data: indices,
        },
        {
          name: "Id",
          nameLocation: "end",
          gridIndex: 1,
          type: "category",
          boundaryGap: false,
          axisLine: { onZero: true },
          data: indices,
        },
      ];
    } else {
      return {
        name: "Id",
        nameLocation: "end",
        type: "category",
        boundaryGap: false,
        axisLine: { onZero: true },
        data: indices,
      };
    }
  };

  getYaxis = (flags) => {
    if (flags[0] && flags[1]) {
      return [
        {
          name: this.props.dataNames[0],
          type: "value",
          nameLocation: "middle",
          nameRotate: 90,
          nameGap: 30,
        },
        {
          gridIndex: 1,
          name: this.props.dataNames[1],
          type: "value",
          nameLocation: "middle",
          nameRotate: 90,
          nameGap: 30,
        },
      ];
    } else {
      return {
        name: flags[0] ? this.props.dataNames[0] : this.props.dataNames[1],
        type: "value",
        nameLocation: "middle",
        nameRotate: 90,
        nameGap: 30,
      };
    }
  };

  getEmphasis = (data, label) => {
    return {
      label: {
        show: true,
        position: "top",
        formatter: (params) => {
          return label + ": " + data[params.dataIndex].toFixed(2);
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

  getSeries = (flags, indices) => {
    let colors = ["blue", "firebrick"];
    if (flags[0] && flags[1]) {
      return [
        {
          name: this.props.dataNames[0],
          type: "line",
          symbolSize: 8,
          lineStyle: { width: 1, color: colors[0] },
          itemStyle: { color: colors[0] },
          hoverAnimation: false,
          data: mapIndices(this.props.data[0], indices),
          emphasis: this.getEmphasis(
            this.props.data[0],
            this.props.dataNames[0]
          ),
        },
        {
          name: this.props.dataNames[1],
          type: "line",
          symbolSize: 8,
          lineStyle: { width: 1, color: colors[1] },
          itemStyle: { color: colors[1] },
          xAxisIndex: 1,
          yAxisIndex: 1,
          hoverAnimation: false,
          data: mapIndices(this.props.data[1], indices),
          emphasis: this.getEmphasis(
            this.props.data[1],
            this.props.dataNames[1]
          ),
        },
      ];
    } else {
      return {
        name: flags[0] ? this.props.dataNames[0] : this.props.dataNames[1],
        type: "line",
        symbolSize: 8,
        lineStyle: { width: 1, color: flags[0] ? colors[0] : colors[1] },
        itemStyle: { color: flags[0] ? colors[0] : colors[1] },
        hoverAnimation: false,
        data: mapIndices(
          flags[0] ? this.props.data[0] : this.props.data[1],
          indices
        ),
        emphasis: this.getEmphasis(
          flags[0] ? this.props.data[0] : this.props.data[1],
          flags[0] ? this.props.dataNames[0] : this.props.dataNames[1]
        ),
      };
    }
  };

  getTooltip = (xpos, ypos) => {
    let [data, prefix] = this.props.tooltipData;
    let [showMu, showCv] = this.props.showDataFlag;
    let [muStr, cvStr] = this.props.dataNames;
    let [mu, cv] = this.props.data;
    return {
      show: true,
      position: [xpos, ypos],
      trigger: "axis",
      axisPointer: {
        animation: false,
      },
      formatter: (params, ticket, callback) => {
        let idx = params[0].dataIndex;
        let vs = formatVecToDom(data[idx], prefix);
        let dom = [`ID : ${idx}`, `${vs}`].join("<br/>");
        if (!showMu && showCv) {
          let ms = formatVecToDom(parseFloat(mu[idx]).toFixed(4), muStr);
          dom = [`ID : ${idx}`, `${vs}`, `${ms}`].join("<br/>");
        } else if (showMu && !showCv) {
          let cs = formatVecToDom(parseFloat(cv[idx]).toFixed(4), cvStr);
          dom = [`ID : ${idx}`, `${vs}`, `${cs}`].join("<br/>");
        }
        return `<div>` + dom + `</div>`;
      },
    };
  };

  getOption = () => {
    let indices = new Array(this.props.numberOfPoints).fill(0).map((v, i) => i);
    if (parseInt(this.props.sortOrder) > -1) {
      indices = sortIndices(
        indices,
        this.props.data[parseInt(this.props.sortOrder)]
      );
    }
    let flags = [
      this.props.data[0] && this.props.showDataFlag[0],
      this.props.data[1] && this.props.showDataFlag[1],
    ];
    let option = this.getDefaultOption();
    option.tooltip = this.getTooltip("80%", "10%");
    option.dataZoom = this.getDataZoom(flags);
    option.grid = this.getGrid(flags);
    option.xAxis = this.getXaxis(flags, indices);
    option.yAxis = this.getYaxis(flags);
    option.series = this.getSeries(flags, indices);
    option.legend.data = this.props.dataNames;
    return option;
  };

  render() {
    return (
      <div id="mu-cv-stat">
        <ReactEcharts
          option={this.getOption()}
          notMerge={true}
          style={{ height: "425px", width: "100%" }}
        />
      </div>
    );
  }
}

export default PairDistributionPlot;
