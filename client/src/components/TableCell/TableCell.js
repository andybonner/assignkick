import React, { Component } from "react";

class TableCell extends Component {
  state = {
    value: this.props.value,
  }

  render() {
    const { value } = this.state;
    return (
      <div className="editable-cell">{value}</div>
    );
  }
}

export default TableCell;