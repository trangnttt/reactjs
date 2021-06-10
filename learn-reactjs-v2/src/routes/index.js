import React from "react"
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom"
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()
// Layout
import DefaultLayout from '../layouts/DefaultLayout'
import AboutLayout from '../layouts/AboutLayout'
import NewsLayout from '../layouts/NewsLayout'
import ContactLayout from '../layouts/ContactLayout'

// pages
import Login from '../pages/Login'
import Home from "../pages/Home"
import About from "../pages/About"
import News from "../pages/News"
import Contact from "../pages/Contact"
import Todo from "../pages/Todo"
import NotFound from '../pages/Error/NotFound'
// props
import RouteComponent from '../components/Route'
import PrivateRoute from '../components/Route/PrivateRoute'

export default () => {
  return (
    <Router history={history}>
      <Switch>
        <RouteComponent exact path="/login" layout={DefaultLayout} component={Login} />
        <RouteComponent exact path="/" layout={DefaultLayout} component={Home} />
        <RouteComponent exact path="/about" layout={AboutLayout} component={About} />
        <RouteComponent exact path="/news" layout={AboutLayout} component={About} />
        <RouteComponent exact path="/news/post" layout={AboutLayout} component={News} />        
        <RouteComponent path="/news" layout={NewsLayout} component={News} />
        <PrivateRoute exact path="/todo" layout={ContactLayout} component={Todo} />
        <RouteComponent exact path="/contact" layout={DefaultLayout} component={Contact} />
        <RouteComponent path="*" layout={DefaultLayout} component={NotFound} />
      </Switch>
    </Router>
  )
}
