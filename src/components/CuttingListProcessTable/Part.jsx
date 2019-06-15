import React, { Component } from "react";

export class Part extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: props.index,
      partNumber: props.partNumber,
      partLength: props.partLength,
      partType: props.partType,
      isCut: props.isCut
    };
  }

  componentWillReceiveProps = nextProps => {
    this.setState({
      isCut: nextProps.isCut
    });
  };

  handleCut = () => {
    this.props.cutPart();
  };

  render() {
    return (
      <tr
        onClick={this.handleCut}
        className={this.state.isCut ? "table-success" : ""}
      >
        <td>{this.state.index + 1}</td>
        <td>{this.state.partNumber}</td>
        <td>{this.state.partType}</td>
        <td>{this.state.partLength}</td>
      </tr>
    );
  }
}

export default Part;
