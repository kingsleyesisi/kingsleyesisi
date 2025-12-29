import { prisma } from '@/lib/prisma'
import { Project } from './types'

export const getProjects = async (): Promise<Project[]> => {
  try {
    return await prisma.project.findMany()
  } catch (error) {
    console.error('Error reading projects data:', error)
    return []
  }
}

export const projects = async (): Promise<Project[]> => {
    return await getProjects()
}

export const getFeaturedProjects = async (): Promise<Project[]> => {
  return await prisma.project.findMany({
    where: { featured: true }
  })
}

export const getProjectById = async (id: string): Promise<Project | undefined> => {
  const project = await prisma.project.findUnique({
    where: { id }
  })
  return project || undefined
}

export const getProjectsByCategory = async (category: string): Promise<Project[]> => {
  return await prisma.project.findMany({
    where: { category }
  })
}
