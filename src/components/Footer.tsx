import Container from "@/components/Container";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-sand/40 py-12">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-muted">{site.headline}</p>
          <p className="mt-2 text-xs text-muted/80">
            {site.quotes[0]}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
          <a
            href={site.socials.linkedin}
            className="text-muted hover:text-ink"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={site.socials.github}
            className="text-muted hover:text-ink"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href={`mailto:${site.socials.email}`}
            className="text-muted hover:text-ink"
          >
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}
