import axios from 'axios'
import { rootUrl, rootEndpoint, movieDetailEndpoint } from '../endPoints/EndPoints'

export const getComponentList = () => axios.get(`${rootUrl}${rootEndpoint}`)

export const getMovieDetail = (id) => axios.get(`${rootUrl}${movieDetailEndpoint}${id}`)

export const apiCall = (url, method, params = {}) => {
  /* Use un proxy CORS para brincar el error, por eso el url va con prefijo de localhost:1337 */
  return axios({
    method,
    url,
    baseURL: rootUrl,
  params})
}
