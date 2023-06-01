import React from "react";
import greek_salad1 from "../images/greek salad1.jpg"
import bruchetta from "../images/bruchetta.png"
import lemon_dessert from "../images/lemon dessert1.png"
import { Link } from "react-router-dom";

const Body = () => {
    return(
        <body>
            <section>
                <div>
                    <h1>Specials</h1>
                </div>
                <div></div>
                <div>
                    <Link to="/Booking"><button aria-label="On Click">Online Menu</button></Link>
                </div>
            </section>
            <section>
                <div>
                    <img src={greek_salad1} alt=""/>
                </div>
                <div>
                    <img src={bruchetta} alt=""/>
                </div>
                <div>
                    <img src={lemon_dessert} alt=""/>
                </div>
            </section>
        </body>
    )
}

export default Body;