import React from 'react'
import styles from '../styles/home.module.scss'

const ServiceHome = () => {
    return (
        <div className={styles['service-home']}>
            <div className={styles['service-home__row']}>
                <div className={styles['service-home__column']}>
                    <>
                        <div className={styles['service-home__img']}>
                            <i className={`${styles['service-home__icon']} fa fa-automobile`}></i>
                        </div>
                        <div className={styles['service-home__caption']}>
                            <div className={styles['service-home__caption-title']}>Free Shipping</div>
                            <div className={styles['service-home__caption-text']}>Free delivery over $100</div>
                        </div>
                    </>
                </div>
                <div className={styles['service-home__column']}>
                    <>
                        <div className={styles['service-home__img']}>
                            <i className={`${styles['service-home__icon']} fa fa-automobile`}></i>
                        </div>
                        <div className={styles['service-home__caption']}>
                            <div className={styles['service-home__caption-title']}>Free Shipping</div>
                            <div className={styles['service-home__caption-text']}>Free delivery over $100</div>
                        </div>
                    </>
                </div>
                <div className={styles['service-home__column']}>
                    <>
                        <div className={styles['service-home__img']}>
                            <i className={`${styles['service-home__icon']} fa fa-automobile`}></i>
                        </div>
                        <div className={styles['service-home__caption']}>
                            <div className={styles['service-home__caption-title']}>Free Shipping</div>
                            <div className={styles['service-home__caption-text']}>Free delivery over $100</div>
                        </div>
                    </>
                </div>
                <div className={styles['service-home__column']}>
                    <>
                        <div className={styles['service-home__img']}>
                            <i className={`${styles['service-home__icon']} fa fa-automobile`}></i>
                        </div>
                        <div className={styles['service-home__caption']}>
                            <div className={styles['service-home__caption-title']}>Free Shipping</div>
                            <div className={styles['service-home__caption-text']}>Free delivery over $100</div>
                        </div>
                    </>
                </div>
            </div>
        </div>
    )
}
export default ServiceHome