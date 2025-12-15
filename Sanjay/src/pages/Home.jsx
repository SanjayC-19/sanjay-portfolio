import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Home = ({ setActiveSection }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4 pt-20 relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-1"
            >
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-4xl">
                👨‍💻
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Hey, I'm Sanjay!
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-4"
        >
          Full Stack Developer & AI Enthusiast
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Building beautiful, functional web applications with modern technologies.
          Passionate about turning ideas into reality through code.
        </motion.p>

        <motion.button
          variants={itemVariants}
          onClick={() => setActiveSection('about')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
        >
          Get to Know Me
        </motion.button>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16"
        >
          <ChevronDown size={32} className="text-cyan-400 mx-auto" />
        </motion.div>
      </motion.div>

      {/* Background Animation Elements */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
      />
    </section>
  );
};

export default Home;
