"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Source_Code_Pro, Noto_Sans_Display } from "next/font/google";

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"]
});

const notoSansDisplay = Noto_Sans_Display({
  variable: "--font-noto-sans-display",
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal", "italic"]
});

export default function Navigation() {
  const location = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/writings", label: "Writings" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div>
      <nav
        className="fixed w-full top-0 z-50 
        bg-white/70 backdrop-blur-md border-b border-gray-50"

      >
        <div className="mx-auto px-10 h-16 flex items-center justify-between">
          <Link href="/">
            <span className={`text-2xl font-medium text-gray-900 hover:text-blue-500 transition-colors duration-200 ${notoSansDisplay.className}`}>
              Akash Indulkar<span className="text-blue-500">.</span>
            </span>
          </Link>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}

              >
                <span
                  className={`text-lg nav-link text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-blue-500 transition-colors duration-200 font-medium  ${sourceCodePro.className} ${
                    location === item.href ? "text-gray-900" : ""
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
          <Button
            variant="outline"
            size="lg"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}

          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>
      {isMenuOpen && (
        <div
          className="md:hidden fixed top-12 left-0 w-full 
          bg-white/70 backdrop-blur-md border-b border-gray-200
          flex flex-col items-center p-4 space-y-5 z-40"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}

            >
              <span
                className={`text-gray-600 hover:text-gray-900 transition-colors duration-200 text-xl font-medium  
                  ${location === item.href ? "text-gray-900" : ""}
                  ${sourceCodePro.className}`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
