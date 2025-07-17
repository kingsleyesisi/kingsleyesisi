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
    id: "secure-api",
    title: "Secure API Framework",
    description: "A Django REST framework with advanced security features and authentication protocols.",
    longDescription: "This project provides a secure foundation for building REST APIs with Django. It includes advanced security features such as JWT authentication, rate limiting, and comprehensive permission systems. The framework is designed to be easily extensible while maintaining strict security protocols. It follows OWASP security guidelines and includes automated security testing to identify potential vulnerabilities.",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Django", "REST API", "OAuth2"],
    category: "backend",
    github: "https://github.com/kingsleyesisi/secure-api",
    demo: "https://secure-api-demo.example.com",
    featured: true,
  },
  {
    id: "ml-prediction",
    title: "ML Prediction Service",
    description: "Machine learning model deployment with Django for real-time predictions and data analysis.",
    longDescription: "A comprehensive machine learning prediction service built with Django. This application allows for easy deployment of trained ML models with a RESTful API interface. It includes features for model versioning, A/B testing, and performance monitoring. The system is designed to handle high-throughput prediction requests with efficient caching and load balancing. It supports various ML frameworks including TensorFlow and scikit-learn.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Django", "TensorFlow", "Scikit-learn"],
    category: "ml",
    github: "https://github.com/kingsleyesisi/ml-prediction",
    demo: "https://ml-prediction.example.com",
    featured: true,
  },
  {
    id: "security-scanner",
    title: "Web Security Scanner",
    description: "Automated security vulnerability scanner for web applications with detailed reporting.",
    longDescription: "An advanced web security scanner that automatically identifies vulnerabilities in web applications. Built with Python and Django, this tool performs comprehensive security assessments based on OWASP guidelines. It includes modules for SQL injection detection, XSS vulnerability scanning, CSRF testing, and authentication bypass attempts. The scanner generates detailed reports with remediation suggestions and severity ratings.",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Django", "Cybersecurity", "OWASP"],
    category: "security",
    github: "https://github.com/kingsleyesisi/security-scanner",
    demo: "https://security-scanner.example.com",
    featured: true,
  },
  {
    id: "data-pipeline",
    title: "Data Processing Pipeline",
    description: "Scalable data processing system using Django and Celery for handling large datasets.",
    longDescription: "A robust data processing pipeline built with Django and Celery for handling large-scale data operations. This system enables asynchronous processing of data with reliable task queuing and scheduling. It includes features for data validation, transformation, and loading into various storage systems. The architecture is designed to be horizontally scalable, allowing for processing of increasingly large datasets as demand grows.",
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Django", "Celery", "Redis"],
    category: "data",
    github: "https://github.com/kingsleyesisi/data-pipeline",
    demo: "https://data-pipeline.example.com",
  },
  {
    id: "auth-system",
    title: "Advanced Authentication System",
    description: "Multi-factor authentication system with biometric verification and audit logging.",
    longDescription: "A comprehensive authentication system that provides multi-factor authentication capabilities with support for biometric verification. The system includes features like session management, audit logging, and integration with various identity providers. It's built with security-first principles and includes protection against common authentication vulnerabilities.",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Django", "JWT", "OAuth"],
    category: "security",
    github: "https://github.com/kingsleyesisi/auth-system",
    demo: "https://auth-system.example.com",
  },
  {
    id: "nlp-analyzer",
    title: "NLP Text Analysis API",
    description: "Natural language processing API for sentiment analysis and text classification.",
    longDescription: "An advanced natural language processing API that provides sentiment analysis, text classification, and entity recognition capabilities. Built with Python and modern NLP libraries, it can process text in multiple languages and provides detailed analysis results. The API is designed to be scalable and can handle high-volume text processing requests.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Django", "NLTK", "spaCy"],
    category: "ml",
    github: "https://github.com/kingsleyesisi/nlp-analyzer",
    demo: "https://nlp-analyzer.example.com",
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