import type {
  NavItem,
  HeroData,
  SkillCategory,
  Project,
  Certification,
  Education,
} from '../types/portfolio';

const getAssetPath = (path: string) => {
  // Removes leading slash if present to avoid double slashes
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

export const heroData: HeroData = {
firstName: "John Maxine",
lastName: "Reyes",
role: "Software Developer",
summary: "Dedicated to building scalable and mantainable web and mobile applications by applying clean architechture and software engineering principles.",
avatarUrl: "/images/avatar.jpg",
resumeUrl: "/pdfs/resume.pdf",
coverLetterUrl: getAssetPath("/images/cover_letter.jpg"),
socialLinks: {
    github: "https://github.com/reymax164",
    linkedin: "https://http://linkedin.com/in/john-maxine-reyes-b8aa433a6",
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
    image: getAssetPath("#"),
    technologies: ["Laravel", "Tailwind CSS", "Supabase", "PostgreSQL", "Semaphore API"],
    description: "A multi-role web portal for students, teachers, registrars, and cashiers featuring synchronized data workflows and role-based access control.",
    liveUrl: "https://gscab.tech",
    githubUrl: "https://github.com/",
},
{
    id: "sonlight",
    title: "Sonlight",
    dateRange: "2024",
    image: getAssetPath("/images/projects/sonlight.png"),
    technologies: ["HTML5", "CSS3", "JavaScript"],
    description: "Collaborated with a web application of a business concept in Technopreneurship course",
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
        imageUrl: "/",
        pdfUrl: "/pdfs/resume.pdf",
    },
    {
        id: "sap-certificate",
        title: "SAP Training Program Certificate of Participation",
        issuer: "SAP University Alliences",
        date: "June 2025",
        imageUrl: "/",
        pdfUrl: "",
    },
    {
        id: "java-certificate",
        title: "Java Fundamentals",
        issuer: "Oracle Academy",
        date: "June 2024",
        imageUrl: "/",
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
        "Operating Systems",
        "Database Management Systems",
        "C# Programming & WinForms",
        "AppDev & Emerging Tech (SDLC/Software Eng)",
        "Android Development (Java)",
        "Web Development & ASP.NET",
        "Computer Graphics Programming",
        ],
    },
];