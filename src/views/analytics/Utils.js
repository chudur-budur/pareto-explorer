/**
 *
 * @param {*} a
 */
export function transpose(a) {
  // Calculate the width and height of the Array
  let w = a.length || 0;
  let h = a[0] instanceof Array ? a[0].length : 0;
  // In case it is a zero matrix, no transpose routine needed.
  if (h === 0 || w === 0) {
    return [];
  }

  var t = [];
  // Loop through every item in the outer array (height)
  for (let i = 0; i < h; i++) {
    // Insert a new row (array)
    t[i] = [];
    // Loop through every item per item in outer array (width)
    for (let j = 0; j < w; j++) {
      // Save transposed data.
      t[i][j] = a[j][i];
    }
  }
  return t;
}

/**
 *
 * @param {*} vec
 */
export var sortVector = (vec) => {
  let vec_ = vec.slice().sort(function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  });
  return vec_;
};

/**
 *
 * @param {*} indices
 * @param {*} data
 */
export var sortIndices = (indices, data) => {
  let indices_ = indices.slice().sort(function (a, b) {
    return data[a] < data[b] ? -1 : data[a] > data[b] ? 1 : 0;
  });
  return indices_;
};

/**
 *
 * @param {*} dataIndex
 * @param {*} categoryIndex
 */
export var mapIndex = (dataIndex, categoryIndex) => {
  return categoryIndex[dataIndex];
};

/**
 * Select rows of arr indexed by idx. We are doing this with loop
 * since it's faster than map.
 * @param {Array} arr
 * @param {Array} idx
 */
export function mapIndices(arr, idx) {
  let arr_ = new Array(idx.length);
  for (let i = 0; i < idx.length; i++) {
    arr_[i] = arr[idx[i]];
  }
  return arr_;
}

/**
 * Select rows of arr indexed by idx then suffle the columns
 * according to col. We are doing this with loop since it's
 * faster than map.
 * @param {Array} arr
 * @param {Array} idx
 * @param {Array} col
 */
export function mapIndicesAndSelectColumns(arr, idx, col) {
  let arr_ = new Array(idx.length);
  for (let i = 0; i < idx.length; i++) {
    arr_[i] = [arr[idx[i]][col[0]], arr[idx[i]][col[1]], arr[idx[i]][col[2]]];
  }
  return arr_;
}

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
 * @param {*} vec
 * @param {*} prefix
 * @param {*} format
 */
export var formatVecToDom = (vec, prefix = `<b>f</b>`, format = "vertical") => {
  let dom = ``;
  if (Array.isArray(vec)) {
    if (format === "vertical") {
      dom = !Array.isArray(prefix)
        ? vec
            .map((v, i) => {
              return (
                `${prefix}<sub>${i + 1}</sub>&nbsp;:&nbsp;` +
                `${parseFloat(v).toExponential(2)}`
              );
            })
            .join(`<br/>`)
        : vec
            .map((v, i) => {
              return `${prefix[i]}&nbsp;:&nbsp;${parseFloat(v).toExponential(
                2
              )}`;
            })
            .join(`<br/>`);
    } else {
      let prefix_ = !Array.isArray(prefix)
        ? `[` +
          prefix
            .map((v, i) => {
              return `${prefix}<sub>${i + 1}</sub>`;
            })
            .join(", ") +
          `]&nbsp:`
        : `[` +
          prefix
            .map((v, i) => {
              return `${prefix[i]}`;
            })
            .join(", ") +
          `]`;
      let values =
        `[` +
        vec
          .map((v, i) => {
            return `${parseFloat(v).toFixed(1)}`;
          })
          .join(", ") +
        `]`;
      dom = prefix_ + `&nbsp;:&nbsp;` + values;
    }
  } else {
    dom = `${prefix}&nbsp;:&nbsp${vec}`;
  }
  return dom;
};

/**
 *
 * @param {*} color
 */
export var smallCircle = (color = `green`) => {
  let circle =
    `<circle cx="5" cy="5" r="5" stroke-width="1"` +
    ` stroke=` +
    color +
    ` fill=` +
    color +
    ` />`;
  return `<svg height="10" width="15">` + circle + `</svg>`;
};

/**
 *
 * @param {*} color
 */
export var smallCircleWithLine = (color = `green`) => {
  let circle =
    `<circle cx="10" cy="5" r="5" stroke-width="1"` +
    ` stroke=` +
    color +
    ` fill=` +
    color +
    ` />`;
  let line =
    `<line x1="0" y1="5" x2="20" y2="5" style="stroke:` +
    `dark` +
    color +
    `;stroke-width:2" />`;
  return `<svg height="10" width="20">` + circle + line + `</svg>`;
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
 * @param {*} params
 * @param {*} emphasisData
 */
export var buildEmphasisString = (params, emphasisData) => {
  let dom = [];
  if (emphasisData) {
    for (let [prefix, value] of emphasisData) {
      dom.push(prefix + ": " + value.toExponential(2));
    }
  }
  return dom.length > 0 ? dom.join("\n") : "ID: " + params.dataIndex;
};

/**
 *
 * @param {*} params
 * @param {*} title
 * @param {*} values
 * @param {*} extraValues
 * @param {*} globalIndices
 */
export var buildTooltipDom = (
  params,
  title,
  values,
  extraValues,
  globalIndices
) => {
  let dom = [];
  let id = globalIndices
    ? `ID&nbsp;:&nbsp;${globalIndices[params.dataIndex]}`
    : `ID&nbsp;:&nbsp;${params.dataIndex}`;
  dom.push(title ? title : smallCircle(params.color) + id);
  if (values && values.length > 0) {
    for (let [pfx, data] of values) {
      let expr = formatVecToDom(data, pfx);
      dom.push(expr);
    }
  }
  if (extraValues && extraValues.length > 0) {
    for (let [pfx, data] of extraValues) {
      let expr = formatVecToDom(data, pfx, "horizontal");
      dom.push(expr);
    }
  }
  dom = dom.join(`<br/>`);
  return `<div>` + dom + `</div>`;
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
export var pushAnchors2D = (series, anchors, anchorPrefix = "f", props) => {
  // anchor points
  series.push({
    type: "scatter",
    data: anchors.slice(0, anchors.length - 1),
    itemStyle: {
      color: "grey",
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
  /* series[0].symbolSize = (value, params) => {
      getPointSizeFromMu(params, props.psf, props.ksf, props.pf);
    };
    series[1].symbolSize = (value, params) => {
      getPointSizeFromMu(params, props.psf, props.ksf, props.pf);
    }; */
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
