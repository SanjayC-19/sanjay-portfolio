const Skills = () => {
  const technicalSkills = [
    { category: 'Programming Languages', skills: ['C', 'Java', 'Python'] },
    { category: 'Frontend', skills: ['HTML', 'CSS', 'React.js', 'React Native'] },
    { category: 'Backend', skills: ['Node.js'] },
    { category: 'Database', skills: ['Firebase', 'MySQL'] },
    { category: 'Tools', skills: ['VS Code', 'Expo-Go', 'Git', 'Github', 'Power BI'] }
  ]

  const softSkills = ['Learnability', 'Communication', 'Leadership', 'Teamwork']

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-xl">Technologies I work with</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6 animate-slide-left">
            {technicalSkills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl hover-lift">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-full text-gray-300 border border-blue-700/30 hover:border-blue-500 transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="animate-slide-right">
            <div className="bg-gray-800/50 p-8 rounded-xl h-full hover-lift">
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">Soft Skills</h3>
              <div className="space-y-6">
                {softSkills.map((skill, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300">{skill}</span>
                      <span className="text-blue-400">90%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-gradient"
                        style={{ width: '90%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 pt-8 border-t border-gray-700">
                <h3 className="text-2xl font-semibold mb-6 text-green-400">Leadership</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3 text-gray-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span>Executive Member of Mobile Application Development</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <span>Placement Coordinator for year 2024 - 2025</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>MS - Volunteer</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills