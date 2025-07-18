import React from 'react';
import { FaUniversity, FaFileAlt, FaPassport, FaMoneyBillWave, FaPlane } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaUniversity />,
      title: "University Selection",
      description: "We help you choose the right university based on your academic background, interests, and career goals."
    },
    {
      icon: <FaFileAlt />,
      title: "Application Assistance",
      description: "From document preparation to essay editing, we guide you through every step of the application process."
    },
    {
      icon: <FaPassport />,
      title: "Visa Guidance",
      description: "Our experts assist you in preparing a strong visa application and conduct mock interviews."
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Scholarship Assistance",
      description: "We help you identify and apply for scholarships and financial aid opportunities."
    },
    {
      icon: <FaPlane />,
      title: "Pre-Departure Briefing",
      description: "Get ready for your new journey with our comprehensive pre-departure orientation."
    }
  ];

  return (
    <div className="page services">
      <div className="page-header">
        <h1>Our Services</h1>
        <p>Comprehensive support for your international education journey</p>
      </div>

      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-icon">{service.icon}</div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="process-section">
        <h2>Our Process</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Initial Consultation</h3>
            <p>We understand your goals and academic background</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>University Shortlisting</h3>
            <p>We recommend suitable universities and programs</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Application Preparation</h3>
            <p>We help with documents, essays, and applications</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Visa Assistance</h3>
            <p>We guide you through the visa process</p>
          </div>
          <div className="step">
            <div className="step-number">5</div>
            <h3>Pre-Departure Support</h3>
            <p>We prepare you for your new journey</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;