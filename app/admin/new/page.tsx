import { ProjectForm } from '@/components/project-form'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function NewProjectPage() {
  const cookieStore = await cookies()
  const authToken = cookieStore.get('auth_token')

  if (!authToken) {
    redirect('/login')
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Add New Project</h1>
      <ProjectForm />
    </div>
  )
}
