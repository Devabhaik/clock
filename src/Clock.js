import React, { Component } from 'react';

class Clock extends Component {
  constructor() {
    super();
    const today = new Date(),
      date = today.getHours() + ': ' + today.getMinutes();
    this.state = { date: date };
  }

  render() {
    console.log(this.state.date);
    return <div>Hello</div>;
  }
}

export default Clock;
