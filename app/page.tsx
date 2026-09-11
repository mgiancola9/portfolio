import Link from "next/link";
import { Nav } from "@/components/Nav";
import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "@/content/projects";
import { withResolvedImages } from "@/lib/images";
import { education, experience, site, skills } from "@/content/site";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-5xl px-6">
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

function Hero() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {education.school} &rsquo;27 · {site.location}
      </p>
      <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
        {site.tagline}
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{site.intro}</p>

      <div className="mt-9 flex flex-wrap gap-3">
        <a
          href={site.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
        >
          Resume
        </a>
        <a
          href={`mailto:${site.email}`}
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Email
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          GitHub
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

function SectionHeading({ id, label, note }: { id: string; label: string; note?: string }) {
  return (
    <div className="mb-8 flex items-baseline justify-between gap-4">
      <h2 id={id} className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {label}
      </h2>
      {note && <span className="font-mono text-xs text-muted">{note}</span>}
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="scroll-mt-24 border-b border-border py-16">
      <SectionHeading id="work-heading" label="Selected work" note={`${projects.length} projects`} />
      <ProjectGrid projects={withResolvedImages(projects)} />
      <p className="mt-8 text-sm text-muted">
        More on{" "}
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-4"
        >
          GitHub
        </a>
        .
      </p>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-b border-border py-16">
      <SectionHeading id="experience-heading" label="Experience" />
      <div className="space-y-10">
        {experience.map((role) => (
          <div key={`${role.company}-${role.title}`} className="grid gap-3 sm:grid-cols-[10rem_1fr] sm:gap-8">
            <div>
              <p className="font-mono text-xs text-muted">{role.period}</p>
              <p className="font-mono text-xs text-muted">{role.location}</p>
            </div>
            <div>
              <h3 className="text-base font-semibold tracking-tight">
                {role.href ? (
                  <a
                    href={role.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent"
                  >
                    {role.company}
                  </a>
                ) : (
                  role.company
                )}
              </h3>
              <p className="mb-3 text-sm text-accent">{role.title}</p>
              <ul className="space-y-2">
                {role.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="grid gap-3 sm:grid-cols-[10rem_1fr] sm:gap-8">
          <p className="font-mono text-xs text-muted">{education.period}</p>
          <div>
            <h3 className="text-base font-semibold tracking-tight">{education.school}</h3>
            <p className="mb-1 text-sm text-accent">{education.degree}</p>
            <p className="text-sm text-muted">{education.detail}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="border-b border-border py-16">
      <SectionHeading id="skills-heading" label="Tools" />
      <div className="grid gap-8 sm:grid-cols-2">
        {skills.map((s) => (
          <div key={s.group}>
            <h3 className="mb-3 text-sm font-semibold">{s.group}</h3>
            <div className="flex flex-wrap gap-1.5">
              {s.items.map((i) => (
                <span
                  key={i}
                  className="rounded border border-border px-2 py-1 font-mono text-[11px] text-muted"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer className="py-16">
      <SectionHeading id="contact-heading" label="Contact" />
      <p className="max-w-xl text-lg leading-relaxed">
        I&rsquo;m looking for software, forward deployed, and ML engineering roles. The fastest way to
        reach me is email.
      </p>
      <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-mono text-sm">
        <a href={`mailto:${site.email}`} className="text-accent underline underline-offset-4">
          {site.email}
        </a>
        <a href={`tel:+16479196419`} className="text-muted hover:text-fg">
          {site.phone}
        </a>
      </div>
      <p className="mt-12 font-mono text-xs text-muted">
        Built with Next.js and deployed on Vercel. <Link href="/#work" className="hover:text-fg">Back to top</Link>
      </p>
    </footer>
  );
}
