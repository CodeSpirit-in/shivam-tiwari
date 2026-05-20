import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Shivam Tiwari" },
      { name: "description", content: "Every product Shivam Tiwari has built — CodeSpirit, ExpertKaro, Vithopia, AccessWay and more." },
      { property: "og:title", content: "All Projects — Shivam Tiwari" },
      { property: "og:description", content: "Explore the full catalogue of products built by Shivam Tiwari." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
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
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">All Products</div>
            <h1 className="text-4xl md:text-6xl font-bold">
              Everything I've <span className="text-primary">shipped.</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
              A full catalogue of platforms, apps, and SaaS products I've built end-to-end. Open any project to see the longer story, tech stack, and live links.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((p, i) => (
              <ProjectCard key={p.name} p={p} featured={i === 0} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
