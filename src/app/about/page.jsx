"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FileDownload, BusinessCenter, School } from "@mui/icons-material";
import { SiMinutemailer } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out-quart",
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  const skills = {
    languages: ["JavaScript (ES6)", "Python", "TypeScript", "Java", "C++", "SQL", "HTML/CSS"],
    frameworks: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "TensorFlow",
      "Pandas",
      "Numpy",
      "Matplotlib",
      "Scikit-learn",
    ],
    tools: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Oracle",
      "AWS",
      "Azure",
      "Git",
      "Docker",
      "Vercel",
      "CI/CD",
      "Postman",
      "Jupyter",
      "Apache Superset",
      "Stripe",
      "Selenium",
      "Linux",
    ],
  };

  return (
    <section className="about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" data-aos="fade-up">
          <h1 className="main-title">
            <span className="gradient-text">About Me</span>
          </h1>
          <div className="accent-line" data-aos="zoom-in"></div>
        </div>

        {/* Personal Info */}
        <div className="personal-info" data-aos="fade-up" data-aos-delay="100">
          {/* Left Card */}
          <div className="info-card" data-aos="fade-right">
            <div className="info-content">
              <h4>First Name: <span>Neeraj</span></h4>
              <h4>Last Name: <span>Kondaveeti</span></h4>
              <h4>Age: <span>24</span></h4>
              <h4>Nationality: <span>Indian</span></h4>
              <h4>Freelance: <span>Available</span></h4>
            </div>
          </div>

          {/* Right Card */}
          <div className="info-card" data-aos="fade-left">
            <div className="info-content">
              <h4>Address: <span>Bloomington, Indiana, USA</span></h4>
              <h4>Phone: <span>+1 930-333-4774</span></h4>

              <svg width="0" height="0">
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#80cbc4" />
                  <stop offset="100%" stopColor="#64B5F6" />
                </linearGradient>
              </svg>

              <h4>
                Email:
                <span>
                  <a href="mailto:neerajkondaveeti1901@gmail.com">
                    <SiMinutemailer style={{ fill: "url(#grad)", marginLeft: "8px" }} />
                  </a>
                </span>
              </h4>

              <h4>
                GitHub:
                <span>
                  <a href="https://github.com/Neeraj-Kondaveeti">
                    <FaGithub style={{ fill: "url(#grad)", marginLeft: "8px" }} />
                  </a>
                </span>
              </h4>

              <h4>Languages: <span>English, Telugu, Hindi</span></h4>
            </div>
          </div>
        </div>

        {/* Resume Button */}
        <div className="download-btn" data-aos="fade-up" data-aos-delay="200">
          <a
            href="/Kondaveeti_Neeraj_Resume.pdf"
            download="Neeraj_Kondaveeti_Resume.pdf"
            className="action-btn primary"
          >
            DOWNLOAD RESUME
            <span className="btn-icon">
              <FileDownload fontSize="small" />
            </span>
          </a>
        </div>

        {/* Stats */}
        <div className="stats-section" data-aos="fade-up" data-aos-delay="300">
          <div className="stat-card">
            <h3>1+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="stat-card">
            <h3>10+</h3>
            <p>Major Projects</p>
          </div>
          <div className="stat-card">
            <h3>8+</h3>
            <p>Core Tech Stacks</p>
          </div>
          <div className="stat-card">
            <h3>3+</h3>
            <p>AI/ML & GeoAI Projects</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="section-header" data-aos="fade-up">
          <h1 className="main-title">
            <span className="gradient-text">My Skills</span>
          </h1>
          <div className="accent-line" data-aos="zoom-in"></div>
        </div>

        <div className="skills-container" data-aos="fade-up" data-aos-delay="100">
          <div className="skill-category">
            <h3 className="skill-category-title">Languages</h3>
            <div className="skill-tags">
              {skills.languages.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">Frameworks & Libraries</h3>
            <div className="skill-tags">
              {skills.frameworks.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">Tools & Platforms</h3>
            <div className="skill-tags">
              {skills.tools.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Experience & Education */}
        <div className="section-header" data-aos="fade-up">
          <h1 className="main-title">
            <span className="gradient-text">Experience & Education</span>
          </h1>
          <div className="accent-line"></div>
        </div>

        <div className="timeline-section">
          {/* Experience Column */}
          <div className="timeline-column">

            {/* One Community */}
            <div className="timeline-item" data-aos="fade-right">
              <div className="timeline-icon"><BusinessCenter /></div>
              <div className="timeline-content">
                <span className="timeline-date">Jun 2025 – Present</span>
                <h4>Software Engineer — One Community / Highest Good Network</h4>
                <p>
                  Engineered analytics dashboards and rebuilt core MERN modules improving performance for
                  200+ users. Improved API latency by 30% and accelerated deployment cycles by 20%.
                </p>
              </div>
            </div>

            {/* Graduate Research Assistant */}
            <div className="timeline-item" data-aos="fade-right">
              <div className="timeline-icon"><BusinessCenter /></div>
              <div className="timeline-content">
                <span className="timeline-date">Feb 2025 – Jun 2025</span>
                <h4>Graduate Research Assistant — Indiana University</h4>
                <p>
                  Applied machine learning to 500GB+ geospatial datasets, improving GeoAI model accuracy by
                  15%. Automated preprocessing pipelines, scaling dataset volume by 200%.
                </p>
              </div>
            </div>

            {/* Data Analyst */}
            <div className="timeline-item" data-aos="fade-right">
              <div className="timeline-icon"><BusinessCenter /></div>
              <div className="timeline-content">
                <span className="timeline-date">Jun 2022 – Jun 2023</span>
                <h4>Data Analyst — Reliance Jio</h4>
                <p>
                  Built KPI dashboards for 10,000+ users, automated SQL pipelines reducing manual workload
                  by 30%, and improved reporting accuracy through iterative data validation.
                </p>
              </div>
            </div>

          </div>

          {/* Education Column */}
          <div className="timeline-column">

            <div className="timeline-item" data-aos="fade-left">
              <div className="timeline-icon"><School /></div>
              <div className="timeline-content">
                <span className="timeline-date">2023 – 2025</span>
                <h4>Master of Science — Indiana University Bloomington</h4>
                <p>
                  Computer Science, GPA: 3.40/4.00  
                  Coursework: Machine Learning, NLP, Data Mining, Full-Stack Systems.
                </p>
              </div>
            </div>

            <div className="timeline-item" data-aos="fade-left">
              <div className="timeline-icon"><School /></div>
              <div className="timeline-content">
                <span className="timeline-date">2019 – 2023</span>
                <h4>B.Tech in Computer Science Engineering — KL University</h4>
                <p>
                  Computer Science, GPA: 3.70/4.00 | Built strong foundational knowledge in data structures, algorithms, and system design,
                  leading to a successful career in full-stack engineering and AI systems.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
