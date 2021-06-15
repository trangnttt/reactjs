import React from 'react'

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <img src="/images/brand1.png" alt="" />
        </div>
    )
}

About.layout = "about";
About.middleware = ["admin","editor"]
export default About