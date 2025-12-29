'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/prisma'
import { put } from '@vercel/blob'

// Authentication
async function requireAuth() {
  const cookieStore = await cookies()
  const token = cookieStore.get('auth_token')
  if (!token) {
    redirect('/login')
  }
}

export async function login(prevState: any, formData: FormData) {
  const username = formData.get('username')
  const password = formData.get('password')

  if (username === 'admin' && password === 'admin') {
    const cookieStore = await cookies()
    cookieStore.set('auth_token', 'true', { httpOnly: true, secure: process.env.NODE_ENV === 'production' })
    redirect('/admin')
  }

  return { error: 'Invalid credentials' }
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete('auth_token')
  redirect('/login')
}

// Projects
export async function addProject(formData: FormData) {
  await requireAuth()

  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const longDescription = formData.get('longDescription') as string
  let image = formData.get('image') as string
  const imageFile = formData.get('imageFile') as File
  const technologies = (formData.get('technologies') as string).split(',').map(t => t.trim())
  const category = formData.get('category') as string
  const github = formData.get('github') as string
  const demo = formData.get('demo') as string
  const featured = formData.get('featured') === 'on'

  if (imageFile && imageFile.size > 0) {
    try {
        const blob = await put(imageFile.name, imageFile, { access: 'public' })
        image = blob.url
    } catch (error) {
        console.error('Upload failed:', error)
    }
  }

  const id = title.toLowerCase().replace(/ /g, '-')

  await prisma.project.create({
    data: {
      id,
      title,
      description,
      longDescription,
      image: image || '/placeholder.svg',
      technologies,
      category,
      github,
      demo,
      featured,
    }
  })

  revalidatePath('/projects')
  revalidatePath('/')
  redirect('/admin')
}

export async function updateProject(id: string, formData: FormData) {
  await requireAuth()

  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const longDescription = formData.get('longDescription') as string
  let image = formData.get('image') as string
  const imageFile = formData.get('imageFile') as File
  const technologies = (formData.get('technologies') as string).split(',').map(t => t.trim())
  const category = formData.get('category') as string
  const github = formData.get('github') as string
  const demo = formData.get('demo') as string
  const featured = formData.get('featured') === 'on'

  if (imageFile && imageFile.size > 0) {
     try {
        const blob = await put(imageFile.name, imageFile, { access: 'public' })
        image = blob.url
     } catch (error) {
         console.error('Upload failed:', error)
     }
  }

  await prisma.project.update({
    where: { id },
    data: {
      title,
      description,
      longDescription,
      image,
      technologies,
      category,
      github,
      demo,
      featured,
    }
  })

  revalidatePath('/projects')
  revalidatePath('/')
  revalidatePath(`/projects/${id}`)
  redirect('/admin')
}

export async function deleteProject(id: string) {
  await requireAuth()

  await prisma.project.delete({
    where: { id }
  })
  revalidatePath('/projects')
  revalidatePath('/')
  revalidatePath('/admin')
}

// Skills
export async function addSkill(formData: FormData) {
    await requireAuth()
    const name = formData.get('name') as string
    const category = formData.get('category') as string

    if (!name || !category) return

    await prisma.skill.create({
        data: {
            name,
            category
        }
    })
    revalidatePath('/')
    revalidatePath('/admin/skills')
}

export async function deleteSkill(id: string) {
    await requireAuth()
    await prisma.skill.delete({
        where: { id }
    })
    revalidatePath('/')
    revalidatePath('/admin/skills')
}
