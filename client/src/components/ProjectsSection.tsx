import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { projects, ProjectFilter } from '@/lib/data';

const FILTERS: { key: ProjectFilter; label: string }[] = [
  { key: 'all',        label: 'All' },
  { key: 'ai',         label: 'AI' },
  { key: 'web',        label: 'Web' },
  { key: 'quantum',    label: 'Quantum' },
  { key: 'opensource', label: 'Open Source' },
  { key: 'blockchain', label: 'Blockchain' },
  { key: 'misc',       label: 'Misc' },
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-24 relative">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="h-eyebrow">// projects</div>
            <h2 className="h-display">
              Selected <span className="text-aurora">work</span>.
            </h2>
            <p className="mt-3 text-white/60 max-w-xl">
              Highlights across AI, quantum, web, blockchain and open source. For the
              full write-up on any project, head to{' '}
              <Link href="/arena" className="text-cyan-300 hover:underline">the arena</Link>.
            </p>
          </div>
          <Link href="/arena" className="btn-neon self-start md:self-auto">
            Enter the arena <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest border transition-colors ${
                activeFilter === f.key
                  ? 'bg-white text-black border-white'
                  : 'text-white/70 border-white/15 hover:border-white/40 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <article className="relative h-full glass-strong overflow-hidden card-hover group">
                  {/* Stretched link — makes the whole card clickable while
                      keeping the github link below actionable via z-index. */}
                  <Link
                    href={`/arena/${project.id}`}
                    aria-label={`Open ${project.title} in the arena`}
                    className="absolute inset-0 z-10"
                  />

                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-3 right-3 pill">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
                      {project.year}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display font-semibold text-xl text-white leading-tight">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-1 justify-end">
                        {project.categories.slice(0, 2).map((cat, i) => (
                          <span key={i} className="chip-cyan">{cat}</span>
                        ))}
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-white/60">{project.shortDescription}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((t, i) => (
                        <span key={i} className="chip">{t}</span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between text-xs">
                      <span className="text-cyan-300 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        open in arena <span aria-hidden>→</span>
                      </span>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-20 text-white/60 hover:text-white inline-flex items-center gap-1"
                      >
                        <i className="fab fa-github" /> repo
                      </a>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
