import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Shivam Tiwari" },
      {
        name: "description",
        content: "Featured apps by Shivam Tiwari — CodeSpirit, ExpertKaro, MicroKahani, AccessWay, and Vithopia.",
      },
      { property: "og:title", content: "Featured Apps — Shivam Tiwari" },
      {
        property: "og:description",
        content: "Explore the featured app projects built by Shivam Tiwari.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const productionProjects = projects.filter((project) => project.production);
  const otherProjects = projects.filter((project) => !project.production);

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <section className="pt-32 pb-24 px-4">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/"
            className="glass rounded-full px-4 py-2 text-sm inline-flex items-center gap-2 hover:bg-white/10 transition-colors mb-8"
          >
            <ArrowLeft className="size-4" /> Back home
          </Link>
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Projects</div>
            <h1 className="text-4xl md:text-6xl font-bold">
              All projects, tagged by category.
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
              Browse production builds and other apps, websites, and AI projects with clear category tags.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['AI Projects', 'App Projects', 'Websites', 'Production'].map((label) => (
                <span key={label} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/70">
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-semibold mb-5">Production Projects</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {productionProjects.map((p, i) => (
                <ProjectCard key={p.name} p={p} featured={i === 0} index={i} />
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-semibold mb-5">Other Projects</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {otherProjects.map((p, i) => (
                <ProjectCard key={p.name} p={p} featured={false} index={i + 1} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
