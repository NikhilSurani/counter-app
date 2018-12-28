import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 1
  };
  render() {
    return (
      <React.Fragment>
        <h1>{this.formatCount()}</h1>
        <button>Increment</button>
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? count : "ZERO";
  }
}

export default Counter;
