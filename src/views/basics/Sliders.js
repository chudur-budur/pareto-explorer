import React from "react";
import Slider from "@uiw/react-slider";

export class RangeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }

  handleChange = (value) => {
    if (this.props.callBack) {
      this.props.callBack(value);
    }
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <Slider
          min={this.props.min}
          max={this.props.max}
          value={parseFloat(this.state.value).toFixed(2)}
          dots
          step={this.props.step ? this.props.step : 0.5}
          marks={{
            [this.props.markerValue]: parseFloat(this.props.markerText).toFixed(
              2
            ),
          }}
          style={this.props.style ? this.props.style : { maxWidth: 340 }}
          disabled={this.props.disabled}
          onChange={(value) => {
            this.handleChange(value);
          }}
        />
        <div>
          {this.props.title}:&nbsp;
          <b>{parseFloat(this.state.value).toFixed(2)}</b>
        </div>
      </div>
    );
  }
}
