
var data = {
    // data name 
    name: "C2DTLZ2-NBI",
    // number of objectives
    m: 5,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[0.0, 0.0, 0.0, 0.0, 0.0],[1.0, 1.0, 1.0, 1.0, 1.0]],
    // distribution of f
    distribution_f: [[0.0, 0.066227, 0.29308886052631583, 0.36214, 1.0], [0.0, 0.066227, 0.29308886052631583, 0.36214, 1.0], [0.0, 0.066227, 0.2930888605263158, 0.36214, 1.0], [0.0, 0.066227, 0.293088860526316, 0.36214, 1.0], [0.0, 0.066227, 0.293088860526315, 0.36214, 1.0]],
    // number of variables/points
    n: 2280,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[0.0, 0.0, 0.0, 0.0],[1.0, 1.0, 1.0, 1.0]],
    // distribution of x
    distribution_x: [[0.0, 0.76409, 0.7765749061403434, 0.95781, 1.0], [0.0, 0.5582, 0.7303292662280684, 0.95561, 1.0], [0.0, 0.28044, 0.6513805175438591, 0.95237, 1.0], [0.0, 0.048875, 0.47763155087719283, 0.90282, 1.0]],
    // number of constraint functions
    t: 2280,
    // constraint function values
    g: require("./g.json"),
    // constrint function bounds
    bounds_g: [-0.25,-0.00022603],
    // distribution of g
    distribution_g: [[-0.25, -0.17305, -0.11352152271929825, -0.046292, -0.00022603]],
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
    palette_anchors: [[[1.0, 0.0, 1.0], [0.30901699437494745, 0.9510565162951535, 1.0], [-0.8090169943749473, 0.5877852522924732, 1.0], [-0.8090169943749475, -0.587785252292473, 1.0], [0.30901699437494723, -0.9510565162951536, 1.0], [1.0, 0.0, 1.0]], [[1.0, 0.0, 0.75], [0.30901699437494745, 0.9510565162951535, 0.75], [-0.8090169943749473, 0.5877852522924732, 0.75], [-0.8090169943749475, -0.587785252292473, 0.75], [0.30901699437494723, -0.9510565162951536, 0.75], [1.0, 0.0, 0.75]], [[1.0, 0.0, 0.5], [0.30901699437494745, 0.9510565162951535, 0.5], [-0.8090169943749473, 0.5877852522924732, 0.5], [-0.8090169943749475, -0.587785252292473, 0.5], [0.30901699437494723, -0.9510565162951536, 0.5], [1.0, 0.0, 0.5]], [[1.0, 0.0, 0.25], [0.30901699437494745, 0.9510565162951535, 0.25], [-0.8090169943749473, 0.5877852522924732, 0.25], [-0.8090169943749475, -0.587785252292473, 0.25], [0.30901699437494723, -0.9510565162951536, 0.25], [1.0, 0.0, 0.25]]],
    // palette coordinates with radviz
    palette_radviz: require("./palette-radviz.json"),
    // palette coordinates with star-coordinates
    palette_starviz: require("./palette-starviz.json"),
    // polar anchor points
    polar_anchors: [[1.0, 0.0], [0.30901699437494745, 0.9510565162951535], [-0.8090169943749473, 0.5877852522924732], [-0.8090169943749475, -0.587785252292473], [0.30901699437494723, -0.9510565162951536], [1.0, 0.0]],
    // radviz coordinates
    radviz: require("./radviz.json"),
    // star coordinates
    star: require("./star.json"),
};

export default data;
    