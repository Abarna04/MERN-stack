import React from "react";
import { Link } from "react-router-dom";
import "./About.css";     
const About = () => {
return(
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
        <div className="about">
            <div className="about-content">
            <h2>About us</h2>
            <h1>Our tour plan is to fulfil your dream wish</h1>
            <h3>Understand to achieve anything requires faith and belief in yourself, vision, hard work, determination, and dedication.</h3>
            <div className="about-grid">
                <div className="ag">
                    <h1>15</h1>
                    <p>Year of Experience</p>
                </div>
                <div className="ag">
                    <h1>1k</h1>
                    <p>Sucessful trips</p>
                </div>
                <div className="ag">
                    <h1>20k</h1>
                    <p>Happy customers</p>
                </div>
                <div className="ag">
                    <h1>4.5</h1>
                    <p>Overall Rating</p>
                </div>
            </div>
            </div>
        </div>
    </div>
)
}
export default About;