import { getMovieDetail } from 'services/movies'
import { error as errorAction, isPending, setMovieDetail } from './actions'

export const GetMovieDetailThunk = (id) => {
  return dispatch => {
    dispatch(isPending(true))
    getMovieDetail(id).then((response) => {
      dispatch(setMovieDetail(response.data.response.group.common))
    }).catch((error) => {
      dispatch(errorAction(error))
    })
    dispatch(isPending(false))
  }
}
