import { FaPython, FaJsSquare, FaJava, FaReact, FaBootstrap, FaNodeJs, FaGitAlt, FaGithub, FaCode, FaLinux, FaMicrosoft, FaDatabase, FaDocker } from 'react-icons/fa';
import { SiTailwindcss, SiCplusplus, SiKubernetes, SiAnsible, SiPenny, SiExpress, SiMongodb, SiFlask } from 'react-icons/si';

// Tech stack data with direct icon strings instead of JSX - updated from resume
export const languages = [
  { name: 'Python', iconType: 'FaPython' },
  { name: 'JavaScript', iconType: 'FaJsSquare' },
  { name: 'Java', iconType: 'FaJava' },
  { name: 'C++', iconType: 'SiCplusplus' },
  { name: 'C', iconType: 'text' },
];

export const frameworks = [
  { name: 'React.js', iconType: 'FaReact' },
  { name: 'Bootstrap', iconType: 'FaBootstrap' },
  { name: 'Express.js', iconType: 'FaNodeJs' },
  { name: 'Tailwind CSS', iconType: 'SiTailwindcss' },
  { name: 'Flask', iconType: 'SiFlask' },
  { name: 'FastAPI', iconType: 'SiFastapi' },
  { name: 'Node.js', iconType: 'SiNodedotjs' },
  { name: 'NextJS', iconType: 'SiNextdotjs' },
  { name: 'Cirq', iconType: 'FaCode' },
];

export const devTools = [
  { name: 'Git', iconType: 'FaGitAlt' },
  { name: 'GitHub', iconType: 'FaGithub' },
  { name: 'Docker', iconType: 'FaDocker' },
  { name: 'Kubernetes', iconType: 'SiKubernetes' },
  { name: 'Linux', iconType: 'FaLinux' },
  { name: 'Postman', iconType: 'SiPostman' },
  { name: 'CI/CD', iconType: 'FaTools' },
  { name: 'OpenAI SDK', iconType: 'SiOpenai' },
  { name: 'Gemini Agents SDK', iconType: 'SiGoogle' },
  { name: 'n8n', iconType: 'SiN8N' },
  { name: 'make.io', iconType: 'SiMake' },
];

export const cloudAndDb = [
  { name: 'Azure', iconType: 'FaMicrosoft' },
  { name: 'SQL', iconType: 'FaDatabase' },
  { name: 'MongoDB', iconType: 'SiMongodb' },
  { name: 'PostgreSQL', iconType: 'FaDatabase' },
  { name: 'Firebase', iconType: 'SiFirebase' },
];

// Experience data from resume
export const experiences = [
  {
    position: 'Product Dev & Engineering Intern',
    company: 'Kroolo-AI',
    location: 'Bangalore',
    period: 'July 2025 - Oct 2025',
    responsibilities: [
      'Developed a <span class="font-semibold">complete policy analyzer and generator site</span> from scratch, processing over 40 policies with 90% + accuracy and reducing manual review time by more than 40%',
      'Assisted in <span class="font-semibold">multiple features for Enterprise Search</span> on Kroolo Platform, improving search response times by 30%'
    ],
    skills: ['Product Development', 'Full Stack', 'Enterprise Search', 'AI Integration']
  },
  {
    position: 'Prompt Engineering Intern',
    company: 'GetCreatr AI',
    location: 'Bangalore',
    period: 'May 2025 - July 2025',
    responsibilities: [
      'Developed and deployed <span class="font-semibold">5 end-to-end AI-embedded full-stack applications</span> using advanced prompting techniques, generating $3,000+ in client project revenue',
      'Assisted in <span class="font-semibold">client projects and developing portfolio projects</span> on Creatr, improving app outreach'
    ],
    skills: ['Prompt Engineering', 'Full Stack', 'AI Applications', 'Client Relations']
  },
  {
    position: 'Campus Ambassador',
    company: 'Coding Ninjas & GeeksforGeeks',
    period: '2023 - 2024',
    responsibilities: [
      'Generated <span class="font-semibold">leads, enhanced online presence</span>, and participated in various technical events',
      'Organized <span class="font-semibold">coding workshops and facilitated learning sessions</span> for peers',
      'Represented Coding Ninjas & GeeksforGeeks on campus and in technical communities'
    ],
    skills: ['Event Management', 'Technical Promotion', 'Leadership']
  },
  {
    position: 'Tech Intern',
    company: 'Spawn Labs',
    location: 'Bangalore',
    period: 'May 2023 - June 2023',
    responsibilities: [
      'Developed a <span class="font-semibold">full-stack application</span> alongside the team',
      'Assisted in <span class="font-semibold">hosting and version control systems</span>',
      'Collaborated with senior developers on project implementation'
    ],
    skills: ['Full Stack', 'DevOps', 'Version Control']
  },
  {
    position: 'Member',
    company: 'PointBlank',
    period: '2022 - 2023',
    responsibilities: [
      'Participated in <span class="font-semibold">organizing technical workshops and events</span> for university students',
      'Contributed to <span class="font-semibold">community outreach programs and educational initiatives</span>',
      'Helped promote technical learning and skill development within the student community'
    ],
    skills: ['Event Organization', 'Community Outreach', 'Technical Education']
  }
];

// Projects data
export type ProjectFilter = 'all' | 'ai' | 'web' | 'quantum' | 'opensource' | 'blockchain' | 'misc';

export interface Project {
  id: string;
  title: string;
  year: string;
  shortDescription: string;
  description: string;
  challenges: string;
  features: string[];
  techStack: string[];
  image: string;
  categories: ProjectFilter[];
  githubLink: string;
  demoLink?: string;
}

export const projects: Project[] = [
  {
    id: 'news-pod',
    title: 'News-Pod',
    year: '2024',
    shortDescription: 'Quantum ML-powered news aggregator',
    description: 'A Quantum Machine Learning enabled Journal data Aggregator-Analyzer for curated digital content. Implemented quantum algorithms to enhance data processing capabilities and provide personalized news feeds based on user preferences while maintaining privacy.',
    challenges: 'Implementing quantum algorithms in a production environment was challenging due to the limited availability of quantum hardware. We developed a hybrid approach that uses classical simulations for training and quantum processing for specific computational tasks.',
    features: [
      'Quantum AI analysis of news content',
      'Personalized news recommendations',
      'Interactive dashboard with analytics',
      'Cross-platform support with responsive design',
      'Privacy-focused data handling'
    ],
    techStack: ['TensorFlow', 'Cirq', 'Qiskit', 'LAMBEQ', 'Python'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
    categories: ['ai', 'quantum'],
    githubLink: 'https://github.com/SAQLAINAP/NewsPod'
  },
  {
    id: 'spam-detection',
    title: 'DistilBERT Spam Detector',
    year: '2024',
    shortDescription: 'Transformer-based spam detection system',
    description: 'A spam message detection system powered by a fine-tuned version of the DistilBERT transformer model, specifically trained for classifying text messages as "Spam" or "Not Spam." The system processes text using DistilBertTokenizer and classifies messages with high accuracy using the AventIQ-AI/distilbert-spam-detection model.',
    challenges: 'Fine-tuning the transformer model required addressing class imbalance in the training data and optimizing for both precision and recall metrics. Ensuring real-time performance while maintaining model accuracy was a significant technical challenge.',
    features: [
      'Fine-tuned DistilBERT model with 94% accuracy',
      'Real-time message classification',
      'Batch processing capability for datasets',
      'Structured CSV output for analysis',
      'Web API integration options (Flask/FastAPI)'
    ],
    techStack: ['PyTorch', 'Transformers', 'HuggingFace', 'Python', 'NLP'],
    image: 'https://images.unsplash.com/photo-1659629271667-b54e665948e8',
    categories: ['ai'],
    githubLink: 'https://github.com/SAQLAINAP/distilbert-spam-detector'
  },
  {
    id: 'densa-app',
    title: 'Densa-App',
    year: '2024',
    shortDescription: 'Scalable news aggregation system',
    description: 'A scalable, Dockerized news aggregation system that scrapes 30+ daily BBC News headlines and automates email delivery to subscribers using APScheduler with 90%+ reliability. Optimized database operations with SQLite, reducing query execution time by 30%.',
    challenges: 'Ensuring reliable scraping from multiple news sources while maintaining a consistent format for email delivery was complex. We focused on creating a scalable architecture that could handle increasing numbers of subscribers and news sources.',
    features: [
      'Automated news scraping from 30+ sources',
      'Email delivery scheduling with APScheduler',
      'Optimized database operations',
      'Containerized with Docker for easy deployment',
      'High reliability metrics (90%+)'
    ],
    techStack: ['Flask', 'BeautifulSoup', 'APScheduler', 'Docker', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c',
    categories: ['web', 'opensource'],
    githubLink: 'https://github.com/SAQLAINAP/DENSA'
  },
  {
    id: 'architectural-ai-gemini',
    title: 'Architectural AI Gemini',
    year: '2024',
    shortDescription: 'Generative AI for architectural design',
    description: 'An AI-powered tool leveraging Google\'s Gemini models to assist in architectural planning and design. It interprets user requirements to generate layout suggestions, analyze zoning data, and provide intelligent design recommendations.',
    challenges: 'Translating abstract user descriptions into concrete visual or structural architectural concepts required careful prompt engineering and integration with multimodal capabilities of Gemini.',
    features: [
      'Generative design suggestions',
      'Multimodal input processing',
      'Code generation for drafting tools',
      'Integration with Gemini Pro Vision'
    ],
    techStack: ['Google Gemini API', 'Python', 'Flask', 'React'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
    categories: ['ai'],
    githubLink: 'https://github.com/SAQLAINAP/Architectural-AI-Gemini'
  },
  {
    id: 'refashion-nft',
    title: 'Refashion NFT',
    year: '2024',
    shortDescription: 'Sustainable fashion NFT marketplace',
    description: 'A blockchain-based marketplace designed to promote sustainable fashion through NFTs. It allows creators to mint and trade digital fashion assets, ensuring authenticity and ownership tracking via smart contracts.',
    challenges: 'Developing secure smart contracts and ensuring a seamless user experience for non-crypto natives was a priority. We focused on optimizing gas fees and implementing a clean UI.',
    features: [
      'NFT Minting and Trading',
      'Secure Smart Contract integration',
      'Wallet connectivity (MetaMask)',
      'Sustainable fashion focus'
    ],
    techStack: ['Solidity', 'Ethereum', 'React', 'Web3.js', 'IPFS'],
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d',
    categories: ['blockchain'],
    githubLink: 'https://github.com/SAQLAINAP/Refashion_NFT'
  },
  {
    id: 'sentiment-analysis',
    title: 'Sentiment Analysis',
    year: '2024',
    shortDescription: 'Advanced NLP sentiment classifier',
    description: 'A comprehensive sentiment analysis project that utilizes various machine learning techniques to classify text data. It explores different models and preprocessing steps to achieve high accuracy in detecting emotional tone.',
    challenges: 'Handling nuances in natural language, such as sarcasm and context-dependent meanings, required experimenting with multiple pre-trained models and fine-tuning strategies.',
    features: [
      'Text pre-processing pipeline',
      'Multiple classification models',
      'Visualization of sentiment trends',
      'Detailed performance metrics'
    ],
    techStack: ['Python', 'NLTK', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    image: 'https://images.unsplash.com/photo-1555435024-2c2d45a1f161',
    categories: ['ai'],
    githubLink: 'https://github.com/SAQLAINAP/Sentiment_Analysis/tree/master'
  },
  {
    id: 'poligap',
    title: 'Poligap',
    year: '2024',
    shortDescription: 'Modern political engagement platform',
    description: 'A live platform connecting citizens with policy makers, bridging the gap in political communication. It features real-time updates, forums for discussion, and direct channels for feedback.',
    challenges: 'Building a platform that handles real-time user interaction and ensures data integrity at scale was key. We focused on a responsive, accessible design for a broad user base.',
    features: [
      'Real-time policy updates',
      'Community discussion forums',
      'Direct feedback channels',
      'Live deployment at poligap.com'
    ],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1529101091760-61df6be5d10d',
    categories: ['web'],
    githubLink: 'https://github.com/SAQLAINAP/Poligap',
    demoLink: 'https://poligap.com'
  },
  {
    id: 'safeclick',
    title: 'SafeClick',
    year: '2024',
    shortDescription: 'Browser security extension',
    description: 'A preventative security tool designed to protect users from malicious links and phishing attempts. It analyzes URLs in real-time and warns users before they navigate to potentially unsafe sites.',
    challenges: ' achieving low-latency URL analysis without compromising browsing speed. We implemented efficient local caching and heuristic analysis to minimize API calls.',
    features: [
      'Real-time URL analysis',
      'Phishing detection',
      'Visual warning indicators',
      'Lightweight browser extension'
    ],
    techStack: ['JavaScript', 'Browser Extension API', 'HTML/CSS'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3',
    categories: ['web', 'misc'],
    githubLink: 'https://github.com/SAQLAINAP/SafeClick'
  },
  {
    id: 'devguardian',
    title: 'DevGuardian',
    year: '2024',
    shortDescription: 'Developer workflow security tool',
    description: 'A specialized tool for developers to safeguard their environments and manage secrets securely. It helps identify vulnerabilities in dependencies and configuration files.',
    challenges: 'Designing a tool that integrates seamlessly into existing developer workflows without adding friction. We focused on CLI usability and clear reporting.',
    features: [
      'Secret scanning',
      'Dependency vulnerability check',
      'Configurable security rules',
      'CLI interface'
    ],
    techStack: ['Python', 'Bash', 'Git Hooks'],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb',
    categories: ['misc'],
    githubLink: 'https://github.com/SAQLAINAP/DevGuardian'
  },
  {
    id: 'fuel-cal',
    title: 'Fuel Calculator',
    year: '2023',
    shortDescription: 'Fuel consumption & cost calculator',
    description: 'A web application that helps users calculate fuel consumption, costs, and emission metrics for various vehicles. The tool provides insights for budget planning and environmental impact awareness with an intuitive interface.',
    challenges: 'Ensuring accurate calculations across different fuel types, vehicle models, and regional pricing required extensive data collection and verification. The UI needed to be simple enough for quick calculations but detailed enough for in-depth analysis.',
    features: [
      'Fuel consumption calculations',
      'Cost estimations based on distance',
      'CO2 emission metrics',
      'Multiple vehicle comparison',
      'Trip planning features'
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    image: 'https://images.unsplash.com/photo-1601059281089-3f5f066dba3d',
    categories: ['web'],
    githubLink: 'https://github.com/SAQLAINAP/Fuel-Cal'
  },
  {
    id: 'bail-reckoner',
    title: 'Bail-Reckoner',
    year: '2024',
    shortDescription: 'Automated bail amount calculator',
    description: 'A full-stack web application that automates bail amount calculations, reducing manual effort by 85% and improving accuracy by 95% compared to traditional estimates. Integrated legal provisions from IPC, BNS, BSS, and recent amendments, ensuring accurate and up-to-date bail estimations.',
    challenges: 'Translating complex legal provisions and precedents into an algorithmic system required extensive legal research and validation. Creating a system that could adapt to changing legal frameworks and amendments was a significant challenge.',
    features: [
      'Automated bail calculations based on legal parameters',
      'AI-powered chatbot for bail-related queries',
      'Integration with legal databases',
      'Multilingual support for Indian audiences',
      'Up-to-date with latest amendments'
    ],
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f',
    categories: ['ai', 'web'],
    githubLink: 'https://github.com/saqlainahmed/bail-reckoner'
  },
  {
    id: 'speech-spam',
    title: 'Speech Spam Detector',
    year: '2025',
    shortDescription: 'Real-time speech spam detection',
    description: 'A real-time spam detection system using NLP and TensorFlow, achieving 85%+ accuracy in identifying spam speech patterns. Integrated WebRTC for real-time audio streaming and Flask for backend processing, ensuring a scalable and efficient solution.',
    challenges: 'Processing and analyzing speech in real-time presented significant computational challenges. Training the model to recognize spam patterns across different accents, languages, and speech patterns required extensive data collection and model tuning.',
    features: [
      'Real-time speech analysis',
      'NLP-based spam pattern recognition',
      'WebRTC integration for audio streaming',
      'Dockerized deployment for scalability',
      '85%+ detection accuracy'
    ],
    techStack: ['Python', 'TensorFlow', 'NLP', 'Flask', 'WebRTC', 'Docker'],
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008',
    categories: ['ai'],
    githubLink: 'https://github.com/saqlainahmed/speech-spam-detector'
  }
];

// Education data from resume
export const education = [
  {
    institution: 'Dayananda Sagar College of Engineering, Bangalore',
    degree: 'Bachelor of Engineering in Artificial Intelligence and Machine Learning',
    period: '2022 - 2026',
    gpa: '9.55/10.0'
  }
];

// Professional certifications from resume
export const certifications = [
  {
    title: 'Cloud Native Training Foundation',
    description: 'Completed comprehensive training in cloud-native technologies including Kubernetes, Docker, ArgoCD, and OpenTelemetry. Learned advanced containerization techniques, CI/CD pipelines, and orchestration strategies for modern application development.',
    period: 'Feb 2024 - Present',
    achievement: 'LiFT Scholar',
    issuer: 'Linux Foundation'
  },
  {
    title: 'Kubernetes and Cloud Native Associate (KCNA)',
    description: 'Demonstrated foundational knowledge of Kubernetes and the cloud-native ecosystem. Topics covered include Kubernetes architecture, container orchestration, cloud-native architecture, observability, and application delivery.',
    period: 'Aug 2025',
    achievement: 'Certified Associate',
    issuer: 'Cloud Native Computing Foundation (CNCF)'
  },
  {
    title: 'Quantum Computing Fundamentals',
    description: 'Mastered quantum algorithms, cryptography, and quantum AI applications. Gained hands-on experience with quantum programming frameworks including Cirq, Qiskit, and developed applications in QNLP and Quantum Machine Learning.',
    period: 'Jan 2024 - Present',
    achievement: 'Google-IBM Scholar',
    issuer: 'QbitxQbit-The Coding School'
  },
  {
    title: 'Computer Science Fundamentals',
    description: 'This certification focused on understanding computer science concepts in-depth with real-world problem-solving methods. Covered data structures, algorithms, systems design, and computational thinking principles.',
    period: 'Feb 2023',
    achievement: 'CS50 Graduate',
    issuer: 'Harvard University'
  }
];

// Achievements data
export const scholarships = [
  {
    title: 'Shubra Kali Linux Foundation Scholar',
    description: 'Recognized for technical expertise in Linux systems and open-source contributions',
    icon: 'medal',
    date: 'August 2023'
  },
  {
    title: 'Google-IBM-QbitxQbit Quantum Computing Scholar',
    description: 'Selected for excellence in quantum computing research and applications',
    icon: 'atom',
    date: 'August 2023'
  },
  {
    title: 'AIML Campus Scholarship',
    description: 'Awarded for outstanding academic performance in AI and ML coursework',
    icon: 'robot',
    date: 'August 2023'
  }
];

export const technicalAchievements = [
  {
    title: 'TGB X Kroolo Future of Work AI Hackathon',
    status: 'Winner',
    description: 'Developed an innovative AI solution for the future of work.',
    tags: ['AI', 'FutureOfWork']
  },
  {
    title: 'Kaspersky SkyHack Pan India Hackathon',
    status: 'Winner',
    description: 'Secured first place in a national level cybersecurity and tech hackathon.',
    tags: ['Cybersecurity', 'Tech']
  },
  {
    title: 'GetCreatr Vibe Coding Showdown',
    status: 'Winner',
    date: '2024-2025',
    description: 'Top performance in coding and rapid prototyping showdown.',
    tags: ['Coding', 'Prototyping']
  },
  {
    title: 'Intercontinental AI Hackathon',
    status: 'Winner',
    description: 'Global recognition for AI-driven solution.',
    tags: ['Global', 'AI']
  },
  {
    title: 'Genesis Vibe Coding',
    status: 'Finalist',
    description: 'Reached the finals in this competitive coding event.',
    tags: ['Coding']
  },
  {
    title: 'Quant-A-Maze',
    status: 'Finalist',
    description: 'Implemented quantum algorithms for complex problem solving.',
    tags: ['Quantum', 'Algorithms']
  },
  {
    title: 'Smart India Hackathon',
    status: 'Finalist',
    description: 'Selected for the grand finale of SIH.',
    tags: ['Nationwide', 'Innovation']
  },
  {
    title: 'TON HackerHouse',
    status: 'Finalist',
    description: 'Finalist in The Open Network blockchain hackathon.',
    tags: ['Blockchain', 'TON']
  },
  {
    title: 'SideTrip AI Hackathon',
    status: 'Finalist',
    description: 'Recognized for unique AI travel solution.',
    tags: ['AI', 'Travel']
  }
];

export const entrepreneurialAchievements = [
  {
    title: 'WeSrijan by Welingkar WeSchool',
    status: 'Winner',
    date: '2024',
    description: 'Awarded for exceptional entrepreneurial concept and business plan.'
  },
  {
    title: 'Algorand India Accelerator',
    status: 'Finalist',
    description: 'Selected for the prestigious blockchain accelerator program.'
  },
  {
    title: 'Conquest (BITS Pilani)',
    status: 'Finalist',
    description: 'Finalist in one of India\'s largest startup conclaves.'
  },
  {
    title: 'Xartup Fellowship',
    status: 'Finalist',
    date: '2023',
    description: 'Recognized potential in the startup ecosystem.'
  }
];
