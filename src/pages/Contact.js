import React from 'react';
import ContactForm from '../components/ContactForm';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="page contact">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>We're here to answer your questions and help you get started</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          
          <div className="info-item">
            <div className="info-icon"><FaMapMarkerAlt /></div>
            <div className="info-content">
              <h3>Our Office</h3>
              <p>123 Education Street, Knowledge City</p>
              <p>Education Tower, Floor 5</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon"><FaPhone /></div>
            <div className="info-content">
              <h3>Phone</h3>
              <p>+1 (123) 456-7890</p>
              <p>+1 (987) 654-3210</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon"><FaEnvelope /></div>
            <div className="info-content">
              <h3>Email</h3>
              <p>info@educonsult.com</p>
              <p>support@educonsult.com</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon"><FaClock /></div>
            <div className="info-content">
              <h3>Working Hours</h3>
              <p>Monday-Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          
          <div className="map-container">
            <div className="map-placeholder">
              <p>Map would be displayed here</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          <p>Have questions about our services? Fill out the form below and our team will get back to you within 24 hours.</p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;