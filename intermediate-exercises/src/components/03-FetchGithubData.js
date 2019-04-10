import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const GithubRepos = ({ repos }) => (
  <div>
    {repos.length > 0 && <h3>Following are the projects from github.com</h3> }
    <ul>
      { repos.map(gitRepo => <li key={gitRepo.id}><a rel="noopener noreferrer" target="_blank" href={gitRepo.html_url} >{gitRepo.name}</a></li>) }
    </ul>
  </div>
);

GithubRepos.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  repos: PropTypes.array.isRequired,
};

const getGithubUrl = username => `https://api.github.com/users/${username}/repos`;

class UsernameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      repos: [],
      loadingRepos: false,
    };
    this.fetchRepos = this.fetchRepos.bind(this);
    this.updateRepos = this.updateRepos.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  fetchRepos() {
    const { username } = this.state;
    const gitGubRepoUrl = getGithubUrl(username);

    this.setState({ loadingRepos: true });
    axios.get(gitGubRepoUrl)
      .then((response) => {        
        this.updateRepos(response.data);
      });
  }
  updateRepos(repos) {
    this.setState({ repos, loadingRepos: false });
  }
  handleOnChange(event) {
    this.setState({ username: event.target.value });
  }
  render() {
    const { loadingRepos, repos, username } = this.state;
    return (
      <div>
        <label htmlFor="github_username">
          Github username
          <br />
          <input id="github_username" type="text" value={username} onChange={this.handleOnChange} name="username" />
        </label>
        <br />
        <button disabled={loadingRepos} onClick={this.fetchRepos} > { loadingRepos ? 'Loading repos...' : 'Get Repos' } </button>
        <br />
        <GithubRepos repos={repos} />
      </div>
    );
  }
}

export default UsernameForm;
