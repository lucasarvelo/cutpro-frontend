import React, { Component } from "react";
import { connect } from "react-redux";
import WindowsRow from "./WindowsRow";

class WindowsTable extends Component {
  render() {
    const windows = this.props.jobs
      .find(job => job.jobNumber === this.props.jobNumber)
      .windows.map((window, index) => {
        debugger;
        return (
          <WindowsRow
            window={window}
            index={index}
            key={"window" + index}
            jobNumber={this.props.jobNumber}
          />
        );
      });

    return (
      <table className="table table-striped table-sm table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Width</th>
            <th scope="col">Height</th>
            <th scope="col">Quantity</th>
            <th scope="col" colSpan="2" />
          </tr>
        </thead>
        <tbody>{windows}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => state.jobsReducer;

export default connect(mapStateToProps)(WindowsTable);
