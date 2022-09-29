import React from "react";
import "./plans.css";
import { plansData } from "../../data/plansData";
import tick from "../../assets/whiteTick.png";
export default function plansSection() {
  return (
    <div className="plans_container" id="PlansSection">
      <div className="programs_header">
        <span className="stroke_txt">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke_txt"> NOW WITH US </span>
      </div>
      {/* plans cards */}
      <div className="plans">
        {plansData.map((plan, i) => {
          return (
            <div className="plan" key={i}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>zl {plan.price}</span>
              <div className="features">
                {plan.features.map((feature, i) => {
                  return (
                    <div className="feature">
                      <img src={tick} alt="" />
                      <span key={i}>{feature}</span>
                    </div>
                  );
                })}
              </div>
              <div>
                <span>See more benefits -> </span>
              </div>
              <button className="btn">Join Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
