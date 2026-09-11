import Link from "next/link";
import { site } from "@/content/site";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-mono text-sm font-medium tracking-tight hover:text-accent">
          michael giancola
        </Link>
        <div className="flex items-center gap-5 text-sm text-muted">
          <Link href="/#work" className="transition-colors hover:text-fg">
            Work
          </Link>
          <Link href="/#experience" className="hidden transition-colors hover:text-fg sm:inline">
            Experience
          </Link>
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-3 py-1.5 font-medium text-fg transition-colors hover:border-accent hover:text-accent"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
