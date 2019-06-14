import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { removeCuttingList } from "../../actions/cutListActions";

export class CuttingListTable extends Component {
  handleDelete = poNumber => {
    this.props.removeCuttingList(poNumber);
  };

  handleProcess = poNumber => {
    this.props.history.push("/cuttinglist/" + poNumber);
  };

  render() {
    const cuttingLists = this.props.cuttingLists.map((cuttingList, index) => {
      return (
        <tr key={index}>
          <td className="align-middle">{index + 1}</td>
          <td className="align-middle">{cuttingList.poNumber}</td>
          <td className="align-middle">{cuttingList.ordersTotal}</td>
          <td className="align-middle">{cuttingList.windowsTotal}</td>
          <td className="align-middle">{cuttingList.dateCreation}</td>
          <td className="align-middle">
            <button
              className="btn btn-outline-primary btn-sm m-1"
              onClick={() => this.handleProcess(cuttingList.poNumber)}
            >
              Process
            </button>
            <button
              className="btn btn-outline-danger btn-sm m-1"
              onClick={() => this.handleDelete(cuttingList.poNumber)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });

    return (
      <table className="table table-hover table-stripe table-sm ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">PO Number</th>
            <th scope="col">Orders</th>
            <th scope="col">Windows</th>
            <th scope="col">Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>{cuttingLists}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => state.cuttingListReducer;

const mapDispatchToProps = { removeCuttingList };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CuttingListTable)
);
