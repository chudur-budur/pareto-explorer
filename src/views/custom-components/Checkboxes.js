import React from "react";
import { CFormGroup, CLabel, CInputCheckbox } from "@coreui/react";

export class TwoItemCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option1: this.props.options[0],
      option2: this.props.options[1],
    };
  }

  handleClickOne = (e) => {
    if (this.props.callBackOption1) {
      this.props.callBackOption1(e.target.checked);
    }
    this.setState({
      option1: e.target.checked,
    });
    // console.log("e.target.checked.0 = " + e.target.checked);
  };

  handleClickTwo = (e) => {
    if (this.props.callBackOption2) {
      this.props.callBackOption2(e.target.checked);
    }
    this.setState({
      option2: e.target.checked,
    });
    // console.log("e.target.checked.1 = " + e.target.checked);
  };

  render() {
    return (
      <div>
        <CFormGroup variant="custom-checkbox" inline>
          <CInputCheckbox
            custom
            id="inline-checkbox1"
            name="inline-checkbox1"
            value="option1"
            disabled={this.props.disabled[0]}
            checked={this.state.option1}
            onChange={(e) => this.handleClickOne(e)}
          />
          <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">
            {this.props.titles[0]}
          </CLabel>
        </CFormGroup>
        <CFormGroup variant="custom-checkbox" inline>
          <CInputCheckbox
            custom
            id="inline-checkbox2"
            name="inline-checkbox2"
            value="option2"
            disabled={this.props.disabled[1]}
            checked={this.state.option2}
            onChange={(e) => this.handleClickTwo(e)}
          />
          <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">
            {this.props.titles[1]}
          </CLabel>
        </CFormGroup>
      </div>
    );
  }
}
