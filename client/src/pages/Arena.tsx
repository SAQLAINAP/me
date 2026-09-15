/**
 * /arena — the deep-dive project explorer.
 *
 * Two views on the same route:
 *   - /arena           → index grid of every project (with filters + search)
 *   - /arena/:id       → single-project deep-dive
 *
 * Intentionally lives on its own route so it can be linked & shared without
 * the marketing landing above it.
 */

import { useMemo, useState } from 'react';
import { Link, useRoute } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import { projects, ProjectFilter, Project } from '@/lib/data';

const FILTERS: { key: ProjectFilter; label: string }[] = [
  { key: 'all',        label: 'All' },
  { key: 'ai',         label: 'AI' },
  { key: 'web',        label: 'Web' },
  { key: 'quantum',    label: 'Quantum' },
  { key: 'opensource', label: 'Open Source' },
  { key: 'blockchain', label: 'Blockchain' },
  { key: 'misc',       label: 'Misc' },
];

export default function Arena() {
  const [matchProject, params] = useRoute<{ id: string }>('/arena/:id');
  const focused: Project | undefined = matchProject
    ? projects.find((p) => p.id === params?.id)
    : undefined;

  return (
    <div className="min-h-screen pt-16 pb-24">
      <AnimatePresence mode="wait">
        {focused ? (
          <ArenaDetail key={`detail-${focused.id}`} project={focused} />
        ) : (
          <ArenaIndex key="index" />
        )}
      </AnimatePresence>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Index view                                                                 */
/* -------------------------------------------------------------------------- */

function ArenaIndex() {
  const [filter, setFilter] = useState<ProjectFilter>('all');
  const [q, setQ] = useState('');

  const list = useMemo(() => {
    const base = filter === 'all' ? projects : projects.filter((p) => p.categories.includes(filter));
    const query = q.trim().toLowerCase();
    if (!query) return base;
    return base.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.techStack.some((t) => t.toLowerCase().includes(query)),
    );
  }, [filter, q]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-[92%] max-w-7xl mx-auto"
    >
      <div className="mb-10">
        <div className="h-eyebrow">// /arena · project deep-dives</div>
        <h1 className="h-display">
          The <span className="text-aurora">arena</span>.
        </h1>
        <p className="mt-3 text-white/60 max-w-2xl">
          Every side-project, hackathon build and open-source experiment I've kept alive
          — with the actual write-ups, tech choices, and links. Click any card to open.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest border transition-colors ${
                filter === f.key
                  ? 'bg-white text-black border-white'
                  : 'text-white/70 border-white/15 hover:border-white/40 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-64">
          <input
            type="search"
            placeholder="search stack, title, keywords…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-sm">
            <i className="fa-solid fa-magnifying-glass" />
          </span>
        </div>
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {list.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={`/arena/${project.id}`}
                className="block h-full glass-strong overflow-hidden card-hover group"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      background: `linear-gradient(135deg, ${project.accent[0]}00 30%, ${project.accent[1]}66 100%)`,
                    }}
                  />
                  <div className="absolute top-3 left-3 pill text-[10px]">
                    {project.categories.slice(0, 2).map((c) => c.toUpperCase()).join(' · ')}
                  </div>
                  <div className="absolute top-3 right-3 pill">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
                    {project.year}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display font-semibold text-xl text-white group-hover:text-white leading-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/60 line-clamp-3">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((t, i) => (
                      <span key={i} className="chip">{t}</span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="chip">+{project.techStack.length - 4}</span>
                    )}
                  </div>
                  <div className="mt-5 flex items-center justify-between text-xs">
                    <span className="text-cyan-300 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      open deep-dive <span aria-hidden>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {list.length === 0 && (
        <div className="mt-16 text-center text-white/50 font-mono text-sm">
          no matches — try clearing the filter.
        </div>
      )}
    </motion.section>
  );
}

/* -------------------------------------------------------------------------- */
/* Detail view                                                                */
/* -------------------------------------------------------------------------- */

function ArenaDetail({ project }: { project: Project }) {
  const others = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-[92%] max-w-6xl mx-auto"
    >
      <Link
        href="/arena"
        className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white mb-6"
      >
        <FaArrowLeft /> back to arena
      </Link>

      {/* HERO ------------------------------------------------------------- */}
      <div
        className="relative rounded-3xl overflow-hidden mb-10"
        style={{
          background: `linear-gradient(135deg, ${project.accent[0]}, ${project.accent[1]})`,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative p-8 md:p-14">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.categories.map((c) => (
              <span key={c} className="pill bg-white/10 border-white/20 text-white text-[10px] uppercase">
                {c}
              </span>
            ))}
            <span className="pill bg-white/10 border-white/20 text-white text-[10px] uppercase">
              {project.year}
            </span>
          </div>
          <h1 className="font-display font-semibold text-4xl md:text-6xl text-white leading-[1.05] max-w-3xl">
            {project.title}
          </h1>
          <p className="mt-3 text-white/85 text-lg md:text-xl max-w-2xl">
            {project.shortDescription}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost bg-black/40 border-white/30 text-white hover:bg-black/60"
            >
              <FaGithub /> source
            </a>
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost bg-black/40 border-white/30 text-white hover:bg-black/60"
              >
                <FaExternalLinkAlt /> live demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* CONTENT GRID ---------------------------------------------------- */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Panel title="What it is">
            <p className="text-white/80 leading-relaxed">{project.description}</p>
            {project.longDescription && (
              <p className="mt-4 text-white/70 leading-relaxed">{project.longDescription}</p>
            )}
          </Panel>

          <Panel title="Key features">
            <ul className="space-y-2 text-white/80">
              {project.features.map((f, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-cyan-300 mt-1">▸</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="Challenges & tradeoffs">
            <p className="text-white/80 leading-relaxed">{project.challenges}</p>
          </Panel>
        </div>

        <div className="space-y-6">
          <Panel title="Tech stack">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t, i) => (
                <span key={i} className="chip">{t}</span>
              ))}
            </div>
          </Panel>

          {project.metrics && project.metrics.length > 0 && (
            <Panel title="At-a-glance">
              <dl className="space-y-3">
                {project.metrics.map((m, i) => (
                  <div key={i} className="flex justify-between items-baseline border-b border-white/5 pb-2 last:border-none">
                    <dt className="text-xs font-mono uppercase text-white/50">{m.label}</dt>
                    <dd className="font-display text-lg text-white">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </Panel>
          )}

          <Panel title="Links">
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white"
              >
                <FaGithub /> {project.githubLink.replace('https://', '')}
              </a>
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white"
                >
                  <FaExternalLinkAlt /> {project.demoLink.replace('https://', '')}
                </a>
              )}
            </div>
          </Panel>
        </div>
      </div>

      {/* MORE FROM ARENA ------------------------------------------------- */}
      <div className="mt-16">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-2xl text-white">More from the arena</h3>
          <Link href="/arena" className="text-cyan-300 text-sm hover:underline">see all →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {others.map((p) => (
            <Link
              key={p.id}
              href={`/arena/${p.id}`}
              className="glass-strong card-hover overflow-hidden block"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <div className="text-white font-display font-medium">{p.title}</div>
                <div className="text-xs text-white/50 mt-1">{p.shortDescription}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass-strong p-6">
      <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-3">{title}</div>
      {children}
    </div>
  );
}
