import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeNavbar from './components/home/HomeNavbar';
import MoviesList from './components/home/MoviesList';
import { withResult } from './components/hoc/TheMovieAPI';
import { ADD_MOVIE } from './redux/action-types';
import Form from './components/home/Form';


const EnhancedMoviesList = withResult(MoviesList)

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeNavbar />
        <div className="movies">
          <EnhancedMoviesList />
        </div>

        <div>
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
