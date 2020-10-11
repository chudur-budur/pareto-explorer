
var data = {
    // data name 
    name: "DEBMDK-ALL",
    // number of objectives
    m: 8,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[0.00013207, 5.0306e-06, 0.0013242, 0.00076277, 0.00049682, 0.00022166, 0.00016086, 0.0001205],[7.2492, 7.1985, 5.9676, 6.8054, 6.1291, 5.4455, 5.801, 5.5592]],
    // distribution of f
    distribution_f: [[0.00013207, 0.890085, 1.8148033962424925, 2.6030499999999996, 7.2492], [5.0306e-06, 0.910215, 1.8108550074576528, 2.5823, 7.1985], [0.0013242, 0.9286775, 1.7838771757249998, 2.5496999999999996, 5.9676], [0.00076277, 0.9356774999999999, 1.7696510248425026, 2.4997, 6.8054], [0.00049682, 0.9643949999999999, 1.761222800155006, 2.4884500000000003, 6.1291], [0.00022166, 0.9654075, 1.7540485681900033, 2.4635499999999997, 5.4455], [0.00016086, 0.9689949999999999, 1.7509287750649982, 2.441825, 5.801], [0.0001205, 0.9837125, 1.7409622494499981, 2.4423000000000004, 5.5592]],
    // number of variables/points
    n: 4000,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[0.31681, 0.3672, 0.22094, 0.16829, 0.079379, 0.014627, 6.1088e-05],[0.99999, 0.99998, 0.99997, 0.9999, 0.99988, 0.99979, 1.0]],
    // distribution of x
    distribution_x: [[0.31681, 0.704035, 0.7968914550000035, 0.8943375, 0.99999], [0.3672, 0.6849274999999999, 0.7809272774999991, 0.885785, 0.99998], [0.22094, 0.6581675, 0.7609197174999993, 0.8734124999999999, 0.99997], [0.16829, 0.6219075, 0.733913490000001, 0.8598125, 0.9999], [0.079379, 0.5762075, 0.696215027249998, 0.83965, 0.99988], [0.014627, 0.49383750000000004, 0.6325949964999981, 0.7989025000000001, 0.99979], [6.1088e-05, 0.294255, 0.5006643593170009, 0.70921, 1.0]],
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
    