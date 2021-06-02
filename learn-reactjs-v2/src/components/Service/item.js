import React from 'react'
import styles from './styles/service.module.scss'
const ServiceItem = (props) => {
    var itemStyle = {
        backgroundColor: props.bgColor
    };
    return (
        <li className={styles['service__list--item']} style={itemStyle}>
            <i className={styles['service__list--icon'] + ' ' + props.icon }></i>
            <p className={styles['service__list--text']}> {props.info}</p>
        </li>
    )
}

export default ServiceItem