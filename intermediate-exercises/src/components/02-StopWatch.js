import React, { Component } from 'react';

/*
* Exercise 2:
*
*  Create a `StopWatch` component that has a Start/Stop button and a Clear
*  button.
*
*  Pressing Start will start a timer and the lapsed time in
*  milliseconds should be displayed above the buttons.
*
*  Once started the Start button should change to Stop. Clicking Stop
*  will stop the timer but lapsed time will be preserved.
*
*  Clicking Start again will resume the timer from where it left off.
*
*  Clicking Clear will stop the timer if it's running and reset the lapsed time to 0.
*/

class StopWatch extends Component {
  constructor(props){
    super(props)
    this.state = {
      time: 0,
      timerStatus: false
    }
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }

  start(){
    this.setState({
      timerStatus: true
    })
    this.timer = setInterval(() => {
      this.setState({
        time : this.state.time+=1
      });
    }, 1);
  }

  stop(){
    this.setState({
      timerStatus : false
    })
    clearInterval(this.timer);
  }

  reset(){
    this.setState({
      timerStatus : false,
      time: 0
    })
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h2>{this.state.time}</h2>
        <button type="button" onClick={this.state.timerStatus ? this.stop : this.start}>{this.state.timerStatus ? 'Stop' : 'Start'}</button>
        
        <button type="button" onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default StopWatch;
