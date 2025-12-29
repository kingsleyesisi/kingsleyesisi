"use client"

import { useState } from "react"
import Link from "next/link"
import { Terminal } from "@/components/terminal"
import { ProjectCard } from "@/components/project-card"
import { BlogCard } from "@/components/blog-card"
import { ArrowRight } from "lucide-react"
import { Project } from "@/data/types"
import { Skill } from "@/data/skills"

interface HomeClientProps {
  featuredProjects: Project[]
  latestPosts: any[]
  skills: Skill[]
}

export default function HomeClient({ featuredProjects, latestPosts, skills }: HomeClientProps) {
  const [introComplete, setIntroComplete] = useState(false)

  // Use DB skills if available, otherwise fallback (or just use DB skills)
  // For now, if DB is empty, this might be empty. Ideally we should seed skills too,
  // but the user wants to add them via admin.
  // I will just map the DB skills.
  // If the user wants to group them, we might need logic, but the current UI just lists them.
  // Actually, the previous UI had hardcoded string array:
  // "Python: Writing clean...", etc.
  // The new Skill model has `name` and `category`.
  // I should probably format them similarly or adjust the display.
  // Let's assume the user enters "Python: Writing clean..." as the name for now, OR
  // display as "Name (Category)".
  // Let's check the original display.
  // Original: <span className="text-white">{skill}</span>
  // I will just display skill.name.

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
              {skills.length > 0 ? (
                  skills.map((skill) => (
                    <div key={skill.id} className="flex items-center gap-2">
                      <span className="text-primary">$</span>
                      <span className="text-white">{skill.name} <span className="text-muted-foreground text-xs">({skill.category})</span></span>
                    </div>
                  ))
              ) : (
                  <div className="text-muted-foreground">No skills added yet.</div>
              )}
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
