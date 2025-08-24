import { sourceCodePro } from "@/lib/fonts";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/akash-indulkar",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/akash-indulkar",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      href: "https://x.com/akash_indulkar",
      icon: Twitter,
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@akash.indulkar",
      icon: Youtube,
    },
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/writings", label: "Writings" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl text-center md:text-start font-bold mb-4">
              Akash Indulkar<span className="text-blue-500">.</span>
            </h3>
            <p className={`text-gray-400 text-center md:text-start leading-relaxed ${sourceCodePro.className}`}>
              Full-stack developer exploring philosophy, psychology, and photography.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-center md:text-start mb-4 text-xl">
              Quick Links
            </h4>
            <div className="flex flex-col items-center md:items-start space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}

                >
                  <span className={`block text-gray-400 hover:text-white transition-colors duration-200 ${sourceCodePro.className}`}>
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="">
            <h4 className="font-semibold mb-4 text-xl text-center md:text-start">
              Connect
            </h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-5 md:gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"

                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className={`text-gray-400 text-sm ${sourceCodePro.className}`}>
            © 2025 Akash. All rights reserved.
          </p>
          <p className={`text-gray-400 text-sm mt-2 md:mt-0 ${sourceCodePro.className}`}>
            Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
