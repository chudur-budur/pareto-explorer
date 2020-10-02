import React from "react";
import { CCard, CCardBody, CCardHeader, CCardFooter } from "@coreui/react";
import { ChartHeader, Scatter3DControlForm } from "../basics";
import Scatter3D from "./Scatter3D";

class Scatter3DCard extends React.Component {
  constructor(props) {
    super(props);
    this.defaultPsf = 3.0;
    this.defaultKsf = 2.0;
    this.state = {
      axes: Array(this.props.pf.m)
        .fill(0)
        .map((v, i) => i),
      colorScheme: "color-by-centroid",
      psf: this.defaultPsf,
      ksf: this.defaultKsf,
    };
  }

  receiveAxes = (params) => {
    this.setState({ axes: params });
  };

  receiveColorScheme = (params) => {
    this.setState({ colorScheme: params });
  };

  receivePointSize = (params) => {
    this.setState({ psf: params });
  };

  receiveKneeSize = (params) => {
    this.setState({ ksf: params });
  };

  render() {
    return (
      <CCard>
        <CCardHeader className="pb-2 pt-2">
          <ChartHeader
            title="Scatter Plot"
            subtitle={this.props.pf.name + "(" + this.props.pf.m + "D)"}
          />
        </CCardHeader>
        <CCardBody className="pl-2 pt-3 pr-2 pb-2">
          <Scatter3D
            pf={this.props.pf}
            dataNames={["PF", "Knees"]}
            axes={this.state.axes}
            axisLabelPrefix={"f"}
            colorScheme={this.state.colorScheme}
            ksf={this.state.ksf}
            psf={this.state.psf}
          />
        </CCardBody>
        <CCardFooter className="pl-2 pt-2 pr-2 pb-2">
          <Scatter3DControlForm
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
            callBackAxes={this.receiveAxes}
            callBackColorScheme={this.receiveColorScheme}
            callBackPointSize={this.receivePointSize}
            callBackKneeSize={this.receiveKneeSize}
          />
        </CCardFooter>
      </CCard>
    );
  }
}

export default Scatter3DCard;
