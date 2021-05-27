import React from 'react'

const ProductItem = () => {
    return (
        <div className="card">
            <img className="img-responsive" src="https://freshdesignweb.com/demo/template/ustora/img/product-6.jpg" />
            <h3>Tailored Jeans</h3>
            <p className="card__price">$19.99</p>
            <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
            <p><button className="card__add">Add to Cart</button></p>
        </div>
    )
}

export default ProductItem