import React, { Component } from 'react';

class FavoriteMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: '' };
    this.promptuser = 'Hey there. Enter your favorite movie.';
    this.onMovieChange = this.onMovieChange.bind(this);
  }

  /* eslint-disable no-unused-vars, react/no-unused-state */
  onMovieChange(event) {
    this.setState({ movie: event.target.value });
  }

  render() {
    const movie = this.state.movie ? this.state.movie : this.promptuser;
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div>
        <p>
          My favorite movie is <span style={{ color: 'blue' }}>{movie}</span>
        </p>
        <input type="text" name="name" onChange={this.onMovieChange} />
      </div>
    );
  }
}

// Notice some details here:
//   1. `onChange` attribute isn't placed between `" "`, but `{ }` - we want to
//      reference function, not string.
//   2. You must be very careful on methods binding. You can do it in the constructor.
//   3. `state` object is `null` by default! If you want to display initial
//       value from state object, you should initialize state object.

// ProTip: Always specify input's `name` attribute: React uses it to identify
//         inputs on page. Not doing so may cause you to waste a long time
//         debugging your program.

export default FavoriteMovie;
