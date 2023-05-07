import React from "react";
import "./Doctors.css";
import { doctors } from "../../data";

const Doctors = () => {
  return (
    <div id="doctors">
      <div className="our_doctors">
        <div className="doctors_header">
          <h2>Our Doctors</h2>
        </div>

        <div className="doctors_card">
          {doctors.map(
            ({
              id,
              img,
              textH2,
              textP,
              phone,
              phoneIcon,
              MailIcon,
              mail,
              Facebook,
              inkedin,
              Twitter,
            }) => {
              return (
                <div key={id} className="doctors_wrapper">
                  <div className="card_img">
                    <img src={img} />
                  </div>
                  <div className="catd_text">
                    <h2>{textH2}</h2>
                    <p>{textP}</p>
                  </div>
                  <hr className="hr" />
                  <div className="card_icon">
                    <p>
                      {phoneIcon} {phone}
                    </p>
                    <p>
                      {MailIcon} {mail}
                    </p>
                  </div>
                  <div className="sochil">
                    <span>{Facebook}</span>
                    <span>{inkedin}</span>
                    <span>{Twitter}</span>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
