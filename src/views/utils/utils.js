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

export var findClosestAnchorPoint = (point, anchors) => {
  let min = Number.POSITIVE_INFINITY,
    id = -1;
  for (let i = 0; i < anchors.length; i++) {
    let d = Math.sqrt(
      anchors[i]
        .map((v, j) => {
          return Math.pow(point[j] - v, 2.0);
        })
        .reduce((a, b) => a + b, 0)
    );
    if (d <= min) {
      min = d;
      id = i;
    }
  }
  return id;
};
