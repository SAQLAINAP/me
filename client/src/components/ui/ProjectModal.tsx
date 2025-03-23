import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/lib/data';

interface ProjectModalProps {
  isOpen: boolean;
  projectId: string | null;
  onClose: () => void;
}

const ProjectModal = ({ isOpen, projectId, onClose }: ProjectModalProps) => {
  const project = projectId ? projects.find(p => p.id === projectId) : null;

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Close modal when clicking outside
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center" 
          onClick={handleBackdropClick}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black bg-opacity-75"
          ></motion.div>
          
          <motion.div 
            className="relative w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto bg-light-bg dark:bg-dark-bg neo-brutal z-10"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <div className="p-6">
              <button 
                onClick={onClose} 
                className="absolute top-4 right-4 neo-brutal-sm bg-light-bg dark:bg-dark-bg p-2"
                aria-label="Close modal"
              >
                <i className="fas fa-times"></i>
              </button>
              
              <div className="pt-6">
                <div className="relative mb-6 overflow-hidden h-64 neo-brutal">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-light-primary dark:bg-dark-primary text-white font-bold py-1 px-3 border-2 border-black shadow-brutal-sm">
                      {project.year}
                    </span>
                  </div>
                </div>
                
                <h3 className="font-poppins font-bold text-3xl mb-4">{project.title}</h3>
                
                <div className="mb-6">
                  <h4 className="font-bold text-xl mb-2">Overview</h4>
                  <p>{project.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-xl mb-2">Challenges & Approach</h4>
                  <p>{project.challenges}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-xl mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="mb-2">
                        <i className="fas fa-check-circle text-light-primary dark:text-dark-primary mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-xl mb-2">Technology Stack</h4>
                  <div className="flex flex-wrap">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="inline-block bg-light-secondary/20 dark:bg-dark-secondary/20 border border-black px-3 py-1 mr-2 mb-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 flex gap-4">
                  <a 
                    href={project.githubLink} 
                    className="neo-brutal-sm bg-light-primary dark:bg-dark-primary text-white font-bold py-2 px-6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github mr-2"></i> View Code
                  </a>
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      className="neo-brutal-sm bg-light-secondary dark:bg-dark-secondary text-white font-bold py-2 px-6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt mr-2"></i> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
