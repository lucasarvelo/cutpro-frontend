import React, { Component } from "react";

export class MaterialTypeRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      materialType: props.type,
      materialLength: props.materialLength,
      index: props.index,
      readOnly: true,
      prevState: {
        materialType: props.type,
        materialLength: props.materialLength,
        index: props.index
      }
    };
  }

  componentWillReceiveProps = nextProps => {
    this.setState({
      materialType: nextProps.type,
      materialLength: nextProps.materialLength,
      index: nextProps.index
    });
  };

  isValid = () => {
    const materialType = this.refs.materialType,
      materialLength = this.refs.materialLength;

    if (materialType.checkValidity() && materialLength.checkValidity()) {
      return true;
    } else {
      materialType.reportValidity();
      materialLength.reportValidity();
      return false;
    }
  };

  toggleReadOnly = () => {
    this.setState({
      readOnly: !this.state.readOnly,
      prevState: {
        materialType: this.state.materialType,
        materialLength: this.state.materialLength,
        index: this.state.index
      }
    });
  };

  //Change behavior if editing row
  handleDelete = () => {
    if (this.state.readOnly) {
      this.props.deleteMaterialType(this.state.index);
    } else {
      this.setState(this.state.prevState);
      this.toggleReadOnly();
    }
  };

  handleUpdate = () => {
    if (this.state.readOnly) {
      this.toggleReadOnly();
    } else {
      if (this.isValid()) {
        this.props.updateMaterialType(this.state.index, {
          name: this.state.materialType,
          materialLength: Number(this.state.materialLength)
        });
        this.toggleReadOnly();
      }
    }
  };

  handleOnChange = event => {
    const id = event.target.id,
      value = event.target.value;
    event.target.reportValidity();
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
            ref="materialType"
            onChange={this.handleOnChange}
            value={this.state.materialType}
            required
            readOnly={this.state.readOnly}
          />
        </td>
        <td className="align-middle">
          <input
            type="text"
            className={
              this.state.readOnly ? "form-control readOnly" : "form-control"
            }
            id="materialLength"
            ref="materialLength"
            onChange={this.handleOnChange}
            value={
              isNaN(this.state.materialLength) || !this.state.readOnly
                ? this.state.materialLength
                : this.state.materialLength.toFixed(3)
            }
            required
            readOnly={this.state.readOnly}
            pattern="^\d*(\.\d{0,3})?$"
            title="Length should contain a number up to three decimal places"
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
