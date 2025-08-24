"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Source_Code_Pro } from "next/font/google";
import { WritingPost } from "@/shared/schema";

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export default function WritingArticle({ writingPost }: { writingPost: WritingPost }) {
  const formattedDate = new Date(writingPost.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: writingPost.title,
          text: writingPost.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        navigator.clipboard.writeText(window.location.href);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };
    return (
        <div className="min-h-screen py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6">
                <Link href="/writings">
                    <Button variant="ghost" className="mb-8">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Writings
                    </Button>
                </Link>
                <article className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="p-8 md:p-12">
                        <div className="mb-8">
                            <div className="flex flex-wrap items-center gap-3 mb-6 text-sm text-gray-500">
                                {writingPost.featured && (
                                    <Badge className="bg-primary text-white">Featured</Badge>
                                )}
                                <div className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    <span>{formattedDate}</span>
                                </div>
                                <span>•</span>
                                <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    <span>{writingPost.readTime}</span>
                                </div>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                {writingPost.title}
                            </h1>
                            <p className={`text-lg text-gray-600 mb-8 leading-relaxed ${sourceCodePro.className}`}>
                                {writingPost.excerpt}
                            </p>
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex flex-wrap gap-2">
                                    {writingPost.tags.map((tag) => (
                                        <Badge
                                            key={tag}
                                            variant="secondary"

                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={handleShare}

                                >
                                    <Share2 className="h-4 w-4 mr-2" />
                                    Share
                                </Button>
                            </div>
                        </div>
                        {writingPost.imageUrl && (
                            <div className="text-gray-900">
                                <img
                                    src={writingPost.imageUrl}
                                    alt={`${writingPost.title} Architecture`}
                                    className="w-full h-auto mb-2 rounded-lg border"

                                />
                            </div>
                        )}

                        <div
                            className={`prose prose-gray prose-lg max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:leading-relaxed prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm ${sourceCodePro.className}`}
                        >

                            <ReactMarkdown>
                                {writingPost.content}
                            </ReactMarkdown>
                        </div>
                    </div>
                </article>
            </div >
        </div >
    );
}
