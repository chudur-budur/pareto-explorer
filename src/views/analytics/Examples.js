import * as c0dtlz2_nbi_3d from "../../assets/data/c0dtlz2-nbi/3d/index";
import * as c0dtlz2_nbi_4d from "../../assets/data/c0dtlz2-nbi/4d/index";
import * as c0dtlz2_nbi_8d from "../../assets/data/c0dtlz2-nbi/8d/index";

import * as c2dtlz2_nbi_3d from "../../assets/data/c2dtlz2-nbi/3d/index";
import * as c2dtlz2_nbi_4d from "../../assets/data/c2dtlz2-nbi/4d/index";
import * as c2dtlz2_nbi_5d from "../../assets/data/c2dtlz2-nbi/5d/index";
import * as c2dtlz2_nbi_8d from "../../assets/data/c2dtlz2-nbi/8d/index";

import * as cdebmdk_nbi_3d from "../../assets/data/cdebmdk-nbi/3d/index";
import * as cdebmdk_nbi_4d from "../../assets/data/cdebmdk-nbi/4d/index";
import * as cdebmdk_nbi_8d from "../../assets/data/cdebmdk-nbi/8d/index";

import * as crash_c1_nbi_3d from "../../assets/data/crash-c1-nbi/3d/index";
import * as crash_c2_nbi_3d from "../../assets/data/crash-c2-nbi/3d/index";
import * as crash_nbi_3d from "../../assets/data/crash-nbi/3d/index";

import * as debmdk_all_nbi_3d from "../../assets/data/debmdk-all-nbi/3d/index";
import * as debmdk_all_nbi_4d from "../../assets/data/debmdk-all-nbi/4d/index";
import * as debmdk_all_nbi_8d from "../../assets/data/debmdk-all-nbi/8d/index";

import * as debmdk_nbi_3d from "../../assets/data/debmdk-nbi/3d/index";
import * as debmdk_nbi_4d from "../../assets/data/debmdk-nbi/4d/index";
import * as debmdk_nbi_8d from "../../assets/data/debmdk-nbi/8d/index";

import * as dtlz2_nbi_3d from "../../assets/data/dtlz2-nbi/3d/index";
import * as dtlz2_nbi_4d from "../../assets/data/dtlz2-nbi/4d/index";
import * as dtlz2_nbi_8d from "../../assets/data/dtlz2-nbi/8d/index";

import * as dtlz8_nbi_3d from "../../assets/data/dtlz8-nbi/3d/index";
import * as dtlz8_nbi_4d from "../../assets/data/dtlz8-nbi/4d/index";
import * as dtlz8_nbi_6d from "../../assets/data/dtlz8-nbi/6d/index";
import * as dtlz8_nbi_8d from "../../assets/data/dtlz8-nbi/8d/index";

import * as gaa_nbi_10d from "../../assets/data/gaa-nbi/10d/index";

export var getPf = (match) => {
  let data = null;
  if (match && match.params && match.params.data) {
    switch (match.params.data) {
      // c0dtlz2
      case "c0dtlz2-nbi-3d":
        data = c0dtlz2_nbi_3d;
        break;
      case "c0dtlz2-nbi-4d":
        data = c0dtlz2_nbi_4d;
        break;
      case "c0dtlz2-nbi-8d":
        data = c0dtlz2_nbi_8d;
        break;
      // c2dtlz2
      case "c2dtlz2-nbi-3d":
        data = c2dtlz2_nbi_3d;
        break;
      case "c2dtlz2-nbi-4d":
        data = c2dtlz2_nbi_4d;
        break;
      case "c2dtlz2-nbi-5d":
        data = c2dtlz2_nbi_5d;
        break;
      case "c2dtlz2-nbi-8d":
        data = c2dtlz2_nbi_8d;
        break;
      // cdebmdk
      case "cdebmdk-nbi-3d":
        data = cdebmdk_nbi_3d;
        break;
      case "cdebmdk-nbi-4d":
        data = cdebmdk_nbi_4d;
        break;
      case "cdebmdk-nbi-8d":
        data = cdebmdk_nbi_8d;
        break;
      // crash
      case "crash-c1-nbi-3d":
        data = crash_c1_nbi_3d;
        break;
      case "crash-c2-nbi-3d":
        data = crash_c2_nbi_3d;
        break;
      case "crash-nbi-3d":
        data = crash_nbi_3d;
        break;
      // debmdk-all
      case "debmdk-all-nbi-3d":
        data = debmdk_all_nbi_3d;
        break;
      case "debmdk-all-nbi-4d":
        data = debmdk_all_nbi_4d;
        break;
      case "debmdk-all-nbi-8d":
        data = debmdk_all_nbi_8d;
        break;
      // debmdk
      case "debmdk-nbi-3d":
        data = debmdk_nbi_3d;
        break;
      case "debmdk-nbi-4d":
        data = debmdk_nbi_4d;
        break;
      case "debmdk-nbi-8d":
        data = debmdk_nbi_8d;
        break;
      // dtlz2
      case "dtlz2-nbi-3d":
        data = dtlz2_nbi_3d;
        break;
      case "dtlz2-nbi-4d":
        data = dtlz2_nbi_4d;
        break;
      case "dtlz2-nbi-8d":
        data = dtlz2_nbi_8d;
        break;
      // dtlz8
      case "dtlz8-nbi-3d":
        data = dtlz8_nbi_3d;
        break;
      case "dtlz8-nbi-4d":
        data = dtlz8_nbi_4d;
        break;
      case "dtlz8-nbi-6d":
        data = dtlz8_nbi_6d;
        break;
      case "dtlz8-nbi-8d":
        data = dtlz8_nbi_8d;
        break;
      // gaa
      case "gaa-nbi-10d":
        data = gaa_nbi_10d;
        break;
      //
      default:
        data = cdebmdk_nbi_4d;
    }
  }
  return data.default;
};
