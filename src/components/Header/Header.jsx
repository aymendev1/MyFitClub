import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";

function Header() {
  const mobileRes = window.innerWidth <= 768 ? true : false;
  const [menuON, setMenuON] = useState(false);
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="logo" />
      {mobileRes === true && menuON === false ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => {
            setMenuON(true);
          }}
        >
          <img src={Bars} alt="" style={{ width: "1rem", height: "1rem" }} />
        </div>
      ) : (
        <ul className="header_menu">
          <li className="header_items">
            <Link
              onClick={() => setMenuON(false)}
              to="home"
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li className="header_items">
            <Link
              onClick={() => setMenuON(false)}
              to="programs"
              span={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li className="header_items">
            <Link
              onClick={() => setMenuON(false)}
              to="reasons"
              span={true}
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li className="header_items">
            <Link
              onClick={() => setMenuON(false)}
              to="plansSection"
              span={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li className="header_items">
            <Link
              onClick={() => setMenuON(false)}
              to="testimonials"
              span={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
