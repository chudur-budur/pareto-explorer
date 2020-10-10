var data = {
  // data name
  name: "CDEBMDK-NBI",
  // number of objectives
  m: 4,
  // f-values
  f: require("./f.json"),
  // bounds of f
  bounds_f: [
    [0.63913, 0.63913, 0.82605, 1.2069],
    [2.9859, 2.9859, 3.0829, 3.2705],
  ],
  // distribution of f
  distribution_f: [
    [0.63913, 1.060925, 1.4645305435847233, 1.816075, 2.9859],
    [0.63913, 1.060925, 1.4645305435847233, 1.816075, 2.9859],
    [0.82605, 1.3751, 1.8887253476983337, 2.349825, 3.0829],
    [1.2069, 1.7506, 2.200709794319297, 2.6250750000000003, 3.2705],
  ],
  // number of variables/points
  n: 2042,
  // design variables
  x: require("./x.json"),
  // bounds of x
  bounds_x: [
    [0.36329, 0.29775, 0.20483],
    [0.81961, 0.83994, 0.79517],
  ],
  // distribution of x
  distribution_x: [
    [0.36329, 0.47437, 0.5770408814887369, 0.6934449999999999, 0.81961],
    [0.29775, 0.42801, 0.5271545592556308, 0.60154, 0.83994],
    [0.20483, 0.44228, 0.5, 0.55772, 0.79517],
  ],
  // number of constraint functions
  t: 2042,
  // constraint function values
  g: require("./g.json"),
  // constrint function bounds
  bounds_g: [-2.1951, -0.00071003],
  // distribution of g
  distribution_g: [
    [-2.1951, -1.3308, -0.8963154334280118, -0.4101125, -0.00071003],
  ],
  // cumulative constraint function values
  cv: require("./cv.json"),
  // color by cv
  color_cv: require("./color-cv.json"),
  // centroid distances
  centroid_dist: require("./centroid-dist.json"),
  // color by centroid
  color_cd: require("./color-cd.json"),
  // knee indices
  muid: require("./muid.json"),
  // tradeoff values
  mu: require("./mu.json"),
  // indices except knees
  ptid: require("./ptid.json"),
  // depth contours
  depth_cv: require("./depth-cont-cvhull.json"),
  // palette anchor points
  palette_anchors: [
    [
      [1.0, 0.0, 1.0],
      [6.123233995736766e-17, 1.0, 1.0],
      [-1.0, 1.2246467991473532e-16, 1.0],
      [-1.8369701987210297e-16, -1.0, 1.0],
      [1.0, 0.0, 1.0],
    ],
    [
      [1.0, 0.0, 0.8],
      [6.123233995736766e-17, 1.0, 0.8],
      [-1.0, 1.2246467991473532e-16, 0.8],
      [-1.8369701987210297e-16, -1.0, 0.8],
      [1.0, 0.0, 0.8],
    ],
    [
      [1.0, 0.0, 0.6000000000000001],
      [6.123233995736766e-17, 1.0, 0.6000000000000001],
      [-1.0, 1.2246467991473532e-16, 0.6000000000000001],
      [-1.8369701987210297e-16, -1.0, 0.6000000000000001],
      [1.0, 0.0, 0.6000000000000001],
    ],
    [
      [1.0, 0.0, 0.4000000000000001],
      [6.123233995736766e-17, 1.0, 0.4000000000000001],
      [-1.0, 1.2246467991473532e-16, 0.4000000000000001],
      [-1.8369701987210297e-16, -1.0, 0.4000000000000001],
      [1.0, 0.0, 0.4000000000000001],
    ],
    [
      [1.0, 0.0, 0.20000000000000007],
      [6.123233995736766e-17, 1.0, 0.20000000000000007],
      [-1.0, 1.2246467991473532e-16, 0.20000000000000007],
      [-1.8369701987210297e-16, -1.0, 0.20000000000000007],
      [1.0, 0.0, 0.20000000000000007],
    ],
  ],
  // palette coordinates with radviz
  palette_radviz: require("./palette-radviz.json"),
  // palette coordinates with star-coordinates
  palette_starviz: require("./palette-starviz.json"),
  // polar anchor points
  polar_anchors: [
    [1.0, 0.0],
    [6.123233995736766e-17, 1.0],
    [-1.0, 1.2246467991473532e-16],
    [-1.8369701987210297e-16, -1.0],
    [1.0, 0.0],
  ],
  // radviz coordinates
  radviz: require("./radviz.json"),
  // star coordinates
  star: require("./star.json"),
};

export default data;
