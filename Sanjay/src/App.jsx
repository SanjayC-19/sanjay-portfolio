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
    <div className="bg-black w-full min-h-screen overflow-x-hidden scroll-smooth flex flex-col">
      <Navbar activeSection={activeSection} setActiveSection={scrollToSection} />
      {/* Each section: min-h-screen, pt-16, snap-start for scroll snap */}
      <section id="home" className="w-full min-h-screen pt-16">
        <Home setActiveSection={scrollToSection} />
      </section>

      <section id="about" className="w-full min-h-screen pt-16">
        <About />
      </section>

      <section id="skills" className="w-full min-h-screen pt-16">
        <Skills />
      </section>

      <section id="projects" className="w-full min-h-screen pt-16">
        <Projects />
      </section>

      <section id="contact" className="w-full min-h-screen pt-16">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
