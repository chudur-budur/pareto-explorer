import React from "react";
import {
  CDropdown,
  CWidgetDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CWidgetIcon,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import ChartLineSimple from "../charts/ChartLineSimple";
import ChartBarSimple from "../charts/ChartBarSimple";
import { sortVector, sortIndices } from "./Utils";

var getMeans = (distribution) => {
  let means = [];
  if (Array.isArray(distribution)) {
    for (let i = 0; i < distribution.length; i++) {
      means.push(distribution[i][2]);
    }
  } else {
    means[0] = distribution[2];
  }
  return means;
};

export const WidgetNumberOfPoints = (props) => {
  return (
    <div>
      <CWidgetIcon
        text="Data Points"
        header={props.pf.n.toLocaleString()}
        header={props.pf.n ? props.pf.n.toLocaleString() : "0".toLocaleString()}
        color="info"
        iconPadding={false}
      >
        <CIcon width={24} name="cil-grain" />
      </CWidgetIcon>
    </div>
  );
};

export const WidgetNumberOfKneePoints = (props) => {
  return (
    <div>
      <CWidgetIcon
        text="Max. Depth Contours"
        header={
          props.pf.depth_cv
            ? props.pf.depth_cv.length.toLocaleString()
            : "0".toLocaleString()
        }
        header={props.pf.depth_cv.length.toLocaleString()}
        color="primary"
        iconPadding={false}
      >
        <CIcon width={24} name="cil-layers" />
      </CWidgetIcon>
    </div>
  );
};

export const WidgetObjectiveSummary = (props) => {
  let data = props.pf.distribution_f ? getMeans(props.pf.distribution_f) : [];
  return (
    <div>
      <CWidgetDropdown
        color="gradient-info"
        header={
          props.pf.f
            ? Array.isArray(props.pf.f[0])
              ? props.pf.f[0].length.toLocaleString()
              : "1".toLocaleString()
            : "0".toLocaleString()
        }
        text="Objective Functions"
        footerSlot={
          <ChartLineSimple
            pointed
            className="c-chart-wrapper mt-3 mx-3"
            style={{ height: "70px" }}
            dataPoints={data}
            pointHoverBackgroundColor="info"
            label="Mean"
            labels="months"
          />
        }
      >
        <CDropdown>
          <CDropdownToggle color="transparent">
            <CIcon name="cil-settings" />
          </CDropdownToggle>
          <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </CWidgetDropdown>
    </div>
  );
};

export const WidgetDesignVariableSummary = (props) => {
  let data = props.pf.distribution_x ? getMeans(props.pf.distribution_x) : [];
  return (
    <CWidgetDropdown
      color="gradient-primary"
      header={
        props.pf.x
          ? Array.isArray(props.pf.x[0])
            ? props.pf.x[0].length.toLocaleString()
            : "1".toLocaleString()
          : "0".toLocaleString()
      }
      text="Design Variables"
      footerSlot={
        <ChartLineSimple
          pointed
          className="c-chart-wrapper mt-3 mx-3"
          style={{ height: "70px" }}
          dataPoints={data}
          pointHoverBackgroundColor="primary"
          label="Mean"
          labels="months"
        />
      }
    >
      <CDropdown>
        <CDropdownToggle color="transparent">
          <CIcon name="cil-settings" />
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          <CDropdownItem>Action</CDropdownItem>
          <CDropdownItem>Another action</CDropdownItem>
          <CDropdownItem>Something else here...</CDropdownItem>
          <CDropdownItem disabled>Disabled action</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </CWidgetDropdown>
  );
};

export const WidgetConstraintFunctionSummary = (props) => {
  let data = props.pf.cv ? sortVector(props.pf.cv) : [];
  return (
    <CWidgetDropdown
      color="gradient-warning"
      header={
        props.pf.g
          ? Array.isArray(props.pf.g[0])
            ? props.pf.g[0].length.toLocaleString()
            : "1".toLocaleString()
          : "0".toLocaleString()
      }
      text="Constraint Functions"
      footerSlot={
        <ChartLineSimple
          className="mt-3"
          style={{ height: "70px" }}
          backgroundColor="rgba(255,255,255,.2)"
          dataPoints={data}
          options={{ elements: { line: { borderWidth: 2.5 } } }}
          pointHoverBackgroundColor="warning"
          label="CV"
          labels="months"
        />
      }
    >
      <CDropdown>
        <CDropdownToggle color="transparent">
          <CIcon name="cil-settings" />
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          <CDropdownItem>Action</CDropdownItem>
          <CDropdownItem>Another action</CDropdownItem>
          <CDropdownItem>Something else here...</CDropdownItem>
          <CDropdownItem disabled>Disabled action</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </CWidgetDropdown>
  );
};

export const WidgetTradeoffSummary = (props) => {
  let data = [];
  if (props.pf.muid && props.pf.mu) {
    let sid = sortIndices(props.pf.muid, props.pf.mu);
    for (let i of sid) {
      data.push(props.pf.mu[i]);
    }
  }
  return (
    <CWidgetDropdown
      color="gradient-danger"
      header={
        props.pf.muid
          ? props.pf.muid.length.toLocaleString()
          : "0".toLocaleString()
      }
      text="High Tradeoff Points"
      footerSlot={
        <ChartBarSimple
          className="mt-3 mx-3"
          style={{ height: "70px" }}
          backgroundColor="rgb(250, 152, 152)"
          dataPoints={data}
          label="μ"
          labels="months"
        />
      }
    >
      <CDropdown>
        <CDropdownToggle caret className="text-white" color="transparent">
          <CIcon name="cil-settings" />
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          <CDropdownItem>Action</CDropdownItem>
          <CDropdownItem>Another action</CDropdownItem>
          <CDropdownItem>Something else here...</CDropdownItem>
          <CDropdownItem disabled>Disabled action</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </CWidgetDropdown>
  );
};
