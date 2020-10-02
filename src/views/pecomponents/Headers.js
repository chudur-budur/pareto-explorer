import React from "react";
import { CBadge } from "@coreui/react";

export class ChartHeader extends React.Component {
  render() {
    return (
      <div className="card-title">
        <h5 id="plot-name" className="mb-0">
          {this.props.title}
        </h5>
        <div className="card-header-actions">
          <CBadge color="success" className="float-left">
            Data: {this.props.subtitle}
          </CBadge>
        </div>
      </div>
    );
  }
}
