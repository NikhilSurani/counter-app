import React, { Component } from "react";
class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Make Ajax call and get new data
    }
  }

  componentWillUnmount() {
    console.log("counter - Unmount");
  }
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
    console.log("Counter - Rendered");
    // console.log(this.props.children);
    // console.log("PROPS", this.props);
    const { onIncrement, onDelete, counter } = this.props;
    return (
      <div>
        {/* {this.props.id} */}
        <span style={{ fontSize: 20 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          // Send input Obj in "handleIncrement" method
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => onDelete(counter.id)}
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
    let classes = "badge m-1 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
