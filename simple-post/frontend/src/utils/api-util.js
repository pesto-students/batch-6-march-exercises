const SERVER_BASE_URL = 'http://localhost:3001';

const fetchData = (url, requestOptions) => {
  const defaultHeaders = {
    headers: {
      'pesto-password': 'darth vader',
    },
  };

  return fetch(url, Object.assign(defaultHeaders, requestOptions)).then(response => response.json());
};

export const getPosts = (pageNumber) => {
  const url = `${SERVER_BASE_URL}/posts/${pageNumber}`;
  return fetchData(url, { method: 'GET' });
};

export const getPost = (postId) => {
  const url = `${SERVER_BASE_URL}/post/${postId}`;
  return fetchData(url, { method: 'GET' });
};
