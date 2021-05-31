import React from 'react'
import ProductItem from './ProductItem'

const ProductList = () => {
    return (
        <div className="p-product">
            <h1 className="p-product__title">Latest Products</h1>
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