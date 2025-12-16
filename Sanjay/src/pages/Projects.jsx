const Projects = () => {
  const projects = [
    {
      title: "E-commerce Application for Optics Store",
      role: "Frontend Developer",
      description: "Developed a full-stack e-commerce platform where users can browse, search, and order products. The app includes user/admin login systems and many necessary features.",
      tech: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Firebase"],
      link: "www.comprojects.com"
    },
    {
      title: "Castman - Mobile Application",
      role: "Frontend Developer",
      description: "Mobile application built to enable each and every individual to manage their income and operations, and teach to invest in correct platform for future profits.",
      tech: ["HTML", "CSS", "JavaScript", "React Native", "Node.js", "Firebase"]
    },
    {
      title: "KEO-TBI Website",
      role: "Full Stack Developer",
      description: "A dynamic website built for college TBI to maintain all things in organized manner. Contains separate login for Admin session to ensure data manually.",
      tech: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Firebase"],
      link: "www.kik.com"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-xl">Featured works and contributions</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-xl overflow-hidden hover-lift transform transition-all duration-500 hover:scale-105 animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-white font-bold">P{index + 1}</span>
                  </div>
                  <span className="px-4 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold">
                    {project.role}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.link && (
                  <a
                    href={`https://${project.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    View Project
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                )}
              </div>
              
              <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects