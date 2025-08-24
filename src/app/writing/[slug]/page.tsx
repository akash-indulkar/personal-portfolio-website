import type { Metadata } from "next";
import { writingPosts } from "@/storage/data";
import WritingArticle from "@/components/writing-post";
import { use } from "react";

export async function generateMetadata({ params }: {params : Promise<{ slug: string }>} ): Promise<Metadata> {
  const { slug } = await params;
  const writingPost = writingPosts.find((post) => post.slug === slug);

  if (!writingPost) {
    return {
      title: "Writing Not Found",
      description: "The writing you're looking for does not exist.",
    };
  }

  return {
    title: `Akash Indulkar | ${writingPost.title}`,
    description: writingPost.excerpt,
  };
}

export default function WritingPostPage({ params }: {params : Promise<{ slug: string }>}) {
  const { slug } = use(params);
  const writingPost = writingPosts.find((post) => post.slug === slug);
  if (!writingPost) {
    return null;
  }

  return <WritingArticle writingPost={writingPost} />;
}
