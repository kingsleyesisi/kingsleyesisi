import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { getSkills } from '@/data/skills'
import { addSkill, deleteSkill, logout } from '@/app/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Trash2, ArrowLeft } from 'lucide-react'

export default async function SkillsPage() {
  const cookieStore = await cookies()
  const authToken = cookieStore.get('auth_token')

  if (!authToken) {
    redirect('/login')
  }

  const skills = await getSkills()

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Manage Skills</h1>
        <Link href="/admin">
            <Button variant="outline">
               <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
            </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
            <div className="bg-card p-6 rounded-md border">
                <h2 className="text-xl font-bold mb-4">Add New Skill</h2>
                <form action={addSkill} className="space-y-4">
                    <div>
                        <Input name="name" placeholder="Skill Name (e.g. Python)" required />
                    </div>
                    <div>
                        <Input name="category" placeholder="Category (e.g. Backend)" required />
                    </div>
                    <Button type="submit" className="w-full">Add Skill</Button>
                </form>
            </div>
        </div>

        <div className="rounded-md border">
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead>Skill</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {skills.map((skill) => (
                <TableRow key={skill.id}>
                    <TableCell className="font-medium">{skill.name}</TableCell>
                    <TableCell>{skill.category}</TableCell>
                    <TableCell className="text-right">
                    <form action={async () => {
                        'use server'
                        await deleteSkill(skill.id)
                    }}>
                        <Button variant="ghost" size="icon" className="text-destructive">
                        <Trash2 className="h-4 w-4" />
                        </Button>
                    </form>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </div>
      </div>
    </div>
  )
}
