import React from "react"
 import small_logo from "../images/small_logo.png"

 const Footer = () => {
     return(
         <footer>
             <section>
             <div>
                 <img src={small_logo} alt=""/>
             </div>
             <div>
             <ul>
                 <li><a href="https://little-lemon-capstone.netlify.app/">Home</a></li>
                 <li><a href="https://little-lemon-capstone.netlify.app/">About</a></li>
                 <li><a href="https://little-lemon-capstone.netlify.app/">Menu</a></li>
                 <li><a href="/Booking">Reservations</a></li>
                 <li><a>Order Online</a></li>
                 <li><a>Login</a></li>
             </ul>
             </div>
             <div>
             <ul>
                 <li>Address</li>
                 <li>Phone Number</li>
                 <li>Email</li>
             </ul>
             </div>
             <div>
             <ul>
                 <li>Facebook</li>
                 <li>Instagram</li>
                 <li>TikTok</li>
             </ul>
             </div>
             </section>
         </footer>
     )
 }

 export default Footer;