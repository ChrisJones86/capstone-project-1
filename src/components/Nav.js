import React from "react";
 import littlelemon_logo from "../images/littlelemon_logo.png";
 import { Link } from "react-router-dom";

 const Nav = () => {
     return(
         <nav>
             <img src={littlelemon_logo} alt="Little Lemon Logo" ></img>
             <ul>
                 <li><Link to="/"><button class="navButton" aria-label="On Click">Home</button></Link></li>
                 <li><Link to="/center"><button class="navButton" aria-label="On Click">About</button></Link></li>
                 <li><Link to="/Specials"><button class="navButton" aria-label="On Click">Menu</button></Link></li>
                 <li><Link to="/Booking"><button class="navButton" aria-label="On Click">Reserve Table</button></Link></li>
                 <li><button class="navButton">Order Online</button></li>
                 <li><button class="navButton">Login</button></li>
             </ul>
         </nav>
     )
 }

 export default Nav;