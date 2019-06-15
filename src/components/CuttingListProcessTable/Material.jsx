import React, { Component } from "react";
import Part from "./Part";

export class Material extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
  }

  toggleList = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const parts = this.props.material.parts.map((part, index) => {
      return (
        <Part
          key={"part" + index}
          index={index}
          partNumber={part.partNumber}
          partLength={part.partLength}
          partType={part.type}
          isCut={part.isCut}
          cutPart={() => this.props.cutPart(index)}
        />
      );
    });

    return (
      <React.Fragment>
        <tr onClick={this.toggleList}>
          <td>{this.props.index + 1}</td>
          <td>{this.props.material.materialLeft.toFixed(3)}</td>
          <td>{this.props.material.materialWaste.toFixed(3)}</td>
        </tr>
        {this.state.expanded && (
          <tr className="remove-hover">
            <td />
            <td colSpan="2">
              <table className="table table-hover table-sm table-striped">
                <thead>
                  <tr className="remove-hover">
                    <th scope="col">#</th>
                    <th scope="col">Part Number</th>
                    <th scope="col">Part Type</th>
                    <th scope="col">Part Length</th>
                  </tr>
                </thead>
                <tbody>{parts}</tbody>
              </table>
            </td>
          </tr>
        )}
      </React.Fragment>
    );
  }
}

export default Material;
