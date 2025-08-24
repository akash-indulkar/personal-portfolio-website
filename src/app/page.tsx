import HeroSection from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/project-card";
import WritingCard from "@/components/writing-card";
import { projects, writingPosts } from "@/storage/data";
import Link from "next/link";
import { sourceCodePro } from "@/layout"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Akash Indulkar | Home",
  description: "Welcome to my personal portfolio website",
  icons: {
    icon: "https://res.cloudinary.com/dadualj4l/image/upload/v1755787541/web-profile_qnjxjb.png",
  }
};

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured);
  const featuredPosts = writingPosts.filter(p => p.title === "The Human Edge in an AI-Driven Future");

  return (
    <div className="pt-10">
      <HeroSection />
      <section className="py-10 bg-gray-50 sticky">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Featured Projects
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${sourceCodePro.className}`}>
              A collection of projects I've built to solve real problems and explore new technologies.
            </p>
          </div>
          <div className="space-y-4">
            {featuredProjects?.slice(0, 1).map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/projects">
              <Button size="lg" variant="ghost">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Spotlight Writings
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${sourceCodePro.className}`}>
              Thoughts on web development, philosophy, and the depths of human psychology.
            </p>
          </div>
          <div className="space-y-4">
            {featuredPosts?.[0] && (
              <WritingCard post={featuredPosts[0]} featured />
            )}
          </div>
          <div className="text-center mt-10">
            <Link href="/writings">
              <Button size="lg" variant="ghost">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
