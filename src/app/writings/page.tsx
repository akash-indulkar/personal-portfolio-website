import WritingCard from "@/components/writing-card";
import { sourceCodePro } from "@/lib/fonts";
import { writingPosts } from "@/storage/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Akash Indulkar | Writings",
  description: "Deep dives into web development, human psychology, and my personal journey in tech.",
}

export default function Writings() {
    const featuredPosts = writingPosts?.filter(post => post.featured);
    const regularPosts = writingPosts?.filter(post => !post.featured) || [];

    return (
        <div className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        All Writings 📝
                    </h1>
                    <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${sourceCodePro.className}`}>Deep dives into web development, microservices, philosophy, and human psychology. Basically sharing thoughts and lessons I&apos;ve picked up along the way in tech and life.
                    </p>
                </div>
                {writingPosts && writingPosts.length > 0 ? (
                    <div className="space-y-8">
                        {featuredPosts.length > 0 && (
                            <div>
                                <div className="space-y-8">
                                    {featuredPosts.map((post) => (
                                        <WritingCard key={post.id} post={post} featured />
                                    ))}
                                </div>
                            </div>
                        )}
                        {regularPosts.length > 0 && (
                            <div>
                                <div className="space-y-8">
                                    {regularPosts.map((post) => (
                                        <WritingCard key={post.id} post={post} featured />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No Articles Found</h3>
                        <p className="text-gray-600">Check back later for new content!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
