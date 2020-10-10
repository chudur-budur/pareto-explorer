
var data = {
    // data name 
    name: "C2DTLZ2-NBI",
    // number of objectives
    m: 4,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[0.0, 0.0, 0.0, 0.0],[1.0, 1.0, 1.0, 1.0]],
    // distribution of f
    distribution_f: [[0.0, 0.085358, 0.3568914606854843, 0.54815, 1.0], [0.0, 0.085358, 0.3568914606854842, 0.54815, 1.0], [0.0, 0.085358, 0.35689146068548433, 0.54815, 1.0], [0.0, 0.085358, 0.3568914606854836, 0.54815, 1.0]],
    // number of variables/points
    n: 1984,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[0.0, 0.0, 0.0],[1.0, 1.0, 1.0]],
    // distribution of x
    distribution_x: [[0.0, 0.63066, 0.7255979193548412, 0.94559, 1.0], [0.0, 0.28213, 0.6501872016129038, 0.9306300000000001, 1.0], [0.0, 0.11983, 0.49445558165322495, 0.87433, 1.0]],
    // number of constraint functions
    t: 1984,
    // constraint function values
    g: require("./g.json"),
    // constrint function bounds
    bounds_g: [-0.25,-0.0026187],
    // distribution of g
    distribution_g: [[-0.25, -0.18526, -0.12279052782258063, -0.0564495, -0.0026187]],
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
    