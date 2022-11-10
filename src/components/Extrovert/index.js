import React from 'react';
import extrovertDescription from "../../assests/exverts/extrovert-quote.jpg"
import extrovertsTalk from "../../assests/extroverts-talking/extroverts-talking.jpg"

function Extrovert() {
    return (
        <section id="outer" className="extrovert">
            <div className="going">
                <h2>Extroverts</h2>
                <p>
                    In general extroverts are known for having lots of energy which usually makes them 
                    outgoing and engage in social situations easily. Because of their energy they are 
                    able to take initiative in situations without letting shyness or uneasiness get in 
                    the way. The type of jobs extroverts excel in are jobs like being a sales person where 
                    their ability to engage other people comes in handy. This page of the website is going 
                    to talk about extroverts' endless energy and how they are viewed in a school setting. 
                </p>
                <br></br>
                <p>
                    Extroverts are people who are outgoing in social situations and when they have a room full 
                    of people they can talk to. Extroverts are outgoing in social situations because they like 
                    hearing other people's perspective and gaining insight from it. Both learning from other 
                    people and engaging in conversation energizes extroverted personalities and brings them joy 
                    as they converse with other people. Extroverts start to lose energy when they are in situations 
                    where the other people do not speak up or provide enough details to keep the conversation going. 
                </p>
                <br></br>
                <p>
                    In school is where extroverts are able to shine and demonstrate their ability to converse with 
                    others easily. Because of their ability to easily converse with others they are the ones that 
                    answer a teacher's question most often. Extroverts will be the students that are usually picked 
                    for class discussions because they keep the teacher's lesson moving forward instead of having 
                    the lesson drag on when no one else speaks up. Extroverts excel at group work since it gives them 
                    a chance to collaborate with others but find solo work a little more challenging because they do 
                    not have other people to re-energize them. 
                </p>
            </div>
            <div>
                <img src={extrovertDescription} class="describe" alt="words that describe extroverts" />
                <br></br>
                <img src={extrovertsTalk} class="talker" alt="people talking to each other" />
                <br></br>
                <li>
                    <a href="https://therapychanges.com/blog/2016/12/introverts-extroverts-brain-chemistry-differences/">Read About The Difference Between Introverts and Extroverts: Click Here!</a>
                </li>
            </div>
        </section>
    )
}

export default Extrovert;