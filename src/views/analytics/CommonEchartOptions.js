/**
 *
 */
export var toolbox = () => {
  return {
    feature: {
      dataView: { show: true, title: "Data View", readOnly: false },
      restore: { show: true, title: "Refresh" },
      saveAsImage: { show: true, title: "Save as Image" },
      brush: { show: true },
    },
  };
};

/**
 *
 * @param {*} names
 */
export var legend = (names) => {
  return {
    left: 10,
    data: names,
  };
};

/**
 *
 * @param {*} pf
 * @param {*} colors
 * @param {*} params
 */
export var visualMap = (pf, colors, params) => {
  return {
    type: "continuous",
    seriesIndex: 0,
    min: 0,
    max: 1.0,
    // color: ptid.map((i) => colors[i]).reverse(),
    color: pf.ptid.map((i) => colors[i]),
    // color: (params) => {return colors[ptid[params.dataIndex]];},
    calculable: true,
  };
};

/**
 *
 */
export var dataZoom2D = () => {
  return [
    {
      type: "inside",
      show: true,
      xAxisIndex: 0,
    },
    {
      type: "inside",
      show: true,
      yAxisIndex: 0,
    },
  ];
};
