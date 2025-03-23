import { motion } from 'framer-motion';
import useTypewriterEffect from '@/hooks/useTypewriterEffect';

const HeroSection = () => {
  const typedText = useTypewriterEffect("Hey, I'm Saqlain Ahmed P.", 100);

  return (
    <section id="home" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-light-primary dark:bg-dark-primary transform rotate-1"></div>
              <h2 className="relative font-poppins font-extrabold text-5xl md:text-7xl bg-light-bg dark:bg-dark-bg p-2 border-4 border-black">
                {typedText}
                <span className="typing-cursor">|</span>
              </h2>
            </div>
            <p className="text-xl md:text-2xl mb-8 font-semibold">
              AI-ML Engineer | Quantum Computing Enthusiast | DevOps & Web Developer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <motion.a 
                href="/resume.pdf" 
                className="neo-brutal bg-light-primary dark:bg-dark-primary text-white font-bold py-4 px-8 text-center"
                whileHover={{ y: -5, x: -5, boxShadow: "8px 8px 0px 0px #000000" }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <i className="fas fa-file-alt mr-2"></i> View Resume
              </motion.a>
              <motion.a 
                href="#projects" 
                className="neo-brutal bg-light-secondary dark:bg-dark-secondary text-white font-bold py-4 px-8 text-center"
                whileHover={{ y: -5, x: -5, boxShadow: "8px 8px 0px 0px #000000" }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <i className="fas fa-rocket mr-2"></i> Check My Projects
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div 
                className="neo-brutal overflow-hidden spiderman-hero-image"
                style={{ transform: 'rotate(2deg)' }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 15, 
                  boxShadow: "0 0 25px rgba(250, 75, 19, 0.8)" 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <img 
                  src="https://media.licdn.com/dms/image/v2/D5603AQFHMZGpZFKYTw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714051172231?e=1748476800&v=beta&t=Co0F3oGyRSU5Rjt-P1U4dvFEQ_LA9zY81UzTKBMjkqE" 
                  alt="Saqlain Ahmed portrait" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-light-primary dark:bg-dark-primary neo-brutal p-4 transform -rotate-3 hover:scale-105 transition-transform"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 15px rgba(250, 75, 19, 0.6)" 
                }}
              >
                <p className="font-bold text-white">AI-ML Engineer</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
