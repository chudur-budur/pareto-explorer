
var data = {
    // data name 
    name: "DTLZ8-NBI",
    // number of objectives
    m: 4,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[0.0, 0.0, 0.0, -0.13953],[0.67442, 0.67442, 0.67442, 1.0]],
    // distribution of f
    distribution_f: [[0.0, 0.27907, 0.3290512212643726, 0.4186, 0.67442], [0.0, 0.27907, 0.32905122126436526, 0.4186, 0.67442], [0.0, 0.27907, 0.3290512212643654, 0.4186, 0.67442], [-0.13953, -0.10465, 0.06152487164750966, 0.034884, 1.0]],
    // number of variables/points
    n: 2088,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[0.0, 0.0, 0.0],[0.67442, 0.67442, 0.67442]],
    // distribution of x
    distribution_x: [[0.0, 0.27907, 0.3290512212643726, 0.4186, 0.67442], [0.0, 0.27907, 0.32905122126436526, 0.4186, 0.67442], [0.0, 0.27907, 0.3290512212643654, 0.4186, 0.67442]],
    // number of constraint functions
    t: 2088,
    // constraint function values
    g: require("./g.json"),
    // constrint function bounds
    bounds_g: [[0.0, 0.0, 0.0, 0.010465],[3.0, 3.0, 3.0, 0.65]],
    // distribution of g
    distribution_g: [[0.0, 0.18605, 0.842304940613026, 0.9186, 3.0], [0.0, 0.18605, 0.8423049406130229, 0.9186, 3.0], [0.0, 0.18605, 0.8423049406130223, 0.9186, 3.0], [0.010465, 0.045349, 0.181542470306516, 0.18488, 0.65]],
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
    