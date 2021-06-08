import React from 'react'
import styles from '../styles/header.module.scss'
import { Link } from 'react-router-dom'
const MenuIconHeader = () => {
    return (
        <div className={styles['menu-mid']}>
            <ul className={styles['menu-mid-list']}>
                <li className={styles['menu-mid-list__item']}>
                    <Link className={styles['menu-mid-list__link']} to ="#">
                        <i className={`${styles['menu-mid-list__icon']} fa fa-user-circle-o`}></i>
                        <span className={styles['menu-mid-list__text']}>Login</span>
                    </Link>
                </li>
                <li className={styles['menu-mid-list__item']}>
                    <Link className={styles['menu-mid-list__link']} to ="#">
                        <i className={`${styles['menu-mid-list__icon']} fa fa-edit`}></i>
                        <span className={styles['menu-mid-list__text']}>Register</span>
                    </Link>
                </li>
                <li className={styles['menu-mid-list__item']}>
                    <Link className={styles['menu-mid-list__link']} to ="#">
                        <i className={`${styles['menu-mid-list__icon']} fa fa-heart-o`}></i>
                        <span className={styles['menu-mid-list__text']}>Wishlist</span>
                    </Link>
                </li>
                <li className={styles['menu-mid-list__item']}>
                    <Link className={styles['menu-mid-list__link']} to ="#">
                        <i className={`${styles['menu-mid-list__icon']} fa fa-exchange`}></i>
                        <span className={styles['menu-mid-list__text']}>Compare</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default MenuIconHeader