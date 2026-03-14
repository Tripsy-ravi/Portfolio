import type { Metadata } from "next";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Ravi Tripathi",
  description:
    "A living catalogue of systems, products, and experiments built by Ravi Tripathi.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main className="pb-20 pt-16">
      <Container>
        <div className="rounded-[32px] border border-sand/60 bg-card/90 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
            Projects
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl">Project Archive</h1>
          <p className="mt-4 max-w-2xl text-base text-muted">
            A living catalogue of the systems, products, and experiments that
            shaped my full-stack and product craft.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </main>
  );
}
