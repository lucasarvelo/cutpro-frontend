import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteJob } from "../../actions/jobsActions";
import { withRouter } from "react-router-dom";

class JobsTable extends Component {
  render() {
    return (
      <table className="table table-sm table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Jobs Number</th>
            <th scope="col">Client Number</th>
            <th scope="col">Client Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.jobs.map((job, index) => {
            return (
              <tr key={"job" + index}>
                <th scope="row" className="align-middle">
                  {index + 1}
                </th>
                <td className="align-middle">{job.jobNumber}</td>
                <td className="align-middle">{job.clientNumber}</td>
                <td className="align-middle">{job.clientName}</td>
                <td className="align-middle">
                  <button
                    className="btn btn-outline-primary btn-sm m-1"
                    onClick={() => {
                      this.props.history.push("/jobs/" + job.jobNumber);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm m-1"
                    onClick={() => {
                      this.props.deleteJob(job);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return state.jobsReducer;
};

const mapDispatchToProps = { deleteJob };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(JobsTable)
);
