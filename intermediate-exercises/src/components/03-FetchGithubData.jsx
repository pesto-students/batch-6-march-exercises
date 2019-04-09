/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Axios is a promise based HTTP client for the browser and node.js.
 * Refer to their github page to see how to use it to make HTTP requests.
 * Axios: https://github.com/axios/axios
 *
 * It is best not to fetch data from a server in the `render` method.
 * Any change to the state of a component can cause a re-render of the
 * component. This will likely happen more often than we want.
 * Use the appropriate lifecycle method to make the axios request.
 *
 * Exercise:
 *
 *  Create a `GithubRepos` component that lists all the GitHub repos for a user.
 *  Allow the repos to be provided as a prop.
 *
 *  https://api.github.com/users/{username}/repos
 */
/* eslint-disable react/no-unused-state */
const GithubRepos = ({ repos }) => (
  <ul>
    {repos.map(repo => (
      <li key={repo.id}>{repo.name}</li>
    ))}
  </ul>
);

// Task: Open the console in the browser. There will be a warning
// about incorrect prop type for user.
// Define the correct prop type for the prop `repos`
GithubRepos.propTypes = {
  repos: PropTypes.array,
};

/* eslint-disable react/no-multi-comp */
class UsernameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      repos: [],
    };
    this.input = React.createRef();
    this.updateUserName = this.updateUserName.bind(this);
  }

  componentDidUpdate() {
    fetch(`https://api.github.com/users/${this.state.username}/repos`)
      .then(res => res.json())
      .then(data => this.setState({ repos: data }));
  }

  updateUserName(e) {
    e.preventDefault();
    this.setState({ username: this.input.current.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.updateUserName}>
          <input ref={this.input} type="text" name="username" />
          <input type="submit" onClick={this.updateUserName} value="Get Repos" />
        </form>
        {<GithubRepos repos={this.state.repos} />}
      </div>
    );
  }
}

export default UsernameForm;
