import React from 'react'
import styles from '../styles/home.module.scss'
const SlideHome = () => {
    return (
        <div className={styles['home-slide']}>
            <ul className={styles['home-slide__list']}>
                <input type="radio" name="radio-btn" id="img-1" defaultChecked />
                <li className={styles['home-slide__item']}>
                    <div className={styles['home-slide__img']}>
                        <img src="../../assets/images/h4-slide4.png" />
                    </div>
                    <div className={styles['home-slide__btn']}>
                        <label htmlFor="img-6" className={styles['home-slide__btn--prev']}>&#x2039;</label>
                        <label htmlFor="img-2" className={styles['home-slide__btn--next']}>&#x203a;</label>
                    </div>
                </li>

                <input type="radio" name="radio-btn" id="img-2" />
                <li className={styles['home-slide__item']}>
                    <div className={styles['home-slide__img']}>
                        <img src="../../assets/images/h4-slide2.png" />
                    </div>
                    <div className={styles['home-slide__btn']}>
                        <label htmlFor="img-1" className={styles['home-slide__btn--prev']}>&#x2039;</label>
                        <label htmlFor="img-3" className={styles['home-slide__btn--next']}>&#x203a;</label>
                    </div>
                </li>

                <input type="radio" name="radio-btn" id="img-3" />
                <li className={styles['home-slide__item']}>
                    <div className={styles['home-slide__img']}>
                        <img src="../../assets/images/h4-slide3.png" />
                    </div>
                    <div className={styles['home-slide__btn']}>
                        <label htmlFor="img-2" className={styles['home-slide__btn--prev']}>&#x2039;</label>
                        <label htmlFor="img-4" className={styles['home-slide__btn--next']}>&#x203a;</label>
                    </div>
                </li>

                <li className={styles['home-slide__btn--dots']}>
                    <label htmlFor="img-1" className={styles['home-slide__btn--dot']} id="img-dot-1"></label>
                    <label htmlFor="img-2" className={styles['home-slide__btn--dot']} id="img-dot-2"></label>
                    <label htmlFor="img-3" className={styles['home-slide__btn--dot']} id="img-dot-3"></label>
                </li>
            </ul>
        </div>

    )
}
export default SlideHome