import React, { Component } from "react";
import { connect } from "react-redux";
import { cutPart } from "../../actions/cutListActions";
import List from "./List";

export class CuttingList extends Component {
  cutPart = (listIndex, materialIndex, partIndex) => {
    const payload = {
      poNumber: this.props.poNumber,
      listIndex: listIndex,
      materialIndex: materialIndex,
      partIndex: partIndex
    };
    this.props.cutPart(payload);
  };

  render() {
    const parts = this.props.cuttingLists
      .find(cuttingList => cuttingList.poNumber === this.props.poNumber)
      .cuttingList.map((list, index) => {
        return (
          <List
            key={"list-" + index}
            list={list}
            index={index}
            cutPart={this.cutPart}
          />
        );
      });
    return (
      <table className="table table-hover table-sm table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Material Type</th>
            <th scope="col">Material Length</th>
            <th scope="col">Margin Error</th>
            <th scope="col">Blade Thickness</th>
          </tr>
        </thead>
        <tbody>{parts}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => state.cuttingListReducer;

const mapDispatchToProps = {
  cutPart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CuttingList);
