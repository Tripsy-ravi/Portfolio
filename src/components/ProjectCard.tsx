import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-sand/60 bg-card/90 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/70">
      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/10 blur-2xl" />
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        <span>Case Focus</span>
        <span className="rounded-full border border-sand/60 px-3 py-1 text-[10px] text-ink">
          {project.status}
        </span>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-ink">
        {project.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full bg-sand/70 px-3 py-1 text-ink"
          >
            {item}
          </span>
        ))}
      </div>
      {project.links ? (
        <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-ink underline decoration-accent/60 underline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
