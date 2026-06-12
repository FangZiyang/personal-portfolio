// Single source of truth for all portfolio content.
// Derived from Ryan Fang's CV (E:\定制简历\Dynamic_CV\ryan_fang_resume.tex)
// and the verified experience sources in Dynamic_CV/tech_design.md.

export const profile = {
  name: 'Ryan Fang',
  fullName: 'Ziyang (Ryan) Fang',
  roles: [
    'distributed backend systems',
    'production AI agents',
    'high-concurrency microservices',
    'enterprise integration platforms',
  ],
  location: 'Toronto, ON',
  email: 'fangz58@mcmaster.ca',
  phone: '(+1) 416-888-5379',
  linkedin: 'https://www.linkedin.com/in/ziyang-fang/',
  github: 'https://github.com/FangZiyang',
  intro:
    'Master of Engineering student in Computing & Software at McMaster University. I build scalable backend services and AI infrastructure — from enterprise integration platforms to microservices that sustain tens of thousands of requests per second.',
  about:
    "I'm a software engineer who enjoys the hard parts of backend systems: reliability under load, clean service boundaries, and observability you can actually trust. My work spans production AI agents at RBC, enterprise LLM infrastructure at the City of Toronto, and high-concurrency commerce microservices at Meituan.",
};

// Lines rendered inside the hero terminal card.
export const terminalLines = [
  { cmd: 'whoami', out: 'Ryan Fang — Software Engineer · Toronto' },
  { cmd: 'latest --role', out: 'SRE Co-op @ RBC — production AI agents on GAIA' },
  { cmd: 'peak --handled', out: '57,000 QPS · <120 ms under critical load' },
  { cmd: 'status', out: 'all systems operational — Toronto, ON', accent: true },
];

// Marquee ribbon under the hero.
export const tickerItems = [
  'Java', 'Python', 'Spring Boot', 'React', 'TypeScript', 'LangGraph',
  'Redis', 'Kafka', 'Elasticsearch', 'MySQL', 'PostgreSQL', 'gRPC',
  'Docker', 'Kubernetes', 'AWS', 'Microservices', 'FastAPI', 'Grafana',
];

export const stats = [
  { value: 57000, suffix: '', label: 'Peak QPS sustained', sub: 'Meituan Product List service' },
  { value: 120, prefix: '<', suffix: 'ms', label: 'Response latency', sub: 'Under critical load' },
  { value: 30, suffix: '+', label: 'Service interfaces', sub: 'Standardized & maintained' },
  { value: 3, suffix: '', label: 'Engineering roles', sub: 'RBC · City of Toronto · Meituan' },
];

export const experiences = [
  {
    id: 'rbc',
    company: 'Royal Bank of Canada',
    mono: 'RBC',
    logo: 'rbc.png',
    accent: 'linear-gradient(135deg, #005daa, #0a2a66)',
    role: 'Site Reliability Engineering Co-op — GAIA AI Platform',
    date: 'Sep 2025 — Apr 2026',
    location: 'Toronto, ON',
    summary:
      'Production-grade AI agents on GAIA, an internal enterprise platform for natural-language access to operational knowledge.',
    images: ['images/rbc.png'],
    bullets: [
      'Contributed to production-grade AI agents on the GAIA platform — memory management, multi-step reasoning workflows and streaming responses — with reliable state persistence and recovery built on Redis and LangGraph for long-running tasks.',
      'Designed output validation that detects and corrects inaccuracies in LLM agent responses, using Elasticsearch APIs for syntax and structural checks to surface anomalies early.',
      'Built and maintained Grafana dashboards visualizing task success rate, execution volume, result distribution and failure cases, enabling data-driven operational decisions.',
      'Migrated CI/CD workflows from Jenkins to GitHub Actions.',
    ],
    tech: ['Python', 'LangGraph', 'LangChain', 'Redis', 'Elasticsearch', 'Grafana', 'GitHub Actions', 'REST APIs'],
  },
  {
    id: 'city',
    company: 'City of Toronto',
    mono: 'CT',
    logo: 'city.jpg',
    accent: 'linear-gradient(135deg, #00838f, #014b54)',
    role: 'Software Engineer Co-op — Enterprise Integration',
    date: 'May 2025 — Sep 2025',
    location: 'Toronto, ON',
    summary:
      'Enterprise integration services connecting legacy and modern municipal systems through reusable, observable routes.',
    bullets: [
      'Implemented and maintained enterprise-grade integration flows with Apache Camel, streamlining communication between legacy and modern systems.',
      'Built scalable LLM infrastructure on Spring Boot, Apache Camel and Apache Lucene, integrating legacy data systems to enable retrieval-augmented generation and semantic search at scale.',
      'Engineered embedding pipelines and real-time monitoring with automated configuration validation, hardening reliability and accelerating the LLM deployment cycle enterprise-wide.',
    ],
    tech: ['Java', 'Spring Boot', 'Apache Camel', 'Apache Lucene', 'RAG', 'Redis', 'REST APIs'],
  },
  {
    id: 'meituan_pl',
    company: 'Meituan',
    mono: 'M',
    logo: 'meituan.png',
    accent: 'linear-gradient(135deg, #ffc300, #ff8a00)',
    role: 'Core Developer — Product List Microservice',
    date: 'Jul 2022 — Jul 2023',
    location: 'Beijing, China · Software Engineer (L5)',
    summary:
      'A backend service assembling product cards across multiple business pages and shopping scenarios at massive scale.',
    images: ['images/meituan-product-1.png', 'images/meituan-product-2.png'],
    bullets: [
      'Standardized item display logic across a microservice managing 30+ interfaces, reducing system redundancy and ensuring consistency across business scenarios.',
      'Designed dynamic business rules for filtering, pricing and promotions, cutting manual configuration time from 3 days to zero.',
      'Optimized performance to sustain 57,000 peak QPS with response times under 120 ms, ensuring high availability during critical operations.',
    ],
    tech: ['Java', 'Spring Boot', 'Redis', 'MySQL', 'Microservices', 'RPC', 'High Concurrency'],
  },
  {
    id: 'meituan_fs',
    company: 'Meituan',
    mono: 'M',
    logo: 'meituan.png',
    accent: 'linear-gradient(135deg, #ffc300, #ff8a00)',
    role: 'Core Developer — Flash Sale Microservice',
    date: 'Jul 2022 — Jul 2023',
    location: 'Beijing, China · Software Engineer (L5)',
    summary:
      'High-traffic promotional pages with time-limited discounts, multiple sale windows and downstream service aggregation.',
    images: ['images/meituan-flashsale.png'],
    bullets: [
      'Developed Redis-based static fallback mechanisms preventing blank pages under high concurrency, keeping the shopping experience seamless through sale spikes.',
      'Enhanced promotional strategies with A/B testing, configurable carousels and countdown timers, increasing user engagement with actionable insights.',
      'Improved downstream request coordination and prioritized in-stock items with active promotions, reducing user frustration and boosting sales efficiency.',
    ],
    tech: ['Java', 'Spring Boot', 'Redis', 'Microservices', 'A/B Testing', 'Fault Tolerance'],
  },
];

// Grounded in ryan_fang_resume.tex + Dynamic_CV verified experience sources.
export const skillGroups = [
  {
    icon: 'code',
    title: 'Languages',
    span: 'wide',
    hue: 'cyan',
    skills: ['Java', 'Python', 'C++', 'TypeScript', 'JavaScript', 'SQL', 'HTML'],
  },
  {
    icon: 'sparkles',
    title: 'AI & LLM Engineering',
    span: 'wide',
    hue: 'violet',
    skills: ['LangChain', 'LangGraph', 'RAG', 'Semantic Search', 'Embedding Pipelines', 'Multi-Agent Systems', 'LLM Output Validation'],
  },
  {
    icon: 'layers',
    title: 'Backend Frameworks',
    hue: 'indigo',
    skills: ['Spring Boot', 'Spring Framework', 'FastAPI', 'React', 'Apache Camel', 'Netty'],
  },
  {
    icon: 'database',
    title: 'Databases & Messaging',
    hue: 'mint',
    skills: ['MySQL', 'PostgreSQL', 'Redis', 'Kafka', 'RabbitMQ', 'Elasticsearch', 'Apache Lucene'],
  },
  {
    icon: 'cloud',
    title: 'Cloud & DevOps',
    hue: 'amber',
    skills: ['Docker', 'Kubernetes', 'OpenShift', 'AWS', 'Linux', 'CI/CD', 'GitHub Actions', 'Jenkins'],
  },
  {
    icon: 'cpu',
    title: 'Architecture',
    hue: 'rose',
    skills: ['Microservices', 'Distributed Systems', 'High Concurrency', 'REST APIs', 'gRPC', 'RPC', 'Fault Tolerance', 'ZooKeeper'],
  },
  {
    icon: 'activity',
    title: 'Observability',
    hue: 'cyan',
    skills: ['Grafana', 'Kibana', 'Logstash', 'ELK Stack', 'Real-time Monitoring'],
  },
  {
    icon: 'tool',
    title: 'Tooling & Quality',
    hue: 'indigo',
    skills: ['Git', 'Swagger', 'Unit Testing', 'A/B Testing', 'Protobuf'],
  },
];

export const projects = [
  {
    title: 'QRPC',
    tagline: 'Lightweight Java RPC Framework',
    mono: 'Q',
    accent: 'linear-gradient(135deg, #7c8cff, #b07cff)',
    description:
      'A custom RPC framework with ZooKeeper-based service discovery, pluggable serialization (Protobuf, Kryo, XML), load balancing, retry strategies and fault tolerance.',
    tech: ['Java', 'ZooKeeper', 'Netty', 'Protobuf'],
    link: 'https://github.com/FangZiyang',
    images: ['images/qrpc-1.png', 'images/qrpc-2.png', 'images/qrpc-3.png'],
  },
  {
    title: 'Flash Sale',
    tagline: 'High-Concurrency Commerce',
    mono: 'F',
    accent: 'linear-gradient(135deg, #b07cff, #ff7ad9)',
    description:
      'High-concurrency flash sale system with Redis-based inventory management, rate limiting and graceful degradation under extreme load.',
    tech: ['Java', 'Spring Boot', 'Redis', 'RabbitMQ'],
    link: 'https://github.com/FangZiyang',
  },
  {
    title: 'Smart Parking',
    tagline: 'Full-stack Parking Management',
    mono: 'P',
    accent: 'linear-gradient(135deg, #3ddfb4, #43d9ff)',
    description:
      'A full-stack parking management system with real-time spot detection, reservation flows and integrated payment processing.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Redis'],
    link: 'https://github.com/FangZiyang',
  },
];

export const education = [
  {
    school: 'McMaster University',
    mono: 'Mc',
    logo: 'McMaster.png',
    accent: 'linear-gradient(135deg, #7a003c, #b30059)',
    degree: 'Master of Engineering, Computing & Software',
    date: 'Sep 2024 — Sep 2026',
    location: 'Hamilton, ON',
  },
  {
    school: 'Zhejiang University',
    mono: 'ZJU',
    logo: 'zhejiang.png',
    accent: 'linear-gradient(135deg, #003f88, #0067b8)',
    degree: 'Master of Engineering, Mechanical Engineering',
    date: 'Sep 2019 — Mar 2022',
    location: 'Hangzhou, China',
  },
  {
    school: 'Fuzhou University',
    mono: 'FZU',
    logo: 'fzu.png',
    accent: 'linear-gradient(135deg, #1a7a4c, #2bb673)',
    degree: 'Bachelor of Engineering, Mechanical Design, Manufacture & Automation',
    date: 'Sep 2015 — Jun 2019',
    location: 'Fuzhou, China',
  },
];

export const navSections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
];
