import "./Contact.css";
import React from "react";
import img from "../../assets/appointment-image.jpg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact_wrapper" id="contact">
        <div className="contact_img">
          <img src={img} alt="Dr img" />
        </div>

        <div className="conatc_form">
          <div className="contact_form_wrapper">
            <h2>Make an appointment</h2>
            <div className="name_email_wrapper">
              <div className="name">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                />
              </div>
              <div className="email">
                <label for="email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                ></input>
              </div>
            </div>

            <div className="Select_wrapper">
              <div className="select_date">
                <label for="date">Select Date</label>
                <input
                  type="date"
                  name="date"
                  value=""
                  class="form-control"
                ></input>
              </div>
              <div className="select_department">
                <label for="select">Select Department</label>
                <select class="form-control">
                  <option>General Health</option>
                  <option>Cardiology</option>
                  <option>Dental</option>
                  <option>Medical Research</option>
                </select>
              </div>
            </div>

            <div className="Phone">
              <label for="telephone">Phone Number</label>
              <input
                type="tel"
                class="form-control"
                id="phone"
                name="phone"
                placeholder="Phone"
              ></input>
            </div>

            <div className="message">
              <label for="Message">Additional Message</label>
              <textarea
                class="form-control"
                rows="6"
                id="message"
                name="message"
                placeholder="Message"
              ></textarea>
            </div>

            <div className="submit">
              <button type="submit" name="submit">
                Submit Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
