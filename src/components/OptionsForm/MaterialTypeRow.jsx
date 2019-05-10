import React, { Component } from "react";

export class MaterialTypeRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      materialType: this.props.type,
      index: this.props.index,
      readOnly: true
    };
  }

  toggleReadOnly = () => {
    this.setState({ readOnly: !this.state.readOnly });
  };

  //Change behavior if editing row
  handleDelete = () => {
    const prevState = {
      materialType: this.state.materialType
    };
    if (this.state.readOnly) {
      this.props.deleteMaterialType(this.state.index);
    } else {
      this.setState(prevState);
      this.toggleReadOnly();
    }
  };

  handleUpdate = () => {
    if (this.state.readOnly) {
      this.toggleReadOnly();
    } else {
      this.props.updateMaterialType(this.state.index, this.state.materialType);
      this.toggleReadOnly();
    }
  };

  handleOnChange = event => {
    const id = event.target.id,
      value = event.target.value;
    this.setState({ [id]: value });
  };

  render() {
    return (
      <tr>
        <th scope="row" className="align-middle">
          {this.state.index + 1}
        </th>
        <td className="align-middle">
          <input
            type="text"
            className={
              this.state.readOnly ? "form-control readOnly" : "form-control"
            }
            id="materialType"
            onChange={this.handleOnChange}
            value={this.state.materialType}
            required
            readOnly={this.state.readOnly}
          />
        </td>
        <td className="align-middle">
          <button
            type="button"
            className="btn btn-outline-primary btn-sm m-1"
            onClick={this.handleUpdate}
          >
            {this.state.readOnly ? "Edit" : "Update"}
          </button>
        </td>
        <td className="align-middle">
          <button
            type="button"
            className="btn btn-outline-danger btn-sm m-1"
            onClick={this.handleDelete}
          >
            {this.state.readOnly ? "Delete" : "Cancel"}
          </button>
        </td>
      </tr>
    );
  }
}

export default MaterialTypeRow;
