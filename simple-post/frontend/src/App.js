import React, { Component, Fragment } from 'react';

import Post from './components/Post';
import './App.css';
import { getPosts } from './utils/api-util';

const POSTS_START_PAGE_NUMBER = 1;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };

    this.fetchPosts = this.fetchPosts.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }
  componentDidMount() {
    this.fetchPosts(POSTS_START_PAGE_NUMBER);
  }
  fetchPosts(pageNumber) {
    getPosts(pageNumber).then((response) => {
      localStorage.setItem('posts_current_page_number', pageNumber);
      this.setState({ posts: response.data });
    });
  }
  handlePrevClick() {
    const currentPageNumber = localStorage.getItem('posts_current_page_number');
    this.fetchPosts(parseInt(currentPageNumber, 10) - 1);
  }
  handleNextClick() {
    const currentPageNumber = localStorage.getItem('posts_current_page_number');
    this.fetchPosts(parseInt(currentPageNumber, 10) + 1);
  }
  render() {
    return (
      <div>
        <h2>Posts</h2>
        <hr />
        <br />
        <button onClick={this.handlePrevClick}>
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
