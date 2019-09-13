import * as types from './types'

const defaultState = {
  details: {},
  getMovieDetailIsPending: false,
  error: {},
}

const movie = (state = defaultState, action) => {
  const { payload } = action;
  switch (action.type) {
    // TODO: action type
    case 'getMovies':
      return state
    case types.GET_MOVIES_DETAIL_PENDING:
      return {
        ...state,
        getMovieDetailIsPending: payload.loading
      }
    case types.ERROR:
      return {
        ...state,
        error: payload.err
      }
    case types.GET_MOVIE_DETAIL:
      return {
        ...state,
        details: payload.movieDetail
      }
    default:
      return state
  }
}

export default movie
