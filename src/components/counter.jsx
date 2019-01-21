import React, { Component } from "react";
class Counter extends Component {
  // state = {
  //   value: this.props.counter.value
  //   // tags: []
  //   // imageUrl: "https://picsum.photos/200"
  // };
  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  // constructor() {
  //   super();
  //   console.log("constructor...", this);
  // }
  // handleIncrement = product => {
  //   console.log("handleIncrement -->", product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    // console.log(this.props.children);
    // console.log("PROPS", this.props);
    return (
      <div>
        {/* {this.props.id} */}
        <span style={{ fontSize: 20 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          // Send input Obj in "handleIncrement" method
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {/* {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))} */}
      </div>
    );
  }
  formatCount() {
    const { value } = this.props.counter;
    return value !== 0 ? value : "ZERO";
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
