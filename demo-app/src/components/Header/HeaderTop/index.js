import React from 'react'
import '../styles/header.scss'
import MenuTop from './MenuTop'
import MoreMenu from './MoreMenu'
import Language from './Language'

const HeaderTop = () => {
    return (
        <div className="header-top">
            <div className="header-top__row wrapper">
                <MenuTop />
                <Language />
                <MoreMenu />
            </div>
        </div>
    )
}
export default HeaderTop