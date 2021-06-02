import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '@/contexts/CartContext'
import Menu from '../Menu'
import styles from './styles/header.module.scss'

const Header = () => {
  const {id, name} = useContext(CartContext);
  return (
    <header className={styles['header']}> 
    {/* <h1 className={styles.title}>{id} & {name}</h1> */}
      <div>
        <Link to="/">
          <img src="../../assets/images/logo.png" className={styles['header__logo']} alt="Image" />
        </Link>
      </div>
      <Menu />
    </header>
  )
}

export default Header