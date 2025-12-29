import HomeClient from "@/components/home-client"
import { getFeaturedProjects } from "@/data/projects"
import { getFeaturedPosts } from "@/data/blog"

export default async function Home() {
  const featuredProjects = await getFeaturedProjects()
  const latestPosts = getFeaturedPosts()

  return (
    <HomeClient
      featuredProjects={featuredProjects}
      latestPosts={latestPosts}
    />
  )
}
