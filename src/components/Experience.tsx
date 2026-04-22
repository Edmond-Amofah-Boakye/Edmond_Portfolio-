import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase } from 'react-icons/fi';
import { experience } from '../data/portfolioData';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-12"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary-200 dark:bg-primary-800"></div>

          <div className="space-y-8 md:space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-primary-600 rounded-full border-2 md:border-4 border-white dark:border-gray-900"></div>

                {/* Content card */}
                <div
                  className={`ml-10 md:ml-0 md:w-5/12 w-full pr-4 md:pr-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                        <FiBriefcase className="text-primary-600 dark:text-primary-400" size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {exp.company}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {exp.location}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                          {exp.period}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                        {exp.type}
                      </span>
                    </div>

                    <ul className="space-y-2 mt-4">
                      {exp.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className="text-gray-600 dark:text-gray-400 text-sm flex gap-2"
                        >
                          <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
