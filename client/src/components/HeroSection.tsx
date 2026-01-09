import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiCodeforces, SiKaggle, SiLinktree } from 'react-icons/si';
import HackerText from './HackerText';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center py-20 overflow-hidden">
      <div className="w-[85%] mx-auto px-2 md:px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 md:order-1 -mt-16 md:-mt-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-light-primary dark:bg-dark-primary transform rotate-1"></div>
              <h2 className="relative font-poppins font-extrabold text-4xl md:text-6xl lg:text-7xl bg-light-bg dark:bg-dark-bg p-4 border-4 border-black inline-block">
                <HackerText text="Hello, I am Saqlain Ahmed P" />
              </h2>
            </div>
            <p className="text-xl md:text-2xl mb-12 font-semibold">
              AI-ML Engineer | Quantum Computing Enthusiast | DevOps & Web Developer
            </p>

            {/* Laptop Frame */}
            <motion.div
              className="w-full max-w-md mx-auto md:mx-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {/* Screen Top */}
              <div className="bg-gray-800 rounded-t-xl border-4 border-gray-900 p-2 pb-0 relative shadow-2xl">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gray-600 rounded-full z-10"></div>
                {/* Screen Content */}
                <div className="bg-white dark:bg-black border-2 border-gray-700 rounded-t h-48 sm:h-56 flex items-center justify-center p-4 relative overflow-hidden group">
                  {/* Wallpaper / Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-light-primary/10 to-transparent dark:from-dark-primary/20 pointer-events-none"></div>

                  <div className="w-full h-full grid grid-cols-3 grid-rows-2 place-items-center z-10 p-2 sm:p-4 gap-y-2">
                    {[
                      { icon: <SiLeetcode />, href: "https://leetcode.com/", color: "text-yellow-500" },
                      { icon: <SiCodechef />, href: "https://www.codechef.com/", color: "text-amber-700" },
                      { icon: <SiCodeforces />, href: "https://codeforces.com/", color: "text-blue-500" },
                      { icon: <SiKaggle />, href: "https://www.kaggle.com/", color: "text-sky-500" },
                      { icon: <FaGithub />, href: "https://github.com/", color: "text-gray-900 dark:text-white" },
                      { icon: <SiLinktree />, href: "https://linktr.ee/", color: "text-green-500" },
                    ].map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-3xl sm:text-4xl ${item.color} transform transition-transform hover:scale-125 hover:drop-shadow-md`}
                        whileHover={{ y: -3 }}
                      >
                        {item.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
              {/* Laptop Base */}
              <div className="bg-gray-900 h-4 md:h-5 rounded-b-xl mx-2 shadow-xl relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-b"></div>
              </div>
            </motion.div>
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
                  src="https://media.licdn.com/dms/image/v2/D5603AQFHMZGpZFKYTw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714051172231?e=1769644800&v=beta&t=W0lfipKDDStRsn9iKeUObRVqxpUiIdoaMOMca_g4rLo"
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
