import React from 'react'
import Introverted from "../../assests/inverts/introvert.jpg"

function Introvert() {
    return (
        <section id="inner" className="introvert">
            <img src={Introverted} alt="words describing introverts" />
            <div className="inverted">
                <h2>Introverts</h2>
                <ul>
                    <li>
                        Defined as people who are quiet and keep to themselves
                    </li>
                    <li>
                        Prefer to keep to themsleves because they like to think
                        about things on their own instead of out loud
                    </li>
                    <li>
                        Energized through being alone and taking time to
                        self reflect
                    </li>
                    <li>
                        Find social interction draining because it requires them to expend
                        more energy than they are used to. 
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Introvert