import fs from "node:fs";
import path from "node:path";
import type { Project } from "@/content/projects";

/**
 * Screenshots are added by dropping files into public/projects/ (see the README
 * there), so a project's `image` path may point at a file that doesn't exist yet.
 * Resolve it at build time and strip the ones that aren't there, rather than
 * shipping broken <img> tags.
 */
function exists(src?: string): boolean {
  if (!src) return false;
  return fs.existsSync(path.join(process.cwd(), "public", src));
}

export function withResolvedImage(project: Project): Project {
  return exists(project.image) ? project : { ...project, image: undefined };
}

export function withResolvedImages(list: Project[]): Project[] {
  return list.map(withResolvedImage);
}
