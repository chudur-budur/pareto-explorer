
var data = {
    // data name 
    name: "CRASH-C2-NBI",
    // number of objectives
    m: 3,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[1661.7, 6.9521, 0.043273],[1690.2, 10.2, 0.107]],
    // distribution of f
    distribution_f: [[1661.7, 1664.8, 1668.4166191832862, 1671.0, 1690.2], [6.9521, 7.522, 7.888331718898389, 8.2406, 10.2], [0.043273, 0.071847, 0.07969416049382713, 0.086725, 0.107]],
    // number of variables/points
    n: 1053,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[1.0, 1.0, 1.0, 1.0, 1.0],[2.9908, 3.0, 1.0052, 2.3411, 2.9995]],
    // distribution of x
    distribution_x: [[1.0, 1.0, 1.0218924976258281, 1.0002, 2.9908], [1.0, 1.235, 2.038705887939222, 2.9996, 3.0], [1.0, 1.0, 1.0000694207027536, 1.0, 1.0052], [1.0, 1.0001, 1.1098269705603017, 1.1581, 2.3411], [1.0, 1.2418, 1.7623773029439698, 2.2164, 2.9995]],
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
    