import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteWindow, updateWindow } from "../../actions/jobsActions";

class WindowsRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: props.index,
      jobNumber: props.jobNumber,
      width: props.window.width,
      height: props.window.height,
      quantity: props.window.quantity,
      readOnly: true,
      isValid: true,
      prevState: {
        width: props.window.width,
        height: props.window.height,
        quantity: props.window.quantity
      }
    };
  }

  toggleReadOnly = () => {
    this.setState({
      readOnly: !this.state.readOnly,
      prevState: {
        width: this.state.width,
        height: this.state.height,
        quantity: this.state.quantity
      }
    });
  };

  handleDelete = () => {
    //Change behavior if editing row
    if (this.state.readOnly) {
      this.props.deleteWindow(this.state.jobNumber, this.state.index);
    } else {
      this.setState(this.state.prevState);
      this.toggleReadOnly();
    }
  };

  handleUpdate = () => {
    if (this.state.readOnly) {
      this.toggleReadOnly();
    } else {
      this.props.updateWindow(this.state);
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
            id="width"
            onChange={this.handleOnChange}
            value={this.state.width}
            required
            readOnly={this.state.readOnly}
            pattern="^\d*(\.\d{0,3})?$"
            title="Width should contain a number up to three decimal places"
          />
        </td>
        <td className="align-middle">
          <input
            type="text"
            className={
              this.state.readOnly ? "form-control readOnly" : "form-control"
            }
            id="height"
            onChange={this.handleOnChange}
            value={this.state.height}
            required
            readOnly={this.state.readOnly}
            pattern="^\d*(\.\d{0,3})?$"
            title="Height should contain a number up to three decimal places"
          />
        </td>
        <td className="align-middle">
          <input
            type="number"
            className={
              this.state.readOnly ? "form-control readOnly" : "form-control"
            }
            id="quantity"
            onChange={this.handleOnChange}
            value={this.state.quantity}
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

const mapDispatchToProps = { deleteWindow, updateWindow };

export default connect(
  null,
  mapDispatchToProps
)(WindowsRow);
