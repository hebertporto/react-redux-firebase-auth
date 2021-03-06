import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './home/containers/Home'
import RestrictedArea from './home/containers/RestrictedArea'
import Login from './auth/containers/Login'

import {
  HOME,
  LOGIN,
  RESTRICTED_AREA,
  FORGOT_PASSWORD
} from './../config/utils/routes'

import ForgotPassword from './auth/containers/ForgotPassword'
import requireAuth from './shared/components/requireAuth'
import NoMatch from './shared/containers/NoMatch'

const Router = props => (
  <Switch>
    <Route exact path={HOME} component={Home} />
    <Route exact path={LOGIN} component={Login} />
    <Route exact path={FORGOT_PASSWORD} component={ForgotPassword} />
    <Route exact path={RESTRICTED_AREA} component={requireAuth(RestrictedArea)} />
    <Route component={NoMatch} />
  </Switch>
)

export default Router
