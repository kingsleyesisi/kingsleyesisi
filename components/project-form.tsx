'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { Project } from '@/data/types'
import { addProject, updateProject } from '@/app/actions'

interface ProjectFormProps {
  project?: Project
}

export function ProjectForm({ project }: ProjectFormProps) {
  const isEditing = !!project
  const action = isEditing ? updateProject.bind(null, project.id) : addProject

  return (
    <form action={action} className="space-y-8 max-w-2xl">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input id="title" name="title" defaultValue={project?.title} required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Short Description</Label>
        <Textarea id="description" name="description" defaultValue={project?.description} required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="longDescription">Long Description</Label>
        <Textarea id="longDescription" name="longDescription" defaultValue={project?.longDescription} className="h-32" required />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Input id="category" name="category" defaultValue={project?.category} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="technologies">Technologies (comma separated)</Label>
          <Input id="technologies" name="technologies" defaultValue={project?.technologies.join(', ')} required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="image">Image</Label>
        <div className="flex flex-col gap-2">
           <Input id="image" name="image" defaultValue={project?.image} placeholder="Image URL (optional if uploading)" />
           <p className="text-xs text-muted-foreground">Or upload a file:</p>
           <Input id="imageFile" name="imageFile" type="file" accept="image/*" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="github">GitHub URL</Label>
          <Input id="github" name="github" type="url" defaultValue={project?.github} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="demo">Demo URL</Label>
          <Input id="demo" name="demo" type="url" defaultValue={project?.demo} />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="featured" name="featured" defaultChecked={project?.featured} />
        <Label htmlFor="featured">Featured Project</Label>
      </div>

      <div className="flex gap-4">
        <Button type="submit">{isEditing ? 'Update Project' : 'Create Project'}</Button>
        <Link href="/admin">
          <Button variant="outline" type="button">Cancel</Button>
        </Link>
      </div>
    </form>
  )
}
