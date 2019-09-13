import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import Routes from './routes'
import store from 'store'

import TopBar from 'shared/components/TopBar'

import './App.scss'

function App () {
  return (
    <Provider store={store()}>
      <div className='App'>
        <TopBar />
        <div className='App__content'>
          <Router>
            <React.Fragment>
              <Routes />
            </React.Fragment>
          </Router>
        </div>
      </div>
    </Provider>
  )
}

export default App
