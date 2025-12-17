import { ExternalLink, Github, Smartphone, Globe, Store } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Application for Optics Store',
      role: 'Frontend Developer',
      description: 'A full-stack e-commerce platform where users can browse, search, and order products. Includes user/admin login systems and complete shopping functionality.',
      tech: ['React.js', 'Node.js', 'Firebase', 'HTML', 'CSS', 'JavaScript'],
      link: 'https://www.arameyecare.com',
      icon: <Store size={24} />,
      features: [
        'User/Admin authentication system',
        'Product browsing and search',
        'Shopping cart functionality',
        'Order management system'
      ]
    },
    {
      title: 'Cashman - Mobile Application',
      role: 'Frontend Developer',
      description: 'Mobile application to help individuals manage income, expenditure, and learn investment strategies for better financial planning and future profits.',
      tech: ['React Native', 'Node.js', 'Firebase', 'JavaScript'],
      icon: <Smartphone size={24} />,
      features: [
        'Income/Expense tracking',
        'Investment guidance',
        'Financial analytics',
        'Cross-platform compatibility'
      ]
    },
    {
      title: 'KEC-TBI Website',
      role: 'Full-Stack Developer',
      description: 'Dynamic website for college TBI to maintain organized operations with separate admin login for manual data entry and management.',
      tech: ['React Vite', 'Node.js', 'Firebase', 'JavaScript'],
      link: 'https://www.tbi.com',
      icon: <Globe size={24} />,
      features: [
        'Admin panel for data management',
        'Dynamic content updates',
        'Organized information architecture',
        'Secure authentication'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">My Projects</h1>
          <p className="text-xl text-gray-300">Real-world applications that solve problems and deliver value</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glow-border rounded-2xl overflow-hidden hover-lift group"
            >
              {/* Project Header */}
              <div className="p-6 bg-green-900/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-primary-green/20 rounded-lg flex items-center justify-center text-primary-green">
                    {project.icon}
                  </div>
                  <span className="px-4 py-1 bg-primary-green/20 text-primary-green rounded-full text-sm font-semibold">
                    {project.role}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>

              {/* Project Details */}
              <div className="p-6">
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-200 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-primary-green rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-200 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-green-900/30 text-primary-green rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex justify-between items-center">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-primary-green hover:text-light-green transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  <button className="flex items-center space-x-2 text-gray-300 hover:text-primary-green transition-colors">
                    <Github size={20} />
                    <span>View Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="glow-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Have a project in mind?</h3>
            <p className="text-gray-300 mb-6">
              I'm always excited to work on new challenges and bring innovative ideas to life.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-primary-green text-dark-bg font-bold rounded-lg hover:bg-light-green transition-all duration-300 hover-lift"
            >
              <span>Let's Discuss Your Project</span>
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;