import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/home'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path="/perfil/:username" component={Perfil} />
      <Route path="/perfil" component={Perfil} />
      <Route path="/*" component={NotFound} /> */}
    </Switch>
  )
}

export default Routes
