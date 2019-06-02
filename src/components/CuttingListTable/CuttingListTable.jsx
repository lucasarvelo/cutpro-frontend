import React, { Component } from "react";
import { connect } from "react-redux";

export class CuttingListTable extends Component {
  render() {
    const cuttingLists = this.props.cuttingLists.map((cuttingList, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{cuttingList.poNumber}</td>
          <td>{cuttingList.ordersTotal}</td>
          <td>{cuttingList.windowsTotal}</td>
          <td>{cuttingList.dateCreation}</td>
        </tr>
      );
    });
    return (
      <table className="table table-hover table-stripe table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">PO Number</th>
            <th scope="col">Orders Total</th>
            <th scope="col">Windows Total</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>{cuttingLists}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => state.cuttingListReducer;

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CuttingListTable);
