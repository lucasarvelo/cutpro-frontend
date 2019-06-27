import React from 'react';
import DisplayLatestJobs from '../components/DisplayLatestJobs/DisplayLatestJobs';
import DisplayLatestCuttingLists from '../components/DisplayLatestCuttingLists/DisplayLatestCuttingLists';

const Dashboard = () => {
  return (
    <div className="container-fluid pt-4">
      <div className="row">
        <div className="col-lg">
          <DisplayLatestJobs />
        </div>
        <div className="col-lg">
          <DisplayLatestCuttingLists />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
