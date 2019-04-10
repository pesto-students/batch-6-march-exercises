import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Pesto' };
    this.changeState = this.changeState.bind(this);
  }
  componentDidMount() {
    console.log('I\'m mounted!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Updated!', { prevProps, prevState });
  }

  componentWillUnmount() {
    console.log('Good night, Pesto!');
  }

  changeState() {
    this.setState({
      name: 'pesto'
    })
  }

  render() {
    return (
      <div>
        <p>Good morning, {this.state.name}!</p>
        <button type="button" onClick={this.changeState}>Click Me!</button>
      </div>
    );
  }
}

export default LifeCycle;
