import React from "react";
import ReactEcharts from "echarts-for-react";

class SingleBoxplot extends React.PureComponent {
  tooltipBox = (prefix, tooltipTitle) => {
    return {
      formatter: (param) => {
        return [
          `${tooltipTitle}&nbsp;&nbsp;<b>${prefix}</b><sub>${
            parseInt(param.name) + 1
          }</sub>&nbsp;`,
          `max:&nbsp;${parseFloat(param.data[1]).toExponential(2)}`,
          `q3:&nbsp;${parseFloat(param.data[2]).toExponential(2)}`,
          `median:&nbsp;${parseFloat(param.data[3]).toExponential(2)}`,
          `q1:&nbsp${parseFloat(param.data[4]).toExponential(2)}`,
          `min:&nbsp;${parseFloat(param.data[5]).toExponential(2)}`,
        ].join(`<br/>`);
      },
    };
  };

  getOption = () => {
    return {
      tooltip: {
        trigger: "item",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {},
      xAxis: {
        type: "category",
        data: new Array(this.props.numberOfDimensions).fill(0).map((v, i) => i),
        boundaryGap: true,
        nameGap: 10,
        splitArea: {
          show: false,
        },
        axisLabel: {
          fontWeight: "bold",
          formatter: (value) => {
            return this.props.xAxisLabelPrefix + (parseInt(value) + 1);
          },
        },
        splitLine: {
          show: false,
        },
      },
      yAxis: {
        type: "value",
        name: this.props.yAxisTitle,
        nameRotate: 0,
        nameLocation: "end",
        axisLabel: {
          formatter: (value) => {
            return parseFloat(value).toExponential(2);
          },
        },
        splitArea: {
          show: true,
        },
      },
      series: [
        {
          name: this.props.title,
          type: "boxplot",
          data: this.props.data,
          tooltip: this.tooltipBox(
            this.props.xAxisLabelPrefix,
            this.props.tooltipTitle
          ),
        },
      ],
    };
  };

  render() {
    return (
      <div id="heatmap">
        <ReactEcharts
          option={this.getOption()}
          style={{ height: "425px", width: "100%" }}
        />
      </div>
    );
  }
}

export default SingleBoxplot;
