import React from "react";
 import littlelemon_logo from "../images/littlelemon_logo.png"

 const Nav = () => {
     return(
         <nav>
             <img src={littlelemon_logo} alt="Little Lemon Logo" ></img>
             <ul>
                 <li><button class="navButton" href="https://little-lemon-capstone.netlify.app">Home</button></li>
                 <li><button class="navButton" href="https://little-lemon-capstone.netlify.app">About</button></li>
                 <li><button class="navButton" href="https://little-lemon-capstone.netlify.app">Menu</button></li>
                 <li><button class="navButton" href="/Booking">Reservations</button></li>
                 <li><button class="navButton">Order Online</button></li>
                 <li><button class="navButton">Login</button></li>
             </ul>
         </nav>
     )
 }

 export default Nav;