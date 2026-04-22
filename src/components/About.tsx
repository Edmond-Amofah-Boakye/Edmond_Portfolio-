import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo, education, achievements } from '../data/portfolioData';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Background
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Currently pursuing a Master's degree in Computer Science, specializing in 
              Machine Learning and Explainable AI. I combine academic research with 
              real-world software development experience to create innovative solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Achievements & Recognition
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="border-l-4 border-primary-600 pl-4 py-2"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {achievement.organization} • {achievement.year}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2">
                  {edu.degree}
                </h4>
                <p className="font-medium text-gray-900 dark:text-white mb-1">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {edu.location} • {edu.period}
                </p>
                
                {edu.thesis && (
                  <div className="mb-3">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Thesis:
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                      {edu.thesis}
                    </p>
                  </div>
                )}
                
                {edu.project && (
                  <div className="mb-3">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Final Year Project:
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                      {edu.project}
                    </p>
                  </div>
                )}
                
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Key Coursework:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.slice(0, 4).map((course, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
