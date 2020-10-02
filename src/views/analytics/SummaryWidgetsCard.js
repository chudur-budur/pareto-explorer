import React from "react";
import { CRow, CCol, CCard, CCardBody, CCardHeader } from "@coreui/react";
import { ChartHeader } from "../custom-components";
import {
  WidgetNumberOfPoints,
  WidgetNumberOfKneePoints,
  WidgetObjectiveSummary,
  WidgetDesignVariableSummary,
  WidgetConstraintFunctionSummary,
  WidgetTradeoffSummary,
} from "./SummaryWidgets";

class SummaryWidgetsCard extends React.Component {
  render() {
    return (
      <CCard>
        <CCardHeader className="pb-2 pt-2">
          <ChartHeader
            title="Summary"
            subtitle={this.props.pf.name + "(" + this.props.pf.m + "D)"}
          />
        </CCardHeader>
        <CCardBody className="pl-4 pt-3 pr-4 pb-2">
          <CRow>
            <CCol md={this.props.width}>
              <WidgetNumberOfPoints pf={this.props.pf} />
            </CCol>
            <CCol md={this.props.width}>
              <WidgetNumberOfKneePoints pf={this.props.pf} />
            </CCol>
          </CRow>
          <CRow>
            <CCol md={this.props.width}>
              <WidgetObjectiveSummary pf={this.props.pf} />
            </CCol>
            <CCol md={this.props.width}>
              <WidgetTradeoffSummary pf={this.props.pf} />
            </CCol>
          </CRow>
          <CRow>
            <CCol md={this.props.width}>
              <WidgetDesignVariableSummary pf={this.props.pf} />
            </CCol>
            <CCol md={this.props.width}>
              <WidgetConstraintFunctionSummary pf={this.props.pf} />
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    );
  }
}

export default SummaryWidgetsCard;
