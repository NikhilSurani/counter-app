import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 1
  };
  render() {
    return (
      <React.Fragment>
        <h1>Hello World!</h1>
        <button>Increment</button>
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
  }
}

export default Counter;
