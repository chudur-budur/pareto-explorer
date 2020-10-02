import React from "react";
import { CCard, CCardBody, CCardHeader, CCardFooter } from "@coreui/react";
import { ChartHeader, PCPControlForm } from "../custom-components";
import PCP from "./PCP";

class PCPCard extends React.Component {
  constructor(props) {
    super(props);
    this.defaultLineWidth = 0.25;
    this.defaultLineWidthKnee = 1.5;
    this.state = {
      colorScheme: "color-by-centroid",
      isSmooth: false,
      lineWidth: this.defaultLineWidth,
      lineWidthKnee: this.defaultLineWidthKnee,
    };
  }

  receiveColorScheme = (params) => {
    this.setState({ colorScheme: params });
  };

  toggleIsSmooth = (params) => {
    // this.child.current.toggleIsSmooth();
    // this.child.toggleIsSmooth();
    // this.child.current.toggleIsSmoothInstance();
    // this.setState({ isSmooth: !this.state.isSmooth });
    this.setState({ isSmooth: params.target.checked });
    //console.log("toggleIsSmooth = " + params.target.checked);
  };

  receiveLineWidth = (params) => {
    this.setState({ lineWidth: params });
  };

  receiveLineWidthKnee = (params) => {
    this.setState({ lineWidthKnee: params });
  };

  render() {
    return (
      <CCard>
        <CCardHeader className="pb-2 pt-2">
          <ChartHeader
            title="Parallel Coordinate Plot (PCP)"
            subtitle={this.props.pf.name + "(" + this.props.pf.m + "D)"}
          />
        </CCardHeader>
        <CCardBody className="pl-2 pt-3 pr-2 pb-2">
          <PCP
            pf={this.props.pf}
            dataNames={["PF", "Knees"]}
            axisLabelPrefix={"f"}
            colorScheme={this.state.colorScheme}
            isSmooth={this.state.isSmooth}
            lineWidth={this.state.lineWidth}
            lineWidthKnee={this.state.lineWidthKnee}
          />
        </CCardBody>
        <CCardFooter className="pl-2 pt-2 pr-2 pb-2">
          <PCPControlForm
            titleToggleButton="Control Panel"
            titleForm="Plot Settings"
            pf={this.props.pf}
            minLineWidth={0}
            maxLineWidth={2}
            stepPoint={0.01}
            stylePoint={{ maxWidth: 680 }}
            minLineWidthKnee={0}
            maxLineWidthKnee={4}
            lineWidth={this.state.lineWidth}
            lineWidthKnee={this.state.lineWidthKnee}
            markerValuePoint={this.defaultLineWidth}
            markerTextPoint={this.defaultLineWidth}
            markerValueKnee={this.defaultLineWidthKnee}
            markerTextKnee={this.defaultLineWidthKnee}
            callBackColorScheme={this.receiveColorScheme}
            callBackIsSmooth={this.toggleIsSmooth}
            callBackLineWidth={this.receiveLineWidth}
            callBackLineWidthKnee={this.receiveLineWidthKnee}
          />
        </CCardFooter>
      </CCard>
    );
  }
}

export default PCPCard;
