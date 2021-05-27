import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
const ContactLayout = (props) => {
    return (
        <div>
            <Header />
            <h1>Layout contact</h1>
            { props.children}
            <Footer />
        </div>
    )
}
export default ContactLayout