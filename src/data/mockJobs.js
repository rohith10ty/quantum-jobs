export const mockJobs = [
  {
    id: 'job-google',
    title: 'Staff AI Infrastructure Systems Engineer (Gemini Core & TPU)',
    company: 'Google',
    companyId: 'google',
    logoInitials: 'GO',
    badgeColor: 'bg-blue-900 text-white',
    location: 'Mountain View, CA (Hybrid / Remote)',
    isRemote: true,
    jobType: 'Full-time',
    category: 'software-development',
    categoryLabel: 'Software Development',
    experience: 'Lead / Staff (7+ yrs)',
    experienceLevel: 'lead',
    salaryMin: 240000,
    salaryMax: 315000,
    salaryFormatted: '$240,000 - $315,000 + Google GSUs',
    postedTime: 'Just now',
    featured: true,
    tags: ['C++', 'Distributed Training', 'TPU v5p', 'Kubernetes', 'Gemini'],
    overview: 'Google is hiring a Staff AI Infrastructure Systems Engineer to architect the next-generation distributed compute fabric accelerating Gemini foundational model pre-training and TPU cluster orchestration.',
    responsibilities: [
      'Design high-throughput distributed interconnect protocols across tens of thousands of TPU accelerators.',
      'Optimize low-level memory bandwidth and network fabric topology to eliminate training bottlenecks.',
      'Partner directly with Google DeepMind research teams to co-design future frontier neural network architectures.',
      'Drive system reliability benchmarks and automated fault recovery across continental cloud clusters.'
    ],
    requirements: [
      '7+ years systems programming with C++ and Linux distributed environments.',
      'Deep experience with high-performance networking (RDMA, InfiniBand, RoCE) and hardware accelerators.',
      'Demonstrated track record of delivering infrastructure powering frontier LLM training runs.'
    ],
    benefits: [
      'Top-of-market Google GSU equity grant with semi-annual refreshers.',
      'Comprehensive healthcare, dental, and on-site wellness centers.',
      'Free gourmet campus dining, barista bars, and electric commuter shuttles.',
      '401(k) matching up to 50% of the IRS maximum.'
    ]
  },
  {
    id: 'job-apple',
    title: 'Senior iOS & System Intelligence Architect',
    company: 'Apple',
    companyId: 'apple',
    logoInitials: 'AP',
    badgeColor: 'bg-zinc-900 text-white',
    location: 'Cupertino, CA (Hybrid)',
    isRemote: false,
    jobType: 'Full-time',
    category: 'software-development',
    categoryLabel: 'Software Development',
    experience: 'Senior (5+ yrs)',
    experienceLevel: 'senior',
    salaryMin: 210000,
    salaryMax: 275000,
    salaryFormatted: '$210,000 - $275,000 + RSUs',
    postedTime: '1 hour ago',
    featured: true,
    tags: ['Swift', 'SwiftUI', 'Apple Silicon', 'CoreML', 'Metal'],
    overview: 'Join the team building Apple Intelligence on macOS, iOS, and iPadOS. You will design on-device neural model inference pipelines with hardware-accelerated privacy guarantees.',
    responsibilities: [
      'Architect on-device Foundation Model execution leveraging Neural Engine and Unified Memory on Apple Silicon.',
      'Craft fluid, delightful user experiences in Swift and SwiftUI with 120Hz ProMotion responsiveness.',
      'Enforce zero-knowledge privacy standards ensuring user prompt data never leaves device boundaries.'
    ],
    requirements: [
      '5+ years professional experience building production iOS or macOS systems in modern Swift.',
      'Strong grasp of computer architecture, Metal shaders, CoreML, and memory optimization.',
      'Uncompromising attention to typography, interaction feel, and fluid haptics.'
    ],
    benefits: [
      'Generous Apple RSU equity package.',
      'Apple Product Purchase Plan discounts for family and friends.',
      'Full healthcare, retirement match, and wellness subsidies.',
      'Tuition assistance and continuous learning programs.'
    ]
  },
  {
    id: 'job-stackly',
    title: 'Principal Full-Stack Engineer (React, Rust & Edge Compute)',
    company: 'Stackly',
    companyId: 'stackly',
    logoInitials: 'SK',
    badgeColor: 'bg-indigo-950 text-indigo-200',
    location: 'San Francisco, CA / Remote (Worldwide)',
    isRemote: true,
    jobType: 'Full-time',
    category: 'software-development',
    categoryLabel: 'Software Development',
    experience: 'Senior (5+ yrs)',
    experienceLevel: 'senior',
    salaryMin: 180000,
    salaryMax: 230000,
    salaryFormatted: '$180,000 - $230,000 + 0.25% Equity',
    postedTime: '2 hours ago',
    featured: true,
    tags: ['React', 'TypeScript', 'Rust', 'WebAssembly', 'Docker'],
    overview: 'Stackly is building instantaneous cloud development environments. Help us build the browser-native IDE runtime and sub-second container booting engine.',
    responsibilities: [
      'Architect WebAssembly-compiled terminal and container runtimes running seamlessly inside browser clients.',
      'Build desktop-grade React interfaces with canvas rendering and real-time multiplayer cursor sync.',
      'Write high-performance Rust daemons for edge snapshotting and network tunnels.'
    ],
    requirements: [
      '5+ years professional frontend & backend experience with React, TypeScript, and Rust or Go.',
      'Passion for developer tooling, keyboard ergonomics, and sub-50ms interaction latencies.',
      'Experience with Linux cgroups, namespaces, and WebSockets.'
    ],
    benefits: [
      '100% remote work flexibility worldwide.',
      '$4,000 home office and hardware upgrade budget.',
      'Unlimited PTO with mandatory annual minimum.',
      'Annual team gatherings in Kyoto, Lisbon, and Vancouver.'
    ]
  },
  {
    id: 'job-deloitte',
    title: 'Senior AI Strategy & Enterprise Transformation Consultant',
    company: 'Deloitte',
    companyId: 'deloitte',
    logoInitials: 'DL',
    badgeColor: 'bg-slate-900 text-emerald-400',
    location: 'New York, NY (Hybrid)',
    isRemote: true,
    jobType: 'Full-time',
    category: 'data-science',
    categoryLabel: 'Data Science & AI',
    experience: 'Senior (5+ yrs)',
    experienceLevel: 'senior',
    salaryMin: 175000,
    salaryMax: 225000,
    salaryFormatted: '$175,000 - $225,000 + Annual Bonus',
    postedTime: '3 hours ago',
    featured: true,
    tags: ['GenAI Strategy', 'Enterprise Architecture', 'Cloud Migration', 'Advisory'],
    overview: 'Advise Fortune 100 C-suite executives on generative AI adoption, data modernization, and cloud governance frameworks across banking, healthcare, and retail sectors.',
    responsibilities: [
      'Lead AI maturity assessments and develop multi-year enterprise transformation roadmaps.',
      'Advise CIOs and CTOs on LLM governance, model fine-tuning architecture, and cloud security.',
      'Direct cross-functional teams of data scientists and solution architects to deliver client pilot solutions.'
    ],
    requirements: [
      '5+ years in management consulting or enterprise technology leadership.',
      'Strong technical grounding in AI/ML solutions, cloud architectures (AWS/Azure/GCP), and data pipelines.',
      'Proven ability to present complex technical paradigms to board-level stakeholders.'
    ],
    benefits: [
      'Comprehensive medical, dental, and vision insurance.',
      'Performance bonus up to 25% of base compensation.',
      'Generous parental leave and continuous executive executive training.',
      'Dedicated wellbeing days and flexible hybrid work model.'
    ]
  },
  {
    id: 'job-cognizant',
    title: 'Lead Cloud Solutions Architect (AWS & Microservices)',
    company: 'Cognizant',
    companyId: 'cognizant',
    logoInitials: 'CT',
    badgeColor: 'bg-blue-950 text-sky-200',
    location: 'Dallas, TX / Remote',
    isRemote: true,
    jobType: 'Full-time',
    category: 'devops-cloud',
    categoryLabel: 'Cloud & DevOps',
    experience: 'Lead / Staff (7+ yrs)',
    experienceLevel: 'lead',
    salaryMin: 165000,
    salaryMax: 205000,
    salaryFormatted: '$165,000 - $205,000 + Incentive Bonus',
    postedTime: '5 hours ago',
    featured: false,
    tags: ['AWS', 'Kubernetes', 'Java Spring Boot', 'Microservices', 'Terraform'],
    overview: 'Drive enterprise cloud modernization programs for premier global clients migrating legacy monoliths to event-driven cloud native microservices on AWS.',
    responsibilities: [
      'Architect scalable, highly-resilient microservices systems processing millions of daily financial transactions.',
      'Establish Infrastructure as Code (IaC) governance using Terraform and GitOps pipelines.',
      'Mentor senior engineers and conduct architectural reviews across globally distributed agile teams.'
    ],
    requirements: [
      '7+ years software engineering and cloud architecture experience.',
      'AWS Solutions Architect Professional certification or equivalent deep enterprise experience.',
      'Strong hands-on background in Java/Spring Boot or Node.js and distributed databases.'
    ],
    benefits: [
      'Comprehensive health coverage and wellness stipends.',
      'Annual performance bonuses and certification sponsorship.',
      'Flexible remote schedule with generous paid time off.'
    ]
  },
  {
    id: 'job-tcs',
    title: 'Senior Enterprise Java & Distributed Systems Lead',
    company: 'Tata Consultancy Services',
    companyId: 'tcs',
    logoInitials: 'TC',
    badgeColor: 'bg-cyan-950 text-cyan-200',
    location: 'Edison, NJ (Hybrid / Remote)',
    isRemote: true,
    jobType: 'Full-time',
    category: 'software-development',
    categoryLabel: 'Software Development',
    experience: 'Senior (5+ yrs)',
    experienceLevel: 'senior',
    salaryMin: 150000,
    salaryMax: 190000,
    salaryFormatted: '$150,000 - $190,000 + Benefits',
    postedTime: '6 hours ago',
    featured: false,
    tags: ['Java 21', 'Kafka', 'Spring Cloud', 'Oracle DB', 'High Availability'],
    overview: 'Lead the modernization of mission-critical banking ledger platforms at TCS, designing fault-tolerant distributed transaction systems with five-nines uptime.',
    responsibilities: [
      'Design event-driven data streaming pipelines handling millions of events/sec via Apache Kafka.',
      'Refactor monolithic core banking components into decoupled containerized microservices.',
      'Ensure strict regulatory compliance, encryption at rest/transit, and SOC-2 standard controls.'
    ],
    requirements: [
      '5+ years enterprise Java (Java 17/21, Spring Boot, Spring Cloud).',
      'Solid command of event sourcing, distributed caching (Redis), and SQL/NoSQL tuning.',
      'Strong team leadership and agile sprint execution.'
    ],
    benefits: [
      'Full healthcare and dental insurance plans.',
      '401(k) retirement plan with corporate match.',
      'Paid annual vacation and sick leave.'
    ]
  },
  {
    id: 'job-wipro',
    title: 'Principal Cloud DevOps & Site Reliability Engineer',
    company: 'Wipro',
    companyId: 'wipro',
    logoInitials: 'WP',
    badgeColor: 'bg-emerald-950 text-emerald-200',
    location: 'San Jose, CA (Hybrid)',
    isRemote: true,
    jobType: 'Full-time',
    category: 'devops-cloud',
    categoryLabel: 'Cloud & DevOps',
    experience: 'Senior (5+ yrs)',
    experienceLevel: 'senior',
    salaryMin: 160000,
    salaryMax: 200000,
    salaryFormatted: '$160,000 - $200,000 + Equity & Bonus',
    postedTime: '1 day ago',
    featured: false,
    tags: ['Azure DevOps', 'Kubernetes', 'CI/CD', 'Python', 'Observability'],
    overview: 'Architect multi-cloud deployment automation, observability meshes, and zero-downtime release pipelines across Wipro’s premier enterprise client portfolio.',
    responsibilities: [
      'Automate large-scale Kubernetes cluster provisioning across Azure and multi-cloud environments.',
      'Implement unified observability stacks (Prometheus, Grafana, OpenTelemetry).',
      'Conduct automated resilience chaos testing to eliminate single points of operational failure.'
    ],
    requirements: [
      '5+ years dedicated SRE or DevOps experience with container orchestration and cloud networks.',
      'Strong scripting skills in Python, Go, or Bash for automation.',
      'Proven track record supporting mission-critical 24x7 production environments.'
    ],
    benefits: [
      'Comprehensive medical, life, and vision coverage.',
      'Competitive compensation with annual merit review.',
      'Flexible hybrid schedule and paid educational leave.'
    ]
  },
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
  }
];
