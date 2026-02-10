// src/data/portfolio.ts

export type SocialLinks = {
  email: string;
  linkedin: string;
  github: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Experience = {
  role: string;
  company: string;
  location?: string;
  start: string; // e.g., "Sep 2025"
  end: string;   // e.g., "Present"
  bullets: string[];
};

export type Education = {
  degree: string;
  school: string;
  start: string;
  end: string;
  gpa?: string;
};

export type Project = {
  title: string;
  subtitle?: string; // short descriptor like "AI + Portfolio Tracking"
  description: string;
  bullets: string[];
  tech: string[];
  links: {
    live?: string;
    github?: string;
  };
  image?: string; // put image in /public/projects and set "/projects/..."
  featured?: boolean;
};

export type PortfolioData = {
  name: string;
  headline: string;
  roles: string[];
  location?: string;
  socials: SocialLinks;
  hero: {
    title: string;
    tagline: string;
    ctas: {
      primary: { label: string; href: string };
      secondary: { label: string; href: string };
    };
  };
  about: {
    title: string;
    summary: string;
    highlights: string[];
  };
  skills: SkillGroup[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
};

export const portfolio: PortfolioData = {
  name: "Mohammed Amaan Subhani",
  headline: "Indie Software Engineer • AI Software Engineer • Full Stack Developer",
  roles: ["Indie Software Engineer", "AI Software Engineer", "Full Stack Developer"],
  location: "Chicago, IL",
  socials: {
    email: "mlnu116@depaul.edu",
    linkedin: "https://www.linkedin.com/in/mohammed-amaan-subhani-9a38081b7/",
    github: "https://github.com/amaan16",
  },
  hero: {
    title: "Building reliable systems and AI-powered products.",
    tagline:
      "Passionate about AI, ML, distributed systems, API architecture, and cloud-native backend engineering.",
    ctas: {
      primary: { label: "View Projects", href: "#projects" },
      secondary: { label: "Contact", href: "#contact" },
    },
  },
  about: {
    title: "About Me",
    summary:
      "Computer Science master’s student focused on distributed systems, API architecture, and cloud-native backend engineering. I build end-to-end products with performance and reliability in mind—caching, logs/metrics, cron jobs, indexing, message queues, and clean deployment pipelines—plus AI integrations with LLMs and RAG.",
    highlights: [
      "Distributed systems + API architecture",
      "Performance: caching, query optimization, DB indexing",
      "Event-driven systems: Kafka, background jobs, cron",
      "AI: LLMs, RAG pipelines, LangChain/LangGraph",
      "Strong DSA/OOP/design patterns; LeetCode grinder",
    ],
  },
  skills: [
    {
      label: "Languages",
      items: ["Java", "Go", "JavaScript", "Python"],
    },
    {
      label: "Frameworks & Libraries",
      items: ["React", "Angular", "Spring Boot", "FastAPI", "Next.js"],
    },
    {
      label: "Databases",
      items: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      label: "Tools & Platforms",
      items: ["AWS (EC2, S3, Lambda)", "Postman", "Kafka", "Redis", "Git", "GitHub"],
    },
    {
      label: "AI / ML",
      items: ["NLP", "LLMs", "RAG", "LangChain", "LangGraph"],
    },
    {
      label: "Coursework",
      items: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOP)",
        "Computer Networks",
        "Distributed Systems",
        "Software Architecture",
        "Artificial Intelligence",
        "Software Security",
        "Agile Software Development",
      ],
    },
  ],
  experience: [
    {
      role: "Graduate Assistant — CS Tutor",
      company: "DePaul University",
      start: "Sep 2025",
      end: "Present",
      bullets: [
        "Tutored Systems 1, Distributed Systems, Web Development, and Data Structures through 1:1 and group sessions.",
        "Reviewed code, helped debug and optimize solutions, strengthened programming logic, and reinforced algorithms and software design fundamentals.",
      ],
    },
    {
      role: "Software Engineer",
      company: "AXIOMIO",
      start: "Nov 2022",
      end: "Jul 2023",
      bullets: [
        "Developed and optimized React/Angular pages to integrate APIs and render data via interactive tables/forms; resolved UI and accessibility issues.",
        "Designed RESTful APIs and complex queries across MongoDB and PostgreSQL; integrated Redis caching to improve data retrieval performance.",
        "Improved reliability by refactoring Kafka consumers, fixing caching logic, and troubleshooting via OpenSearch log analysis.",
        "Supported backend improvements through integration tests, cron job maintenance, and database migrations.",
      ],
    },
  ],
  education: [
    {
      degree: "MS in Computer Science",
      school: "DePaul University",
      start: "Apr 2024",
      end: "Present",
      gpa: "3.92 / 4.0",
    },
    {
      degree: "BTech in Computer Science",
      school: "St. Martins Engineering College",
      start: "2019",
      end: "2023",
      gpa: "8.19 / 10",
    },
  ],
  projects: [
    {
      title: "AI-Driven Stock Portfolio Management Platform",
      subtitle: "Personalized insights with AI + portfolio analytics",
      description:
        "A backend-driven platform for stock discovery, historical analysis, portfolio tracking, and AI-powered recommendations.",
      bullets: [
        "Built RESTful APIs for stock search, historical data analysis, portfolio tracking, and secure authentication.",
        "Implemented recommendation logic using portfolio context, historical trends, and market signals with a focus on extensibility and performance.",
      ],
      tech: ["Next.js", "Python", "PostgreSQL", "REST APIs"],
      links: {
        // Add when ready:
        // live: "https://your-domain.com",
        // github: "https://github.com/amaan16/your-repo",
      },
      image: "/projects/stock-portfolio.png",
      featured: true,
    },
  ],
};

export default portfolio;
