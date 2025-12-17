import { useState, useEffect } from 'react';
import { ArrowRight, Code2, Smartphone, Globe, ChevronUp, Menu, X } from 'lucide-react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Achievements from './Achievements';
import Contact from './Contact';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  const interests = [
    { icon: <Code2 size={24} />, title: 'Full-Stack Development', desc: 'Building end-to-end web applications' },
    { icon: <Smartphone size={24} />, title: 'Mobile App Development', desc: 'Creating cross-platform mobile solutions' },
    { icon: <Globe size={24} />, title: 'Frontend Development', desc: 'Crafting beautiful user interfaces' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Determine active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && scrollPosition >= sections[i].offsetTop) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Fixed Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-darker-bg/95 backdrop-blur-md border-b border-green-900/30' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 group"
            >
              <div className="w-10 h-10 bg-primary-green rounded-lg flex items-center justify-center group-hover:bg-light-green transition-colors">
                <span className="text-dark-bg font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold gradient-text">SANJAY</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-gray-300 hover:text-primary-green transition-colors duration-300 relative group ${
                    activeSection === item.id ? 'text-primary-green' : ''
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary-green transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
              ))}
              <a
                href="/sanjay_resume (2).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-primary-green text-dark-bg font-semibold rounded-lg hover:bg-light-green transition-colors duration-300 hover-lift"
              >
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 bg-darker-bg/95 backdrop-blur-md rounded-lg border border-green-900/30">
              <div className="flex flex-col space-y-3 p-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left py-3 px-4 rounded-lg transition-colors duration-300 ${
                      activeSection === item.id
                        ? 'bg-primary-green text-dark-bg font-semibold'
                        : 'text-gray-300 hover:text-primary-green hover:bg-green-900/10'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  href="/sanjay_resume (2).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary-green text-dark-bg font-semibold rounded-lg text-center hover:bg-light-green transition-colors duration-300"
                >
                  Download Resume
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 pb-12">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary-green/10 blur-3xl rounded-full"></div>
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Hi, I'm <span className="gradient-text">Sanjay</span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-8">
                Aspiring <span className="text-primary-green font-semibold">Software Developer</span>
              </p>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                I create features that actually make a difference using my coding skills, design thinking,
                and problem-solving abilities while continuously learning in a hands-on product setting.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-primary-green text-dark-bg font-bold rounded-lg text-lg hover:bg-light-green transition-all duration-300 hover-lift flex items-center justify-center space-x-2"
            >
              <span>View My Work</span>
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-primary-green text-primary-green font-bold rounded-lg text-lg hover:bg-primary-green/10 transition-all duration-300 hover-lift"
            >
              Get In Touch
            </button>
          </div>

          {/* Interests Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="glow-border rounded-xl p-6 hover-lift"
              >
                <div className="w-14 h-14 bg-primary-green/20 rounded-lg flex items-center justify-center text-primary-green mb-4">
                  {interest.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{interest.title}</h3>
                <p className="text-gray-400">{interest.desc}</p>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="mt-16 flex flex-col items-center text-gray-400 hover:text-primary-green transition-colors"
          >
            <span className="mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </button>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-darker-bg/50">
          <div className="container mx-auto px-4">
            <About />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="container mx-auto px-4">
            <Skills />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-darker-bg/50">
          <div className="container mx-auto px-4">
            <Projects />
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-20">
          <div className="container mx-auto px-4">
            <Achievements />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-darker-bg/50">
          <div className="container mx-auto px-4">
            <Contact />
          </div>
        </section>
      </main>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-primary-green text-dark-bg rounded-full flex items-center justify-center shadow-lg hover:bg-light-green transition-all duration-300 hover-lift z-40 ${
          isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <ChevronUp size={24} />
      </button>
    </>
  );
};

export default Home;