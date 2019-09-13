import { connect } from 'react-redux'
import Movies from './Movies'

import { GetMoviesThunk } from 'store/features/movies/'

const mapDispatchToProps = (dispatch) => {
  return {
    getMoviesList: () => {
      dispatch(GetMoviesThunk())}
  }
}

const mapStateToProps = (state) => {
  const { list, getMoviesIsPending } = state.movies
  return {
    movieList: list,
    isLoading: getMoviesIsPending
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
