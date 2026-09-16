import { motion } from 'framer-motion';
import type { JSX } from 'react';
import {
  FaGraduationCap, FaMicrophone, FaPython, FaJsSquare, FaJava, FaReact, FaNodeJs,
  FaGitAlt, FaGithub, FaCode, FaLinux, FaDatabase, FaDocker, FaDownload, FaSearch,
  FaGamepad, FaPlane, FaMusic, FaFilm, FaUtensils, FaBookOpen, FaCar, FaUsers,
  FaRunning, FaTableTennis, FaDice, FaTools, FaAws, FaSchool,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiCplusplus, SiKubernetes, SiExpress, SiMongodb, SiFlask, SiFastapi,
  SiNodedotjs, SiNextdotjs, SiPostman, SiOpenai, SiGoogle, SiN8N, SiFirebase, SiMake,
  SiAnthropic, SiTypescript, SiPostgresql, SiRedis, SiSupabase, SiPandas, SiNumpy,
} from 'react-icons/si';
import { languages, frameworks, devTools, cloudAndDb } from '@/lib/data';

const AboutSection = () => {
  const ICONS: Record<string, JSX.Element> = {
    FaPython: <FaPython />, FaJsSquare: <FaJsSquare />, FaJava: <FaJava />,
    FaReact: <FaReact />, FaNodeJs: <FaNodeJs />, FaGitAlt: <FaGitAlt />,
    FaGithub: <FaGithub />, FaCode: <FaCode />, FaLinux: <FaLinux />,
    FaDatabase: <FaDatabase />, FaDocker: <FaDocker />, FaSearch: <FaSearch />,
    FaAws: <FaAws />, FaTools: <FaTools />,
    SiCplusplus: <SiCplusplus />, SiTailwindcss: <SiTailwindcss />,
    SiKubernetes: <SiKubernetes />, SiExpress: <SiExpress />, SiMongodb: <SiMongodb />,
    SiFlask: <SiFlask />, SiFastapi: <SiFastapi />, SiNodedotjs: <SiNodedotjs />,
    SiNextdotjs: <SiNextdotjs />, SiPostman: <SiPostman />, SiOpenai: <SiOpenai />,
    SiGoogle: <SiGoogle />, SiN8N: <SiN8N />, SiFirebase: <SiFirebase />,
    SiMake: <SiMake />, SiAnthropic: <SiAnthropic />, SiTypescript: <SiTypescript />,
    SiPostgresql: <SiPostgresql />, SiRedis: <SiRedis />,
    SiSupabase: <SiSupabase />, SiPandas: <SiPandas />, SiNumpy: <SiNumpy />,
  };
  const renderIcon = (key: string) =>
    ICONS[key] ?? <span className="font-mono font-bold">{key.slice(2, 3) || '·'}</span>;

  /* Compact chip-list — each tech shows a small icon + label on one row. */
  const TechList = ({
    label,
    items,
  }: {
    label: string;
    items: { name: string; iconType: string }[];
  }) => (
    <div>
      <div className="text-xs font-mono uppercase tracking-widest text-ink/50 mb-3">
        {label} · {items.length}
      </div>
      <ul className="flex flex-wrap gap-2">
        {items.map((it) => (
          <li
            key={it.name}
            className="inline-flex items-center gap-2 px-2 py-1 border-2 border-ink rounded-full text-xs font-mono uppercase tracking-wide text-ink bg-ivory transition-colors hover:bg-lime"
            title={it.name}
          >
            <span className="text-sm text-ink">{renderIcon(it.iconType)}</span>
            {it.name}
          </li>
        ))}
      </ul>
    </div>
  );

  const HOBBIES = [
    { icon: <FaGamepad />,      label: 'Gaming' },
    { icon: <FaPlane />,        label: 'Travel' },
    { icon: <FaMusic />,        label: 'Music' },
    { icon: <FaFilm />,         label: 'Movies' },
    { icon: <FaUtensils />,     label: 'Food' },
    { icon: <FaBookOpen />,     label: 'Story' },
    { icon: <FaMicrophone />,   label: 'Speaking' },
    { icon: <FaCar />,          label: 'Driving' },
    { icon: <FaUsers />,        label: 'Confs' },
    { icon: <FaRunning />,      label: 'Cricket' },
    { icon: <FaTableTennis />,  label: 'Pickleball' },
    { icon: <FaDice />,         label: 'Cards' },
  ];

  const RESUME_URL = `${import.meta.env.BASE_URL}Saqlain-resume-25.pdf`;

  return (
    <section id="about" className="py-24 relative bg-ivory">
      <div className="wrap-lg">
        <div className="section-head">
          <span className="section-head__idx">// 01</span>
          <h2 className="section-head__title">
            About <span className="mk mk--lime">me</span>
          </h2>
          <span className="section-head__note">bio · education · stack · hobbies</span>
        </div>

        {/* ROW 1: Bio (wide) + Education (narrow) — factual, no fluff */}
        <div className="grid md:grid-cols-5 gap-6">
          <motion.div
            className="md:col-span-3 frame frame-cream p-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-condensed text-3xl mb-3 text-ink">Bio</h3>
            <p className="text-ink/80 leading-relaxed">
              Forward Deployed Engineer intern at <span className="font-bold text-ink">Plivo</span>,
              building AI-driven communication systems — an IVR platform, agentic query-resolution
              chatbots, and an internal RAG knowledge system with n8n automations.
            </p>
            <p className="mt-4 text-ink/80 leading-relaxed">
              Also independently benchmarked 8 voice-AI vendors against real Plivo PSTN calls to
              verify vendor-published WER, latency and cost under production conditions.
            </p>
            <p className="mt-4 text-ink/80 leading-relaxed">
              Prior work: product &amp; AI engineering internships at Kroolo AI and GetCreatr,
              CNCF open-source contributions, KCNA certified, and applied quantum-ML research on
              the side.
            </p>
          </motion.div>

          <motion.div
            className="md:col-span-2 frame p-7 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h3 className="font-condensed text-3xl mb-4 text-ink">Education</h3>

            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 text-ink font-bold">
                  <FaGraduationCap />
                  Dayananda Sagar College of Engineering
                </div>
                <div className="mt-1 text-sm text-ink/70">
                  B.E. — Artificial Intelligence &amp; Machine Learning
                </div>
                <div className="mt-1 text-xs text-ink/60 font-mono">2022 – 2026 · Bangalore</div>
                <div className="mt-2">
                  <span className="tag tag--lime">CGPA 9.25 / 10.0</span>
                </div>
              </div>

              <div className="border-t-2 border-dashed border-ink/20 pt-4">
                <div className="flex items-center gap-2 text-ink font-bold text-sm">
                  <FaSchool />
                  Class 12 · PCM + CS
                </div>
                <div className="mt-1">
                  <span className="tag tag--mint">95%</span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-ink font-bold text-sm">
                  <FaSchool />
                  Class 10
                </div>
                <div className="mt-1">
                  <span className="tag tag--gold">90%</span>
                </div>
              </div>
            </div>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pill pill--lime mt-6 self-start"
            >
              <FaDownload /> Download resume
            </a>
          </motion.div>
        </div>

        {/* ROW 1.5: Resume preview iframe — appealing inline PDF glance */}
        <motion.div
          className="mt-6 frame p-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <div className="flex items-baseline justify-between mb-3">
            <h3 className="font-condensed text-2xl text-ink">Resume · quick look</h3>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-widest text-ink/60 hover:text-ink underline underline-offset-4"
            >
              open full pdf →
            </a>
          </div>
          <div className="rounded-lg overflow-hidden border-2 border-ink bg-ivory h-[280px] sm:h-[360px] md:h-[420px]">
            <iframe
              src={`${RESUME_URL}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              title="Saqlain Ahmed P — Resume preview"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* ROW 2: Tech stack, full-width, 4 category columns to stay short */}
        <motion.div
          className="mt-6 frame p-7"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-baseline justify-between mb-6">
            <h3 className="font-condensed text-3xl text-ink">Tech stack</h3>
            <span className="text-xs font-mono uppercase tracking-widest text-ink/50">
              things I reach for
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TechList label="Languages"     items={languages} />
            <TechList label="Frameworks"    items={frameworks} />
            <TechList label="Tooling"       items={devTools} />
            <TechList label="Cloud & data"  items={cloudAndDb} />
          </div>
        </motion.div>

        {/* ROW 3: Hobbies full-width strip */}
        <motion.div
          className="mt-6 frame frame-cream p-7"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex items-baseline justify-between mb-4">
            <h3 className="font-condensed text-3xl text-ink">Hobbies &amp; interests</h3>
            <span className="text-xs font-mono uppercase tracking-widest text-ink/50">
              off-duty
            </span>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-3">
            {HOBBIES.map((h) => (
              <div
                key={h.label}
                className="frame p-3 flex flex-col items-center gap-1 card-hover"
              >
                <div className="text-xl text-ink">{h.icon}</div>
                <span className="text-[10px] font-mono uppercase tracking-wide text-ink/70">{h.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
