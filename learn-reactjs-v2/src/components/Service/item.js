import React from 'react'

const ServiceItem = (props) => {
    var itemStyle = {
        backgroundColor: props.bgColor
    };
    return (
        <li className="service__list--item" style={itemStyle}>
            <i className={'service__list--icon ' + props.icon}></i>
            <p className="service__list--text"> {props.info}</p>
        </li>
    )
}

export default ServiceItem