const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20"></div>
      
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="inline-block mb-6 animate-fade-up">
            <div className="text-sm text-blue-400 font-semibold tracking-wider uppercase">
              Welcome to my portfolio
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-left">
            Hi, I'm <span className="gradient-text">Sanjay C</span>
          </h1>
          
          <div className="typing-animation text-2xl md:text-3xl text-gray-300 mb-8 mx-auto w-fit">
            Aspiring Software Developer
          </div>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-fade-up">
            I create impactful features using coding skills, design, and problem-solving.
            Passionate about learning and growing in hands-on product settings.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover-lift transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover-lift transition-all duration-300 transform hover:scale-105 hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home