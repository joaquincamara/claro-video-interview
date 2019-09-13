import { connect } from 'react-redux'
import MovieDetail from './MovieDetail'

import { GetMovieDetailThunk } from 'store/features/movieDetail'

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieDetail: (id) => {
      dispatch(GetMovieDetailThunk(id))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    details: state.movie.details
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)
