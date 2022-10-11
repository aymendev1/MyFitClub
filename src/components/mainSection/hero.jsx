import React from "react";
import { motion } from "framer-motion";
import "./hero.css";
import Header from "../Header/Header.jsx";
import main_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import main_image from "../../assets/test3.png";
import NumberCounter from "number-counter";
function hero() {
  const transition = { type: "spring", duration: 3 };
  const mobileRes = window.innerWidth <= 768 ? true : false;
  return (
    <div className="heroSection" id="home">
      <div className="blur blur-main"></div>
      <div className="left-h">
        <Header />
        {/* Slogan   */}
        <div className="slogan">
          <motion.div
            initial={{ left: mobileRes ? "58%" : "63%" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
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
            <span>
              <NumberCounter end={140} start={120} delay="4" preFix="+" />{" "}
            </span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={1121} start={1101} delay="4" preFix="+" />
            </span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={29} delay="47h00" preFix="+" />
            </span>
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
        <motion.div
          transition={transition}
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          className="heart_rate"
        >
          <img src={Heart} alt="Heart Rate" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* mainSection images */}
        <img src={main_image} alt="" className="mainSection_img" />
        <motion.img
          transition={transition}
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          src={main_image_back}
          alt=""
          className="mainSection_imgback"
        />
        {/* The Calories Box */}
        <motion.div
          transition={transition}
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          className="caloriesBox"
        >
          <img src={Calories} alt="" className="caloriesBox_img" />
          <div>
            <span>Calories Burned</span>
            <span>220 Kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default hero;
