import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { carousel } from "../../data";

const Carousel = () => {
  const [current, setCueernt] = useState(0);
  const [autoPlay, setAutoPlay] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      slidRight();
    }, 2200);
  });

  const slidRight = () => {
    setCueernt(current === carousel.length - 1 ? 0 : current + 1);
  };
  const slidLeft = () => {
    setCueernt(current === 0 ? carousel.length - 1 : current - 1);
  };

  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        {carousel.map(({ id, img, text1, text2, textbtn }, index) => {
          return (
            <div
              className={
                index == current
                  ? "carousel-card carousel-card-active"
                  : "carousel-card"
              }
              key={id}
            >
              <img src={img} alt="img" className="card-img" />
              <div className="card-overllay">
                <h3>{text1}</h3>
                <h2>{text2}</h2>
                <a href="#">{textbtn}</a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="carousel-pagination">
        {carousel.map((_, index) => {
          return (
            <div
              key={index}
              className={
                index == current
                  ? "pagination-dot pagination-dot-active"
                  : "pagination-dot"
              }
              onClick={() => {
                setCueernt(index);
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
