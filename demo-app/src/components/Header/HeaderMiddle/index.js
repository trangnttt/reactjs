import React from 'react'
import LogoHeader from './Logo'
import SearchHeader from './Search'
import MenuIconHeader from './MenuIcon'
import CartHeader from './Cart'
const HeaderMiddle = () => {
    return (
        
        <div className="wrapper">
              <div className="header-mid">
              <LogoHeader />
               <SearchHeader />
               <MenuIconHeader />
               <CartHeader />
              </div>
        </div>
    )
}
export default HeaderMiddle