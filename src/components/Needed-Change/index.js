import React from 'react';
import sharedThings from "../../assests/shared/common-ground.jpg"

function Change() {
    return (
        <section id="shared" className="together">
            <div className="peaceful">
                <h2>Needed Change</h2>
                <p>
                    One way to increase communication between introverted and extroverted students is 
                    for introverted students to be more talkative when they engage in conversation. 
                    College students who filled out my survey have expressed they enjoy talking to 
                    extroverted people more because they love to keep the conversation going. Speaking 
                    up will enable introverts to get along with extroverts easier because they are making 
                    more of an effort to keep the conversation going. On the other hand, extroverted 
                    personalities need to let introverted personalities recharge after talking to them 
                    for a little while. For example, one college student I surveyed says he enjoys talking 
                    to other people in social situations but finds it draining so he takes time to recharge 
                    by himself when needed. Both of these things would increase communication between the 
                    two because each personality is respecting each other's social preferences. 
                </p>
                <br></br>
                <p>
                    One thing college students have expressed that needs to happen more often in the classroom is 
                    to have more activities where the classmates can work together in more small groups. Working 
                    together in small groups can help introverts open up more and more as they get to be comfortable 
                    conversing with their fellow classmates.  A way teachers can encourage conversation between 
                    classmates is to facilitate discussions where students who do not usually speak up share their 
                    opinions. Students who share their opinions on a more frequent basis usually become more comfortable 
                    answering questions in class. Students who feel that their opinion holds equal weight to their 
                    classmates will be more willing to speak up in class. A classroom environment that holds everyone's 
                    opinions equally puts introverts more at ease and allows extroverts the ability to talk without 
                    overpowering introverted classmates. 
                </p>
            </div>
            <img src={sharedThings} alt="two people shaking hands" />
        </section>
    )
}

export default Change;