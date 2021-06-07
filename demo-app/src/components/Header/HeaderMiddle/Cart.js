import React from 'react'

const CartHeader = () => {
    return (
        <div className="dropdown-cart">
            <a className="dropdown-cart__link" href="/">
                <span className="dropdown-cart__text">0 item(s) - $0.00</span>
                <span className="dropdown-cart__icon">
                 <i className="fa fa-shopping-cart"> </i>
                </span>
            </a>
            <div className="dropdown-cart--content">
                <p>Your shopping cart is empty!</p>
            </div>
        </div>
    )
}
export default CartHeader