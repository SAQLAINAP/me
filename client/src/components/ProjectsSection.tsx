import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, ProjectFilter } from '@/lib/data';
import ProjectModal from './ui/ProjectModal';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleFilterClick = (filter: ProjectFilter) => {
    setActiveFilter(filter);
  };

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));

  const openProjectModal = (projectId: string) => {
    setSelectedProject(projectId);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-light-secondary/5 dark:bg-dark-secondary/10">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="inline-block font-poppins font-bold text-4xl md:text-5xl neo-brutal py-3 px-6 bg-light-primary dark:bg-dark-primary text-white transform -rotate-1">
            Projects
          </h2>
        </motion.div>
        
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button 
              className={`neo-brutal px-4 py-2 bg-light-bg dark:bg-dark-bg font-medium ${activeFilter === 'all' ? 'bg-light-primary dark:bg-dark-primary text-white' : ''}`}
              onClick={() => handleFilterClick('all')}
              whileHover={{ y: -2 }}
              whileTap={{ y: 2 }}
            >
              All Projects
            </motion.button>
            <motion.button 
              className={`neo-brutal px-4 py-2 bg-light-bg dark:bg-dark-bg font-medium ${activeFilter === 'ai' ? 'bg-light-primary dark:bg-dark-primary text-white' : ''}`}
              onClick={() => handleFilterClick('ai')}
              whileHover={{ y: -2 }}
              whileTap={{ y: 2 }}
            >
              AI
            </motion.button>
            <motion.button 
              className={`neo-brutal px-4 py-2 bg-light-bg dark:bg-dark-bg font-medium ${activeFilter === 'web' ? 'bg-light-primary dark:bg-dark-primary text-white' : ''}`}
              onClick={() => handleFilterClick('web')}
              whileHover={{ y: -2 }}
              whileTap={{ y: 2 }}
            >
              Web
            </motion.button>
            <motion.button 
              className={`neo-brutal px-4 py-2 bg-light-bg dark:bg-dark-bg font-medium ${activeFilter === 'quantum' ? 'bg-light-primary dark:bg-dark-primary text-white' : ''}`}
              onClick={() => handleFilterClick('quantum')}
              whileHover={{ y: -2 }}
              whileTap={{ y: 2 }}
            >
              Quantum Computing
            </motion.button>
            <motion.button 
              className={`neo-brutal px-4 py-2 bg-light-bg dark:bg-dark-bg font-medium ${activeFilter === 'opensource' ? 'bg-light-primary dark:bg-dark-primary text-white' : ''}`}
              onClick={() => handleFilterClick('opensource')}
              whileHover={{ y: -2 }}
              whileTap={{ y: 2 }}
            >
              Open Source
            </motion.button>
          </div>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <div className="neo-brutal h-full bg-white dark:bg-dark-bg/90 overflow-hidden group">
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-light-primary dark:bg-dark-primary text-white font-bold py-1 px-3 border-2 border-black shadow-brutal-sm">
                        {project.year}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-poppins font-bold text-2xl">{project.title}</h3>
                      <div className="flex gap-2">
                        {project.categories.slice(0, 2).map((category, index) => (
                          <span key={index} className="text-sm bg-light-bg dark:bg-dark-bg border-2 border-black px-2 py-1">
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <p className="mb-4">
                      <span className="font-semibold">{project.shortDescription}</span>
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, index) => (
                          <span key={index} className="text-sm bg-light-secondary/20 dark:bg-dark-secondary/20 px-2 py-1 border border-black">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <motion.button 
                        className="neo-brutal-sm bg-light-primary dark:bg-dark-primary text-white font-bold py-2 px-4" 
                        onClick={() => openProjectModal(project.id)}
                        whileHover={{ y: -2 }}
                        whileTap={{ y: 2 }}
                      >
                        View Details
                      </motion.button>
                      <a 
                        href={project.githubLink} 
                        className="text-light-primary dark:text-dark-primary hover:underline font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github mr-1"></i> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal
        isOpen={selectedProject !== null}
        projectId={selectedProject}
        onClose={closeProjectModal}
      />
    </section>
  );
};

export default ProjectsSection;
