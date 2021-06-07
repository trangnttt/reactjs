import React from 'react'
const MenuIconHeader = () => {
    return (
        <div className="header-mid__menu">
            <ul className="menu-icon">
                <li className="menu-icon__item">
                    <a className="menu-icon__link" href="#">
                        <i className="fa fa-user-circle-o menu-icon__icon"></i>
                        <span className="menu-icon__text">Login</span>
                    </a>
                </li>
                <li className="menu-icon__item">
                    <a className="menu-icon__link" href="#">
                        <i className="fa fa-edit menu-icon__icon"></i>
                        <span className="menu-icon__text">Register</span>
                    </a>
                </li>
                <li className="menu-icon__item">
                    <a className="menu-icon__link" href="#">
                        <i className="fa fa-heart-o menu-icon__icon"></i>
                        <span className="menu-icon__text">Wishlist</span>
                    </a>
                </li>
                <li className="menu-icon__item">
                    <a className="menu-icon__link" href="#">
                        <i className="fa fa-exchange menu-icon__icon"></i>
                        <span className="menu-icon__text">Compare</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default MenuIconHeader