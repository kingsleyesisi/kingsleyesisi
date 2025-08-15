export interface Job {
  id: string
  title: string
  company: string
  period: string
  description: string
  longDescription: string
  technologies: string[]
  achievements: string[]
  current?: boolean
}

export const jobs: Job[] = [
  {
    id: "senior-backend-developer",
    title: "Senior Backend Developer",
    company: "Undisclosed Company",
    period: "2022 - Present",
    description: "Leading the backend development team, implementing Django architectures, and developing secure API endpoints. Integrating machine learning models for predictive analytics.",
    longDescription: "As a Senior Backend Developer at SecureTech Solutions, I lead a team of 5 developers in designing and implementing scalable backend systems using Django and Python. My responsibilities include architecting secure API endpoints, implementing authentication systems, and integrating machine learning models for predictive analytics. I've successfully delivered multiple high-impact projects that improved system performance by 40% and reduced security vulnerabilities by 60%.",
    technologies: ["Python", "Django", "PostgreSQL", "Redis", "Docker", "AWS"],
    achievements: [
      "Led the development of a secure API framework used by 10+ client applications",
      "Implemented ML-powered fraud detection system reducing false positives by 35%",
      "Mentored 2 junior developers and established code review best practices",
      "Reduced API response times by 40% through optimization and caching strategies"
    ],
    current: true,
  },
  {
    id: "python-developer",
    title: "Python Developer",
    company: "NexTrade",
    period: "2024 - 2025",
    description: "Developed and maintained web applications using Django, Flask, PHP, and PostgreSQL. Implemented CI/CD pipelines and automated testing for Python applications.",
    longDescription: "At NexTrade, I was responsible for developing and maintaining multiple web applications using Django and Flask frameworks. I maintained the PHP application and built new features using Python, which reduced deployment time by 50%. I also established automated testing practices that improved code quality and reduced bugs in production by 30%.",
    technologies: ["Python", "Django", "Flask", "PHP", "PostgreSQL", "Docker"],
    achievements: [
      "Developed 5+ web applications serving over 5,000 daily active users",
      "Implemented automated testing suite with 90% code coverage",
      "Reduced deployment time by 50% through CI/CD pipeline optimization",
      "Built data processing system handling 1M+ records daily"
    ],
  },
  {
    id: "junior-web-developer",
    title: "Junior Web Developer",
    company: "Freelance",
    period: "2023 - 2024",
    description: "Worked on backend development using Python and Django. Collaborated with frontend developers to implement RESTful APIs and database models.",
    longDescription: "Starting my career at a Freelance project, I gained foundational experience in web development using Python and Django. I collaborated with senior developers and frontend teams to build RESTful APIs and design database schemas. This role taught me the importance of clean code, proper documentation, and agile development practices.",
    technologies: ["Python", "Django", "SQLite", "HTML", "CSS", "JavaScript"],
    achievements: [
      "Successfully completed 15+ feature implementations",
      "Contributed to 3 major product releases",
      "Improved database query performance by 25%",
      "Maintained 99.5% uptime for critical application services"
    ],
  },
]

export const getCurrentJob = (): Job | undefined => {
  return jobs.find(job => job.current)
}

export const getJobById = (id: string): Job | undefined => {
  return jobs.find(job => job.id === id)
}

export const getJobsByCompany = (company: string): Job[] => {
  return jobs.filter(job => job.company === company)
}