import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: ['React', 'React Native', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind CSS'],
      color: 'from-cyan-500/10 to-blue-500/10',
      borderColor: 'border-cyan-500/30',
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: ['Firebase', 'Node.js', 'Express.js', 'Flask', 'SQL'],
      color: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/30',
    },
    {
      title: 'AI & ML',
      icon: '🤖',
      skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'Python', 'Java'],
      color: 'from-orange-500/10 to-red-500/10',
      borderColor: 'border-orange-500/30',
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: ['Git', 'GitHub', 'Power BI', 'Visual Studio'],
      color: 'from-green-500/10 to-emerald-500/10',
      borderColor: 'border-green-500/30',
    },
  ];

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
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 py-20 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Technical Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.02 }}
              className={`bg-gradient-to-br ${category.color} p-8 rounded-xl border ${category.borderColor} hover:border-opacity-100 transition-all duration-300 backdrop-blur-sm`}
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{category.icon}</span>
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 hover:border-cyan-500/50 rounded-full text-gray-300 hover:text-cyan-400 transition-all duration-300 cursor-pointer font-medium text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Background Elements */}
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
      </div>
    </section>
  );
};

export default Skills;
