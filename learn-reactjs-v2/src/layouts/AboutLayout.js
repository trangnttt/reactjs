import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {  Route, Link
} from "react-router-dom";

const AboutLayout = (props) => {
    return (
        <div>
            <Header />
            { props.children}
            {/* About page
            <br />
            <Link to="/about/sub1">Sub1</Link>
            <Link to="/about/sub2">Sub2</Link>
            <Route exact path="/about/sub1">
                <div>Sub1</div>
            </Route>
            <Route exact path="/about/sub2">
                <div>Sub2</div>
            </Route> */}
            <Footer />
        </div>
    )
}
export default AboutLayout