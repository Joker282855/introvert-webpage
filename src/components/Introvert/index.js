import React from 'react'
import Introverted from "../../assests/inverts/introvert.jpg"

function Introvert() {
    return (
        <section id="inner" className="introvert">
            <div className="inverted">
                <h2>Introverts</h2>
                <p>
                    General Definition: Introverts in general are people who tend to not talk a lot in social 
                    situautions. In most social situations an introvert will keep to himself or not speak up a 
                    lot. For example, an introvert does not use lots of words to explain things when he or she 
                    talks to other people. The paragraph below explains why introverts prefer to stay quiet or 
                    not speak up in social situations. 
                </p>
                <br></br>
                <p>
                    Why are Introverts Quiet: Introverts are people who generally stay quiet. 
                    They usually stay quiet because they prefer thinking about things on their own 
                    instead of thinking out loud. An introvert prefers thinking about things on his or her own 
                    because he or she is energized through self reflection. Social interaction is draining because 
                    it requires introverts to be outside their comfort zone and spend energy talking to other people.
                </p>
                
            </div>
            <img src={Introverted} alt="words describing introverts" />
        </section>
    )
}

export default Introvert