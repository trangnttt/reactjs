import React from 'react'
import ServiceItem from './item'
const Service = () => {
    return (
        <div className="p-service">
            <ul className="p-service__list">
                <ServiceItem bgColor="#5a88ca" icon="fa fa-refresh" info="30 Days return" />
                <ServiceItem bgColor="#ffd900" icon="fa fa-truck" info="Free shipping" />
                <ServiceItem bgColor="#fa8072" icon="fa fa-lock" info="Secure payments" />
                <ServiceItem bgColor="#4abebd" icon="fa fa-gift" info="New products" />
            </ul>
        </div>
    )
}

export default Service