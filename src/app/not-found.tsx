import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <main className="pb-20 pt-16">
      <Container>
        <div className="mx-auto max-w-2xl rounded-[32px] border border-sand/50 bg-white/80 p-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
            404
          </p>
          <h1 className="mt-4 text-3xl">Page not found</h1>
          <p className="mt-3 text-base text-muted">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-canvas"
          >
            Back to home
          </Link>
        </div>
      </Container>
    </main>
  );
}
