
var data = {
    // data name 
    name: "CDEBMDK",
    // number of objectives
    m: 3,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[1.103, 1.0989, 1.6805],[2.97, 2.9966, 3.4558]],
    // distribution of f
    distribution_f: [[1.103, 1.4222000000000001, 1.7858348498635133, 2.1018499999999998, 2.97], [1.0989, 1.3628, 1.759330118289354, 2.0883, 2.9966], [1.6805, 1.86905, 2.3192959963603275, 2.7333, 3.4558]],
    // number of variables/points
    n: 1099,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[0.30578, 0.26205],[0.74092, 0.74171]],
    // distribution of x
    distribution_x: [[0.30578, 0.42383499999999996, 0.524658671519563, 0.632165, 0.74092], [0.26205, 0.46682, 0.5052405368516828, 0.53964, 0.74171]],
    // number of constraint functions
    t: 1099,
    // constraint function values
    g: require("./g.json"),
    // constrint function bounds
    bounds_g: [-2.2259,-0.0002364],
    // distribution of g
    distribution_g: [[-2.2259, -2.1071, -1.5011567341219292, -0.948995, -0.0002364]],
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
    