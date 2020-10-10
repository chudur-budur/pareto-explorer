import React from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
} from "@coreui/react";
import { ChartHeader, PaletteVizControlForm, Spinner } from "../pecomponents";
import PaletteViz from "./PaletteViz";

class PaletteVizCard extends React.Component {
  constructor(props) {
    super(props);
    this.defaultPsf = 3.0;
    this.defaultKsf = 2.0;
    this.state = {
      colorScheme: "color-by-centroid",
      psf: this.defaultPsf,
      ksf: this.defaultKsf,
      isLoaded: false,
    };
  }

  receiveColorScheme = (params) => {
    this.setState({ colorScheme: params });
  };

  receivePointSize = (params) => {
    this.setState({ psf: params });
  };

  receiveKneeSize = (params) => {
    this.setState({ ksf: params });
  };

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
            title="PaletteViz Plot"
            subtitle={this.props.pf.name + "(" + this.props.pf.m + "D)"}
          />
        </CCardHeader>
        <CCardBody className="pl-2 pt-2 pr-2 pb-2">
          <CTabs>
            <CNav variant="tabs" className="mb-3">
              <CNavItem>
                <CNavLink>Star-Coordinate</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink>Radviz</CNavLink>
              </CNavItem>
            </CNav>
            {this.state.isLoaded ? (
              <CTabContent>
                <CTabPane>
                  <PaletteViz
                    mode="star"
                    pf={this.props.pf}
                    dataNames={["PF", "Knees"]}
                    anchorPrefix={"f"}
                    colorScheme={this.state.colorScheme}
                    psf={this.state.psf}
                    ksf={this.state.ksf}
                  />
                </CTabPane>
                <CTabPane>
                  <PaletteViz
                    mode="radviz"
                    pf={this.props.pf}
                    dataNames={["PF", "Knees"]}
                    anchorPrefix={"f"}
                    colorScheme={this.state.colorScheme}
                    psf={this.state.psf}
                    ksf={this.state.ksf}
                  />
                </CTabPane>
              </CTabContent>
            ) : (
              <Spinner />
            )}
          </CTabs>
        </CCardBody>
        <CCardFooter className="pl-2 pt-2 pr-2 pb-2">
          <PaletteVizControlForm
            titleToggleButton="Control Panel"
            titleForm="Plot Settings"
            pf={this.props.pf}
            minPoint={0}
            maxPoint={10}
            minKnee={0}
            maxKnee={10}
            psf={this.state.psf}
            ksf={this.state.ksf}
            markerValuePoint={this.defaultPsf}
            markerTextPoint={this.defaultPsf}
            markerValueKnee={this.defaultKsf}
            markerTextKnee={this.defaultKsf}
            callBackColorScheme={this.receiveColorScheme}
            callBackKneeSize={this.receiveKneeSize}
            callBackPointSize={this.receivePointSize}
          />
        </CCardFooter>
      </CCard>
    );
  }
}

export default PaletteVizCard;
