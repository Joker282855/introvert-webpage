import React from 'react';
import sharedThings from "../../assests/shared/common-ground.jpg"

function Change() {
    return (
        <section id="shared" className="together">
            <div className="peaceful">
                <h2>Common Ground</h2>
                <p>
                   Things in Common: Introverts and extroverts both enjoy talking with other people 
                   who are open and thrive on social interaction. Both personality types can get 
                   anxious if they have to answer a question they were not prepared for. For example, 
                   both personalities can find it nerve racking when a teacher randomly calls on them 
                   to asnswer a question in class. Each personality might prefer to work alone when 
                   they have to produce a quality product for their boss at work, teacher at school, etc. 
                   For example, student’s tend to work by themselves whether they are introverted or 
                   extroverted when a teacher makes an assignment worth the majority of their grade.  
                </p>
            </div>
            <img src={sharedThings} alt="two people shaking hands" />
        </section>
    )
}

export default Change;