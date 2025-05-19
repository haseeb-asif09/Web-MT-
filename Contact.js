import React from 'react';
import './Contact.css';
import imagess from './images/CSSSS.jpg';

const Contact = () => {
  return (
    <div
      className="contact-page"
      style={{
        backgroundImage: `url(${imagess})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '60px 20px',
      }}
    >
      <div className="contact-box">
        <h1>Contact Us</h1>
        <div className="contact-details">
          <h3>Our Contact Details</h3>
          <p><strong>Phone:</strong> +92 300 1234567</p>
          <p><strong>Email:</strong> haseebasif@gmail.com</p>
          <p><strong>Address:</strong> 123 Medical Street, Karachi, Pakistan</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
