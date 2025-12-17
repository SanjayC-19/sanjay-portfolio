import { Github, Linkedin, Mail, Phone, MapPin, FileText, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    if (window.location.pathname !== '/') {
      // If not on home page, navigate to home with hash
      window.location.href = `/#${sectionId}`;
    } else {
      // If on home page, smooth scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80; // Account for fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const contactInfo = [
    {
      icon: <Phone size={20} />,
      text: '+91 8072840185',
      href: 'tel:+918072840185',
      type: 'phone'
    },
    {
      icon: <Mail size={20} />,
      text: 'sanjaycs1902@gmail.com',
      href: 'mailto:sanjaycs1902@gmail.com',
      type: 'email'
    },
    {
      icon: <MapPin size={20} />,
      text: 'Krishnagiri, Tamil Nadu',
      href: '#',
      type: 'location'
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      url: 'https://www.linkedin.com/in/sanjaye',
      label: 'LinkedIn',
      color: 'hover:bg-blue-600'
    },
    {
      icon: <Github size={24} />,
      url: 'https://github.com/sanjaye-19',
      label: 'GitHub',
      color: 'hover:bg-gray-800'
    },
    {
      icon: <FileText size={24} />,
      url: 'https://leetcode.com/u/sanjaye',
      label: 'LeetCode',
      color: 'hover:bg-orange-600'
    }
  ];

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-darker-bg border-t border-green-900/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center">
                <span className="text-dark-bg font-bold text-xl">S</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold gradient-text">SANJAY C</h2>
                <p className="text-gray-400 text-sm">Software Developer</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Creating impactful features through code, design thinking, and problem-solving.
              Continuously learning and growing in hands-on product environments.
            </p>
            <a
              href="/sanjay_resume (2).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-green/20 text-primary-green rounded-lg hover:bg-primary-green hover:text-dark-bg transition-all duration-300"
            >
              <FileText size={20} />
              <span>View Resume</span>
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-6">Contact Info</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className={`flex items-center space-x-3 text-gray-300 hover:text-primary-green transition-colors duration-300 group ${
                    info.type === 'location' ? 'cursor-default hover:text-gray-300' : ''
                  }`}
                  {...(info.type === 'location' ? { onClick: (e) => e.preventDefault() } : {})}
                >
                  <div className="w-10 h-10 bg-green-900/20 rounded-lg flex items-center justify-center group-hover:bg-primary-green/20 transition-colors">
                    {info.icon}
                  </div>
                  <span className={info.type === 'location' ? '' : 'group-hover:underline'}>{info.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left py-2 px-3 text-gray-300 hover:text-primary-green hover:bg-green-900/10 rounded-lg transition-all duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-primary-green rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {link.label}
                  <ExternalLink size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-6">Connect With Me</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-green-900/20 border border-green-900/30 flex items-center justify-center text-primary-green hover:bg-primary-green hover:text-dark-bg transition-all duration-300 hover-lift group relative"
                  aria-label={social.label}
                >
                  {social.icon}
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-dark-bg text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Feel free to reach out for collaborations, opportunities, or just to say hi!
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-900/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © {currentYear} Sanjay C. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Made with ❤️ using React + Vite
              </p>
            </div>
            
            {/* Additional Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-green transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
              >
                Back to Top
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="/privacy"
                className="text-gray-400 hover:text-primary-green transition-colors"
              >
                Privacy
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="/terms"
                className="text-gray-400 hover:text-primary-green transition-colors"
              >
                Terms
              </a>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="px-3 py-1 bg-green-900/20 text-primary-green rounded-full text-sm">
              React
            </span>
            <span className="px-3 py-1 bg-green-900/20 text-primary-green rounded-full text-sm">
              Vite
            </span>
            <span className="px-3 py-1 bg-green-900/20 text-primary-green rounded-full text-sm">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 bg-green-900/20 text-primary-green rounded-full text-sm">
              Node.js
            </span>
            <span className="px-3 py-1 bg-green-900/20 text-primary-green rounded-full text-sm">
              Firebase
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;