import React from 'react';
import './Careers.css';
import career from "./images/nice.jpg";

const Careers = () => {
  const backgroundStyle = {
    minHeight: '100vh',
    backgroundImage: `url(${career})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // backgroundAttachment: 'fixed',  // REMOVE THIS LINE
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
  };

  return (
    <div style={backgroundStyle}>
      <div className="careers-container">
        <h2>Join Our Team</h2>
        <p>We are always looking for talented medical transcriptionists. Fill out the form below to apply:</p>
        <form className="careers-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="file" accept=".pdf,.doc,.docx" required />
          <textarea placeholder="Cover Letter" rows="5" />
          <button type="submit">Apply Now</button>
        </form>
      </div>
    </div>
  );
};

export default Careers;
