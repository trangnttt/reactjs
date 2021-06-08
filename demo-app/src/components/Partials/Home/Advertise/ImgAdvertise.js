import React from 'react'
import styles from '../styles/home.module.scss'
import { Link } from 'react-router-dom'
const ImgAdvertise = () => {
    return (
        <div className={styles['advertise-img']}>
            <div className={styles['advertise-img__item']}>
                <Link to="#" className={styles['advertise-img__link']}>
                    <img className={styles['advertise-img__image']} src="../../assets/images/advertise-img1.png" />
                    <div className={styles['advertise-img__caption']}>
                        <span>
                            <b className={styles['advertise-img__caption--special']}>
                                Wearables
                            </b>
                            Intelligent &amp; Durable Design
                        </span>
                    </div>
                </Link>
            </div>
            <div className={styles['advertise-img__item']}>
                <Link to="#" className={styles['advertise-img__link']}>
                    <img className={styles['advertise-img__image']} src="../../assets/images/advertise-img2.png" />
                    <div className={styles['advertise-img__caption']}>
                        <span>
                            <b className={styles['advertise-img__caption--special']}>
                                Wearables
                            </b>
                            Intelligent &amp; Durable Design
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default ImgAdvertise