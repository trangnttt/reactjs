import React from 'react'

const Language = () => {
    return (
        <ul className="menu-top">
            <li className="menu-top__item">
                <a className="menu-link" href="#">
                    <img className="menu-top__icon" src="/assets/images/flag_Eglish.png" />
                    <span>English</span>
                </a>
                <ul className="dropdown">
                    <li className="dropdown__item">
                        <a className="dropdown__link" href="history.html">
                            <img className="menu-top__icon" src="/assets/images/flag_Eglish.png" />
                            <span>English</span>
                        </a></li>

                    <li className="dropdown__item">
                        <a className="dropdown__link" href="lifeinelvyn.html">
                        <img className="menu-top__icon" src="/assets/images/flag_Arabic.png"/>
                    <span>Arabic</span></a></li>

                </ul>
            </li>
            <li className="menu-top__item">
                <a className="menu-link" href="#">
                    <i className="fa fa-dollar menu-top__icon"></i>
                    <span>US Dollar</span>
                </a>
                <ul className="dropdown">
                    <li className="dropdown__item"><a className="dropdown__link" href="history.html">
                        <span>€ Euro</span></a></li>
                    <li className="dropdown__item"><a className="dropdown__link" href="lifeinelvyn.html">
                        <span>£ Pound Sterling</span></a></li>
                    <li className="dropdown__item"><a className="dropdown__link" href="committee.html">
                        <span>$ US Dollar</span></a></li>
                </ul>
            </li>
        </ul>
    )
}
export default Language