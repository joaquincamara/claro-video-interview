import { combineReducers } from 'redux'

import moviesReducer from './features/movies/reducers'
import movieReducer from './features/movieDetail/reducers'

export default combineReducers({
  movies: moviesReducer,
  movie: movieReducer
})
