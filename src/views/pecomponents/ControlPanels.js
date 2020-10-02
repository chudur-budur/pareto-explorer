import React from "react";

import {
  CButton,
  CCard,
  CCardBody,
  CCollapse,
  CCol,
  CRow,
} from "@coreui/react";
import { CombinatorialAxesDropdownMenu, TwoWayToggle } from ".";

export class Scatter3DControlPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
  }

  toggleForm = (event) => {
    this.setState({ collapse: !this.state.collapse });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <CCollapse show={this.state.collapse}>
          <CCard>
            <CCardBody>
              <CRow className="align-items-center mt-0 m-md-0">
                <CCol md="4">
                  <CombinatorialAxesDropdownMenu
                    title="Select Axes"
                    n={this.props.pf.m}
                    r="3"
                    callBack={this.props.callBackAxes}
                  />
                </CCol>
                <CCol md="8">
                  <TwoWayToggle
                    optionLeft="color-by-centroid"
                    optionRight="color-by-cv"
                    titleButtonLeft="Centroid Distance"
                    titleButtonRight="Constraint Violation"
                    pf={this.props.pf}
                    callBack={this.props.callBackColorScheme}
                  />
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCollapse>
        <CButton color="primary" size="sm" onClick={this.toggleForm}>
          {this.props.titleToggleButton}
        </CButton>
      </div>
    );
  }
}

export class PCPControlPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
  }

  toggleForm = (e) => {
    this.setState({ collapse: !this.state.collapse });
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <CCollapse show={this.state.collapse}>
          <CCard>
            <CCardBody>
              <CRow className="align-items-center mt-0 m-md-0">
                <CCol md="8">
                  <TwoWayToggle
                    optionLeft="color-by-centroid"
                    optionRight="color-by-cv"
                    titleButtonLeft="Centroid Distance"
                    titleButtonRight="Constraint Violation"
                    pf={this.props.pf}
                    callBack={this.props.callBackColorScheme}
                  />
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCollapse>
        <CButton color="primary" size="sm" onClick={this.toggleForm}>
          {this.props.titleToggleButton}
        </CButton>
      </div>
    );
  }
}

export var RadarControlPanel = PCPControlPanel;
