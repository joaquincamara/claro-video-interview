import * as types from './types'

export const isPending = (loading) => {
  return {
    type: types.GET_MOVIES_DETAIL_PENDING,
    payload: { loading}
  }
}

export const error = (err) => {
  return {
    type: types.ERROR,
    payload: { err}
  }
}

export const setMovieDetail = (movieDetail) => {
  return {
    type: types.GET_MOVIE_DETAIL,
    payload: { movieDetail}
  }
}

export default {
  isPending,
  error,
setMovieDetail}
