import React, { Component } from "react";
import { connect } from "react-redux";
import { addWindow } from "../../actions/jobsActions";

const mapDispatchToProps = { addWindow };

class WindowsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 0,
      quantity: 0
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addWindow(this.props.jobNumber, this.state);
  };

  handleOnChange = event => {
    const id = event.target.id,
      value = Number(event.target.value);
    this.setState({ [id]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="width">Width</label>
          <input
            type="text"
            className="form-control"
            id="width"
            onChange={this.handleOnChange}
            step=".001"
            required
            pattern="^\d*(\.\d{0,3})?$"
            title="Width should contain a number up to three decimal places"
          />
        </div>
        <div className="form-group">
          <label htmlFor="height">Height</label>
          <input
            type="text"
            className="form-control"
            id="height"
            onChange={this.handleOnChange}
            step=".001"
            required
            pattern="^\d*(\.\d{0,3})?$"
            title="Height should contain a number up to three decimal places"
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            onChange={this.handleOnChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Window
        </button>
      </form>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(WindowsForm);
