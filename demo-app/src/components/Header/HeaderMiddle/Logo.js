import React from 'react'
import styles from '../styles/header.module.scss'
import { Link } from 'react-router-dom'
const LogoHeader = () => {
    return (
        <div className={styles['header-mid__logo']}>
            <Link to="/">
                <img src="/assets/images/logo.png"></img>
            </Link>
        </div>
    )
}
export default LogoHeader