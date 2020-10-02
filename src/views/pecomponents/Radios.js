import React from "react";
import { CFormGroup, CLabel, CInputRadio } from "@coreui/react";

export class ThreeWayRadio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: this.props.options[0],
    };
  }

  handleChange = (value) => {
    if (this.props.callBack) {
      this.props.callBack(value);
    }
    this.setState({
      selection: value,
    });
  };

  render() {
    return (
      <div>
        <CFormGroup variant="custom-radio" inline>
          <CInputRadio
            custom
            id="inline-radio1"
            name="inline-radios"
            value={this.props.options[0]}
            disabled={this.props.disabled[0]}
            checked={this.state.selection === this.props.options[0]}
            onChange={(e) => this.handleChange(e.target.value)}
          />
          <CLabel variant="custom-checkbox" htmlFor="inline-radio1">
            {this.props.titles[0]}
          </CLabel>
        </CFormGroup>
        <CFormGroup variant="custom-radio" inline>
          <CInputRadio
            custom
            id="inline-radio2"
            name="inline-radios"
            value={this.props.options[1]}
            disabled={this.props.disabled[1]}
            checked={this.state.selection === this.props.options[1]}
            onChange={(e) => this.handleChange(e.target.value)}
          />
          <CLabel variant="custom-checkbox" htmlFor="inline-radio2">
            {this.props.titles[1]}
          </CLabel>
        </CFormGroup>
        <CFormGroup variant="custom-radio" inline>
          <CInputRadio
            custom
            id="inline-radio3"
            name="inline-radios"
            value={this.props.options[2]}
            disabled={this.props.disabled[2]}
            checked={this.state.selection === this.props.options[2]}
            onChange={(e) => this.handleChange(e.target.value)}
          />
          <CLabel variant="custom-checkbox" htmlFor="inline-radio3">
            {this.props.titles[2]}
          </CLabel>
        </CFormGroup>
      </div>
    );
  }
}
