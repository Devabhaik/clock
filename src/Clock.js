import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
  constructor() {
    super();
    const today = new Date(),
      date =
        today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    this.state = { date: date };
  }

  componentDidMount() {
    setInterval(() => {
      const currentDate = new Date(),
        currentTime =
          currentDate.getHours() +
          ':' +
          currentDate.getMinutes() +
          ':' +
          currentDate.getSeconds();

      this.setState({ date: currentTime });
    }, 1000);
  }

  render() {
    return <div>{this.state.date}</div>;
  }
}

export default Clock;
