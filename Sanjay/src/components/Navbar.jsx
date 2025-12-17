import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', path: '/', id: 'home' },
    { name: 'About', path: '/about', id: 'about' },
    { name: 'Skills', path: '/skills', id: 'skills' },
    { name: 'Projects', path: '/projects', id: 'projects' },
    { name: 'Achievements', path: '/achievements', id: 'achievements' },
    { name: 'Contact', path: '/contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1) || 'home';
      setActiveSection(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-darker-bg/90 backdrop-blur-md border-b border-green-900/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-green rounded-lg flex items-center justify-center">
              <span className="text-dark-bg font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-bold gradient-text">SANJAY</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`text-gray-300 hover:text-primary-green transition-colors duration-300 relative group ${
                  activeSection === item.id ? 'text-primary-green' : ''
                }`}
              >
                {item.name}
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
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-2 px-4 rounded-lg transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'bg-primary-green text-dark-bg font-semibold'
                      : 'text-gray-300 hover:text-primary-green hover:bg-green-900/10'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <a
                href="/sanjay_resume (2).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary-green text-dark-bg font-semibold rounded-lg text-center hover:bg-light-green transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;