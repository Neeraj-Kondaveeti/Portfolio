"use client";

import React, { useEffect } from 'react';
import { useForm } from '@formspree/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Drafts, ContactPhone, Send } from '@mui/icons-material';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from '@mui/material';

const Contact = () => {
  const [state, handleSubmit] = useForm("xldjwjoy");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out-quart'
    });
  }, []);

  if (state.succeeded) {
    return (
      <div className="success-message" data-aos="fade-up">
        <h3>Thanks for reaching out!</h3>
        <p>I will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" data-aos="fade-down">
          <h1 className="section-title">
            <span className="title-bg">CONTACT</span>
          </h1>
        </div>

        <div className="contact-content">
          {/* Left Column */}
          <div className="contact-info" data-aos="fade-right">
            <h3>I would love to hear from you!</h3>
            <p>
              Whether you have a question, a project idea, or just want to say hello — 
              feel free to reach out anytime.
            </p>

            <div className="contact-details">
              {/* Email */}
              <div className="detail-item">
                <Drafts className="detail-icon" />
                <div className="detail-text">
                  <span>EMAIL</span>
                  <p>neerajkondaveeti1901@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="detail-item">
                <ContactPhone className="detail-icon" />
                <div className="detail-text">
                  <span>PHONE</span>
                  <p>930-333-4774</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <Button 
                className="social-icon"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/neeraj-kondaveeti-806b67208/"
                target="_blank"
                rel="noreferrer"
                data-aos="zoom-in"
              >
                <FaLinkedin />
              </Button>

              <Button 
                className="social-icon"
                aria-label="GitHub"
                href="https://github.com/Neeraj-Kondaveeti"
                target="_blank"
                rel="noreferrer"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <FaGithub />
              </Button>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="contact-form" data-aos="fade-left">
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Your Name" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Your Email" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <input 
                    type="text" 
                    name="subject" 
                    id="subject" 
                    placeholder="Subject" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <input 
                    type="text" 
                    name="company" 
                    id="company" 
                    placeholder="Company (Optional)" 
                  />
                </div>

                <div className="form-group full-width">
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="6" 
                    placeholder="Your Message" 
                    required 
                  />
                </div>
              </div>

              <Button
                className="submit-btn"
                type="submit"
                disabled={state.submitting}
                endIcon={<Send />}
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
