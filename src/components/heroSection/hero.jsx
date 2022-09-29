import React from "react";
import "./hero.css";
import Header from "../Header/Header.jsx";
import main_image from "../../assets/hero_image.png";
import main_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
function hero() {
  return (
    <div className="heroSection">
      <div className="left-h">
        <Header />
        {/* Slogan   */}
        <div className="slogan">
          <div></div>
          <span>The Best Fitness Club in Poland </span>
        </div>
        {/* Section Heading */}
        <div className="heading_text">
          <div>
            <span className="stroke_txt">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body </span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* Figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>Fitness programs</span>
          </div>
        </div>
        {/* Section Buttons */}
        <div className="section_buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now !</button>
        {/* Heart rate box */}
        <div className="heart_rate">
          <img src={Heart} alt="Heart Rate" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        {/* mainSection images */}
        <img src={main_image} alt="" className="mainSection_img" />
        <img src={main_image_back} alt="" className="mainSection_imgback" />
        {/* The Calories Box */}
        <div className="caloriesBox">
          <img src={Calories} alt="" className="caloriesBox_img" />
          <div>
            <span>Calories Burned</span>
            <span>220 Kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default hero;
