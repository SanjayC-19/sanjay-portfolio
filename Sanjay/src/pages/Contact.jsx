import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, FileText } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91 8072840185',
      link: 'tel:+918072840185'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'sanjaycs1902@gmail.com',
      link: 'mailto:sanjaycs1902@gmail.com'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Krishnagiri, Tamil Nadu',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sanjaye',
      handle: 'linkedin.com/sanjaye'
    },
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com/sanjaye-19',
      handle: 'github.com/sanjaye-19'
    },
    {
      icon: <FileText size={24} />,
      name: 'LeetCode',
      url: 'https://leetcode.com/u/sanjaye',
      handle: 'leetcode.com/u/sanjaye'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h1>
          <p className="text-xl text-gray-300">Let's discuss opportunities or collaborate on amazing projects</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glow-border rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-green-900/20 border border-green-900/30 rounded-lg text-gray-200 focus:outline-none focus:border-primary-green transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-green-900/20 border border-green-900/30 rounded-lg text-gray-200 focus:outline-none focus:border-primary-green transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-green-900/20 border border-green-900/30 rounded-lg text-gray-200 focus:outline-none focus:border-primary-green transition-colors"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-green-900/20 border border-green-900/30 rounded-lg text-gray-200 focus:outline-none focus:border-primary-green transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-primary-green text-dark-bg font-bold rounded-lg hover:bg-light-green transition-all duration-300 hover-lift flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="glow-border rounded-xl p-6 block hover-lift"
                >
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-primary-green/20 rounded-lg flex items-center justify-center text-primary-green mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{info.title}</h3>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="glow-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Connect with me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-lg bg-green-900/20 hover:bg-green-900/30 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary-green/20 rounded-lg flex items-center justify-center text-primary-green mr-4">
                        {social.icon}
                      </div>
                      <div>
                        <h4 className="font-bold">{social.name}</h4>
                        <p className="text-gray-300 text-sm">{social.handle}</p>
                      </div>
                    </div>
                    <span className="text-primary-green">→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            {/* Resume Download section removed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;