
var data = {
    // data name 
    name: "CARSIDE-NBI",
    // number of objectives
    m: 3,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[23.627, 3.5853, 10.611],[42.764, 4.0, 12.519]],
    // distribution of f
    distribution_f: [[23.627, 30.3835, 33.691910472972964, 37.2005, 42.764], [3.5853, 3.6423249999999996, 3.744076182432432, 3.8283500000000004, 4.0], [10.611, 10.946499999999999, 11.360405405405398, 11.724499999999999, 12.519]],
    // number of variables/points
    n: 592,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[0.5, 1.2162, 0.5, 0.68618, 0.875, 0.62058, 0.4],[1.5, 1.35, 1.5, 1.5, 2.625, 1.2, 1.2]],
    // distribution of x
    distribution_x: [[0.5, 0.500285, 0.8464495439189182, 1.264325, 1.5], [1.2162, 1.3390749999999998, 1.3267591216216232, 1.3498, 1.35], [0.5, 0.67336, 1.0084849493243255, 1.32205, 1.5], [0.68618, 1.4644499999999998, 1.4406806925675695, 1.4999, 1.5], [0.875, 2.03985, 2.276434864864868, 2.6245, 2.625], [0.62058, 1.1997, 1.1871262837837857, 1.2, 1.2], [0.4, 0.40025, 0.6763389864864867, 1.157025, 1.2]],
    // number of constraint functions
    t: 0,
    // constraint function values
    g: null,
    // constrint function bounds
    bounds_g: null,
    // distribution of g
    distribution_g: null,
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
    