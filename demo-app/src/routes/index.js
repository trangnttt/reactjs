import React from "react"
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom"

// Layout
import DefaultLayout from '../layouts/DefaultLayout'

// pages
import Home from "../pages/Home"

// props
import RouteComponent from '../components/Route'

export default () => {
    return (
      <Router>
        <Switch>
          <RouteComponent exact path="/" layout={DefaultLayout} component={Home} />
        </Switch>
      </Router>
    )
  }
  