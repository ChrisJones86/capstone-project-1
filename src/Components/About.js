import React from "react";
import Mario_and_Adrian from "../images/Mario and Adrian b.jpg"
import { Link } from "react-router-dom";

const About = () => {
    return(
        <about>
            <section>
                <div>
                    <h3>Little Lemon</h3>
                    <h4>Chicago</h4>
                        <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
                                <Link to="/Booking"><button aria-label="On Click">Reserve Table</button></Link>
                 </div>
                 <div>
                     <img src={Mario_and_Adrian} alt="" />
                </div>
                <div>

                </div>
            </section>
        </about>
    )
}

export default About;