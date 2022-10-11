import React from "react";
import "./footer.css";
import GithubIcon from "../../assets/github.png";
import InstagramIcon from "../../assets/instagram.png";
import LinkedinIcon from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
function Footer() {
  return (
    <div className="FooterContainer">
      <hr />
      <div className="footer">
        <div className="socialLinks">
          <a href="https://github.com/aymendev1">
            <img src={GithubIcon} alt="" />
          </a>
          <a href="https://github.com/aymendev1">
            <img src={InstagramIcon} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/aymanazougar/">
            <img src={LinkedinIcon} alt="" />
          </a>
        </div>
        <div className="logo-footer">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="blur blur-f"></div>
      <div className="blur blur-f2"></div>
    </div>
  );
}

export default Footer;
