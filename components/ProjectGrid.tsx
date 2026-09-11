"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CATEGORY_LABELS, type Category, type Project } from "@/content/projects";

const FILTERS: Array<{ key: Category | "all"; label: string }> = [
  { key: "all", label: "All" },
  { key: "product", label: CATEGORY_LABELS.product },
  { key: "ml", label: CATEGORY_LABELS.ml },
  { key: "embedded", label: CATEGORY_LABELS.embedded },
  { key: "opensource", label: CATEGORY_LABELS.opensource },
];

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Category | "all">("all");
  const shown = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {FILTERS.map((f) => {
          const count = f.key === "all" ? projects.length : projects.filter((p) => p.category === f.key).length;
          const isActive = active === f.key;
          return (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              aria-pressed={isActive}
              className={`rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors ${
                isActive
                  ? "border-accent bg-accent text-bg"
                  : "border-border text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {f.label} <span className="opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {shown.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-accent/60">
      {project.image && (
        <div className="relative aspect-[16/9] border-b border-border bg-bg">
          <Image
            src={project.image}
            alt={project.imageAlt ?? project.title}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className={project.imageFit === "contain" ? "object-contain p-6" : "object-cover"}
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <h3 className="text-base font-semibold tracking-tight">
          <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0">
            {project.title}
          </Link>
        </h3>
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-muted">
          {CATEGORY_LABELS[project.category]}
        </span>
      </div>

      {(project.role || project.period) && (
        <p className="mb-2 font-mono text-xs text-accent">
          {[project.role, project.period].filter(Boolean).join(" · ")}
        </p>
      )}

      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">{project.tagline}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.slice(0, 4).map((t) => (
          <span
            key={t}
            className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted"
          >
            {t}
          </span>
        ))}
      </div>

      {project.links.length > 0 && (
        /* Sits above the card's full-bleed overlay link so these stay clickable. */
        <div className="relative z-10 mt-4 flex flex-wrap gap-x-4 gap-y-1 border-t border-border pt-3">
          {project.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] text-muted underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      )}
      </div>
    </article>
  );
}
