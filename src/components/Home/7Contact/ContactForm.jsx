import React from "react";
import "./contact.css";
const ContactForm = () => {
    const [formData, setFormData]
  return (
    <div className="contact-form">
      <div className="section-title">Message Me</div>
      <form action="" method="post">
        <div className="contact-input-grid">
          <div className="form-item">
            <label htmlFor="firstName">
              First Name <span>*</span>
            </label>
            <input placeholder="First Name" type="text" name="firstName" />
          </div>
          <div className="form-item">
            <label htmlFor="lastName">
              Last Name <span>*</span>
            </label>
            <input placeholder="Last Name" type="text" name="lastName" />
          </div>
          <div className="form-item">
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input placeholder="Email" type="email" name="email" id="" />
          </div>
        </div>
        <div className="form-item">
          <label htmlFor="message">
            Message <span>*</span>
          </label>
          <textarea
            placeholder="Message"
            name="message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button type="submit">
          Summit
          <span></span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
