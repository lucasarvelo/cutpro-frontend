import React from "react";
import { Link } from "react-router-dom";
import CuttingListProcessTable from "../components/CuttingListProcessTable/CuttingListProcessTable";

const CuttingListProcess = props => {
  return (
    <div className="container-fliud">
      <div className="row">
        <div className="col-md-3 p-4">
          <Link to="/cuttinglist">
            <button className="btn btn-info">Back to Cutting Lists </button>
          </Link>
        </div>
        <div className="col-md-9 p-4">
          <h1>PO Number: {props.match.params.id}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <CuttingListProcessTable poNumber={Number(props.match.params.id)} />
        </div>
      </div>
    </div>
  );
};

export default CuttingListProcess;
