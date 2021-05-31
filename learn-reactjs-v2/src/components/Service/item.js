import React from 'react'

const ServiceItem = (props) => {
    var itemStyle = {
        backgroundColor: props.bgColor
    };
    return (
        <li className="p-service__list--item" style={itemStyle}>
            <i className={'p-service__list--icon ' + props.icon}></i>
            <p className="p-service__list--text"> {props.info}</p>
        </li>
    )
}

export default ServiceItem