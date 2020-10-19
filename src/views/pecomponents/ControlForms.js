import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCollapse,
  CForm,
  CFormGroup,
} from "@coreui/react";

import {
  CardHeaderComponent,
  AxesSelectionComponent,
  ColorSelectionComponent,
  PointSizeSelectionComponent,
  KneeSizeSelectionComponent,
  LineSmoothnessToggleComponent,
  LineWidthSelectionComponent,
  KneeLineWidthSelectionComponent,
  StatDataSelectionComponent,
  StatSortOrderSelectionComponent,
} from ".";

// Forms
export class Scatter3DControlForm extends React.Component {
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
            <CardHeaderComponent {...this.props} />
            <CCardBody>
              <CForm
                //action=""
                //method="post"
                encType="multipart/form-data"
                className="form-horizontal"
              >
                <CFormGroup row>
                  <AxesSelectionComponent {...this.props} />
                </CFormGroup>
                <CFormGroup row>
                  <ColorSelectionComponent {...this.props} />
                </CFormGroup>
                {/* <CFormGroup row>
                  <PointSizeSelectionComponent {...this.props} />
                </CFormGroup>
                <CFormGroup row>
                  <KneeSizeSelectionComponent {...this.props} />
                </CFormGroup> */}
              </CForm>
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

export class PCPControlForm extends React.Component {
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
            <CardHeaderComponent {...this.props} />
            <CCardBody>
              <CForm
                //action=""
                //method="post"
                encType="multipart/form-data"
                className="form-horizontal"
              >
                <CFormGroup row>
                  <ColorSelectionComponent {...this.props} mdl="3" mdc="4" />
                  <LineSmoothnessToggleComponent
                    {...this.props}
                    mdl="3"
                    mdc="2"
                  />
                </CFormGroup>
                <CFormGroup row>
                  <LineWidthSelectionComponent
                    {...this.props}
                    mdl="2"
                    mdc="4"
                  />
                  <KneeLineWidthSelectionComponent
                    {...this.props}
                    mdl="2"
                    mdc="4"
                  />
                </CFormGroup>
              </CForm>
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

export class PaletteVizControlForm extends React.Component {
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
            <CardHeaderComponent {...this.props} />
            <CCardBody>
              <CForm
                //action=""
                //method="post"
                encType="multipart/form-data"
                className="form-horizontal"
              >
                <CFormGroup row>
                  <ColorSelectionComponent {...this.props} />
                </CFormGroup>
                {/* <CFormGroup row>
                  <PointSizeSelectionComponent {...this.props} />
                </CFormGroup>
                <CFormGroup row>
                  <KneeSizeSelectionComponent {...this.props} />
                </CFormGroup> */}
              </CForm>
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

export var PolarControlForm = PaletteVizControlForm;

export class StatControlForm extends React.Component {
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
            <CardHeaderComponent {...this.props} />
            <CCardBody>
              <CForm
                //action=""
                //method="post"
                encType="multipart/form-data"
                className="form-horizontal"
              >
                <CFormGroup row>
                  <StatDataSelectionComponent {...this.props} />
                </CFormGroup>
                <CFormGroup row>
                  <StatSortOrderSelectionComponent {...this.props} />
                </CFormGroup>
              </CForm>
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
