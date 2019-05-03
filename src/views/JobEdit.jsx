import React from "react";
import { Link } from "react-router-dom";
import WindowsForm from "../components/WindowsForm/WindowsForm";
import WindowsTable from "../components/WindowsTable/WindowsTable";

const JobEdit = props => {
  return (
    <div className="container-fliud">
      <div className="row">
        <div className="col-md-3 p-4">
          <Link to="/jobs">
            {" "}
            <button className="btn btn-info">Back to Jobs </button>
          </Link>
        </div>
        <div className="col-md-9 p-4">
          <h1>Job Number: {props.match.params.id}</h1>
        </div>
        <div className="col-md-3 p-4">
          <WindowsForm jobNumber={Number(props.match.params.id)} />
        </div>
        <div className="col-md-9 p-4">
          <WindowsTable jobNumber={Number(props.match.params.id)} />
        </div>
      </div>
    </div>
  );
};

export default JobEdit;
