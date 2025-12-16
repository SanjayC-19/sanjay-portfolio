import sanjayPhoto from '../assets/sanjay_photo.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Profile Image */}
          <div className="lg:w-2/5 flex justify-center animate-fade-in">
            <div className="relative group">
              <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl group-hover:border-blue-500 transition-all duration-300">
                <img 
                  src={sanjayPhoto}
                  alt="Sanjay C - Software Developer"
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg">
                Software Developer
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:w-3/5 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="mb-8">
              <h2 className="text-5xl font-bold mb-4">
                About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            </div>
            
            <div className="space-y-8">
              {/* Career Objective */}
              <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Career Objective
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Aspiring Software Developer with a passion for creating impactful digital solutions. 
                  Seeking to leverage strong foundation in full-stack development and problem-solving 
                  skills to contribute to innovative products. Committed to continuous learning and 
                  growth in a collaborative, hands-on environment where I can make meaningful contributions.
                </p>
              </div>
              
              {/* Education */}
              <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Education
                  </h3>
                </div>
                
                <div className="space-y-8">
                  {/* Current Education */}
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-pulse">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="bg-gray-900/50 p-5 rounded-xl">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <h4 className="text-xl font-semibold text-white">B.E. in AI & Machine Learning</h4>
                        <span className="text-blue-400 font-medium bg-blue-500/10 px-3 py-1 rounded-full text-sm mt-2 sm:mt-0">2022 - 2026</span>
                      </div>
                      <p className="text-gray-400 mb-2">KPR Engineering College</p>
                      <div className="flex items-center gap-4">
                        <span className="text-blue-300 font-medium">CGPA: 8.20</span>
                        <span className="text-gray-500">|</span>
                        <span className="text-gray-400 text-sm">Currently in 4th Semester</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Previous Education */}
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="bg-gray-900/50 p-5 rounded-xl">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <h4 className="text-xl font-semibold text-white">Higher Secondary (12th)</h4>
                        <span className="text-purple-400 font-medium bg-purple-500/10 px-3 py-1 rounded-full text-sm mt-2 sm:mt-0">2021 - 2022</span>
                      </div>
                      <p className="text-gray-400 mb-2">The TVS School</p>
                      <div className="flex items-center gap-4">
                        <span className="text-purple-300 font-medium">Percentage: 80%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Expertise */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Areas of Expertise
              </span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Specializing in modern web technologies and application development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Full-Stack Development', 
                icon: '💻', 
                gradient: 'from-blue-600 to-cyan-600',
                description: 'End-to-end web application development with modern frameworks and architectures'
              },
              { 
                title: 'Mobile App Development', 
                icon: '📱', 
                gradient: 'from-purple-600 to-pink-600',
                description: 'Cross-platform mobile applications using React Native and Flutter'
              },
              { 
                title: 'Frontend Development', 
                icon: '🎨', 
                gradient: 'from-green-600 to-emerald-600',
                description: 'Creating responsive, interactive user interfaces with modern JavaScript frameworks'
              }
            ].map((expertise, index) => (
              <div
                key={index}
                className="group bg-gray-800/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-transparent transition-all duration-300 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${expertise.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{expertise.icon}</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{expertise.title}</h4>
                <p className="text-gray-400 leading-relaxed">{expertise.description}</p>
                <div className={`mt-6 w-12 h-1 bg-gradient-to-r ${expertise.gradient} rounded-full group-hover:w-24 transition-all duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About