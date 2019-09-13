import { getComponentList, apiCall } from 'services/movies'
import { setMovies, error, isPending } from './actions'

export const GetMoviesThunk = () => {
  return dispatch => {
    dispatch(isPending(true))
    getComponentList().then(response => {
      const url = response.data.response.modules.module[0].components.component[2].properties.url
      const args = 'api_version=v5.86&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=9s5hqq76r3g6sg4jb90l38us52'
      apiCall(`${url}&${args}`)
        .then(res => {
          dispatch(setMovies(res.data.response.groups))
        }).catch(err => {
        dispatch(error(err))
      })
    }).catch(err => {
      dispatch(error(err))
    })
    dispatch(isPending(false))
  }
}
