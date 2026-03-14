import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import { getAllPosts, getPostBySlug, renderMarkdown } from "@/lib/blog";

type Params = {
  slug: string;
};

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Ravi Tripathi`,
    description: post.summary,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `/blog/${post.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const html = await renderMarkdown(post.content);

  return (
    <main className="pb-20 pt-16">
      <Container>
        <div className="mx-auto max-w-3xl rounded-[32px] border border-sand/60 bg-white/85 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
            Field Notes
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl">{post.title}</h1>
          <p className="mt-4 text-base text-muted">{post.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-sand/70 px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
          <article
            className="prose mt-10"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Container>
    </main>
  );
}
