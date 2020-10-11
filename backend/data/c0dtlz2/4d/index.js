
var data = {
    // data name 
    name: "C0DTLZ2",
    // number of objectives
    m: 4,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[1.6146e-05, 1.0569e-05, 8.1076e-06, 0.00049308],[0.99867, 0.99413, 0.99989, 1.0]],
    // distribution of f
    distribution_f: [[1.6146e-05, 0.0570315, 0.29637640881577637, 0.495635, 0.99867], [1.0569e-05, 0.0584825, 0.2960169257059418, 0.48994000000000004, 0.99413], [8.1076e-06, 0.13211499999999998, 0.4685879363742388, 0.749385, 0.99989], [0.00049308, 0.25926, 0.5128761536145777, 0.707875, 1.0]],
    // number of variables/points
    n: 2003,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[4.2323e-05, 0.0006229, 0.00093724],[0.99969, 0.99973, 0.99967]],
    // distribution of x
    distribution_x: [[4.2323e-05, 0.49931000000000003, 0.602617484614578, 0.83304, 0.99969], [0.0006229, 0.24927, 0.4976731006989521, 0.7475350000000001, 0.99973], [0.00093724, 0.250935, 0.4997459998701952, 0.7479, 0.99967]],
    // number of constraint functions
    t: 2003,
    // constraint function values
    g: require("./g.json"),
    // constrint function bounds
    bounds_g: [-0.73415,-7.2429e-06],
    // distribution of g
    distribution_g: [[-0.73415, -0.353695, -0.20429503442730904, -0.011464499999999999, -7.2429e-06]],
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
    palette_anchors: [[[1.0, 0.0, 1.0], [6.123233995736766e-17, 1.0, 1.0], [-1.0, 1.2246467991473532e-16, 1.0], [-1.8369701987210297e-16, -1.0, 1.0], [1.0, 0.0, 1.0]], [[1.0, 0.0, 0.8], [6.123233995736766e-17, 1.0, 0.8], [-1.0, 1.2246467991473532e-16, 0.8], [-1.8369701987210297e-16, -1.0, 0.8], [1.0, 0.0, 0.8]], [[1.0, 0.0, 0.6000000000000001], [6.123233995736766e-17, 1.0, 0.6000000000000001], [-1.0, 1.2246467991473532e-16, 0.6000000000000001], [-1.8369701987210297e-16, -1.0, 0.6000000000000001], [1.0, 0.0, 0.6000000000000001]], [[1.0, 0.0, 0.4000000000000001], [6.123233995736766e-17, 1.0, 0.4000000000000001], [-1.0, 1.2246467991473532e-16, 0.4000000000000001], [-1.8369701987210297e-16, -1.0, 0.4000000000000001], [1.0, 0.0, 0.4000000000000001]], [[1.0, 0.0, 0.20000000000000007], [6.123233995736766e-17, 1.0, 0.20000000000000007], [-1.0, 1.2246467991473532e-16, 0.20000000000000007], [-1.8369701987210297e-16, -1.0, 0.20000000000000007], [1.0, 0.0, 0.20000000000000007]]],
    // palette coordinates with radviz
    palette_radviz: require("./palette-radviz.json"),
    // palette coordinates with star-coordinates
    palette_starviz: require("./palette-starviz.json"),
    // polar anchor points
    polar_anchors: [[1.0, 0.0], [6.123233995736766e-17, 1.0], [-1.0, 1.2246467991473532e-16], [-1.8369701987210297e-16, -1.0], [1.0, 0.0]],
    // radviz coordinates
    radviz: require("./radviz.json"),
    // star coordinates
    star: require("./star.json"),
};

export default data;
    