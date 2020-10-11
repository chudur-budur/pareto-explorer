
var data = {
    // data name 
    name: "C2DTLZ2",
    // number of objectives
    m: 8,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[0.0022569, 0.0011723, 0.00056536, 0.00053759, 0.0052877, 0.0050182, 0.00086825, 0.0024328],[0.93287, 0.96787, 0.92535, 0.93725, 0.92531, 0.95063, 0.91277, 0.94722]],
    // distribution of f
    distribution_f: [[0.0022569, 0.28776, 0.3432576012775844, 0.40301, 0.93287], [0.0011723, 0.28375, 0.34014537175377557, 0.4016, 0.96787], [0.00056536, 0.28484, 0.33992130605342685, 0.40364, 0.92535], [0.00053759, 0.2859, 0.34257241423693285, 0.40268, 0.93725], [0.0052877, 0.28743, 0.3426389768641118, 0.40188, 0.92531], [0.0050182, 0.28716, 0.34264943967479755, 0.40291, 0.95063], [0.00086825, 0.28355, 0.3392162729500572, 0.39973, 0.91277], [0.0024328, 0.28734, 0.34151865619047633, 0.40292, 0.94722]],
    // number of variables/points
    n: 4305,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[0.20775, 0.22447, 0.18015, 0.13126, 0.028503, 0.045834, 0.0016289],[0.99845, 0.99945, 0.99663, 0.99649, 0.99892, 0.99959, 0.99484]],
    // distribution of x
    distribution_x: [[0.20775, 0.73599, 0.7768032706155642, 0.81446, 0.99845], [0.22447, 0.7197, 0.7619438118466892, 0.8024, 0.99945], [0.18015, 0.69231, 0.7387440278745626, 0.78267, 0.99663], [0.13126, 0.66224, 0.7110404506387922, 0.75745, 0.99649], [0.028503, 0.61614, 0.6723582260162618, 0.72874, 0.99892], [0.045834, 0.54986, 0.6150996195121962, 0.67767, 0.99959], [0.0016289, 0.42661, 0.5040212358188146, 0.5814, 0.99484]],
    // number of constraint functions
    t: 4305,
    // constraint function values
    g: require("./g.json"),
    // constrint function bounds
    bounds_g: [-0.18574,-7.445e-06],
    // distribution of g
    distribution_g: [[-0.18574, -0.025005, -0.017615515524506384, -0.0069871, -7.445e-06]],
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
    palette_anchors: [[[1.0, 0.0, 1.0], [0.7071067811865476, 0.7071067811865475, 1.0], [6.123233995736766e-17, 1.0, 1.0], [-0.7071067811865475, 0.7071067811865476, 1.0], [-1.0, 1.2246467991473532e-16, 1.0], [-0.7071067811865477, -0.7071067811865475, 1.0], [-1.8369701987210297e-16, -1.0, 1.0], [0.7071067811865475, -0.7071067811865477, 1.0], [1.0, 0.0, 1.0]], [[1.0, 0.0, 0.8], [0.7071067811865476, 0.7071067811865475, 0.8], [6.123233995736766e-17, 1.0, 0.8], [-0.7071067811865475, 0.7071067811865476, 0.8], [-1.0, 1.2246467991473532e-16, 0.8], [-0.7071067811865477, -0.7071067811865475, 0.8], [-1.8369701987210297e-16, -1.0, 0.8], [0.7071067811865475, -0.7071067811865477, 0.8], [1.0, 0.0, 0.8]], [[1.0, 0.0, 0.6000000000000001], [0.7071067811865476, 0.7071067811865475, 0.6000000000000001], [6.123233995736766e-17, 1.0, 0.6000000000000001], [-0.7071067811865475, 0.7071067811865476, 0.6000000000000001], [-1.0, 1.2246467991473532e-16, 0.6000000000000001], [-0.7071067811865477, -0.7071067811865475, 0.6000000000000001], [-1.8369701987210297e-16, -1.0, 0.6000000000000001], [0.7071067811865475, -0.7071067811865477, 0.6000000000000001], [1.0, 0.0, 0.6000000000000001]], [[1.0, 0.0, 0.4000000000000001], [0.7071067811865476, 0.7071067811865475, 0.4000000000000001], [6.123233995736766e-17, 1.0, 0.4000000000000001], [-0.7071067811865475, 0.7071067811865476, 0.4000000000000001], [-1.0, 1.2246467991473532e-16, 0.4000000000000001], [-0.7071067811865477, -0.7071067811865475, 0.4000000000000001], [-1.8369701987210297e-16, -1.0, 0.4000000000000001], [0.7071067811865475, -0.7071067811865477, 0.4000000000000001], [1.0, 0.0, 0.4000000000000001]], [[1.0, 0.0, 0.20000000000000007], [0.7071067811865476, 0.7071067811865475, 0.20000000000000007], [6.123233995736766e-17, 1.0, 0.20000000000000007], [-0.7071067811865475, 0.7071067811865476, 0.20000000000000007], [-1.0, 1.2246467991473532e-16, 0.20000000000000007], [-0.7071067811865477, -0.7071067811865475, 0.20000000000000007], [-1.8369701987210297e-16, -1.0, 0.20000000000000007], [0.7071067811865475, -0.7071067811865477, 0.20000000000000007], [1.0, 0.0, 0.20000000000000007]]],
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
    