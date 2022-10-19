import React from 'react';
import extrovertDescription from "../../assests/exverts/extrovert-quote.jpg"

function Extrovert() {
    return (
        <section id="outer" className="extrovert">
            <img src={extrovertDescription} alt="words that describe extroverts" className="outside" />
            <div className="going">
                <h2>Extroverts</h2>
                <p></p>
            </div>
        </section>
    )
}

export default Extrovert;