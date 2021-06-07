import React from 'react'

const Language = () => {
    return (
        <ul className="menu-top">
            <li className="menu-top__item">
                <a className="menu-top__link" href="#">
                    <img className="menu-top__icon" src="/assets/images/flag_Eglish.png" />
                    <span>English</span>
                </a>
                <ul className="dropdown-menu">
                    <li className="dropdown-menu__item">
                        <a className="dropdown-menu__link" href="#">
                            <img className="menu-top__icon" src="/assets/images/flag_Eglish.png" />
                            <span>English</span>
                        </a>
                    </li>

                    <li className="dropdown-menu__item">
                        <a className="dropdown-menu__link" href="#">
                            <img className="menu-top__icon" src="/assets/images/flag_Arabic.png" />
                            <span>Arabic</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li className="menu-top__item">
                <a className="menu-top__link" href="#">
                    <i className="fa fa-dollar menu-top__icon"></i>
                    <span>US Dollar</span>
                </a>
                <ul className="dropdown-menu">
                    <li className="dropdown-menu__item">
                        <a className="dropdown-menu__link" href="#">
                            <span>€ Euro</span>
                        </a>
                    </li>

                    <li className="dropdown-menu__item">
                        <a className="dropdown-menu__link" href="#">
                            <span>£ Pound Sterling</span>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    )
}
export default Language