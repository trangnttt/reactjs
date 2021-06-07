import React from 'react'
const MenuIconHeader = () => {
    return (
        <div className="menu-mid">
            <ul className="menu-mid-list">
                <li className="menu-mid-list__item">
                    <a className="menu-mid-list__link" href="#">
                        <i className="fa fa-user-circle-o menu-mid-list__icon"></i>
                        <span className="menu-mid-list__text">Login</span>
                    </a>
                </li>
                <li className="menu-mid-list__item">
                    <a className="menu-mid-list__link" href="#">
                        <i className="fa fa-edit menu-mid-list__icon"></i>
                        <span className="menu-mid-list__text">Register</span>
                    </a>
                </li>
                <li className="menu-mid-list__item">
                    <a className="menu-mid-list__link" href="#">
                        <i className="fa fa-heart-o menu-mid-list__icon"></i>
                        <span className="menu-mid-list__text">Wishlist</span>
                    </a>
                </li>
                <li className="menu-mid-list__item">
                    <a className="menu-mid-list__link" href="#">
                        <i className="fa fa-exchange menu-mid-list__icon"></i>
                        <span className="menu-mid-list__text">Compare</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default MenuIconHeader