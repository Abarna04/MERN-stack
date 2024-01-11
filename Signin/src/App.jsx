import React,{useEffect}from "react";
import './App.css';
const Login = () =>{
    useEffect(() => {
        const container = document.getElementById('container');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');
        registerBtn.addEventListener('click', () => {
            container.classList.add("active");
        });
        loginBtn.addEventListener('click', () => {
            container.classList.remove("active");
        });
      }, []);
return(
    <div className="container" id="container">
        <div className="form-container sign-up">
            <form>
                <h1>Create Account</h1>
                <br></br>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Sign Up</button>
            </form>
        </div>
        <div class="form-container sign-in">
            <form>
                <h1>Sign In</h1><br>    </br>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <a href="#">Forget Your Password?</a>
                <button>Sign In</button>
            </form>
        </div>
        <div class="toggle-container">
            <div class="toggle">
                <div class="toggle-panel toggle-left">
                    <h1>Welcome Back!</h1>
                    <p>Enter your personal details to use all of site features</p>
                    <button class="hidden" id="login">Sign In</button>
                </div>
                <div class="toggle-panel toggle-right">
                    <h1>Welcome, Friend!</h1>
                    <p>Enter your personal details to use all of site features</p>
                    <button class="hidden" id="register">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
);
}
export default Login;