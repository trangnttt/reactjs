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
import RouteComponent from '../components/Route'

export default () => {
  return (
    <Router>
      <Switch>
        <RouteComponent exact path="/" layout={DefaultLayout} component={Home} />
        <RouteComponent path="/about" layout={AboutLayout} component={About} />
      
        <RouteComponent path="/about/son" layout={AboutLayout} component={About} />
        <RouteComponent path="/news" layout={NewsLayout} component={News} />
        <RouteComponent path="/contact" layout={ContactLayout} component={Contact} />
      </Switch>
    </Router>
    // <Router>
    //   <Switch>
    //     <Route exact path={["/"]}>
    //       <DefaultLayout>
    //         <Switch>
    //           <Route path="/" exact component={Home} />
    //         </Switch>
    //       </DefaultLayout>
    //     </Route>
    //     <Route path={["/about"]}>
    //       <AboutLayout>
    //         <Switch>
    //           <Route path="/about" component={About} />
    //         </Switch>
    //       </AboutLayout>
    //     </Route>
    //     <Route path={["/news"]}>
    //       <NewsLayout>
    //         <Switch>
    //           <Route path="/news" component={News} />
    //         </Switch>
    //       </NewsLayout>
    //     </Route>
    //     <Route path={["/contact"]}>
    //       <ContactLayout>
    //         <Switch>
    //           <Route path="/contact" component={Contact} />
    //         </Switch>
    //       </ContactLayout>
    //     </Route>
    //   </Switch>
    // </Router>
  )
}
