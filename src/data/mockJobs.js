export const mockJobs = [
  // --- INDIA ROLES (₹ INR / LPA) ---
  {
    id: 'job-google-in',
    title: 'Staff AI Infrastructure Systems Engineer (Gemini & Vertex AI)',
    company: 'Google',
    companyId: 'google',
    logoInitials: 'GO',
    badgeColor: 'bg-blue-900 text-white',
    location: 'Bengaluru, Karnataka, India (Hybrid)',
    isRemote: true,
    jobType: 'Full-time',
    category: 'software-development',
    categoryLabel: 'Software Development',
    experience: 'Lead / Staff (7+ yrs)',
    experienceLevel: 'lead',
    salaryMin: 65,
    salaryMax: 95,
    salaryFormatted: '₹65,00,000 - ₹95,00,000 LPA + Google GSUs',
    postedTime: 'Just now',
    featured: true,
    tags: ['C++', 'Distributed Systems', 'TPU v5p', 'Kubernetes', 'Gemini'],
    overview: 'Google India is hiring a Staff AI Infrastructure Systems Engineer to architect the distributed compute fabric accelerating Gemini foundational model pre-training and TPU cluster orchestration from our Bengaluru campus.',
    responsibilities: [
      'Design high-throughput distributed interconnect protocols across tens of thousands of TPU accelerators.',
      'Optimize memory bandwidth and network fabric topology to eliminate training bottlenecks.',
      'Partner directly with Google DeepMind research teams to co-design future frontier neural network architectures.',
      'Drive system reliability benchmarks and automated fault recovery across global cloud clusters.'
    ],
    requirements: [
      '7+ years systems programming with C++ and Linux distributed environments.',
      'Deep experience with high-performance networking (RDMA, InfiniBand, RoCE) and hardware accelerators.',
      'Demonstrated track record of delivering infrastructure powering frontier LLM training runs.'
    ],
    benefits: [
      'Top-of-market Google GSU equity grant with semi-annual refreshers.',
      'Comprehensive family medical coverage (including parents), dental, and wellness centers.',
      'Free gourmet campus dining, barista bars, and premium Bengaluru transport/cab facilities.',
      'Provident Fund (PF) corporate match and annual wellness allowance.'
    ]
  },
  {
    id: 'job-apple-in',
    title: 'Senior iOS & Core Intelligence Architect',
    company: 'Apple',
    companyId: 'apple',
    logoInitials: 'AP',
    badgeColor: 'bg-zinc-900 text-white',
    location: 'Hyderabad, Telangana, India (Hybrid)',
    isRemote: false,
    jobType: 'Full-time',
    category: 'software-development',
    categoryLabel: 'Software Development',
    experience: 'Senior (5+ yrs)',
    experienceLevel: 'senior',
    salaryMin: 48,
    salaryMax: 72,
    salaryFormatted: '₹48,00,000 - ₹72,00,000 LPA + Apple RSUs',
    postedTime: '1 hour ago',
    featured: true,
    tags: ['Swift', 'SwiftUI', 'Apple Silicon', 'CoreML', 'Metal'],
    overview: 'Join the Apple Technology Center in Hyderabad building Apple Intelligence on macOS, iOS, and iPadOS. You will design on-device neural model inference pipelines with hardware-accelerated privacy guarantees.',
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
      'Full healthcare, retirement pension match, and wellness subsidies.',
      'Tuition assistance and continuous learning programs.'
    ]
  },
  {
    id: 'job-stackly-in',
    title: 'Principal Full-Stack Engineer (React, Rust & Edge Compute)',
    company: 'Stackly',
    companyId: 'stackly',
    logoInitials: 'SK',
    badgeColor: 'bg-indigo-950 text-indigo-200',
    location: 'Bengaluru, India / Remote (India)',
    isRemote: true,
    jobType: 'Full-time',
    category: 'software-development',
    categoryLabel: 'Software Development',
    experience: 'Senior (5+ yrs)',
    experienceLevel: 'senior',
    salaryMin: 45,
    salaryMax: 68,
    salaryFormatted: '₹45,00,000 - ₹68,00,000 LPA + 0.25% Equity',
    postedTime: '2 hours ago',
    featured: true,
    tags: ['React', 'TypeScript', 'Rust', 'WebAssembly', 'Docker'],
    overview: 'Stackly is building instantaneous cloud development environments. Help us build the browser-native IDE runtime and sub-second container booting engine from our Bengaluru hub or remote anywhere across India.',
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
      '100% remote work flexibility anywhere in India.',
      '₹3,50,000 annual home office, ergonomic desk, and hardware budget.',
      'Flexible PTO with mandatory minimum vacation.',
      'Annual team offsites in Goa, Bali, and Tokyo.'
    ]
  },
  {
    id: 'job-cognizant-in',
    title: 'Lead Cloud Modernization Architect (AWS & Microservices)',
    company: 'Cognizant',
    companyId: 'cognizant',
    logoInitials: 'CT',
    badgeColor: 'bg-blue-950 text-sky-200',
    location: 'Chennai, Tamil Nadu / Hyderabad, India',
    isRemote: true,
    jobType: 'Full-time',
    category: 'devops-cloud',
    categoryLabel: 'Cloud & DevOps',
    experience: 'Lead / Staff (7+ yrs)',
    experienceLevel: 'lead',
    salaryMin: 28,
    salaryMax: 38,
    salaryFormatted: '₹28,00,000 - ₹38,00,000 LPA + Incentive Bonus',
    postedTime: '3 hours ago',
    featured: false,
    tags: ['AWS', 'Kubernetes', 'Java Spring Boot', 'Microservices', 'Terraform'],
    overview: 'Drive enterprise cloud modernization programs for premier global banking clients migrating legacy monoliths to event-driven cloud native microservices on AWS.',
    responsibilities: [
      'Architect scalable, highly-resilient microservices systems processing millions of daily financial transactions.',
      'Establish Infrastructure as Code (IaC) governance using Terraform and GitOps pipelines.',
      'Mentor senior engineers and conduct architectural reviews across agile project teams.'
    ],
    requirements: [
      '7+ years software engineering and cloud architecture experience.',
      'AWS Solutions Architect Professional certification or equivalent deep enterprise experience.',
      'Strong hands-on background in Java/Spring Boot or Node.js and distributed databases.'
    ],
    benefits: [
      'Comprehensive health coverage for employee and dependents.',
      'Annual performance bonuses and certification sponsorship.',
      'Flexible hybrid schedule with paid time off.'
    ]
  },
  {
    id: 'job-tcs-in',
    title: 'Senior Enterprise Java & Distributed Systems Lead',
    company: 'Tata Consultancy Services',
    companyId: 'tcs',
    logoInitials: 'TC',
    badgeColor: 'bg-cyan-950 text-cyan-200',
    location: 'Mumbai / Pune, Maharashtra, India',
    isRemote: true,
    jobType: 'Full-time',
    category: 'software-development',
    categoryLabel: 'Software Development',
    experience: 'Senior (5+ yrs)',
    experienceLevel: 'senior',
    salaryMin: 24,
    salaryMax: 34,
    salaryFormatted: '₹24,00,000 - ₹34,00,000 LPA + Variable Pay',
    postedTime: '4 hours ago',
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
      'Full healthcare and insurance plans with comprehensive family coverage.',
      'Provident Fund (PF), Gratuity, and annual variable performance pay.',
      'Corporate transport facilities and on-campus amenities.'
    ]
  },
  {
    id: 'job-wipro-in',
    title: 'Principal Cloud DevOps & Site Reliability Engineer',
    company: 'Wipro',
    companyId: 'wipro',
    logoInitials: 'WP',
    badgeColor: 'bg-emerald-950 text-emerald-200',
    location: 'Bengaluru, Karnataka, India',
    isRemote: true,
    jobType: 'Full-time',
    category: 'devops-cloud',
    categoryLabel: 'Cloud & DevOps',
    experience: 'Senior (5+ yrs)',
    experienceLevel: 'senior',
    salaryMin: 30,
    salaryMax: 44,
    salaryFormatted: '₹30,00,000 - ₹44,00,000 LPA + Performance Bonus',
    postedTime: '5 hours ago',
    featured: false,
    tags: ['Azure DevOps', 'Kubernetes', 'CI/CD', 'Python', 'Observability'],
    overview: 'Architect multi-cloud deployment automation, observability meshes, and zero-downtime release pipelines at Wipro Sarjapur campus.',
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
    id: 'job-deloitte-in',
    title: 'Senior AI Strategy & Enterprise Transformation Consultant',
    company: 'Deloitte',
    companyId: 'deloitte',
    logoInitials: 'DL',
    badgeColor: 'bg-slate-900 text-emerald-400',
    location: 'Hyderabad, Telangana / Gurugram, India',
    isRemote: true,
    jobType: 'Full-time',
    category: 'data-science',
    categoryLabel: 'Data Science & AI',
    experience: 'Senior (5+ yrs)',
    experienceLevel: 'senior',
    salaryMin: 32,
    salaryMax: 46,
    salaryFormatted: '₹32,00,000 - ₹46,00,000 LPA + Annual Bonus',
    postedTime: '6 hours ago',
    featured: true,
    tags: ['GenAI Strategy', 'Enterprise Architecture', 'Cloud Migration', 'Advisory'],
    overview: 'Advise C-suite executives across India and global enterprises on generative AI adoption, data modernization, and cloud governance frameworks.',
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
      'Dedicated wellbeing days and flexible hybrid work model.'
    ]
  },
  {
    id: 'job-stripe-in',
    title: 'Staff Distributed Systems Engineer (Payments Infrastructure)',
    company: 'Stripe',
    companyId: 'stripe',
    logoInitials: 'ST',
    badgeColor: 'bg-blue-900 text-blue-100',
    location: 'Bengaluru, Karnataka, India (Hybrid / Remote)',
    isRemote: true,
    jobType: 'Full-time',
    category: 'software-development',
    categoryLabel: 'Software Development',
    experience: 'Lead / Staff (7+ yrs)',
    experienceLevel: 'lead',
    salaryMin: 55,
    salaryMax: 80,
    salaryFormatted: '₹55,00,000 - ₹80,00,000 LPA + Stripe Equity',
    postedTime: '1 day ago',
    featured: true,
    tags: ['Java', 'Go', 'Distributed Databases', 'Raft', 'High Availability'],
    overview: 'Help Stripe power billions of dollars in economic velocity. You will build our core ledger, transactional databases, and planetary routing fabric from our Bengaluru engineering center.',
    responsibilities: [
      'Architect five-nines (99.999%) resilient payment routing infrastructure.',
      'Mitigate systemic risks across petabyte-scale financial stores with zero data loss.',
      'Drive technical decisions and cross-org roadmaps for multi-region active-active deployments.'
    ],
    requirements: [
      '7+ years designing mission-critical distributed systems and fault-tolerant protocols.',
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

  // --- UK ROLES (London, UK • GBP £ & INR Equivalence) ---
  {
    id: 'job-linear-uk',
    title: 'Senior Frontend Performance Engineer',
    company: 'Linear',
    companyId: 'linear',
    logoInitials: 'LN',
    badgeColor: 'bg-indigo-950 text-indigo-100',
    location: 'London, United Kingdom / Remote (UK)',
    isRemote: true,
    jobType: 'Full-time',
    category: 'software-development',
    categoryLabel: 'Software Development',
    experience: 'Senior (5+ yrs)',
    experienceLevel: 'senior',
    salaryMin: 95,
    salaryMax: 130,
    salaryFormatted: '£90,000 - £125,000 (~₹95 LPA - ₹1.3 Cr) + Equity',
    postedTime: '1 day ago',
    featured: true,
    tags: ['React', 'TypeScript', 'Web Workers', 'CRDTs', 'UI Polish'],
    overview: 'Linear is hiring a Senior Frontend Performance Engineer in London to guarantee 60fps animations, sub-16ms frame times, and instant local-first state synchronization.',
    responsibilities: [
      'Optimize web client bundle splitting, memory footprint, and WebGL rendering paths.',
      'Architect offline caching and real-time multiplayer cursor synchronization.',
      'Collaborate closely with founding product designers on keyboard-first ergonomics.'
    ],
    requirements: [
      '5+ years deep frontend engineering with React, TypeScript, and Chrome DevTools profiling.',
      'Mastery of browser render pipeline, paint cycles, and memory leak analysis.'
    ],
    benefits: [
      'Full private medical and dental insurance (Bupa).',
      '£3,500 home office and workspace hardware setup allowance.',
      'Flexible remote work policy across UK & Europe.'
    ]
  },
  {
    id: 'job-anthropic-uk',
    title: 'AI Safety & Alignment Research Scientist',
    company: 'Anthropic',
    companyId: 'anthropic',
    logoInitials: 'AN',
    badgeColor: 'bg-amber-950 text-amber-100',
    location: 'London, United Kingdom (Hybrid)',
    isRemote: true,
    jobType: 'Full-time',
    category: 'data-science',
    categoryLabel: 'Data Science & AI',
    experience: 'Lead / Staff (7+ yrs)',
    experienceLevel: 'lead',
    salaryMin: 140,
    salaryMax: 190,
    salaryFormatted: '£130,000 - £180,000 (~₹1.4 - ₹1.9 Cr) + Equity',
    postedTime: '2 days ago',
    featured: true,
    tags: ['PyTorch', 'LLMs', 'Mechanistic Interpretability', 'RLHF'],
    overview: 'Join Anthropic’s expanding London research lab focusing on constitutional AI, scalable oversight, and mechanistic interpretability of frontier Claude models.',
    responsibilities: [
      'Conduct empirical research on automated alignment verification for frontier models.',
      'Publish high-impact research papers and collaborate with UK AI Safety Institute.',
      'Scale distributed training experiments across dedicated multi-thousand GPU clusters.'
    ],
    requirements: [
      'PhD or equivalent research track record in Computer Science, Machine Learning, or Math.',
      'Publications at top-tier conferences (NeurIPS, ICML, ICLR).'
    ],
    benefits: [
      'Generous computational cluster allocation.',
      'Top-tier private healthcare and mental health benefits.',
      'Company equity in an AI industry pioneer.'
    ]
  },

  // --- US ROLES (San Francisco & Silicon Valley • USD $ & INR Equivalence) ---
  {
    id: 'job-google-us',
    title: 'Staff TPU Compiler & Distributed Runtime Engineer',
    company: 'Google',
    companyId: 'google',
    logoInitials: 'GO',
    badgeColor: 'bg-blue-900 text-white',
    location: 'Mountain View, CA, United States (Hybrid)',
    isRemote: false,
    jobType: 'Full-time',
    category: 'software-development',
    categoryLabel: 'Software Development',
    experience: 'Lead / Staff (7+ yrs)',
    experienceLevel: 'lead',
    salaryMin: 190,
    salaryMax: 250,
    salaryFormatted: '$230,000 - $310,000 (~₹1.9 - ₹2.5 Cr / yr) + GSUs',
    postedTime: '2 days ago',
    featured: true,
    tags: ['MLIR', 'LLVM', 'XLA Compiler', 'C++', 'TPU Architecture'],
    overview: 'Drive compiler optimizations for XLA, OpenXLA, and MLIR hardware compilation targeting Google’s custom TPU v5p and v6 silicon powering Gemini.',
    responsibilities: [
      'Develop low-level compiler transformations maximizing arithmetic intensity on TPU cores.',
      'Optimize tensor sharding algorithms for multi-pod distributed model parallelism.',
      'Work with kernel engineers to achieve peak FLOPs utilization.'
    ],
    requirements: [
      '7+ years experience with compiler technology (LLVM, MLIR, GCC) and C++.',
      'Deep knowledge of accelerator memory hierarchies and vector extensions.'
    ],
    benefits: [
      'Google GSU equity with comprehensive Silicon Valley health and 401(k) benefits.',
      'On-campus gourmet dining and transport shuttles.'
    ]
  },
  {
    id: 'job-apple-us',
    title: 'Principal Apple Silicon Systems Architect',
    company: 'Apple',
    companyId: 'apple',
    logoInitials: 'AP',
    badgeColor: 'bg-zinc-900 text-white',
    location: 'Cupertino, CA, United States (Hybrid)',
    isRemote: false,
    jobType: 'Full-time',
    category: 'software-development',
    categoryLabel: 'Software Development',
    experience: 'Executive / Principal (10+ yrs)',
    experienceLevel: 'executive',
    salaryMin: 200,
    salaryMax: 270,
    salaryFormatted: '$240,000 - $330,000 (~₹2.0 - ₹2.7 Cr / yr) + RSUs',
    postedTime: '3 days ago',
    featured: true,
    tags: ['Apple Silicon', 'Computer Architecture', 'C++', 'Neural Engine'],
    overview: 'Architect future generations of custom Apple Silicon SoC micro-architectures across CPU, GPU, and Neural Engine subsystems at Apple Park.',
    responsibilities: [
      'Define micro-architecture specifications for high-efficiency ML accelerators.',
      'Collaborate with OS runtime teams to tune unified memory latency.',
      'Direct architectural performance simulation pipelines.'
    ],
    requirements: [
      '10+ years in microprocessor architecture, SoC design, or hardware/software co-design.'
    ],
    benefits: [
      'Generous Apple RSU stock grant.',
      'Full healthcare and Apple product employee discount program.'
    ]
  },
  {
    id: 'job-vercel-us',
    title: 'Lead Next.js Infrastructure & Edge Platform Engineer',
    company: 'Vercel',
    companyId: 'vercel',
    logoInitials: 'VC',
    badgeColor: 'bg-neutral-900 text-white',
    location: 'San Francisco, CA, United States (Remote US)',
    isRemote: true,
    jobType: 'Full-time',
    category: 'product-mgmt',
    categoryLabel: 'Product Management',
    experience: 'Lead / Staff (7+ yrs)',
    experienceLevel: 'lead',
    salaryMin: 160,
    salaryMax: 210,
    salaryFormatted: '$190,000 - $250,000 (~₹1.6 - ₹2.1 Cr / yr) + RSUs',
    postedTime: '3 days ago',
    featured: false,
    tags: ['Next.js', 'Turbopack', 'Rust', 'Edge Runtime', 'Serverless'],
    overview: 'Build the core developer infrastructure powering Next.js App Router, Turbopack bundling, and Vercel Edge compute network.',
    responsibilities: [
      'Improve Turbopack Rust compiler performance for instant HMR speeds.',
      'Develop Edge middleware and streaming SSR infrastructure.',
      'Collaborate with open source maintainers and enterprise engineering teams.'
    ],
    requirements: [
      '6+ years web infrastructure and systems experience in Rust/TypeScript.'
    ],
    benefits: [
      'Full remote flexibility.',
      'Competitive compensation and equity.',
      'Comprehensive health, dental, and wellness allowance.'
    ]
  },
  {
    id: 'job-figma-us',
    title: 'Staff Product Designer (Design Systems & Interactive Canvas)',
    company: 'Figma',
    companyId: 'figma',
    logoInitials: 'FG',
    badgeColor: 'bg-rose-950 text-rose-100',
    location: 'San Francisco, CA, United States (Hybrid)',
    isRemote: true,
    jobType: 'Full-time',
    category: 'ui-ux-design',
    categoryLabel: 'UI/UX Design',
    experience: 'Senior (5+ yrs)',
    experienceLevel: 'senior',
    salaryMin: 150,
    salaryMax: 200,
    salaryFormatted: '$185,000 - $240,000 (~₹1.5 - ₹2.0 Cr / yr) + Equity',
    postedTime: '4 days ago',
    featured: true,
    tags: ['Design Systems', 'Figma Variables', 'Prototyping', 'WebGL'],
    overview: 'Figma is hiring a Staff Product Designer to evolve our core design system and collaborative canvas utilized by millions of creators worldwide.',
    responsibilities: [
      'Define component standards and token architecture across web and native desktop.',
      'Conduct usability research on multi-variant components and nested auto-layout.'
    ],
    requirements: [
      '6+ years experience designing complex web apps and enterprise design systems.'
    ],
    benefits: [
      'Competitive equity grant.',
      'Full healthcare coverage and remote office allowance.'
    ]
  }
];
