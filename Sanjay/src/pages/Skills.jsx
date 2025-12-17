import { Code, Database, Palette, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={24} />,
      skills: [
        { name: 'C', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'Python', level: 75 },
      ]
    },
    {
      title: 'Frontend',
      icon: <Palette size={24} />,
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React.js', level: 85 },
        { name: 'React Native', level: 80 },
      ]
    },
    {
      title: 'Backend & Database',
      icon: <Database size={24} />,
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Firebase', level: 85 },
        { name: 'MySQL', level: 75 },
      ]
    },
    {
      title: 'Tools',
      icon: <Wrench size={24} />,
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'Git & GitHub', level: 85 },
        { name: 'Expo Go', level: 80 },
        { name: 'PowerBI', level: 70 },
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Technical Skills</h1>
          <p className="text-xl text-gray-300">Technologies I work with to bring ideas to life</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="glow-border rounded-2xl p-6 hover-lift"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-green/20 rounded-lg flex items-center justify-center text-primary-green mr-4">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-200">{skill.name}</span>
                      <span className="text-primary-green font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-green-900/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary-green to-light-green rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Level Legend */}
        <div className="mt-16 p-6 glow-border rounded-2xl">
          <h3 className="text-2xl font-bold mb-6 text-center gradient-text">Proficiency Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4">
              <div className="h-3 bg-gradient-to-r from-primary-green to-light-green rounded-full mb-2"></div>
              <span className="text-gray-300">Expert (90-100%)</span>
            </div>
            <div className="text-center p-4">
              <div className="h-3 bg-gradient-to-r from-primary-green to-light-green w-3/4 rounded-full mb-2"></div>
              <span className="text-gray-300">Advanced (75-89%)</span>
            </div>
            <div className="text-center p-4">
              <div className="h-3 bg-gradient-to-r from-primary-green to-light-green w-2/4 rounded-full mb-2"></div>
              <span className="text-gray-300">Intermediate (60-74%)</span>
            </div>
            <div className="text-center p-4">
              <div className="h-3 bg-gradient-to-r from-primary-green to-light-green w-1/4 rounded-full mb-2"></div>
              <span className="text-gray-300">Beginner (40-59%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;