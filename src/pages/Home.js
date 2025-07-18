import React from 'react';
import Dashboard from '../components/Dashboard';
import UniversityFinder from '../components/UniversityFinder';
import AppointmentScheduler from '../components/AppointmentScheduler';

import { FaGraduationCap, FaGlobeAmericas, FaHandshake } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="page home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Your Pathway to Global Education</h1>
          <p>Expert guidance for studying abroad at top universities worldwide</p>
          <button className="cta-button">Start Your Journey</button>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon"><FaGraduationCap /></div>
            <h3>University Selection</h3>
            <p>Find the best universities matching your profile and aspirations.</p>
          </div>
          <div className="service-card">
            <div className="service-icon"><FaGlobeAmericas /></div>
            <h3>Visa Assistance</h3>
            <p>Complete support for visa applications and interview preparation.</p>
          </div>
          <div className="service-card">
            <div className="service-icon"><FaHandshake /></div>
            <h3>Career Counseling</h3>
            <p>Guidance for your career path after graduation.</p>
          </div>
        </div>
      </section>

      {/* Interactive Components */}
      <Dashboard />
      <UniversityFinder />
      <AppointmentScheduler />

      {/* Testimonials */}
      <section className="testimonials">
        <h2>Success Stories</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>"EduConsult helped me get into my dream university with a scholarship!"</p>
            <div className="author">- Sarah Johnson, Stanford University</div>
          </div>
          <div className="testimonial">
            <p>"The visa guidance was exceptional. My application was approved in just 2 weeks!"</p>
            <div className="author">- Michael Chen, University of Toronto</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;