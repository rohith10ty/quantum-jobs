export const mockJobs = [
  {
    id: 'job-1',
    title: 'Senior Full-Stack Engineer (React & Go)',
    company: 'Linear',
    companyId: 'linear',
    logoInitials: 'LN',
    badgeColor: 'bg-indigo-900 text-indigo-100',
    location: 'San Francisco, CA (Hybrid)',
    isRemote: true,
    jobType: 'Full-time',
    category: 'software-development',
    categoryLabel: 'Software Development',
    experience: 'Senior (5+ yrs)',
    experienceLevel: 'senior',
    salaryMin: 175000,
    salaryMax: 220000,
    salaryFormatted: '$175,000 - $220,000 + 0.15% Equity',
    postedTime: '2 hours ago',
    featured: true,
    tags: ['React', 'TypeScript', 'Go', 'GraphQL', 'WebSockets'],
    overview: 'Linear is looking for an exceptional Senior Full-Stack Engineer to architect our next-generation sync engine and build fluid, desktop-grade collaborative features.',
    responsibilities: [
      'Design, architect, and deliver real-time synchronization systems and local-first data layers.',
      'Refine frontend interactions ensuring 60fps animations and sub-50ms latency across the web client.',
      'Work closely with founders and designers from conceptualization to deployment with minimal bureaucracy.',
      'Contribute to backend services written in Go and Node.js serving millions of monthly active requests.'
    ],
    requirements: [
      '5+ years of production experience building high-traffic, stateful web applications.',
      'Deep fluency with modern React, TypeScript, and concurrent state primitives.',
      'Strong fundamentals in distributed systems, offline caching, and conflict resolution (CRDTs).',
      'Demonstrated passion for craft, micro-interactions, and keyboard-first developer ergonomics.'
    ],
    benefits: [
      'Comprehensive health, dental, and vision insurance with 100% covered premiums.',
      '$4,000 annual home office & hardware budget.',
      'Flexible time off with 4 weeks mandatory minimum vacation.',
      'Annual company retreats in top global destinations.'
    ]
  },
  {
    id: 'job-2',
    title: 'Senior Research Scientist (LLMs & Alignment)',
    company: 'Anthropic',
    companyId: 'anthropic',
    logoInitials: 'AN',
    badgeColor: 'bg-amber-950 text-amber-100',
    location: 'San Francisco, CA',
    isRemote: false,
    jobType: 'Full-time',
    category: 'data-science',
    categoryLabel: 'Data Science & AI',
    experience: 'Lead / Staff (7+ yrs)',
    experienceLevel: 'lead',
    salaryMin: 280000,
    salaryMax: 360000,
    salaryFormatted: '$280,000 - $360,000 + Significant Equity',
    postedTime: '4 hours ago',
    featured: true,
    tags: ['PyTorch', 'LLMs', 'Reinforcement Learning', 'RLHF', 'Distributed Training'],
    overview: 'Anthropic is seeking an experienced AI Research Scientist to drive breakthroughs in constitutional AI, mechanistic interpretability, and robust model alignment.',
    responsibilities: [
      'Conduct original empirical research on large multimodal language models and alignment safety.',
      'Develop novel training paradigms integrating RLHF and automated feedback loops.',
      'Analyze internal model representations to prevent hallucinations, deception, and bias.',
      'Publish high-impact findings and collaborate with national safety governance institutes.'
    ],
    requirements: [
      'PhD or equivalent research track record in Computer Science, Machine Learning, or Computational Math.',
      'First-author publications at top-tier venues (NeurIPS, ICML, ICLR, ACL).',
      'Extensive experience scaling neural networks on distributed TPU/GPU clusters.',
      'Strong commitment to the ethical deployment of artificial general intelligence.'
    ],
    benefits: [
      'Generous computational cluster allocation (10,000+ H100 GPU access).',
      'Comprehensive medical, mental health, and family care packages.',
      'Unlimited parental leave and childcare stipends.',
      '401(k) matching up to 6%.'
    ]
  },
  {
    id: 'job-3',
    title: 'Staff Product Designer (Design Systems)',
    company: 'Figma',
    companyId: 'figma',
    logoInitials: 'FG',
    badgeColor: 'bg-rose-950 text-rose-100',
    location: 'San Francisco, CA (Hybrid)',
    isRemote: true,
    jobType: 'Full-time',
    category: 'ui-ux-design',
    categoryLabel: 'UI/UX Design',
    experience: 'Senior (5+ yrs)',
    experienceLevel: 'senior',
    salaryMin: 190000,
    salaryMax: 245000,
    salaryFormatted: '$190,000 - $245,000 + Equity',
    postedTime: '5 hours ago',
    featured: true,
    tags: ['Figma', 'Design Systems', 'Design Tokens', 'Prototyping', 'Accessibility'],
    overview: 'Figma is hiring a Staff Product Designer to evolve our core design system utilized by millions of creators and top enterprise engineering teams globally.',
    responsibilities: [
      'Define component standards, token architecture, and accessibility paradigms across Web, Desktop, and Mobile.',
      'Partner with core engineering to bridge design code parity and token compilation.',
      'Mentor and guide senior designers across the organization in systems thinking.',
      'Conduct rigorous usability studies to ensure seamless ergonomic workflows.'
    ],
    requirements: [
      '6+ years experience designing complex web apps and establishing enterprise design systems.',
      'Unrivaled mastery of Figma variables, auto-layout, interactive components, and token graphs.',
      'Working knowledge of web accessibility (WCAG 2.2 AAA) and basic HTML/CSS/React.',
      'World-class portfolio demonstrating systems architecture and meticulous typographic polish.'
    ],
    benefits: [
      'Competitive equity grant in top-tier growth organization.',
      'Wellness stipend of $250/month.',
      'Cell phone & home internet reimbursement.',
      'Continuous education and conference sponsorship.'
    ]
  },
  {
    id: 'job-4',
    title: 'Principal Distributed Systems Engineer',
    company: 'Stripe',
    companyId: 'stripe',
    logoInitials: 'ST',
    badgeColor: 'bg-blue-900 text-blue-100',
    location: 'San Francisco, CA / Dublin (Remote)',
    isRemote: true,
    jobType: 'Full-time',
    category: 'software-development',
    categoryLabel: 'Software Development',
    experience: 'Executive / Principal (10+ yrs)',
    experienceLevel: 'executive',
    salaryMin: 240000,
    salaryMax: 320000,
    salaryFormatted: '$240,000 - $320,000 + Equity',
    postedTime: '1 day ago',
    featured: true,
    tags: ['Java', 'Go', 'Distributed Databases', 'Raft', 'High Availability'],
    overview: 'Help Stripe power billions of dollars in economic velocity. You will build our core ledger, transactional databases, and planetary routing fabric.',
    responsibilities: [
      'Architect five-nines (99.999%) resilient payment routing infrastructure.',
      'Mitigate systemic risks across petabyte-scale financial stores with zero data loss.',
      'Drive technical decisions and cross-org roadmaps for multi-region active-active deployments.',
      'Provide deep technical mentorship to tech leads and senior engineering teams.'
    ],
    requirements: [
      '10+ years designing mission-critical distributed systems and fault-tolerant protocols.',
      'Proven expertise with ACID transaction semantics, consensus algorithms (Raft, Paxos), and isolation.',
      'Exceptional written communication skills, accustomed to writing rigorous engineering proposals.'
    ],
    benefits: [
      'Global healthcare coverage with family dental & optical.',
      'Sabbatical benefit after 5 years of tenure.',
      'Flexible location & remote stipends.',
      'Generous fertility and adoption assistance.'
    ]
  },
  {
    id: 'job-5',
    title: 'Lead Machine Learning Engineer (Inference)',
    company: 'OpenAI',
    companyId: 'openai',
    logoInitials: 'OA',
    badgeColor: 'bg-teal-950 text-teal-100',
    location: 'San Francisco, CA',
    isRemote: false,
    jobType: 'Full-time',
    category: 'data-science',
    categoryLabel: 'Data Science & AI',
    experience: 'Lead / Staff (7+ yrs)',
    experienceLevel: 'lead',
    salaryMin: 310000,
    salaryMax: 420000,
    salaryFormatted: '$310,000 - $420,000 + Equity & Profit Participation',
    postedTime: '1 day ago',
    featured: true,
    tags: ['CUDA', 'C++', 'PyTorch', 'vLLM', 'Triton', 'GPU Kernel Opt'],
    overview: 'Join the team building ultra-low-latency inference engines serving over 200 million weekly active ChatGPT and enterprise API queries.',
    responsibilities: [
      'Write custom CUDA and Triton kernels to squeeze maximal throughput from modern GPU clusters.',
      'Optimize speculative decoding, KV-cache quantization, and memory-bandwidth bottlenecks.',
      'Collaborate with research scientists to rapidly deploy frontier multimodal architectures into production.',
      'Lead infrastructure incident drills and reliability benchmarks under extreme load spikes.'
    ],
    requirements: [
      '7+ years systems programming with C++ and CUDA.',
      'Demonstrated expertise in deep learning model inference (FlashAttention, TensorRT-LLM, vLLM).',
      'Deep understanding of modern GPU architecture (Hopper, Blackwell, HBM3 bandwidth).',
      'BS, MS, or PhD in Computer Science or Electrical Engineering.'
    ],
    benefits: [
      'Top-of-market compensation with profit participation unit program.',
      'Free gourmet breakfast, lunch, and dinner on campus.',
      'Comprehensive on-site wellness and executive coaching.',
      'Commuter shuttles and electric vehicle charging.'
    ]
  },
  {
    id: 'job-6',
    title: 'VP of Global Product Marketing',
    company: 'Notion',
    companyId: 'notion',
    logoInitials: 'NT',
    badgeColor: 'bg-stone-900 text-stone-100',
    location: 'San Francisco, CA & New York',
    isRemote: false,
    jobType: 'Full-time',
    category: 'marketing',
    categoryLabel: 'Marketing & Growth',
    experience: 'Executive / Principal (10+ yrs)',
    experienceLevel: 'executive',
    salaryMin: 250000,
    salaryMax: 330000,
    salaryFormatted: '$250,000 - $330,000 + Executive Equity',
    postedTime: '2 days ago',
    featured: false,
    tags: ['Product Marketing', 'Enterprise SaaS', 'Brand Storytelling', 'GTM Strategy'],
    overview: 'Notion is hiring a visionary VP of Global Product Marketing to oversee positioning, enterprise go-to-market strategies, and our international launches.',
    responsibilities: [
      'Build and lead a world-class PMM organization across core workspace, Notion AI, and enterprise products.',
      'Own end-to-end launch playbooks for tier-1 product moments reaching over 50M users.',
      'Translate complex product innovations into simple, emotional narratives that convert.',
      'Partner closely with CEO, Head of Product, and Enterprise Sales leadership.'
    ],
    requirements: [
      '10+ years experience in B2B/Product-Led Growth software marketing, with 4+ years leading PMM teams.',
      'Demonstrated track record scaling ARR from $100M to $500M+ in modern SaaS.',
      'Remarkable taste, storytelling capability, and analytical rigor.'
    ],
    benefits: [
      'Substantial executive equity package.',
      'Flexible hybrid schedule.',
      'Full healthcare, vision, and dental coverage.',
      'Paid parent leave of 18 weeks.'
    ]
  },
  {
    id: 'job-7',
    title: 'Staff Site Reliability Engineer (Edge & Cloud)',
    company: 'Datadog',
    companyId: 'datadog',
    logoInitials: 'DD',
    badgeColor: 'bg-purple-950 text-purple-100',
    location: 'New York, NY (Hybrid)',
    isRemote: true,
    jobType: 'Full-time',
    category: 'devops-cloud',
    categoryLabel: 'Cloud & DevOps',
    experience: 'Senior (5+ yrs)',
    experienceLevel: 'senior',
    salaryMin: 185000,
    salaryMax: 235000,
    salaryFormatted: '$185,000 - $235,000 + RSUs',
    postedTime: '2 days ago',
    featured: false,
    tags: ['Kubernetes', 'Terraform', 'Go', 'AWS', 'Multi-Region SRE'],
    overview: 'Ensure the resilience of a platform ingesting trillions of telemetry data points daily. You will build automation and infrastructure that never sleeps.',
    responsibilities: [
      'Automate cloud orchestration across thousands of multi-cloud Kubernetes clusters.',
      'Design Chaos Engineering experiments to validate edge failover reliability.',
      'Drive incident post-mortems and engineer blameless systemic mitigations.',
      'Optimize compute infrastructure to reduce carbon footprint and operational spend.'
    ],
    requirements: [
      '5+ years in SRE or Platform Engineering handling massive-scale public cloud footprints.',
      'Expert level with Linux internals, eBPF, TCP/IP networking, and container runtimes.',
      'Production mastery with Go or Python for infrastructure automation.'
    ],
    benefits: [
      'Generous RSU equity package with annual refreshers.',
      'Comprehensive 401k match.',
      'Annual learning budget of $3,500.',
      'Flexible hybrid work policy.'
    ]
  },
  {
    id: 'job-8',
    title: 'Senior Brand & Design Systems Lead',
    company: 'Linear',
    companyId: 'linear',
    logoInitials: 'LN',
    badgeColor: 'bg-indigo-900 text-indigo-100',
    location: 'San Francisco, CA / Remote',
    isRemote: true,
    jobType: 'Full-time',
    category: 'ui-ux-design',
    categoryLabel: 'UI/UX Design',
    experience: 'Senior (5+ yrs)',
    experienceLevel: 'senior',
    salaryMin: 165000,
    salaryMax: 205000,
    salaryFormatted: '$165,000 - $205,000 + Equity',
    postedTime: '3 days ago',
    featured: true,
    tags: ['Brand Design', 'Typography', '3D / Motion', 'Creative Direction'],
    overview: 'Own the visual soul and aesthetic standard of Linear across all brand touchpoints, product launches, physical merch, and web marketing.',
    responsibilities: [
      'Establish the iconic visual design language for upcoming product campaigns.',
      'Craft stunning interactive web experiences with custom shaders and WebGL accents.',
      'Collaborate with engineering to implement pixel-perfect CSS and motion design.',
      'Elevate our editorial storytelling and release notes.'
    ],
    requirements: [
      'Exceptional portfolio showcasing uncompromising graphic design, typography, and motion.',
      'Hands-on expertise with Figma, Blender/Cinema 4D, and Adobe Creative Suite.',
      'Understanding of modern web rendering and frontend implementation.'
    ],
    benefits: [
      'Full health, dental, and vision insurance.',
      'Home office ergonomic stipend.',
      'Remote flexibility worldwide.'
    ]
  },
  {
    id: 'job-9',
    title: 'Senior Financial Planning & Strategy Manager',
    company: 'Stripe',
    companyId: 'stripe',
    logoInitials: 'ST',
    badgeColor: 'bg-blue-900 text-blue-100',
    location: 'San Francisco, CA',
    isRemote: false,
    jobType: 'Full-time',
    category: 'finance',
    categoryLabel: 'Finance & Strategy',
    experience: 'Senior (5+ yrs)',
    experienceLevel: 'senior',
    salaryMin: 160000,
    salaryMax: 210000,
    salaryFormatted: '$160,000 - $210,000 + Equity',
    postedTime: '3 days ago',
    featured: false,
    tags: ['Corporate FP&A', 'Fintech', 'Financial Modeling', 'Unit Economics', 'SQL'],
    overview: 'Stripe is looking for a strategic finance partner to steer our revenue planning, margins, and capital allocation across global payment products.',
    responsibilities: [
      'Lead quarterly financial modeling, long-range forecasting, and scenario analyses.',
      'Partner directly with General Managers to optimize take rates and interchange dynamics.',
      'Deliver board-ready financial briefings to the CFO and executive committee.',
      'Automate financial reporting pipelines using SQL, dbt, and financial engines.'
    ],
    requirements: [
      '5+ years in investment banking, management consulting, or corporate FP&A at high-growth tech firms.',
      'Mastery of dynamic financial modeling in Excel/Sheets, with strong SQL proficiency.',
      'Demonstrated ability to influence cross-functional executives with data.'
    ],
    benefits: [
      'Competitive compensation & equity.',
      'Comprehensive healthcare.',
      'Parental leave & fertility support.',
      'Catered meals and commuter benefits.'
    ]
  },
  {
    id: 'job-10',
    title: 'Head of Executive & Tech Talent Acquisition',
    company: 'Anthropic',
    companyId: 'anthropic',
    logoInitials: 'AN',
    badgeColor: 'bg-amber-950 text-amber-100',
    location: 'San Francisco, CA (Hybrid)',
    isRemote: true,
    jobType: 'Full-time',
    category: 'human-resources',
    categoryLabel: 'Human Resources',
    experience: 'Lead / Staff (7+ yrs)',
    experienceLevel: 'lead',
    salaryMin: 195000,
    salaryMax: 260000,
    salaryFormatted: '$195,000 - $260,000 + Equity',
    postedTime: '4 days ago',
    featured: false,
    tags: ['Executive Search', 'AI Recruiting', 'Talent Strategy', 'Candidate Experience'],
    overview: 'Lead the recruitment function that identifies and attracts the world’s most brilliant AI researchers, safety scientists, and infrastructure leaders.',
    responsibilities: [
      'Manage full-cycle executive and principal engineering searches.',
      'Build a thoughtful, high-dignity candidate experience for world-class researchers.',
      'Design equitable calibration pipelines and competitive compensation benchmarks.',
      'Direct our university and national laboratory partnership programs.'
    ],
    requirements: [
      '7+ years recruiting elite technical talent in AI/ML, distributed systems, or research laboratories.',
      'Deep network across top academic labs and tech research hubs.',
      'High emotional intelligence and strategic advisory capability.'
    ],
    benefits: [
      'Top-tier healthcare & wellness benefits.',
      'Significant equity stake in an AI market leader.',
      'Flexible hybrid schedule.'
    ]
  },
  {
    id: 'job-11',
    title: 'Senior Backend Engineer (Rust & Postgres)',
    company: 'Supabase',
    companyId: 'supabase',
    logoInitials: 'SB',
    badgeColor: 'bg-emerald-950 text-emerald-100',
    location: 'Remote (Worldwide)',
    isRemote: true,
    jobType: 'Full-time',
    category: 'software-development',
    categoryLabel: 'Software Development',
    experience: 'Senior (5+ yrs)',
    experienceLevel: 'senior',
    salaryMin: 170000,
    salaryMax: 215000,
    salaryFormatted: '$170,000 - $215,000 + Open Source Equity',
    postedTime: '4 days ago',
    featured: true,
    tags: ['Rust', 'PostgreSQL', 'Elixir', 'Distributed Systems', 'Open Source'],
    overview: 'Supabase is hiring a Senior Backend Engineer to write high-throughput Rust services interfacing directly with PostgreSQL replication and WAL streaming.',
    responsibilities: [
      'Develop real-time connection pooling and replication engines written in Rust.',
      'Contribute to open source extensions and optimize query latency for 1M+ active databases.',
      'Diagnose low-level Linux performance bottlenecks under heavy I/O workloads.',
      'Engage with the developer community on GitHub and Discord.'
    ],
    requirements: [
      '5+ years professional experience with Rust or C/C++ in systems environments.',
      'Strong grasp of PostgreSQL internals, locking models, and indexing strategies.',
      'Prior contributions to open source projects are highly valued.'
    ],
    benefits: [
      '100% remote anywhere in the world.',
      '$3,000 home office budget.',
      'Co-working pass reimbursement.',
      'Annual team offsites across Europe, Asia, and Americas.'
    ]
  },
  {
    id: 'job-12',
    title: 'Lead Technical Product Manager (Edge Platform)',
    company: 'Vercel',
    companyId: 'vercel',
    logoInitials: 'VC',
    badgeColor: 'bg-neutral-900 text-white',
    location: 'Remote (Worldwide)',
    isRemote: true,
    jobType: 'Full-time',
    category: 'product-mgmt',
    categoryLabel: 'Product Management',
    experience: 'Lead / Staff (7+ yrs)',
    experienceLevel: 'lead',
    salaryMin: 200000,
    salaryMax: 255000,
    salaryFormatted: '$200,000 - $255,000 + RSUs',
    postedTime: '5 days ago',
    featured: true,
    tags: ['Product Management', 'Serverless', 'CDN / Edge', 'Next.js', 'Developer Experience'],
    overview: 'Own the roadmap for Vercel Edge Network, Middleware, and Serverless compute primitives powering millions of modern web applications.',
    responsibilities: [
      'Define product vision and technical specifications for global serverless compute.',
      'Interface directly with open source framework maintainers and enterprise CTOs.',
      'Track core DX metrics: cold starts, deployment speeds, and edge routing latency.',
      'Lead cross-functional sprints across edge runtime engineers and product designers.'
    ],
    requirements: [
      '6+ years of technical product management experience in cloud or developer tools.',
      'Hands-on technical background (can build a Next.js app and understand edge routing).',
      'Proven track record delivering developer products loved by millions.'
    ],
    benefits: [
      'Work from anywhere on earth.',
      'Generous equity compensation.',
      'Full healthcare coverage.',
      'Stipends for hardware, wellness, and continuous learning.'
    ]
  },
  {
    id: 'job-13',
    title: 'Senior Product Designer (Mobile & Tablet)',
    company: 'Notion',
    companyId: 'notion',
    logoInitials: 'NT',
    badgeColor: 'bg-stone-900 text-stone-100',
    location: 'San Francisco, CA (Hybrid)',
    isRemote: true,
    jobType: 'Full-time',
    category: 'ui-ux-design',
    categoryLabel: 'UI/UX Design',
    experience: 'Mid-Level (3+ yrs)',
    experienceLevel: 'mid',
    salaryMin: 145000,
    salaryMax: 185000,
    salaryFormatted: '$145,000 - $185,000 + Equity',
    postedTime: '5 days ago',
    featured: false,
    tags: ['Mobile UX', 'iOS', 'Android', 'Figma', 'Micro-interactions'],
    overview: 'Reinvent the mobile productivity experience. Design gestures, mobile-first block editing, and quick capture workflows on iOS and Android.',
    responsibilities: [
      'Translate desktop-dense document capabilities into delightful mobile experiences.',
      'Prototype mobile-native gestures, haptic feedback, and offline sync UI.',
      'Work alongside iOS and Android engineers to polish transition states.'
    ],
    requirements: [
      '3+ years focusing on consumer or productivity mobile applications.',
      'Strong portfolio demonstrating nuanced mobile UI and prototyping abilities.',
      'Deep appreciation for minimal typography and distraction-free software.'
    ],
    benefits: [
      'Comprehensive medical and mental health.',
      'Annual travel reimbursement.',
      'Home office allowance.'
    ]
  },
  {
    id: 'job-14',
    title: 'Director of Treasury & Capital Markets',
    company: 'Revolut',
    companyId: 'revolut',
    logoInitials: 'RV',
    badgeColor: 'bg-sky-950 text-sky-100',
    location: 'London, UK / Remote',
    isRemote: true,
    jobType: 'Full-time',
    category: 'finance',
    categoryLabel: 'Finance & Strategy',
    experience: 'Executive / Principal (10+ yrs)',
    experienceLevel: 'executive',
    salaryMin: 220000,
    salaryMax: 300000,
    salaryFormatted: '£180,000 - £240,000 ($230k - $305k) + Equity',
    postedTime: '6 days ago',
    featured: false,
    tags: ['Treasury', 'Liquidity Management', 'FX Markets', 'Regulatory Capital'],
    overview: 'Lead Revolut’s global treasury operations, multi-currency liquidity risk management, and regulatory balance sheet optimization across multiple banking licenses.',
    responsibilities: [
      'Manage $20B+ across global liquidity portfolios, FX hedging, and interest rate risks.',
      'Formulate ALM strategies compliant with PRA, ECB, and global banking authorities.',
      'Lead a team of quantitative treasury analysts and currency traders.'
    ],
    requirements: [
      '10+ years senior treasury management at a tier-1 bank or major fintech institution.',
      'Deep technical mastery of FX derivatives, interest rate risk, and stress testing models.',
      'Proven record managing multi-billion balance sheet liquidity.'
    ],
    benefits: [
      'Significant equity grant in Europe’s highest-valued fintech.',
      'Private health insurance for candidate and family.',
      'Flexible global mobility program.'
    ]
  },
  {
    id: 'job-15',
    title: 'Frontend Engineer (Design Systems & Web)',
    company: 'Linear',
    companyId: 'linear',
    logoInitials: 'LN',
    badgeColor: 'bg-indigo-900 text-indigo-100',
    location: 'Remote (Worldwide)',
    isRemote: true,
    jobType: 'Full-time',
    category: 'software-development',
    categoryLabel: 'Software Development',
    experience: 'Mid-Level (3+ yrs)',
    experienceLevel: 'mid',
    salaryMin: 135000,
    salaryMax: 170000,
    salaryFormatted: '$135,000 - $170,000 + Equity',
    postedTime: '1 week ago',
    featured: false,
    tags: ['React', 'TypeScript', 'CSS Architecture', 'Accessibility', 'Motion'],
    overview: 'Join Linear to build component primitives that make software feel like magic. You will focus on interaction polish, accessibility, and high performance.',
    responsibilities: [
      'Build reusable UI components with uncompromising attention to keyboard navigation.',
      'Write robust unit and visual regression test suites.',
      'Collaborate directly with designers to refine token libraries.'
    ],
    requirements: [
      '3+ years professional frontend engineering with React & TypeScript.',
      'Strong eye for visual rhythm, spacing, and transition timing curves.',
      'Careful consideration for accessibility and cross-browser quirks.'
    ],
    benefits: [
      '100% remote anywhere.',
      'Top-tier health coverage.',
      'All equipment provided (MacBook Pro + Studio Display).'
    ]
  },
  {
    id: 'job-16',
    title: 'Junior Cloud Infrastructure Associate',
    company: 'Datadog',
    companyId: 'datadog',
    logoInitials: 'DD',
    badgeColor: 'bg-purple-950 text-purple-100',
    location: 'New York, NY',
    isRemote: false,
    jobType: 'Full-time',
    category: 'devops-cloud',
    categoryLabel: 'Cloud & DevOps',
    experience: 'Entry-Level (1-2 yrs)',
    experienceLevel: 'entry',
    salaryMin: 95000,
    salaryMax: 125000,
    salaryFormatted: '$95,000 - $125,000 + Equity',
    postedTime: '1 week ago',
    featured: false,
    tags: ['Linux', 'Python', 'AWS', 'Docker', 'Networking'],
    overview: 'Kickstart your career at Datadog assisting senior engineers in managing cloud infrastructure pipelines, continuous delivery, and system health checks.',
    responsibilities: [
      'Maintain automation scripts for server provisioning and alert dispatching.',
      'Assist in troubleshooting build pipelines and Docker image registries.',
      'Document operational playbooks and runbooks.'
    ],
    requirements: [
      'Degree in Computer Science or demonstrable personal cloud engineering projects.',
      'Solid command line literacy (Linux/Unix, Bash, Git).',
      'Eager learner with strong problem-solving initiative.'
    ],
    benefits: [
      'Mentorship program with principal SRE engineers.',
      'Structured promotion tracks.',
      'Comprehensive health coverage.'
    ]
  }
];
