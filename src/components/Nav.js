import React from "react";
 import littlelemon_logo from "../images/littlelemon_logo.png"

 const Nav = () => {
     return(
         <nav>
             <img src={littlelemon_logo} alt="Little Lemon Logo" ></img>
             <ul>
                 <li><a href="/header">Home</a></li>
                 <li><a href="About">About</a></li>
                 <li><a href="Specials">Menu</a></li>
                 <li><a href="/Booking">Reservations</a></li>
                 <li><a>Order Online</a></li>
                 <li><a>Login</a></li>
             </ul>
         </nav>
     )
 }

 export default Nav;