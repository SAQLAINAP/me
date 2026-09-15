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
  // Central icon dictionary — one place to add / remove tech icons.
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

  const TechGrid = ({ items }: { items: { name: string; iconType: string }[] }) => (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
      {items.map((it) => (
        <div
          key={it.name}
          className="glass p-3 flex flex-col items-center justify-center gap-2 aspect-square card-hover"
          title={it.name}
        >
          <div className="text-2xl text-cyan-300">{renderIcon(it.iconType)}</div>
          <span className="text-[11px] font-mono text-white/70 text-center leading-tight">{it.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section id="about" className="py-24 relative">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="h-eyebrow">// about</div>
          <h2 className="h-display">
            The <span className="text-aurora">human</span> behind SAQLAINAP.
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {/* Bio ------------------------------------------------------------ */}
          <motion.div
            className="md:col-span-3 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-strong p-7">
              <h3 className="font-display text-2xl mb-3 text-white">Bio</h3>
              <p className="text-white/75 leading-relaxed">
                I'm an AI engineer at <span className="text-white font-medium">Plivo</span> building
                real-time voice AI — LLMs plugged into telephony, evaluation harnesses for
                TTS / STT vendors, and agentic voice workflows.
              </p>
              <p className="mt-4 text-white/75 leading-relaxed">
                Outside the day job I chase <span className="text-white">quantum computing</span>,
                cloud-native <span className="text-white">open source</span>, and any hackathon
                that sounds fun. Two-time <span className="text-white">Shubhra Kar Linux Foundation Scholar</span>
                (2023 + 2026) via the CNCF.
              </p>
              <p className="mt-4 text-white/75 leading-relaxed">
                Bias for shipping over talking. Comfortable across the stack, but happiest in the
                messy middle where product, model and infra meet.
              </p>
            </div>

            <div className="glass-strong p-7">
              <h3 className="font-display text-2xl mb-4 text-white">Education</h3>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-white font-medium">
                    <FaGraduationCap className="text-cyan-300" />
                    Dayananda Sagar College of Engineering, Bangalore
                  </div>
                  <div className="mt-1 text-sm text-white/60">
                    B.E. — Artificial Intelligence & Machine Learning · 2022 – 2026
                  </div>
                  <div className="mt-1 text-sm">
                    <span className="chip-cyan">CGPA 9.55 / 10.0</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="Saqlain-resume-25.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon"
                >
                  <FaDownload /> Download resume
                </a>
              </div>
            </div>

            <div className="glass-strong p-7">
              <h3 className="font-display text-2xl mb-4 text-white">Hobbies & interests</h3>
              <div className="grid grid-cols-4 gap-2.5">
                {[
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
                ].map((h) => (
                  <div key={h.label} className="glass p-2.5 flex flex-col items-center gap-1 card-hover">
                    <div className="text-lg text-cyan-300">{h.icon}</div>
                    <span className="text-[10px] font-mono text-white/70">{h.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tech Stack ---------------------------------------------------- */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="glass-strong p-7 sticky top-24">
              <h3 className="font-display text-2xl mb-6 text-white">Tech stack</h3>

              <div className="space-y-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-3">Languages</div>
                  <TechGrid items={languages} />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-3">Frameworks</div>
                  <TechGrid items={frameworks} />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-3">Tooling</div>
                  <TechGrid items={devTools} />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-3">Cloud & data</div>
                  <TechGrid items={cloudAndDb} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
