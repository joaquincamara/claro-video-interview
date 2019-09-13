import * as types from './types'

const defaultState = {
  list: [],
  getMoviesIsPending: true,
  error: {}
}

const movies = (state = defaultState, action) => {
  const { payload } = action;
  switch (action.type) {
    // TODO: action type
    case 'getMovies':
      return state
    case types.GET_MOVIES_PENDING:
      return {
        ...state,
        getMoviesIsPending: payload.loading,
      }
    case types.ERROR:
      return {
        ...state,
        error: payload.err
      }
    case types.GET_MOVIES:
      return {
        ...state,
        list: payload.movies
      }
    default:
      return state
  }
}

export default movies
