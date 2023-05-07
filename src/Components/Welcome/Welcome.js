import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsCalendarPlus } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import "./Welcome.css";
const Welcome = () => {
  return (
    <>
      <div className="Welcome" id="home">
        <p>Welcome to a Professional Health Care</p>
        <div className="times-of-work">
          <span className="ma">
            <BsFillTelephoneFill /> 010-060-0160
          </span>
          <span>
            <BsCalendarPlus />
            6:00 AM - 10:00 PM (Mon-Fri)
          </span>
        </div>
        <span className="hovr-mail">
          <HiOutlineMailOpen /> info@company.com
        </span>
      </div>

      <div className="hr"></div>
    </>
  );
};

export default Welcome;
