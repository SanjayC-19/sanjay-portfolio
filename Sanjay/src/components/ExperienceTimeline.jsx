import React from "react";
import { experienceData } from "./experienceData";

const iconMap = {
  briefcase: (
    <span className="flex items-center justify-center w-16 h-16 bg-emerald-400 rounded-full text-black text-3xl">
      <i className="fa-solid fa-briefcase"></i>
    </span>
  ),
  graduation: (
    <span className="flex items-center justify-center w-16 h-16 bg-emerald-400 rounded-full text-black text-3xl">
      <i className="fa-solid fa-graduation-cap"></i>
    </span>
  ),
};

const ExperienceTimeline = () => {
  return (
    <section className="min-h-screen bg-black text-white py-16 px-4 flex flex-col items-center">
      <h2 className="text-5xl font-bold mb-8 relative inline-block">
        Experience
        <span className="block h-1 w-20 bg-emerald-400 mt-2 rounded"></span>
      </h2>
      <div className="relative flex flex-col items-center w-full max-w-4xl">
        {/* Timeline vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-emerald-400/40 -translate-x-1/2 z-0"></div>
        {experienceData.map((exp, idx) => (
          <div key={idx} className="flex w-full mb-16 relative z-10">
            <div className="flex flex-col items-center mr-8">
              <div>{iconMap[exp.icon]}</div>
              {idx !== experienceData.length - 1 && (
                <div className="flex-1 w-1 bg-emerald-400/40 mt-2 mb-2"></div>
              )}
            </div>
            <div className="bg-neutral-900 rounded-2xl shadow-lg p-8 flex-1">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <span className="bg-emerald-900/60 text-emerald-400 px-4 py-2 rounded-full text-lg font-semibold">
                  {exp.date}
                </span>
              </div>
              <h4 className="text-emerald-400 text-xl font-semibold mb-2">{exp.company}</h4>
              <p className="mb-4 text-lg text-gray-300">{exp.description}</p>
              <ul className="space-y-2">
                {exp.bullets.map((item, i) => (
                  <li key={i} className="flex items-center text-lg">
                    <span className="text-emerald-400 mr-2">
                      <i className="fa-solid fa-check-circle"></i>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
