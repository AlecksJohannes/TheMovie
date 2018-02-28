import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { movies: state }
}

const ConnectedMoviesList = ({ movies }) => (
  <div>
    {movies.map(data => (
      <div>{data}</div>
    ))}
  </div>
)

const MoviesList = connect(mapStateToProps)(ConnectedMoviesList)

export default MoviesList
