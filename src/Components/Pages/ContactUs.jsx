import React from "react";
import "../../assets/style/contactus.css";

const ContactUs = () => {
  return (
    <>
      <div className="contactus">
        <h1>Contact Us</h1>
        <div className="contactgrid">
          <div className="info">
            <h2>Get in touch</h2>
            <span>Email:</span>
            <a href="mailto:jaitej123@gmail.com">jaitej123@gmail.com</a>
            <span>Phone:</span>
            <a href="tel:+9170576311">+91-9170576311</a>
            <span>Address:</span>
            <address>12/3, Main Street, Bangalore, Karnataka</address>
            <p>We would love to hear from You!</p>
          </div>
          <div className="form">
            <form id="contactForm">
              <input type="text" id="name" placeholder="Your Name" required />
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                required
              />
              <textarea
                id="message"
                placeholder="Your Message"
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
