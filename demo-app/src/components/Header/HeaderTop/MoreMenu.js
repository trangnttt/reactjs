import React from 'react'

const MoreMenu = () => {
    return (
        <ul className="menu-top">
            <li className="menu-top__item">
                <a className="menu-top__link" href="#">
                    <i className="fa fa-align-left menu-top__icon"></i>
                    <span>More Menus</span>
                </a>
                <ul className="dropdown-menu">
                    <li className="dropdown-menu__item">
                        <a className="dropdown-menu__link" href="history.html">
                            <span>The Best Menu</span></a></li>

                    <li className="dropdown-menu__item">
                        <a className="dropdown-menu__link" href="lifeinelvyn.html">
                            <span>Options You Will</span></a></li>

                    <li className="dropdown-menu__item">
                        <a className="dropdown-menu__link" href="committee.html">
                            <span>Ever Find</span></a></li>

                    <li className="dropdown-menu__item">
                        <a className="dropdown-menu__link" href="warden.html">
                            <span>In a Theme</span></a></li>
                </ul>
            </li>
            <li className="menu-top__item">
                <a className="menu-top__link" href="#">
                    <i className="fa fa-motorcycle menu-top__icon"></i>
                    <span>Delivery</span>
                </a>
            </li>
        </ul>
    )
}
export default MoreMenu