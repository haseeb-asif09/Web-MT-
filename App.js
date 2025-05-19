import React from 'react';
import './App.css';

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Careers from './Careers';
import Blog from './Blog';
import TermsPrivacy from './TermsPrivacy';
import Contact from './Contact';
import Services from './Services';
import IndustriesServed from './IndustriesServed';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="services"><Services /></div>         {/* Services Section */}
      <div id="industriesserved"><IndustriesServed /></div> {/* Industries Served Section */}
      <div id="careers"><Careers /></div>
      <div id="blog"><Blog /></div>
      <div id="termsprivacy"><TermsPrivacy /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;
