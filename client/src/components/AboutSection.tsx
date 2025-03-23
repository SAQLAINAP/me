import { motion } from 'framer-motion';
import { FaGraduationCap, FaTrophy, FaMicrophone, FaPython, FaJsSquare, FaJava, FaReact, FaBootstrap, FaNodeJs, FaGitAlt, FaGithub, FaCode, FaLinux, FaMicrosoft, FaDatabase, FaDocker, FaDownload } from 'react-icons/fa';
import { SiTailwindcss, SiCplusplus, SiKubernetes, SiAnsible, SiPenny, SiExpress, SiMongodb, SiFlask } from 'react-icons/si';
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
    switch(iconType) {
      case 'FaPython': return <FaPython className="text-2xl mb-1 text-light-primary dark:text-dark-primary" />;
      case 'FaJsSquare': return <FaJsSquare className="text-2xl mb-1 text-light-primary dark:text-dark-primary" />;
      case 'FaJava': return <FaJava className="text-2xl mb-1 text-light-primary dark:text-dark-primary" />;
      case 'SiCplusplus': return <SiCplusplus className="text-2xl mb-1 text-light-primary dark:text-dark-primary" />;
      case 'FaReact': return <FaReact className="text-2xl mb-1 text-light-primary dark:text-dark-primary" />;
      case 'FaBootstrap': return <FaBootstrap className="text-2xl mb-1 text-light-primary dark:text-dark-primary" />;
      case 'FaNodeJs': return <FaNodeJs className="text-2xl mb-1 text-light-primary dark:text-dark-primary" />;
      case 'SiTailwindcss': return <SiTailwindcss className="text-2xl mb-1 text-light-primary dark:text-dark-primary" />;
      case 'FaGitAlt': return <FaGitAlt className="text-2xl mb-1 text-light-primary dark:text-dark-primary" />;
      case 'FaGithub': return <FaGithub className="text-2xl mb-1 text-light-primary dark:text-dark-primary" />;
      case 'FaCode': return <FaCode className="text-2xl mb-1 text-light-primary dark:text-dark-primary" />;
      case 'FaLinux': return <FaLinux className="text-2xl mb-1 text-light-primary dark:text-dark-primary" />;
      case 'FaMicrosoft': return <FaMicrosoft className="text-2xl mb-1 text-light-primary dark:text-dark-primary" />;
      case 'FaDatabase': return <FaDatabase className="text-2xl mb-1 text-light-primary dark:text-dark-primary" />;
      case 'FaDocker': return <FaDocker className="text-2xl mb-1 text-light-primary dark:text-dark-primary" />;
      case 'SiKubernetes': return <SiKubernetes className="text-2xl mb-1 text-light-primary dark:text-dark-primary" />;
      case 'SiAnsible': return <SiAnsible className="text-2xl mb-1 text-light-primary dark:text-dark-primary" />;
      case 'SiPenny': return <SiPenny className="text-2xl mb-1 text-light-primary dark:text-dark-primary" />;
      case 'SiExpress': return <SiExpress className="text-2xl mb-1 text-light-primary dark:text-dark-primary" />;
      case 'SiMongodb': return <SiMongodb className="text-2xl mb-1 text-light-primary dark:text-dark-primary" />;
      case 'SiFlask': return <SiFlask className="text-2xl mb-1 text-light-primary dark:text-dark-primary" />;
      case 'text': return <span className="text-2xl mb-1 font-bold text-light-primary dark:text-dark-primary">C</span>;
      default: return null;
    }
  };

  return (
    <section id="about" className="py-20 bg-light-secondary/5 dark:bg-dark-secondary/10">
      <div className="container mx-auto px-6">
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
              <p>
                Experienced in <span className="font-semibold">building scalable applications, cloud-native technologies, and open-source contributions</span>.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="neo-brutal bg-white dark:bg-dark-bg/90 p-6 mb-8"
            >
              <h3 className="font-poppins font-bold text-2xl mb-4 border-b-4 border-black pb-2">Education</h3>
              <div className="space-y-4">
                <div className="neo-brutal-sm p-4 bg-light-bg dark:bg-dark-bg/80">
                  <p className="font-semibold mb-1">
                    <FaGraduationCap className="inline-block text-light-primary dark:text-dark-primary mr-2" />
                    <span className="font-bold">Dayananda Sagar College of Engineering, Bangalore</span>
                  </p>
                  <p className="text-sm ml-7">B.E. in Artificial Intelligence and Machine Learning (2022-2026)</p>
                  <p className="text-sm ml-7 font-medium">CGPA: 9.55/10.0</p>
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
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="neo-brutal bg-white dark:bg-dark-bg/90 p-6"
            >
              <h3 className="font-poppins font-bold text-2xl mb-4 border-b-4 border-black pb-2">Certifications & Facts</h3>
              <div className="space-y-4">
                <div className="neo-brutal-sm p-4 bg-light-bg dark:bg-dark-bg/80">
                  <p className="font-semibold">
                    <FaGraduationCap className="inline-block text-light-primary dark:text-dark-primary mr-2" />
                    <span className="font-bold">Cloud Native Training Foundation</span> - LiFT Scholar
                  </p>
                  <p className="text-sm ml-7">Kubernetes, Docker, ArgoCD, CI/CD, Containerization (2024-2025)</p>
                </div>
                <div className="neo-brutal-sm p-4 bg-light-bg dark:bg-dark-bg/80">
                  <p className="font-semibold">
                    <FaTrophy className="inline-block text-light-primary dark:text-dark-primary mr-2" />
                    <span className="font-bold">Google-IBM-QbitxQbit Quantum Computing Scholar</span>
                  </p>
                  <p className="text-sm ml-7">Quantum Algorithms, Cryptography, AI, Cirq, Qiskit, QNLP, QML (2024-2025)</p>
                </div>
                <div className="neo-brutal-sm p-4 bg-light-bg dark:bg-dark-bg/80">
                  <p className="font-semibold">
                    <FaMicrophone className="inline-block text-light-primary dark:text-dark-primary mr-2" />
                    Public Speaker & Debate Enthusiast
                  </p>
                </div>
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
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Developer Tools</h4>
                  <div className="grid grid-cols-2 gap-3">
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
                
                <div>
                  <h4 className="font-semibold mb-3">Cloud & Databases</h4>
                  <div className="grid grid-cols-2 gap-3">
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
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
