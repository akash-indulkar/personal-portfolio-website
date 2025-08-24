import { Badge } from "@/components/ui/badge";
import { sourceCodePro } from "@/layout";
import { WritingPost } from "@/shared/schema";
import Link from "next/link";

interface WritingCardProps {
  post: WritingPost;
  featured?: boolean;
}

export default function WritingCard({ post, featured = false }: WritingCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (featured) {
    return (
      <article className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-gray-500">{formattedDate}</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-500">{post.readTime}</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-primary transition-colors duration-200">
          <Link className="hover:text-blue-500" href={`/writing/${post.slug}`}>
            {post.title}
          </Link>
        </h3>
        <p className={`text-base text-gray-600 mb-6 leading-relaxed ${sourceCodePro.className}`}>
          {post.excerpt}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="bg-white text-primary border-primary/20"

            >
              {tag}
            </Badge>
          ))}
        </div>
        <Link href={`/writing/${post.slug}`}>
          <span className="hover:text-blue-500 inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors duration-200">
            Read full article
            <span>→</span>
          </span>
        </Link>
      </article>
    );
  }

  return (
    <article className="article-card bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
        <span>{formattedDate}</span>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-primary transition-colors duration-200">
        <Link href={`/writing/${post.slug}`}>
          {post.title}
        </Link>
      </h3>
      <p className={`text-base text-gray-600 mb-4 leading-relaxed ${sourceCodePro.className}`}>
        {post.excerpt}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <Badge 
            key={tag} 
            variant="secondary" 
            className="text-xs"

          >
            {tag}
          </Badge>
        ))}
      </div>
      <Link href={`/writing/${post.slug}`}>
        <span className="text-primary font-medium hover:text-primary/80 transition-colors duration-200 text-sm">
          Read more →
        </span>
      </Link>
    </article>
  );
}
