
var data = {
    // data name 
    name: "C2DTLZ2-NBI",
    // number of objectives
    m: 3,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[0.0, 0.0, 0.0],[1.0, 1.0, 1.0]],
    // distribution of f
    distribution_f: [[0.0, 0.10733, 0.43780926447876456, 0.93571, 1.0], [0.0, 0.10733, 0.43780926447876445, 0.93571, 1.0], [0.0, 0.10733, 0.4378092644787642, 0.93571, 1.0]],
    // number of variables/points
    n: 1036,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[0.0, 0.0],[1.0, 1.0]],
    // distribution of x
    distribution_x: [[0.0, 0.22953, 0.6492613241312745, 0.93154, 1.0], [0.0, 0.1283775, 0.49951732461389975, 0.8701775, 1.0]],
    // number of constraint functions
    t: 1036,
    // constraint function values
    g: require("./g.json"),
    // constrint function bounds
    bounds_g: [-0.16,-0.0020412],
    // distribution of g
    distribution_g: [[-0.16, -0.13064, -0.08416182779922779, -0.035989, -0.0020412]],
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
    