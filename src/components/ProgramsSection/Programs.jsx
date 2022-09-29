import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";
function programs() {
  return (
    <div className="Programs" id="programs">
      {/* Header */}
      <div className="programs_header">
        <span className="stroke_txt">Explore our</span>
        <span>Programs</span>
        <span className="stroke_txt">to shape you </span>
      </div>
      {/* Cards */}
      <div className="programs_cat">
        {programsData.map((program) => {
          return (
            <div className="program_card">
              {program.image}

              <span>{program.heading}</span>
              <span>{program.details}</span>

              <div className="join_now">
                <span>Join Now</span>
                <img src={RightArrow} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default programs;
