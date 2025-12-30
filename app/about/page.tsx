import AboutClient from "@/components/about-client"
import { getSkills } from "@/data/skills"

export default async function AboutPage() {
  const skills = await getSkills()

  return <AboutClient skills={skills} />
}
