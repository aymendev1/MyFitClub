import React, { useState } from "react";
import "./testimonial.css";
import { testimonialsData } from "../../data/testimonialsData";
import RightArrow from "../../assets/rightArrow.png";
import LeftArrow from "../../assets/leftArrow.png";
export default function TestimonialSection() {
  const [indexTestimonial, setIndexTestimonial] = useState(0);
  let tLength = testimonialsData.length;
  return (
    <div className="testimonials" id="testimonials">
      <div className="left-t">
        <span>TESTIMONIALS</span>
        <span className="stroke_txt">What They</span>
        <span>Say about us</span>
        <p>{testimonialsData[indexTestimonial].review}</p>
        <span>
          <span>{testimonialsData[indexTestimonial].name}</span> -
          <span> {testimonialsData[indexTestimonial].status}</span>
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[indexTestimonial].image} alt="" />
        <div className="arrows">
          <img
            onClick={() => {
              indexTestimonial === 0
                ? setIndexTestimonial(tLength - 1)
                : setIndexTestimonial((prev) => prev - 1);
            }}
            src={LeftArrow}
            alt=""
          />
          <img
            onClick={() => {
              indexTestimonial === tLength - 1
                ? setIndexTestimonial(0)
                : setIndexTestimonial((prev) => prev + 1);
            }}
            src={RightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
