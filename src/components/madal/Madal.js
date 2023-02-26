import React, {useState} from 'react';

const Madal = () => {
    const [coounter,setcounter] = useState(0)
    return (
        <section id="madal">
            <div className="container">
                <div className="madal--block">
                    <h1>{coounter}</h1>
                    <button onClick={() => setcounter(coounter +1)}>
                        click
                    </button>
                    <button onClick={() => setcounter(coounter -1)}>
                        delete
                    </button>
                </div>
            </div>
        </section>
    );
};
export default Madal;