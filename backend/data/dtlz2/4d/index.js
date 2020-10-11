
var data = {
    // data name 
    name: "DTLZ2",
    // number of objectives
    m: 4,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[0.00012117, 3.5292e-06, 0.00031035, 6.6194e-05],[0.98106, 0.99773, 0.97825, 0.98316]],
    // distribution of f
    distribution_f: [[0.00012117, 0.2565925, 0.4411333785700002, 0.618, 0.98106], [3.5292e-06, 0.25641749999999996, 0.44049867041959867, 0.6153525, 0.99773], [0.00031035, 0.25166, 0.4437243817349998, 0.6235649999999999, 0.97825], [6.6194e-05, 0.25231499999999996, 0.44098680259700024, 0.6243525, 0.98316]],
    // number of variables/points
    n: 2000,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[0.117, 0.03843, 0.00010159],[0.99996, 0.9998, 0.99998]],
    // distribution of x
    distribution_x: [[0.117, 0.5707225, 0.6965026699999995, 0.8376175, 0.99996], [0.03843, 0.4874175, 0.6316865245, 0.8032050000000001, 0.9998], [0.00010159, 0.2934925, 0.5005722367450001, 0.713165, 0.99998]],
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
    