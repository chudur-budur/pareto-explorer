
var data = {
    // data name 
    name: "GAA-NSGA3-NBI",
    // number of objectives
    m: 10,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[73.263, 1882.3, 58.502, 1.8054, 373.42, 42041.0, -2541.5, -16.489, -201.58, 0.21984],[74.684, 2013.4, 79.994, 2.0, 499.76, 44727.0, -2000.1, -14.299, -187.28, 3.1263]],
    // distribution of f
    distribution_f: [[73.263, 73.456, 73.73416247995718, 73.979, 74.684], [1882.3, 1915.0, 1937.1505077498637, 1957.6, 2013.4], [58.502, 63.925, 69.47320791020847, 74.8495, 79.994], [1.8054, 1.9129, 1.9410584179583088, 1.97695, 2.0], [373.42, 412.405, 433.11882415820503, 449.95500000000004, 499.76], [42041.0, 42809.0, 43198.535008017105, 43531.5, 44727.0], [-2541.5, -2240.6000000000004, -2164.0227685729583, -2061.15, -2000.1], [-16.489, -15.517, -15.239356493853542, -14.942, -14.299], [-201.58, -196.55, -194.43576162479974, -192.485, -187.28], [0.21984, 0.896935, 1.5590759326563348, 2.188, 3.1263]],
    // number of variables/points
    n: 1871,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[0.24, 7.0, 0.001583, 5.5, 20.203, 85.0, 17.907, 3.0005, 0.46, 0.24, 7.0, 4.5484e-05, 5.5, 20.213, 85.001, 15.461, 3.0, 0.46, 0.24, 7.0, 0.0060234, 5.5, 20.034, 85.0, 14.004, 3.0003, 0.46],[0.34614, 8.6065, 6.0, 5.8632, 24.671, 110.0, 20.0, 3.75, 0.99924, 0.3435, 9.0526, 5.9999, 5.8129, 24.995, 109.99, 19.999, 3.75, 0.70785, 0.35882, 9.1513, 6.0, 5.8229, 24.998, 110.0, 19.999, 3.75, 0.68074]],
    // distribution of x
    distribution_x: [[0.24, 0.24237, 0.26863432389096714, 0.28830999999999996, 0.34614], [7.0, 7.004, 7.213982522715126, 7.31375, 8.6065], [0.001583, 5.8297, 5.54895280774987, 5.97625, 6.0], [5.5, 5.51145, 5.606764617851419, 5.683249999999999, 5.8632], [20.203, 21.6725, 22.369912880812375, 23.052999999999997, 24.671], [85.0, 85.184, 89.92118332442517, 88.53450000000001, 110.0], [17.907, 18.966, 19.48285783003743, 19.985, 20.0], [3.0005, 3.7384500000000003, 3.69760219134152, 3.7487, 3.75], [0.46, 0.46076, 0.49977473543559564, 0.473715, 0.99924], [0.24, 0.24076, 0.26319739176910745, 0.28271500000000005, 0.3435], [7.0, 7.01035, 7.356403634420078, 7.6431000000000004, 9.0526], [4.5484e-05, 0.389455, 3.700317491621583, 5.8427500000000006, 5.9999], [5.5, 5.5017, 5.534769214323888, 5.5542, 5.8129], [20.213, 22.2545, 23.01258311063602, 23.8535, 24.995], [85.001, 85.107, 86.2965029396046, 85.989, 109.99], [15.461, 17.236, 18.12443773383218, 19.125500000000002, 19.999], [3.0, 3.7224500000000003, 3.6844949225013366, 3.747, 3.75], [0.46, 0.46031, 0.4651098182789944, 0.462515, 0.70785], [0.24, 0.24097, 0.26181494388027804, 0.27642, 0.35882], [7.0, 7.0229, 7.452295029396055, 7.747400000000001, 9.1513], [0.0060234, 5.832, 5.657748921111695, 5.9798, 6.0], [5.5, 5.5042, 5.548896579369327, 5.58045, 5.8229], [20.034, 22.2175, 22.904936932121856, 23.6465, 24.998], [85.0, 85.25200000000001, 90.56894494922506, 88.76050000000001, 110.0], [14.004, 16.6845, 17.51797274184925, 18.4895, 19.999], [3.0003, 3.7305, 3.6925522715125467, 3.7481, 3.75], [0.46, 0.46033500000000005, 0.4650452645644039, 0.46202, 0.68074]],
    // number of constraint functions
    t: 1871,
    // constraint function values
    g: require("./g.json"),
    // constrint function bounds
    bounds_g: [[-0.023534, -0.14517, -0.28, -0.10805, -0.17017, -0.33848, -0.023383, -0.15529, -0.27958, -0.10456, -0.22896, -0.29831, -0.02351, -0.16569, -0.30091, -0.10426, -0.36, -0.29244],[-0.0042139, -0.10961, -7.6623e-05, -1.832e-05, -1.1534e-05, -3.2791e-05, -0.0071512, -0.10501, -8.3656e-05, -5.3354e-06, -3.8285e-05, -9.9581e-05, -0.0064248, -0.084821, -0.00019041, -1.5796e-05, -0.00048985, -4.3213e-05]],
    // distribution of g
    distribution_g: [[-0.023534, -0.022614000000000002, -0.01802554436130414, -0.014428, -0.0042139], [-0.14517, -0.13861, -0.13195533404596466, -0.12626500000000002, -0.10961], [-0.28, -0.22922, -0.16177972595563872, -0.097126, -7.6623e-05], [-0.10805, -0.047870499999999996, -0.03293413519615177, -0.014147, -1.832e-05], [-0.17017, -0.088004, -0.05914685290165688, -0.02598, -1.1534e-05], [-0.33848, -0.15393, -0.10588607267290219, -0.0497595, -3.2791e-05], [-0.023383, -0.022885, -0.02141039679315875, -0.0205825, -0.0071512], [-0.15529, -0.14134999999999998, -0.13185698556921427, -0.121685, -0.10501], [-0.27958, -0.225735, -0.16468888468519527, -0.104265, -8.3656e-05], [-0.10456, -0.054206000000000004, -0.03716037514665952, -0.0181325, -5.3354e-06], [-0.22896, -0.15664499999999998, -0.10773844507856767, -0.0619575, -3.8285e-05], [-0.29831, -0.155475, -0.10818922040138952, -0.053325, -9.9581e-05], [-0.02351, -0.0228645, -0.02082204259754142, -0.0194535, -0.0064248], [-0.16569, -0.13302, -0.12254574024585792, -0.11095, -0.084821], [-0.30091, -0.22687000000000002, -0.16973910425975414, -0.11802, -0.00019041], [-0.10426, -0.05319, -0.03748911829182258, -0.0186535, -1.5796e-05], [-0.36, -0.24724000000000002, -0.1946337680117583, -0.14812, -0.00048985], [-0.29244, -0.149835, -0.10283045537626934, -0.0521805, -4.3213e-05]],
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
    palette_anchors: [[[1.0, 0.0, 1.0], [0.8090169943749475, 0.5877852522924731, 1.0], [0.30901699437494745, 0.9510565162951535, 1.0], [-0.30901699437494734, 0.9510565162951536, 1.0], [-0.8090169943749473, 0.5877852522924732, 1.0], [-1.0, 1.2246467991473532e-16, 1.0], [-0.8090169943749475, -0.587785252292473, 1.0], [-0.30901699437494756, -0.9510565162951535, 1.0], [0.30901699437494723, -0.9510565162951536, 1.0], [0.8090169943749473, -0.5877852522924732, 1.0], [1.0, 0.0, 1.0]], [[1.0, 0.0, 0.6666666666666667], [0.8090169943749475, 0.5877852522924731, 0.6666666666666667], [0.30901699437494745, 0.9510565162951535, 0.6666666666666667], [-0.30901699437494734, 0.9510565162951536, 0.6666666666666667], [-0.8090169943749473, 0.5877852522924732, 0.6666666666666667], [-1.0, 1.2246467991473532e-16, 0.6666666666666667], [-0.8090169943749475, -0.587785252292473, 0.6666666666666667], [-0.30901699437494756, -0.9510565162951535, 0.6666666666666667], [0.30901699437494723, -0.9510565162951536, 0.6666666666666667], [0.8090169943749473, -0.5877852522924732, 0.6666666666666667], [1.0, 0.0, 0.6666666666666667]]],
    // palette coordinates with radviz
    palette_radviz: require("./palette-radviz.json"),
    // palette coordinates with star-coordinates
    palette_starviz: require("./palette-starviz.json"),
    // polar anchor points
    polar_anchors: [[1.0, 0.0], [0.8090169943749475, 0.5877852522924731], [0.30901699437494745, 0.9510565162951535], [-0.30901699437494734, 0.9510565162951536], [-0.8090169943749473, 0.5877852522924732], [-1.0, 1.2246467991473532e-16], [-0.8090169943749475, -0.587785252292473], [-0.30901699437494756, -0.9510565162951535], [0.30901699437494723, -0.9510565162951536], [0.8090169943749473, -0.5877852522924732], [1.0, 0.0]],
    // radviz coordinates
    radviz: require("./radviz.json"),
    // star coordinates
    star: require("./star.json"),
};

export default data;
    