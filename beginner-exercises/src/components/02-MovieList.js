import React from 'react';

const movies = ['The Godfather', 'Miss Sloane'];
function MovieList() {
  return (
    <ul className="movie-list">
      {movies.map(movie => (
        <li>{movie}</li>
      ))}
    </ul>
  );
}

export default MovieList;
