import React, { useState } from 'react'
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Home } from './pages/home'
import { store } from './helpers/store'
 import { Provider } from 'react-redux'

const App = () => {

    return (

        <Router >
            <Switch>

                <Route path="/" exact component={Home} />

                <Redirect to="/" />
            </Switch>
        </Router>
    )

}

const AppWithStore = () => {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  
  }
  
  export default AppWithStore;