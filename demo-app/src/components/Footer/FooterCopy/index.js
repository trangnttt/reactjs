import React from 'react'
import styles from '../styles/footer.module.scss'

const FooterCopy = () => {
    return (
        <div className={styles['footer-copy']}>
            <div className="container">
                <p className={styles['footer-copy__left']}>Copyright © 2014, Your Store, All Rights Reserved</p>
                <p className={styles['footer-copy__right']}>
                    <span><i className={`${styles['footer-copy__right--icon']} fa fa-cc-visa`}></i></span>
                    <span><i className={`${styles['footer-copy__right--icon']} fa fa-cc-amex`}></i></span>
                    <span><i className={`${styles['footer-copy__right--icon']} fa fa-cc-discover`}></i></span>
                    <span><i className={`${styles['footer-copy__right--icon']} fa fa-cc-paypal`}></i></span>
                    <span><i className={`${styles['footer-copy__right--icon']} fa fa-cc-stripe`}></i></span>
                </p>
              
            </div>
        </div>

    )
}
export default FooterCopy
