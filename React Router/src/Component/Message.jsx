import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Message.css";     
const Message = () => {
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
        <div className="messages">
        <div className="message">
            <form>
                <h1>MESSAGE</h1><br></br>   
                <label for="name">Full Name</label>
                <input type="text" className="m1"/><br></br><br></br>
                <label for="email">Email</label>
                <input type="text" className="m1"/><br></br><br></br>
                <label for="subject">Subject</label>
                <input type="text" className="m1"/><br></br><br></br>
                <label for="message">Message</label>
                <input type="text" className="m1"/><br></br><br></br>
                <button className="m-btn" type="button">SEND</button>
            </form>
        </div>
    </div>
    </div>
)   
}
export default Message;