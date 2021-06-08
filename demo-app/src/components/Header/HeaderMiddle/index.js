import React from 'react'
import LogoHeader from './Logo'
import SearchHeader from './Search'
import MenuIconHeader from './MenuIcon'
import CartHeader from './Cart'
import styles from '../styles/header.module.scss'
const HeaderMiddle = () => {
    return (
        
        <div className="container">
              <div className={styles['header-mid']}>
              <LogoHeader />
               <SearchHeader />
               <MenuIconHeader />
               <CartHeader />
              </div>
        </div>
    )
}
export default HeaderMiddle