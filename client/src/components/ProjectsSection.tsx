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

// Cycling color-block tints for cards, à la Montgomery `.proj--lime` etc.
const TINTS = [
  'card-proj--lime',
  'card-proj--mint',
  'card-proj--gold',
  'card-proj--olive',
  'card-proj--cream',
  'card-proj--ivory',
] as const;

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-24 relative bg-ivory">
      <div className="wrap-lg">
        <div className="section-head">
          <span className="section-head__idx">// 03</span>
          <h2 className="section-head__title">
            Selected <span className="mk mk--lime">work</span>
          </h2>
          <span className="section-head__note">{projects.length} projects · scroll or filter</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <p className="text-ink/70 max-w-xl">
            Highlights across AI, quantum, web, blockchain and open source. For
            the full write-up on any project, head to{' '}
            <Link href="/arena" className="underline decoration-ink underline-offset-4 hover:text-ink font-bold">
              the arena
            </Link>.
          </p>
          <Link href="/arena" className="pill pill--lime pill--big self-start md:self-auto">
            Enter the arena <span className="arr">→</span>
          </Link>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={activeFilter === f.key ? 'tag tag--lime' : 'tag'}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project, i) => {
              const tint = TINTS[i % TINTS.length];
              const isDark = tint === 'card-proj--olive';
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className={`relative ${tint} card-proj`}
                >
                  {/* Stretched clickable link */}
                  <Link
                    href={`/arena/${project.id}`}
                    aria-label={`Open ${project.title} in the arena`}
                    className="absolute inset-0 z-10"
                  />

                  <div className="relative z-0">
                    <div className="flex items-start justify-between gap-3 mb-6">
                      <span className={`font-mono text-xs uppercase tracking-widest ${isDark ? 'text-ivory/70' : 'text-ink/70'}`}>
                        № {String(i + 1).padStart(2, '0')} · {project.year}
                      </span>
                      <div className="flex flex-wrap gap-1 justify-end">
                        {project.categories.slice(0, 2).map((cat, j) => (
                          <span
                            key={j}
                            className={`text-[10px] font-mono uppercase tracking-wider px-2 py-1 border-2 rounded-full ${
                              isDark ? 'border-ivory text-ivory' : 'border-ink text-ink'
                            }`}
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h3 className={`font-condensed text-4xl md:text-5xl leading-[0.9] uppercase ${isDark ? 'text-ivory' : 'text-ink'}`}>
                      {project.title}
                    </h3>
                    <p className={`mt-4 text-sm ${isDark ? 'text-ivory/80' : 'text-ink/80'}`}>
                      {project.shortDescription}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((t, j) => (
                        <span
                          key={j}
                          className={`text-[10px] font-mono uppercase tracking-wider px-2 py-1 border-2 rounded-full ${
                            isDark ? 'border-ivory/60 text-ivory/80' : 'border-ink/60 text-ink/80'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={`mt-6 flex items-center justify-between text-xs font-mono uppercase tracking-widest ${isDark ? 'text-ivory' : 'text-ink'}`}>
                    <span className="inline-flex items-center gap-1">
                      open in arena <span aria-hidden>→</span>
                    </span>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative z-20 inline-flex items-center gap-1 hover:underline ${isDark ? 'text-ivory' : 'text-ink'}`}
                    >
                      <i className="fab fa-github" /> repo
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
