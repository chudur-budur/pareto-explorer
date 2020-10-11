
var data = {
    // data name 
    name: "C0DTLZ2",
    // number of objectives
    m: 3,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[5.9862e-05, 0.00011872, 5.8479e-05],[0.99853, 0.99903, 1.0]],
    // distribution of f
    distribution_f: [[5.9862e-05, 0.130195, 0.4611058613792417, 0.7492225, 0.99853], [0.00011872, 0.13935, 0.47339435715568806, 0.757355, 0.99903], [5.8479e-05, 0.259535, 0.5131016893003993, 0.708145, 1.0]],
    // number of variables/points
    n: 1002,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[8.4647e-05, 0.00044943],[0.99996, 0.99946]],
    // distribution of x
    distribution_x: [[8.4647e-05, 0.49906749999999994, 0.6023877386696601, 0.8328575, 0.99996], [0.00044943, 0.241395, 0.4901331285528944, 0.7355825, 0.99946]],
    // number of constraint functions
    t: 1002,
    // constraint function values
    g: require("./g.json"),
    // constrint function bounds
    bounds_g: [-0.7349,-6.527e-06],
    // distribution of g
    distribution_g: [[-0.7349, -0.3533575, -0.2041947129770459, -0.011379, -6.527e-06]],
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
    palette_anchors: [[[1.0, 0.0, 1.0], [-0.4999999999999998, 0.8660254037844388, 1.0], [-0.5000000000000004, -0.8660254037844384, 1.0], [1.0, 0.0, 1.0]], [[1.0, 0.0, 0.8], [-0.4999999999999998, 0.8660254037844388, 0.8], [-0.5000000000000004, -0.8660254037844384, 0.8], [1.0, 0.0, 0.8]], [[1.0, 0.0, 0.6000000000000001], [-0.4999999999999998, 0.8660254037844388, 0.6000000000000001], [-0.5000000000000004, -0.8660254037844384, 0.6000000000000001], [1.0, 0.0, 0.6000000000000001]], [[1.0, 0.0, 0.4000000000000001], [-0.4999999999999998, 0.8660254037844388, 0.4000000000000001], [-0.5000000000000004, -0.8660254037844384, 0.4000000000000001], [1.0, 0.0, 0.4000000000000001]], [[1.0, 0.0, 0.20000000000000007], [-0.4999999999999998, 0.8660254037844388, 0.20000000000000007], [-0.5000000000000004, -0.8660254037844384, 0.20000000000000007], [1.0, 0.0, 0.20000000000000007]]],
    // palette coordinates with radviz
    palette_radviz: require("./palette-radviz.json"),
    // palette coordinates with star-coordinates
    palette_starviz: require("./palette-starviz.json"),
    // polar anchor points
    polar_anchors: [[1.0, 0.0], [-0.4999999999999998, 0.8660254037844388], [-0.5000000000000004, -0.8660254037844384], [1.0, 0.0]],
    // radviz coordinates
    radviz: require("./radviz.json"),
    // star coordinates
    star: require("./star.json"),
};

export default data;
    