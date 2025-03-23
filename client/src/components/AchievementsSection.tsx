import { motion } from 'framer-motion';
import { FaAward, FaTrophy, FaMedal, FaAtom, FaRobot } from 'react-icons/fa';
import { scholarships, hackathons } from '@/lib/data';

const AchievementsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="inline-block font-poppins font-bold text-4xl md:text-5xl neo-brutal py-3 px-6 bg-light-secondary dark:bg-dark-secondary text-white transform rotate-1">
            Achievements
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="font-poppins font-bold text-2xl mb-6 flex items-center">
              <span className="mr-3 text-light-primary dark:text-dark-primary"><FaAward /></span>
              Scholarships & Awards
            </h3>
            
            <div className="grid gap-4">
              {scholarships.map((scholarship, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="neo-brutal bg-white dark:bg-dark-bg/90 p-5 transform hover:-rotate-1"
                >
                  <div className="flex items-start">
                    <div className="shrink-0 mr-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-light-primary dark:bg-dark-primary text-white rounded-full border-2 border-black">
                        {scholarship.icon === 'medal' && <FaMedal className="text-xl" />}
                        {scholarship.icon === 'atom' && <FaAtom className="text-xl" />}
                        {scholarship.icon === 'robot' && <FaRobot className="text-xl" />}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">{scholarship.title}</h4>
                      <p className="text-sm">{scholarship.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="font-poppins font-bold text-2xl mb-6 flex items-center">
              <span className="mr-3 text-light-primary dark:text-dark-primary"><FaTrophy /></span>
              Hackathon & Competitions
            </h3>
            
            <div className="grid gap-4">
              {hackathons.map((hackathon, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="neo-brutal bg-white dark:bg-dark-bg/90 p-5 relative overflow-hidden transform hover:rotate-1"
                >
                  <div className={`absolute -top-2 -right-2 bg-light-primary dark:bg-dark-primary text-white py-1 px-3 border-2 border-black ${index % 2 === 0 ? 'rotate-3' : '-rotate-3'}`}>
                    {hackathon.status}
                  </div>
                  <h4 className="font-bold text-xl mb-2">{hackathon.title}</h4>
                  <p className="mb-3">{hackathon.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {hackathon.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-light-bg dark:bg-dark-bg border border-black px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
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
