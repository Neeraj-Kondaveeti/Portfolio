"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import ecommerce from "../../assets/proj_ecommerce_coats.png";
import moundDetection from "../../assets/proj_mound_recognition.png";
import calendarApp from "../../assets/proj_syllabus_calendar.png";
import { Code, Star, GitHub } from "@mui/icons-material";
import { ChevronLeft, ChevronRight } from "react-feather";
import AOS from "aos";
import "aos/dist/aos.css";

/* ----------------------------- PROJECTS ----------------------------- */
const projects = [
  {
    title: "MERN E-Commerce Platform",
    image: ecommerce,
    link: "https://github.com/Neeraj-Kondaveeti/ECommerce_MERN-",
    tech: ["React.js", "Node.js", "MongoDB", "Express", "Stripe API"],
    description:
      "A scalable MERN-based e-commerce platform supporting product browsing, secure authentication, Stripe payments, cart management, and admin-side inventory tools.",
    features: [
      "Secure checkout with Stripe",
      "User authentication & profile dashboard",
      "Product filtering, search, & category pages",
      "Admin inventory management",
      "Persistent shopping cart",
    ],
  },

  {
    title: "Automated Mound Detection (YOLOv5)",
    image: moundDetection,
    link: "https://github.com/Neeraj-Kondaveeti/Projects/tree/main/Automatic%20Mounds%20Detection",
    tech: [
      "Python",
      "YOLOv5",
      "OpenCV",
      "NumPy",
      "Pandas",
      "Geospatial Processing",
    ],
    description:
      "A machine learning research project using YOLOv5 and digital terrain models (DTM) to detect prehistoric archaeological mounds in Indiana with high accuracy.",
    features: [
      "YOLOv5 custom training pipeline",
      "DTM preprocessing to remove false positives",
      "Data augmentation for small datasets",
      "Bounding-box detection & evaluation metrics",
      "Research-grade inference pipeline",
    ],
  },

  {
    title: "AI-Powered Calendar App (Syllabus → Calendar)",
    image: calendarApp,
    link: "https://github.com/Neeraj-Kondaveeti/lawbandit-syllabus-calendar",
    tech: ["React", "Node.js", "Express", "PDF Parsing", "GPT-4 API"],
    description:
      "An AI-driven system that parses academic syllabi (PDF) and automatically generates a structured semester calendar with deadlines, readings, and reminders.",
    features: [
      "PDF syllabus ingestion",
      "Natural-language extraction using GPT-4",
      "Automated event creation",
      "Google Calendar syncing",
      "Modern UI with dark/light mode",
    ],
  },
];

/* ------------------------------ SKILLS ------------------------------ */
const skills = [
  { name: "JavaScript / TypeScript", level: 90 },
  { name: "React / Next.js", level: 90 },
  { name: "Node.js / Express", level: 85 },
  { name: "Python", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "PostgreSQL", level: 75 },
  { name: "YOLOv5 / CV", level: 70 },
  { name: "TensorFlow / ML", level: 70 },
  { name: "Docker", level: 70 },
  { name: "AWS", level: 65 },
  { name: "Git / GitHub", level: 90 },
];

/* -------------------------- CERTIFICATION PLACEHOLDERS -------------------------- */
const certifications = [
  {
    name: "AWS Certified Developer Associate",
    issuer: "Amazon Web Services",
    date: "May 2025 - May 2028",
  },
  {
    name: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "February 2023",
  },
  {
    name: "Oracle Cloud Infrastructure 2022 Certified Foundations Associate",
    issuer: "Oracle",
    date: "Feb 2023",
  },
];

/* ---------------------------- MAIN COMPONENT ---------------------------- */
const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out-quart",
    });
  }, []);

  const [activeProject, setActiveProject] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
    const amount = clientWidth / 2;

    const nextScroll =
      dir === "left"
        ? Math.max(0, scrollLeft - amount)
        : Math.min(scrollLeft + amount, scrollWidth - clientWidth);

    scrollRef.current.scrollTo({ left: nextScroll, behavior: "smooth" });
  };

  const handleProjectChange = (index) => {
    if (isAnimating || index === activeProject) return;

    setIsAnimating(true);
    setActiveProject(index);

    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="portfolio-container">
      {/* HERO */}
      <section className="portfolio-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title" data-aos="fade-down">
              MY <span className="gradient-text">PROJECTS</span>
              <span className="title-bg">Portfolio</span>
            </h1>

            <div className="hero-text" data-aos="fade-up">
              <p>
              I build <span className="highlight">full-stack applications</span>,{" "}
              <span className="highlight">data-driven analysis tools</span>,{" "}
              <span className="highlight">AI-powered features</span>, and{" "}
              <span className="highlight">ML research systems</span> — all with a focus on{" "}
              <span className="highlight">scalability</span>,{" "}
              <span className="highlight">clean UI</span>, and{" "}
              <span className="highlight">real-world impact</span>.
            </p>


              <div className="hero-stats">
                <div className="stat-item" data-aos="fade-up" data-aos-delay="100">
                  <span className="stat-number">3</span>
                  <span className="stat-label">Major Projects</span>
                </div>
                <div className="stat-item" data-aos="fade-up" data-aos-delay="200">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Technologies</span>
                </div>
                <div className="stat-item" data-aos="fade-up" data-aos-delay="300">
                  <span className="stat-number">∞</span>
                  <span className="stat-label">Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="portfolio-projects">
        <div className="container">
          <div className="section-header" data-aos="fade">
            <h2 className="section-title">
              <span className="icon">
                <Code />
              </span>
              Featured Work
            </h2>
            <p className="section-subtitle">
              A curated selection of the systems and applications I have engineered.
            </p>
          </div>

          {/* Carousel Title Bar */}
          <div className="projects-carousel-container">
            <button
              className="carousel-arrow left"
              onClick={() => scroll("left")}
            >
              <ChevronLeft size={24} />
            </button>

            <div className="projects-carousel-wrapper">
              <div className="projects-carousel" ref={scrollRef}>
                {projects.map((p, index) => (
                  <div
                    key={index}
                    className={`project-title ${
                      index === activeProject ? "active" : ""
                    }`}
                    onClick={() => handleProjectChange(index)}
                  >
                    {p.title}
                  </div>
                ))}
              </div>
            </div>

            <button
              className="carousel-arrow right"
              onClick={() => scroll("right")}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Project Details */}
          <div
            className={`project-details-container ${
              isAnimating ? "fade-out" : "fade-in"
            }`}
          >
            <div className="project-item">
              <div className="project-content-wrapper">
                <div className="project-content">
                  <div className="project-header">
                    <h3>{projects[activeProject].title}</h3>

                    <a
                      href={projects[activeProject].link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      <GitHub className="github-icon" />
                      <span>View Code</span>
                    </a>
                  </div>

                  <p className="project-description">
                    {projects[activeProject].description}
                  </p>

                  <div className="project-features">
                    <h4 className="features-title">
                      <span className="highlight">Key Features</span>
                    </h4>
                    <ul>
                      {projects[activeProject].features.map((f, i) => (
                        <li key={i}>
                          <span className="feature-icon">▹</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-tech">
                    <h4 className="tech-title">
                      <span className="highlight">Technologies</span>
                    </h4>
                    <div className="tech-tags">
                      {projects[activeProject].tech.map((t, i) => (
                        <span className="tech-tag" key={i}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="project-media-wrapper">
                <div className="project-media">
                  <div className="image-container">
                    <Image
                      src={projects[activeProject].image}
                      alt={projects[activeProject].title}
                      fill
                      className="project-image"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="image-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="portfolio-skills">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="icon">
                <Star />
              </span>
              Technical Skills
            </h2>
            <p className="section-subtitle">
              The technologies I work with to build efficient & scalable systems.
            </p>
          </div>

          <div className="skills-visual">
            {skills.map((s, i) => (
              <div className="skill-item" key={i}>
                <span className="skill-name">{s.name}</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${s.level}%` }}></div>
                </div>
                <span className="skill-percent">{s.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS PLACEHOLDERS */}
      <section className="portfolio-certifications">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="icon">
                <Star />
              </span>
              Certifications
            </h2>
            <p className="section-subtitle"></p>
          </div>

          <div className="certs-grid">
            {certifications.map((cert, i) => (
              <div className="cert-card" key={i}>
                <div className="cert-badge placeholder-icon">🎓</div>
                <h3>{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="portfolio-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Build Something Great</h2>
            <p>
              I'm open to new opportunities in software development, AI engineering,
              and full-stack roles. Feel free to reach out!
            </p>

            <div className="cta-buttons">
              <a
                href="https://github.com/Neeraj-Kondaveeti"
                target="_blank"
                rel="noreferrer"
                className="btn-common iconBtn"
              >
                View GitHub
                <GitHub />
              </a>

              <a
                href="mailto:neerajkondaveeti1901@gmail.com"
                className="btn-common"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
