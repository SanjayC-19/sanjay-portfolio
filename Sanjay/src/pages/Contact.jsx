import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Using EmailJS (alternative approach - direct mailto for now)
      // For production, implement EmailJS or backend email service
      const mailtoLink = `mailto:Sanjaycs1902@gmail.com?subject=Portfolio Contact from ${formData.name}&body=Name: ${formData.name}%0DEmail: ${formData.email}%0D%0DMessage:%0D${formData.message}`;
      window.location.href = mailtoLink;

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setSuccess(true);

      // Hide success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const socialLinks = [
    { icon: Mail, href: 'mailto:Sanjaycs1902@gmail.com', label: 'Email', color: 'hover:text-red-400' },
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-cyan-400' },
  ];

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 py-20 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-400 mb-16 text-lg"
        >
          Have a project in mind or want to collaborate? Let's connect!
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300"
            >
              <Mail className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold text-white mb-1">Email</p>
                <a
                  href="mailto:Sanjaycs1902@gmail.com"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Sanjaycs1902@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300"
            >
              <Phone className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold text-white mb-1">Phone</p>
                <p className="text-gray-400">Available on request</p>
              </div>
            </motion.div>

            <div className="mt-8">
              <p className="text-white font-semibold mb-4">Connect With Me</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-cyan-400 hover:border-cyan-500/60 transition-all duration-300 ${social.color}`}
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 rounded-xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <motion.div
                whileFocus={{ scale: 1.02 }}
              >
                <label className="block text-white font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:bg-gray-800/80 transition-all duration-300"
                  placeholder="Your name"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                whileFocus={{ scale: 1.02 }}
              >
                <label className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:bg-gray-800/80 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              {/* Message Input */}
              <motion.div
                whileFocus={{ scale: 1.02 }}
              >
                <label className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:bg-gray-800/80 transition-all duration-300 resize-none"
                  placeholder="Your message here..."
                />
              </motion.div>

              {/* Success Message */}
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm"
                >
                  ✓ Message sent successfully! Opening your email client...
                </motion.div>
              )}

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm"
                >
                  {error}
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Animations */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-40 right-20 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-40 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl -z-10"
      />
    </section>
  );
};

export default Contact;
