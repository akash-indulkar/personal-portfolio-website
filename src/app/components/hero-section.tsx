import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Youtube, Download } from "lucide-react";
import Link from "next/link";
import { sourceCodePro, ebGaramond } from "@/lib/fonts"
import Image from "next/image";

export default function HeroSection() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/akash-indulkar",
      icon: Github,
      bgColor: "bg-gray-100 hover:bg-gray-200",
      textColor: "text-gray-700",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/akash-indulkar",
      icon: Linkedin,
      bgColor: "bg-blue-100 hover:bg-blue-200",
      textColor: "text-blue-700",
    },
    {
      name: "Twitter",
      href: "https://x.com/akash_indulkar",
      icon: Twitter,
      bgColor: "bg-sky-100 hover:bg-sky-200",
      textColor: "text-sky-700",
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@akash.indulkar",
      icon: Youtube,
      bgColor: "bg-red-100 hover:bg-red-200",
      textColor: "text-red-700",
    },
  ];

  return (
    <section className="flex items-center bg-white">
      <div className=" mx-auto px-6 py-10">
        <div className="">
          <div className="animate-fade-in justify-center">
            <div className="gap-8 mb-10 items-start max-w-5xl">
              <h1 className="text-center md:text-start text-5xl md:text-6xl font-bold text-gray-900 leading-tight"> Hello 👋, I&apos;m <span className="text-primary text-blue-500">Akash!</span>
              </h1>
              <h2 className={`text-center md:text-start text-2xl md:text-3xl font-semibold text-gray-700 italic mb-3 ${ebGaramond.className} italic`} > Developer / Thought Explorer / Photographer
              </h2>
              <div className="flex flex-col md:flex-row items-center w-full">
                <div className="order-1 md:order-2  flex justify-center mb-5 md:mb-0 md:w-1/3">
                  <Image
                    src="https://res.cloudinary.com/dadualj4l/image/upload/v1756046227/web-profile-picture_g8ayci.png"
                    alt="Akash profile picture"
                    width={250}
                    height={250}
                    quality={100}
                    className="w-56 md:w-64 aspect-square rounded-4xl shadow-xl object-cover border-4 border-green-100 hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div
                  className="order-2 md:order-1 md:w-2/3 md:text-start text-center md:text-xl text-gray-600 pr-4"

                >
                  <p className={`text-lg md:text-xl leading-snug mb-3 ${sourceCodePro.className}`}>
                    I&apos;m a full-stack developer with an expert generalist mindset, working seamlessly across React.js, Spring Boot, Node.js, and Next.js to turn ideas into reality.
                  </p>
                  <p className={`text-lg md:text-xl leading-snug ${sourceCodePro.className}`}>
                    I thrive at the intersection of technical precision and existential curiosity — engineering robust solutions while exploring the deeper questions that define human existence. Between architecting systems and philosophical reflections, I capture life through my lens as a photographer.
                  </p>
                </div>
              </div>


            </div>
            <div className="flex justify-center md:justify-start flex-wrap gap-4 mb-12">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-link ${social.bgColor} ${social.textColor} px-6 py-3 rounded-full transition-all duration-200 hover:scale-105 flex items-center gap-2 font-medium`}

                >
                  <social.icon className="h-5 w-5" />
                  {social.name}
                </a>
              ))}
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Link href="/projects" className="flex">
                <Button
                  size="lg"
                  className="text-white  hover:scale-105 transition-all duration-200 w-full md:w-auto"

                >
                  View My Projects
                </Button>
              </Link>

              <a
                href="https://github.com/akash-indulkar/personal-portfolio-website/releases/latest/download/akash.s-web-resume.pdf"
                download="akash's-web-resume.pdf"
                className="flex"

              >
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-gray-50 transition-all duration-200 flex items-center gap-2 w-full md:w-auto"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
