import React from 'react';
import adam from "../../asests/img/avatar.svg"
import adam2 from "../../asests/img/avatar (1).svg"
import air from "../../asests/img/air.png"


const Happy = () => {
    return (
        <section id="happy">
            <div className="container">
                <h1>Happy Clients Says</h1>
                <div className="happy">
                    <div className="happy--block">
                        <div className="happy--block__text">
                            <img src={adam} alt=""/>
                            <div className="happy--block__text--title">
                                <h2>KHALIL NAZIR</h2>
                                <p>CEO of UI.Desk</p>
                            </div>
                        </div>
                        <p>Thirty for remove plenty regard you summer though. He preference Partiality on or continuing in particular principles as. Do believing oh disposing to supported allowance we.</p>
                    </div>
                    <div className="happy--block">
                        <div className="happy--block__text">
                            <img src={adam2} alt=""/>
                            <div className="happy--block__text--title">
                                <h2>ZEESHAN ANWER</h2>
                                <p>CEO of UI Box</p>
                            </div>
                        </div>
                        <p>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Happy;