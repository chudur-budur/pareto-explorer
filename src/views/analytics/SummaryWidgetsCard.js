import React from "react";
import { CRow, CCol, CCard, CCardBody, CCardHeader } from "@coreui/react";
import { ChartHeader, Spinner } from "../pecomponents";
import {
  WidgetNumberOfPoints,
  WidgetNumberOfKneePoints,
  WidgetObjectiveSummary,
  WidgetDesignVariableSummary,
  WidgetConstraintFunctionSummary,
  WidgetTradeoffSummary,
} from "./SummaryWidgets";

class SummaryWidgetsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false };
  }

  componentDidMount() {
    this.setState({ isLoaded: this.props.isLoaded });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isLoaded !== this.props.isLoaded) {
      this.setState({ isLoaded: this.props.isLoaded });
    }
  }

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
          {this.state.isLoaded ? (
            <>
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
            </>
          ) : (
            <Spinner />
          )}
        </CCardBody>
      </CCard>
    );
  }
}

export default SummaryWidgetsCard;
