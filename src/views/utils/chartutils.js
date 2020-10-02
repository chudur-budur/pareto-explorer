import { smallCircle, buildTooltipDom, smallCircleWithLine } from "./domutils";

/**
 *
 * @param {*} data
 * @param {*} colorScheme
 */
export function decideColors(data, colorScheme) {
  if (data.color_cd && colorScheme === "color-by-centroid") {
    return data.color_cd;
  } else if (data.color_cv && colorScheme === "color-by-cv") {
    return data.color_cv;
  } else {
    return "grey";
  }
}

/**
 *
 * @param {*} mu
 * @param {*} factor
 * @param {*} seriesIndex
 */
export var getPointSizeFromMu = (mu, factor, seriesIndex) => {
  let power = seriesIndex === 0 ? 2.0 : seriesIndex === 1 ? 3.0 : 1.0;
  return factor * Math.pow(1.0 + mu, power);
};

/**
 *
 * @param {*} params
 */
export var getGeometricElementType = (params) => {
  if (params.seriesType === "scatter" || params.seriesType === "scatter3D") {
    return "Pivot";
  } else if (params.seriesType === "line" || params.seriesType === "line3D") {
    return "Pivot Line";
  } else {
    return "Unknwon";
  }
};

/**
 *
 * @param {*} origin
 * @param {*} radius
 * @param {*} n
 * @param {*} z
 */
export var getCircle2D = (origin, radius, n, z = null) => {
  let T = 2.0 * Math.PI,
    points = [];
  for (let t = 0; t < T; t += T / n) {
    if (z) {
      points.push([
        origin[0] + radius * Math.cos(t),
        origin[1] + radius * Math.sin(t),
        z,
      ]);
    } else {
      points.push([
        origin[0] + radius * Math.cos(t),
        origin[1] + radius * Math.sin(t),
      ]);
    }
  }
  points.push(points[0]);
  return points;
};

var fixPointSize = (params) => {
  return params.value[0] * 0;
};

/**
 *
 * @param {*} series
 * @param {*} anchors
 * @param {*} anchorPrefix
 * @param {*} props
 */
export var pushAnchors3D = (series, anchors, anchorPrefix = "f", props) => {
  for (let z of anchors) {
    // anchor points
    series.push({
      type: "scatter3D",
      data: z.slice(0, z.length - 1),
      itemStyle: {
        color: "grey",
      },
      symbolSize: (value, params) => {
        fixPointSize(params);
      },
      label: {
        show: true,
        position: "top",
        formatter: (params) => {
          return anchorPrefix + (params.dataIndex + 1);
        },
        textStyle: {},
      },
      tooltip: {
        show: true,
        trigger: "item",
        triggerOn: "mousemove",
        position: ["80%", "10%"],
        formatter: (params, ticket, callback) => {
          let title = smallCircle(params.color) + `&nbsp Anchor Point`;
          return buildTooltipDom(
            params,
            title,
            null,
            [[["x", "y", "z"], params.value]],
            null
          );
        },
      },
      emphasis: { show: false },
    });
    // anchor lines
    series.push({
      type: "line3D",
      data: z,
      lineStyle: { color: "grey", width: 1.5 },
      tooltip: {
        show: true,
        trigger: "item",
        triggerOn: "mousemove",
        position: ["80%", "10%"],
        formatter: (params, ticket, callback) => {
          let title = smallCircleWithLine(params.color) + `&nbsp Anchor Line`;
          return buildTooltipDom(
            params,
            title,
            null,
            [[["x", "y", "z"], params.value]],
            null
          );
        },
      },
      emphasis: { show: false },
    });
    // anchor circles
    series.push({
      type: "line3D",
      data: getCircle2D([0, 0], 1, 50, z[0][2]),
      lineStyle: { color: "lightgrey", width: 1.25 },
      symbol: "circle",
      symbolSize: 2,
      showSymbol: true,
      itemStyle: { color: "lightgrey" },
      tooltip: {
        show: true,
        trigger: "item",
        triggerOn: "mousemove",
        position: ["80%", "10%"],
        formatter: (params, ticket, callback) => {
          let title =
            smallCircleWithLine(params.color) + `&nbsp Anchor Boundary`;
          return buildTooltipDom(
            params,
            title,
            null,
            [[["x", "y", "z"], params.value]],
            null
          );
        },
      },
      emphasis: { show: false },
    });
    /* series[0].symbolSize = (value, params) => {
      getPointSizeFromMu(params, props.psf, props.ksf, props.pf);
    };
    series[1].symbolSize = (value, params) => {
      getPointSizeFromMu(params, props.psf, props.ksf, props.pf);
    }; */
  }
  return series;
};

/**
 *
 * @param {*} series
 * @param {*} anchors
 * @param {*} anchorPrefix
 * @param {*} props
 */
export var pushAnchors2D = (series, anchors, anchorPrefix = "f") => {
  // anchor points
  series.push({
    type: "scatter",
    data: anchors.slice(0, anchors.length - 1),
    itemStyle: {
      color: "grey",
    },
    symbolSize: (value, params) => {
      fixPointSize(params);
    },
    label: {
      show: true,
      position: "top",
      formatter: (params) => {
        return anchorPrefix + (params.dataIndex + 1);
      },
      textStyle: { fontWeight: "bold", color: "black", fontSize: 14 },
    },
    tooltip: {
      show: true,
      trigger: "item",
      triggerOn: "mousemove",
      position: ["80%", "10%"],
      formatter: (params, ticket, callback) => {
        let title = smallCircle(params.color) + `&nbsp Anchor Point`;
        return buildTooltipDom(
          params,
          title,
          null,
          [[["x", "y"], params.value]],
          null
        );
      },
    },
    emphasis: { show: false },
  });
  // anchor lines
  series.push({
    type: "line",
    data: anchors,
    lineStyle: { color: "grey", width: 1, type: "solid" },
    tooltip: {
      show: true,
      trigger: "item",
      triggerOn: "mousemove",
      position: ["80%", "10%"],
      formatter: (params, ticket, callback) => {
        let title = smallCircleWithLine(params.color) + `&nbsp Anchor Line`;
        return buildTooltipDom(
          params,
          title,
          null,
          [[["x", "y"], params.value]],
          null
        );
      },
    },
    emphasis: { show: false },
  });
  // anchor circle
  series.push({
    type: "line",
    data: getCircle2D([0, 0], 1, 50),
    lineStyle: { color: "lightgrey", width: 1, type: "dashed" },
    symbol: "circle",
    symbolSize: 2,
    showSymbol: true,
    itemStyle: { color: "lightgrey" },
    tooltip: {
      show: true,
      trigger: "item",
      triggerOn: "mousemove",
      position: ["80%", "10%"],
      formatter: (params, ticket, callback) => {
        let title = smallCircleWithLine(params.color) + `&nbsp Anchor Boundary`;
        return buildTooltipDom(
          params,
          title,
          null,
          [[["x", "y"], params.value]],
          null
        );
      },
    },
    emphasis: { show: false },
  });
  return series;
};

/**
 *
 * @param {*} bounds
 * @param {*} prefix
 */
export var getRadialIndicators = (bounds, prefix) => {
  let cators = [];
  for (let i = 0; i < bounds[0].length; i++) {
    cators.push({
      name: prefix + (i + 1),
      min: bounds[0][i],
      max: bounds[1][i],
    });
  }
  return cators;
};
