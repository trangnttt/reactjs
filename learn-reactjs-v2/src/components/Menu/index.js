import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/menu.module.scss';
import { CartContext } from '@/contexts/CartContext'
const Menu = () => {
  const { dataCart } = useContext(CartContext);
  return (
    <nav className="header__menu">
      <ul className={styles['menu']}>
        <li className={styles['menu__item']}><Link to="/" className={styles['menu__link']}>Home</Link></li>
        <li className={styles['menu__item']}><Link to="/about" className={styles['menu__link']}>About</Link></li>
        <li className={styles['menu__item']}><Link to="/news" className={styles['menu__link']}>News</Link></li>
        <li className={styles['menu__item']}><Link to="/news/post" className={styles['menu__link']}>News post</Link></li>
        <li className={styles['menu__item']}><Link to="/contact" className={styles['menu__link']}>Contact</Link></li>
        <li className={styles['menu__item']}><Link to="/" className={styles['menu__link']}>Cart ({dataCart.total})</Link></li>
      </ul>
    </nav>
  )
}

export default Menu