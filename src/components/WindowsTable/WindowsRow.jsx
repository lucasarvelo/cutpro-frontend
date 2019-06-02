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
      type: props.window.type,
      readOnly: true,
      isValid: true,
      prevState: {
        width: props.window.width,
        height: props.window.height,
        quantity: props.window.quantity,
        type: props.window.type
      }
    };
  }

  componentWillReceiveProps = nextProps => {
    this.setState({
      index: nextProps.index,
      jobNumber: nextProps.jobNumber,
      width: nextProps.window.width,
      height: nextProps.window.height,
      quantity: nextProps.window.quantity,
      type: nextProps.window.type,
      prevState: {
        width: nextProps.window.width,
        height: nextProps.window.height,
        quantity: nextProps.window.quantity,
        type: nextProps.window.type
      }
    });
  };

  toggleReadOnly = () => {
    this.setState({
      readOnly: !this.state.readOnly,
      prevState: {
        width: this.state.width,
        height: this.state.height,
        quantity: this.state.quantity,
        type: this.state.type
      }
    });
  };

  isValid = () => {
    const width = this.refs.width,
      height = this.refs.height;

    if (height.checkValidity() && width.checkValidity()) {
      return true;
    } else {
      height.reportValidity();
      width.reportValidity();
      return false;
    }
  };

  handleDelete = event => {
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
      if (this.isValid()) {
        this.props.updateWindow(this.state);
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
    const windowTypes = this.props.materialTypes.map((materialType, index) => (
      <option key={index}>{materialType.name}</option>
    ));

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
            ref="width"
            onChange={this.handleOnChange}
            value={
              isNaN(this.state.width) || !this.state.readOnly
                ? this.state.width
                : this.state.width.toFixed(3)
            }
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
            ref="height"
            onChange={this.handleOnChange}
            value={
              isNaN(this.state.height) || !this.state.readOnly
                ? this.state.height
                : this.state.height.toFixed(3)
            }
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
          <select
            className="form-control select-width-auto"
            id="type"
            onChange={this.handleOnChange}
            value={this.state.type}
            disabled={this.state.readOnly}
          >
            {windowTypes}
          </select>
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

const mapStateToProps = state => state.optionsReducer;
const mapDispatchToProps = { deleteWindow, updateWindow };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WindowsRow);
