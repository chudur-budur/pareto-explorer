
var data = {
    // data name 
    name: "DTLZ8",
    // number of objectives
    m: 4,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[0.0, 0.0, 0.0, -0.14984],[0.69547, 0.67238, 0.69217, 1.0]],
    // distribution of f
    distribution_f: [[0.0, 0.27542, 0.3320766128266028, 0.41552, 0.69547], [0.0, 0.27474, 0.32959382897862255, 0.41159, 0.67238], [0.0, 0.27556, 0.3309052826603319, 0.41108, 0.69217], [-0.14984, -0.11254, 0.05819053551068867, 0.032768, 1.0]],
    // number of variables/points
    n: 2105,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[0.0, 0.0, 0.0],[0.69547, 0.67238, 0.69217]],
    // distribution of x
    distribution_x: [[0.0, 0.27542, 0.3320766128266028, 0.41552, 0.69547], [0.0, 0.27474, 0.32959382897862255, 0.41159, 0.67238], [0.0, 0.27556, 0.3309052826603319, 0.41108, 0.69217]],
    // number of constraint functions
    t: 2105,
    // constraint function values
    g: require("./g.json"),
    // constrint function bounds
    bounds_g: [[0.00011255, 0.00043695, 0.00052477, 0.00016173],[2.9697, 2.9382, 2.9599, 0.634]],
    // distribution of g
    distribution_g: [[0.00011255, 0.19636, 0.839874965486935, 0.90765, 2.9697], [0.00043695, 0.18966, 0.8249605312114063, 0.88562, 2.9382], [0.00052477, 0.1951, 0.8336395127268376, 0.90911, 2.9599], [0.00016173, 0.037457, 0.17580010258907267, 0.18277, 0.634]],
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
    