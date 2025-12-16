const Achievements = () => {
  const achievements = [
    {
      title: "Third Prize in KEO - Hackathon",
      description: "Best Innovation Award",
      icon: "🥉",
      color: "from-yellow-600/30 to-yellow-900/30"
    },
    {
      title: "Award in BYTS BIDA LO - Hackathon",
      description: "Best Innovation Award",
      icon: "🏆",
      color: "from-blue-600/30 to-purple-900/30"
    },
    {
      title: "First Prize in Visionary Vibes",
      description: "Web Designing Competition",
      icon: "🥇",
      color: "from-green-600/30 to-emerald-900/30"
    }
  ]

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Achievements</span> & Awards
          </h2>
          <p className="text-gray-400 text-xl">Recognitions and accomplishments</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${achievement.color} border border-gray-700 p-8 rounded-xl hover-lift transform transition-all duration-300 hover:scale-105 animate-fade-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-5xl mb-6">{achievement.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{achievement.title}</h3>
              <p className="text-gray-300">{achievement.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-8 rounded-xl border-l-4 border-blue-500 animate-slide-right">
          <h3 className="text-2xl font-bold mb-6 text-blue-400">Leadership Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                role: "Executive Member",
                org: "Mobile Application Development Club",
                period: "2023-2024"
              },
              {
                role: "Placement Coordinator",
                org: "College Placement Cell",
                period: "2024-2025"
              },
              {
                role: "MS Volunteer",
                org: "Social Service Organization",
                period: "2022-Present"
              }
            ].map((leadership, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h4 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {leadership.role}
                </h4>
                <p className="text-gray-400 mb-1">{leadership.org}</p>
                <p className="text-blue-300 text-sm">{leadership.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements