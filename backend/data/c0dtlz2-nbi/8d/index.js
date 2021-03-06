
var data = {
    // data name 
    name: "C0DTLZ2-NBI",
    // number of objectives
    m: 8,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],[1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]],
    // distribution of f
    distribution_f: [[0.0, 0.0, 0.23286628616352276, 0.33333, 1.0], [0.0, 0.0, 0.23286628616352276, 0.33333, 1.0], [0.0, 0.0, 0.23286628616352267, 0.33333, 1.0], [0.0, 0.0, 0.23286628616352265, 0.33333, 1.0], [0.0, 0.0, 0.23286628616352245, 0.33333, 1.0], [0.0, 0.0, 0.23286628616352267, 0.33333, 1.0], [0.0, 0.0, 0.2328662861635216, 0.33333, 1.0], [0.0, 0.0, 0.17594627044025335, 0.30151, 1.0]],
    // number of variables/points
    n: 3180,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],[1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]],
    // distribution of x
    distribution_x: [[0.0, 0.80502, 0.8825051603773595, 1.0, 1.0], [0.0, 0.75325, 0.8285659654088013, 1.0, 1.0], [0.0, 0.66667, 0.8080452672956029, 1.0, 1.0], [0.0, 0.60817, 0.7747792924528322, 1.0, 1.0], [0.0, 0.5, 0.71489329245283, 1.0, 1.0], [0.0, 0.20483, 0.6017741352201251, 1.0, 1.0], [0.0, 0.0, 0.3888364779874214, 1.0, 1.0]],
    // number of constraint functions
    t: 3180,
    // constraint function values
    g: require("./g.json"),
    // constrint function bounds
    bounds_g: [-0.735,-0.0015115],
    // distribution of g
    distribution_g: [[-0.735, -0.735, -0.5093348177358491, -0.30429, -0.0015115]],
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
    