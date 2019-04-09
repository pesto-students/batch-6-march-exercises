import React, { Component } from 'react';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLapsed: 0,
      isStopped: true,
    };

    this.intervalId = null;

    this.handleStartStop = this.handleStartStop.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  handleStartStop() {
    const { isStopped } = this.state;
    if (!isStopped) {
      clearInterval(this.intervalId);
      this.setState({ isStopped: true })
    } else {
      this.setState({ isStopped: false });
      this.intervalId = setInterval(() => {
        let { timeLapsed } = this.state;
        timeLapsed += 1;
        this.setState({ timeLapsed });
      }, 1);
    }
  }

  handleClear() {
    clearInterval(this.intervalId);
    this.setState({ timeLapsed: 0, isStopped: true });
  }

  render() {
    const buttonText = this.state.isStopped ? 'Start' : 'Stop';
    const buttonStyle = {
      height: '30px',
      width: '100px',
      margin: '15px',
    };

    const timeStyle = {
      fontSize: '100px',
      color: this.state.isStopped ? 'black' : 'green',
    };

    return (
      <div>
        <h2>Stop Watch</h2>
        <div style={timeStyle}>{this.state.timeLapsed}</div>
        <div>
          <button style={buttonStyle} onClick={this.handleStartStop}>{buttonText}</button>
          <button style={buttonStyle} onClick={this.handleClear}>Clear</button>
        </div>
      </div>
    );
  }
}

export default StopWatch;
