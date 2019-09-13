import * as types from './types'

export const isPending = (loading) => {
  return {
    type: types.GET_MOVIES_PENDING,
    payload: {loading}
  }
}

export const error = (err) => {
  return {
    type: types.ERROR,
    payload: {err}
  }
}

export const setMovies = (movies) => {
  return {
    type: types.GET_MOVIES,
    payload: {movies}
  }
}

export default {
  isPending,
  error,
setMovies}
