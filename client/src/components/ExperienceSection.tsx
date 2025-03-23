import { motion } from 'framer-motion';
import { experiences } from '@/lib/data';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="inline-block font-poppins font-bold text-4xl md:text-5xl neo-brutal py-3 px-6 bg-light-secondary dark:bg-dark-secondary text-white transform rotate-1">
            Experience
          </h2>
        </motion.div>
        
        <div className="relative pl-12 md:pl-16 max-w-3xl mx-auto">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-black"></div>
          
          {experiences.map((experience, index) => (
            <motion.div 
              key={index}
              className={`timeline-item relative mb-16 ml-6 ${index === experiences.length - 1 ? '' : 'mb-16'}`}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="neo-brutal bg-white dark:bg-dark-bg/90 p-6">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <h3 className="font-poppins font-bold text-xl">{experience.position}</h3>
                  <div className="mt-2 md:mt-0 neo-brutal-sm inline-block bg-light-primary dark:bg-dark-primary text-white px-3 py-1">
                    {experience.period}
                  </div>
                </div>
                
                <h4 className="font-semibold mb-3">{experience.company}</h4>
                
                <ul className="list-disc list-inside space-y-2">
                  {experience.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} dangerouslySetInnerHTML={{ __html: responsibility }}></li>
                  ))}
                </ul>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="text-sm bg-light-bg dark:bg-dark-bg border-2 border-black px-2 py-1">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
