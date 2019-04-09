import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Pesto' };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    console.log("I'm mounted");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    console.log('Updated!');
  }
  componentWillUnmount() {
    console.log('Good night, Pesto!');
  }
  handleClick() {
    this.setState({ name: 'Sagar' });
  }
  render() {
    return (
      <div>
        <p>Good morning, {this.state.name}!</p>
        <button onClick={this.handleClick}>Change name</button>
      </div>
    );
  }
}

export default LifeCycle;
