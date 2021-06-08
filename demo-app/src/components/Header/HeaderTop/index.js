import React from 'react'
import MenuTop from './MenuTop'
import MoreMenu from './MoreMenu'
import Language from './Language'
import styles from '../styles/header.module.scss'

const HeaderTop = () => {
    return (
        <div className={styles['header-top']}>
            <div className={`${styles['header-top__row']} container`}>
                <MenuTop />
                <Language />
                <MoreMenu />
            </div>
        </div>
    )
}
export default HeaderTop