import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
const DefaultLayout = (props) => {
    return (
        <div>
            <Header />
            {/* <h1>Layout default</h1> */}
            { props.children}
            <Footer />
        </div>
    )
}

export default DefaultLayout