import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function getPostFiles() {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }
  return fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".md"));
}

export function getAllPosts(): BlogPost[] {
  return getPostFiles()
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const filePath = path.join(BLOG_DIR, file);
      const raw = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(raw);

      return {
        slug,
        title: String(data.title ?? "Untitled"),
        date: String(data.date ?? ""),
        summary: String(data.summary ?? ""),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title ?? "Untitled"),
    date: String(data.date ?? ""),
    summary: String(data.summary ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    content,
  };
}

export async function renderMarkdown(markdown: string) {
  return marked.parse(markdown);
}
