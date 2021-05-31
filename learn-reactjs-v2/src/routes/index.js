import React from "react"
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom"

// Layout
import DefaultLayout from '../layouts/DefaultLayout'
import AboutLayout from '../layouts/AboutLayout'
import NewsLayout from '../layouts/NewsLayout'
import ContactLayout from '../layouts/ContactLayout'

// pages
import Home from "../pages/Home"
import About from "../pages/About"
import News from "../pages/News"
import Contact from "../pages/Contact"
import NotFound from '../pages/Error/NotFound'
// props
import RouteComponent from '../components/Route'

export default () => {
  return (
    <Router>
      <Switch>
        <RouteComponent exact path="/" layout={DefaultLayout} component={Home} />
        <RouteComponent exact path="/about" layout={AboutLayout} component={About} />
        <RouteComponent exact path="/news" layout={AboutLayout} component={About} />
        <RouteComponent exact path="/news/post" layout={AboutLayout} component={News} />        <RouteComponent path="/news" layout={NewsLayout} component={News} />
        <RouteComponent exact path="/contact" layout={ContactLayout} component={Contact} />
        <RouteComponent path="*" layout={DefaultLayout} component={NotFound} />
      </Switch>
    </Router>
  )
}
