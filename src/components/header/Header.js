import React from "react";
import user from "../../assest/user.png";
import "./styles.css";
function Header() {
  return (
    <div className="header">
      <div className="img">
        <img src={user} />
      </div>
    </div>
  );
}

export default Header;
