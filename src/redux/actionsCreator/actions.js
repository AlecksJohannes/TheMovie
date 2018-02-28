import { ADD_MOVIE } from '../action-types';

const addNewMovie = (movie) => ({
  type: ADD_MOVIE,
  payload: movie.name
})

export { addNewMovie }
