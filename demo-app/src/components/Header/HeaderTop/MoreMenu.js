import React from 'react'
import styles from '../styles/header.module.scss'
import { Link } from 'react-router-dom'
const MoreMenu = () => {
    return (
        <ul className={styles['menu-top']}>
            <li className={styles['menu-top__item']}>
                <Link className={styles['menu-top__link']} to="#">
                    <i className={`${styles['menu-top__icon']} fa fa-align-left`}></i>
                    <span>More Menus</span>
                </Link>
                <ul className={styles['dropdown-menu']}>
                    <li className={styles['dropdown-menu__item']}>
                        <Link className={styles['dropdown-menu__link']} to="history.html">
                            <span>The Best Menu</span></Link></li>

                    <li className={styles['dropdown-menu__item']}>
                        <Link className={styles['dropdown-menu__link']} to="lifeinelvyn.html">
                            <span>Options You Will</span></Link></li>

                    <li className={styles['dropdown-menu__item']}>
                        <Link className={styles['dropdown-menu__link']} to="committee.html">
                            <span>Ever Find</span></Link></li>

                    <li className={styles['dropdown-menu__item']}>
                        <Link className={styles['dropdown-menu__link']} to="warden.html">
                            <span>In a Theme</span></Link></li>
                </ul>
            </li>
            <li className={styles['menu-top__item']}>
                <Link className={styles['menu-top__link']} to="#">
                    <i className={`${styles['menu-top__icon']} fa fa-motorcycle`}></i>
                    <span>Delivery</span>
                </Link>
            </li>
        </ul>
    )
}
export default MoreMenu