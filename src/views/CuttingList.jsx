import React from "react";
import JobsSelection from "../components/JobsSelection/JobsSelection";
import CuttingListTable from "../components/CuttingListTable/CuttingListTable";
const CuttingList = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 p-2">
          <JobsSelection />
        </div>
        <div className="col-lg-6 p-2">
          <CuttingListTable />
        </div>
      </div>
    </div>
  );
};

export default CuttingList;
