
var data = {
    // data name 
    name: "DTLZ8",
    // number of objectives
    m: 6,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[0.0, 0.0, 0.0, 0.0, 0.0, -0.69996],[0.98214, 0.987, 0.99238, 0.99996, 0.94322, 1.0]],
    // distribution of f
    distribution_f: [[0.0, 0.258505, 0.36320795410680695, 0.46547, 0.98214], [0.0, 0.26358499999999996, 0.36546690484016525, 0.47524500000000003, 0.987], [0.0, 0.264375, 0.36237681834148217, 0.46498, 0.99238], [0.0, 0.25853000000000004, 0.35885239186536344, 0.46127, 0.99996], [0.0, 0.26171, 0.3602124031477996, 0.46103, 0.94322], [-0.69996, -0.6372, -0.29806302557352354, -0.31668, 1.0]],
    // number of variables/points
    n: 2659,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[0.0, 0.0, 0.0, 0.0, 0.0],[0.98214, 0.987, 0.99238, 0.99996, 0.94322]],
    // distribution of x
    distribution_x: [[0.0, 0.258505, 0.36320795410680695, 0.46547, 0.98214], [0.0, 0.26358499999999996, 0.36546690484016525, 0.47524500000000003, 0.987], [0.0, 0.264375, 0.36237681834148217, 0.46498, 0.99238], [0.0, 0.25853000000000004, 0.35885239186536344, 0.46127, 0.99996], [0.0, 0.26171, 0.3602124031477996, 0.46103, 0.94322]],
    // number of constraint functions
    t: 2659,
    // constraint function values
    g: require("./g.json"),
    // constrint function bounds
    bounds_g: [[0.0004317, 0.00015955, 0.00029408, 0.0002048, 2.0511e-05, 3.7209e-05],[4.8739, 4.8476, 4.8769, 4.8386, 4.7827, 1.0716]],
    // distribution of g
    distribution_g: [[0.0004317, 0.44538999999999995, 1.8228632640466458, 2.7051499999999997, 4.8739], [0.00015955, 0.49204499999999995, 1.8307883768409292, 2.6445, 4.8476], [0.00029408, 0.446565, 1.818517323170373, 2.6317500000000003, 4.8769], [0.0002048, 0.41723, 1.7891754043249397, 2.6969000000000003, 4.8386], [2.0511e-05, 0.44181000000000004, 1.7853729367999305, 2.59665, 4.7827], [3.7209e-05, 0.06279950000000001, 0.3398145481530633, 0.38332, 1.0716]],
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
    palette_anchors: [[[1.0, 0.0, 1.0], [0.5000000000000001, 0.8660254037844386, 1.0], [-0.4999999999999998, 0.8660254037844388, 1.0], [-1.0, 1.2246467991473532e-16, 1.0], [-0.5000000000000004, -0.8660254037844384, 1.0], [0.5, -0.8660254037844386, 1.0], [1.0, 0.0, 1.0]], [[1.0, 0.0, 0.8], [0.5000000000000001, 0.8660254037844386, 0.8], [-0.4999999999999998, 0.8660254037844388, 0.8], [-1.0, 1.2246467991473532e-16, 0.8], [-0.5000000000000004, -0.8660254037844384, 0.8], [0.5, -0.8660254037844386, 0.8], [1.0, 0.0, 0.8]], [[1.0, 0.0, 0.6000000000000001], [0.5000000000000001, 0.8660254037844386, 0.6000000000000001], [-0.4999999999999998, 0.8660254037844388, 0.6000000000000001], [-1.0, 1.2246467991473532e-16, 0.6000000000000001], [-0.5000000000000004, -0.8660254037844384, 0.6000000000000001], [0.5, -0.8660254037844386, 0.6000000000000001], [1.0, 0.0, 0.6000000000000001]], [[1.0, 0.0, 0.4000000000000001], [0.5000000000000001, 0.8660254037844386, 0.4000000000000001], [-0.4999999999999998, 0.8660254037844388, 0.4000000000000001], [-1.0, 1.2246467991473532e-16, 0.4000000000000001], [-0.5000000000000004, -0.8660254037844384, 0.4000000000000001], [0.5, -0.8660254037844386, 0.4000000000000001], [1.0, 0.0, 0.4000000000000001]], [[1.0, 0.0, 0.20000000000000007], [0.5000000000000001, 0.8660254037844386, 0.20000000000000007], [-0.4999999999999998, 0.8660254037844388, 0.20000000000000007], [-1.0, 1.2246467991473532e-16, 0.20000000000000007], [-0.5000000000000004, -0.8660254037844384, 0.20000000000000007], [0.5, -0.8660254037844386, 0.20000000000000007], [1.0, 0.0, 0.20000000000000007]]],
    // palette coordinates with radviz
    palette_radviz: require("./palette-radviz.json"),
    // palette coordinates with star-coordinates
    palette_starviz: require("./palette-starviz.json"),
    // polar anchor points
    polar_anchors: [[1.0, 0.0], [0.5000000000000001, 0.8660254037844386], [-0.4999999999999998, 0.8660254037844388], [-1.0, 1.2246467991473532e-16], [-0.5000000000000004, -0.8660254037844384], [0.5, -0.8660254037844386], [1.0, 0.0]],
    // radviz coordinates
    radviz: require("./radviz.json"),
    // star coordinates
    star: require("./star.json"),
};

export default data;
    