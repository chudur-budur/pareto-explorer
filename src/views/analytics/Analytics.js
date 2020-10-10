import React from "react";
import { CContainer, CRow, CCol } from "@coreui/react";

import Scatter3DCard from "./Scatter3DCard";
import PCPCard from "./PCPCard";
import PaletteVizCard from "./PaletteVizCard";
import PolarCard from "./PolarCard";
import StatCard from "./StatCard";
import SummaryWidgetsCard from "./SummaryWidgetsCard";

import * as defaultData from "../../assets/data/cdebmdk-nbi/4d/index";

class Analytics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      name: defaultData.default.name,
      data: defaultData.default,
    };
  }

  fetchData = () => {
    fetch("/api/" + this.props.match.params.paretoFront)
      .then((res) => res.json())
      .then(
        (result) => {
          if (result !== null) {
            const object = JSON.parse(result);
            this.setState({ isLoaded: true, name: object.name, data: object });
          } else {
            this.setState({
              isLoaded: true,
              name: defaultData.default.name,
              data: defaultData.default,
            });
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            error: error,
            isLoaded: true,
            name: defaultData.default.name,
            data: defaultData.default,
          });
        }
      );
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.paretoFront !== this.props.match.params.paretoFront
    ) {
      this.fetchData();
    }
  }

  render() {
    const { error, isLoaded, name, data } = this.state;
    console.log(
      "name = " + JSON.stringify(name) + ", data.m = " + JSON.stringify(data.m)
    );
    return (
      <>
        <CContainer fluid className="mr-0 ml-0 pr-0 pl-0 pb-0 pt-0">
          <CRow md="12">
            <CCol md="6" className="pr-1 pl-1">
              <Scatter3DCard pf={data} />
            </CCol>
            <CCol md="6" className="pr-1 pl-1">
              <SummaryWidgetsCard width="6" pf={data} />
            </CCol>
          </CRow>
          <CRow>
            <CCol md="12" className="pr-1 pl-1">
              <PCPCard pf={data} />
            </CCol>
          </CRow>
          <CRow md="12">
            <CCol md="12" className="pr-1 pl-1">
              <PaletteVizCard pf={data} />
            </CCol>
          </CRow>
          <CRow md="12">
            <CCol md="6" className="pr-1 pl-1">
              <PolarCard pf={data} />
            </CCol>
            <CCol md="6" className="pr-1 pl-1">
              <StatCard pf={data} />
            </CCol>
          </CRow>
        </CContainer>
      </>
    );
  }
}

export default Analytics;
