import React from 'react'
import styles from '../styles/home.module.scss'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
const BrandLogo = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 400,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    };

    return (
        <div className={styles['brand']}>
            <h3 className={styles['brand__title']}>Shop by Brand</h3>
            <div className={styles['brand__divider']}></div>
            <Slider {...settings}>
                <div>
                    <Link className={styles['brand__img']} to="/">
                        <img src="../../assets/images/brand-logo1.jpg" />
                    </Link>
                </div>
                <div>
                    <Link className={styles['brand__img']} to="/">
                        <img src="../../assets/images/brand-logo2.jpg" />
                    </Link>
                </div>
                <div>
                    <Link className={styles['brand__img']} to="/">
                        <img src="../../assets/images/brand-logo3.jpg" />
                    </Link>
                </div>
                <div>
                    <Link className={styles['brand__img']} to="/">
                        <img src="../../assets/images/brand-logo4.jpg" />
                    </Link>
                </div>
                <div>
                    <Link className={styles['brand__img']} to="/">
                        <img src="../../assets/images/brand-logo5.jpg" />
                    </Link>
                </div><div>
                    <Link className={styles['brand__img']} to="/">
                        <img src="../../assets/images/brand-logo6.jpg" />
                    </Link>
                </div>
                <div>
                    <Link className={styles['brand__img']} to="/">
                        <img src="../../assets/images/brand-logo7.jpg" />
                    </Link>
                </div>
                <div>
                    <Link className={styles['brand__img']} to="/">
                        <img src="../../assets/images/brand-logo8.jpg" />
                    </Link>
                </div>
                <div>
                    <Link className={styles['brand__img']} to="/">
                        <img src="../../assets/images/brand-logo9.jpg" />
                    </Link>
                </div>
            </Slider>
        </div>
    )
}

export default BrandLogo