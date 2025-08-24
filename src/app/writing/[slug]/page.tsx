import type { Metadata } from "next";
import { writingPosts } from "@/storage/data";
import WritingArticle from "@/components/writing-post";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const writingPost = writingPosts.find((post) => post.slug === params.slug);

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

export default function WritingPostPage({ params }: Props) {
  const writingPost = writingPosts.find((post) => post.slug === params.slug);
  if (!writingPost) {
    return null;
  }

  return <WritingArticle writingPost={writingPost} />;
}
