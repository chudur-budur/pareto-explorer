import React from "react";
import {
  CDropdownItem,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CSelect,
} from "@coreui/react";
import { Combination, Permutation } from "js-combinatorics";

export class CombinatorialAxesSelection extends React.Component {
  constructor(props) {
    super(props);
    let indices = new Array(this.props.n).fill(0).map((v, i) => i);
    this.it = new Combination(indices, this.props.r);
    this.state = {
      axes: this.it.nth(0),
    };
  }

  handleChange = (event) => {
    let i = event.target.value;
    if (this.props.callBack) {
      this.props.callBack(this.it.nth(i));
    }
    this.setState({ axes: this.it.nth(i) });
    event.preventDefault();
  };

  renderMenuItems = () => {
    let menuItems = [];
    for (let i = 0; i < this.it.length; i++) {
      let label = "[ ";
      let axv = this.it.nth(i);
      for (let j = 0; j < axv.length - 1; j++) {
        label = label + "f" + (axv[j] + 1) + ",  ";
      }
      label = label + "f" + (axv[axv.length - 1] + 1) + " ]";
      menuItems.push(
        <option key={"cas-opt-" + i + 1} id={"cas-opt-" + i + 1} value={i}>
          {label}
        </option>
      );
    }
    return menuItems;
  };

  render() {
    return (
      <CSelect
        custom
        size="sm"
        name="cas-sel"
        id="cas-sel"
        onChange={this.handleChange}
      >
        {this.renderMenuItems()}
      </CSelect>
    );
  }
}

export class CombinatorialAxesDropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    let indices = new Array(this.props.n).fill(0).map((v, i) => i);
    this.it = new Combination(indices, this.props.r);
    this.state = {
      axes: this.it.nth(0),
    };
  }

  handleOnClick = (i) => {
    if (this.props.callBack) {
      this.props.callBack(this.it.nth(i));
    }
    this.setState({
      axes: this.it.nth(i),
    });
  };

  renderMenuItems = () => {
    let menuItems = [];
    for (let i = 0; i < this.it.length; i++) {
      let label = Array.from(this.it.nth(i).entries()).map((e) =>
        e[0] < this.it.nth(i).length - 1 ? (
          <div key={e[1] + 1}>
            <h5>
              f<sub>{e[1] + 1}</sub>,
            </h5>
          </div>
        ) : (
          <div key={e[1] + 1}>
            <h5>
              f<sub>{e[1] + 1}</sub>
            </h5>
          </div>
        )
      );
      label.unshift(Object(<h5 key={"cadm-lb-" + i + 1}>[</h5>));
      label.push(Object(<h5 key={"cadm-rb-" + i + 1}>]</h5>));
      menuItems.push(
        <CDropdownItem
          key={"cadm-ddi-" + i + 1}
          onClick={() => this.handleOnClick(i)}
        >
          {label}
        </CDropdownItem>
      );
    }
    return menuItems;
  };

  render() {
    return (
      <CDropdown id="cadm-dd">
        <CDropdownToggle id="cadm-ddt" color="info" size="sm">
          {this.props.title}
        </CDropdownToggle>
        <CDropdownMenu>{this.renderMenuItems()}</CDropdownMenu>
      </CDropdown>
    );
  }
}

export class PermutationalAxesDropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    let indices = new Array(this.props.n).fill(0).map((v, i) => i);
    this.it = new Permutation(indices, this.props.r);
    this.state = {
      axes: this.it.nth(0),
    };
  }

  handleOnClick = (i) => {
    if (this.props.callBack) {
      this.props.callBack(this.it.nth(i));
    }
    this.setState({
      axes: this.it.nth(i),
    });
  };

  renderMenuItems = () => {
    let menuItems = [];
    for (let i = 0; i < this.it.length; i++) {
      let label = Array.from(this.it.nth(i).entries()).map((e) =>
        e[0] < this.it.nth(i).length - 1 ? (
          <div key={e[1] + 1}>
            <h5>
              f<sub>{e[1] + 1}</sub>,
            </h5>
          </div>
        ) : (
          <div key={e[1] + 1}>
            <h5>
              f<sub>{e[1] + 1}</sub>
            </h5>
          </div>
        )
      );
      label.unshift(Object(<h5 key={"padm-lb-" + i + 1}>[</h5>));
      label.push(Object(<h5 key={"padm-rb-" + i + 1}>]</h5>));
      menuItems.push(
        <CDropdownItem
          key={"padm-ddi-" + i + 1}
          onClick={() => this.handleOnClick(i)}
        >
          {label}
        </CDropdownItem>
      );
    }
    return menuItems;
  };

  render() {
    return (
      <CDropdown id="padm-dd">
        <CDropdownToggle id="padm-ddt" color="info" size="sm">
          {this.props.title}
        </CDropdownToggle>
        <CDropdownMenu>{this.renderMenuItems()}</CDropdownMenu>
      </CDropdown>
    );
  }
}
