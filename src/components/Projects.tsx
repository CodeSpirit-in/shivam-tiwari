import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/projects-data";

export function Projects() {
  const featured = projects.slice(0, 3);

  return (
    <Section id="projects" eyebrow="Products" title="Things I've shipped.">
      {/* Bento grid: first card spans 2 cols on desktop */}
      <div className="grid md:grid-cols-2 gap-5">
        {featured.map((p, i) => (
          <ProjectCard key={p.name} p={p} featured={i === 0} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          to="/projects"
          className="glass-yellow rounded-2xl px-6 py-3 font-medium text-primary inline-flex items-center gap-2 hover:scale-105 transition-transform"
        >
          View All Projects <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </Section>
  );
}
