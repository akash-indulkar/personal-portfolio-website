import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { projects } from "@/storage/data";
import ReactMarkdown from "react-markdown";
import { sourceCodePro } from "@/layout";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id);
  if (!project) {
    return {
      title: "Project Not Found",
      description: "The project you're looking for does not exist.",
    };
  }
  return {
    title: `Akash Indulkar | ${project.title}`,
    description: project.description,
  };
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const projectId = params.id;
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return null;
  }

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/projects">
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>
        </Link>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {project.imageUrl && (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-64 md:h-80 object-cover"

            />
          )}

          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>

            <p className={`text-lg text-gray-600 mb-8 leading-relaxed ${sourceCodePro.className}`}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"

                >
                  {tech}
                </Badge>
              ))}
            </div>

            {project.longDescription && (
              <div className="prose prose-gray max-w-none mb-8">
                <h2 className="text-xl font-semibold pb-2">About this Project</h2>
                {project.architecture && (
                  <div className="text-gray-900">
                    <img
                      src={project.architecture}
                      alt={`${project.title} Architecture`}
                      className="w-full h-auto mb-2 rounded-lg border"

                    />
                    <p className="text-base font-semibold mb-4 text-center">Project Architecture</p>
                  </div>
                )}
                <div className={`text-gray-900 ${sourceCodePro.className}`}>
                  <ReactMarkdown>{project.longDescription}</ReactMarkdown>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"

                >
                  <Button className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live Project
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
                    View Source Code
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
