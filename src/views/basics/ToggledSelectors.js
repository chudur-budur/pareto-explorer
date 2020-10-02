import React from "react";
import { CButtonGroup, CButton } from "@coreui/react";

export class TwoWayToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: this.props.options[0],
    };
  }

  handleToggleClick = (value) => {
    if (this.props.callBack) {
      this.props.callBack(value);
    }
    this.setState({
      selection: value,
    });
  };

  renderButtonLeft = () => {
    return (
      <CButton
        color="outline-info"
        key="twt-btn-left"
        id="twt-btn-left"
        active={this.state.selection === this.props.options[0]}
        disabled={this.props.disabled[0]}
        onClick={() => this.handleToggleClick(this.props.options[0])}
      >
        {this.props.titles[0]}
      </CButton>
    );
  };

  renderButtonRight = () => {
    return (
      <CButton
        color="outline-info"
        key="twt-btn-right"
        id="twt-btn-right"
        active={this.state.selection === this.props.options[1]}
        disabled={this.props.disabled[1]}
        onClick={() => this.handleToggleClick(this.props.options[1])}
      >
        {this.props.titles[1]}
      </CButton>
    );
  };

  render() {
    return (
      <CButtonGroup id="twt-bg" size="sm">
        {this.renderButtonLeft()}
        {this.renderButtonRight()}
      </CButtonGroup>
    );
  }
}
