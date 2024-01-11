import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import "./Navbar.css";     
const Navbar = () => {
return(
  <>
    <div className="container">
    <nav className="navbar">
      <div className="logo">Trip</div>
      <ul className="nav_link">
        <li className="nav1"><Link className="nav_link" to="/Home">Home</Link></li>
        <li className="nav1"><Link className="nav_link" to="/About">About</Link></li>
        <li className="nav1"><Link className="nav_link" to="/Message">Message</Link></li>
        <li className="nav1"><Link className="nav_link" to="/Contact">Contact</Link></li>
        
      </ul>
    </nav>
    <div class="home">
            <div class="home-content">
                <h1>Dare to live the life you've always wanted.</h1><br></br>
                <p>Life is short and the world is wide. So, better get started.</p><br></br>
                <button className="home-btn" type="button">Check the trip</button>
            </div>
    </div>
    </div>
  </>
)
}
export default Navbar;