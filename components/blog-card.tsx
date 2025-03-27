import Link from "next/link"
import { CalendarIcon, Clock } from "lucide-react"

interface BlogCardProps {
  id: string
  title: string
  excerpt: string
  date: string
  readingTime: string
}

export function BlogCard({ id, title, excerpt, date, readingTime }: BlogCardProps) {
  return (
    <Link href={`/blog/${id}`}>
      <div className="card-hover bg-card p-4 rounded-md h-full flex flex-col">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
          <div className="flex items-center">
            <CalendarIcon size={12} className="mr-1" />
            {date}
          </div>
          <div className="flex items-center">
            <Clock size={12} className="mr-1" />
            {readingTime}
          </div>
        </div>
        <h3 className="text-lg font-bold mb-2 glitch" data-text={title}>
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{excerpt}</p>
      </div>
    </Link>
  )
}

