import HomeClient from "@/components/home-client"
import { getFeaturedProjects } from "@/data/projects"
import { getFeaturedPosts } from "@/data/blog"
import { getSkills } from "@/data/skills"

export default async function Home() {
  const featuredProjects = await getFeaturedProjects()
  const latestPosts = getFeaturedPosts()
  const skills = await getSkills()

  return (
    <HomeClient
      featuredProjects={featuredProjects}
      latestPosts={latestPosts}
      skills={skills}
    />
  )
}
