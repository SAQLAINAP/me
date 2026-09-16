// All source-of-truth content for the portfolio.
// Project images live in /me/images/projects/<id>.svg (generated locally,
// checked into the repo — no dependency on random web imagery).

export const IMG_BASE = `${import.meta.env.BASE_URL}images`;
export const projectImg = (id: string) => `${IMG_BASE}/projects/${id}.svg`;

// ---- Tech stack tiles ------------------------------------------------------

export const languages = [
  { name: 'Python', iconType: 'FaPython' },
  { name: 'TypeScript', iconType: 'SiTypescript' },
  { name: 'JavaScript', iconType: 'FaJsSquare' },
  { name: 'Java', iconType: 'FaJava' },
  { name: 'C++', iconType: 'SiCplusplus' },
];

export const frameworks = [
  { name: 'React.js', iconType: 'FaReact' },
  { name: 'Next.js', iconType: 'SiNextdotjs' },
  { name: 'Node.js', iconType: 'SiNodedotjs' },
  { name: 'Express.js', iconType: 'SiExpress' },
  { name: 'FastAPI', iconType: 'SiFastapi' },
  { name: 'Flask', iconType: 'SiFlask' },
  { name: 'Tailwind CSS', iconType: 'SiTailwindcss' },
  { name: 'Pandas', iconType: 'SiPandas' },
  { name: 'NumPy', iconType: 'SiNumpy' },
];

export const devTools = [
  { name: 'Git', iconType: 'FaGitAlt' },
  { name: 'GitHub', iconType: 'FaGithub' },
  { name: 'Docker', iconType: 'FaDocker' },
  { name: 'Kubernetes', iconType: 'SiKubernetes' },
  { name: 'Linux', iconType: 'FaLinux' },
  { name: 'Postman', iconType: 'SiPostman' },
  { name: 'OpenAI SDK', iconType: 'SiOpenai' },
  { name: 'Anthropic SDK', iconType: 'SiAnthropic' },
  { name: 'Gemini SDK', iconType: 'SiGoogle' },
  { name: 'n8n', iconType: 'SiN8N' },
  { name: 'CI/CD', iconType: 'FaTools' },
  { name: 'make.io', iconType: 'SiMake' },
];

export const cloudAndDb = [
  { name: 'AWS', iconType: 'FaAws' },
  { name: 'PostgreSQL', iconType: 'SiPostgresql' },
  { name: 'Supabase', iconType: 'SiSupabase' },
  { name: 'NeonDB', iconType: 'FaDatabase' },
  { name: 'MongoDB', iconType: 'SiMongodb' },
  { name: 'ChromaDB', iconType: 'FaDatabase' },
  { name: 'OpenSearch', iconType: 'FaSearch' },
  { name: 'Firebase', iconType: 'SiFirebase' },
  { name: 'Redis', iconType: 'SiRedis' },
];

// ---- Experience ------------------------------------------------------------

export const experiences = [
  {
    position: 'AI Engineer',
    company: 'Plivo',
    location: 'Bangalore',
    period: 'Nov 2025 – Present',
    responsibilities: [
      'Building <span class="font-semibold">real-time voice AI infrastructure</span> — evaluating and benchmarking TTS, STT and LLM providers across latency, cost and quality dimensions for production voice agents',
      'Authoring <span class="font-semibold">multi-vendor evaluation harnesses</span> (AssemblyAI, Deepgram, Cartesia, Fish Audio, Inworld, Speechmatics, Gnani, Vapi) so product teams can pick the right model per use case',
      'Prototyping <span class="font-semibold">voice-first agent workflows</span> and internal tooling around Pipecat / OpenAI Realtime for Plivo\'s conversational AI stack'
    ],
    skills: ['Voice AI', 'LLM Evals', 'TTS/STT Benchmarking', 'Pipecat', 'Realtime APIs']
  },
  {
    position: 'Product Dev & Engineering Intern',
    company: 'Kroolo AI',
    location: 'Bangalore',
    period: 'Jul 2025 – Oct 2025',
    responsibilities: [
      'Shipped a <span class="font-semibold">policy analyzer & generator</span> from zero — processing 40+ policy documents at 90%+ accuracy and cutting manual review time by 40%',
      'Contributed multiple features to <span class="font-semibold">Enterprise Search</span>, improving p95 search response times by ~30%'
    ],
    skills: ['Product Engineering', 'Full Stack', 'Enterprise Search', 'AI Integration']
  },
  {
    position: 'Prompt Engineering Intern',
    company: 'GetCreatr AI',
    location: 'Bangalore',
    period: 'May 2025 – Jul 2025',
    responsibilities: [
      'Built and deployed <span class="font-semibold">5 end-to-end AI-embedded full-stack apps</span> using advanced prompting patterns — generating $3,000+ in client project revenue',
      'Helped ship <span class="font-semibold">client and showcase projects</span> on Creatr, improving in-app conversion for the template gallery'
    ],
    skills: ['Prompt Engineering', 'Full Stack', 'AI Applications', 'Client Delivery']
  },
  {
    position: 'Campus Ambassador',
    company: 'Coding Ninjas & GeeksforGeeks',
    period: '2023 – 2024',
    responsibilities: [
      'Drove <span class="font-semibold">lead-gen and community growth</span> on campus, running technical events end-to-end',
      'Organized <span class="font-semibold">coding workshops and mentor sessions</span> for peers',
    ],
    skills: ['Event Management', 'DevRel', 'Leadership']
  },
  {
    position: 'Tech Intern',
    company: 'Spawn Labs',
    location: 'Bangalore',
    period: 'May 2023 – Jun 2023',
    responsibilities: [
      'Built a <span class="font-semibold">full-stack application</span> alongside the founding team',
      'Set up <span class="font-semibold">hosting and version-control workflows</span>',
    ],
    skills: ['Full Stack', 'DevOps', 'Version Control']
  },
  {
    position: 'Member',
    company: 'PointBlank',
    period: '2022 – 2023',
    responsibilities: [
      'Helped organize <span class="font-semibold">technical workshops and hack nights</span> for the university',
      'Contributed to <span class="font-semibold">community outreach and student-education initiatives</span>',
    ],
    skills: ['Event Org', 'Community', 'Tech Education']
  }
];

// ---- Projects --------------------------------------------------------------

export type ProjectFilter = 'all' | 'ai' | 'web' | 'quantum' | 'opensource' | 'blockchain' | 'misc';

export interface Project {
  id: string;
  title: string;
  year: string;
  shortDescription: string;
  description: string;
  longDescription?: string;
  challenges: string;
  features: string[];
  techStack: string[];
  image: string;
  accent: [string, string];   // gradient stops for hero card in /arena
  categories: ProjectFilter[];
  githubLink: string;
  demoLink?: string;
  metrics?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: 'resume-forge',
    title: 'Resume-Forge',
    year: '2025',
    shortDescription: 'AI-native resume tailoring & scoring engine',
    description: 'A resume tailoring engine that rewrites, scores and ATS-optimizes resumes against a target JD in seconds — powered by LLMs and a rubric-based scoring loop.',
    challenges: 'Getting deterministic, high-signal scoring out of an LLM without letting it hallucinate skills the candidate does not have. Solved with a two-stage rubric evaluator + retrieval grounding on the source resume.',
    features: [
      'JD-aware resume rewriting',
      'ATS-friendly export (PDF / DOCX)',
      'Rubric-based scoring with per-section feedback',
      'Skill-gap surfacer with learning suggestions',
      'History + version diffing',
    ],
    techStack: ['Next.js', 'FastAPI', 'OpenAI', 'Supabase', 'Tailwind'],
    image: projectImg('resume-forge'),
    accent: ['#d1e030', '#9eef80'],
    categories: ['ai', 'web'],
    githubLink: 'https://github.com/SAQLAINAP/resume-forge',
  },
  {
    id: 'codecity',
    title: 'CodeCity',
    year: '2025',
    shortDescription: 'Visualize any repo as a walkable city',
    description: 'A 3D visualization tool that maps any GitHub repository into a walkable city — files become buildings, directories become districts, complexity drives height.',
    challenges: 'Rendering large repos (10k+ files) without dropping frames. Solved with instanced meshes, aggressive frustum culling and a level-of-detail streamer.',
    features: [
      'Instant city gen from any public repo',
      'Metrics-driven building height / colour',
      'Click-to-open source in overlay editor',
      'Shareable snapshot links',
    ],
    techStack: ['React', 'Three.js', 'TypeScript', 'Node.js'],
    image: projectImg('codecity'),
    accent: ['#22d3ee', '#8b5cf6'],
    categories: ['web', 'opensource', 'misc'],
    githubLink: 'https://github.com/SAQLAINAP/codecity',
  },
  {
    id: 'foundermap',
    title: 'FounderMap',
    year: '2025',
    shortDescription: 'Founder ↔ co-founder matching graph',
    description: 'A matching platform that pairs founders with complementary co-founders using embeddings over skills, domain interest, timezone and past building patterns.',
    challenges: 'Cold-start matching without behavioural data. Solved by grounding matches in explicit signals (skills, availability, stage) and a soft-similarity re-ranker.',
    features: [
      'Semantic co-founder search',
      'Complementarity score with breakdown',
      'Verified email + LinkedIn intros',
      'Founder shortlists + notes',
    ],
    techStack: ['Next.js', 'PostgreSQL', 'pgvector', 'OpenAI', 'Tailwind'],
    image: projectImg('foundermap'),
    accent: ['#fbd535', '#f97316'],
    categories: ['web', 'ai'],
    githubLink: 'https://github.com/SAQLAINAP/foundermap',
  },
  {
    id: 'iddc',
    title: 'IDDC',
    year: '2025',
    shortDescription: 'Intelligent Document → Data Converter',
    description: 'A document-processing pipeline that ingests messy PDFs, scans and images and emits clean, schema-valid JSON — with confidence scores per field.',
    challenges: 'Handling wildly varying layouts (invoices, forms, contracts) with a single pipeline. Solved with a layout-classifier front-end + per-schema LLM extractors and a validator loop.',
    features: [
      'Multi-format ingest (PDF, PNG, DOCX)',
      'Schema-first extraction (Pydantic contracts)',
      'Per-field confidence + review UI',
      'Batch processing with resumable jobs',
    ],
    techStack: ['Python', 'FastAPI', 'Pydantic', 'Anthropic', 'PostgreSQL'],
    image: projectImg('iddc'),
    accent: ['#0ea5e9', '#22c55e'],
    categories: ['ai', 'opensource'],
    githubLink: 'https://github.com/SAQLAINAP/iddc',
  },
  {
    id: 'gitclaw-agent',
    title: 'GitClaw Agent',
    year: '2025',
    shortDescription: 'Autonomous PR-scoping & code-review agent',
    description: 'A background agent that watches your GitHub repos, drafts scoped PRs from issues, and reviews incoming PRs with grounded citations back into the codebase.',
    challenges: 'Keeping the agent from touching files it has no business touching. Solved with a two-tier plan-then-execute loop where the plan must pass a static ACL before any file write.',
    features: [
      'Issue → scoped PR draft with plan',
      'Grounded PR review with file-anchored comments',
      'ACL-gated write actions',
      'Slack / GitHub notifications',
    ],
    techStack: ['TypeScript', 'Node.js', 'Anthropic', 'GitHub API', 'Docker'],
    image: projectImg('gitclaw-agent'),
    accent: ['#a855f7', '#ec4899'],
    categories: ['ai', 'opensource'],
    githubLink: 'https://github.com/SAQLAINAP/gitclaw-agent',
  },
  {
    id: 'news-pod',
    title: 'News-Pod',
    year: '2024',
    shortDescription: 'Quantum-ML powered news aggregator',
    description: 'A Quantum Machine Learning enabled journal-data aggregator/analyzer for curated digital content. Uses hybrid classical-quantum pipelines to personalize feeds while keeping user data local.',
    longDescription: 'News-Pod ingests journalistic content from multiple feeds, embeds articles using classical transformer encoders, and re-ranks results with a small variational quantum circuit trained on user-feedback signals. The quantum layer is simulated with Cirq during training and runs on IBM Quantum sandboxes for the final re-rank step.',
    challenges: 'Making quantum circuits behave predictably in a production pipeline. We built a fallback path that gracefully degrades to a pure-classical re-ranker whenever the quantum backend is queued or unavailable.',
    features: [
      'Hybrid classical + variational-quantum re-ranking',
      'Personalized daily briefings, on-device preference store',
      'Analytics dashboard with topic-drift visualisation',
      'Responsive PWA build, works offline',
      'Zero third-party trackers'
    ],
    techStack: ['TensorFlow', 'Cirq', 'Qiskit', 'LAMBEQ', 'Python', 'FastAPI'],
    image: projectImg('news-pod'),
    accent: ['#8b5cf6', '#22d3ee'],
    categories: ['ai', 'quantum'],
    githubLink: 'https://github.com/SAQLAINAP/NewsPod',
    metrics: [
      { label: 'Re-rank uplift', value: '+18% CTR' },
      { label: 'Latency', value: '<220ms p95' },
    ]
  },
  {
    id: 'spam-detection',
    title: 'DistilBERT Spam Detector',
    year: '2024',
    shortDescription: 'Transformer-based spam classifier',
    description: 'A fine-tuned DistilBERT model that classifies SMS / chat messages as spam or ham with 94% accuracy — served through a lightweight Flask + FastAPI shim.',
    longDescription: 'The training pipeline handles class imbalance with focal loss and dynamic re-sampling. Inference is exposed through a REST endpoint that also supports CSV batch mode for offline dataset scoring.',
    challenges: 'Class imbalance in the training data and keeping real-time latency under 100ms on CPU. Solved with focal loss + ONNX-runtime quantization.',
    features: [
      'Fine-tuned DistilBERT, 94% F1',
      'Real-time single-message classification',
      'Batch CSV scoring for datasets',
      'ONNX-quantized inference on CPU',
      'Drop-in Flask / FastAPI integration'
    ],
    techStack: ['PyTorch', 'Transformers', 'HuggingFace', 'ONNX', 'NLP'],
    image: projectImg('spam-detection'),
    accent: ['#f472b6', '#a855f7'],
    categories: ['ai'],
    githubLink: 'https://github.com/SAQLAINAP/distilbert-spam-detector',
    metrics: [
      { label: 'F1', value: '0.94' },
      { label: 'CPU inference', value: '<95ms' },
    ]
  },
  {
    id: 'densa-app',
    title: 'DENSA',
    year: '2024',
    shortDescription: 'Scalable Dockerized news aggregator',
    description: 'A scalable, containerised news aggregation system that scrapes 30+ BBC daily headlines and automates email delivery to subscribers with 90%+ reliability.',
    challenges: 'Building a scraper resilient to layout changes across sources while keeping delivery latency low. Solved with a small "layout-fingerprint" cache and APScheduler backoff.',
    features: [
      'Multi-source scraping, 30+ feeds',
      'APScheduler-based email delivery',
      'SQLite / PostgreSQL storage layer',
      'Dockerized, one-command deploy',
      '90%+ delivery reliability'
    ],
    techStack: ['Flask', 'BeautifulSoup', 'APScheduler', 'Docker', 'PostgreSQL'],
    image: projectImg('densa-app'),
    accent: ['#22d3ee', '#3b82f6'],
    categories: ['web', 'opensource'],
    githubLink: 'https://github.com/SAQLAINAP/DENSA',
    metrics: [
      { label: 'Reliability', value: '90%+' },
      { label: 'Query time', value: '-30%' },
    ]
  },
  {
    id: 'architectural-ai-gemini',
    title: 'Architectural AI (Gemini)',
    year: '2024',
    shortDescription: 'Generative AI for floor-plan design',
    description: 'An AI assistant that turns natural-language briefs into architectural layout suggestions using Google\'s Gemini Pro Vision, plus zoning-data lookups and structural checks.',
    challenges: 'Translating vague human briefs ("2 BHK, sunny living room, home office") into constrained layout objects the frontend can render. Handled with a schema-first prompt template and few-shot examples.',
    features: [
      'Multimodal input: text + reference images',
      'Structured layout JSON output',
      'Zoning / setback validation',
      'React canvas renderer for layouts'
    ],
    techStack: ['Gemini API', 'Python', 'FastAPI', 'React'],
    image: projectImg('architectural-ai-gemini'),
    accent: ['#f59e0b', '#ef4444'],
    categories: ['ai'],
    githubLink: 'https://github.com/SAQLAINAP/Architectural-AI-Gemini'
  },
  {
    id: 'refashion-nft',
    title: 'Refashion NFT',
    year: '2024',
    shortDescription: 'Sustainable-fashion NFT marketplace',
    description: 'An on-chain marketplace for tokenised sustainable-fashion pieces. Creators mint pieces; buyers get provenance tracking baked into the smart contract.',
    challenges: 'Keeping gas fees sane for non-crypto natives. Batched minting + optimistic UX solved most of the friction.',
    features: [
      'ERC-721 minting & trading',
      'Wallet connect (MetaMask / WalletConnect)',
      'IPFS-pinned assets',
      'Provenance history per piece'
    ],
    techStack: ['Solidity', 'Ethereum', 'React', 'Web3.js', 'IPFS'],
    image: projectImg('refashion-nft'),
    accent: ['#10b981', '#14b8a6'],
    categories: ['blockchain'],
    githubLink: 'https://github.com/SAQLAINAP/Refashion_NFT'
  },
  {
    id: 'sentiment-analysis',
    title: 'Sentiment Analysis Suite',
    year: '2024',
    shortDescription: 'Comparative NLP sentiment classifier',
    description: 'A benchmarking harness that trains and compares classical ML (NB, SVM, LR) against fine-tuned transformers on the same sentiment corpora.',
    challenges: 'Handling sarcasm, mixed-language input and domain shift. Best results came from a distilRoBERTa base with domain-adaptive continued pre-training.',
    features: [
      'Unified preprocessing pipeline',
      'Six comparable models, one CLI',
      'Confusion-matrix + calibration plots',
      'Reproducible seeds & configs'
    ],
    techStack: ['Python', 'NLTK', 'Scikit-learn', 'Transformers', 'Matplotlib'],
    image: projectImg('sentiment-analysis'),
    accent: ['#f43f5e', '#f97316'],
    categories: ['ai'],
    githubLink: 'https://github.com/SAQLAINAP/Sentiment_Analysis/tree/master'
  },
  {
    id: 'poligap',
    title: 'Poligap',
    year: '2024',
    shortDescription: 'Citizen ⇄ policy-maker platform',
    description: 'A live platform that closes the gap between citizens and policy makers with real-time updates, structured discussion threads, and direct feedback channels.',
    challenges: 'Real-time discussion at scale without letting bad-faith actors dominate the thread. Added weighted signal scoring on top of vanilla up/down votes.',
    features: [
      'Real-time policy digests',
      'Structured citizen discussion threads',
      'Signed-feedback channels',
      'Live deployment at poligap.com'
    ],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    image: projectImg('poligap'),
    accent: ['#3b82f6', '#8b5cf6'],
    categories: ['web'],
    githubLink: 'https://github.com/SAQLAINAP/Poligap',
    demoLink: 'https://poligap.com'
  },
  {
    id: 'safeclick',
    title: 'SafeClick',
    year: '2024',
    shortDescription: 'Anti-phishing browser extension',
    description: 'A lightweight browser extension that scans links before you click them — local heuristics first, cloud checks only on ambiguous URLs.',
    challenges: 'Low-latency URL analysis without leaking browsing history. Solved with a local bloom-filter of known-bad domains and hashed cloud lookups.',
    features: [
      'Real-time hover URL scanning',
      'Local + cloud two-tier decision',
      'Warning banners on high-risk sites',
      'Privacy-preserving (hashed lookups)'
    ],
    techStack: ['JavaScript', 'WebExtensions API', 'HTML/CSS'],
    image: projectImg('safeclick'),
    accent: ['#eab308', '#f97316'],
    categories: ['web', 'misc'],
    githubLink: 'https://github.com/SAQLAINAP/SafeClick'
  },
  {
    id: 'devguardian',
    title: 'DevGuardian',
    year: '2024',
    shortDescription: 'Secrets & dependency scanner for devs',
    description: 'CLI + Git-hooks tool for scanning secrets, insecure dependencies, and drift in developer-machine configuration.',
    challenges: 'Zero-friction integration into existing dev workflows. Solved by shipping opt-in git-hooks + a pre-commit config so it becomes invisible after setup.',
    features: [
      'Regex + entropy secret scanning',
      'Dependency CVE lookup',
      'Configurable rule packs',
      'CLI + pre-commit hook'
    ],
    techStack: ['Python', 'Bash', 'Git Hooks'],
    image: projectImg('devguardian'),
    accent: ['#64748b', '#0ea5e9'],
    categories: ['misc', 'opensource'],
    githubLink: 'https://github.com/SAQLAINAP/DevGuardian'
  },
  {
    id: 'fuel-cal',
    title: 'Fuel Calculator',
    year: '2023',
    shortDescription: 'Fuel cost + emissions estimator',
    description: 'A minimalist web app that estimates fuel spend, mileage and CO₂ footprint for planned trips — with vehicle-model presets and regional pricing.',
    challenges: 'Keeping the math accurate across fuel types + regions while keeping the UI stupid-simple.',
    features: [
      'Fuel consumption & cost math',
      'CO₂ emission estimates',
      'Multi-vehicle side-by-side compare',
      'Trip-planning presets'
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    image: projectImg('fuel-cal'),
    accent: ['#84cc16', '#22c55e'],
    categories: ['web'],
    githubLink: 'https://github.com/SAQLAINAP/Fuel-Cal'
  },
  {
    id: 'bail-reckoner',
    title: 'Bail-Reckoner',
    year: '2024',
    shortDescription: 'Automated bail-amount calculator',
    description: 'A full-stack legal-tech tool that automates bail-amount estimation — reducing manual effort by 85% and improving accuracy by 95% vs. traditional estimates.',
    challenges: 'Encoding legal provisions (IPC, BNS, BSS + amendments) into an algorithmic rule set that stays maintainable as laws change.',
    features: [
      'Rules-engine over IPC / BNS / BSS',
      'AI chatbot for bail queries',
      'Legal-database integration',
      'Multi-lingual (Indian audiences)',
    ],
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    image: projectImg('bail-reckoner'),
    accent: ['#f97316', '#facc15'],
    categories: ['ai', 'web'],
    githubLink: 'https://github.com/SAQLAINAP/bail-reckoner'
  },
  {
    id: 'speech-spam',
    title: 'Speech Spam Detector',
    year: '2025',
    shortDescription: 'Real-time voice-spam classifier',
    description: 'Streams audio over WebRTC, transcribes with a local Whisper variant, and classifies whether the utterance is spam / scam speech in near real-time.',
    challenges: 'Running transcription + classification with sub-second latency on modest hardware — Whisper-small + INT8 quantization was the sweet spot.',
    features: [
      'WebRTC audio streaming',
      'Whisper-small local transcription',
      'NLP spam classifier head',
      '85%+ detection accuracy',
      'Dockerized for one-command deploy'
    ],
    techStack: ['Python', 'TensorFlow', 'Whisper', 'Flask', 'WebRTC', 'Docker'],
    image: projectImg('speech-spam'),
    accent: ['#a855f7', '#ec4899'],
    categories: ['ai'],
    githubLink: 'https://github.com/SAQLAINAP/speech-spam-detector'
  },
  {
    id: 'bangalore-atlas',
    title: 'Bangalore Atlas',
    year: '2025',
    shortDescription: 'A living map of Bangalore, coded from love',
    description: 'A hobby data-viz project mapping the neighborhoods, transit corridors and everyday textures of Bangalore — the city I built my career in.',
    challenges: 'Geospatial rendering that stays performant on a laptop while remaining pretty enough to explore.',
    features: [
      'Vector tilesets of Bangalore',
      'Layered lens: transit / food / green cover',
      'Deck.gl + MapLibre pipeline',
      'Story-scroll narration mode'
    ],
    techStack: ['MapLibre', 'Deck.gl', 'React', 'TypeScript'],
    image: projectImg('bangalore-atlas'),
    accent: ['#0ea5e9', '#22c55e'],
    categories: ['web', 'misc'],
    githubLink: 'https://github.com/SAQLAINAP'
  }
];

// ---- Education ------------------------------------------------------------

export const education = [
  {
    institution: 'Dayananda Sagar College of Engineering, Bangalore',
    degree: 'Bachelor of Engineering — Artificial Intelligence & Machine Learning',
    period: '2022 – 2026',
    gpa: '9.55 / 10.0'
  }
];

// ---- Certifications -------------------------------------------------------

export const certifications = [
  {
    title: 'Cloud Native Training Foundation',
    description: 'Deep training in cloud-native technologies — Kubernetes, Docker, ArgoCD, OpenTelemetry, container-orchestration patterns and CI/CD design.',
    period: 'Feb 2024 – Present',
    achievement: 'LiFT Scholar',
    issuer: 'Linux Foundation'
  },
  {
    title: 'Kubernetes and Cloud Native Associate (KCNA)',
    description: 'Foundational Kubernetes + cloud-native ecosystem competency: architecture, orchestration, observability, application delivery.',
    period: 'Aug 2025',
    achievement: 'Certified Associate',
    issuer: 'Cloud Native Computing Foundation (CNCF)'
  },
  {
    title: 'Quantum Computing Fundamentals',
    description: 'Quantum algorithms, cryptography and quantum-AI applications, hands-on with Cirq, Qiskit, QNLP and Quantum ML.',
    period: 'Jan 2024 – Present',
    achievement: 'Google-IBM Scholar',
    issuer: 'QubitxQubit — The Coding School'
  },
  {
    title: 'Computer Science Fundamentals (CS50)',
    description: 'Data structures, algorithms, systems thinking and computational-thinking primitives — Harvard\'s flagship CS course.',
    period: 'Feb 2023',
    achievement: 'CS50 Graduate',
    issuer: 'Harvard University'
  }
];

// ---- Achievements ---------------------------------------------------------

export const scholarships = [
  {
    title: 'Shubhra Kar Linux Foundation Scholar — 2026',
    description: 'Awarded the CNCF × Linux Foundation Shubhra Kar scholarship again in 2026 for continued open-source and cloud-native contributions.',
    icon: 'medal',
    date: '2026'
  },
  {
    title: 'Shubhra Kar Linux Foundation Scholar — 2023',
    description: 'First award of the Shubhra Kar / Linux Foundation scholarship for open-source and Linux-systems work.',
    icon: 'medal',
    date: '2023'
  },
  {
    title: 'Google-IBM-QubitxQubit Quantum Computing Scholar',
    description: 'Selected for the Google/IBM quantum-computing scholar cohort for research and applied QML projects.',
    icon: 'atom',
    date: '2023'
  },
  {
    title: 'AI-ML Campus Scholarship',
    description: 'Awarded for sustained academic performance in AI/ML coursework at DSCE.',
    icon: 'robot',
    date: '2023'
  }
];

export const technicalAchievements = [
  {
    title: 'Future of Work × Kroolo Hackathon',
    status: 'Winner',
    date: 'Jun 2025',
    description: 'Built an AI solution for future-of-work automation — winner across all-India teams.',
    tags: ['AI', 'FutureOfWork']
  },
  {
    title: 'Kaspersky × MAHE Hackathon',
    status: 'Winner',
    date: 'Nov 2025',
    description: 'Pan-India cybersecurity + tech hackathon hosted at Manipal by Kaspersky.',
    tags: ['Cybersecurity', 'National']
  },
  {
    title: 'GetCreatr Vibe-Coding Showdown',
    status: 'Winner',
    date: 'Mar 2025',
    description: 'Rapid-prototyping "vibe coding" sprint — shipped fastest cleanest build.',
    tags: ['Coding', 'Prototyping']
  },
  {
    title: 'Inter-continental AI Agents Hackathon × August AI',
    status: 'Winner',
    date: 'Nov 2024',
    description: 'Global AI-agents hackathon with August AI — end-to-end agentic workflow.',
    tags: ['AI', 'Agents']
  },
  {
    title: 'CodeRush — Genesis (DSCE)',
    status: 'Winner',
    date: 'Sep 2025',
    description: 'Winner at the flagship coding sprint of DSCE Genesis.',
    tags: ['Coding', 'Campus']
  },
  {
    title: 'AI Agents Quiz — BTW',
    status: 'Winner',
    date: 'Aug 2026',
    description: 'Top score in the BTW community AI-agents theory + practice quiz.',
    tags: ['AI', 'Agents']
  },
  {
    title: 'Case-Study Contest — WeSrijan (Welingkar)',
    status: 'Winner',
    date: 'Apr 2025',
    description: 'Winning entry at the WeSrijan case-study contest, Welingkar Institute.',
    tags: ['Business', 'CaseStudy']
  },
  {
    title: 'Nano Hackathon w/ GitHub Copilot',
    status: 'Winner',
    date: 'Dec 2025',
    description: 'Copilot-powered nano-hackathon at the GitHub Universe \'25 recap.',
    tags: ['GitHub', 'Copilot']
  },
];

export const entrepreneurialAchievements = [
  { title: 'WeSrijan by Welingkar WeSchool', status: 'Winner', date: '2024', description: 'Awarded for a standout entrepreneurial concept + business plan.' },
  { title: 'Algorand India Accelerator', status: 'Finalist', description: 'Selected for the Algorand India accelerator cohort.' },
  { title: 'Conquest (BITS Pilani)', status: 'Finalist', description: 'Finalist at one of India\'s largest campus startup conclaves.' },
  { title: 'Xartup Fellowship', status: 'Finalist', date: '2023', description: 'Recognized for early startup potential in the Xartup fellowship.' }
];

// ---- Contact --------------------------------------------------------------

export const contact = {
  email: 'saqlainahmedp@gmail.com',
  github: 'https://github.com/SAQLAINAP',
  githubHandle: 'github.com/SAQLAINAP',
  linkedin: 'https://www.linkedin.com/in/saqlain-ahmed-p/',
  linkedinHandle: 'linkedin.com/in/saqlain-ahmed-p',
  linktree: 'https://linktr.ee/saqlainap',
};
