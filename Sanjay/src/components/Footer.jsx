const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 py-8 mt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse-slow flex items-center justify-center">
              <span className="text-white font-bold">SC</span>
            </div>
            <span className="text-xl font-bold gradient-text">SANJAY C</span>
          </div>
          
          <p className="text-gray-400 text-center">
            Aspiring Software Developer • Full-Stack & Mobile App Developer
          </p>
          
          <div className="flex space-x-6">
            {['LinkedIn', 'GitHub', 'LeetCode'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover-lift p-2"
              >
                {platform}
              </a>
            ))}
          </div>
          
          <p className="text-gray-500 text-sm">
            © {currentYear} SANJAY C. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer