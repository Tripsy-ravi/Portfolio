import Link from "next/link";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { leadership, athleticsHighlights } from "@/data/leadership";
import { skills } from "@/data/skills";
import { education } from "@/data/education";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  const featuredProjects = projects.slice(0, 3);

  return (
    <main className="pb-24">
      <section className="relative overflow-hidden pt-16 md:pt-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="animate-fade-up">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                {site.location} · Product + Engineering
              </p>
              <h1 className="mt-6 text-4xl leading-tight md:text-6xl">
                {site.headline}
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-7 text-muted">
                {site.subhead}
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted">
                {site.roles.map((role) => (
                  <span
                    key={role}
                    className="rounded-full bg-sand/70 px-4 py-2 text-ink"
                  >
                    {role}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-canvas transition hover:-translate-y-0.5"
                >
                  View Projects
                </Link>
                <Link
                  href="/blog"
                  className="rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
                >
                  Read My Blog
                </Link>
              </div>
              <p className="mt-8 text-sm italic text-muted">“{site.quotes[1]}”</p>
            </div>
            <div className="relative animate-float">
              <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full bg-accent/15 blur-2xl" />
              <div className="absolute -bottom-6 right-6 h-20 w-20 rounded-full bg-accent-2/20 blur-2xl" />
              <div className="relative space-y-4 rounded-[36px] border border-sand/60 bg-card/90 p-6 glow-card">
                <div className="rounded-3xl border border-sand/60 bg-white/80 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                    Now
                  </p>
                  <p className="mt-3 text-sm text-muted">{site.now}</p>
                </div>
                <div className="rounded-3xl border border-sand/60 bg-white/80 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                    Principle
                  </p>
                  <p className="mt-3 text-sm text-muted">
                    Build the simplest system that scales, then obsess over user
                    experience.
                  </p>
                </div>
                <div className="rounded-3xl border border-sand/60 bg-ink p-5 text-canvas">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-canvas/70">
                    Signal
                  </p>
                  <p className="mt-3 text-sm">{site.quotes[0]}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {site.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-sand/50 bg-white/70 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  {stat.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-ink">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="projects" className="mt-20">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                Featured Work
              </p>
              <h2 className="section-title mt-3">
                Projects where product thinking meets engineering.
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-sm font-semibold text-ink underline decoration-accent/60 underline-offset-4"
            >
              See full archive
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section id="experience" className="mt-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[32px] border border-sand/60 bg-white/80 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                Experience
              </p>
              <h2 className="mt-4 text-3xl">I build outcomes, not just features.</h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                I work at the intersection of engineering and product. My work
                spans healthcare automation, enterprise integrations, and
                customer success. I thrive in roles where I can own the full
                loop: discovery, architecture, delivery, and iteration.
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                The common thread is impact: faster onboarding, fewer failures,
                and measurable gains for the teams I serve.
              </p>
            </div>
            <div className="space-y-6">
              {experience.map((item) => (
                <div
                  key={item.role}
                  className="rounded-[28px] border border-sand/60 bg-card/90 p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-ink">
                        {item.role}
                      </h3>
                      <p className="text-sm text-muted">{item.company}</p>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                      Scope
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>• {highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="about" className="mt-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[32px] border border-sand/60 bg-card/90 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                Leadership & Athletics
              </p>
              <h2 className="mt-4 text-3xl">Discipline on the track, precision in product.</h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                I have always balanced multiple responsibilities, from leading
                student teams to competing at the national level, alongside a
                demanding academic load. Athletics taught me consistency, while
                leadership roles taught me how to motivate teams and manage
                resources.
              </p>
              <div className="mt-6 space-y-4">
                {leadership.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-sand/60 bg-white/80 p-4"
                  >
                    <p className="text-sm font-semibold text-ink">{item.title}</p>
                    <p className="text-xs text-muted">{item.org}</p>
                    <ul className="mt-3 space-y-2 text-sm text-muted">
                      {item.details.map((detail) => (
                        <li key={detail}>• {detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-[32px] border border-sand/60 bg-white/80 p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                  Athletic Highlights
                </p>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  {athleticsHighlights.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[32px] border border-sand/60 bg-white/80 p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                  Education
                </p>
                {education.map((item) => (
                  <div key={item.degree} className="mt-4">
                    <p className="text-sm font-semibold text-ink">
                      {item.degree}
                    </p>
                    <p className="text-sm text-muted">{item.school}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
              <div className="rounded-[32px] border border-sand/60 bg-ink p-8 text-canvas">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-canvas/70">
                  My Approach
                </p>
                <p className="mt-4 text-xl">
                  “I manage multiple streams by designing tight systems: clear
                  priorities, visible progress, and accountability.”
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-[28px] border border-sand/60 bg-white/80 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                Engineering
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {skills.engineering.map((skill) => (
                  <span key={skill} className="rounded-full bg-sand/70 px-3 py-1">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-[28px] border border-sand/60 bg-white/80 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                Product
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {skills.product.map((skill) => (
                  <span key={skill} className="rounded-full bg-sand/70 px-3 py-1">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-[28px] border border-sand/60 bg-white/80 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                Tools
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {skills.tools.map((skill) => (
                  <span key={skill} className="rounded-full bg-sand/70 px-3 py-1">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-20">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                Writing
              </p>
              <h2 className="section-title mt-3">
                Notes on product, design, and shipping.
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm font-semibold text-ink underline decoration-accent/60 underline-offset-4"
            >
              See all posts
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-20">
        <Container>
          <div className="rounded-[36px] border border-sand/60 bg-deep px-8 py-12 text-canvas md:px-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-canvas/70">
                  Let&apos;s Collaborate
                </p>
                <h2 className="mt-4 text-3xl md:text-4xl">
                  Open to full-stack roles, product internships, and early-stage
                  teams.
                </h2>
              </div>
              <a
                href={`mailto:${site.socials.email}`}
                className="rounded-full bg-canvas px-6 py-3 text-sm font-semibold text-ink"
              >
                Start a conversation
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
