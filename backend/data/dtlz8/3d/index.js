
var data = {
    // data name 
    name: "DTLZ8",
    // number of objectives
    m: 3,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[0.0, 0.0, 0.00022787],[0.65746, 0.65608, 1.0]],
    // distribution of f
    distribution_f: [[0.0, 0.3257525, 0.38765951830443157, 0.470135, 0.65746], [0.0, 0.32907000000000003, 0.3892038824662817, 0.47201, 0.65608], [0.00022787, 0.03963925, 0.13589398301541444, 0.143915, 1.0]],
    // number of variables/points
    n: 1038,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[0.0, 0.0],[0.65746, 0.65608]],
    // distribution of x
    distribution_x: [[0.0, 0.3257525, 0.38765951830443157, 0.470135, 0.65746], [0.0, 0.32907000000000003, 0.3892038824662817, 0.47201, 0.65608]],
    // number of constraint functions
    t: 1038,
    // constraint function values
    g: require("./g.json"),
    // constrint function bounds
    bounds_g: [[4.0861e-05, 0.00028969, 0.00022787],[1.9898, 1.9924, 0.49372]],
    // distribution of g
    distribution_g: [[4.0861e-05, 0.1416225, 0.49056790034778486, 0.5698525, 1.9898], [0.00028969, 0.1588975, 0.49545158573217746, 0.5761050000000001, 1.9924], [0.00022787, 0.03963925, 0.12288531249518325, 0.143915, 0.49372]],
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
    