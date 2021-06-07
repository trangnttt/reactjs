import React from 'react'
import './styles/header.scss'

import HeaderTop from './HeaderTop'
import HeaderMiddle from './HeaderMiddle'
import HeaderBottom from './HeaderBottom'

const Header = () => {
    return (
        <>
            <div className="header">
                <HeaderTop />
                <HeaderMiddle />
                <HeaderBottom />
            </div>
        </>



    )
}
export default Header