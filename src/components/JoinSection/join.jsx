import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./join.css";

function JoinSection() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fv5yi4d",
        "template_8eoirjf",
        form.current,
        "nPSwK0uj39YhNCi3V"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="join" id="join">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke_txt">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke_txt">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="userEmail"
            placeholder="example@email.com"
          />
          <button type="submit" className="btn btn-join">
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default JoinSection;
