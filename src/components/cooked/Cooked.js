import React from 'react';
import cooked from "../../asests/img/image 6.png"
import jal from "../../asests/img/image 8.png"
import hih from "../../asests/img/ashhpoz.png"

const Cooked = () => {
    return (
        <section id="cooked">
            <div className="container">
                <div className="cooked">
                    <div className="cooked--block">
                        <h1>Cooked by the <br/>
                            Best Chefs</h1>
                        <p>Believing neglected so so allowance existence departure in. In design active temper be uneasy. Thirty for remove plenty regard you summer though. He preference connection astonished on of ye.</p>
                        <div className="cooked--block__che">
                            <div className="cooked--block__che--text">
                                <input type="checkbox" style={{color:"#6EBF4B"}}/>
                                <div className="cooked--block__che--text__title">
                                    <p>A guaranteed delicious meal</p>
                                </div>
                            </div>
                            <div className="cooked--block__che--text">
                                <input type="checkbox"/>
                                <div className="cooked--block__che--text__title">
                                    <p>A guaranteed delicious meal</p>
                                </div>
                            </div>
                            <div className="cooked--block__che--text">
                                <input type="checkbox"/>
                                <div className="cooked--block__che--text__title">
                                    <p>A guaranteed delicious meal</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="cooked--img">
                        <img src={hih} alt=""/>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Cooked;