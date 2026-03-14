import type { Metadata } from "next";
import Container from "@/components/Container";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Ravi Tripathi",
  description:
    "Essays on product thinking, system design, and the habits behind consistent shipping.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="pb-20 pt-16">
      <Container>
        <div className="rounded-[32px] border border-sand/60 bg-card/90 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
            Writing
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl">Field Notes & Playbooks</h1>
          <p className="mt-4 max-w-2xl text-base text-muted">
            Essays on product thinking, system design, and the habits behind
            consistent shipping.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </main>
  );
}
