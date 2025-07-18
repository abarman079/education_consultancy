import React from 'react';
import { FaUsers, FaAward, FaHandshake, FaGlobe } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: <FaUsers />, value: "5000+", label: "Students Helped" },
    { icon: <FaAward />, value: "98%", label: "Success Rate" },
    { icon: <FaHandshake />, value: "200+", label: "University Partners" },
    { icon: <FaGlobe />, value: "20+", label: "Countries" }
  ];

  const team = [
    { name: "Sarah Johnson", role: "Founder & CEO", bio: "10+ years in international education" },
    { name: "Michael Chen", role: "Admissions Expert", bio: "Former admissions officer at Stanford" },
    { name: "Priya Sharma", role: "Visa Specialist", bio: "Expert in visa processes for 15 countries" },
    { name: "David Wilson", role: "Career Counselor", bio: "Helped 1000+ students with career planning" }
  ];

  return (
    <div className="page about">
      <div className="page-header">
        <h1>About Us</h1>
        <p>Your trusted partner in global education since 2010</p>
      </div>

      <section className="mission">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>To empower students to achieve their dreams of international education through personalized guidance, expert advice, and comprehensive support at every step of their journey.</p>
          <p>We believe that quality education should be accessible to all, and we work tirelessly to make that a reality for our students.</p>
        </div>
        <div className="mission-image"></div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-image"></div>
              <h3>{member.name}</h3>
              <div className="member-role">{member.role}</div>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Integrity</h3>
            <p>We provide honest advice and transparent processes</p>
          </div>
          <div className="value-card">
            <h3>Excellence</h3>
            <p>We strive for the highest standards in everything we do</p>
          </div>
          <div className="value-card">
            <h3>Empathy</h3>
            <p>We understand your unique journey and challenges</p>
          </div>
          <div className="value-card">
            <h3>Innovation</h3>
            <p>We continuously improve our services with new approaches</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;