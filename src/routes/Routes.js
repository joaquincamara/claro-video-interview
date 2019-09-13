import React from 'react'
import { Route } from 'react-router'

import Movies from 'modules/Movies'
import MovieDetail from '../modules/MovieDetail'

function Routes () {
  return (
    <React.Fragment>
      <Route exact path='/mexico/movies' component={Movies} />
      <Route exact path='/mexico/vcard/:movieName/:movieId' component={MovieDetail} />
      <Route exact path='/' component={Movies} />
    </React.Fragment>
  )
}

export default Routes
