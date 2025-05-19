import React from 'react';
import imagem from './images/wow.jpg';  
import './Home.css';

const Home = () => {
  const scrollToServices = () => {
    const section = document.getElementById('services');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToIndustries = () => {
    const section = document.getElementById('industriesserved');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${imagem})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '85vh',
        color: 'white',
      }}
    >
      <section className="intro-section">
        <h1 className="title">Welcome to MT Medical Transcription</h1>
        <p className="description">
          We provide accurate and timely medical transcription services to help healthcare professionals
          focus on patient care.
        </p>
      </section>

      <section className="buttons-section">
        <button className="btn btn-primary" onClick={scrollToServices}>
          Our Services
        </button>
        <br />
        <button className="btn btn-secondary" onClick={scrollToIndustries} style={{ marginTop: '10px' }}>
          Industries We Serve
        </button>
      </section>
    </div>
  );
};

export default Home;
