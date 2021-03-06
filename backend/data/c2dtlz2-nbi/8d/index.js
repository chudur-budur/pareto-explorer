
var data = {
    // data name 
    name: "C2DTLZ2-NBI",
    // number of objectives
    m: 8,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],[1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]],
    // distribution of f
    distribution_f: [[0.0, 0.0, 0.1949175619834734, 0.18257, 1.0], [0.0, 0.0, 0.19491756198347338, 0.18257, 1.0], [0.0, 0.0, 0.1949175619834734, 0.18257, 1.0], [0.0, 0.0, 0.19491756198347343, 0.18257, 1.0], [0.0, 0.0, 0.1949175619834733, 0.18257, 1.0], [0.0, 0.0, 0.1949175619834731, 0.18257, 1.0], [0.0, 0.0, 0.1949175619834725, 0.18257, 1.0], [0.0, 0.0, 0.1949175619834709, 0.18257, 1.0]],
    // number of variables/points
    n: 3872,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],[1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]],
    // distribution of x
    distribution_x: [[0.0, 0.88311, 0.8546230885846984, 1.0, 1.0], [0.0, 0.80502, 0.83791265702481, 1.0, 1.0], [0.0, 0.76609, 0.8149155823863671, 1.0, 1.0], [0.0, 0.70483, 0.7787823522727282, 1.0, 1.0], [0.0, 0.5, 0.7166437228822321, 1.0, 1.0], [0.0, 0.12567, 0.6027364369834712, 1.0, 1.0], [0.0, 0.0, 0.38997935511363635, 1.0, 1.0]],
    // number of constraint functions
    t: 3872,
    // constraint function values
    g: require("./g.json"),
    // constrint function bounds
    bounds_g: [-0.25,-0.017767],
    // distribution of g
    distribution_g: [[-0.25, -0.14737, -0.09018563223140495, -0.017767, -0.017767]],
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
    