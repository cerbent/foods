import React from 'react';
import food from "../../asests/img/header Image.png"
import list from "../../asests/img/tumblr_m6hsquniZJ1r3yzd4.jpg.crdownload"

const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero">
                    <div className="hero--block">
                        <h1>Just <span>Eat healthy</span> food to live a healthier life</h1>
                        <p>Enjoy a healthy life by eating healthy foods that have extraordinary flavors that make your life healthier for today and in the future</p>
                        <button>Order Now</button>
                    </div>
                    <div className="hero--img">
                        <img src={food} alt=""/>
                        <img className="j1" src={list} alt=""/>
                        <img className="j2" src={list} alt=""/>
                        <img className="j3" src={list} alt=""/>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Hero;