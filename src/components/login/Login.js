import React from "react";
import logo from "../../assest/logo.png";
import "./styles.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
      <div className="login-container">
        <img src={logo} className="logo" />
        <p className="text">#We are Electric</p>
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="password" />
        <Link to={"/dashboard"}>
          <button className="btn">Login</button>
        </Link>

        <p className="text">Forgot password?</p>
      </div>
    </div>
  );
}

export default Login;
