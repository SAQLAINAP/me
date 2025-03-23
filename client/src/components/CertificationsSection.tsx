import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { certifications } from '../lib/data';

const CertificationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const nextCertificate = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCertificate = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="certifications" className="py-20 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="font-poppins text-4xl md:text-5xl font-bold mb-4 neo-brutal-shadow-text"
          >
            My Certifications
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-2 bg-light-primary dark:bg-dark-primary mx-auto mb-6"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="relative neo-brutal bg-white dark:bg-dark-bg/90 p-8"
          >
            <div className="grid md:grid-cols-2 gap-6 items-center">
              {/* Left side - Certificate mockup */}
              <div className="neo-brutal-sm bg-light-bg dark:bg-dark-bg/80 p-6 relative transform rotate-[-2deg]">
                <div className="bg-white p-6 border-2 border-black">
                  <div className="text-center mb-4">
                    <h4 className="text-sm text-gray-500 mb-1">Certificate of Completion</h4>
                    <h3 className="text-xl font-bold">{certifications[currentIndex].title}</h3>
                  </div>
                  <div className="text-center mb-4">
                    <p className="font-medium">awarded to</p>
                    <p className="text-xl font-bold">Saqlain Ahmed P</p>
                  </div>
                  <div className="border-t-2 border-dashed border-gray-300 my-4 pt-4 text-center">
                    <p className="text-sm">
                      {certifications[currentIndex].period}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Issued by {certifications[currentIndex].issuer}
                    </p>
                    <p className="font-bold text-sm mt-1">
                      {certifications[currentIndex].achievement}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side - Certificate information */}
              <div>
                <p className="text-gray-500 mb-1">{certifications[currentIndex].period}</p>
                <h3 className="text-2xl font-bold mb-2">{certifications[currentIndex].title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Issued by <span className="font-semibold">{certifications[currentIndex].issuer}</span>
                </p>
                <p className="mb-4">
                  {certifications[currentIndex].description}
                </p>
                <p className="font-bold flex items-center">
                  <span className="neo-brutal-sm bg-light-primary dark:bg-dark-primary text-white px-2 py-1 text-sm mr-2">
                    {certifications[currentIndex].achievement}
                  </span>
                </p>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevCertificate}
                className="neo-brutal-sm bg-light-bg dark:bg-dark-bg/80 p-2 hover:translate-y-[-2px] transition-transform"
                aria-label="Previous certificate"
              >
                <FaArrowLeft />
              </button>
              <div className="flex space-x-2">
                {certifications.map((_, index) => (
                  <div 
                    key={index} 
                    className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-light-primary dark:bg-dark-primary' : 'bg-gray-300 dark:bg-gray-700'}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextCertificate}
                className="neo-brutal-sm bg-light-bg dark:bg-dark-bg/80 p-2 hover:translate-y-[-2px] transition-transform"
                aria-label="Next certificate"
              >
                <FaArrowRight />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;