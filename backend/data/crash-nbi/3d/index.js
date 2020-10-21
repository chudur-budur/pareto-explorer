
var data = {
    // data name 
    name: "CRASH-NBI",
    // number of objectives
    m: 3,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[1661.7, 6.1534, 0.043273],[1690.2, 10.2, 0.26258]],
    // distribution of f
    distribution_f: [[1661.7, 1665.3, 1670.2744536548614, 1674.4, 1690.2], [6.1534, 7.08345, 7.62435003767898, 8.18845, 10.2], [0.043273, 0.0738705, 0.10607336171816135, 0.10100500000000001, 0.26258]],
    // number of variables/points
    n: 1327,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[1.0, 1.0, 1.0, 1.0, 1.0],[2.9908, 3.0, 3.0, 2.3411, 2.9995]],
    // distribution of x
    distribution_x: [[1.0, 1.0, 1.0174829691032372, 1.0001, 2.9908], [1.0, 1.31455, 2.2363625470987154, 2.9998, 3.0], [1.0, 1.0, 1.321399924642048, 1.0002, 3.0], [1.0, 1.0001, 1.0873750565184588, 1.0817999999999999, 2.3411], [1.0, 1.2610000000000001, 1.7880631499623203, 2.2633, 2.9995]],
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
    