import React from "react";
import ContactSocial from "../../common/6ContactSocial/ContactSocial";
import ContactForm from "./ContactForm";
import "./contact.css"
const Contact = () => {
  return (
    <section className="contact-section">
        <div className="section-title">Contact</div>
      <div className="contact-social-container">
        <ContactSocial />
        <ContactSocial />
        <ContactSocial />
        <ContactSocial />
      </div>
      <div className="contact-social-container second">
        <ContactSocial />
        <ContactSocial />
        <ContactSocial />
        <ContactSocial />
      </div>
      <ContactForm/>
    </section>
  );
};

export default Contact;
