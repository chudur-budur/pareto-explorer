
var data = {
    // data name 
    name: "DTLZ2-NBI",
    // number of objectives
    m: 3,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[0.0, 0.0, 0.0],[1.0, 1.0, 1.0]],
    // distribution of f
    distribution_f: [[0.0, 0.17724, 0.4773377686868689, 0.7838425, 1.0], [0.0, 0.17724, 0.47733776868686906, 0.7838425, 1.0], [0.0, 0.17724, 0.47733776868686856, 0.7838425, 1.0]],
    // number of variables/points
    n: 990,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[0.0, 0.0],[1.0, 1.0]],
    // distribution of x
    distribution_x: [[0.0, 0.42652, 0.6432634666666676, 0.8865675000000001, 1.0], [0.0, 0.19282, 0.4994949222222222, 0.8067025000000001, 1.0]],
    // number of constraint functions
    t: 0,
    // constraint function values
    g: null,
    // constrint function bounds
    bounds_g: null,
    // distribution of g
    distribution_g: null,
    // cumulative constraint function values
    cv: null,
    // color by cv
    color_cv: null,
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
    