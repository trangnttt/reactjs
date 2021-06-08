import React from 'react'
import styles from './styles/header.module.scss'

import HeaderTop from './HeaderTop'
import HeaderMiddle from './HeaderMiddle'
import HeaderBottom from './HeaderBottom'

const Header = () => {
    return (
        <>
            <div className={styles['header']}>
                <HeaderTop />
                <HeaderMiddle />
                <HeaderBottom />
            </div>
        </>



    )
}
export default Header