
var data = {
    // data name 
    name: "CDEBMDK-NBI",
    // number of objectives
    m: 3,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[1.0978, 1.0978, 1.6772],[3.022, 3.022, 3.4412]],
    // distribution of f
    distribution_f: [[1.0978, 1.2934, 1.643266062917065, 1.8568, 3.022], [1.0978, 1.2934, 1.643266062917065, 1.8568, 3.022], [1.6772, 2.0204, 2.527615729265961, 3.0287, 3.4412]],
    // number of variables/points
    n: 1049,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[0.30716, 0.25883],[0.74053, 0.74117]],
    // distribution of x
    distribution_x: [[0.30716, 0.38835, 0.4761885700667307, 0.54254, 0.74053], [0.25883, 0.45017, 0.5, 0.54983, 0.74117]],
    // number of constraint functions
    t: 1049,
    // constraint function values
    g: require("./g.json"),
    // constrint function bounds
    bounds_g: [-2.2261,-0.0070837],
    // distribution of g
    distribution_g: [[-2.2261, -2.0162, -1.3628565180171592, -0.77342, -0.0070837]],
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
    