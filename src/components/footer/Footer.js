import React from "react";
import homelogo from "../../assest/homelogo.png";
import userlogo from "../../assest/userlogo.jpg";
import "./styles.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="link">
        <Link to={"/dashboard"}>
          <i class="fa-solid fa-house"></i>
        </Link>
        <Link to={"/user"}>
          <i class="fa-solid fa-user"></i>{" "}
        </Link>
        {/* <img src={homelogo}/>
         <img src={userlogo}/> */}
      </div>
    </div>
  );
}

export default Footer;
