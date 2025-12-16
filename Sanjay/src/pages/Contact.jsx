const Contact = () => {
  const contactInfo = [
    {
      icon: "📞",
      title: "Phone",
      value: "+91 8072840185",
      link: "tel:+918072840185"
    },
    {
      icon: "📧",
      title: "Email",
      value: "sanjaycs1902@gmail.com",
      link: "mailto:sanjaycs1902@gmail.com"
    },
    {
      icon: "🔗",
      title: "LinkedIn",
      value: "linkedin.com/sanjayc",
      link: "https://linkedin.com/in/sanjayc"
    },
    {
      icon: "💻",
      title: "GitHub",
      value: "github.com/sanjayc-tb",
      link: "https://github.com/sanjayc-tb"
    },
    {
      icon: "⚡",
      title: "LeetCode",
      value: "leetcode.com/sanjayc",
      link: "https://leetcode.com/sanjayc"
    },
    {
      icon: "🎓",
      title: "College",
      value: "Kongu Engineering College",
      link: "#"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-xl">Let's connect and build something amazing</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-left">
            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-8 text-blue-400">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gray-800/50 p-6 rounded-xl hover-lift transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-900/20 hover:to-purple-900/20"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {contact.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-300 group-hover:text-white transition-colors">
                          {contact.title}
                        </h4>
                        <p className="text-gray-400 group-hover:text-blue-300 transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="animate-slide-right">
            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-8 text-purple-400">Send Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 mb-2">Your Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="Sanjay C"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Your Email</label>
                    <input
                      type="email"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="sanjay@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-400 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-400 mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover-lift transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact