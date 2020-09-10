import React, { useState } from 'react'
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Home } from './pages/home'
import { store } from './helpers/store'
import { Provider } from 'react-redux'
import { ProductAdmin } from './pages/admin'
import {Order} from './pages/order'
import Need from './pages/need'
import Orders from './pages/orders'
const App = () => {

  return (

    <Router >
      <Switch>

        <Route path="/" exact component={Home} />
        <Route path="/admin" exact component={ProductAdmin} />
        <Route path="/order" exact component={Order} />
        <Route path="/need" exact component={Need} />
        <Route path="/orders" exact component={Orders} />
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