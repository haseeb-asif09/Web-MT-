import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="nav">
      <div className="logo">MT Medical</div>
      <div className="links">
        <button onClick={() => scrollToSection('home')} className="link">Home</button>
        <button onClick={() => scrollToSection('about')} className="link">About</button>
        <button onClick={() => scrollToSection('careers')} className="link">Careers</button>
        <button onClick={() => scrollToSection('blog')} className="link">Blog</button>
        <button onClick={() => scrollToSection('termsprivacy')} className="link">Terms & Privacy</button> {/* ✅ Fix here */}
        <button onClick={() => scrollToSection('contact')} className="link">Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
