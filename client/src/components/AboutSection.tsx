import { motion } from 'framer-motion';
import {
  FaGraduationCap, FaMicrophone, FaPython, FaJsSquare, FaJava, FaReact, FaNodeJs,
  FaGitAlt, FaGithub, FaCode, FaLinux, FaMicrosoft, FaDatabase, FaDocker, FaDownload,
  FaGamepad, FaPlane, FaMusic, FaFilm, FaUtensils, FaBookOpen, FaCar, FaUsers,
  FaRunning, FaTableTennis, FaDice, FaTools, FaAws,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiCplusplus, SiKubernetes, SiExpress, SiMongodb, SiFlask, SiFastapi,
  SiNodedotjs, SiNextdotjs, SiPostman, SiOpenai, SiGoogle, SiN8N, SiFirebase, SiMake,
  SiAnthropic, SiTypescript, SiGo, SiThreedotjs, SiGooglecloud, SiPostgresql, SiRedis,
} from 'react-icons/si';
import { languages, frameworks, devTools, cloudAndDb } from '@/lib/data';

const AboutSection = () => {
  const ICONS: Record<string, JSX.Element> = {
    FaPython: <FaPython />, FaJsSquare: <FaJsSquare />, FaJava: <FaJava />,
    FaReact: <FaReact />, FaNodeJs: <FaNodeJs />, FaGitAlt: <FaGitAlt />,
    FaGithub: <FaGithub />, FaCode: <FaCode />, FaLinux: <FaLinux />,
    FaMicrosoft: <FaMicrosoft />, FaDatabase: <FaDatabase />, FaDocker: <FaDocker />,
    FaAws: <FaAws />, FaTools: <FaTools />,
    SiCplusplus: <SiCplusplus />, SiTailwindcss: <SiTailwindcss />,
    SiKubernetes: <SiKubernetes />, SiExpress: <SiExpress />, SiMongodb: <SiMongodb />,
    SiFlask: <SiFlask />, SiFastapi: <SiFastapi />, SiNodedotjs: <SiNodedotjs />,
    SiNextdotjs: <SiNextdotjs />, SiPostman: <SiPostman />, SiOpenai: <SiOpenai />,
    SiGoogle: <SiGoogle />, SiN8N: <SiN8N />, SiFirebase: <SiFirebase />,
    SiMake: <SiMake />, SiAnthropic: <SiAnthropic />, SiTypescript: <SiTypescript />,
    SiGo: <SiGo />, SiThreedotjs: <SiThreedotjs />, SiGooglecloud: <SiGooglecloud />,
    SiPostgresql: <SiPostgresql />, SiRedis: <SiRedis />,
  };
  const renderIcon = (key: string) =>
    ICONS[key] ?? <span className="font-mono font-bold">{key.slice(2, 3) || '·'}</span>;

  /* Compact chip-list — each tech shows a small icon + label on one row.
     Reads horizontally so a long category doesn't force the surrounding grid
     to grow vertically. */
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

  return (
    <section id="about" className="py-24 relative bg-ivory">
      <div className="wrap-lg">
        <div className="section-head">
          <span className="section-head__idx">// 01</span>
          <h2 className="section-head__title">
            The <span className="mk mk--lime">human</span> behind saqlainap
          </h2>
          <span className="section-head__note">bio · stack · hobbies</span>
        </div>

        {/* ROW 1: Bio (wide) + Education (narrow) */}
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
              I'm an AI engineer at <span className="font-bold text-ink">Plivo</span> building
              real-time voice AI — LLMs plugged into telephony, evaluation harnesses for
              TTS / STT vendors, and agentic voice workflows.
            </p>
            <p className="mt-4 text-ink/80 leading-relaxed">
              Outside the day job I chase <span className="font-bold text-ink">quantum computing</span>,
              cloud-native <span className="font-bold text-ink">open source</span>, and any hackathon
              that sounds fun. Two-time <span className="font-bold text-ink">Shubhra Kar Linux Foundation Scholar</span>
              {' '}(2023 + 2026) via the CNCF.
            </p>
            <p className="mt-4 text-ink/80 leading-relaxed">
              Bias for shipping over talking. Comfortable across the stack, but happiest in the
              messy middle where product, model and infra meet.
            </p>
          </motion.div>

          <motion.div
            className="md:col-span-2 frame p-7 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <div>
              <h3 className="font-condensed text-3xl mb-4 text-ink">Education</h3>
              <div className="flex items-center gap-2 text-ink font-bold">
                <FaGraduationCap />
                Dayananda Sagar College of Engineering
              </div>
              <div className="mt-1 text-sm text-ink/70">
                B.E. — Artificial Intelligence &amp; Machine Learning
              </div>
              <div className="mt-1 text-sm text-ink/70 font-mono">2022 – 2026 · Bangalore</div>
              <div className="mt-3">
                <span className="tag tag--lime">CGPA 9.55 / 10.0</span>
              </div>
            </div>
            <a
              href="Saqlain-resume-25.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="pill pill--lime mt-6 self-start"
            >
              <FaDownload /> Download resume
            </a>
          </motion.div>
        </div>

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
              off-duty saqlain
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
