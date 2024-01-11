import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"; 
import "./Contact.css";
const Contact = () => {
return(
    <div>
    <nav className="navbar">
      <div className="logo">Trip</div>
      <ul className="nav_link">
        <li className="nav1"><Link className="nav_link" to="/Home">Home</Link></li>
        <li className="nav1"><Link className="nav_link" to="/About">About</Link></li>
        <li className="nav1"><Link className="nav_link" to="/Message">Message</Link></li>
        <li className="nav1"><Link className="nav_link" to="/Contact">Contact</Link></li>
      </ul>
    </nav>
    <div className="contact">
        <div className="c">
        <h1>Any Questions ?,</h1>
        <h1>Let’s Make Your Dream Happen</h1><br></br>
        <h5>Buy a cup of coffee, have a seat, and chat with us about your next big journey.</h5><br></br>
        <button className="m-btn" type="button">CONTACT US</button>
        </div>
    </div>
    </div>
)
}
export default Contact;