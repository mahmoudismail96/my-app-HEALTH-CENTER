import React from "react";
import "./About.css";
import { BsFillHSquareFill } from "react-icons/bs";
import imgDr1 from "../../assets/author-image.jpg";

const About = () => {
  return (
    <section className="about_Us" id="about">
      <div className="dcr">
        <h2>
          Welcome to Your <BsFillHSquareFill />
          ealth
          <br />
          Center
        </h2>
        <p className="p1">
          Aenean luctus lobortis tellus, vel ornare enim molestie condimentum.
          Curabitur lacinia nisi vitae velit volutpat venenatis.
        </p>
        <p>
          Sed a dignissim lacus. Quisque fermentum est non orci commodo, a
          luctus urna mattis. Ut placerat, diam a tempus vehicula.
        </p>
        <div className="dr_dacr">
          <img src={imgDr1} alt="Dr img" />
          <div className="dr_name">
            <h2>Dr. Neil Jackson</h2>
            <p>General Principal</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
