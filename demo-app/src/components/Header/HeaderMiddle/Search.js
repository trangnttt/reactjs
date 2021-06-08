import React from 'react'
import styles from '../styles/header.module.scss'
const SearchHeader = () => {
    return (
        <div className={styles['header-search']}>
            <input type="text" className={styles['header-search__key']} placeholder="Search" />
            <button type="submit" className={styles['header-search__btn']}>
                <i className="fa fa-search"></i>
            </button>
        </div>
    )
}
export default SearchHeader