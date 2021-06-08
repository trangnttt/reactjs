import React from 'react'
import styles from '../styles/footer.module.scss'
import { Link } from 'react-router-dom'
const FooterMenu = () => {
    return (
        <div className={styles['footer-menu']}>
            <div className="container">
                <div className={styles['footer-menu__row']}>
                    <div className={styles['footer-menu__column']}>
                        <h3 className={styles['footer-menu__title']}>About Us</h3>
                        <ul className={styles['footer-menu__list']}>
                            <li className={styles['footer-menu__item']}>
                                <Link to="#">Menu 1</Link>
                            </li>
                            <li className={styles['footer-menu__item']}>
                                <Link to="#">Menu 1</Link>
                            </li>
                            <li className={styles['footer-menu__item']}>
                                <Link to="#">Menu 1</Link>
                            </li>
                            <li className={styles['footer-menu__item']}>
                                <Link to="#">Menu 1</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles['footer-menu__column']}>
                        <h3 className={styles['footer-menu__title']}>About Us</h3>
                        <ul className={styles['footer-menu__list']}>
                            <li className={styles['footer-menu__item']}>
                                <Link to="#">Menu 1</Link>
                            </li>
                            <li className={styles['footer-menu__item']}>
                                <Link to="#">Menu 1</Link>
                            </li>
                            <li className={styles['footer-menu__item']}>
                                <Link to="#">Menu 1</Link>
                            </li>
                            <li className={styles['footer-menu__item']}>
                                <Link to="#">Menu 1</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles['footer-menu__column']}>
                        <h3 className={styles['footer-menu__title']}>About Us</h3>
                        <ul className={styles['footer-menu__list']}>
                            <li className={styles['footer-menu__item']}>
                                <Link to="#">Menu 1</Link>
                            </li>
                            <li className={styles['footer-menu__item']}>
                                <Link to="#">Menu 1</Link>
                            </li>
                            <li className={styles['footer-menu__item']}>
                                <Link to="#">Menu 1</Link>
                            </li>
                            <li className={styles['footer-menu__item']}>
                                <Link to="#">Menu 1</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles['footer-menu__column']}>
                        <h3 className={styles['footer-menu__title']}>About Us</h3>
                        <p className={styles['footer-menu__sub']}>Stay up to date with news and promotions by signing up for our newsletter</p>
                        <div className={styles['footer-search']}>
                            <form action="#">
                                <div className={styles['footer-search__group']}>
                                    <input className={styles['search-input']} type="text" placeholder="Search.." name="search" />
                                    <button className={styles['search-btn']} type="submit"><i className="fa fa-envelope-square"></i> Send</button>
                                </div>
                                <div className={`${styles['footer-search__group']} ${styles['search-check']}`}>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                    <label className={styles['search-check__name']}>I have read and agree to the <Link to="#">Privacy Policy</Link></label>
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