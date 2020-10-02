import React from "react";
import ReactEcharts from "echarts-for-react";
import { toolbox, legend } from "./CommonEchartOptions";
import { mapIndices, decideColors } from "../utils";

class PCP extends React.PureComponent {
  getDefaultOption = () => {
    return {
      parallel: {
        left: "5%",
        right: "10%",
        bottom: "5%",
        top: "20%",
        axisExpandable: true,
      },
      tooltip: { trigger: "item" },
    };
  };

  getParallelAxis = () => {
    let axes = [];
    for (let i = 0; i < this.props.pf.m; i++) {
      axes.push({
        dim: i,
        name: this.props.axisLabelPrefix + (i + 1),
        nameTextStyle: { fontSize: 12, fontWeight: "bold" },
        min: this.props.pf.bounds_f[0][i],
        max: this.props.pf.bounds_f[1][i],
      });
    }
    return axes;
  };

  getSeries = (name, data, indices, colors, lineWidth) => {
    return {
      name: name,
      type: "parallel",
      data: mapIndices(data, indices),
      smooth: this.props.isSmooth, // does not work
      lineStyle: {
        color: (params) => {
          return colors[indices[params.dataIndex]];
        },
        width: lineWidth,
      },
      emphasis: {}, // does not work
    };
  };

  getOption = () => {
    let colors = decideColors(this.props.pf, this.props.colorScheme);
    let option = this.getDefaultOption();
    option.toolbox = toolbox();
    option.parallelAxis = this.getParallelAxis();
    option.legend = legend();
    option.series = [];
    option.series.push(
      this.getSeries(
        this.props.dataNames[0],
        this.props.pf.f,
        this.props.pf.ptid,
        colors,
        this.props.lineWidth
      )
    );
    if (this.props.pf.mu) {
      option.series.push(
        this.getSeries(
          this.props.dataNames[1],
          this.props.pf.f,
          this.props.pf.muid,
          colors,
          this.props.lineWidthKnee
        )
      );
    }
    return option;
  };

  render() {
    return (
      <div id="pcp-plot">
        <ReactEcharts
          option={this.getOption()}
          notMerge={true}
          style={{ height: "425px", width: "100%" }}
        />
      </div>
    );
  }
}

export default PCP;
