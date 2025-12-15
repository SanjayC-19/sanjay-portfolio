import React from 'react';
import sanjayPhoto from '../assets/sanjay_s_photo-removebg-preview.png';
import { motion } from 'framer-motion';
import { Download, Award, Calendar } from 'lucide-react';

const About = () => {


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

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* Image Section - Left */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden border-2 border-cyan-500/50 transition-all duration-300">
              <img
                src={sanjayPhoto}
                alt="Sanjay"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text Section - Right */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                C Sanjay
              </h3>
              <p className="text-gray-300 text-lg">
                A passionate 3rd year BTech student in Artificial Intelligence & Machine Learning
              </p>
            </div>

            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 10 }}
                className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-4 rounded-lg border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <Award className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-bold text-white">Education</p>
                    <p className="text-gray-300 text-sm mt-1">
                      <span className="text-cyan-400">Kongu Engineering College</span> - B.Tech AI & ML (3rd Year)
                    </p>
                    <p className="text-gray-400 text-sm">CGPA: 8.3 (Till 4th Semester)</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-4 rounded-lg border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <Calendar className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-bold text-white">Schooling</p>
                    <p className="text-gray-300 text-sm mt-1">
                      <span className="text-cyan-400">12th Grade:</span> Vijay Millennium Senior Secondary School, Krishnagiri - 80%
                    </p>
                    <p className="text-gray-300 text-sm mt-1">
                      <span className="text-cyan-400">10th Grade:</span> Steve Vijay Vidyalaya, Krishnagiri - 96.2%
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Internship Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold mb-8 text-cyan-400"
          >
            Experience
          </motion.h3>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 rounded-xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 mb-6"
          >
            <h4 className="text-2xl font-bold text-white mb-2">
              Full Stack Developer Intern
            </h4>
            <p className="text-cyan-400 mb-4">CubeAI Solution Pvt Ltd</p>
            <p className="text-gray-300 mb-4">
              3-Month Internship | Full Stack Development
            </p>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="text-cyan-400 font-semibold">Projects Completed:</span>
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-400 ml-2">
                <li>Poultry Project - Mobile Application</li>
                <li>Loan Based Application - Financial Management Tool</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Projects Highlights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold mb-8 text-cyan-400"
          >
            Projects Highlights
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300"
            >
              <h4 className="text-xl font-bold text-white mb-3">
                E-Commerce Application
              </h4>
              <p className="text-gray-400 mb-4">
                A full-featured e-commerce platform built with modern technologies. Implemented product management, shopping cart, and payment integration.
              </p>
              <p className="text-cyan-400 text-sm font-semibold">
                Role: Full Stack Developer
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300"
            >
              <h4 className="text-xl font-bold text-white mb-3">
                TB Website
              </h4>
              <p className="text-gray-400 mb-4">
                College TB department website with information management system. Designed for easy navigation and responsive design.
              </p>
              <p className="text-cyan-400 text-sm font-semibold">
                Role: Full Stack Developer
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
