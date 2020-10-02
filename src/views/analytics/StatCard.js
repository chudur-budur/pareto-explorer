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
import { ChartHeader, StatControlForm } from "../basics";
import SingleBoxplot from "./SingleBoxplot";
import PairDistributionPlot from "./PairDistributionPlot";

class StatCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorScheme: "color-by-centroid",
      sortOrder: "-1",
      showMu: true,
      showCv: true,
    };
  }

  receiveColorScheme = (params) => {
    this.setState({ colorScheme: params });
  };

  receiveSortOrder = (params) => {
    this.setState({ sortOrder: params });
  };

  receiveShowMu = (params) => {
    if (!this.props.pf.mu) {
      this.setState({ showMu: false });
    } else {
      this.setState({ showMu: params });
    }
  };

  receiveShowCv = (params) => {
    if (!this.props.pf.cv) {
      this.setState({ showCv: false });
    } else {
      this.setState({ showCv: params });
    }
  };

  renderBoxplotF = () => {
    if (this.props.pf.distribution_f) {
      return (
        <>
          <CTabPane>
            <SingleBoxplot
              title={this.props.pf.name}
              yAxisTitle={"Objective\nValues"}
              xAxisLabelPrefix={"f"}
              tooltipTitle={"Objective"}
              data={this.props.pf.distribution_f}
              numberOfDimensions={this.props.pf.m}
            />
          </CTabPane>
        </>
      );
    } else return <></>;
  };

  renderBoxplotX = () => {
    if (this.props.pf.distribution_x) {
      return (
        <>
          <CTabPane>
            <SingleBoxplot
              title={this.props.pf.name}
              yAxisTitle={"Design\nVariables"}
              xAxisLabelPrefix={"x"}
              tooltipTitle={"Variable"}
              data={this.props.pf.distribution_x}
              numberOfDimensions={this.props.pf.distribution_x.length}
            />
          </CTabPane>
        </>
      );
    } else return <></>;
  };

  renderBoxplotG = () => {
    if (this.props.pf.distribution_g) {
      return (
        <>
          <CTabPane>
            <SingleBoxplot
              title={this.props.pf.name}
              yAxisTitle={"Constraint\nFunctions"}
              xAxisLabelPrefix={"g"}
              tooltipTitle={"Constraint"}
              data={this.props.pf.distribution_g}
              numberOfDimensions={this.props.pf.distribution_g.length}
            />
          </CTabPane>
        </>
      );
    } else return <></>;
  };

  renderPairDistributionPlot = () => {
    return (
      <>
        <CTabPane>
          <PairDistributionPlot
            numberOfPoints={this.props.pf.n}
            data={[this.props.pf.mu, this.props.pf.cv]}
            dataNames={["μ", "CV"]}
            showDataFlag={[this.state.showMu, this.state.showCv]}
            tooltipData={[this.props.pf.f, `<b>f</b>`]}
            sortOrder={this.state.sortOrder}
          />
        </CTabPane>
      </>
    );
  };

  render() {
    return (
      <CCard>
        <CCardHeader className="pb-2 pt-2">
          <ChartHeader
            title="Misc. Statistics"
            subtitle={this.props.pf.name + "(" + this.props.pf.m + "D)"}
          />
        </CCardHeader>
        <CCardBody className="pl-2 pt-3 pr-2 pb-2">
          <CTabs>
            <CNav variant="tabs" className="mb-3">
              {this.props.pf.distribution_f && (
                <CNavItem>
                  <CNavLink>
                    Distribution <b>f</b>
                    <sub>i</sub>
                  </CNavLink>
                </CNavItem>
              )}
              {this.props.pf.distribution_x && (
                <CNavItem>
                  <CNavLink>
                    Distribution <b>x</b>
                    <sub>i</sub>
                  </CNavLink>
                </CNavItem>
              )}
              {/* {this.props.pf.distribution_g && (
                <CNavItem>
                  <CNavLink>
                    Distribution <b>g</b>
                    <sub>i</sub>
                  </CNavLink>
                </CNavItem>
              )} */}
              {/* {(this.props.pf.mu || this.props.pf.cv) && (
                <CNavItem>
                  <CNavLink>Distribution &mu;&nbsp;/&nbsp;CV</CNavLink>
                </CNavItem>
              )} */}
            </CNav>
            <CTabContent>
              {this.renderBoxplotF()}
              {this.renderBoxplotX()}
              {/* {this.renderBoxplotG()} */}
              {/* {(this.props.pf.mu || this.props.pf.cv) &&
                this.renderPairDistributionPlot()} */}
            </CTabContent>
          </CTabs>
        </CCardBody>
        <CCardFooter className="pl-2 pt-2 pr-2 pb-2">
          <StatControlForm
            titleToggleButton="Control Panel"
            titleForm="Plot Settings"
            pf={this.props.pf}
            callBackSortOrder={this.receiveSortOrder}
            callBackShowMu={this.receiveShowMu}
            callBackShowCv={this.receiveShowCv}
          />
        </CCardFooter>
      </CCard>
    );
  }
}

export default StatCard;
