import React from 'react';
import extrovertDescription from "../../assests/exverts/extrovert-quote.jpg"

function Extrovert() {
    return (
        <section id="outer" className="extrovert">
            <div className="going">
                <h2>Extroverts</h2>
                <p>
                    General Definition: Extroverts in general are known for their confidence and 
                    ability to talk to other people with ease. For example, extroverts are able to 
                    start conversations with complete strangers without too much difficulty. The 
                    next paragraph belows explains why extroverts are able to communicate with 
                    others so easily.  
                </p>
                <br></br>
                <p>
                    Communicating with Others: Extroverts find communicating with others to be easy 
                    because they like learning from other people. Learning from other people helps 
                    extroverts understand the world around them better. The chance to learn new things 
                    from others along with social interaction is what energizes extroverts.
                </p>
                <p>
                    This paragraph will also be on more additional information about extroverts. It will be worked on tomoroow
                </p>
            </div>
            <img src={extrovertDescription} alt="words that describe extroverts" />
        </section>
    )
}

export default Extrovert;