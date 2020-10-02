
var data = {
    // data name 
    name: "CDEBMDK-NBI",
    // number of objectives
    m: 8,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[0.45011, 0.45011, 0.47868, 0.48801, 0.49205, 0.49432, 0.49723, 0.53767],[3.2677, 3.2677, 3.055, 3.0345, 3.0269, 2.9755, 2.9314, 3.1556]],
    // distribution of f
    distribution_f: [[0.45011, 1.1035749999999998, 1.569360266272195, 1.8077, 3.2677], [0.45011, 1.1035749999999998, 1.569360266272195, 1.8077, 3.2677], [0.47868, 1.1504, 1.6188141360946808, 2.078125, 3.055], [0.48801, 1.1656, 1.6369424556213024, 2.0868249999999997, 3.0345], [0.49205, 1.1761, 1.644560849112416, 2.0723249999999998, 3.0269], [0.49432, 1.183525, 1.6438167810650894, 2.0633500000000002, 2.9755], [0.49723, 1.189725, 1.6470888313609446, 2.0618499999999997, 2.9314], [0.53767, 1.6819250000000001, 1.9766002781065033, 2.3007, 3.1556]],
    // number of variables/points
    n: 3380,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[0.54563, 0.5702, 0.5, 0.47229, 0.38572, 0.26772, 0.15596],[0.92776, 0.92427, 0.92203, 0.91228, 0.90366, 0.88861, 0.84404]],
    // distribution of x
    distribution_x: [[0.54563, 0.70077, 0.7347673994082518, 0.78225, 0.92776], [0.5702, 0.6851, 0.7575552988165727, 0.83651, 0.92427], [0.5, 0.66376, 0.7362652928994109, 0.81357, 0.92203], [0.47229, 0.63357, 0.7072573905325363, 0.78671, 0.91228], [0.38572, 0.59329, 0.6677747573964575, 0.75325, 0.90366], [0.26772, 0.51873, 0.6072610917159721, 0.6915500000000001, 0.88861], [0.15596, 0.37433, 0.5, 0.62567, 0.84404]],
    // number of constraint functions
    t: 3380,
    // constraint function values
    g: require("./g.json"),
    // constrint function bounds
    bounds_g: [-2.791,-2.9008e-05],
    // distribution of g
    distribution_g: [[-2.791, -0.96464, -0.6598879316408284, -0.2456875, -2.9008e-05]],
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
    palette_anchors: [[[1.0, 0.0, 1.0], [0.7071067811865476, 0.7071067811865475, 1.0], [6.123233995736766e-17, 1.0, 1.0], [-0.7071067811865475, 0.7071067811865476, 1.0], [-1.0, 1.2246467991473532e-16, 1.0], [-0.7071067811865477, -0.7071067811865475, 1.0], [-1.8369701987210297e-16, -1.0, 1.0], [0.7071067811865475, -0.7071067811865477, 1.0], [1.0, 0.0, 1.0]], [[1.0, 0.0, 0.8], [0.7071067811865476, 0.7071067811865475, 0.8], [6.123233995736766e-17, 1.0, 0.8], [-0.7071067811865475, 0.7071067811865476, 0.8], [-1.0, 1.2246467991473532e-16, 0.8], [-0.7071067811865477, -0.7071067811865475, 0.8], [-1.8369701987210297e-16, -1.0, 0.8], [0.7071067811865475, -0.7071067811865477, 0.8], [1.0, 0.0, 0.8]], [[1.0, 0.0, 0.6000000000000001], [0.7071067811865476, 0.7071067811865475, 0.6000000000000001], [6.123233995736766e-17, 1.0, 0.6000000000000001], [-0.7071067811865475, 0.7071067811865476, 0.6000000000000001], [-1.0, 1.2246467991473532e-16, 0.6000000000000001], [-0.7071067811865477, -0.7071067811865475, 0.6000000000000001], [-1.8369701987210297e-16, -1.0, 0.6000000000000001], [0.7071067811865475, -0.7071067811865477, 0.6000000000000001], [1.0, 0.0, 0.6000000000000001]], [[1.0, 0.0, 0.4000000000000001], [0.7071067811865476, 0.7071067811865475, 0.4000000000000001], [6.123233995736766e-17, 1.0, 0.4000000000000001], [-0.7071067811865475, 0.7071067811865476, 0.4000000000000001], [-1.0, 1.2246467991473532e-16, 0.4000000000000001], [-0.7071067811865477, -0.7071067811865475, 0.4000000000000001], [-1.8369701987210297e-16, -1.0, 0.4000000000000001], [0.7071067811865475, -0.7071067811865477, 0.4000000000000001], [1.0, 0.0, 0.4000000000000001]]],
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
    