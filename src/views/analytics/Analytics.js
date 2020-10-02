import React from "react";
import { CContainer, CRow, CCol } from "@coreui/react";

import { getPf } from "./Examples";
import Scatter3DCard from "./Scatter3DCard";
import PCPCard from "./PCPCard";
import PaletteVizCard from "./PaletteVizCard";
import PolarCard from "./PolarCard";
import StatCard from "./StatCard";
import SummaryWidgetsCard from "./SummaryWidgetsCard";

const Analytics = ({ match }) => {
  var pf = getPf(match);
  return (
    <CContainer className="mr-0 ml-0 pr-0 pl-0 pb-0 pt-0">
      <CRow md="12">
        <CCol md="6" className="pr-1 pl-1">
          <Scatter3DCard pf={pf} />
        </CCol>
        <CCol md="6" className="pr-1 pl-1">
          <SummaryWidgetsCard width="6" pf={pf} />
        </CCol>
      </CRow>
      <CRow>
        <CCol md="12" className="pr-1 pl-1">
          <PCPCard pf={pf} />
        </CCol>
      </CRow>
      <CRow md="12">
        <CCol md="12" className="pr-1 pl-1">
          <PaletteVizCard pf={pf} />
        </CCol>
      </CRow>
      <CRow md="12">
        <CCol md="6" className="pr-1 pl-1">
          <PolarCard pf={pf} />
        </CCol>
        <CCol md="6" className="pr-1 pl-1">
          <StatCard pf={pf} />
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default Analytics;
