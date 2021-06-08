import React from 'react'
import styles from '../styles/footer.module.scss'

const FooterIcons = () => {
    return (
        <div className={styles['footer-icon']}>
            <div className="container">
                <ul className={styles['footer-icon__list']}>
                    <li className={`${styles['footer-icon__item']} tooltip`}><i className="fa fa-facebook"></i>
                        <span className="tooltip-text"> Facebook</span>
                    </li>
                    <li className={`${styles['footer-icon__item']} tooltip`}><i className="fa fa-facebook"></i>
                        <span className="tooltip-text"> Facebook</span>
                    </li>
                    <li className={`${styles['footer-icon__item']} tooltip`}><i className="fa fa-facebook"></i>
                        <span className="tooltip-text"> Facebook</span>
                    </li>
                    <li className={`${styles['footer-icon__item']} tooltip`}><i className="fa fa-facebook"></i>
                        <span className="tooltip-text"> Facebook</span>
                    </li>
                </ul>
            </div>
        </div>

    )
}
export default FooterIcons
