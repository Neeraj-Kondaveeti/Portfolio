"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// ⭐ Use YOUR actual photo here
import userImage from '../assets/neeraj_photo.jpeg';

import Image from 'next/image';
import { ArrowForward, FileDownload } from '@mui/icons-material';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out-quart'
    });
    
    return () => {
      AOS.refresh();
    };
  }, []);
  
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          
          {/* IMAGE */}
          <div 
            className="hero-image" 
            data-aos="fade-up" 
            data-aos-delay="100"
            data-aos-offset="100"
          >
            <div className="image-wrapper">
              <Image 
                src={userImage} 
                alt="Neeraj Kondaveeti" 
                fill
                className="profile-image"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="image-glow"></div>
            </div>
          </div>

          {/* TEXT */}
          <div 
            className="hero-text" 
            data-aos="fade-up" 
            data-aos-delay="100"
            data-aos-offset="100"
          >
            <div className="title-group">
              <div 
                className="accent-line" 
                data-aos="zoom-in" 
                data-aos-delay="300"
              ></div>

              <h1 className="main-title">
                <span className="gradient-text">Neeraj Kondaveeti</span>
                <br />

                {/* TYPE ANIMATION */}
                <TypeAnimation
                  sequence={[
                    'FULL STACK ENGINEER',
                    1200,
                    'SOFTWARE ENGINEER',
                    1200,
                    'MERN + NEXT.JS DEVELOPER',
                    1200,
                    'AI / ML PRACTITIONER',
                    1200,
                    'GEOAI RESEARCHER',
                    1200
                  ]}
                  wrapper="span"
                  speed={50}
                  className="typing-text"
                  repeat={Infinity}
                  style={{ display: 'inline-block' }}
                />
              </h1>
            </div>

            {/* DESCRIPTION */}
            <p 
              className="hero-description" 
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              I am a <span className="highlight">Full Stack Engineer</span> specializing in
              building scalable web applications using <span className="highlight">React,
              Next.js, Node.js, and MongoDB</span>. I also work with modern AI/ML
              pipelines — including GPT, geospatial ML, and computer vision — delivering
              high-impact solutions that improve system performance and user experience.
            </p>

            {/* BUTTONS */}
            <div 
              className="hero-actions" 
              data-aos="fade-up" 
              data-aos-delay="120"
            >
              <Link 
                href="/about" 
                className="action-btn primary"
                aria-label="Learn more about me"
              >
                ABOUT ME
                <span className="btn-icon">
                  <ArrowForward fontSize="small" />
                </span>
              </Link>

              <a 
                href="/Kondaveeti_Neeraj_Resume.pdf"
                download="Neeraj_Kondaveeti_Resume.pdf"
                className="action-btn secondary"
                aria-label="Download my Resume"
              >
                DOWNLOAD RESUME
                <span className="btn-icon">
                  <FileDownload fontSize="small" />
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
