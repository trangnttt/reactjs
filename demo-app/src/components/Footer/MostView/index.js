import React from 'react'
import styles from '../styles/footer.module.scss'
import { Link } from 'react-router-dom'
const MostView = () => {
    return (
        <div className={styles['most-view']}>
            <div className="container">
                <p className={styles['most-view__title']}>MOST VIEWED</p>
                <div className={styles['most-view__row']}>
                    <div className={styles['most-view__column']}>
                        <>
                            <img src="assets/images/most-view1.jpg" className={styles['most-view__img']} />
                            <div className="most-view--caption">
                                <Link to="#" className={styles['most-view--caption-name']}>Oversized Sunglasses...</Link>
                                <p className={styles['most-view--caption-price']}>$397.00</p>
                                <div className={styles['most-view--caption-select']}>
                                    <span><i className="fa fa-shopping-cart"> </i></span>
                                    <span><i className="fa fa-heart-o"></i></span>
                                    <span><i className="fa fa-exchange"></i></span>
                                </div>
                            </div>
                        </>
                    </div>
                    <div className={styles['most-view__column']}>
                        <>
                            <img src="assets/images/most-view1.jpg" className={styles['most-view__img']} />
                            <div className="most-view--caption">
                                <Link to="#" className={styles['most-view--caption-name']}>Oversized Sunglasses...</Link>
                                <p className={styles['most-view--caption-price']}>$397.00</p>
                                <div className={styles['most-view--caption-select']}>
                                    <span><i className="fa fa-shopping-cart"> </i></span>
                                    <span><i className="fa fa-heart-o"></i></span>
                                    <span><i className="fa fa-exchange"></i></span>
                                </div>
                            </div>
                        </>
                    </div>
                    <div className={styles['most-view__column']}>
                        <>
                            <img src="assets/images/most-view1.jpg" className={styles['most-view__img']} />
                            <div className="most-view--caption">
                                <Link to="#" className={styles['most-view--caption-name']}>Oversized Sunglasses...</Link>
                                <p className={styles['most-view--caption-price']}>$397.00</p>
                                <div className={styles['most-view--caption-select']}>
                                    <span><i className="fa fa-shopping-cart"> </i></span>
                                    <span><i className="fa fa-heart-o"></i></span>
                                    <span><i className="fa fa-exchange"></i></span>
                                </div>
                            </div>
                        </>
                    </div>
                    <div className={styles['most-view__column']}>
                        <>
                            <img src="assets/images/most-view1.jpg" className={styles['most-view__img']} />
                            <div className="most-view--caption">
                                <Link to="#" className={styles['most-view--caption-name']}>Oversized Sunglasses...</Link>
                                <p className={styles['most-view--caption-price']}>$397.00</p>
                                <div className={styles['most-view--caption-select']}>
                                    <span><i className="fa fa-shopping-cart"> </i></span>
                                    <span><i className="fa fa-heart-o"></i></span>
                                    <span><i className="fa fa-exchange"></i></span>
                                </div>
                            </div>
                        </>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MostView