import React from 'react';

const Search = () => {
    return (
        <section id="search">
            <div className="container">
                <h1>Subscribe to the Newsletter</h1>
                <p>Enter your email below to get our daily offers and news</p>
                <div className="search">
                    <div className="search--block">
                        <input type="search"placeholder="Enter your email."/>
                    </div>
                    <button>Get Started</button>

                </div>

            </div>

        </section>
    );
};

export default Search;