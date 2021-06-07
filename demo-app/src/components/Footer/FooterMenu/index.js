import React from 'react'
// import "../../../assets/images/most-view1.jpg"
const FooterMenu = () => {
    return (
        <div className="footer-menu">
            <div className="wrapper">
                <div className="footer-menu__row">
                    <div className="footer-menu__column">
                        <h3 className="footer-menu__title">About Us</h3>
                        <ul className="menu-footer">
                            <li>
                                <a href="#">Menu 1</a>
                            </li>
                            <li>
                                <a href="#">Menu 1</a>
                            </li>

                            <li>
                                <a href="#">Menu 1</a>
                            </li>
                            <li>
                                <a href="#">Menu 1</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-menu__column">
                        <h3 className="footer-menu__title">About Us</h3>
                        <ul className="menu-footer">
                            <li>
                                <a href="#">Menu 1</a>
                            </li>
                            <li>
                                <a href="#">Menu 1</a>
                            </li>

                            <li>
                                <a href="#">Menu 1</a>
                            </li>
                            <li>
                                <a href="#">Menu 1</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-menu__column">
                        <h3 className="footer-menu__title">About Us</h3>
                        <ul className="menu-footer">
                            <li>
                                <a href="#">Menu 1</a>
                            </li>
                            <li>
                                <a href="#">Menu 1</a>
                            </li>

                            <li>
                                <a href="#">Menu 1</a>
                            </li>
                            <li>
                                <a href="#">Menu 1</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-menu__column">
                        <h3 className="footer-menu__title">About Us</h3>
                        <p className="footer-menu__sub">Stay up to date with news and promotions by signing up for our newsletter</p>
                        <div className="footer-menu__search">
                            <form action="#">
                                <div className="group-form">
                                    <input className="search-input" type="text" placeholder="Search.." name="search" />
                                    <button className="search-btn" type="submit"><i className="fa fa-envelope-square"></i> Send</button>
                                </div>
                                <div className="group-form from-check">
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                    <label className="name-check">I have read and agree to the <a href="#">Privacy Policy</a></label>
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