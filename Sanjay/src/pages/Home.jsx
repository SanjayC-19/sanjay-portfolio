import { useState, useEffect, useRef } from 'react';
import About from './About';
import Achievements from './Achievements';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';
import { ArrowRight, Code2, Smartphone, Globe, ChevronUp, Menu, X, Sparkles, Cpu, Zap, TrendingUp, User, Briefcase, Mail } from 'lucide-react';
import ExperienceTimeline from '../components/ExperienceTimeline';

// Import your image - make sure to adjust the path based on your project structure
import profileImage from '../assets/sanjay_photo.png';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const textRef = useRef('');
  const cursorRef = useRef(null);
  const fullText = "I create features that actually make a difference using my coding skills, design thinking, and problem-solving abilities while continuously learning in a hands-on product setting.";

  useEffect(() => {
    setIsScrolled(window.scrollY > 100);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const type = () => {
      if (index < fullText.length) {
        textRef.current += fullText.charAt(index);
        setTypedText(textRef.current);
        index++;
        setTimeout(type, 30);
      }
    };
    
    const startTimeout = setTimeout(type, 1000);
    return () => {
      clearTimeout(startTimeout);
    };
  }, []);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Grid Overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(16, 185, 129, 0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-green-500/10 to-emerald-600/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-cyan-500/10 to-teal-600/5 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-green-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3 + Math.random() * 0.3
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-emerald-900/30 py-4'
          : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToTop()}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-12 h-12 bg-black rounded-xl flex items-center justify-center border border-emerald-700/50 group-hover:border-emerald-500 transition-colors duration-300">
                  <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">S</span>
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                SANJAY
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 bg-black/40 backdrop-blur-lg rounded-2xl p-2 border border-emerald-800/30">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="px-6 py-3 text-gray-300 hover:text-white hover:bg-emerald-900/20 rounded-xl transition-all duration-300 text-sm font-medium tracking-wide"
                >
                  {item}
                </button>
              ))}
              {/* Resume link removed */}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg bg-emerald-900/20 border border-emerald-800/30"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-emerald-400" />
              ) : (
                <Menu size={24} className="text-emerald-400" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 bg-black/90 backdrop-blur-xl rounded-2xl border border-emerald-800/30 p-4">
              <div className="flex flex-col space-y-2">
                {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="py-3 px-4 text-gray-300 hover:text-white hover:bg-emerald-900/20 rounded-lg transition-all duration-300 text-left"
                  >
                    {item}
                  </button>
                ))}
                {/* Download Resume link removed */}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header Section with Image */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              {/* Left Column - Text Content */}
              <div className="lg:col-span-2">
                <div className="inline-flex items-center space-x-2 mb-8 px-4 py-2 bg-emerald-900/20 rounded-full border border-emerald-800/30">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-emerald-300 text-sm font-medium">Available for opportunities</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Hi, I'm{' '}
                  <span className="relative">
                    <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                      Sanjay
                    </span>
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full" />
                  </span>
                </h1>
                
                <h2 className="text-3xl md:text-4xl text-gray-300 mb-8">
                  Aspiring{' '}
                  <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent font-bold">
                    Software Developer
                  </span>
                </h2>
                
                <p className="text-xl text-gray-400 max-w-2xl">
                  Building digital solutions with modern technologies and creative problem-solving approaches.
                </p>
              </div>

              {/* Right Column - Profile Image in Square Frame with Caption */}
              <div className="flex flex-col items-center justify-start lg:justify-end">
                <div className="relative group">
                  {/* Outer glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                  {/* Image container with border gradient */}
                  <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-xl overflow-hidden border-4 border-white/40 bg-gradient-to-br from-green-400/30 via-emerald-400/30 to-cyan-400/30 p-1">
                    {/* Inner container to create border effect */}
                    <div className="w-full h-full rounded-xl overflow-hidden bg-black">
                      {/* Your profile image */}
                      <img 
                        src={profileImage} 
                        alt="Sanjay - Software Developer"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
                {/* Caption below image */}
                <div className="mt-4 text-center">
                  <span className="block text-lg font-semibold text-emerald-400">Software Developer</span>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Column 1: Intro Text */}
              <div className="lg:col-span-2 bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-emerald-800/20 hover:border-emerald-700/40 transition-all duration-500">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-emerald-900/30 rounded-xl flex items-center justify-center border border-emerald-800/30">
                    <User className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Professional Profile</h3>
                    <p className="text-emerald-300 text-sm">Driven by innovation and clean code</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed min-h-[120px]">
                    {typedText}
                    <span 
                      ref={cursorRef}
                      className={`inline-block w-[2px] h-6 bg-emerald-400 ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}
                    />
                  </p>
                  
                  <div className="flex flex-wrap gap-3 pt-6 border-t border-emerald-900/30">
                    <span className="px-4 py-2 bg-emerald-900/20 rounded-lg text-emerald-300 text-sm border border-emerald-800/30">
                      Full-Stack Development
                    </span>
                    <span className="px-4 py-2 bg-emerald-900/20 rounded-lg text-emerald-300 text-sm border border-emerald-800/30">
                      Problem Solving
                    </span>
                    <span className="px-4 py-2 bg-emerald-900/20 rounded-lg text-emerald-300 text-sm border border-emerald-800/30">
                      Continuous Learning
                    </span>
                    <span className="px-4 py-2 bg-emerald-900/20 rounded-lg text-emerald-300 text-sm border border-emerald-800/30">
                      Product Thinking
                    </span>
                  </div>
                </div>
              </div>

              {/* Column 2: Core Competencies */}
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-emerald-800/20 hover:border-emerald-700/40 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 rounded-lg flex items-center justify-center mr-3">
                    <TrendingUp className="text-emerald-400" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Core Competencies</h3>
                </div>
                
                <div className="space-y-6">
                  {[
                    { label: 'Frontend Development', value: '90%', icon: '💻', color: 'from-green-500 to-emerald-600' },
                    { label: 'Backend Engineering', value: '85%', icon: '⚙️', color: 'from-cyan-500 to-teal-600' },
                    { label: 'Problem Solving', value: '95%', icon: '🧩', color: 'from-emerald-500 to-green-600' },
                    { label: 'Learning Agility', value: '98%', icon: '🚀', color: 'from-teal-500 to-cyan-600' },
                  ].map((stat, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">{stat.icon}</span>
                          <span className="text-sm font-medium text-gray-300">{stat.label}</span>
                        </div>
                        <span className="font-bold text-emerald-300">{stat.value}</span>
                      </div>
                      <div className="h-2 bg-emerald-900/30 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: stat.value }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Second Row Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Column 1: Technical Expertise */}
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-emerald-800/20 hover:border-emerald-700/40 transition-all duration-500">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 rounded-xl flex items-center justify-center mr-4">
                    <Cpu className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Technical Expertise</h3>
                    <p className="text-emerald-300 text-sm">Comprehensive skill set</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { 
                      icon: <Code2 className="w-6 h-6" />, 
                      title: 'Full-Stack Dev', 
                      desc: 'End-to-end solutions',
                      gradient: 'from-green-500/20 to-emerald-600/20'
                    },
                    { 
                      icon: <Smartphone className="w-6 h-6" />, 
                      title: 'Mobile Apps', 
                      desc: 'Cross-platform',
                      gradient: 'from-cyan-500/20 to-teal-600/20'
                    },
                    { 
                      icon: <Globe className="w-6 h-6" />, 
                      title: 'Web Apps', 
                      desc: 'Responsive & modern',
                      gradient: 'from-teal-500/20 to-emerald-600/20'
                    },
                    { 
                      icon: <Zap className="w-6 h-6" />, 
                      title: 'Performance', 
                      desc: 'Optimized solutions',
                      gradient: 'from-emerald-500/20 to-green-600/20'
                    },
                  ].map((tech, index) => (
                    <div
                      key={index}
                      className="group bg-gradient-to-br to-black/40 from-transparent rounded-xl p-5 border border-emerald-800/20 hover:border-emerald-700/40 transition-all duration-500"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${tech.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-emerald-300">
                          {tech.icon}
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">{tech.title}</h4>
                      <p className="text-gray-400 text-sm">{tech.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2: Let's Connect */}
              <div className="bg-gradient-to-br from-emerald-900/20 to-black/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-700/30">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-600/30 to-green-500/20 rounded-xl flex items-center justify-center mr-4">
                    <Mail className="text-emerald-300" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Let's Connect</h3>
                    <p className="text-emerald-300 text-sm">Get in touch today</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Looking for a dedicated developer who brings passion and expertise to every project? Let's discuss how I can contribute to your team's success.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-gray-300">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span>Available for full-time opportunities</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span>Open to freelance projects</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span>Ready for technical discussions</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-6">
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-black font-semibold rounded-xl hover:from-green-400 hover:to-emerald-500 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-3 group"
                    >
                      <span className="text-lg">Start a Conversation</span>
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                    {/* Download Resume link removed */}
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="text-center mt-20">
              <button
                onClick={() => scrollToSection('about')}
                className="inline-flex flex-col items-center text-emerald-300 hover:text-emerald-200 transition-colors duration-300 group"
              >
                <span className="mb-4 text-sm tracking-widest">EXPLORE MY WORK</span>
                <div className="w-8 h-12 border-2 border-emerald-800 rounded-full flex justify-center p-2 group-hover:border-emerald-500 transition-colors">
                  <div className="w-1 h-3 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full animate-bounce" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* All Sections Rendered Below for Single Page Experience */}
      <section id="about" className="pt-24"><About /></section>
      <section id="skills" className="pt-24"><Skills /></section>
      <section id="projects" className="pt-24"><Projects /></section>
      <section id="achievements" className="pt-24"><Achievements /></section>
      <section id="experience" className="pt-24"><ExperienceTimeline /></section>
      <section id="contact" className="pt-24"><Contact /></section>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-500 text-black rounded-full flex items-center justify-center shadow-xl shadow-emerald-900/30 hover:scale-110 transition-all duration-300 z-40 ${
          isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <ChevronUp size={24} />
      </button>

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;