import React, { Component } from "react";
import Material from "./Material";

export class List extends Component {
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
    const materials = this.props.list.materials.map((material, index) => {
      return (
        <Material
          key={"material-" + index}
          material={material}
          index={index}
          cutPart={(materialIndex, partIndex) =>
            this.props.cutPart(index, materialIndex, partIndex)
          }
        />
      );
    });

    return (
      <React.Fragment>
        <tr onClick={this.toggleList}>
          <td>{this.props.index + 1}</td>
          <td>{this.props.list.materialType}</td>
          <td>{this.props.list.materialLength.toFixed(3)}</td>
          <td>{this.props.list.marginError.toFixed(3)}</td>
          <td>{this.props.list.bladeThickness.toFixed(3)}</td>
        </tr>
        {this.state.expanded && (
          <tr className="remove-hover">
            <td />
            <td colSpan="4">
              <table className="table table-hover table-sm table-striped">
                <thead>
                  <tr className="remove-hover">
                    <th scope="col">#</th>
                    <th scope="col">Material Waste</th>
                    <th scope="col">Material Left</th>
                  </tr>
                </thead>
                <tbody>{materials}</tbody>
              </table>
            </td>
          </tr>
        )}
      </React.Fragment>
    );
  }
}

export default List;
