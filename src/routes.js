import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import isAuth from './auth'

import Welcome from './components/Welcome'
import Register from './components/Forms/Register'
import Login from './components/Forms/Login'
import ForgotPassword from './components/Forms/ForgotPassword'
import Start from './components/Start'
import Profile from './components/Profile'
// import Ranking from './components/Ranking'
import Loading from './components/Tools/Loading'
import PageNotFound from './components/PageNotFound'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route 
    {...rest}
    render={props =>
      isAuth()
        ? <Component {...props} />
        : <Redirect to={{ pathname: "/welcome", state: { from: props.location } }} />
    }
  />
)

const Routes = () => (
  <div className="disable-select">
    <Router>
      <Switch>
        <Route path="/welcome" component={() => <Welcome />} />
        <Route path="/register" component={() => <Register />} />
        <Route path="/login" component={() => <Login />} />
        <Route path="/forgot" component={() => <ForgotPassword />} />
        <PrivateRoute exact path={["/", "/start"]} component={() => <Start />} />
        <PrivateRoute path="/profile" component={() => <Profile />} />
        {/* <PrivateRoute path="/ranking" component={() => <Ranking />} /> */}
        <Route path="/loading" component={() => <Loading />} />
        <Route path="*" component={() => <PageNotFound />} />
      </Switch>
    </Router>
  </div>
)

export default Routes