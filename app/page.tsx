"use client"

import { useState } from "react"
import Link from "next/link"
import { Terminal } from "@/components/terminal"
import { ProjectCard } from "@/components/project-card"
import { BlogCard } from "@/components/blog-card"
import { ArrowRight } from "lucide-react"
import { getFeaturedProjects } from "@/data/projects"
import { getFeaturedPosts } from "@/data/blog"

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)

  const featuredProjects = getFeaturedProjects()
  const latestPosts = getFeaturedPosts()

  const skills =     ["Python: Writing clean, efficient code for backend systems, automation, and cross-domain scripts",
    "Django: Building secure, scalable web apps and RESTful APIs with Django REST Framework",
    "Flask: Developing lightweight, flexible web applications for rapid prototyping",
    "FastAPI: Creating high-performance, asynchronous APIs for modern applications",
    "PostgreSQL: Designing and optimizing relational database schemas and queries",

    "Machine Learning: Building and deploying ML models with Scikit-learn and TensorFlow",
    "Cybersecurity (Beginner): Applying secure coding practices and exploring tools like OWASP ZAP and others",
    "Docker: Containerizing applications for consistent, scalable deployment"
]
  return (
    <div className="space-y-16">
      <section className="py-12">
        <Terminal
          text="Hey there! I'm Kingsley Esisi, 
          a Python Backend Developer who thrives on crafting robust, scalable applications with Django. My passion for cybersecurity drives me to build secure systems, 
          while my love for machine learning fuels my curiosity to explore intelligent solutions. 
          From automation scripts to data pipelines and everything in between, 
          I write Python code that powers diverse fields. Step into my world of code, creativity,
           and innovation—let's build something extraordinary together!"
          typingSpeed={40}
          className="max-w-3xl mx-auto"
          onComplete={() => setIntroComplete(true)}
        />

        {introComplete && (
          <div className="mt-8 flex justify-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-md transition-colors border border-primary/30"
            >
              Learn more about me <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <Link href="/projects" className="text-primary hover:underline inline-flex items-center gap-1">
            View all <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-button terminal-button-red"></div>
            <div className="terminal-button terminal-button-yellow"></div>
            <div className="terminal-button terminal-button-green"></div>
            <div className="terminal-title">system_specs.sh</div>
          </div>
          <div className="terminal-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-primary">$</span>
                  <span className="text-white">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Latest from the Blog</h2>
          <Link href="/blog" className="text-primary hover:underline inline-flex items-center gap-1">
            View all <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </section>
    </div>
  )
}

