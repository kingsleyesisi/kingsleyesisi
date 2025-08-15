export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  category: string
  github: string
  demo: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: "Fastickets",
    title: "Secure API Framework",
    description: "A Django REST framework with advanced security features and authentication protocols.",
    longDescription: "This project provides a secure foundation for building REST APIs with Django. It includes advanced security features such as JWT authentication, rate limiting, and comprehensive permission systems. The framework is designed to be easily extensible while maintaining strict security protocols. It follows OWASP security guidelines and includes automated security testing to identify potential vulnerabilities.",
    image: "https://fastickets.vercel.app/logo.png",
    technologies: ["Python", "Django", "REST API", "Cloudflare R2", "React"],
    category: "backend",
    github: "https://github.com/kingsleyesisi/fasticket",
    demo: "https://fastickets.vercel.app/",
    featured: true,
  },
  {
    id: "readme-generator",
    title: "AI Documentation Generator",
    description: "Docmint, it's a AI readme generator that generate documentation of any codebase.",
    longDescription: "Docmint is an AI-powered documentation generator that creates comprehensive README files for any codebase. It analyzes the code structure, comments, and existing documentation to produce high-quality, user-friendly documentation. The tool supports various programming languages and integrates with popular version control systems to keep documentation up-to-date.",
    image: "Docmint.png",
    technologies: ["Python", "OpenAI", "Markdown"],
    category: "ml",
    github: "https://github.com/kingsleyesisi/DocMint",
    demo: "https://github.com/kingsleyesisi/DocMint",
    featured: true,
  },
  {
    id: "Kount Analysis",
    title: "Kount Analysis",
    description: "A web analysis tools that track visitors, analyze behavior, and report back to the site owner",
    longDescription: "Get real-time insights into your website performance with our enterprise-grade analytics platform. Track visitors, analyze behavior, and grow your business with data that matters.",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "FastAPI", "Data", "Socket"],
    category: "security",
    github: "https://kountanalytics.vercel.app/",
    demo: "https://kountanalytics.vercel.app/",
    featured: true,
  },
  {
    id: "Optical-character-recognition",
    title: "Optical Character Recognition",
    description: "OCR project using python to read the context of a image and extract the text.",
    longDescription: "A comprehensive OCR system built with Python that leverages advanced image processing techniques to extract text from images. The system is designed to handle various image formats and can be easily integrated into existing applications. It includes features for text recognition, layout analysis, and post-processing to improve accuracy.",
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Flask", "OpenCV", "Pillow"],
    category: "data",
    github: "https://github.com/kingsleyesisi/OCR",
    demo: "https://github.com/kingsleyesisi/OCR",
  },
  {
    id: "file-transfer",
    title: "File Transfer system",
    description: "Secure file transfer system with end-to-end encryption and user authentication.",
    longDescription: "A robust file transfer system that ensures secure and efficient transfer of files between users. The system incorporates end-to-end encryption to protect sensitive data during transit and includes user authentication mechanisms to verify the identity of users. With a user-friendly interface and support for various file formats, this system is designed for both individual and enterprise use.",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Flask", "Socket", "JavaScript"],
    category: "security",
    github: "https://github.com/kingsleyesisi/File_bridge",
    demo: "https://github.com/kingsleyesisi/File_bridge",
  },
  {
    id: "email-sender",
    title: "Vex Mail",
    description: "Vexmail uses Imap to create a Gmail like platform .",
    longDescription: "An advanced natural language processing API that provides sentiment analysis, text classification, and entity recognition capabilities. Built with Python and modern NLP libraries, it can process text in multiple languages and provides detailed analysis results. The API is designed to be scalable and can handle high-volume text processing requests.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Flask", "Imap", "SMTP"],
    category: "ml",
    github: "https://github.com/kingsleyesisi/vexmail",
    demo: "https://github.com/kingsleyesisi/vexmail",
  },
]

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured)
}

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category)
}