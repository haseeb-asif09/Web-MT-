import React from 'react';
import './App.css';

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import IndustriesServed from './IndustriesServed';
import Careers from './Careers';
import Blog from './Blog';
import TermsPrivacy from './TermsPrivacy';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/* Different Sections */}
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="industries-served"><IndustriesServed /></section>
      <section id="careers"><Careers /></section>
      <section id="blog"><Blog /></section>
      <section id="terms-privacy"><TermsPrivacy /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;
