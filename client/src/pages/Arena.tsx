/**
 * /arena — the deep-dive project explorer.
 *
 * Two views on the same route:
 *   - /arena           → index grid of every project (color-blocked cards)
 *   - /arena/:id       → single-project deep-dive
 *
 * Design is Montgomery-flavoured brutalism: color blocks, condensed Oswald,
 * dashed sage rules, hard-shadow hover pills.
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

// Cycled color-block card tints.
const TINTS = [
  'card-proj--lime',
  'card-proj--mint',
  'card-proj--gold',
  'card-proj--olive',
  'card-proj--cream',
  'card-proj--ivory',
] as const;

export default function Arena() {
  const [matchProject, params] = useRoute<{ id: string }>('/arena/:id');
  const focused: Project | undefined = matchProject
    ? projects.find((p) => p.id === params?.id)
    : undefined;

  return (
    <div className="min-h-screen pt-14 pb-24 bg-ivory">
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
      className="wrap-lg"
    >
      <div className="section-head">
        <span className="section-head__idx">// /arena</span>
        <h1 className="section-head__title">
          The <span className="mk mk--lime">arena</span>
        </h1>
        <span className="section-head__note">{projects.length} deep-dives · filter · search</span>
      </div>
      <p className="text-ink/70 max-w-2xl mb-10">
        Every side-project, hackathon build and open-source experiment I've kept alive
        — with the actual write-ups, tech choices, and links. Click any card to open.
      </p>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={filter === f.key ? 'tag tag--lime' : 'tag'}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <input
            type="search"
            placeholder="SEARCH STACK, TITLE, KEYWORDS…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-full pl-10 pr-3 py-3 rounded-full bg-ivory border-2 border-ink text-xs font-mono uppercase tracking-widest text-ink placeholder-ink/40 focus:outline-none focus:shadow-brutal-sm transition"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/50 text-sm">
            <i className="fa-solid fa-magnifying-glass" />
          </span>
        </div>
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {list.map((project, idx) => {
            const tint = TINTS[idx % TINTS.length];
            const isDark = tint === 'card-proj--olive';
            const num = String(idx + 1).padStart(2, '0');
            return (
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
                  className={`block h-full relative card-proj ${tint} group overflow-hidden`}
                >
                  {/* Giant faded index number in the corner */}
                  <span
                    aria-hidden
                    className={`absolute -top-6 -right-3 font-condensed font-bold text-[9rem] leading-none pointer-events-none select-none ${isDark ? 'text-ivory/15' : 'text-ink/10'}`}
                  >
                    {num}
                  </span>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-3 mb-6">
                      <span className={`font-mono text-[11px] uppercase tracking-widest ${isDark ? 'text-ivory/80' : 'text-ink/70'}`}>
                        №&nbsp;{num} · {project.year}
                      </span>
                      <div className="flex flex-wrap gap-1 justify-end">
                        {project.categories.slice(0, 2).map((c) => (
                          <span
                            key={c}
                            className={`text-[10px] font-mono uppercase tracking-wider px-2 py-1 border-2 rounded-full ${
                              isDark ? 'border-ivory text-ivory' : 'border-ink text-ink'
                            }`}
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h3 className={`font-condensed uppercase leading-[0.9] tracking-tight text-4xl md:text-5xl ${isDark ? 'text-ivory' : 'text-ink'}`}>
                      {project.title}
                    </h3>
                    <p className={`mt-4 text-sm line-clamp-3 ${isDark ? 'text-ivory/80' : 'text-ink/80'}`}>
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((t, i) => (
                        <span
                          key={i}
                          className={`text-[10px] font-mono uppercase tracking-wider px-2 py-1 border-2 rounded-full ${
                            isDark ? 'border-ivory/60 text-ivory/80' : 'border-ink/60 text-ink/80'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-1 border-2 rounded-full ${isDark ? 'border-ivory/60 text-ivory/80' : 'border-ink/60 text-ink/80'}`}>
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={`mt-6 pt-4 border-t-2 border-dashed flex items-center justify-between text-xs font-mono uppercase tracking-widest ${isDark ? 'border-ivory/40 text-ivory' : 'border-ink/30 text-ink'}`}>
                    <span>open deep-dive</span>
                    <span aria-hidden className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {list.length === 0 && (
        <div className="mt-16 text-center text-ink/50 font-mono text-sm uppercase tracking-widest">
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
  const heroIdx = projects.findIndex((p) => p.id === project.id);
  const tint = TINTS[heroIdx % TINTS.length];
  const isDark = tint === 'card-proj--olive';

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="wrap-lg"
    >
      <Link
        href="/arena"
        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink/70 hover:text-ink mb-6"
      >
        <FaArrowLeft /> back to arena
      </Link>

      {/* HERO ------------------------------------------------------------- */}
      <div className={`card-proj ${tint} relative overflow-hidden mb-10 !min-h-0 !p-8 md:!p-14`}>
        <div className="relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.categories.map((c) => (
              <span
                key={c}
                className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 border-2 rounded-full ${isDark ? 'border-ivory text-ivory' : 'border-ink text-ink'}`}
              >
                {c}
              </span>
            ))}
            <span className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 border-2 rounded-full ${isDark ? 'border-ivory text-ivory' : 'border-ink text-ink'}`}>
              {project.year}
            </span>
          </div>
          <h1 className={`font-condensed font-bold uppercase leading-[0.9] tracking-tight text-5xl md:text-7xl lg:text-8xl max-w-4xl ${isDark ? 'text-ivory' : 'text-ink'}`}>
            {project.title}
          </h1>
          <p className={`mt-4 text-lg md:text-xl max-w-2xl ${isDark ? 'text-ivory/85' : 'text-ink/85'}`}>
            {project.shortDescription}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="pill pill--ink"
            >
              <FaGithub /> source
            </a>
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="pill pill--ghost"
                style={isDark ? { borderColor: 'var(--ivory)', color: 'var(--ivory)' } : undefined}
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
            <p className="text-ink/80 leading-relaxed">{project.description}</p>
            {project.longDescription && (
              <p className="mt-4 text-ink/70 leading-relaxed">{project.longDescription}</p>
            )}
          </Panel>

          <Panel title="Key features">
            <ul className="space-y-2 text-ink/85">
              {project.features.map((f, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-ink mt-1">▸</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="Challenges & tradeoffs">
            <p className="text-ink/80 leading-relaxed">{project.challenges}</p>
          </Panel>
        </div>

        <div className="space-y-6">
          <Panel title="Tech stack">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t, i) => (
                <span key={i} className="tag">{t}</span>
              ))}
            </div>
          </Panel>

          {project.metrics && project.metrics.length > 0 && (
            <Panel title="At-a-glance">
              <dl className="space-y-3">
                {project.metrics.map((m, i) => (
                  <div key={i} className="flex justify-between items-baseline border-b-2 border-dashed border-sage pb-2 last:border-none">
                    <dt className="text-xs font-mono uppercase text-ink/60">{m.label}</dt>
                    <dd className="font-condensed text-2xl text-ink">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </Panel>
          )}

          <Panel title="Links">
            <div className="flex flex-col gap-2 text-sm font-mono">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink/80 hover:text-ink"
              >
                <FaGithub /> {project.githubLink.replace('https://', '')}
              </a>
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-ink/80 hover:text-ink"
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
          <h3 className="font-condensed text-3xl text-ink uppercase">More from the arena</h3>
          <Link href="/arena" className="text-xs font-mono uppercase tracking-widest text-ink hover:underline">see all →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {others.map((p, i) => {
            const ot = TINTS[(heroIdx + i + 1) % TINTS.length];
            const otDark = ot === 'card-proj--olive';
            return (
              <Link
                key={p.id}
                href={`/arena/${p.id}`}
                className={`card-proj ${ot} block !min-h-0 !p-5`}
              >
                <div className={`font-mono text-[10px] uppercase tracking-widest mb-3 ${otDark ? 'text-ivory/70' : 'text-ink/60'}`}>
                  {p.year}
                </div>
                <div className={`font-condensed text-2xl uppercase leading-tight ${otDark ? 'text-ivory' : 'text-ink'}`}>
                  {p.title}
                </div>
                <div className={`text-xs mt-2 ${otDark ? 'text-ivory/70' : 'text-ink/70'}`}>
                  {p.shortDescription}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="frame p-6">
      <div className="text-xs font-mono uppercase tracking-widest text-ink/50 mb-3">{title}</div>
      {children}
    </div>
  );
}
