import Link from "next/link";
import Container from "@/components/Container";
import { site } from "@/data/site";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-sand/40 bg-canvas/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {site.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="/#projects" className="text-muted hover:text-ink">
            Projects
          </Link>
          <Link href="/#experience" className="text-muted hover:text-ink">
            Experience
          </Link>
          <Link href="/blog" className="text-muted hover:text-ink">
            Blog
          </Link>
          <Link href="/#about" className="text-muted hover:text-ink">
            About
          </Link>
        </nav>
        <a
          href={`mailto:${site.socials.email}`}
          className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-canvas transition hover:-translate-y-0.5"
        >
          Let&apos;s talk
        </a>
      </Container>
    </header>
  );
}
