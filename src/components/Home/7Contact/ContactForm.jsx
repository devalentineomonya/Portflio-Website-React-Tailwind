import React, { useState } from "react";
import "./contact.css";
const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const validationErrors = validateForm(formData);
    console.log(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      setTimeout(() => {
        setErrors("");
      }, 5000);
      return;
    }
    const formDataToSend = new FormData(e.target);
    console.log(formDataToSend);git 
    const jsonData = JSON.stringify(Object.fromEntries(formDataToSend));
    console.log(jsonData)
  };

  const validateForm = (formData) => {
    let inputErrors = {};
    if (!formData.firstName.trim()) {
      inputErrors.firstName = "First Name is Required";
    } else if (formData.firstName.length < 3) {
      inputErrors.firstName = "First Name Should 3 character";
    }

    if (!formData.lastName.trim()) {
      inputErrors.lastName = "Last Name is Required";
    } else if (formData.lastName.length < 3) {
      inputErrors.lastName = "Last Name Should 3 character";
    }
    if (!formData.email.trim()) {
      inputErrors.email = "Email is Required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      inputErrors.email = "Email is Invalid";
    }
    if (!formData.message.trim()) {
      inputErrors.message = "Message is required";
    }
    return inputErrors;
  };
  return (
    <div className="contact-form">
      <div className="section-title">Message Me</div>
      <form action="" method="post" onSubmit={handleFormSubmit}>
        <div className="contact-input-grid">
          <div className="form-item">
            <label htmlFor="firstName">
              First Name <span>*</span>
            </label>
            <input
              onChange={handleInputChange}
              placeholder="First Name"
              type="text"
              name="firstName"
              value={formData.firstName}
            />
            {errors?.firstName && (
              <span className="validation-error">{errors.firstName}</span>
            )}
          </div>
          <div className="form-item">
            <label htmlFor="lastName">
              Last Name <span>*</span>
            </label>
            <input
              onChange={handleInputChange}
              placeholder="Last Name"
              type="text"
              name="lastName"
              value={formData.lastName}
            />
            {errors?.lastName && (
              <span className="validation-error">{errors.lastName}</span>
            )}
          </div>
          <div className="form-item">
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input
              onChange={handleInputChange}
              placeholder="Email"
              type="email"
              name="email"
              value={formData.email}
            />
            {errors?.email && (
              <span className="validation-error">{errors.email}</span>
            )}
          </div>
        </div>
        <div className="form-item">
          <label htmlFor="message">
            Message <span>*</span>
          </label>
          <textarea
            onChange={handleInputChange}
            placeholder="Message"
            name="message"
            value={formData.message}
          ></textarea>
          {errors?.message && (
            <span className="validation-error">{errors.message}</span>
          )}
        </div>
        <button type="submit">{loading ? <span></span> : "Submit"}</button>
      </form>
    </div>
  );
};

export default ContactForm;
