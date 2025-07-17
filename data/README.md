# Data Management Guide

This directory contains centralized data files for your portfolio website. This structure makes it easy to add, edit, and manage your content without modifying multiple files throughout the application.

## File Structure

- `projects.ts` - Contains all project data
- `jobs.ts` - Contains all job/experience data  
- `blog.ts` - Contains all blog post data

## Adding New Content

### Adding a New Project

1. Open `data/projects.ts`
2. Add a new project object to the `projects` array:

```typescript
{
  id: "unique-project-id",
  title: "Project Title",
  description: "Short description for cards",
  longDescription: "Detailed description for project page",
  image: "https://images.pexels.com/photos/example.jpeg", // Use Pexels URLs
  technologies: ["Tech1", "Tech2", "Tech3"],
  category: "backend", // backend, ml, security, data, etc.
  github: "https://github.com/yourusername/repo",
  demo: "https://your-demo-url.com",
  featured: true, // Set to true to show on homepage
}
```

### Adding a New Job Experience

1. Open `data/jobs.ts`
2. Add a new job object to the `jobs` array:

```typescript
{
  id: "unique-job-id",
  title: "Job Title",
  company: "Company Name",
  period: "Start Date - End Date",
  description: "Brief description for timeline",
  longDescription: "Detailed description with responsibilities",
  technologies: ["Tech1", "Tech2"],
  achievements: [
    "Achievement 1",
    "Achievement 2"
  ],
  current: false, // Set to true for current position
}
```

### Adding a New Blog Post

1. Open `data/blog.ts`
2. Add a new blog post object to the `blogPosts` array:

```typescript
{
  id: "unique-post-id",
  title: "Blog Post Title",
  excerpt: "Short excerpt for blog cards",
  content: `
    <p>Your HTML content here...</p>
    <h2>Section Title</h2>
    <p>More content...</p>
  `,
  date: "2023-12-01",
  readingTime: "5 min read",
  tags: ["Tag1", "Tag2", "Tag3"],
  category: "Category Name",
  featured: true, // Set to true to show on homepage
  published: true, // Set to false for drafts
}
```

## Content Guidelines

### Images
- Use high-quality images from Pexels (https://www.pexels.com/)
- Ensure images are relevant to your project/content
- Use the direct Pexels URL format: `https://images.pexels.com/photos/ID/pexels-photo-ID.jpeg?auto=compress&cs=tinysrgb&w=800`

### Technologies
- Use consistent naming for technologies (e.g., "JavaScript" not "JS")
- Keep the list focused on the main technologies used

### Categories
- Projects: backend, ml, security, data, web, mobile
- Blog: Security, Performance, Machine Learning, Python, Django

### Content Writing
- Keep descriptions concise but informative
- Use proper HTML formatting in blog content
- Include code examples in blog posts using `<pre><code>` tags
- Use bullet points and headings to improve readability

## Helper Functions

Each data file includes helper functions for easy data retrieval:

### Projects
- `getFeaturedProjects()` - Get projects marked as featured
- `getProjectById(id)` - Get a specific project
- `getProjectsByCategory(category)` - Get projects by category

### Jobs
- `getCurrentJob()` - Get the current job
- `getJobById(id)` - Get a specific job
- `getJobsByCompany(company)` - Get jobs by company

### Blog
- `getFeaturedPosts()` - Get featured published posts
- `getPublishedPosts()` - Get all published posts
- `getPostById(id)` - Get a specific post
- `getPostsByCategory(category)` - Get posts by category
- `getPostsByTag(tag)` - Get posts by tag

## Best Practices

1. **Consistent IDs**: Use kebab-case for all IDs (e.g., "my-awesome-project")
2. **Regular Updates**: Keep your content fresh by regularly adding new projects and blog posts
3. **SEO-Friendly**: Write descriptive titles and excerpts for better search engine visibility
4. **Mobile-First**: Ensure descriptions work well on both desktop and mobile
5. **Version Control**: Commit changes to your data files to track content updates

## Deployment

After making changes to any data file, the changes will be automatically reflected on your website. No additional build steps are required since these are TypeScript files that get compiled with your Next.js application.