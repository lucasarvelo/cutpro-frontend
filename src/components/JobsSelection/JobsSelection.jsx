import React, { Component } from "react";
import { connect } from "react-redux";
import Optimizer from "../../services/optimizer/optimizer";
import { addCuttingList } from "../../actions/cutListActions";

export class JobsSelection extends Component {
  constructor(props) {
    super(props);
    this.state = { jobsToProcess: [] };
  }

  handleOnClick = job => {
    const selectedJobNumber = job.jobNumber;
    if (
      this.state.jobsToProcess.some(
        ({ jobNumber }) => jobNumber === selectedJobNumber
      )
    ) {
      this.setState({
        jobsToProcess: this.state.jobsToProcess.filter(
          job => job.jobNumber !== selectedJobNumber
        )
      });
    } else {
      this.setState({
        jobsToProcess: [...this.state.jobsToProcess, job]
      });
    }
  };

  generateCuttingList = () => {
    const windowsTotal = this.state.jobsToProcess
      .map(order => order.windows.length)
      .reduce((windowsTotal, orderTotal) => {
        return windowsTotal + orderTotal;
      }, 0);

    if (this.state.jobsToProcess.length > 0 && windowsTotal > 0) {
      const optimizerResult = new Optimizer(
        this.state.jobsToProcess,
        this.props.options
      ).optimize();
      this.props.addCuttingList(optimizerResult);
    } else {
      alert("No products to process, choose other jobs, please.");
    }
  };

  render() {
    const jobs = this.props.jobs.map((job, index) => {
      return (
        <tr
          key={index}
          onClick={() => this.handleOnClick(job)}
          className={
            this.state.jobsToProcess.some(
              ({ jobNumber }) => jobNumber === job.jobNumber
            )
              ? "table-success"
              : ""
          }
        >
          <td>{index + 1} </td>
          <td>{job.jobNumber}</td>
          <td>{job.clientNumber}</td>
          <td>{job.clientName}</td>
          <td>{job.windows.length}</td>
        </tr>
      );
    });

    return (
      <div className="container-fluid">
        <table className="table table-hover table-stripe table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Job Number</th>
              <th scope="col">Client #</th>
              <th scope="col">Client Name</th>
              <th scope="col">Total Windows</th>
            </tr>
          </thead>
          <tbody>{jobs}</tbody>
        </table>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.generateCuttingList}
        >
          Generate Cutting List
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const jobs = state.jobsReducer.jobs;
  const options = state.optionsReducer;

  return { jobs: jobs, options: options };
};

const mapDispatchToProps = { addCuttingList };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobsSelection);
