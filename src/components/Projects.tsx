import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { ProjectCard } from "./ProjectCard";
import { featuredProjectSlugs, projects } from "@/lib/projects-data";

export function Projects() {
  const featured = featuredProjectSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project))
    .slice(0, 5);

  return (
    <Section id="projects" eyebrow="Products" title="Things I've shipped.">
      {/* Bento grid: first card spans 2 cols on desktop */}
      <div className="grid md:grid-cols-2 gap-5">
        {featured.map((p, i) => (
          <ProjectCard key={p.name} p={p} featured={i === 0} index={i} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          to="/projects"
          className="rounded-[2px] border border-white/15 bg-white/8 hover:bg-white/12 px-6 py-3 font-semibold uppercase tracking-[0.16em] text-white/85 inline-flex items-center gap-2 transition-colors"
        >
          View All Projects <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </Section>
  );
}
