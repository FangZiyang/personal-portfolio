// Single source of truth for all portfolio content.
// Derived from Ryan Fang's CV (Dynamic_CV).

export const profile = {
  name: 'Ryan Fang',
  fullName: 'Ziyang (Ryan) Fang',
  roles: ['Software Engineer', 'Backend & Distributed Systems', 'AI Infrastructure', 'High-Concurrency Microservices'],
  location: 'Toronto, ON',
  email: 'fangz58@mcmaster.ca',
  phone: '(+1) 416-888-5379',
  linkedin: 'https://www.linkedin.com/in/ziyang-fang/',
  github: 'https://github.com/FangZiyang',
  availability: 'Available September 2026',
  lede:
    'I build backend services and AI infrastructure that stay fast and reliable under serious load.',
  intro:
    'Master of Engineering student in Computing & Software at McMaster University. I build scalable backend services and AI infrastructure — from enterprise integration platforms to microservices that sustain tens of thousands of requests per second.',
  about:
    "I'm a software engineer who enjoys the hard parts of backend systems: reliability under load, clean service boundaries, and observability you can actually trust. My work spans production AI agents at RBC, enterprise integration at the City of Toronto, and high-concurrency commerce microservices at Meituan.",
};

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
    role: 'Software Engineer Co-op — GAIA AI Platform',
    date: 'Sep 2025 — Apr 2026',
    location: 'Toronto, ON',
    summary:
      'Production-grade AI agents on GAIA, an internal enterprise platform for natural-language access to operational knowledge.',
    images: ['images/rbc.png'],
    bullets: [
      'Built a React + TypeScript chatbot interface and FastAPI backend endpoints, enabling internal users to interact with AI agents through natural language.',
      'Developed production AI agents with LangGraph workflows and Redis-backed state recovery, reducing long-running execution failures by ~20%.',
      'Implemented LLM output validation via Elasticsearch APIs for syntax and structural checks, cutting invalid responses by ~25%.',
      'Built Grafana dashboards for success rate and execution metrics, and migrated CI/CD from Jenkins to GitHub Actions on Kubernetes.',
    ],
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'LangGraph', 'Redis', 'Elasticsearch', 'Kubernetes', 'Grafana', 'Kafka'],
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
      'Implemented enterprise integration flows with Apache Camel, reducing manual coordination between legacy and modern systems by ~25%.',
      'Built Java + Spring Boot integration services with Apache Camel and Lucene, shortening internal search setup time by ~30%.',
      'Engineered document processing, real-time monitoring, and configuration validation, reducing deployment errors by ~20%.',
    ],
    tech: ['Java', 'Spring Boot', 'Apache Camel', 'Apache Lucene', 'Redis', 'REST APIs', 'Monitoring'],
  },
  {
    id: 'meituan_pl',
    company: 'Meituan',
    mono: 'M',
    logo: 'meituan.png',
    accent: 'linear-gradient(135deg, #ffc300, #ff8a00)',
    role: 'Core Developer — Product List Microservice',
    date: 'Jul 2022 — Jul 2023',
    location: 'Beijing, China',
    summary:
      'A backend service assembling product cards across multiple business pages and shopping scenarios at massive scale.',
    images: ['images/meituan-product-1.png', 'images/meituan-product-2.png'],
    bullets: [
      'Standardized display logic across 30+ interfaces, reducing redundancy and improving consistency across business scenarios.',
      'Designed dynamic filtering, pricing and promotion rules, reducing manual configuration time from 3 days to zero.',
      'Optimized service performance for 57,000 peak QPS with response times under 120ms during critical operations.',
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
    location: 'Beijing, China',
    summary:
      'High-traffic promotional pages with time-limited discounts, multiple sale windows and downstream service aggregation.',
    images: ['images/meituan-flashsale.png'],
    bullets: [
      'Developed Redis-based static fallback mechanisms, preventing blank pages during high-concurrency flash sale events.',
      'Enhanced promotions with A/B testing, configurable carousels and countdown timers, increasing campaign iteration speed by ~20%.',
      'Improved downstream request coordination and prioritized in-stock items, reducing checkout friction by ~25%.',
    ],
    tech: ['Java', 'Spring Boot', 'Redis', 'Microservices', 'A/B Testing', 'Fault Tolerance'],
  },
];

export const skillGroups = [
  {
    icon: 'code',
    title: 'Languages',
    span: 'wide',
    skills: ['Java', 'Python', 'C++', 'TypeScript', 'JavaScript', 'SQL', 'HTML'],
  },
  {
    icon: 'layers',
    title: 'Frameworks',
    skills: ['Spring Boot', 'Spring Framework', 'React', 'FastAPI', 'LangChain', 'LangGraph', 'Apache Camel'],
  },
  {
    icon: 'database',
    title: 'Data & Messaging',
    skills: ['MySQL', 'PostgreSQL', 'Redis', 'Kafka', 'RabbitMQ', 'Elasticsearch', 'ELK'],
  },
  {
    icon: 'cloud',
    title: 'Infrastructure & DevOps',
    span: 'wide',
    skills: ['Docker', 'Kubernetes', 'AWS', 'OpenShift', 'Linux', 'GitHub Actions', 'Jenkins', 'CI/CD'],
  },
  {
    icon: 'cpu',
    title: 'Architecture',
    skills: ['Microservices', 'Distributed Systems', 'REST APIs', 'gRPC', 'High Concurrency', 'Fault Tolerance'],
  },
  {
    icon: 'activity',
    title: 'Observability',
    skills: ['Grafana', 'Kibana', 'Logstash', 'Spark', 'ETL', 'Monitoring'],
  },
];

export const projects = [
  {
    title: 'QRPC',
    tagline: 'Lightweight Java RPC Framework',
    mono: 'Q',
    accent: 'linear-gradient(135deg, #2997ff, #7c6cff)',
    description:
      'A custom RPC framework with ZooKeeper-based service discovery, pluggable serialization (Protobuf, Kryo, XML), load balancing, retry strategies and fault tolerance.',
    tech: ['Java', 'ZooKeeper', 'Netty', 'Protobuf'],
    link: 'https://github.com/FangZiyang',
    images: ['images/qrpc-1.png', 'images/qrpc-2.png', 'images/qrpc-3.png'],
  },
  {
    title: 'Smart Parking',
    tagline: 'Full-stack Parking Management',
    mono: 'P',
    accent: 'linear-gradient(135deg, #5ce0c2, #2997ff)',
    description:
      'A full-stack parking management system with real-time spot detection, reservation flows and integrated payment processing.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Redis'],
    link: 'https://github.com/FangZiyang',
  },
  {
    title: 'Flash Sale',
    tagline: 'High-Concurrency Commerce',
    mono: 'F',
    accent: 'linear-gradient(135deg, #f0abfc, #7c6cff)',
    description:
      'High-concurrency flash sale system with Redis-based inventory management, rate limiting and graceful degradation under extreme load.',
    tech: ['Java', 'Spring Boot', 'Redis', 'RabbitMQ'],
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
    degree: 'Master of Engineering',
    date: 'Sep 2019 — Mar 2022',
    location: 'Hangzhou, China',
  },
  {
    school: 'Fuzhou University',
    mono: 'FZU',
    logo: 'fzu.png',
    accent: 'linear-gradient(135deg, #1a7a4c, #2bb673)',
    degree: 'Bachelor of Engineering',
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
