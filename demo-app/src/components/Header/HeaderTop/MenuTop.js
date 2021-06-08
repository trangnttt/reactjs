import React from "react"
import styles from '../styles/header.module.scss'
import { Link } from 'react-router-dom'
const MenuTop = () => {
    return (
        <ul className={styles['menu-top']}>
            <li className={styles['menu-top__item']}>
                <Link className={styles['menu-top__link']} to="#">
                    <i className={`${styles['menu-top__icon']} fa fa-home`}></i>
                    <span>Home</span>
                </Link>
            </li>
            <li className={styles['menu-top__item']}>
                <Link className={styles['menu-top__link']} to="#">
                    <i className={`${styles['menu-top__icon']} fa fa-anchor`}></i>
                    <span>About Us</span>
                </Link>
            </li>
            <li className={styles['menu-top__item']}>
                <Link className={styles['menu-top__link']} to="#">
                    <i className={`${styles['menu-top__icon']} fa fa-envelope`}></i>
                    <span>Contact</span>
                </Link>
            </li>
            <li className={styles['menu-top__item']}>
                <Link className={styles['menu-top__link']} to="#">
                    <i className={`${styles['menu-top__icon']} fa fa-question-circle-o`}></i>
                    <span>FAQ</span>
                </Link>
                <ul className={styles['dropdown-menu']}>
                    <li className={styles['dropdown-menu__item']}>
                        <Link className={styles['dropdown-menu__link']} to="#">
                            <i className={`${styles['menu-top__icon']} fa fa-arrow-right`}></i>
                            <span> Create</span>
                        </Link>
                    </li>

                    <li className={styles['dropdown-menu__item']}>
                        <Link className={styles['dropdown-menu__link']} to="#">
                            <i className={`${styles['menu-top__icon']} fa fa-compass`}></i>
                            <span> Unlimited</span>
                        </Link>
                    </li>

                    <li className={styles['dropdown-menu__item']}>
                        <Link className={styles['dropdown-menu__link']} to="#">
                            <i className={`${styles['menu-top__icon']} fa fa-dedent`}></i>
                            <span>Menus</span>
                        </Link>
                    </li>

                </ul>
            </li>
        </ul>
    )
}
export default MenuTop