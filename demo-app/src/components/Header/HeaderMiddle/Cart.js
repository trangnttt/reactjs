import React from 'react'
import './styles/dropdownCart.scss'
const CartHeader = () => {
    return (
        <div className="dropdownCart">
            <a className="dropdownCart__link" href="/">
                <span className="dropdownCart__text">0 item(s) - $0.00</span>
                <span className="dropdownCart__icon">
                 <i className="fa fa-shopping-cart"> </i>
                </span>
            </a>
            <div className="dropdownCart-content">
                <p>Your shopping cart is empty!</p>
            </div>
        </div>
    )
}
export default CartHeader