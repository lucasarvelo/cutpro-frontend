import React from "react";
import OptionsForm from "../components/OptionsForm/OptionsForm";
import OptionsHelp from "../components/OptionsHelp/OptionsHelp";

const Options = () => {
  return (
    <div className="container-fluid p-2">
      <div className="row">
        <div className="col-md-6">
          <OptionsForm />
        </div>
        <div className="col-md-6">
          <OptionsHelp />
        </div>
      </div>
    </div>
  );
};

export default Options;
