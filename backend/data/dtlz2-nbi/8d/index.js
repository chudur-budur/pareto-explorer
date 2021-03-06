
var data = {
    // data name 
    name: "DTLZ2-NBI",
    // number of objectives
    m: 8,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],[1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]],
    // distribution of f
    distribution_f: [[0.0, 0.0, 0.22466466783216796, 0.33333, 1.0], [0.0, 0.0, 0.22466466783216796, 0.33333, 1.0], [0.0, 0.0, 0.22466466783216787, 0.33333, 1.0], [0.0, 0.0, 0.22466466783216785, 0.33333, 1.0], [0.0, 0.0, 0.22466466783216768, 0.33333, 1.0], [0.0, 0.0, 0.22466466783216787, 0.33333, 1.0], [0.0, 0.0, 0.2246646678321669, 0.33333, 1.0], [0.0, 0.0, 0.22466466783216846, 0.33333, 1.0]],
    // number of variables/points
    n: 3432,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],[1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]],
    // distribution of x
    distribution_x: [[0.0, 0.78365, 0.8438874213286769, 1.0, 1.0], [0.0, 0.73228, 0.8292953292540778, 1.0, 1.0], [0.0, 0.66667, 0.8084143210955772, 1.0, 1.0], [0.0, 0.60817, 0.774344472610725, 1.0, 1.0], [0.0, 0.5, 0.7129646124708625, 1.0, 1.0], [0.0, 0.20483, 0.5980591462703956, 1.0, 1.0], [0.0, 0.0, 0.38461538461538464, 1.0, 1.0]],
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
    palette_anchors: [[[1.0, 0.0, 1.0], [0.7071067811865476, 0.7071067811865475, 1.0], [6.123233995736766e-17, 1.0, 1.0], [-0.7071067811865475, 0.7071067811865476, 1.0], [-1.0, 1.2246467991473532e-16, 1.0], [-0.7071067811865477, -0.7071067811865475, 1.0], [-1.8369701987210297e-16, -1.0, 1.0], [0.7071067811865475, -0.7071067811865477, 1.0], [1.0, 0.0, 1.0]]],
    // palette coordinates with radviz
    palette_radviz: require("./palette-radviz.json"),
    // palette coordinates with star-coordinates
    palette_starviz: require("./palette-starviz.json"),
    // polar anchor points
    polar_anchors: [[1.0, 0.0], [0.7071067811865476, 0.7071067811865475], [6.123233995736766e-17, 1.0], [-0.7071067811865475, 0.7071067811865476], [-1.0, 1.2246467991473532e-16], [-0.7071067811865477, -0.7071067811865475], [-1.8369701987210297e-16, -1.0], [0.7071067811865475, -0.7071067811865477], [1.0, 0.0]],
    // radviz coordinates
    radviz: require("./radviz.json"),
    // star coordinates
    star: require("./star.json"),
};

export default data;
    