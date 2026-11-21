export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ProjectCodeTab {
  id: string;
  tabLabel: string;
  filename: string;
  status: string;
  lines: Array<{
    indent?: boolean;
    parts: Array<{ text: string; tone?: 'orange' | 'primary' | 'tertiary' | 'muted' | 'pure' }>;
  }>;
}

export interface CertificationItem {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  issuer: string;
  credentialCode: string;
  type: string;
  status: string;
  competencies: string[];
  summary: string;
}

export interface CosmicExperiment {
  id: string;
  code: string;
  orbitLabel: string;
  title: string;
  description: string;
  accent: 'primary' | 'orange' | 'tertiary';
  telemetryRate: string;
  protocol: string;
  activeMetric: string;
}

export interface NetworkLink {
  label: string;
  value: string;
  href: string;
  accent: 'primary' | 'orange' | 'tertiary';
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'certs', label: 'Certs', href: '#certs' },
];

export const PROJECT_CODE_TABS: ProjectCodeTab[] = [
  {
    id: 'routes',
    tabLabel: 'web.php',
    filename: '// routes/web.php',
    status: '200 OK',
    lines: [
      {
        parts: [
          { text: 'Route', tone: 'orange' },
          { text: '::', tone: 'pure' },
          { text: 'get', tone: 'primary' },
          { text: '(', tone: 'pure' },
          { text: "'/'", tone: 'tertiary' },
          { text: ', [PortfolioController::', tone: 'pure' },
          { text: 'class', tone: 'orange' },
          { text: ', ', tone: 'pure' },
          { text: "'stage'", tone: 'tertiary' },
          { text: ']);', tone: 'pure' },
        ],
      },
      {
        parts: [{ text: '// Orchestrating full-stack telemetry and bento modules', tone: 'muted' }],
      },
      {
        parts: [
          { text: 'return', tone: 'primary' },
          { text: ' View::', tone: 'pure' },
          { text: 'make', tone: 'primary' },
          { text: '(', tone: 'pure' },
          { text: "'portfolio.swiss-aura'", tone: 'tertiary' },
          { text: ', [', tone: 'pure' },
        ],
      },
      {
        indent: true,
        parts: [
          { text: "'engineer'", tone: 'muted' },
          { text: ' => ', tone: 'pure' },
          { text: "'Muhammad Jagad Arthoseno'", tone: 'tertiary' },
          { text: ',', tone: 'pure' },
        ],
      },
      {
        indent: true,
        parts: [
          { text: "'role'", tone: 'muted' },
          { text: ' => ', tone: 'pure' },
          { text: "'Lead Full-Stack Developer'", tone: 'tertiary' },
          { text: ',', tone: 'pure' },
        ],
      },
      {
        indent: true,
        parts: [
          { text: "'club'", tone: 'muted' },
          { text: ' => ', tone: 'pure' },
          { text: "'Intelligent Robotic Club (IRC)'", tone: 'orange' },
        ],
      },
      {
        parts: [{ text: ']);', tone: 'pure' }],
      },
    ],
  },
  {
    id: 'controller',
    tabLabel: 'PortfolioController.php',
    filename: '// app/Http/PortfolioController.php',
    status: 'CACHED 4ms',
    lines: [
      {
        parts: [
          { text: 'final class ', tone: 'orange' },
          { text: 'PortfolioController', tone: 'primary' },
          { text: ' extends ', tone: 'orange' },
          { text: 'Controller', tone: 'pure' },
        ],
      },
      {
        parts: [{ text: '// Aggregating projects, certs, and IRC telemetry', tone: 'muted' }],
      },
      {
        parts: [
          { text: 'public function ', tone: 'primary' },
          { text: 'stage', tone: 'tertiary' },
          { text: '(): ', tone: 'pure' },
          { text: 'View', tone: 'orange' },
          { text: ' {', tone: 'pure' },
        ],
      },
      {
        indent: true,
        parts: [
          { text: '$stack', tone: 'muted' },
          { text: ' = [', tone: 'pure' },
          { text: "'Laravel'", tone: 'tertiary' },
          { text: ', ', tone: 'pure' },
          { text: "'Python'", tone: 'tertiary' },
          { text: ', ', tone: 'pure' },
          { text: "'React'", tone: 'tertiary' },
          { text: '];', tone: 'pure' },
        ],
      },
      {
        indent: true,
        parts: [
          { text: '$teamSize', tone: 'muted' },
          { text: ' = ', tone: 'pure' },
          { text: '8', tone: 'orange' },
          { text: '; // Neumedira Indonesia', tone: 'muted' },
        ],
      },
      {
        indent: true,
        parts: [
          { text: 'return ', tone: 'primary' },
          { text: 'compact(', tone: 'pure' },
          { text: "'stack'", tone: 'tertiary' },
          { text: ', ', tone: 'pure' },
          { text: "'teamSize'", tone: 'tertiary' },
          { text: ');', tone: 'pure' },
        ],
      },
      {
        parts: [{ text: '}', tone: 'pure' }],
      },
    ],
  },
  {
    id: 'telemetry',
    tabLabel: 'telemetry.ts',
    filename: '// resources/ts/telemetry.ts',
    status: 'STREAMING',
    lines: [
      {
        parts: [
          { text: 'export const ', tone: 'orange' },
          { text: 'orbitConfig', tone: 'primary' },
          { text: ' = {', tone: 'pure' },
        ],
      },
      {
        indent: true,
        parts: [
          { text: 'region: ', tone: 'muted' },
          { text: "'West Jakarta / IDN (WIB)'", tone: 'tertiary' },
          { text: ',', tone: 'pure' },
        ],
      },
      {
        indent: true,
        parts: [
          { text: 'latencyTargetMs: ', tone: 'muted' },
          { text: '18', tone: 'orange' },
          { text: ',', tone: 'pure' },
        ],
      },
      {
        indent: true,
        parts: [
          { text: 'frameBudgetFps: ', tone: 'muted' },
          { text: '60', tone: 'tertiary' },
          { text: ',', tone: 'pure' },
        ],
      },
      {
        indent: true,
        parts: [
          { text: 'lighthouseScore: ', tone: 'muted' },
          { text: '100', tone: 'tertiary' },
        ],
      },
      {
        parts: [{ text: '};', tone: 'pure' }],
      },
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'brighten-2025',
    date: 'Mar 2025',
    title: 'Brighten English Pare Kediri',
    subtitle: 'Intensive English Proficiency & Technical Communication Program',
    issuer: 'Brighten English Course · Pare, Kediri',
    credentialCode: 'BEC-2025-03-MJA',
    type: 'Certificate',
    status: 'Verified Credential',
    competencies: [
      'Technical Presentation & Public Speaking',
      'Cross-Team Engineering Documentation',
      'Fluency in Academic & Professional English',
    ],
    summary:
      'Completed intensive immersion training focused on structured technical communication, collaborative sprint briefings, and international engineering fluency.',
  },
  {
    id: 'digiup-2024',
    date: 'Okt 2024',
    title: 'Telkom Digiup Cyber Security & Soft Skill',
    subtitle: 'PT Telkom Indonesia · Network Security Fundamentals & Leadership Capabilities',
    issuer: 'PT Telkom Indonesia (DigiUp Program)',
    credentialCode: 'TDI-DIGIUP-2024-CS',
    type: 'Certificate',
    status: 'Verified Credential',
    competencies: [
      'Network Security & Threat Modeling Basics',
      'Web Application Vulnerability Awareness (OWASP)',
      'Team Leadership & Agile Collaboration',
    ],
    summary:
      'National vocational certification by PT Telkom Indonesia validating practical cybersecurity hygiene, network defense fundamentals, and leadership readiness.',
  },
];

export const COSMIC_EXPERIMENTS: CosmicExperiment[] = [
  {
    id: 'webgl',
    code: 'EXP.01',
    orbitLabel: 'ORBIT.05',
    title: 'WebGL & Motion',
    description: 'Shader-driven light refraction and 60fps orbital micro-interactions.',
    accent: 'primary',
    telemetryRate: '60 FPS',
    protocol: 'GPU SHADER',
    activeMetric: 'REFRACTION · 1.42 IOR',
  },
  {
    id: 'robotics',
    code: 'EXP.02',
    orbitLabel: 'IRC.NODE',
    title: 'Robotics Telemetry',
    description: 'Live sensor streams and IRC hardware diagnostics dashboards.',
    accent: 'orange',
    telemetryRate: '18ms',
    protocol: 'IRC BUS',
    activeMetric: 'ACTUATOR · SYNCED',
  },
  {
    id: 'creative-ui',
    code: 'EXP.03',
    orbitLabel: 'BENTO.UI',
    title: 'Creative UI',
    description: 'Swiss-editorial bento grids fused with obsidian glassmorphism.',
    accent: 'tertiary',
    telemetryRate: '100%',
    protocol: 'SWISS GRID',
    activeMetric: 'CONTRAST · WCAG AA',
  },
];

export const NETWORK_LINKS: NetworkLink[] = [
  {
    label: 'WHATSAPP',
    value: '+62 882 5538 6838',
    href: 'https://wa.me/6288255386838',
    accent: 'primary',
  },
  {
    label: 'LINKEDIN',
    value: 'Muhammad Jagad',
    href: 'https://linkedin.com/in/muhammad-jagad-arthoseno-28b4232aa/',
    accent: 'primary',
  },
  {
    label: 'GITHUB',
    value: '@Kostadinanta',
    href: 'https://github.com/Kostadinanta',
    accent: 'primary',
  },
  {
    label: 'PORTFOLIO WEB',
    value: 'Live Vercel App',
    href: 'https://portfolio-website-theta-lyart-40.vercel.app/',
    accent: 'orange',
  },
  {
    label: 'CURRICULUM VITAE',
    value: 'Interactive CV',
    href: 'https://rx.cv/jagadartho250/cv-ukm',
    accent: 'tertiary',
  },
];

export type TechCategory = 'all' | 'language' | 'framework' | 'tooling';

export interface TechSkillItem {
  id:
    | 'php'
    | 'laravel'
    | 'laragon'
    | 'python'
    | 'react'
    | 'tailwindcss'
    | 'javascript'
    | 'blade'
    | 'go'
    | 'json'
    | 'git'
    | 'mysql';
  name: string;
  category: Exclude<TechCategory, 'all'>;
  role: string;
  cvContext: string;
  accent: 'primary' | 'orange' | 'tertiary';
}

export const TECH_CATEGORY_TABS: Array<{ id: TechCategory; label: string }> = [
  { id: 'all', label: 'All Stack' },
  { id: 'language', label: 'Languages' },
  { id: 'framework', label: 'Frameworks & UI' },
  { id: 'tooling', label: 'Tools & Runtime' },
];

export const CV_TECH_STACK: TechSkillItem[] = [
  {
    id: 'php',
    name: 'PHP',
    category: 'language',
    role: 'Backend Language',
    cvContext: 'Powering core server-side business logic and web application architecture at Neumedira Indonesia.',
    accent: 'primary',
  },
  {
    id: 'laravel',
    name: 'Laravel',
    category: 'framework',
    role: 'Full-Stack MVC',
    cvContext: 'Led an 8-developer team building UI, routing, database schemas, and core app workflows.',
    accent: 'orange',
  },
  {
    id: 'laragon',
    name: 'Laragon',
    category: 'tooling',
    role: 'Local Dev Stack',
    cvContext: 'Isolated high-speed local runtime for PHP, Laravel, Apache/Nginx, and database orchestration.',
    accent: 'primary',
  },
  {
    id: 'python',
    name: 'Python',
    category: 'language',
    role: 'Scripting & AI',
    cvContext: 'Algorithmic scripting, portfolio tooling, and Intelligent Robotic Club (IRC) exploration.',
    accent: 'tertiary',
  },
  {
    id: 'react',
    name: 'React',
    category: 'framework',
    role: 'UI Architecture',
    cvContext: 'Component-driven interactive web applications highlighted in full-stack CV profile.',
    accent: 'primary',
  },
  {
    id: 'tailwindcss',
    name: 'TailwindCSS',
    category: 'framework',
    role: 'Utility Styling',
    cvContext: 'Crafted responsive front-end pages at Neumedira Indonesia and Personal Portfolio Web.',
    accent: 'tertiary',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'language',
    role: 'Frontend Logic',
    cvContext: 'Dynamic browser interactions, async state flows, and responsive DOM enhancements.',
    accent: 'orange',
  },
  {
    id: 'blade',
    name: 'Blade',
    category: 'framework',
    role: 'Template Engine',
    cvContext: 'Engineered modular, responsive front-end views seamlessly paired with Laravel routes.',
    accent: 'orange',
  },
  {
    id: 'go',
    name: 'Go',
    category: 'language',
    role: 'Systems & API',
    cvContext: 'Typed backend engineering and lightweight concurrent services for scalable workloads.',
    accent: 'tertiary',
  },
  {
    id: 'json',
    name: 'JSON',
    category: 'tooling',
    role: 'Data Contract',
    cvContext: 'Structured RESTful payload formatting and configuration schemas across full-stack apps.',
    accent: 'tertiary',
  },
  {
    id: 'git',
    name: 'Git / GitHub',
    category: 'tooling',
    role: 'Version Control',
    cvContext: 'Collaborative branch management, pull request reviews, and @Kostadinanta repositories.',
    accent: 'orange',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'tooling',
    role: 'Database Engine',
    cvContext: 'Relational database design, migrations, and ongoing production maintenance.',
    accent: 'primary',
  },
];

