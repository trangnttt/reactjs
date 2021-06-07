import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
const DefaultLayout = (props) => {
    return (
        <>
            <Header />
            {/* <h1>Layout default</h1> */}
            {props.children}

            <Footer />
        </>
    )
}

export default DefaultLayout