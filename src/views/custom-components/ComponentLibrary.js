import React from "react";
import { CCol, CCardHeader, CLabel, CSwitch } from "@coreui/react";
import {
  CombinatorialAxesSelection,
  TwoWayToggle,
  RangeSlider,
  ThreeWayRadio,
  TwoItemCheckbox,
} from ".";

export var CardHeaderComponent = (props) => {
  return (
    <>
      <CCardHeader>
        {props.titleForm}
        {props.subtitleForm !== undefined && (
          <small>{props.subtitleForm}</small>
        )}
      </CCardHeader>
    </>
  );
};

export var AxesSelectionComponent = (props) => {
  return (
    <>
      <CCol md={props.mdl ? props.mdl : "3"}>
        <CLabel htmlFor="select">Select Axes</CLabel>
      </CCol>
      <CCol xs="12" md={props.mdc ? props.mdc : "9"}>
        <CombinatorialAxesSelection
          title="Select Axes"
          n={props.pf.m}
          r="3"
          callBack={props.callBackAxes}
        />
      </CCol>
    </>
  );
};

export var ColorSelectionComponent = (props) => {
  return (
    <>
      <CCol md={props.mdl ? props.mdl : "3"}>
        <CLabel htmlFor="select">Select Colors</CLabel>
      </CCol>
      <CCol xs="12" md={props.mdc ? props.mdc : "9"}>
        <TwoWayToggle
          options={["color-by-centroid", "color-by-cv"]}
          titles={["Centroid Distance", "Constraint Violation"]}
          disabled={[!props.pf.color_cd, !props.pf.color_cv]}
          callBack={props.callBackColorScheme}
        />
      </CCol>
    </>
  );
};

export var PointSizeSelectionComponent = (props) => {
  return (
    <>
      <CCol md={props.mdl ? props.mdl : "3"}>
        <CLabel htmlFor="select">Point Size</CLabel>
      </CCol>
      <CCol xs="12" md={props.mdc ? props.mdc : "9"}>
        <RangeSlider
          title="Factor"
          min={props.minPoint}
          max={props.maxPoint}
          value={props.psf}
          markerValue={props.markerValuePoint}
          markerText={props.markerTextPoint}
          disabled={!props.pf.ptid}
          callBack={props.callBackPointSize}
        />
      </CCol>
    </>
  );
};

export var KneeSizeSelectionComponent = (props) => {
  return (
    <>
      <CCol md={props.mdl ? props.mdl : "3"}>
        <CLabel htmlFor="select">Knee Size</CLabel>
      </CCol>
      <CCol xs="12" md={props.mdc ? props.mdc : "9"}>
        <RangeSlider
          title="Factor"
          min={props.minKnee}
          max={props.maxKnee}
          value={props.ksf}
          markerValue={props.markerValueKnee}
          markerText={props.markerTextKnee}
          disabled={!props.pf.mu}
          callBack={props.callBackKneeSize}
        />
      </CCol>
    </>
  );
};

export var LineSmoothnessToggleComponent = (props) => {
  return (
    <>
      <CCol md={props.mdl ? props.mdl : "2"}>
        <CLabel htmlFor="select">Curved Lines</CLabel>
      </CCol>
      <CCol xs="12" md={props.mdc ? props.mdc : "2"}>
        <CSwitch
          className={"mx-1"}
          variant={"3d"}
          color={"info"}
          defaultChecked={false}
          onChange={(e) => props.callBackIsSmooth(e)}
        />
      </CCol>
    </>
  );
};

export var LineWidthSelectionComponent = (props) => {
  return (
    <>
      <CCol md={props.mdl ? props.mdl : "3"}>
        <CLabel htmlFor="select">Line Width</CLabel>
      </CCol>
      <CCol xs="12" md={props.mdc ? props.mdc : "3"}>
        <RangeSlider
          title="Factor"
          min={props.minLineWidth}
          max={props.maxLineWidth}
          step={props.stepPoint}
          style={props.stylePoint}
          value={props.lineWidth}
          markerValue={props.markerValuePoint}
          markerText={props.markerTextPoint}
          disabled={!props.pf.ptid}
          callBack={props.callBackLineWidth}
        />
      </CCol>
    </>
  );
};

export var KneeLineWidthSelectionComponent = (props) => {
  return (
    <>
      <CCol md={props.mdl ? props.mdl : "3"}>
        <CLabel htmlFor="select">Knee Line Width</CLabel>
      </CCol>
      <CCol xs="12" md={props.mdc ? props.mdc : "3"}>
        <RangeSlider
          title="Factor"
          min={props.minLineWidthKnee}
          max={props.maxLineWidthKnee}
          step={props.stepKnee}
          style={props.styleKnee}
          value={props.lineWidthKnee}
          markerValue={props.markerValueKnee}
          markerText={props.markerTextKnee}
          disabled={!props.pf.mu}
          callBack={props.callBackLineWidthKnee}
        />
      </CCol>
    </>
  );
};

export var StatDataSelectionComponent = (props) => {
  return (
    <>
      <CCol md={props.mdl ? props.mdl : "3"}>
        <CLabel>Select Data</CLabel>
      </CCol>
      <CCol md={props.mdc ? props.mdc : "9"}>
        <TwoItemCheckbox
          options={[true, true]}
          titles={["μ", "CV"]}
          disabled={[!props.pf.mu, !props.pf.cv]}
          callBackOption1={props.callBackShowMu}
          callBackOption2={props.callBackShowCv}
        />
      </CCol>
    </>
  );
};

export var StatSortOrderSelectionComponent = (props) => {
  return (
    <>
      <CCol md={props.mdl ? props.mdl : "3"}>
        <CLabel>Sort Order</CLabel>
      </CCol>
      <CCol md={props.mdc ? props.mdc : "9"}>
        <ThreeWayRadio
          options={["-1", "0", "1"]}
          titles={["Index", "μ", "CV"]}
          disabled={[false, !props.pf.mu, !props.pf.cv]}
          callBack={props.callBackSortOrder}
        />
      </CCol>
    </>
  );
};
