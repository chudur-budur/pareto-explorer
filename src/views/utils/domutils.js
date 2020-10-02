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
 * @param {*} params
 * @param {*} emphasisData
 */
export var buildEmphasisString = (params, emphasisData) => {
  let dom = [];
  if (emphasisData) {
    for (let [prefix, value, format] of emphasisData) {
      if (format === "int") {
        dom.push(prefix + parseInt(value));
      } else {
        dom.push(prefix + parseFloat(value).toExponential(2));
      }
    }
  }
  return dom.length > 0 ? dom.join("\n") : "ID: " + params.dataIndex;
};
