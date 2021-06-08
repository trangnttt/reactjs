import React from 'react'
import SliderHome from './Slider'
import ImgAdvertise from './ImgAdvertise'
import styles from '../styles/home.module.scss'

const Advertise = () => {
    return (
        <div className="container">
            <div className={styles['advertise']}>
                <SliderHome />
                <ImgAdvertise />
            </div>
        </div>
    )
}

export default Advertise