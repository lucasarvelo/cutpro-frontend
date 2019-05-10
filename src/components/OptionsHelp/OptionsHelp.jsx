import React from "react";

function OptionsHelp() {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Blade Thickness</h5>
        <p>
          The thickness of the blade that will be used to cut the material, use
          a float number with three decimal places ( Example: 0.125 )
        </p>
        <h5 className="card-title">Margin Error</h5>
        <p>
          Margin Error will be added in every piece as waste material to assure
          any margin needed in the cut process. We recommend adding an extra
          4.000 inches to secure enough material for the cut process. This value
          should be adjusted for your specific process requirements.
          <br />
          Use a float number with three decimal places for accuracy ( Example:
          4.125 )
        </p>
        <h5 className="card-title">Material Types</h5>
        <p>
          Manage different kind of material that will be used in production.
          This list of material will be used when a window is created to assign
          a specific material for that specific window, helping organize the cut
          list even when the jobs have different materials in the windows.
        </p>
        <h5 className="card-title">
          Remember click save to apply the changes or cancel to dismiss any
          change.
        </h5>
      </div>
    </div>
  );
}

export default OptionsHelp;
