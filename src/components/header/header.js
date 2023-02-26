import React from 'react';
import {CiSearch} from "react-icons/ci";
import {SlBasket} from "react-icons/sl";

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <h2>UI.desk</h2>
                    <div className="header--link">
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                        <a href="">Testimonials</a>
                    </div>
                    <div className="header--order">
                            <CiSearch className="icon1"/>
                            <SlBasket className="icon1"/>
                        <button>Order Now</button>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;