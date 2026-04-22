export const personalInfo = {
  name: "Edmond Amofah Boakye",
  title: "Full Stack Software Developer",
  location: "Accra, Ghana",
  email: "edmondboakye1622@gmail.com",
  phone: ["+233249300617", "+233200047855", "+233554394290"],
  github: "https://github.com/Edmond-Amofah-Boakye",
  linkedin: "https://www.linkedin.com/in/edmond-amofah",
  bio: "Full Stack Software Developer with 2+ years of experience building scalable web applications. Led multiple teams in developing production-ready systems using React, Node.js, Python, and modern technologies. Passionate about mentoring developers and creating efficient, user-centered solutions.",
  resumeUrl: "/EDMOND_AMOFAH_BOAKYE_CV.pdf"
};

export const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Ghana Communication Technology University",
    location: "Accra, Ghana",
    period: "February 2025 – March 2026",
    thesis: "An Integrative Approach to Brain Tumor Diagnosis Using Explainable Convolutional Neural Networks and Brain Symmetry Metrics",
    coursework: ["Machine Learning", "Deep Learning", "Database Systems", "Artificial Intelligence", "Software Engineering", "Data Structures and Algorithms"]
  },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "University of Energy and Natural Resources",
    location: "Sunyani, Ghana",
    period: "September 2019 – September 2023",
    project: "Developed a machine learning model for product demand forecasting using Random Forest and ARIMA, SARIMAX, FBPROPHET, optimizing inventory management",
    coursework: ["Data Structures and Algorithms", "Database Systems", "Computer Networking", "Data Mining", "Multimedia Systems", "Software Engineering"]
  }
];

export const experience = [
  {
    title: "Full Stack Software Developer",
    company: "Really Great Tech",
    location: "Accra, Ghana (Headquarters in Israel)",
    period: "November 2023 – March 2026",
    type: "Full-time",
    responsibilities: [
      "Led multiple teams in building scalable web applications using React, Node.js, Express, NestJS, Python FastAPI, PostgreSQL and other technologies, delivering 10+ production-ready systems",
      "Trained and mentored 8+ junior developers in Agile methodologies, test-driven development, and API design, increasing team productivity by 25%",
      "Designed and optimized RESTful APIs and database schemas (PostgreSQL, MongoDB), reducing query response time by 20% through indexing, caching and other techniques"
    ]
  },
  {
    title: "Web Applications Developer",
    company: "Accra Digital Centre",
    location: "Accra, Ghana",
    period: "October 2022 – December 2022",
    type: "Contract",
    responsibilities: [
      "Developed responsive web applications prioritizing user-centered design and accessibility",
      "Collaborated with senior developers to implement features, meeting project deadlines and ensuring high-quality deliverables"
    ]
  },
  {
    title: "Training Instructor / Software Development Mentor",
    company: "Codeintel & Creativity Group (CG)",
    location: "University of Energy and Natural Resources, Sunyani, Ghana",
    period: "November 2021 – September 2023",
    type: "Volunteer",
    responsibilities: [
      "Taught students HTML, CSS, JavaScript, React, Node.js, and basic backend concepts, helping beginners transition into real-world development practices",
      "Mentored and guided 50+ students, providing code reviews, debugging support, and career guidance in software engineering",
      "Designed and facilitated practical coding sessions, workshops, and mini-projects, improving students' problem-solving and coding confidence"
    ]
  },
  {
    title: "Web Development Trainer",
    company: "IT for Youth Ghana",
    location: "Accra, Ghana",
    period: "September 2025 – November 2025",
    type: "Volunteer",
    responsibilities: [
      "Trained 35+ senior high school graduates in web development (HTML, CSS, JavaScript, React, etc.), preparing them for university and tech careers",
      "Designed hands-on coding bootcamps, increasing participants' coding proficiency by 40% and promoting digital inclusion"
    ]
  }
];

export const skills = {
  "Programming Languages": ["Python", "JavaScript (ES6+)", "TypeScript", "C#"],
  "Frontend": ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "Shadcn UI", "Ant Design", "Responsive Design"],
  "Backend": ["Node.js", "Express.js", "NestJS", "Python FastAPI", "ASP.NET Core", "RESTful APIs"],
  "Mobile Development": [".NET MAUI", "Cross-platform Apps"],
  "Databases": ["MongoDB", "PostgreSQL", "MySQL", "Microsoft SQL Server", "Redis", "Database Design"],
  "Machine Learning & AI": ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Explainable AI", "CNNs", "Time Series Forecasting"],
  "Testing & Quality": ["Unit Testing", "Integration Testing", "Test-Driven Development", "Code Review", "Debugging"],
  "Cloud & Tools": ["AWS", "Cloudflare", "Git", "GitHub", "Visual Studio", "VS Code", "Postman", "ClickUp", "Swagger"],
  "Professional Skills": ["Agile/Scrum", "Team Leadership", "Mentoring", "Technical Documentation", "API Design"]
};

export const projects = [
  {
    title: "Mediboard - Healthcare Platform",
    description: "Enterprise medical records management platform enabling secure patient-doctor data sharing, medical document management, and healthcare collaboration. Built as a monorepo full-stack application with advanced authentication flows.",
    technologies: ["React", "TypeScript", "NestJS", "PostgreSQL", "TypeORM", "Firebase Auth", "Docker", "Nx Monorepo", "GitHub Actions"],
    role: "Full Stack Developer",
    highlights: [
      "Developed secure doctor authentication system with SMS verification and patient data sharing",
      "Built RESTful APIs with NestJS for medical records, lab tests, and patient operations",
      "Implemented TypeORM migrations and database schema management for PostgreSQL",
      "Created responsive medical dashboard with file preview and document management",
      "Set up CI/CD pipelines with GitHub Actions for automated deployments"
    ],
    githubUrl: "https://github.com/wisepatient/mediboard",
    liveUrl: "https://mediboard.ai",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
  },
  {
    title: "ArcadesBox - Gaming Platform",
    description: "Full-stack gaming platform with game library, user management, admin dashboard, and comprehensive analytics. Features secure content delivery via AWS CloudFront and role-based access control for managing thousands of games.",
    technologies: ["React 19", "TypeScript", "Vite", "TailwindCSS", "Redux Toolkit", "Node.js", "Express", "PostgreSQL", "TypeORM", "Redis", "BullMQ", "AWS S3", "CloudFront"],
    role: "Full Stack Developer",
    highlights: [
      "Built secure content delivery system using AWS CloudFront with signed cookies",
      "Developed comprehensive admin dashboard for game and user management",
      "Implemented detailed analytics tracking for game plays, user activity, and signups",
      "Created role-based access control with granular permissions",
      "Set up background job processing with Redis and BullMQ for scalability"
    ],
    githubUrl: "#",
    liveUrl: "https://www.arcadesbox.com/",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop"
  },
  {
    title: "NeuroScan AI - Brain Tumor Detection",
    description: "Advanced machine learning system for brain tumor diagnosis using Explainable Convolutional Neural Networks and brain symmetry metrics. Part of Master's thesis research focusing on improving diagnostic accuracy and interpretability for medical professionals.",
    technologies: ["Python", "TensorFlow", "PyTorch", "CNNs", "Scikit-learn", "NumPy", "Pandas", "Gradio", "HuggingFace Spaces"],
    role: "ML Researcher & Developer",
    highlights: [
      "Achieved 95%+ accuracy in brain tumor classification using deep learning",
      "Implemented explainable AI techniques for transparent model decisions",
      "Integrated brain symmetry metrics for enhanced diagnostic precision",
      "Deployed interactive web interface on HuggingFace Spaces for accessibility",
      "Published research findings as part of Master's thesis in Computer Science"
    ],
    githubUrl: "#",
    liveUrl: "https://huggingface.co/spaces/EddyBoakye/neuroscan-ai",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop"
  },
  {
    title: "iMotion Back Office - Therapy Management Platform",
    description: "Comprehensive internal management system for therapy platform, managing therapists, devices, patients, therapy sessions, and real-time analytics. Built as a full-stack TypeScript monorepo with advanced data visualization and role-based access control.",
    technologies: ["React 19", "TypeScript", "NestJS 11", "PostgreSQL", "TypeORM", "TailwindCSS", "React Query", "Recharts", "Vite", "Swagger"],
    role: "Full Stack Developer",
    highlights: [
      "Built 35+ React Query hooks for seamless API integration across 7 service modules",
      "Developed real-time analytics dashboard with interactive charts and customizable filters",
      "Implemented comprehensive session and device management with activity tracking",
      "Created role-based access control system with user invitation and profile management",
      "Designed scalable PostgreSQL database with TypeORM migrations and seeding"
    ],
    githubUrl: "#",
    liveUrl: "https://dev.imotion.reallygreattech.com/",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
  },
  {
    title: "Trakka - Task & Project Management",
    description: "Full-stack task management platform with hierarchical task organization, Kanban/list views, real-time collaboration via Socket.IO, and sprint planning. Features file uploads, activity logs, and Redis-backed job queues for scalability.",
    technologies: ["React 19", "TypeScript", "Vite", "TailwindCSS", "Express 5", "TypeORM", "PostgreSQL", "Redis", "Socket.IO", "AWS S3", "Docker"],
    role: "Full Stack Developer",
    highlights: [
      "Built real-time collaboration system with Socket.IO for instant task updates",
      "Implemented hierarchical task management with drag-and-drop reordering",
      "Developed spaces with custom statuses, roles, and member management",
      "Created sprint and milestone planning features with Kanban boards",
      "Integrated Redis for session management and background job processing"
    ],
    githubUrl: "#",
    liveUrl: "https://trakka.reallygreattech.com/login",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
  },
  {
    title: "Tickr - Timesheet Reporting System",
    description: "Enterprise timesheet management system enabling employees to track work hours, managers to review submissions, and administrators to generate comprehensive reports. Features weekly digests, PDF/Excel exports, and advanced analytics.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "TypeORM", "pnpm", "Docker"],
    role: "Full Stack Developer",
    highlights: [
      "Developed weekly timesheet submission system with task and project tracking",
      "Built approval workflow with manager review and notification system",
      "Implemented advanced reporting with PDF and Excel export capabilities",
      "Created weekly and monthly digest reports with automated email delivery",
      "Designed mobile-responsive interface for on-the-go time tracking"
    ],
    githubUrl: "#",
    liveUrl: "https://tickr.reallygreattech.com/login",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
  },
  {
    title: "Product Demand Forecasting System",
    description: "Machine learning-based forecasting system for inventory optimization using time series analysis. Compares multiple algorithms (Random Forest, ARIMA, SARIMAX, FBPROPHET) to predict product demand and reduce inventory costs.",
    technologies: ["Python", "Random Forest", "ARIMA", "SARIMAX", "FBPROPHET", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    role: "ML Engineer",
    highlights: [
      "Reduced inventory costs by 30% through accurate demand prediction",
      "Compared and evaluated multiple forecasting algorithms for optimal results",
      "Built automated reporting dashboard for business stakeholders",
      "Implemented data preprocessing pipeline for time series data",
      "Part of Bachelor's degree final year project"
    ],
    githubUrl: "#",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
  }
];

export const achievements = [
  {
    title: "Excellence in Execution Award",
    organization: "Really Great Tech Solutions",
    year: "2025",
    description: "Recognized for outstanding performance in project delivery and team leadership"
  },
  {
    title: "Junior Technical Lead",
    organization: "Really Great Tech Solutions",
    year: "2024-2026",
    description: "Promoted to lead technical teams and mentor junior developers"
  }
];

export const certifications = [
  "National Web Development Training - June 2020",
  "Intensive Teacher Training Program - August 2016 & 2017",
  "WAEC Examination Coordinator Training"
];
