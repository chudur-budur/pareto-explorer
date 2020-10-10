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
import { ChartHeader, PolarControlForm, Spinner } from "../pecomponents";
import Polar from "./Polar";
import Radar from "./Radar";

class PolarCard extends React.Component {
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

  receiveKneeSize = (params) => {
    this.setState({ ksf: params });
  };

  receivePointSize = (params) => {
    this.setState({ psf: params });
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
            title="Polar Coordinate Plots"
            subtitle={this.props.pf.name + "(" + this.props.pf.m + "D)"}
          />
        </CCardHeader>
        <CCardBody className="pl-2 pt-3 pr-2 pb-2">
          <CTabs>
            <CNav variant="tabs" className="mb-3">
              <CNavItem>
                <CNavLink>Star-Coordinate</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink>Radviz</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink>Radar</CNavLink>
              </CNavItem>
            </CNav>
            {this.state.isLoaded ? (
              <CTabContent>
                <CTabPane>
                  <Polar
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
                  <Polar
                    mode="radviz"
                    pf={this.props.pf}
                    dataNames={["PF", "Knees"]}
                    anchorPrefix={"f"}
                    colorScheme={this.state.colorScheme}
                    psf={this.state.psf}
                    ksf={this.state.ksf}
                  />
                </CTabPane>
                <CTabPane>
                  <Radar
                    pf={this.props.pf}
                    dataNames={["PF", "Knees"]}
                    indicatorPrefix={"f"}
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
          <PolarControlForm
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

export default PolarCard;
