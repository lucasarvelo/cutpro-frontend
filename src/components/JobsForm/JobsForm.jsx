import React, { Component } from "react";
import { connect } from "react-redux";
import { addJob } from "../../actions/jobsActions";

const mapDispatchToProps = { addJob };

class JobsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobNumber: 0,
      clientNumber: 0,
      clientName: "",
      formChecked: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addJob(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="jobNumber">Job Number</label>
          <input
            type="text"
            className="form-control"
            id="jobNumber"
            placeholder="123456"
            onChange={event => {
              this.setState({ jobNumber: Number(event.target.value) });
            }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="clientNumber">Client Number</label>
          <input
            type="text"
            className="form-control"
            id="clientNumber"
            placeholder="123456"
            onChange={event => {
              this.setState({ clientNumber: Number(event.target.value) });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="clientName">Client Name</label>
          <input
            type="text"
            className="form-control"
            id="clientName"
            placeholder="Name"
            onChange={event => {
              this.setState({ clientName: event.target.value });
            }}
            required
          />
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="formCheck"
              onChange={event => {
                this.setState({ formChecked: event.target.checked });
              }}
              required
            />
            <label className="form-check-label" htmlFor="formCheck">
              I double check the information in this form
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Job
        </button>
      </form>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(JobsForm);
