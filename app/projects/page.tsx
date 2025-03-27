"use client"

import { ProjectCard } from "@/components/project-card"

export default function ProjectsPage() {
  const projects = [
    {
      id: "secure-api",
      title: "Secure API Framework",
      description: "A Django REST framework with advanced security features and authentication protocols.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "Django", "REST API", "OAuth2"],
      category: "backend",
    },
    {
      id: "ml-prediction",
      title: "ML Prediction Service",
      description: "Machine learning model deployment with Django for real-time predictions and data analysis.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "Django", "TensorFlow", "Scikit-learn"],
      category: "ml",
    },
    {
      id: "security-scanner",
      title: "Web Security Scanner",
      description: "Automated security vulnerability scanner for web applications with detailed reporting.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "Django", "Cybersecurity", "OWASP"],
      category: "security",
    },
    {
      id: "data-pipeline",
      title: "Data Processing Pipeline",
      description: "Scalable data processing system using Django and Celery for handling large datasets.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "Django", "Celery", "Redis"],
      category: "data",
    },
    {
      id: "auth-system",
      title: "Advanced Authentication System",
      description: "Multi-factor authentication system with biometric verification and audit logging.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "Django", "JWT", "OAuth"],
      category: "security",
    },
    {
      id: "nlp-analyzer",
      title: "NLP Text Analysis API",
      description: "Natural language processing API for sentiment analysis and text classification.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "Django", "NLTK", "spaCy"],
      category: "ml",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">projects.sh</div>
        </div>
        <div className="terminal-content">
          <p className="mb-4">
            <span className="text-primary">$</span> Displaying projects directory. Select category to filter results.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  )
}

