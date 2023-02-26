import React from 'react';
import icon from "../../asests/img/Icon.png"
import icon1 from "../../asests/img/icon2.png"
import leaf from "../../asests/img/leaf 1.png"

const Choose = () => {
    return (
        <section id="choose">
            <div className="container">
                <div className="choose">
                    <h1>Why Choose US?</h1>
                    <p>Organic food is grown without the use of synthetic chemicals</p>
                </div>
                <div className="product">
                    <div className="product--block">
                        <img style={{margin:"0 45px"}} src={icon} alt=""/>
                        <h2>Easy to order</h2>
                        <p>foods include fresh produce, meats as well as processed</p>
                    </div>
                    <div className="product--block">
                        <img style={{margin:"0 44px"}} src={icon1} alt=""/>
                        <h2>Live Order</h2>
                        <p>Place your online Order easily and get the food instantly</p>
                    </div>
                    <div className="product--block">
                        <img style={{margin:"0 45px"}} src={leaf} alt=""/>
                        <h2>100% Organic</h2>
                        <p>Organic food is grown without the use of synthetic chemicals</p>
                    </div>
                </div>
                <div className="pluses">
                    <div className="pluses--block">
                        <h1>40+</h1>
                        <p>Food Partners</p>
                    </div>
                    <div className="pluses--block">
                        <h1>459+</h1>
                        <p>Trusted Clients</p>
                    </div>
                    <div className="pluses--block">
                        <h1>12k+</h1>
                        <p>Order Online</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choose;