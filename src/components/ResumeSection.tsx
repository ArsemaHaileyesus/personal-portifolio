import React from 'react';
import { Briefcase, GraduationCap, Languages, Award, Code } from 'lucide-react';
import { resumeData } from '../data/resume';

const ResumeSection: React.FC = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          {resumeData.name}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {resumeData.title}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-12">
          {/* Experience */}
          <div>
            <div className="flex items-center mb-6">
              <Briefcase className="w-6 h-6 text-indigo-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h2>
            </div>
            <div className="space-y-6">
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-indigo-600 pl-4">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{exp.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{exp.company}</p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm mb-2">{exp.period}</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-sm">{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-indigo-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
            </div>
            <div className="space-y-6">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-indigo-600 pl-4">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{edu.degree}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{edu.school}</p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm">{edu.period}</p>
                  {edu.details && (
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">{edu.details}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-12">
          {/* Skills */}
          <div>
            <div className="flex items-center mb-6">
              <Code className="w-6 h-6 text-indigo-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Skills</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(resumeData.skills).map(([category, skills]) => (
                <div key={category}>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{category}</h3>
                  <ul className="space-y-1">
                    {skills.map((skill, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-400 text-sm">{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <div className="flex items-center mb-6">
              <Languages className="w-6 h-6 text-indigo-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Languages</h2>
            </div>
            <div className="space-y-2">
              {resumeData.languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">{lang.name}</span>
                  <span className="text-gray-500 dark:text-gray-500 text-sm">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div>
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-indigo-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Activities</h2>
            </div>
            <div className="space-y-4">
              {resumeData.activities.map((activity, index) => (
                <div key={index} className="border-l-2 border-indigo-600 pl-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{activity.name}</h3>
                  <p className="text-gray-500 dark:text-gray-500 text-sm mb-2">{activity.period}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;