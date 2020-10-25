
var data = {
    // data name 
    name: "GAA-FMINCON-NBI",
    // number of objectives
    m: 10,
    // f-values
    f: require("./f.json"),
    // bounds of f
    bounds_f: [[73.23308, 1878.035, 56.74393, 1.78329, 360.4222, 41850.72, -2560.562, -16.31302, -203.7739, 0.00043196],[74.49428, 2033.931, 80.00024, 2.000285, 497.3288, 45039.2, -1999.67, -14.17615, -184.6417, 3.286904]],
    // distribution of f
    distribution_f: [[73.23308, 73.36284, 73.54057871284374, 73.67890249999999, 74.49428], [1878.035, 1884.15725, 1938.2837658440815, 1972.3507499999998, 2033.931], [56.74393, 70.153895, 74.27630337913648, 79.5111425, 80.00024], [1.78329, 1.920652, 1.9515930905776804, 1.99926025, 2.000285], [360.4222, 408.24082500000003, 429.5878107403257, 452.672475, 497.3288], [41850.72, 42382.36, 43149.79046831171, 43658.635, 45039.2], [-2560.562, -2201.44575, -2113.5894727986565, -2000.18625, -1999.67], [-16.31302, -15.362067499999998, -14.992411441390912, -14.5510925, -14.17615], [-203.7739, -195.43455, -192.76766402131202, -190.79835000000003, -184.6417], [0.00043196, 0.4797852, 1.2162267688474488, 1.87180125, 3.286904]],
    // number of variables/points
    n: 3566,
    // design variables
    x: require("./x.json"),
    // bounds of x
    bounds_x: [[0.24, 7.0, 0.0, 5.5, 20.46945, 85.0, 16.94724, 3.0, 0.46, 0.24, 7.0, 0.0, 5.5, 20.03905, 85.0, 14.74748, 3.0, 0.46, 0.24, 7.0, 0.0, 5.5, 19.74022, 85.0, 14.0, 3.0, 0.46],[0.3444994, 9.249105, 6.0, 5.798177, 24.98411, 110.0, 20.0, 3.75, 1.0, 0.3515577, 9.04145, 5.999999, 5.742143, 24.99999, 110.0, 20.0, 3.75, 1.0, 0.3560457, 9.160087, 5.999998, 5.822388, 25.0, 110.0, 20.0, 3.75, 0.9955373]],
    // distribution of x
    distribution_x: [[0.24, 0.26447475, 0.29171657406057255, 0.3189853, 0.3444994], [7.0, 7.0390105, 7.276472800897364, 7.382175750000001, 9.249105], [0.0, 0.65380935, 2.9877006476716934, 5.15202075, 6.0], [5.5, 5.51404275, 5.561800240886153, 5.59719475, 5.798177], [20.46945, 21.59656, 22.566336427369603, 23.496325, 24.98411], [85.0, 86.6037725, 95.66910147504198, 104.66707500000001, 110.0], [16.94724, 18.61003, 19.29747872125627, 19.9901775, 20.0], [3.0, 3.129711, 3.4542552574312997, 3.7412229999999997, 3.75], [0.46, 0.4903912, 0.5992989441110503, 0.64013805, 1.0], [0.24, 0.25565755, 0.2820391393438026, 0.3081237, 0.3515577], [7.0, 7.01749875, 7.220212997756605, 7.27673725, 9.04145], [0.0, 0.437280725, 2.8047990905018723, 4.6943795, 5.999999], [5.5, 5.511308, 5.550738317442504, 5.57449675, 5.742143], [20.03905, 21.7491575, 22.814141598429618, 23.899792499999997, 24.99999], [85.0, 85.78751749999999, 93.53681586932144, 100.14907500000001, 110.0], [14.74748, 16.8065925, 18.416553906337647, 19.9489575, 20.0], [3.0, 3.1374645, 3.43534217330341, 3.71938925, 3.75], [0.46, 0.47443415, 0.5405454765563671, 0.564694275, 1.0], [0.24, 0.25095147500000003, 0.27852872478968155, 0.30509987499999996, 0.3560457], [7.0, 7.012523, 7.196318131239477, 7.2486845, 9.160087], [0.0, 0.30262422499999997, 2.6163971848842333, 4.216305500000001, 5.999998], [5.5, 5.5104285, 5.548451199383067, 5.57151325, 5.822388], [19.74022, 21.762352500000002, 22.74594035053286, 23.7983375, 25.0], [85.0, 86.2179775, 93.51465094503654, 99.4388625, 110.0], [14.0, 15.759335, 17.789201561974163, 19.93617, 20.0], [3.0, 3.10009875, 3.3921896648906325, 3.6786682500000003, 3.75], [0.46, 0.47181332500000006, 0.5292419244812133, 0.5451990250000001, 0.9955373]],
    // number of constraint functions
    t: 3566,
    // constraint function values
    g: require("./g.json"),
    // constrint function bounds
    bounds_g: [[-0.02357428, -0.1463478, -0.2907009, -0.1098432, -0.1990617, -0.3134502, -0.02356112, -0.155524, -0.2961588, -0.1083551, -0.3187788, -0.2880663, -0.02362702, -0.1643922, -0.3002386, -0.110979, -0.4136179, -0.2803146],[-0.00796699, -0.1051592, 2.195246e-06, 4.737674e-05, 0.000303801, 3.889666e-05, -0.01135236, -0.08831823, 2.955526e-06, 8.359546e-05, -8.6327e-07, 3.278271e-05, -0.00674298, -0.07548584, -1.605476e-06, 0.0001423574, -0.005342434, 0.0001651805]],
    // distribution of g
    distribution_g: [[-0.02357428, -0.022580325, -0.020319209594223217, -0.018723637499999998, -0.00796699], [-0.1463478, -0.1438157, -0.13250081116096474, -0.12496750000000001, -0.1051592], [-0.2907009, -0.15119505, -0.08786785570463233, -0.01347448, 2.195246e-06], [-0.1098432, -0.04727727250000001, -0.027820005931430632, -0.0009071741499999999, 4.737674e-05], [-0.1990617, -0.09541166250000001, -0.057417258435240606, -7.339082250000001e-05, 0.000303801], [-0.3134502, -0.14266487500000002, -0.07975190137885615, -0.004324543, 3.889666e-05], [-0.02356112, -0.022572034999999997, -0.0207781086651711, -0.0197266275, -0.01135236], [-0.155524, -0.14458965000000001, -0.12717504350532785, -0.11183655, -0.08831823], [-0.2961588, -0.174354775, -0.10841464712288568, -0.036205522500000004, 2.955526e-06], [-0.1083551, -0.066424935, -0.03462779705341174, -0.003148904, 8.359546e-05], [-0.3187788, -0.206745225, -0.13215196558991213, -0.049922402500000004, -8.6327e-07], [-0.2880663, -0.13491775, -0.07429688752412092, -0.002542102, 3.278271e-05], [-0.02362702, -0.022663370000000002, -0.020890120460459925, -0.019875265, -0.00674298], [-0.1643922, -0.14455265, -0.12140178477565902, -0.103696925, -0.07548584], [-0.3002386, -0.17629689999999998, -0.11617007451815918, -0.0448349125, -1.605476e-06], [-0.110979, -0.07345919249999999, -0.0396499984075999, -0.0072302090000000005, 0.0001423574], [-0.4136179, -0.28239345, -0.2021947313530559, -0.09776304499999999, -0.005342434], [-0.2803146, -0.14895372499999998, -0.08402514508441425, -0.0030907427499999997, 0.0001651805]],
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
    