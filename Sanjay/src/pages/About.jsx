import { GraduationCap, Calendar, Award, Users } from 'lucide-react';

const About = () => {
  const education = [
    {
      period: '2023 – 2027',
      institution: 'Kongu Engineering College',
      degree: 'B.Tech Artificial Intelligence And Machine Learning',
      details: 'CGPA: 8.32 (till 4th Sem)',
      icon: <GraduationCap size={24} />
    },
    {
      period: '2021 – 2022',
      institution: 'The Vijay Millennium Senior Secondary School',
      degree: '12th Standard',
      details: 'Percentage: 80%',
      icon: <Calendar size={24} />
    },
    {
      period: '2019 – 2020',
      institution: 'Sri Vijay Vidyalaya Matric Hr.Sec. School',
      degree: '10th Standard',
      details: 'Percentage: 96.4%',
      icon: <Award size={24} />
    }
  ];

  const leadership = [
    {
      role: 'Executive Member',
      organization: 'Mobile Application Development Club',
      period: '2023 - Present',
      icon: <Users size={20} />
    },
    {
      role: 'Placement Coordinator',
      organization: 'College Placement Cell',
      period: '2024 – 2025',
      icon: <Users size={20} />
    },
    {
      role: 'Volunteer',
      organization: 'National Service Scheme (NSS)',
      period: '2023 - Present',
      icon: <Users size={20} />
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h1>
          <p className="text-xl text-gray-300">Know more about my journey, education, and leadership</p>
        </div>

        {/* Objective Section */}
        <section className="mb-16">
          <div className="glow-border rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="w-12 h-12 bg-primary-green/20 rounded-lg flex items-center justify-center text-primary-green mr-4">
                <Award size={24} />
              </span>
              Career Objective
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm an aspiring Software Developer passionate about creating impactful features. 
              I combine coding skills with design thinking and problem-solving to build solutions 
              that matter. I thrive in hands-on product environments where I can continuously learn, 
              grow, and contribute to meaningful projects while staying updated with emerging technologies.
            </p>
          </div>
        </section>

        {/* Education & Leadership Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <section>
            <h2 className="text-3xl font-bold mb-8 gradient-text">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="glow-border rounded-xl p-6 hover-lift"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary-green/20 rounded-lg flex items-center justify-center text-primary-green mr-4">
                        {edu.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{edu.institution}</h3>
                        <p className="text-gray-400">{edu.degree}</p>
                      </div>
                    </div>
                    <span className="px-4 py-1 bg-primary-green/20 text-primary-green rounded-full text-sm font-semibold">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-primary-green font-semibold">{edu.details}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Leadership */}
          <section>
            <h2 className="text-3xl font-bold mb-8 gradient-text">Leadership</h2>
            <div className="space-y-6">
              {leadership.map((role, index) => (
                <div
                  key={index}
                  className="glow-border rounded-xl p-6 hover-lift"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-primary-green/20 rounded-lg flex items-center justify-center text-primary-green mr-3">
                      {role.icon}
                    </div>
                    <h3 className="text-xl font-bold">{role.role}</h3>
                  </div>
                  <p className="text-gray-300 mb-2">{role.organization}</p>
                  <span className="text-primary-green font-semibold">{role.period}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Soft Skills */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 gradient-text text-center">Soft Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Communication', 'Leadership', 'Teamwork', 'Problem Solving', 'Adaptability', 'Time Management'].map((skill) => (
              <div
                key={skill}
                className="px-6 py-3 bg-primary-green/10 border border-primary-green/30 rounded-full hover:bg-primary-green/20 transition-colors duration-300"
              >
                <span className="text-primary-green font-semibold">{skill}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;