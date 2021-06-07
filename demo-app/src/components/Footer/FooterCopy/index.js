import React from 'react'
const FooterCopy = () => {
    return (
        <div className="footer-copy">
            <div className="wrapper">
                <p className="footer-copy__left">Copyright © 2014, Your Store, All Rights Reserved</p>
                <p className="footer-copy__right">
                    <span><i className="fa fa-cc-visa footer-copy__right--icon"></i></span>
                    <span><i className="fa fa-cc-mastercard footer-copy__right--icon"></i></span>
                    <span><i className="fa fa-cc-amex footer-copy__right--icon"></i></span>
                    <span><i className="fa fa-cc-discover footer-copy__right--icon"></i></span>
                    <span><i className="fa fa-cc-paypal footer-copy__right--icon"></i></span>
                    <span><i className="fa fa-cc-stripe footer-copy__right--icon"></i></span>
                </p>
              
            </div>
        </div>

    )
}
export default FooterCopy
