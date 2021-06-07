import React from 'react'

const FooterMenu = () => {
    return (
        <div className="footer-menu">
            <div className="wrapper">
                <div className="footer-menu__row">
                    <div className="footer-menu__column">
                        <h3 className="footer-menu__title">About Us</h3>
                        <ul className="footer-menu__list">
                            <li className="footer-menu__item">
                                <a href="#">Menu 1</a>
                            </li>
                            <li className="footer-menu__item">
                                <a href="#">Menu 1</a>
                            </li>
                            <li className="footer-menu__item">
                                <a href="#">Menu 1</a>
                            </li>
                            <li className="footer-menu__item">
                                <a href="#">Menu 1</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-menu__column">
                        <h3 className="footer-menu__title">About Us</h3>
                        <ul className="footer-menu__list">
                            <li className="footer-menu__item">
                                <a href="#">Menu 1</a>
                            </li>
                            <li className="footer-menu__item">
                                <a href="#">Menu 1</a>
                            </li>
                            <li className="footer-menu__item">
                                <a href="#">Menu 1</a>
                            </li>
                            <li className="footer-menu__item">
                                <a href="#">Menu 1</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-menu__column">
                        <h3 className="footer-menu__title">About Us</h3>
                        <ul className="footer-menu__list">
                            <li className="footer-menu__item">
                                <a href="#">Menu 1</a>
                            </li>
                            <li className="footer-menu__item">
                                <a href="#">Menu 1</a>
                            </li>
                            <li className="footer-menu__item">
                                <a href="#">Menu 1</a>
                            </li>
                            <li className="footer-menu__item">
                                <a href="#">Menu 1</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-menu__column">
                        <h3 className="footer-menu__title">About Us</h3>
                        <p className="footer-menu__sub">Stay up to date with news and promotions by signing up for our newsletter</p>
                        <div className="footer-search">
                            <form action="#">
                                <div className="footer-search__group search">
                                    <input className="search-input" type="text" placeholder="Search.." name="search" />
                                    <button className="search-btn" type="submit"><i className="fa fa-envelope-square"></i> Send</button>
                                </div>
                                <div className="footer-search__group search-check">
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                    <label className="search-check__name">I have read and agree to the <a href="#">Privacy Policy</a></label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterMenu