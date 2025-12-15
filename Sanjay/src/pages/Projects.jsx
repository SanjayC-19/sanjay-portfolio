import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Application',
      description: 'A comprehensive e-commerce platform with product catalog, shopping cart, user authentication, and payment integration. Built with modern web technologies and best practices.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Stripe'],
      image: '🛍️',
      gradient: 'from-cyan-500/10 to-blue-500/10',
      borderColor: 'border-cyan-500/30',
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Pounded Application',
      description: 'An innovative financial management application developed during internship. Features transaction tracking, budget management, and detailed analytics for personal finance management.',
      tags: ['React', 'Firebase', 'JavaScript', 'Tailwind CSS'],
      image: '💰',
      gradient: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/30',
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Loan Based Application',
      description: 'A loan management system built during internship. Handles loan applications, processing, approval workflow, and EMI calculations with comprehensive dashboard.',
      tags: ['Node.js', 'React', 'SQL', 'Express.js'],
      image: '🏦',
      gradient: 'from-orange-500/10 to-red-500/10',
      borderColor: 'border-orange-500/30',
      link: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'TB Website',
      description: 'College TB department information website with responsive design. Features department information, resources, and easy-to-navigate interface for students and staff.',
      tags: ['React', 'Tailwind CSS', 'JavaScript'],
      image: '🏥',
      gradient: 'from-green-500/10 to-emerald-500/10',
      borderColor: 'border-green-500/30',
      link: '#',
      github: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 py-20 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -15 }}
              className={`bg-gradient-to-br ${project.gradient} rounded-xl border ${project.borderColor} overflow-hidden hover:border-opacity-100 transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:shadow-cyan-500/20`}
            >
              {/* Project Header with Icon */}
              <div className="h-32 bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center border-b border-gray-700">
                <span className="text-6xl">{project.image}</span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-semibold border border-cyan-500/30 hover:bg-cyan-500/30 transition-all duration-300"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                    View
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 rounded-lg border-2 border-cyan-500/50 text-cyan-400 font-bold flex items-center justify-center gap-2 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    <Github size={18} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Animations */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-32 right-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-32 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl -z-10"
      />
    </section>
  );
};

export default Projects;
