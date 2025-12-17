import { Trophy, Award, Star, Medal } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Third Prize',
      event: 'KEC Hackathon',
      description: 'Best Innovation Award for developing an innovative solution',
      year: '2024',
      icon: <Trophy size={24} />,
      category: 'Hackathon'
    },
    {
      title: 'Best Innovation Award',
      event: 'BYTS INDIA 1.0 – Hackathon',
      description: 'Recognized for most innovative approach to problem-solving',
      year: '2023',
      icon: <Award size={24} />,
      category: 'Hackathon'
    },
    {
      title: 'First Prize',
      event: 'Visionary Vibes – Web Designing',
      description: 'Awarded for excellence in web design and user experience',
      year: '2023',
      icon: <Star size={24} />,
      category: 'Design'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Achievements</h1>
          <p className="text-xl text-gray-300">Recognitions and awards for excellence and innovation</p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="glow-border rounded-2xl p-6 hover-lift group relative overflow-hidden"
            >
              {/* Background Glow Effect */}
              <div className="absolute -inset-4 bg-primary-green/5 blur-xl group-hover:bg-primary-green/10 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-primary-green/20 rounded-xl flex items-center justify-center text-primary-green">
                    {achievement.icon}
                  </div>
                  <span className="px-4 py-1 bg-primary-green/20 text-primary-green rounded-full text-sm font-semibold">
                    {achievement.year}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-primary-green font-semibold mb-3">{achievement.event}</p>
                <p className="text-gray-300 mb-4">{achievement.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-green-900/30 text-gray-300 rounded-full text-sm">
                    {achievement.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Demonstrated */}
        <div className="glow-border rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Skills Demonstrated</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-primary-green/20 rounded-full flex items-center justify-center text-primary-green mx-auto mb-4">
                <Medal size={32} />
              </div>
              <h4 className="font-bold text-xl mb-2">Innovation</h4>
              <p className="text-gray-300">Creative problem-solving and novel approaches</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-primary-green/20 rounded-full flex items-center justify-center text-primary-green mx-auto mb-4">
                <Trophy size={32} />
              </div>
              <h4 className="font-bold text-xl mb-2">Technical Excellence</h4>
              <p className="text-gray-300">Mastery of development tools and technologies</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-primary-green/20 rounded-full flex items-center justify-center text-primary-green mx-auto mb-4">
                <Award size={32} />
              </div>
              <h4 className="font-bold text-xl mb-2">Design Thinking</h4>
              <p className="text-gray-300">User-centered design and aesthetics</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-primary-green/20 rounded-full flex items-center justify-center text-primary-green mx-auto mb-4">
                <Star size={32} />
              </div>
              <h4 className="font-bold text-xl mb-2">Team Collaboration</h4>
              <p className="text-gray-300">Effective teamwork in competitive environments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;