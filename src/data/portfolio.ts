export const profile = {
  name: "Ahmed Riadh Fellah",
  shortName: "Riad Fellah",
  title: "Software Engineer @ BADR Bank | Data Scientist",
  tagline:
    "Python • SQL • Machine Learning • Banking Information Systems",
  location: "Algiers, Algeria",
  about: [
    "I am a Software Engineer and Data Science graduate with experience in banking information systems, machine learning, and enterprise software development.",
    "Currently, I work as an IT Engineer at BADR Bank, where I design, develop, and maintain banking applications while collaborating with business and technical teams to deliver reliable software solutions.",
    "My academic background in Data Science and Analytics enabled me to build predictive machine learning models, analyze large-scale datasets, and transform data into actionable insights. My master's research focused on predicting solar irradiation using meteorological data through machine learning techniques.",
    "Alongside data science, I have hands-on experience developing enterprise web applications, database systems, and internal management platforms. I am always interested in opportunities involving Software Engineering, Data Science, Artificial Intelligence, and Digital Transformation.",
  ],
  coreAreas: [
    "Software Engineering",
    "Data Science",
    "Machine Learning",
    "Data Analytics",
    "Banking Information Systems",
    "Business Intelligence",
  ],
};

export interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  period: string;
  duration: string;
  location: string;
  bullets: string[];
  monogram: string;
  color: string; // tailwind gradient classes
}

export const experiences: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Banque de l'Agriculture et du Développement Rural (BADR)",
    type: "Full-time · On-site",
    period: "Oct 2025 – Present",
    duration: "1 yr 1 mo",
    location: "Algiers, Algeria",
    monogram: "BADR",
    color: "from-emerald-500 to-green-700",
    bullets: [
      "Design and develop software solutions supporting banking operations.",
      "Analyze business requirements and translate them into technical specifications.",
      "Maintain and improve banking information systems.",
      "Collaborate with cross-functional teams to deliver secure and scalable applications.",
      "Produce technical documentation and provide user support.",
    ],
  },
  {
    role: "Teaching Assistant – Algorithmics",
    company: "Université d'Alger",
    type: "Full-time · On-site",
    period: "Oct 2024 – Feb 2025",
    duration: "5 mos",
    location: "Algiers, Algeria",
    monogram: "UA",
    color: "from-blue-500 to-indigo-700",
    bullets: [
      "Delivered practical sessions in algorithm design and problem solving.",
      "Guided undergraduate students through programming exercises.",
      "Assisted in evaluating assignments and supporting student learning.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Université d'Alger",
    type: "Internship",
    period: "Jan 2024 – Jul 2024",
    duration: "7 mos",
    location: "Algeria",
    monogram: "UA",
    color: "from-blue-500 to-indigo-700",
    bullets: [
      "Processed and analyzed over 10,000 meteorological observations using Python.",
      "Built machine learning models to predict solar irradiation.",
      "Performed data preprocessing, feature engineering, and statistical analysis.",
      "Evaluated model performance using regression metrics.",
      "Achieved predictive accuracy exceeding 90%.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Sonelgaz",
    type: "Internship",
    period: "Oct 2022 – Jan 2024",
    duration: "1 yr 4 mos",
    location: "Algiers, Algeria",
    monogram: "SG",
    color: "from-orange-500 to-amber-700",
    bullets: [
      "Developed an internal platform for electricity transformer management.",
      "Participated in system design and implementation using modern web technologies.",
      "Reviewed and optimized application code prior to deployment.",
      "Presented project progress and technical demonstrations to stakeholders.",
      "Collaborated within a multidisciplinary development team.",
    ],
  },
];

export interface ProjectItem {
  title: string;
  client?: string;
  description: string;
  technologies: string[];
  icon: string; // lucide icon key
}

export const projects: ProjectItem[] = [
  {
    title: "Consumer Credit Management",
    client: "Algérie Poste",
    description:
      "Platform for managing consumer credit operations for Algérie Poste customers. Handles account transactions, including withdrawals and transfers to dedicated platform accounts, with automated data extraction and XML file generation in compliance with Banque d'Algérie requirements.",
    technologies: ["PHP", "PL/SQL", "XML", "SQL"],
    icon: "credit",
  },
  {
    title: "NIN Verification & Customer Information Automation",
    description:
      "Automated solution for managing and validating National Identification Numbers (NIN) using data from the MICLAAT system. Matches customer NINs, verifies their validity, identifies discrepancies, and retrieves customer information through an automated workflow.",
    technologies: ["Python", "SQL", "Data Automation", "MICLAAT"],
    icon: "shield",
  },
  {
    title: "Euro Exchange Rate Web Service",
    description:
      "Web service for managing euro exchange-rate data, including the creation and modification of exchange-rate records. Provides a structured interface for updating and integrating exchange-rate information across banking systems.",
    technologies: ["Web Services", "PHP", "SQL", "REST/SOAP APIs"],
    icon: "euro",
  },
  {
    title: "Tax & Trade Management Platform",
    client: "Ministry of Finance",
    description:
      "Platform for managing trade-related tax information and automating the collection and processing of financial data. Retrieves XML files, processes the required information, and supports end-of-month reporting and data consolidation.",
    technologies: ["PHP", "PL/SQL", "XML", "SQL", "Web Development"],
    icon: "landmark",
  },
  {
    title: "GAP Incident & Complaint Management",
    client: "BADR Bank",
    description:
      "Complaint and incident management platform for handling GAP-related issues reported across BADR agencies. Centralizes complaints, tracks their status, facilitates follow-up, and supports the resolution process across agencies.",
    technologies: ["PHP", "SQL", "PL/SQL", "Web Development"],
    icon: "alert",
  },
  {
    title: "Customer Complaint Management at Agency Level",
    client: "BADR Bank",
    description:
      "Solution for managing customer complaints directly at the agency level. Enables agencies to register, track, process, and follow up on complaints while providing visibility into their status and resolution.",
    technologies: ["PHP", "SQL", "PL/SQL", "Web Development"],
    icon: "users",
  },
  {
    title: "General Ledger Account Management & Reconciliation",
    client: "BADR Bank",
    description:
      "Platform for searching, analyzing, and validating General Ledger (GL) accounts across multiple banking operations, including consumer and real-estate loans. Provides detailed transaction information and performs accounting reconciliation by verifying that total debit and credit amounts are balanced.",
    technologies: ["PHP", "PL/SQL", "SQL", "XML", "Data Validation", "Financial Data Processing"],
    icon: "book",
  },
  {
    title: "Daily Accounting Control & Transaction Validation",
    client: "BADR Bank",
    description:
      "Platform for monitoring and validating daily accounting entries across different transaction types. A scheduled job runs daily at 3:00 AM to populate control tables, while a five-day rolling mechanism maintains the required transaction history. Detected anomalies are automatically reported to the responsible director.",
    technologies: ["PHP", "PL/SQL", "SQL", "Database Jobs", "Automated Validation"],
    icon: "clock",
  },
];

export interface TechItem {
  name: string;
  logo: string; // devicon CDN url
  abbr: string; // fallback monogram if logo fails to load
  color: string; // brand color for fallback badge
}

const devicon = (slug: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-${variant}.svg`;

export const techStack: TechItem[] = [
  { name: "Python", logo: devicon("python"), abbr: "Py", color: "#3776AB" },
  { name: "SQL / PL-SQL", logo: devicon("oracle"), abbr: "SQL", color: "#F80000" },
  { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg", abbr: "BI", color: "#F2C811" },
  { name: "Scikit-learn", logo: devicon("scikitlearn"), abbr: "Sk", color: "#F7931E" },
  { name: "Pandas", logo: devicon("pandas"), abbr: "Pd", color: "#150458" },
  { name: "NumPy", logo: devicon("numpy"), abbr: "Np", color: "#4DABCF" },
  { name: "React", logo: devicon("react"), abbr: "Re", color: "#61DAFB" },
  { name: "Laravel", logo: devicon("laravel"), abbr: "La", color: "#FF2D20" },
  { name: "PHP", logo: devicon("php"), abbr: "PHP", color: "#777BB4" },
  { name: "JavaScript", logo: devicon("javascript"), abbr: "JS", color: "#F7DF1E" },
  { name: "Node.js", logo: devicon("nodejs"), abbr: "No", color: "#339933" },
  { name: "MySQL", logo: devicon("mysql"), abbr: "My", color: "#4479A1" },
  { name: "HTML5", logo: devicon("html5"), abbr: "H5", color: "#E34F26" },
  { name: "CSS3", logo: devicon("css3"), abbr: "C3", color: "#1572B6" },
  { name: "Git", logo: devicon("git"), abbr: "Git", color: "#F05032" },
  { name: "Jupyter", logo: devicon("jupyter"), abbr: "Jp", color: "#F37626" },
];

export interface EducationItem {
  school: string;
  degree: string;
  field: string;
  period: string;
  grade: string;
  skills: string[];
}

export const education: EducationItem[] = [
  {
    school: "Université d'Alger",
    degree: "Master of Science (M.Sc.)",
    field: "Data Science and Analytics — Computer Science",
    period: "2022 – 2024",
    grade: "Excellent",
    skills: ["Python", "Deep Learning", "Machine Learning", "Statistics", "Data Mining"],
  },
  {
    school: "Université d'Alger",
    degree: "Bachelor's Degree",
    field: "Information Systems and Software Engineering — Computer Science",
    period: "2019 – 2022",
    grade: "Very Good",
    skills: ["React.js", "Laravel", "PHP", "SQL", "Software Design", "Algorithms"],
  },
];
