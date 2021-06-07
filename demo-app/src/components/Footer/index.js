import React from 'react'
import MostView from './MostView'
import FooterIcons from './FooterIcons'
import FooterMenu from './FooterMenu'
import FooterCopy from './FooterCopy'
const Footer = () => {
    return (
        <>
            <div className="footer">
                <MostView />
                <FooterIcons />
                <FooterMenu />
                <FooterCopy />
            </div>
        </>
    )
}
export default Footer