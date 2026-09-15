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

  const TechGrid = ({ items }: { items: { name: string; iconType: string }[] }) => (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
      {items.map((it) => (
        <div
          key={it.name}
          className="frame p-3 flex flex-col items-center justify-center gap-2 aspect-square card-hover"
          title={it.name}
        >
          <div className="text-2xl text-ink">{renderIcon(it.iconType)}</div>
          <span className="text-[11px] font-mono text-ink/70 text-center leading-tight uppercase tracking-wide">{it.name}</span>
        </div>
      ))}
    </div>
  );

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

        <div className="grid md:grid-cols-5 gap-6">
          {/* Bio ------------------------------------------------------------ */}
          <motion.div
            className="md:col-span-3 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="frame frame-cream p-7">
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
            </div>

            <div className="frame p-7">
              <h3 className="font-condensed text-3xl mb-4 text-ink">Education</h3>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-ink font-bold">
                    <FaGraduationCap />
                    Dayananda Sagar College of Engineering, Bangalore
                  </div>
                  <div className="mt-1 text-sm text-ink/70">
                    B.E. — Artificial Intelligence &amp; Machine Learning · 2022 – 2026
                  </div>
                  <div className="mt-3">
                    <span className="tag tag--lime">CGPA 9.55 / 10.0</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="Saqlain-resume-25.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill pill--lime"
                >
                  <FaDownload /> Download resume
                </a>
              </div>
            </div>

            <div className="frame frame-cream p-7">
              <h3 className="font-condensed text-3xl mb-4 text-ink">Hobbies &amp; interests</h3>
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
                  <div key={h.label} className="frame p-3 flex flex-col items-center gap-1 card-hover">
                    <div className="text-lg text-ink">{h.icon}</div>
                    <span className="text-[10px] font-mono uppercase tracking-wide text-ink/70">{h.label}</span>
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
            <div className="frame p-7 sticky top-24">
              <h3 className="font-condensed text-3xl mb-6 text-ink">Tech stack</h3>

              <div className="space-y-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-ink/50 mb-3">Languages</div>
                  <TechGrid items={languages} />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-ink/50 mb-3">Frameworks</div>
                  <TechGrid items={frameworks} />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-ink/50 mb-3">Tooling</div>
                  <TechGrid items={devTools} />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-ink/50 mb-3">Cloud &amp; data</div>
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
