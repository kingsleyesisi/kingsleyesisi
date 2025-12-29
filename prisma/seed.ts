import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()

async function main() {
  const filePath = path.join(process.cwd(), 'data', 'projects.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const projects = JSON.parse(fileContents)

  console.log('Seeding projects...')

  for (const project of projects) {
    await prisma.project.upsert({
      where: { id: project.id },
      update: {
        title: project.title,
        description: project.description,
        longDescription: project.longDescription,
        image: project.image,
        technologies: project.technologies,
        category: project.category,
        github: project.github,
        demo: project.demo,
        featured: project.featured
      },
      create: {
        id: project.id,
        title: project.title,
        description: project.description,
        longDescription: project.longDescription,
        image: project.image,
        technologies: project.technologies,
        category: project.category,
        github: project.github,
        demo: project.demo,
        featured: project.featured
      }
    })
    console.log(`Seeded project: ${project.title}`)
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
