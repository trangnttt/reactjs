import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="l-header">
      <div>
        <Link to="/">
          <img src="https://freshdesignweb.com/demo/template/ustora/img/logo.png" className="l-header__logo" alt="Image" />
        </Link>
      </div>
      <nav className="l-header__menu">
        <ul className="l-menu">
          <li className="l-menu__item"><Link to="/" className="l-menu__link">Home</Link></li>
          <li className="l-menu__item"><Link to="/about" className="l-menu__link">About</Link></li>
          <li className="l-menu__item"><Link to="/news" className="l-menu__link">News</Link></li>
          <li className="l-menu__item"><Link to="/news/post" className="l-menu__link">News post</Link></li>
          <li className="l-menu__item"><Link to="/contact" className="l-menu__link">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header