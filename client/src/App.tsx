import React, { useState } from 'react'
import { Home } from './pages/home'

import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

const App = () => {

    return (
        <Router >
        <Switch>

          <Route path="/" exact component={Home} />
 


          <Redirect to="/home" />
        </Switch>
      </Router>
    )

}

export default App
