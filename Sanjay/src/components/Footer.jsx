import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="bg-gradient-to-t from-black to-gray-900 border-t border-cyan-500/30 py-8 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo/Name */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 md:mb-0"
          >
            Sanjay
          </motion.div>

          {/* Middle text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center text-gray-400 flex items-center gap-2"
          >
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={18} className="text-red-500 fill-red-500" />
            </motion.span>
            <span>by Sanjay</span>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-500 text-sm mt-4 md:mt-0"
          >
            © {currentYear} All rights reserved.
          </motion.p>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent my-6"
        />

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-600 text-xs"
        >
          <p>
            Built with React, Tailwind CSS, Framer Motion &bull;{' '}
            <span className="text-cyan-400">Always Learning</span> &bull; Open for
            Collaborations
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
