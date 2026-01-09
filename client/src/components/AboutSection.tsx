import { motion } from 'framer-motion';
import { FaGraduationCap, FaTrophy, FaMicrophone, FaPython, FaJsSquare, FaJava, FaReact, FaBootstrap, FaNodeJs, FaGitAlt, FaGithub, FaCode, FaLinux, FaMicrosoft, FaDatabase, FaDocker, FaDownload, FaGamepad, FaPlane, FaMusic, FaFilm, FaUtensils, FaBookOpen, FaCar, FaUsers, FaRunning, FaTableTennis, FaDice, FaTools, FaYoutube, FaMeetup, FaCalendarDay } from 'react-icons/fa';
import { SiTailwindcss, SiCplusplus, SiKubernetes, SiAnsible, SiExpress, SiMongodb, SiFlask, SiFastapi, SiNodedotjs, SiNextdotjs, SiPostman, SiOpenai, SiGoogle, SiN8N, SiFirebase, SiMake, SiUdemy, SiCoursera, SiAnthropic } from 'react-icons/si';
import {
  languages,
  frameworks,
  devTools,
  cloudAndDb
} from '@/lib/data';

const AboutSection = () => {
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

  // Helper function to render the appropriate icon
  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'FaPython': return <FaPython className="text-2xl mb-1 text-light-primary dark:text-dark-icon" />;
      case 'FaJsSquare': return <FaJsSquare className="text-2xl mb-1 text-light-primary dark:text-dark-icon" />;
      case 'FaJava': return <FaJava className="text-2xl mb-1 text-light-primary dark:text-dark-icon" />;
      case 'SiCplusplus': return <SiCplusplus className="text-2xl mb-1 text-light-primary dark:text-dark-icon" />;
      case 'FaReact': return <FaReact className="text-2xl mb-1 text-light-primary dark:text-dark-icon" />;
      case 'FaBootstrap': return <FaBootstrap className="text-2xl mb-1 text-light-primary dark:text-dark-icon" />;
      case 'FaNodeJs': return <FaNodeJs className="text-2xl mb-1 text-light-primary dark:text-dark-icon" />;
      case 'SiTailwindcss': return <SiTailwindcss className="text-2xl mb-1 text-light-primary dark:text-dark-icon" />;
      case 'FaGitAlt': return <FaGitAlt className="text-2xl mb-1 text-light-primary dark:text-dark-icon" />;
      case 'FaGithub': return <FaGithub className="text-2xl mb-1 text-light-primary dark:text-dark-icon" />;
      case 'FaCode': return <FaCode className="text-2xl mb-1 text-light-primary dark:text-dark-icon" />;
      case 'FaLinux': return <FaLinux className="text-2xl mb-1 text-light-primary dark:text-dark-icon" />;
      case 'FaMicrosoft': return <FaMicrosoft className="text-2xl mb-1 text-light-primary dark:text-dark-icon" />;
      case 'FaDatabase': return <FaDatabase className="text-2xl mb-1 text-light-primary dark:text-dark-icon" />;
      case 'FaDocker': return <FaDocker className="text-2xl mb-1 text-light-primary dark:text-dark-icon" />;
      case 'SiKubernetes': return <SiKubernetes className="text-2xl mb-1 text-light-primary dark:text-dark-icon" />;
      case 'SiAnsible': return <SiAnsible className="text-2xl mb-1 text-light-primary dark:text-dark-icon" />;
      case 'SiExpress': return <SiExpress className="text-2xl mb-1 text-light-primary dark:text-dark-icon" />;
      case 'SiMongodb': return <SiMongodb className="text-2xl mb-1 text-light-primary dark:text-dark-icon" />;
      case 'SiFlask': return <SiFlask className="text-2xl mb-1 text-light-primary dark:text-dark-icon" />;
      case 'SiFastapi': return <SiFastapi className="text-2xl mb-1 text-light-primary dark:text-dark-icon" />;
      case 'SiNodedotjs': return <SiNodedotjs className="text-2xl mb-1 text-light-primary dark:text-dark-icon" />;
      case 'SiNextdotjs': return <SiNextdotjs className="text-2xl mb-1 text-light-primary dark:text-dark-icon" />;
      case 'SiPostman': return <SiPostman className="text-2xl mb-1 text-light-primary dark:text-dark-icon" />;
      case 'SiOpenai': return <SiOpenai className="text-2xl mb-1 text-light-primary dark:text-dark-icon" />;
      case 'SiGoogle': return <SiGoogle className="text-2xl mb-1 text-light-primary dark:text-dark-icon" />;
      case 'SiN8N': return <SiN8N className="text-2xl mb-1 text-light-primary dark:text-dark-icon" />;
      case 'SiFirebase': return <SiFirebase className="text-2xl mb-1 text-light-primary dark:text-dark-icon" />;
      case 'SiMake': return <SiMake className="text-2xl mb-1 text-light-primary dark:text-dark-icon" />;
      case 'FaTools': return <FaTools className="text-2xl mb-1 text-light-primary dark:text-dark-icon" />;
      case 'text': return <span className="text-2xl mb-1 font-bold text-light-primary dark:text-dark-icon">C</span>;
      default: return null;
    }
  };

  return (
    <section id="about" className="py-20 bg-light-secondary/5 dark:bg-dark-secondary/10">
      <div className="w-[85%] mx-auto px-2 md:px-4">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="inline-block font-poppins font-bold text-4xl md:text-5xl neo-brutal py-3 px-6 bg-light-primary dark:bg-dark-primary text-white transform -rotate-1">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="neo-brutal bg-white dark:bg-dark-bg/90 p-6 mb-8"
            >
              <h3 className="font-poppins font-bold text-2xl mb-4 border-b-4 border-black pb-2">Bio</h3>
              <p className="mb-4">
                Enthusiastic AI-ML Engineer with a passion for <span className="font-semibold">Quantum Computing, DevOps, and Web Development</span>.
              </p>
              <p className="mb-4">
                Experienced in <span className="font-semibold">building scalable applications, cloud-native technologies, and open-source contributions</span>.
              </p>
              <p className="mb-4">
                A natural leader with a proven track record of <span className="font-semibold">guiding teams to deliver complex projects effectively</span>.
              </p>
              <p>
                Obsessed with details and committed to <span className="font-semibold">delivering products with absolute perfection and user-centric design</span>.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="neo-brutal bg-white dark:bg-dark-bg/90 p-6 mb-8"
            >
              <h3 className="font-poppins font-bold text-2xl mb-4 border-b-4 border-black pb-2">Education</h3>
              <div className="space-y-4">
                <div className="neo-brutal-sm p-4 bg-light-bg dark:bg-dark-bg/80 flex justify-between items-center gap-4">
                  <div>
                    <p className="font-semibold mb-1">
                      <FaGraduationCap className="inline-block text-light-primary dark:text-dark-icon mr-2" />
                      <span className="font-bold">Dayananda Sagar College of Engineering, Bangalore</span>
                    </p>
                    <p className="text-sm ml-7">B.E. in Artificial Intelligence and Machine Learning (2022-2026)</p>
                    <p className="text-sm ml-7 font-medium">CGPA: 9.55/10.0</p>
                  </div>
                  <img src="https://upload.wikimedia.org/wikipedia/en/2/23/Dayananda_Sagar_College_of_Engineering_logo.png" alt="DSCE Logo" className="w-16 h-16 object-contain" />
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="/Saqlain-resume-25.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center neo-brutal-sm py-2 px-4 bg-light-primary dark:bg-dark-primary text-white text-sm font-medium transition-transform hover:-translate-y-1"
                >
                  <FaDownload className="mr-2" />
                  Download Resume
                </a>
              </div>

              <div className="mt-8">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { name: 'YouTube', icon: <FaYoutube className="text-red-600" /> },
                    { name: 'Udemy', icon: <SiUdemy className="text-purple-600" /> },
                    { name: 'Coursera', icon: <SiCoursera className="text-blue-600" /> },
                    { name: 'Meetup', icon: <FaMeetup className="text-pink-500" /> },
                    { name: 'ChatGPT', icon: <SiOpenai className="text-teal-600" /> },
                    { name: 'Claude', icon: <SiAnthropic className="text-orange-600" /> },
                  ].map((platform, index) => (
                    <div key={index} className="neo-brutal-sm p-3 flex items-center justify-center bg-light-bg dark:bg-dark-bg/80 hover:scale-105 transition-transform" title={platform.name}>
                      <div className="text-3xl">{platform.icon}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="neo-brutal bg-white dark:bg-dark-bg/90 p-6"
            >
              <h3 className="font-poppins font-bold text-2xl mb-4 border-b-4 border-black pb-2">Hobbies & Interests</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: <FaGamepad />, label: 'Gaming' },
                  { icon: <FaPlane />, label: 'Travelling' },
                  { icon: <FaMusic />, label: 'Music' },
                  { icon: <FaFilm />, label: 'Movies' },
                  { icon: <FaUtensils />, label: 'Binge Eating' },
                  { icon: <FaBookOpen />, label: 'Storytelling' },
                  { icon: <FaMicrophone />, label: 'Public Speaking' },
                  { icon: <FaCar />, label: 'Driving' },
                  { icon: <FaUsers />, label: 'Events & Confs' },
                  { icon: <FaRunning />, label: 'Cricket' },
                  { icon: <FaTableTennis />, label: 'Pickleball' },
                  { icon: <FaDice />, label: 'Card Games' },
                ].map((hobby, index) => (
                  <div key={index} className="flex flex-col items-center justify-center text-center p-2 neo-brutal-sm bg-light-bg dark:bg-dark-bg/80 hover:scale-105 transition-transform">
                    <div className="text-2xl mb-2 text-light-primary dark:text-dark-icon">
                      {hobby.icon}
                    </div>
                    <span className="text-xs font-bold leading-tight">{hobby.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="neo-brutal bg-white dark:bg-dark-bg/90 p-6"
            >
              <h3 className="font-poppins font-bold text-2xl mb-4 border-b-4 border-black pb-2">Tech Stack & Tools</h3>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Languages</h4>
                <div className="grid grid-cols-3 gap-3">
                  {languages.map((lang, index) => (
                    <div
                      key={index}
                      className="neo-brutal-sm flex flex-col items-center justify-center py-3 px-2 bg-light-bg dark:bg-dark-bg/80"
                    >
                      {renderIcon(lang.iconType)}
                      <span className="text-sm font-medium">{lang.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Frameworks & Libraries</h4>
                <div className="grid grid-cols-3 gap-3">
                  {frameworks.map((framework, index) => (
                    <div
                      key={index}
                      className="neo-brutal-sm flex flex-col items-center justify-center py-3 px-2 bg-light-bg dark:bg-dark-bg/80"
                    >
                      {renderIcon(framework.iconType)}
                      <span className="text-sm font-medium">{framework.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Developer Tools</h4>
                <div className="grid grid-cols-3 gap-3">
                  {devTools.map((tool, index) => (
                    <div
                      key={index}
                      className="neo-brutal-sm flex flex-col items-center justify-center py-3 px-2 bg-light-bg dark:bg-dark-bg/80"
                    >
                      {renderIcon(tool.iconType)}
                      <span className="text-sm font-medium">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Cloud & Databases</h4>
                <div className="grid grid-cols-3 gap-3">
                  {cloudAndDb.map((item, index) => (
                    <div
                      key={index}
                      className="neo-brutal-sm flex flex-col items-center justify-center py-3 px-2 bg-light-bg dark:bg-dark-bg/80"
                    >
                      {renderIcon(item.iconType)}
                      <span className="text-sm font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
