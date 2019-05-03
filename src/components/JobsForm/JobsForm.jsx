import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addJob } from "../../actions/jobsActions";

class JobsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobNumber: "",
      clientNumber: "",
      clientName: "",
      formCheck: false,
      windows: []
    };
  }

  handleOnChange = event => {
    const target = event.target;
    const id = target.id;
    let value;
    if (target.type === "checkbox") {
      value = target.checked;
    } else if (id === "clientNumber" || id === "jobNumber") {
      value = Number(target.value);
    } else {
      value = target.value;
    }
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const jobNumber = this.state.jobNumber;

    if (this.props.jobs.find(job => job.jobNumber === jobNumber)) {
      alert(
        "Job Number " +
          jobNumber +
          " is already created!\r\nUse a diferent job number or update the existing job"
      );
    } else {
      this.props.addJob(this.state);
      this.props.history.push("/jobs/" + this.state.jobNumber);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="jobNumber">Job Number</label>
          <input
            type="number"
            className="form-control"
            id="jobNumber"
            value={this.state.jobNumber}
            onChange={this.handleOnChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="clientNumber">Client Number</label>
          <input
            type="number"
            className="form-control"
            id="clientNumber"
            value={this.state.clientNumber}
            onChange={this.handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="clientName">Client Name</label>
          <input
            type="text"
            className="form-control"
            id="clientName"
            value={this.state.clientName}
            onChange={this.handleOnChange}
            required
          />
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="formCheck"
              onChange={this.handleOnChange}
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

const mapStateToProps = state => {
  return { jobs: state.jobsReducer.jobs };
};
const mapDispatchToProps = { addJob };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(JobsForm)
);
