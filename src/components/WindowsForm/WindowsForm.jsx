import React, { Component } from "react";
import { connect } from "react-redux";
import { addWindow } from "../../actions/jobsActions";

class WindowsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 0,
      quantity: 0,
      type: props.materialTypes[2].name
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addWindow(this.props.jobNumber, this.state);
  };

  handleOnChange = event => {
    const id = event.target.id,
      value = isNaN(event.target.value)
        ? event.target.value
        : Number(event.target.value);
    this.setState({ [id]: value });
  };

  render() {
    const windowTypes = this.props.materialTypes.map((materialType, index) => (
      <option key={index}>{materialType.name}</option>
    ));

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="width">Width</label>
          <input
            type="text"
            className="form-control"
            id="width"
            onChange={this.handleOnChange}
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
        <div className="form-group">
          <label htmlFor="type">Window Type</label>
          <select
            className="form-control"
            id="type"
            onChange={this.handleOnChange}
            value={this.state.type}
          >
            {windowTypes}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Window
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => state.optionsReducer;
const mapDispatchToProps = { addWindow };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WindowsForm);
