import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
  constructor() {
    super();
    const time = new Date();
    const timeData = {
      hours: time.getHours(),
      min: time.getMinutes(),
      second: time.getSeconds(),
    };

    this.state = {
      ...timeData,
      currentTime: timeData.hours + ':' + timeData.min + ':' + timeData.second,
    };
  }

  componentDidMount() {
    setInterval(() => {
      const currentDate = new Date(),
        Hour = currentDate.getHours(),
        Minutes = currentDate.getMinutes(),
        Seconds = currentDate.getSeconds();
      let currentTime = Hour + ':' + Minutes + ':' + Seconds;

      if (Hour > 12) {
        currentTime = Hour - 12 + ':' + Minutes + ':' + Seconds;
      } else if (Hour <= 9) {
        currentTime = '0' + Hour + ':' + Minutes + ':' + Seconds;
      } else if (Minutes <= 9) {
        currentTime = Hour + ':' + '0' + Minutes + ':' + Seconds;
      } else if (Seconds <= 9) {
        currentTime = Hour + ':' + Minutes + ':' + '0' + Seconds;
      }

      this.setState({ currentTime });
    }, 1000);
  }

  render() {
    console.log(this.state.currentTime);
    return <div>{this.state.currentTime}</div>;
  }
}

export default Clock;
