import { BlogCard } from "@/components/blog-card"

export default function BlogPage() {
  const posts = [
    {
      id: "django-security",
      title: "Essential Security Practices for Django Applications",
      excerpt:
        "Implementing robust security measures in your Django projects to protect against common vulnerabilities.",
      date: "2023-05-15",
      readingTime: "5 min read",
    },
    {
      id: "ml-django-integration",
      title: "Integrating Machine Learning Models with Django",
      excerpt: "A step-by-step guide to deploying and serving machine learning models in Django applications.",
      date: "2023-04-22",
      readingTime: "7 min read",
    },
    {
      id: "django-performance",
      title: "Optimizing Django Performance at Scale",
      excerpt: "Advanced techniques to improve the performance of your Django applications for high-traffic scenarios.",
      date: "2023-03-10",
      readingTime: "6 min read",
    },
    {
      id: "python-security",
      title: "Python Security Best Practices",
      excerpt: "Essential security considerations for Python developers to build more secure applications.",
      date: "2023-02-18",
      readingTime: "8 min read",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">blog_posts.sh</div>
        </div>
        <div className="terminal-content">
          <p className="mb-4">
            <span className="text-primary">$</span> ls -la /articles
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  )
}

