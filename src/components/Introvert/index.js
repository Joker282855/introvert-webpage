import React from 'react'
import Introverted from "../../assests/inverts/introvert.jpg"
import Thinks from "../../assests/new-image/introvert-thinking-2.jpg"

function Introvert() {
    return (
        <section id="inner" className="introvert">
            <div className="inverted">
                <h2>Introverts</h2>
                <p>
                    Introverts are known for staying quiet in social situations because they are in a room full of people 
                    they do not know. For whatever reason being in a room full of people they do not know makes introverted 
                    personalities nervous and want to keep to themselves so they do not feel so uncomfortable. Another factor 
                    that makes introverts claim up in social situations is they find conserving with other people to be mentally 
                    exhausting and they have less energy as the conversation goes on. Introverts recharge mostly through self 
                    reflection where they have time to think about their day and gain insight from what they have observed. Introverts 
                    who take time to get to know other people tend to be more talkative because they have grown more comfortable 
                    around the people they have gotten to know. Because of an introverts tendacy to stay quiet they have been 
                    perceived by society as people that are hard to talk to and in some cases do not want to do stuff voluntaryily
                    like joining a club at school. The next paragraph talks about how introverts are viewed in school.
                 </p>
                <br></br>
                <p>
                    At school introverts usually do well when they have to do homework on their own because they are working by themselves. 
                    Solo projects enable an introvert time to self relect and lets him or her tackle the assignments without having to spend 
                    energy talking to other people. Teachers usually do not think to pick on introverted students during class discussions because 
                    they know they will not give a lot of words in response so they usually pick on extroverted personalities instead. 
                    Both introverted and extroverted personalities find it hard to talk with introverted classmates because they tend to keep the 
                    conversation short and do not open up very easily. 
                </p>
            </div>
            <div class="brain">
                <img src={Introverted} class="light" alt="words describing introverts" />
                <br></br>
                <img src={Thinks} class="second" alt="an introvert thinking about things" />
                <br></br>
                <li>
                    <a href="https://quietrev.com/6-illustrations-that-show-what-its-like-in-an-introverts-head/">See Inside An Introverts Head: Click Me!</a>
                </li>
            </div>
        </section>

    )
}

export default Introvert