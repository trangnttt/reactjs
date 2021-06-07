import React, { useEffect, useState } from 'react'
import ProductService from '@/services/About'
import LoadingPage from '@/components/LoadingPage'
const divStyle = {
    marginTop: '150px',
};

function About() {
    const [data, setData] = useState({});
    const [loading, setloading] = useState(undefined);
    const [completed, setcompleted] = useState(undefined);
    useEffect(
        () => {
            const fetchData = async () => {
                const result = await ProductService.getAll()
                setData(result.data.data);
                setloading(true);
                setTimeout(() => {
                    setcompleted(true);
                }, 100);
            };
            fetchData();
        }, []
    )
    console.log('data about', data)
    return (
        <div className="about" style={divStyle}>
            <h2 className="about__title">About</h2>
            <p className="about__content">This is about page</p>
            <p>Data is:</p>
            {!completed ? (
                <>
                    {!loading ? (
                        <LoadingPage />
                    ) : (
                        <div className="completed">&#x2713;</div>
                    )}
                </>
            ) : (   
                <>
                    {
                        data.map(item => (
                            <li key={item.id}>{item.id}: {item.email}</li>
                        ))
                    }
                </>
            )}
        </div>
    );
}
export default About