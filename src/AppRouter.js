import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import { Home } from './containers'

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
  </BrowserRouter>
)

export default AppRouter