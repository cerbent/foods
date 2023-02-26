import React from 'react';
import foods from "../../asests/img/tamak.png"

const Fresh = () => {
    return (
        <section id="fresh">
            <div className="container">
                <div className="fresh">
                    <div className="fresh--img">
                        <img src={foods} alt=""/>
                    </div>
                    <div className="fresh--block">
                        <h1>Fresh Vegetables <br/>
                            Every Day</h1>
                        <p>Healthy life as informed declared we enjoy the margaret. Joy horrible moreover man feelings own shy. Request norland neither mistake for yet. Between the for morning assured country believe.</p>
                        <button>Learn More</button>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Fresh;