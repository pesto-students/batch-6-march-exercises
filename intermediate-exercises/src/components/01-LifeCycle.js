import React from 'react';

/*
  Tasks for this exercise are in comments inside the component class code.
  In this exercise lifecycle methods will be used to provide convenient debug
  messages in developer's console.
  There are more lifecycle methods available.
  Those three presented are commonly used.
 */

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Pesto' };
  }

  // This code will be called when the component finishes mounting
  // (so it is visible for a user).
  componentDidMount() {
    console.log("I'm mounted!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Updated");
    console.log({ prevProps, prevState });
  }

  componentWillUnmount() {
    console.log(`Good night, ${this.state.name}!`);
  }

  render() {
    return <div>
      <p>Good morning, {this.state.name}!</p>
      <button onClick={() => this.setState({ name: 'Pesto Students'})}>Click Me!</button>
      </div>;
  }
}

export default LifeCycle;
