
var data = {
    // data name 
    name: "C0DTLZ2-NBI",
    // number of objectives
    m: 4,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[0.0, 0.0, 0.0, 0.0],[1.0, 1.0, 1.0, 1.0]],
    // distribution of f
    distribution_f: [[0.0, 0.13736, 0.4273781174321503, 0.70711, 1.0], [0.0, 0.13736, 0.4273781174321504, 0.70711, 1.0], [0.0, 0.13736, 0.42737811743215004, 0.70711, 1.0], [0.0, 0.07581, 0.29787529749478087, 0.48038, 1.0]],
    // number of variables/points
    n: 1916,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[0.0, 0.0, 0.0],[1.0, 1.0, 1.0]],
    // distribution of x
    distribution_x: [[0.0, 0.68099, 0.7957117500000028, 0.95169, 1.0], [0.0, 0.416685, 0.6460444290187883, 0.90289, 1.0], [0.0, 0.15596, 0.4958246033402918, 0.82283, 1.0]],
    // number of constraint functions
    t: 1916,
    // constraint function values
    g: require("./g.json"),
    // constrint function bounds
    bounds_g: [-0.735,-0.00034619],
    // distribution of g
    distribution_g: [[-0.735, -0.6096, -0.3675359494624217, -0.1347, -0.00034619]],
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
    