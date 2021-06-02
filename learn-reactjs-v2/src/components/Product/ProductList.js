import React from 'react'
import ProductItem from './ProductItem'
import styles from './styles/product.module.scss'
const ProductList = () => {
    return (
        <div className={styles['product']}>
            <h1 className={styles['product__title']}>Latest Products</h1>
            <ProductItem />
        </div>
    )
}

export default ProductList