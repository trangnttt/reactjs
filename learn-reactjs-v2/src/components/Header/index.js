import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div>
        <Link to="/">
          <img src="https://freshdesignweb.com/demo/template/ustora/img/logo.png" className="header__logo" alt="Image" />
        </Link>
      </div>
      <nav className="header__menu">
        <ul className="menu">
          <li className="menu__item"><Link to="/" className="menu__link">Home</Link></li>
          <li className="menu__item"><Link to="/about" className="menu__link">About</Link></li>
          <li className="menu__item"><Link to="/news" className="menu__link">News</Link></li>
          <li className="menu__item"><Link to="/contact" className="menu__link">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header