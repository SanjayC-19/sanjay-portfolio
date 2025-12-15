import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="bg-black w-full min-h-screen overflow-x-hidden">
      <Navbar activeSection={activeSection} setActiveSection={scrollToSection} />
      
      {/* Home Section */}
      <section id="home" className="w-full">
        <Home setActiveSection={scrollToSection} />
      </section>

      {/* About Section */}
      <section id="about" className="w-full">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
