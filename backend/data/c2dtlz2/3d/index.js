
var data = {
    // data name 
    name: "C2DTLZ2",
    // number of objectives
    m: 3,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[0.00027426, 2.4951e-05, 3.5403e-05],[0.99968, 0.99941, 0.99947]],
    // distribution of f
    distribution_f: [[0.00027426, 0.23751000000000003, 0.4942295774033154, 0.6501775, 0.99968], [2.4951e-05, 0.26405, 0.5082106550193372, 0.6558225, 0.99941], [3.5403e-05, 0.27142750000000004, 0.5079344863011049, 0.6614575, 0.99947]],
    // number of variables/points
    n: 1086,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[0.020663, 0.00017864],[0.99998, 0.99998]],
    // distribution of x
    distribution_x: [[0.020663, 0.5398799999999999, 0.6270465994475132, 0.8250075, 0.99998], [0.00017864, 0.36116, 0.4915830699263349, 0.6134725000000001, 0.99998]],
    // number of constraint functions
    t: 1086,
    // constraint function values
    g: require("./g.json"),
    // constrint function bounds
    bounds_g: [-0.15937,-8.3467e-06],
    // distribution of g
    distribution_g: [[-0.15937, -0.077071, -0.049893247363443825, -0.017225749999999998, -8.3467e-06]],
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
    