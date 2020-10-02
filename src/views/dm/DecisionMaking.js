import React, { useState } from "react";
import {
  CButton,
  CCardFooter,
  CCollapse,
  CCard,
  CCardBody,
  CCardHeader,
} from "@coreui/react";
import Graph from "../analytics/Graph";

const DecisionMaking = () => {
  const [collapse, setCollapse] = useState(false);
  const toggle = (e) => {
    setCollapse(!collapse);
    e.preventDefault();
  };

  return (
    <CCard>
      <CCardHeader>
        <b>Put a 3D scatter plot and a line from data.csv</b>
        <div className="card-header-actions">
          <a href="http://www.chartjs.org" className="card-header-action">
            <small className="text-muted">docs</small>
          </a>
        </div>
      </CCardHeader>
      <CCardBody>
        <Graph />
        <CCollapse show={collapse}>
          <p>
            <a href="https://echarts.apache.org/examples/en/index.html#chart-type-scatter3D">
              Hint
            </a>
          </p>
        </CCollapse>
        <CCardFooter>
          <CButton color="danger" onClick={toggle} className={"mb-1"}>
            To Do
          </CButton>
        </CCardFooter>
      </CCardBody>
    </CCard>
  );
};

export default DecisionMaking;
