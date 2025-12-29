import { ProjectForm } from '@/components/project-form'
import { cookies } from 'next/headers'
import { redirect, notFound } from 'next/navigation'
import { getProjectById } from '@/data/projects'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function EditProjectPage({ params }: PageProps) {
  const { id } = await params
  const cookieStore = await cookies()
  const authToken = cookieStore.get('auth_token')

  if (!authToken) {
    redirect('/login')
  }

  const project = await getProjectById(id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Edit Project</h1>
      <ProjectForm project={project} />
    </div>
  )
}
