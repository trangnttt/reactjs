import React from 'react'
import Advertise from './Advertise'
import Service from './Service'
import WhyBuy from './WhyBuy'
import FeaturedCategory from './FeaturedCategory'
import BrandLogo from './BrandLogo'
const HomeComponent = () => {
    return(
        <>
           <Advertise />
           <Service />
           <WhyBuy />
           <FeaturedCategory />
           <BrandLogo />
        </>
    )
}
export default HomeComponent