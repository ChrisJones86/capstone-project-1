import React from "react";
 import Restaurant from "../images/restaurant.jpg"
 import { Link } from "react-router-dom";

 const About = () => {
     return(
         <about>
             <section>
                 <div>
                     <h2>Little Lemon</h2>
                     <h3>Chicago</h3>
                         <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                  </div>
                  <div>
                      <img src={Restaurant} alt="" />
                 </div>
                 <div>

                 </div>
             </section>
         </about>
     )
 }

 export default About;