import React from 'react'
import styles from '../styles/header.module.scss'
import { Link } from 'react-router-dom'
const CartHeader = () => {
    return (
        <div className={styles['dropdown-cart']}>
            <Link className={styles['dropdown-cart__link']} to ="/">
                <span className={styles['dropdown-cart__text']}>0 item(s) - $0.00</span>
                <span className={styles['dropdown-cart__icon']}>
                 <i className="fa fa-shopping-cart"> </i>
                </span>
            </Link>
            <div className={styles['dropdown--cart--content']}>
                <p>Your shopping cart is empty!</p>
            </div>
        </div>
    )
}
export default CartHeader