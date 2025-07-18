import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "general",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );
      alert(response.data.message);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: "general",
      });
    } catch (error) {
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="service">Service Interest</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="general">General Inquiry</option>
          <option value="admission">Admission Consultation</option>
          <option value="visa">Visa Assistance</option>
          <option value="scholarship">Scholarship Guidance</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>
      </div>

      <button type="submit" className="submit-btn">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
