import React from "react";
import "./LatestNews.css";
import { News } from "../../data";
const LatestNews = () => {
  return (
    <section>
      <div id="news" className="news">
        <div className="news_header">
          <h2>Latest News</h2>
        </div>
        <div className="news_wrapper">
          {News.map(
            ({
              id,
              img,
              textDate,
              textHeadr,
              textP,
              imgDr,
              textName,
              textDr,
            }) => {
              return (
                <div className="news_card" key={id}>
                  <div className="img">
                    <img src={img} alt="img Dr" />
                  </div>
                  <div className="textDr">
                    <p>{textDate}</p>
                    <h2>{textHeadr}</h2>
                    <p>{textP}</p>
                  </div>
                  <div className="Dr_dec">
                    <div className="img_Dr">
                      <img src={imgDr} />
                    </div>
                    <div className="div_Dr">
                      <h4>{textName}</h4>
                      <p>{textDr}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
