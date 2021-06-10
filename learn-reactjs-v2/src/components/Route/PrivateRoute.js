import React from "react"
import { Route, Redirect } from "react-router-dom"



const PrivateRoute = ({ component: Component, layout: Layout, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            <Layout>
                {
                    localStorage.getItem('email') ? <Component {...props} /> : <Redirect to="/login" />
                }
            </Layout>
        )} />
    )
}

export default PrivateRoute