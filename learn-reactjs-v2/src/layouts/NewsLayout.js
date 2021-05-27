import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
const NewsLayout = (props) => {
    return (
        <div>
            <Header />
            <h1>Layout news</h1>
            { props.children}
            <Footer />
        </div>
    )
}
export default NewsLayout