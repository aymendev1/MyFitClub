import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
function Header() {
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="logo" />
      <ul className="header_menu">
        <li className="header_items">Home</li>
        <li className="header_items">Programs</li>
        <li className="header_items">Why us</li>
        <li className="header_items">Plans</li>
        <li className="header_items">Testimonials</li>
      </ul>
    </div>
  );
}

export default Header;
