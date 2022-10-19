import React from 'react';
import sharedThings from "../../assests/shared/common-ground.jpg"

function Common() {
    return (
        <section id="shared" className="together">
            <img src={sharedThings} alt="two people shaking hands" />
            <div className="peaceful">
                <h2>Common Ground</h2>
                <p></p>
            </div>
        </section>
    )
}

export default Common;