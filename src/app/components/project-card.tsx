import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/shared/schema";
import Link from "next/link";
import { sourceCodePro } from "@/layout";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  showActions?: boolean;
}

export default function ProjectCard({ project, featured = true, showActions = true }: ProjectCardProps) {
  if (featured) {
    return (
      <div className="project-card bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
        <div className="md:flex">
          {project.imageUrl && (
            <div className="md:w-1/2">
              <Link href={`/projects/${project.id}`}>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"

                />
              </Link>
            </div>
          )}
          <div className="p-8 md:p-12 md:w-1/2">
            <Link href={`/projects/${project.id}`}>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 hover:text-primary transition-colors duration-200 cursor-pointer">
                {project.title}
              </h3>
            </Link>
            <p className={`text-base text-gray-700 mb-6 leading-relaxed ${sourceCodePro.className}`}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {project.techStack.map((tech) => (
                <Badge 
                  key={tech} 
                  variant="outline" 
                  className="text-sm px-3 py-1 bg-white text-primary border-primary/20"

                >
                  {tech}
                </Badge>
              ))}
            </div>
            {showActions ? (
              <div className="flex flex-wrap gap-4">
                {project.liveUrl && (
                  <a
                  href={project.liveUrl}
                  target="_blank"
                    rel="noopener noreferrer"

                  >
                    <Button size="lg">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live
                    </Button>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"

                  >
                    <Button variant="outline" size="lg">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                  </a>
                )}
                <Link href={`/projects/${project.id}`}>
                  <Button variant="ghost" size="lg">
                    View Details
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex flex-wrap gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"

                  >
                    <Button variant="outline" size="lg">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                  </a>
                )}
                <Link href={`/projects/${project.id}`}>
                  <Button variant="ghost" size="lg">
                    View Details
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-card bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
      {project.imageUrl && (
        <Link href={`/projects/${project.id}`}>
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"

          />
        </Link>
      )}
      <div className="p-6">
        <Link href={`/projects/${project.id}`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-primary transition-colors duration-200 cursor-pointer">
            {project.title}
          </h3>
        </Link>
        <p className={`text-base text-gray-600 mb-4 leading-relaxed ${sourceCodePro.className}`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <Badge 
              key={tech} 
              variant="outline" 
              className="text-xs bg-white border-primary/20"

            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"

            >
              <Button className="w-full">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Live
              </Button>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"

            >
              <Button variant="outline" className="w-full">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
            </a>
          )}
        </div>
        <div className="mt-4">
          <Link href={`/projects/${project.id}`}>
            <Button variant="outline" className="w-full">
              View Details...................
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
