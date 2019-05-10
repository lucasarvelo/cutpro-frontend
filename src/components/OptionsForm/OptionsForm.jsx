import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/optionsActions";
import MaterialTypeRow from "./MaterialTypeRow";

export class OptionsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bladeThickness: props.bladeThickness,
      marginError: props.marginError,
      materialTypes: [...props.materialTypes]
    };
  }

  addMaterialType = () => {
    this.setState({
      materialTypes: [
        ...this.state.materialTypes,
        "New Material " + (this.state.materialTypes.length + 1)
      ]
    });
  };

  deleteMaterialType = typeIndex => {
    const materialTypesUpdated = this.state.materialTypes.filter(
      (materialType, index) => index !== typeIndex
    );

    this.setState({ materialTypes: materialTypesUpdated });
  };

  updateMaterialType = (typeIndex, typeName) => {
    const materialTypesUpdated = this.state.materialTypes.map(
      (materialType, index) => {
        if (index === typeIndex) {
          return typeName;
        }
        return materialType;
      }
    );

    this.setState({ materialTypes: materialTypesUpdated });
  };

  handleOnChange = event => {
    const id = event.target.id,
      value = Number.isNaN(event.target.value)
        ? Number(event.target.value)
        : event.target.value;
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (event.target.reportValidity()) {
      this.props.updateBladeThickness(this.state.bladeThickness);
      this.props.updateMarginError(this.state.marginError);
      this.props.updateMaterialTypes(this.state.materialTypes);
    }
    alert("Options Updated");
  };

  handleCancel = event => {
    this.setState({
      bladeThickness: this.props.bladeThickness,
      marginError: this.props.marginError,
      materialTypes: [...this.props.materialTypes]
    });
    alert("Options Restored");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="bladeThickness">
            <h4>Blade Thickness</h4>
          </label>
          <input
            type="text"
            className="form-control"
            id="bladeThickness"
            onChange={this.handleOnChange}
            value={this.state.bladeThickness}
            required
            pattern="^\d*(\.\d{0,3})?$"
          />
        </div>
        <div className="form-group">
          <label htmlFor="marginError">
            <h4>Margin Error</h4>
          </label>
          <input
            type="text"
            className="form-control"
            id="marginError"
            onChange={this.handleOnChange}
            value={this.state.marginError}
            required
            pattern="^\d*(\.\d{0,3})?$"
          />
        </div>
        <div className="form-group">
          <h4>Material Types</h4>
          <table className="table table-striped table-sm table-hover m-2">
            <thead>
              <tr>
                <th scope="col" className="align-middle">
                  #
                </th>
                <th scope="col" className="align-middle">
                  Type
                </th>
                <th scope="col" colSpan="2" className="align-middle">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-success"
                    onClick={this.addMaterialType}
                  >
                    Add Material
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.materialTypes.map((type, index) => (
                <MaterialTypeRow
                  type={type}
                  index={index}
                  key={index}
                  deleteMaterialType={this.deleteMaterialType}
                  updateMaterialType={this.updateMaterialType}
                />
              ))}
            </tbody>
          </table>
        </div>
        <button type="submit" className="btn btn-primary m-2">
          Save
        </button>
        <button
          type="button"
          className="btn btn-danger m-2"
          onClick={this.handleCancel}
        >
          Cancel
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => state.optionsReducer;
const mapDispatchToProps = { ...actions };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionsForm);
