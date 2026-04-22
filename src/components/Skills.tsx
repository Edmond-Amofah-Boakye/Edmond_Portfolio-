import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/portfolioData';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = Object.entries(skills);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 bg-white dark:bg-gray-800 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/10 dark:via-cyan-900/10 dark:to-blue-900/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Skills & <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
            A comprehensive toolkit built through years of hands-on experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                {/* Subtle border effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-lg"></div>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{category.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                      className="px-3 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-cyan-300 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-cyan-600 hover:text-white dark:hover:from-blue-600 dark:hover:to-cyan-600 transition-all cursor-default hover:scale-110 transform"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Skill count badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-cyan-300 rounded-full text-xs font-bold">
                    {skillList.length}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 rounded-2xl p-8 text-white relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            </div>
            
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">2+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-sm opacity-90">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">8+</div>
                <div className="text-sm opacity-90">Developers Mentored</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">25%</div>
                <div className="text-sm opacity-90">Team Productivity ↑</div>
              </div>
            </div>

            <p className="relative text-center mt-6 text-white/90 text-lg font-medium">
              Constantly learning, adapting, and delivering excellence
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
