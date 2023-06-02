import React from "react";
import greek_salad1 from "../images/greek salad1.jpg"
import bruchetta from "../images/bruchetta.png"
import lemon_dessert from "../images/lemon dessert1.png"
import { Link } from "react-router-dom";

const Specials = () => {
    return(
        <center>
            <section>
                <div>
                    <h1>Specials</h1>
                </div>
                <div>
                    <Link to="/Booking"><button aria-label="On Click">Online Menu</button></Link>
                </div>
            </section>
            <section>
                <div>
                    <img src={greek_salad1} alt=""/>
                    <h3>Greek Salad $14</h3> 
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                </div>
                <div>
                    <img src={bruchetta} alt=""/>
                    <h3>Bruchetta $8</h3>
                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                </div>
                <div>
                    <img src={lemon_dessert} alt=""/>
                    <h3>Lemon Dessert $6</h3>
                    <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                </div>
            </section>
        </center>
    )
}

export default Specials;