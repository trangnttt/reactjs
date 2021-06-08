import React from 'react'
import styles from '../styles/header.module.scss'
import { Link } from 'react-router-dom'
const Language = () => {
    return (
        <ul className={styles['menu-top']}>
            <li className={styles['menu-top__item']}>
                <Link className={styles['menu-top__link']} to="#">
                    <img className={styles['menu-top__icon']} src="/assets/images/flag_Eglish.png" />
                    <span>English</span>
                </Link>
                <ul className={styles['dropdown-menu']}>
                    <li className={styles['dropdown-menu__item']}>
                        <Link className={styles['dropdown-menu__link']} to="#">
                            <img className={styles['menu-top__icon']} src="/assets/images/flag_Eglish.png" />
                            <span>English</span>
                        </Link>
                    </li>

                    <li className={styles['dropdown-menu__item']}>
                        <Link className={styles['dropdown-menu__link']} to="#">
                            <img className={styles['menu-top__icon']} src="/assets/images/flag_Arabic.png" />
                            <span>Arabic</span>
                        </Link>
                    </li>
                </ul>
            </li>
            <li className={styles['menu-top__item']}>
                <Link className={styles['menu-top__link']} to="#">
                    <i className="fa fa-dollar menu-top__icon"></i>
                    <span>US Dollar</span>
                </Link>
                <ul className={styles['dropdown-menu']}>
                    <li className={styles['dropdown-menu__item']}>
                        <Link className={styles['dropdown-menu__link']} to="#">
                            <span>€ Euro</span>
                        </Link>
                    </li>

                    <li className={styles['dropdown-menu__item']}>
                        <Link className={styles['dropdown-menu__link']} to="#">
                            <span>£ Pound Sterling</span>
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>
    )
}
export default Language