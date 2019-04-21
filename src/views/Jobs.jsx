import React from "react";
import JobsForm from "../components/JobsForm/JobsForm";
import JobsTable from "../components/JobsTable/JobsTable";

const Jobs = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 p-4">
          <JobsForm />
        </div>
        <div className="col-md-8 p-4">
          <JobsTable />
        </div>
      </div>
    </div>
  );
};

export default Jobs;
