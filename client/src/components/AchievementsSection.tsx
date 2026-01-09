import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaTrophy, FaMedal, FaAtom, FaRobot, FaLightbulb, FaVoteYea } from 'react-icons/fa';
import { entrepreneurialAchievements, technicalAchievements, scholarships } from '@/lib/data';

const AchievementsSection = () => {
  const [activeTab, setActiveTab] = useState<'technical' | 'entrepreneurial' | 'scholarships'>('technical');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const tabs = [
    { id: 'technical', label: 'Technical', icon: <FaTrophy /> },
    { id: 'entrepreneurial', label: 'Entrepreneurial', icon: <FaLightbulb /> },
    { id: 'scholarships', label: 'Scholarships', icon: <FaAward /> },
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="w-[85%] mx-auto px-2 md:px-4">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="inline-block font-poppins font-bold text-4xl md:text-5xl neo-brutal py-3 px-6 bg-light-secondary dark:bg-dark-secondary text-white transform rotate-1">
            Achievements
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`
                neo-brutal font-bold py-3 px-6 flex items-center gap-2 transition-all
                ${activeTab === tab.id
                  ? 'bg-light-primary dark:bg-dark-primary text-white -translate-y-1'
                  : 'bg-white dark:bg-dark-bg text-black dark:text-white hover:-translate-y-1'
                }
              `}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activeTab === 'technical' && technicalAchievements.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="neo-brutal bg-white dark:bg-dark-bg/90 p-5 relative overflow-hidden h-full flex flex-col"
              >
                <div className={`absolute -top-2 -right-2 bg-light-primary dark:bg-dark-primary text-white py-1 px-3 border-2 border-black text-xs font-bold ${index % 2 === 0 ? 'rotate-3' : '-rotate-3'}`}>
                  {tech.status}
                </div>
                <h4 className="font-bold text-lg mb-2 mt-2 pr-8">{tech.title}</h4>
                <p className="mb-3 text-sm flex-grow">{tech.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {tech.tags && tech.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-[10px] uppercase font-bold bg-light-bg dark:bg-dark-bg border border-black px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {activeTab === 'entrepreneurial' && entrepreneurialAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="neo-brutal bg-white dark:bg-dark-bg/90 p-5 transform hover:-rotate-1 h-full flex flex-col"
              >
                <div className="flex items-start">
                  <div className="shrink-0 mr-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-light-secondary dark:bg-dark-secondary text-white rounded-full border-2 border-black">
                      <FaLightbulb className="text-xl" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h4 className="font-bold text-lg leading-tight">{achievement.title}</h4>
                      <span className="text-xs bg-light-primary dark:bg-dark-primary text-white px-2 py-0.5 rounded-full border border-black whitespace-nowrap">
                        {achievement.status}
                      </span>
                    </div>
                    {(achievement as any).date && (
                      <p className="text-xs font-mono mb-2 text-gray-600 dark:text-gray-400">{(achievement as any).date}</p>
                    )}
                    <p className="text-sm">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {activeTab === 'scholarships' && scholarships.map((scholarship, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="neo-brutal bg-white dark:bg-dark-bg/90 p-5 transform hover:rotate-1 h-full"
              >
                <div className="flex items-start">
                  <div className="shrink-0 mr-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-light-primary dark:bg-dark-primary text-white rounded-full border-2 border-black">
                      {scholarship.icon === 'medal' && <FaMedal className="text-xl" />}
                      {scholarship.icon === 'atom' && <FaAtom className="text-xl" />}
                      {scholarship.icon === 'robot' && <FaRobot className="text-xl" />}
                      {/* Fallback icon if needed */}
                      {!['medal', 'atom', 'robot'].includes(scholarship.icon || '') && <FaAward className="text-xl" />}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{scholarship.title}</h4>
                    <p className="text-sm mb-2">{scholarship.description}</p>
                    <p className="text-xs font-mono text-gray-600 dark:text-gray-400">{scholarship.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button
            className="neo-brutal bg-light-primary dark:bg-dark-primary text-white font-bold py-3 px-6"
            whileHover={{ y: -5, x: -5, boxShadow: "8px 8px 0px 0px #000000" }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            View All Certificates
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
