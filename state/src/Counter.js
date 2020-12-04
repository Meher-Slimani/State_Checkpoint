import React, { Component } from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.increment();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div className="counter">
        <h4>This profile has mounted since {this.state.counter} s</h4>
      </div>
    );
  }
}

export default Counter;
