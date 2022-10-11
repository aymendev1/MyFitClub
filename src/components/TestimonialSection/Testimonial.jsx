import React, { useState } from "react";
import { motion } from "framer-motion";
import "./testimonial.css";
import { testimonialsData } from "../../data/testimonialsData";
import RightArrow from "../../assets/rightArrow.png";
import LeftArrow from "../../assets/leftArrow.png";
export default function TestimonialSection() {
  const [indexTestimonial, setIndexTestimonial] = useState(0);
  let tLength = testimonialsData.length;
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="testimonials" id="testimonials">
      <div className="left-t">
        <span>TESTIMONIALS</span>
        <span className="stroke_txt">What They</span>
        <span>Say about us</span>
        <motion.p
          key={indexTestimonial}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
        >
          {testimonialsData[indexTestimonial].review}
        </motion.p>
        <span>
          <span>{testimonialsData[indexTestimonial].name}</span> -
          <span> {testimonialsData[indexTestimonial].status}</span>
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          key={indexTestimonial}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[indexTestimonial].image}
          alt=""
        />
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
