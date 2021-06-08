import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/home.module.scss'

const WhyBuy = () => {
    return (
        <div className={styles['why-buy']}>
            <h3 className={styles['why-buy__name']}>Why buy from us?</h3>
            <div className={styles['why-buy__divider']}></div>
            <p className={styles['why-buy__info']}>Journal has been the best selling and most loved Opencart theme since first launch in 2013. Tried and tabs-infoed by over 20K people, Journal is the best Opencart theme framework on the market today.
                <Link className={styles['why-buy__link']} to="#">Learn more</Link>
            </p>
            <div className={styles['why-buy__tabs']}>
                <div className="tabs">
                    <input type="radio" name="tab" id="tab_1" defaultChecked></input>
                    <input type="radio" name="tab" id="tab_2"></input>
                    <input type="radio" name="tab" id="tab_3"></input>
                    <input type="radio" name="tab" id="tab_4"></input>
                    <nav className="tabs__nav">
                        <label className="tabs__name" htmlFor="tab_1">Top Categories</label>
                        <label className="tabs__name" htmlFor="tab_2">Electronics</label>
                        <label className="tabs__name" htmlFor="tab_3">Beauty</label>
                        <label className="tabs__name" htmlFor="tab_4">Fashion</label>
                    </nav>
                    <article className="tabs__content tabs__content--1">
                        <div className="grid">
                            <div className="col">
                                <div className={styles['tabs-info']}>
                                    <img src=" ../../assets/images/why-buy1.jpg" alt="Avatar" className={styles['tabs-info__tabs-info__image']} />
                                    <div className={styles['tabs-info__middle']}>
                                        <div className={styles['tabs-info__text']}>John Doe</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className={styles['tabs-info']}>
                                    <img src=" ../../assets/images/why-buy2.jpg" alt="Avatar" className={styles['tabs-info__image']} />
                                    <div className={styles['tabs-info__middle']}>
                                        <div className={styles['tabs-info__text']}>John Doe</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className={styles['tabs-info']}>
                                    <img src=" ../../assets/images/why-buy3.jpg" alt="Avatar" className={styles['tabs-info__image']} />
                                    <div className={styles['tabs-info__middle']}>
                                        <div className={styles['tabs-info__text']}>John Doe</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className={styles['tabs-info']}>
                                    <img src=" ../../assets/images/why-buy4.jpg" alt="Avatar" className={styles['tabs-info__image']} />
                                    <div className={styles['tabs-info__middle']}>
                                        <div className={styles['tabs-info__text']}>John Doe</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className={styles['tabs-info']}>
                                    <img src=" ../../assets/images/why-buy5.jpg" alt="Avatar" className={styles['tabs-info__image']} />
                                    <div className={styles['tabs-info__middle']}>
                                        <div className={styles['tabs-info__text']}>John Doe</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="tabs__content tabs__content--2">
                        <p>1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eaque eveniet et aspernatur. Velit animi vitae iure quas odio natus, consequuntur fugiat, libero dolor incidunt temporibus. Molestias, rerum magnam labore.</p>
                    </article>
                    <article className="tabs__content tabs__content--3">
                        <p>1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eaque eveniet et aspernatur. Velit animi vitae iure quas odio natus, consequuntur fugiat, libero dolor incidunt temporibus. Molestias, rerum magnam labore.</p>
                    </article>
                    <article className="tabs__content tabs__content--4">
                        <p>1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eaque eveniet et aspernatur. Velit animi vitae iure quas odio natus, consequuntur fugiat, libero dolor incidunt temporibus. Molestias, rerum magnam labore.</p>
                    </article>
                </div>
            </div>

        </div>
    )
}
export default WhyBuy