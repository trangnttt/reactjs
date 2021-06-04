import React, { useEffect } from 'react'
import ProductService from '@/services/About'


function About() {
    useEffect(
        () => {
            const fetchData = async () => {
                const data = await ProductService.getId(2)
                console.log('data', data)
            };
            fetchData();
        }, []
    )
    return (
        <div className="about">
            <h2 className="about__title">About</h2>
            <p className="about__content">This is about page</p>
            
        </div>
    );
}
export default About