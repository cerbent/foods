import React from 'react';
import ash from "../../asests/img/surot.png"


const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="about">
                    <div className="about--block">
                        <h1>About US</h1>
                        <p>Organic food is grown without the use of synthetic chemicals, such as human-made pesticides and fertilizers, and does not contain genetically modified organisms (GMOs). Organic foods include fresh produce, meats, and dairy products as well as processed foods such as crackers, drinks, and frozen meals.</p>
                        <button>Learn More</button>
                    </div>
                    <div className="about--images">
                        <img src={ash} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;