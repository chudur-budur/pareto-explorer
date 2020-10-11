
var data = {
    // data name 
    name: "C2DTLZ2",
    // number of objectives
    m: 4,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[0.00044742, 0.00057277, 8.4839e-05, 0.00047626],[0.99712, 0.99804, 0.99883, 0.99596]],
    // distribution of f
    distribution_f: [[0.00044742, 0.3019075, 0.4502579089655178, 0.5738725, 0.99712], [0.00057277, 0.27886, 0.43455972435823825, 0.5586599999999999, 0.99804], [8.4839e-05, 0.29481999999999997, 0.438615065966954, 0.55574, 0.99883], [0.00047626, 0.29652500000000004, 0.44103658957375425, 0.562555, 0.99596]],
    // number of variables/points
    n: 2088,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[0.057253, 0.0093534, 0.0023868],[0.9997, 0.99989, 0.9992]],
    // distribution of x
    distribution_x: [[0.057253, 0.6196400000000001, 0.691903681513409, 0.8083425, 0.9997], [0.0093534, 0.543205, 0.6283777760536406, 0.753765, 0.99989], [0.0023868, 0.378325, 0.508599274281609, 0.63351, 0.9992]],
    // number of constraint functions
    t: 2088,
    // constraint function values
    g: require("./g.json"),
    // constrint function bounds
    bounds_g: [-0.24766,-4.8493e-05],
    // distribution of g
    distribution_g: [[-0.24766, -0.06676100000000001, -0.055203588052203066, -0.017460250000000004, -4.8493e-05]],
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
    