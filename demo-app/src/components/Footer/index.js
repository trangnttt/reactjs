import React from 'react'
import styles from './styles/footer.module.scss'
import MostView from './MostView'
import FooterIcons from './FooterIcons'
import FooterMenu from './FooterMenu'
import FooterCopy from './FooterCopy'

const Footer = () => {
    return (
        <>
            <div className={styles['footer']}>
                <MostView />
                <FooterIcons />
                <FooterMenu />
                <FooterCopy />
            </div>
        </>
    )
}
export default Footer