
var data = {
    // data name 
    name: "DTLZ2",
    // number of objectives
    m: 3,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[0.00016254, 0.0003985, 0.00011643],[0.99686, 0.99898, 0.99997]],
    // distribution of f
    distribution_f: [[0.00016254, 0.30644, 0.51336406994, 0.7067625, 0.99686], [0.0003985, 0.3190825, 0.5155392887999999, 0.7258399999999999, 0.99898], [0.00011643, 0.3109225, 0.5176766835299996, 0.7179525, 0.99997]],
    // number of variables/points
    n: 1000,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[0.0045323, 0.00011651],[0.99993, 0.99964]],
    // distribution of x
    distribution_x: [[0.0045323, 0.4901575, 0.6300435572999997, 0.798725, 0.99993], [0.00011651, 0.3008125, 0.5018487817099999, 0.70829, 0.99964]],
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
    