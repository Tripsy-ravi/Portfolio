import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-sand/60 bg-white/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/70">
      <div className="absolute -left-6 top-6 h-16 w-16 rounded-full bg-accent-2/15 blur-2xl" />
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        Insight
      </p>
      <h3 className="mt-4 text-xl font-semibold text-ink">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted">{post.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-sand/70 px-3 py-1 text-ink"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
