import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { CATEGORY_LABELS, bySlug, projects } from "@/content/projects";
import { site } from "@/content/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = bySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
    openGraph: { title: project.title, description: project.tagline },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = bySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <Link href="/#work" className="font-mono text-xs text-muted transition-colors hover:text-accent">
          &larr; All work
        </Link>

        <header className="mt-8 border-b border-border pb-8">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {CATEGORY_LABELS[project.category]}
            {project.period ? ` · ${project.period}` : ""}
            {project.role ? ` · ${project.role}` : ""}
          </p>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">{project.tagline}</p>

          {project.links.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                >
                  {l.label} &nearr;
                </a>
              ))}
            </div>
          )}
        </header>

        <div className="mt-10 space-y-10">
          <Block label="Problem">
            <p className="leading-relaxed text-muted">{project.problem}</p>
          </Block>

          <Block label="Approach">
            <ul className="space-y-3">
              {project.approach.map((a) => (
                <li key={a} className="flex gap-3 leading-relaxed text-muted">
                  <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block label="Result">
            <p className="leading-relaxed text-muted">{project.result}</p>
          </Block>

          <Block label="Stack">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded border border-border px-2 py-1 font-mono text-[11px] text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </Block>
        </div>

        <footer className="mt-16 flex items-center justify-between border-t border-border pt-8">
          <Link href={`/projects/${next.slug}`} className="group">
            <span className="font-mono text-xs text-muted">Next project</span>
            <span className="block font-medium transition-colors group-hover:text-accent">
              {next.title} &rarr;
            </span>
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="font-mono text-xs text-accent underline underline-offset-4"
          >
            Get in touch
          </a>
        </footer>
      </main>
    </>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">{label}</h2>
      {children}
    </section>
  );
}
