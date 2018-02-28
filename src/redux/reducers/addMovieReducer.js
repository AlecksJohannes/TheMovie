import { ADD_MOVIE } from '../action-types';

const addMovieReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_MOVIE: 
      return state.concat(action.payload);
    default:
      return state;
  }
}

export { addMovieReducer }
