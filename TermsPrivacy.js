import React from 'react';
import './TermsPrivacy.css';
import khan from "./images/tm.jpg";

const TermsPrivacy = () => {
  const backgroundStyle = {
    minHeight: '100vh',
    backgroundImage: `url(${khan})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // backgroundAttachment: 'fixed',  // Removed this to make image scroll
    padding: '40px 20px',
    color: '#fff',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  return (
    <div style={backgroundStyle}>
      <div className="terms-container">
        <h2>Terms of Service</h2>
        <p>
          By using our website, you agree to abide by our terms and conditions. This includes responsible use of our services and not sharing login details.
        </p>
        <h2>Privacy Policy</h2>
        <p>
          We are committed to protecting your privacy. Your data will never be shared without consent. All files are securely stored and handled per HIPAA standards.
        </p>
      </div>
    </div>
  );
};

export default TermsPrivacy;
