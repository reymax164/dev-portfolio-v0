import type {
  NavItem,
  HomeData,
  SkillCategory,
  Project,
  Certification,
  Education,
} from '../types/portfolio';

const getAssetPath = (path: string) => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

export const navItems: NavItem[] = [
{ label: "Home", href: "#home" },
{ label: "Skills", href: "#skills" },
{ label: "Projects", href: "#projects" },
{ label: "Certifications", href: "#certifications" },
{ label: "Education", href: "#education" },
{ label: "Contact", href: "#contact" },
];

export const homeData: HomeData = {
firstName: "John Maxine",
lastName: "Reyes",
role: "Software Developer",
summary: "BS in Information Technology student from STI College Batangas. Dedicated to building scalable and mantainable web and mobile applications by applying clean architechture and software engineering principles.",
avatarUrl:  getAssetPath("/images/avatar.jpg"),
resumeUrl:  getAssetPath("/pdfs/resume.pdf"),
coverLetterUrl: getAssetPath("/images/cover_letter.jpg"),
socialLinks: {
    github: "https://github.com/reymax164",
    linkedin: "https://linkedin.com/in/john-maxine-reyes-b8aa433a6",
},
};

export const skillCategories: SkillCategory[] = [
{
    category: "Languages",
    skills: [
    { name: "Java", icon: "java" },
    { name: "Python", icon: "python" },
    { name: "C#", icon: "cs" },
    { name: "HTML5", icon: "html" },
    { name: "CSS3", icon: "css" },
    { name: "JavaScript", icon: "js" },
    { name: "TypeScript", icon: "ts" },
    { name: "PHP", icon: "php" },
    ],
},
{
    category: "Libraries and Frameworks",
    skills: [
    { name: ".NET", icon: "dotnet"},
    { name: "Laravel", icon: "laravel" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "React", icon: "react" },
    ],
},
{
    category: "Backend, Database, & Infrastucture",
    skills: [
    { name: "MySQL", icon: "mysql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "SQLite", icon: "sqlite" },
    { name: "PostgreSQL", icon: "postgres" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Supabase", icon: "supabase" },
    { name: "AWS", icon: "aws" },
    ],
},
{
    category: "Developer Tools",
    skills: [
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "VS Code", icon: "vscode" },
    { name: "Visual Sudio", icon: "visualstudio" },
    ],
},
{
    category: "Graphics & Design",
    skills: [
    { name: "Figma", icon: "figma" },
    { name: "Blender", icon: "blender" },
    ],
},
{
    category: "Mobile Development",
    skills: [
    { name: "Android (Java)", icon: "androidstudio" },
    ],
},
];

export const projects: Project[] = [
{
    id: "school-management-system",
    title: "School Management & Enrollment System",
    dateRange: "2026",
    image: getAssetPath("/images/projects/gscab.png"),
    technologies: ["Laravel", "Tailwind CSS", "Supabase", "PostgreSQL", "Semaphore API"],
    description: "Developed a multi-role web portal for students, teachers, registrars, and cashiers featuring synchronized data workflows and role-based access control. Integrated SMS notifications.",
    liveUrl: "https://gscab.tech",
    githubUrl: "https://github.com/",
},
{
    id: "sonlight",
    title: "Sonlight",
    dateRange: "2024",
    image: getAssetPath("/images/projects/sonlight.png"),
    technologies: ["HTML5", "CSS3", "JavaScript"],
    description: "Collaborated in a web application of a business concept in the Technopreneurship course of the BSIT program of STI College Batangas.",
    liveUrl: "https://iskadoodle.github.io/SONLIGHT/",
    githubUrl: "https://github.com/iSkaDoodle/SONLIGHT",
},
];

export const certifications: Certification[] = [
    {
        id: "aws-certificate",
        title: "Cloud Foundations",
        issuer: "AWS Academy",
        date: "October 2026",
        imageUrl: "/images/certs//aws-certificate.jpg",
        pdfUrl: "/pdfs/resume.pdf",
    },
    {
        id: "codefest-certificate",
        title: "Tagisan ng Talino: Codefest Local Level Champion",
        issuer: "STI College Batangas",
        date: "March 2026",
        imageUrl: "/images/certs/codefest-certificate.jpg",
        pdfUrl: "/pdfs/resume.pdf",
    },
    {
        id: "sap-certificate",
        title: "SAP Training Program Certificate of Participation",
        issuer: "SAP University Alliences",
        date: "June 2025",
        imageUrl: "/images/certs/sap-certificate.jpg",
        pdfUrl: "",
    },
    {
        id: "java-certificate",
        title: "Java Fundamentals",
        issuer: "Oracle Academy",
        date: "June 2024",
        imageUrl: "/images/certs/java-certificate.jpg",
        pdfUrl: "",
    },
    {
        id: "technopreneurship-certificate",
        title: "TECHNOPRENEURSHIP: GOVERNMENT INITIATIVE FOR STARTUP SUCCESS (DSDAP CARAVAN)",
        issuer: "DICT Region IV-A",
        date: "May 2024",
        imageUrl: "/images/certs/technopreneurship-certificate.jpg",
        pdfUrl: "",
    },
    {
        id: "cyberseurity-awareness-certificate",
        title: "Cybersecurity Awareness for STI College - Batangas",
        issuer: "DICT Region IV-A",
        date: "May 2024",
        imageUrl: "/images/certs/cybersecurity-awareness-certificate.jpg",
        pdfUrl: "",
    },
    {
        id: "egov-certificate",
        title: "eGOVPh Super App Orientation",
        issuer: "DICT Region IV-A",
        date: "May 2024",
        imageUrl: "/images/certs/egov-certificate.jpg",
        pdfUrl: "",
    },
];

export const education: Education[] = [
    {
        id: "bs-it",
        degree: "Bachelor of Science in Information Technology",
        institution: "STI College Batangas",
        year: "2023 – Present",
        coursework: [
        "Java Programming & OOP",
        "Data Structures & Algorithms",
        "Systems Administration & Maintenance",
        "Operating Systems",
        "Database Management Systems",
        "C# Programming w/ WinForms",
        "Application Development & Emerging Technologies",
        "Android Development (Java)",
        "Web Development & ASP.NET",
        "Computer Graphics Programming",
        ],
    },
];