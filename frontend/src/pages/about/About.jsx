import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about-page">
      
      <div className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2>About Us</h2>
            <p>
              Welcome to our <strong>E-Learning</strong> platform. We are committed to providing world-class education with flexible access and real-world projects.
            </p>
            <p>
              Whether you're a beginner or a professional, our courses are designed to help you gain practical skills, build real projects, and achieve your career goals.
            </p>
            <p>
              Join thousands of learners who trust us to unlock their potential in Web Development, AI, Data Science, and more.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg"
              alt="About Us"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
