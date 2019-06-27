import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const DisplayLatestJobs = props => {
  const handleEdit = job => {
    props.history.push('/jobs/' + job.jobNumber);
  };

  const latestThreeJobs = props.jobs.slice(0, 3).map((job, index) => {
    return (
      <tr key={'job' + index}>
        <th scope="row" className="align-middle">
          {index + 1}
        </th>
        <td className="align-middle">{job.jobNumber}</td>
        <td className="align-middle">{job.clientNumber}</td>
        <td className="align-middle">{job.clientName}</td>
        <td className="align-middle">
          <button
            className="btn btn-outline-primary btn-sm m-1"
            onClick={() => handleEdit(job)}
          >
            Edit
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="card">
      <table className="table table-striped">
        <thead>
          <tr>
            <th colSpan="5">
              <h1>Latest Jobs</h1>
            </th>
          </tr>
        </thead>
        <tbody>{latestThreeJobs}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => state.jobsReducer;

export default withRouter(connect(mapStateToProps)(DisplayLatestJobs));
