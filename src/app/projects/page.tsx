import ProjectCard from "@/components/project-card";
import { sourceCodePro } from "@/layout";
import { projects } from "@/storage/data";
import { Github } from "lucide-react";

export default function Projects() {
    const emoji = "</>";
    return (
        <div className="min-h-screen py-10 mt-10 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        All Projects {emoji}
                    </h1>
                    <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${sourceCodePro.className}`}>
                        A comprehensive collection of projects where I've built scalable microservices, developed solid backend systems, and designed clean, easy-to-use frontends.
                    </p>
                </div>
                {projects && projects.length > 0 ? (
                    <div className="space-y-8">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} featured showActions={false} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No Projects Found</h3>
                        <p className="text-gray-600">Check back later for new projects!</p>
                    </div>
                )}
            </div>
            <div className="flex flex-col justify-center items-center md:items-start flex-wrap md:flex-row pt-6">
                <p className="text-center text-base md:text-2xl font-semibold pt-2 px-4">Explore more projects on </p>
                <a
                    key="GitHub"
                    href="https://github.com/akash-indulkar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={` max-w-[120px] mt-2 md:mt-0 social-link bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-full transition-all duration-200 hover:scale-105 flex items-center gap-2 font-medium`}

                >
                    <Github className="h-5 w-5" />
                    GitHub
                </a>
            </div>
        </div>
    );
}
