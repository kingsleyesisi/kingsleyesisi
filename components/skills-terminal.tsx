"use client"

import { Skill } from "@/data/skills"

interface SkillsTerminalProps {
  skills: Skill[]
}

export function SkillsTerminal({ skills }: SkillsTerminalProps) {
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill.name)
    return acc
  }, {} as Record<string, string[]>)

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-button terminal-button-red"></div>
        <div className="terminal-button terminal-button-yellow"></div>
        <div className="terminal-button terminal-button-green"></div>
        <div className="terminal-title">skills.sh</div>
      </div>
      <div className="terminal-content">
        <p className="mb-4">
          <span className="text-primary">$</span> cat /proc/skills
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(groupedSkills).length > 0 ? (
            Object.entries(groupedSkills).map(([category, items]) => (
              <div key={category} className="space-y-2">
                <h3 className="text-primary font-bold">{category}</h3>
                <ul className="space-y-1">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-primary">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <div className="text-muted-foreground">No skills added yet.</div>
          )}
        </div>
      </div>
    </div>
  )
}
