import React from 'react'
import styles from '../styles/home.module.scss'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
const FeaturedCategory = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
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
        <div className={styles['category']}>
                <h3 className={styles['category__title']}>Featured Products</h3>
                <div className={styles['category__divider']}></div>
                <p className={styles['category__info']}>JDisplay any products as tabs or accordions with optional grid or carousel mode. Custom products per row per module and per breakpoint. Each module can display products in either grid or list view with different styles per module.
                </p>
            <Slider {...settings}>
                <div className={styles['slide-category']}>
                    <div className={styles['slide-category__item']}>
                        <img className={styles['slide-category__img']} src="../../assets/images/cate1.jpg" alt="Card image cap" />
                        <span className={styles['slide-category__mark']}>
                            <Link to="#" className={styles['slide-category__mark--label']}>Ericksson</Link>
                            <span>Model 995</span>
                        </span>
                        <div className={styles['slide-category__body']}>
                            <h3 className={styles['slide-category__title']}>Headphones</h3>
                            <p className={styles['slide-category__price']}>$19.99</p>
                            <input className={styles['slide-category__qty']} type="number" defaultValue="1" />
                            <Link to="#" className={styles['slide-category__add']}>Add to Cart</Link>
                            <Link to="#" className={styles['slide-category__icon']}>
                                <i className="fa fa-heart-o"></i>
                            </Link>
                            <Link to="#" className={styles['slide-category__icon']}><i className="fa fa-exchange"></i></Link>
                        </div>
                    </div>
                </div>
                <div className={styles['slide-category']}>
                    <div className={styles['slide-category__item']}>
                        <img className={styles['slide-category__img']} src="../../assets/images/cate2.jpg" alt="Card image cap" />
                        <span className={styles['slide-category__mark']}>
                            <Link to="#" className={styles['slide-category__mark--label']}>Ericksson</Link>
                            <span>Model 995</span>
                        </span>
                        <div className={styles['slide-category__body']}>
                            <h3 className={styles['slide-category__title']}>Headphones</h3>
                            <p className={styles['slide-category__price']}>$19.99</p>
                            <input className={styles['slide-category__qty']} type="number" defaultValue="1" />
                            <Link to="#" className={styles['slide-category__add']}>Add to Cart</Link>
                            <Link to="#" className={styles['slide-category__icon']}>
                                <i className="fa fa-heart-o"></i>
                            </Link>
                            <Link to="#" className={styles['slide-category__icon']}><i className="fa fa-exchange"></i></Link>
                        </div>
                    </div>
                </div>
                <div className={styles['slide-category']}>
                    <div className={styles['slide-category__item']}>
                        <img className={styles['slide-category__img']} src="../../assets/images/cate3.jpg" alt="Card image cap" />
                        <span className={styles['slide-category__mark']}>
                            <Link to="#" className={styles['slide-category__mark--label']}>Ericksson</Link>
                            <span>Model 995</span>
                        </span>
                        <div className={styles['slide-category__body']}>
                            <h3 className={styles['slide-category__title']}>Headphones</h3>
                            <p className={styles['slide-category__price']}>$19.99</p>
                            <input className={styles['slide-category__qty']} type="number" defaultValue="1" />
                            <Link to="#" className={styles['slide-category__add']}>Add to Cart</Link>
                            <Link to="#" className={styles['slide-category__icon']}>
                                <i className="fa fa-heart-o"></i>
                            </Link>
                            <Link to="#" className={styles['slide-category__icon']}><i className="fa fa-exchange"></i></Link>
                        </div>
                    </div>
                </div>
                <div className={styles['slide-category']}>
                    <div className={styles['slide-category__item']}>
                        <img className={styles['slide-category__img']} src="../../assets/images/cate4.png" alt="Card image cap" />
                        <span className={styles['slide-category__mark']}>
                            <Link to="#" className={styles['slide-category__mark--label']}>Ericksson</Link>
                            <span>Model 995</span>
                        </span>
                        <div className={styles['slide-category__body']}>
                            <h3 className={styles['slide-category__title']}>Headphones</h3>
                            <p className={styles['slide-category__price']}>$19.99</p>
                            <input className={styles['slide-category__qty']} type="number" defaultValue="1" />
                            <Link to="#" className={styles['slide-category__add']}>Add to Cart</Link>
                            <Link to="#" className={styles['slide-category__icon']}>
                                <i className="fa fa-heart-o"></i>
                            </Link>
                            <Link to="#" className={styles['slide-category__icon']}><i className="fa fa-exchange"></i></Link>
                        </div>
                    </div>
                </div>
                <div className={styles['slide-category']}>
                    <div className={styles['slide-category__item']}>
                        <img className={styles['slide-category__img']} src="../../assets/images/cate1.jpg" alt="Card image cap" />
                        <span className={styles['slide-category__mark']}>
                            <Link to="#" className={styles['slide-category__mark--label']}>Ericksson</Link>
                            <span>Model 995</span>
                        </span>
                        <div className={styles['slide-category__body']}>
                            <h3 className={styles['slide-category__title']}>Headphones</h3>
                            <p className={styles['slide-category__price']}>$19.99</p>
                            <input className={styles['slide-category__qty']} type="number" defaultValue="1" />
                            <Link to="#" className={styles['slide-category__add']}>Add to Cart</Link>
                            <Link to="#" className={styles['slide-category__icon']}>
                                <i className="fa fa-heart-o"></i>
                            </Link>
                            <Link to="#" className={styles['slide-category__icon']}><i className="fa fa-exchange"></i></Link>
                        </div>
                    </div>
                </div>
                <div className={styles['slide-category']}>
                    <div className={styles['slide-category__item']}>
                        <img className={styles['slide-category__img']} src="../../assets/images/cate2.jpg" alt="Card image cap" />
                        <span className={styles['slide-category__mark']}>
                            <Link to="#" className={styles['slide-category__mark--label']}>Ericksson</Link>
                            <span>Model 995</span>
                        </span>
                        <div className={styles['slide-category__body']}>
                            <h3 className={styles['slide-category__title']}>Headphones</h3>
                            <p className={styles['slide-category__price']}>$19.99</p>
                            <input className={styles['slide-category__qty']} type="number" defaultValue="1" />
                            <Link to="#" className={styles['slide-category__add']}>Add to Cart</Link>
                            <Link to="#" className={styles['slide-category__icon']}>
                                <i className="fa fa-heart-o"></i>
                            </Link>
                            <Link to="#" className={styles['slide-category__icon']}><i className="fa fa-exchange"></i></Link>
                        </div>
                    </div>
                </div>
                <div className={styles['slide-category']}>
                    <div className={styles['slide-category__item']}>
                        <img className={styles['slide-category__img']} src="../../assets/images/cate3.jpg" alt="Card image cap" />
                        <span className={styles['slide-category__mark']}>
                            <Link to="#" className={styles['slide-category__mark--label']}>Ericksson</Link>
                            <span>Model 995</span>
                        </span>
                        <div className={styles['slide-category__body']}>
                            <h3 className={styles['slide-category__title']}>Headphones</h3>
                            <p className={styles['slide-category__price']}>$19.99</p>
                            <input className={styles['slide-category__qty']} type="number" defaultValue="1" />
                            <Link to="#" className={styles['slide-category__add']}>Add to Cart</Link>
                            <Link to="#" className={styles['slide-category__icon']}>
                                <i className="fa fa-heart-o"></i>
                            </Link>
                            <Link to="#" className={styles['slide-category__icon']}><i className="fa fa-exchange"></i></Link>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    )
}

export default FeaturedCategory