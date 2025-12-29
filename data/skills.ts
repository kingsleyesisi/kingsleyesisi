import { prisma } from '@/lib/prisma'

export interface Skill {
  id: string
  name: string
  category: string
}

export const getSkills = async (): Promise<Skill[]> => {
  try {
    return await prisma.skill.findMany()
  } catch (error) {
    console.error('Error fetching skills:', error)
    return []
  }
}
