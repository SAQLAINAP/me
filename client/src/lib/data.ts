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
  { name: 'Cirq', iconType: 'FaCode' },
  { name: 'PennyLane', iconType: 'SiPenny' },
];

export const devTools = [
  { name: 'Git', iconType: 'FaGitAlt' },
  { name: 'GitHub', iconType: 'FaGithub' },
  { name: 'Docker', iconType: 'FaDocker' },
  { name: 'Kubernetes', iconType: 'SiKubernetes' },
  { name: 'Ansible', iconType: 'SiAnsible' },
  { name: 'Linux', iconType: 'FaLinux' },
];

export const cloudAndDb = [
  { name: 'Azure', iconType: 'FaMicrosoft' },
  { name: 'SQL', iconType: 'FaDatabase' },
  { name: 'MongoDB', iconType: 'SiMongodb' },
  { name: 'PostgreSQL', iconType: 'FaDatabase' },
];

// Experience data from resume
export const experiences = [
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
export type ProjectFilter = 'all' | 'ai' | 'web' | 'quantum' | 'opensource';

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

export const hackathons = [
  {
    title: 'Smart India Hackathon 2023',
    description: 'Developed an AI-powered solution for sustainable urban planning',
    status: 'Finalist',
    tags: ['AI/ML', 'Sustainability', 'Smart Cities']
  },
  {
    title: 'Intercontinental AI Hackathon',
    description: 'Created a cross-platform solution for healthcare diagnostics using ML',
    status: 'Runner-Up',
    tags: ['Healthcare', 'ML', 'Diagnostics']
  },
  {
    title: 'Quant-A-Maze',
    description: 'Implemented quantum algorithms for financial market prediction',
    status: 'Finalist',
    tags: ['Quantum', 'Finance', 'Algorithms']
  }
];

// Entrepreneurial achievements
export const entrepreneurial = [
  {
    title: 'Algorand India Accelerator',
    status: 'Finalist',
    date: 'November 2023'
  },
  {
    title: 'Conquest (BITS Pilani)',
    status: 'Finalist',
    date: 'November 2023'
  },
  {
    title: 'Xartup Fellowship',
    status: 'Finalist',
    date: 'November 2023'
  }
];
