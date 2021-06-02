import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import Slider from "react-slick";
import { CartContext } from '@/contexts/CartContext'
const ProductItem = () => {
    // slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
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

    const [data, setData] = useState({});
   
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://reqres.in/api/users',
            );
            console.log(result.data.data)
            setData(result.data.data);
        };
        fetchData();
    }, []
    )
    const { addCart } = useContext(CartContext);
    return (
        <div className="card-slider">
            <Slider {...settings}>
                {Object.keys(data).length > 0 ?
                    data.map(item => (
                        <div className="col-lg-12" key={item.id}>
                            <div className="card w-100">
                                <img className="card-img-top" src="../../assets/images/product-2.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.email}</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <p className="c-card__price">$19.99</p>
                                    <a href="#" className="btn btn-primary" onClick={() => addCart(item)}>Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    ))
                    : null}
            </Slider>
        </div>
    )
}

export default ProductItem