import React from 'react'
import ProductItem from './ProductItem'

const ProductList = () => {
    return (
        <div className="product">
            <h1 className="product__title">Latest Products</h1>
            <div className="row">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>

        </div>
    )
}

export default ProductList