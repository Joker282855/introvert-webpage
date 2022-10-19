import React from 'react'
import Introverted from "../../assests/inverts/introvert.jpg"

function Introvert() {
    return (
        <section id="inner" className="introvert">
            <img src={Introverted} alt="words describing introverts" className="inside" />
            <div className="inverted">
                <h2>Introverts</h2>
                <p>Introvets usually tend to be withdrawn</p>
            </div>
        </section>
    )
}

export default Introvert;