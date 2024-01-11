import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";     
const Home = () => {
return(
    <div className="container">
    <nav className="navbar">
      <div className="logo">Ymmy Tummy</div>
      <ul className="nav_link">
        <li className="nav1"><Link className="nav_link" to="/Home">Home</Link></li>
        <li className="nav1"><Link className="nav_link" to="/About">About</Link></li>
        <li className="nav1"><Link className="nav_link" to="/Message">Message</Link></li>
        <li className="nav1"><Link className="nav_link" to="/Contact">Contact</Link></li>
        
      </ul>
    </nav>
    <div className="home">
            <div className="home-content">
                <h1>The ideal prepared cake regular!</h1><br></br>
                <p>These cakes are made with butter or another fat, like vegetable shortening. The common way is to mix the fat and sugar, then add eggs, and then add flour. </p><br></br>
                <button className="home-btn" type="button">Recipes</button>
            </div>
            <img class="home-image" src="./home.jpg"/>
    </div>
    </div>
)
}
export default Home;