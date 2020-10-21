
var data = {
    // data name 
    name: "CRASH-C1-NBI",
    // number of objectives
    m: 3,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[1670.2, 6.1534, 0.16426],[1684.3, 6.9416, 0.26258]],
    // distribution of f
    distribution_f: [[1670.2, 1675.0, 1677.4142335766421, 1680.0, 1684.3], [6.1534, 6.4173, 6.609851094890506, 6.809799999999999, 6.9416], [0.16426, 0.187095, 0.2074503649635038, 0.22526249999999998, 0.26258]],
    // number of variables/points
    n: 274,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[1.0, 2.9097, 1.8477, 1.0, 1.0003],[1.0154, 3.0, 3.0, 1.018, 2.9992]],
    // distribution of x
    distribution_x: [[1.0, 1.0, 1.0005368613138694, 1.0001, 1.0154], [2.9097, 2.9974, 2.9959700729927023, 2.9999, 3.0], [1.8477, 2.323025, 2.5562941605839415, 2.8176, 3.0], [1.0, 1.0, 1.0010908759124098, 1.001, 1.018], [1.0003, 1.3377249999999998, 1.8867755474452554, 2.382775, 2.9992]],
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
    