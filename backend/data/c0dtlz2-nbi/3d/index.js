
var data = {
    // data name 
    name: "C0DTLZ2-NBI",
    // number of objectives
    m: 3,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[0.0, 0.0, 0.0],[1.0, 1.0, 1.0]],
    // distribution of f
    distribution_f: [[0.0, 0.198495, 0.535925197355035, 0.8483350000000001, 1.0], [0.0, 0.198495, 0.535925197355035, 0.8483350000000001, 1.0], [0.0, 0.124215, 0.3586820020345883, 0.55705, 1.0]],
    // number of variables/points
    n: 983,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[0.0, 0.0],[1.0, 1.0]],
    // distribution of x
    distribution_x: [[0.0, 0.62387, 0.7441209399796537, 0.920715, 1.0], [0.0, 0.18769999999999998, 0.49949133367243137, 0.811565, 1.0]],
    // number of constraint functions
    t: 983,
    // constraint function values
    g: require("./g.json"),
    // constrint function bounds
    bounds_g: [-0.735,-5.572e-05],
    // distribution of g
    distribution_g: [[-0.735, -0.535535, -0.3158811957660224, -0.081609, -5.572e-05]],
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
    