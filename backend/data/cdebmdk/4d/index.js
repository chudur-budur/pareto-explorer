
var data = {
    // data name 
    name: "CDEBMDK",
    // number of objectives
    m: 4,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[0.63443, 0.6173, 0.80379, 1.2024],[2.9771, 2.975, 3.0917, 3.286]],
    // distribution of f
    distribution_f: [[0.63443, 1.2021, 1.6273481281533835, 2.0587750000000002, 2.9771], [0.6173, 1.1871749999999999, 1.6207875479313822, 2.055875, 2.975], [0.80379, 1.5724500000000001, 1.9726009939455074, 2.375425, 3.0917], [1.2024, 1.6484, 2.0404839051463175, 2.4455, 3.286]],
    // number of variables/points
    n: 1982,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[0.35696, 0.29138, 0.18965],[0.82083, 0.84024, 0.81332]],
    // distribution of x
    distribution_x: [[0.35696, 0.531255, 0.6222933955600394, 0.730045, 0.82083], [0.29138, 0.44458749999999997, 0.5428988546922301, 0.6121675, 0.84024], [0.18965, 0.4565075, 0.5017856861755808, 0.5494224999999999, 0.81332]],
    // number of constraint functions
    t: 1982,
    // constraint function values
    g: require("./g.json"),
    // constrint function bounds
    bounds_g: [-2.1884,-0.0062063],
    // distribution of g
    distribution_g: [[-2.1884, -1.5051, -1.017211879162462, -0.475885, -0.0062063]],
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
    