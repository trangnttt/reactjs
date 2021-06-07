import React from "react"

const MenuTop = () => {
    return (
        <ul className="menu-top">
            <li className="menu-top__item">
                <a className="menu-top__link" href="#">
                    <i className="fa fa-home menu-top__icon"></i>
                    <span>Home</span>
                </a>
            </li>
            <li className="menu-top__item">
                <a className="menu-top__link" href="#">
                    <i className="fa fa-anchor menu-top__icon"></i>
                    <span>About Us</span>
                </a>
            </li>
            <li className="menu-top__item">
                <a className="menu-top__link" href="#">
                    <i className="fa fa-envelope menu-top__icon"></i>
                    <span>Contact</span>
                </a>
            </li>
            <li className="menu-top__item">
                <a className="menu-top__link" href="#">
                    <i className="fa fa-question-circle-o menu-top__icon"></i>
                    <span>FAQ</span>
                </a>
                <ul className="dropdown-menu">
                    <li className="dropdown-menu__item">
                        <a className="dropdown-menu__link" href="#">
                            <i className="fa fa-arrow-right menu-top__icon"></i>
                            <span> Create</span>
                        </a>
                    </li>

                    <li className="dropdown-menu__item">
                        <a className="dropdown-menu__link" href="#">
                            <i className="fa fa-compass menu-top__icon"></i>
                            <span> Unlimited</span>
                        </a>
                    </li>

                    <li className="dropdown-menu__item">
                        <a className="dropdown-menu__link" href="#">
                            <i className="fa fa-dedent menu-top__icon"></i>
                            <span>Menus</span>
                        </a>
                    </li>

                </ul>
            </li>
        </ul>
    )
}
export default MenuTop