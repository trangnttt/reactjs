import React, { Component, useContext, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/menu.module.scss'
import { CartContext } from '@/contexts/CartContext'
import Component2 from '../Component2'
import { AuthContext } from '@/contexts/AuthContext'



const Menu = () => {
  const { handleLogout } = useContext(AuthContext);

  const { dataCart } = useContext(CartContext);
 
  const memo = useMemo(
    () => {
      return <Component2 />
    }, []
  ); 

  return (
    <nav className="header__menu">
      {memo}
      <ul className={styles['menu']}>
        <li className={styles['menu__item']}><Link to="/" className={styles['menu__link']}>Home</Link></li>
        <li className={styles['menu__item']}><Link to="/about" className={styles['menu__link']}>About</Link></li>
        <li className={styles['menu__item']}><Link to="/news" className={styles['menu__link']}>News</Link></li>
        <li className={styles['menu__item']}><Link to="/news/post" className={styles['menu__link']}>News post</Link></li>
        <li className={styles['menu__item']}><Link to="/todo" className={styles['menu__link']}>Todo</Link></li>
        <li className={styles['menu__item']}><span className={styles['menu__link']}>Cart ({dataCart.total})</span></li>
        {
          localStorage.getItem('email') ? 
          <li className={styles['menu__item']}><span className={styles['menu__link']} onClick={handleLogout}>Logout</span></li>
          : ""
        }

      </ul>
    </nav>
  )
}

export default Menu