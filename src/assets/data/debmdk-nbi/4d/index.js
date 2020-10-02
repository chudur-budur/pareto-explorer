
var data = {
    // data name 
    name: "DEBMDK-NBI",
    // number of objectives
    m: 4,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[0.0, 0.0, 0.0, 0.0],[9.5, 9.5, 9.5, 9.5]],
    // distribution of f
    distribution_f: [[0.0, 0.73605, 2.6758423126232707, 4.1209, 9.5], [0.0, 0.73605, 2.6758423126232707, 4.1209, 9.5], [0.0, 0.7516, 2.4836662031558165, 3.7134, 9.5], [0.0, 0.524395, 2.2380653895463523, 3.3604, 9.5]],
    // number of variables/points
    n: 2028,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[0.0, 0.0, 0.0],[1.0, 1.0, 1.0]],
    // distribution of x
    distribution_x: [[0.0, 0.57917, 0.7375680251479324, 0.94898, 1.0], [0.0, 0.4207275, 0.6521200700197239, 0.91688, 1.0], [0.0, 0.14438, 0.4943293604536485, 0.84404, 1.0]],
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
    