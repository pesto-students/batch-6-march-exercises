import React, { Component, Fragment } from 'react';

import Post from './components/Post';
import './App.css';

const baseUrl = 'http://localhost:3001/posts/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      currentPage: 1,
    };

    this.getPageData = this.getPageData.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
  }

  componentDidMount() {
    this.getPageData();
  }

  getPageData() {
    return fetch(`${baseUrl}${this.state.currentPage}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'pesto-password': 'darth vader',
      },
    })
      .then(response => response.json())
      .then(response => this.setState({
        posts: response.data,
      }));
  }

  handleNextClick() {
    this.setState({
      currentPage: this.state.currentPage += 1,
    });
    this.getPageData();
  }

  handlePrevClick() {
    this.setState({
      currentPage: this.state.currentPage -= 1,
    });
    this.getPageData();
  }

  render() {
    return (
      <div>
        <h2>Posts</h2>
        <hr />
        <br />
        <button onClick={this.handlePrevClick} disabled={this.state.currentPage === 1}>
          Previous
        </button>
        <button onClick={this.handleNextClick}>
          Next
        </button>
        <div>
          {this.state.posts.map(post => (
            <Fragment key={post.id}>
              <Post post={post} />
              <hr />
            </Fragment>
            ))}
        </div>
      </div>
    );
  }
}

export default App;
