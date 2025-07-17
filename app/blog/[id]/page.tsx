"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CalendarIcon, Clock } from "lucide-react"
import { getPostById } from "@/data/blog"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = params

  const post = getPostById(id)

  if (!post) {
    notFound()
  }

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:underline">
        <ArrowLeft size={16} /> Back to blog
      </Link>

      <article>
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 glitch" data-text={post.title}>
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <CalendarIcon size={14} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>

        <div
          className="prose prose-invert max-w-none prose-headings:text-primary prose-a:text-primary"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  )
}

