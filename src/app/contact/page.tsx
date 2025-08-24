import { sourceCodePro } from "@/layout";
import { Mail, Twitter, Linkedin, CheckCircle } from "lucide-react";

export default function Contact() {
    const contactMethods = [
        {
            name: "Email",
            value: "me@akashindulkar.in",
            href: "mailto:me@akashindulkar.in",
            icon: Mail,
            bgColor: "bg-blue-100",
            hoverBgColor: "group-hover:bg-blue-200",
            iconColor: "text-blue-600",
        },
        {
            name: "Twitter",
            value: "@akash_indulkar",
            href: "https://x.com/akash_indulkar",
            icon: Twitter,
            bgColor: "bg-sky-100",
            hoverBgColor: "group-hover:bg-sky-200",
            iconColor: "text-sky-600",
        },
        {
            name: "LinkedIn",
            value: "Connect with me",
            href: "https://www.linkedin.com/in/akash-indulkar",
            icon: Linkedin,
            bgColor: "bg-blue-100",
            hoverBgColor: "group-hover:bg-blue-200",
            iconColor: "text-blue-600",
        },
    ];

    return (
        <div className="min-h-screen py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6 items-center">
                <div className="text-center mb-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Let's Connect 🔗
                    </h1>
                    <p className={`text-xl text-gray-600 max-w-2xl mx-auto ${sourceCodePro.className}`}>
                        Have a project in mind or want to chat about developer relations? I'd love to hear from you.
                    </p>
                </div>
                <div className="items-center px-2 md:px-40 sm:px-20">
                    <div>
                        <h3 className="text-center text-2xl font-semibold text-gray-900 mb-6">
                            Ways to Reach Me
                        </h3>

                            <div className="space-y-4 items-center">
                                {contactMethods.map((method) => (
                                    <a
                                        key={method.name}
                                        href={method.href}
                                        target={method.href.startsWith("http") ? "_blank" : undefined}
                                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-200 group"

                                    >
                                        <div className={`${method.bgColor} p-3 rounded-lg ${method.hoverBgColor} transition-colors duration-200`}>
                                            <method.icon className={`${method.iconColor} h-5 w-5`} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{method.name}</h4>
                                            <p className="text-gray-600">{method.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="mt-4 bg-blue-50 p-6 rounded-xl">
                            <h4 className="font-semibold text-gray-900 mb-3">Quick Response Time</h4>
                            <p className={`text-gray-600 mb-4 ${sourceCodePro.className}`}>
                                I typically respond to messages within 24 hours. For urgent matters, feel free to reach out on Twitter.
                            </p>
                            <div className="flex items-center gap-2 text-green-600">
                                <CheckCircle className="h-4 w-4" />
                                <span className={`text-sm font-medium ${sourceCodePro.className}`}>Usually responds in a few hours</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}
