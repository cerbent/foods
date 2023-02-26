import React from 'react';
import saat from "../../asests/img/saat.png"
import faaf from "../../asests/img/faf.png"
import saah from "../../asests/img/saah.png"

const Special = () => {
    return (
        <section id="special">
            <div className="container">
                <h1>Special Dishes for you</h1>
                <p>Made with premium & 100% Organic ingredients</p>
                <div className="special">
                    <div className="special--block">
                        <img src={saat} alt=""/>
                        <h2>Green Salad</h2>
                        <p>A salad combined witha delicious
                            cut of bacon and mixed with tasty
                            and fresh sesome oil.</p>
                    </div>
                    <div className="special--block">
                        <img src={faaf} alt=""/>
                        <h2>Beef Salad</h2>
                        <p>A salad combined witha delicious
                            cut of bacon and mixed with tasty
                            and fresh sesome oil.</p>
                    </div>
                    <div className="special--block">
                        <img src={saah} alt=""/>
                        <h2>Nut Salad</h2>
                        <p>A salad combined witha delicious
                            cut of bacon and mixed with tasty
                            and fresh sesome oil.</p>
                    </div>
                </div>
                <button>view all</button>
            </div>
        </section>
    );
};

export default Special;