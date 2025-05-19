import React from 'react';
import './About.css';   // CSS file import karna mat bhoolna
import aboutImage from './images/about.jpg';  // Apni desired image yahan import karein

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <img src={aboutImage} alt="About MT Medical" />
      </div>
      <div className="about-right">
        <h1>About MT Medical Transcription</h1>
        <p>
          MT Medical Transcription is dedicated to providing precise and reliable transcription services
          for healthcare professionals. Our team ensures accuracy and confidentiality in every project.
        </p>
        <p>
          We utilize advanced technologies combined with expert transcriptionists to deliver fast and
          error-free transcriptions, helping healthcare providers focus on patient care.
        </p>
      </div>
    </div>
  );
};

export default About;
