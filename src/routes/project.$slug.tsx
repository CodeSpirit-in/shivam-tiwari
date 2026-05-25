import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ProjectArtwork } from "@/components/ProjectArtwork";
import { getProjectBySlug, projects } from "@/lib/projects-data";

export const Route = createFileRoute("/project/$slug")({
  head: ({ params }) => {
    const project = getProjectBySlug(params.slug);

    return {
      meta: project
        ? [
            { title: `${project.name} — Shivam Tiwari` },
            { name: "description", content: project.summary },
            { property: "og:title", content: project.name },
            { property: "og:description", content: project.summary },
          ]
        : [
            { title: "Project — Shivam Tiwari" },
            { name: "description", content: "Project details from Shivam Tiwari's portfolio." },
          ],
    };
  },
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { slug } = Route.useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <main className="relative min-h-screen">
        <Navbar />
        <section className="px-4 pt-32 pb-24">
          <div className="mx-auto max-w-5xl">
            <Link
              to="/projects"
              className="rounded-[2px] border border-white/15 bg-white/8 hover:bg-white/12 px-4 py-2 text-sm inline-flex items-center gap-2 transition-colors mb-8"
            >
              <ArrowLeft className="size-4" /> Back to projects
            </Link>
            <div className="rounded-[2px] border border-white/10 bg-[#0f0f0f] p-8 md:p-12 shadow-lg">
              <h1 className="text-3xl md:text-5xl font-bold">Project not found</h1>
              <p className="mt-4 text-muted-foreground max-w-2xl">
                The requested project does not exist in the portfolio catalog.
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <section className="px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-[#c084fc] mb-3">Project</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                {project.name}
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/60 max-w-3xl leading-relaxed">
                {project.summary}
              </p>
            </div>
            <Link
              to="/projects"
              className="rounded-[2px] border border-white/15 bg-white/8 hover:bg-white/12 px-4 py-3 text-sm font-semibold inline-flex items-center gap-2 transition-colors shrink-0"
            >
              <ArrowLeft className="size-4" /> Back to projects
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-start">
            <div className="space-y-6">
              <div className="rounded-[2px] border border-white/10 bg-white/5 p-6 md:p-8 shadow-lg">
                <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-[#c084fc] mb-4">About this project</h2>
                <p className="text-base leading-8 text-white/75">{project.summary}</p>
              </div>

              {(project.problem || project.solution) && (
                <div className="grid gap-6 lg:grid-cols-2">
                  {project.problem && (
                    <div className="rounded-[2px] border border-white/10 bg-white/5 p-6 md:p-8 shadow-lg">
                      <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white/70 mb-4">The problem</h2>
                      <p className="text-base leading-8 text-white/75">{project.problem}</p>
                    </div>
                  )}
                  {project.solution && (
                    <div className="rounded-[2px] border border-white/10 bg-white/5 p-6 md:p-8 shadow-lg">
                      <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white/70 mb-4">The solution</h2>
                      <p className="text-base leading-8 text-white/75">{project.solution}</p>
                    </div>
                  )}
                </div>
              )}

              <div className="rounded-[2px] border border-white/10 bg-gradient-to-br from-white/5 to-white/3 p-6 md:p-8 shadow-lg">
                <h2 className="text-xl font-bold uppercase tracking-[0.12em] text-white/90 mb-6">Key highlights</h2>
                <ul className="space-y-4">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-4 text-white/75 leading-relaxed">
                      <span className="mt-1.5 size-2 rounded-[1px] bg-[#7c3aed] shrink-0" />
                      <span className="text-sm md:text-base">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.details && project.details.length > 0 && (
                <div className="rounded-[2px] border border-white/10 bg-white/5 p-6 md:p-8 shadow-lg">
                  <h2 className="text-xl font-bold uppercase tracking-[0.12em] text-white/90 mb-6">What I delivered</h2>
                  <ul className="space-y-4">
                    {project.details.map((detail) => (
                      <li key={detail} className="flex gap-4 text-white/75 leading-relaxed">
                        <span className="mt-1.5 size-2 rounded-[1px] bg-[#7c3aed] shrink-0" />
                        <span className="text-sm md:text-base">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.architecture && project.architecture.length > 0 && (
                <div className="rounded-[2px] border border-white/10 bg-white/5 p-6 md:p-8 shadow-lg">
                  <h2 className="text-xl font-bold uppercase tracking-[0.12em] text-white/90 mb-6">Architecture & systems</h2>
                  <ul className="space-y-4">
                    {project.architecture.map((item) => (
                      <li key={item} className="flex gap-4 text-white/75 leading-relaxed">
                        <span className="mt-1.5 size-2 rounded-[1px] bg-[#7c3aed] shrink-0" />
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.contributions && project.contributions.length > 0 && (
                <div className="rounded-[2px] border border-white/10 bg-white/5 p-6 md:p-8 shadow-lg">
                  <h2 className="text-xl font-bold uppercase tracking-[0.12em] text-white/90 mb-6">My contributions</h2>
                  <ul className="space-y-4">
                    {project.contributions.map((item) => (
                      <li key={item} className="flex gap-4 text-white/75 leading-relaxed">
                        <span className="mt-1.5 size-2 rounded-[1px] bg-[#7c3aed] shrink-0" />
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="rounded-[2px] border border-white/10 bg-white/5 p-6 md:p-8 shadow-lg">
                <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white/70 mb-4">Links</h2>
                <div className="flex flex-col gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-[2px] border border-[#a855f7]/30 bg-[#7c3aed]/10 hover:bg-[#7c3aed]/20 px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#d8b4fe] inline-flex items-center justify-between transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <link.icon className="size-4" />
                        {link.label}
                      </span>
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  ))}
                </div>
              </div>

              {project.stats && project.stats.length > 0 && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="rounded-[2px] border border-white/10 bg-white/5 p-5 text-center">
                      <div className="text-3xl md:text-4xl font-black text-[#c084fc]">{stat.value}</div>
                      <div className="mt-2 text-[10px] uppercase tracking-[0.28em] text-white/50 font-semibold">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-6 lg:sticky lg:top-24">
              <ProjectArtwork project={project} className="w-full shadow-[0_28px_120px_rgba(0,0,0,0.34)] rounded-[2rem]" />

              <div className="rounded-[2px] border border-white/10 bg-white/5 p-6 md:p-7 shadow-lg">
                <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white/70 mb-4">Tools of the trade</h2>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-[1px] border border-white/15 bg-[#7c3aed]/10 px-3 py-2 text-xs text-[#e9d5ff] font-semibold uppercase tracking-[0.11em]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[2px] border border-white/10 bg-white/5 p-6 md:p-7 shadow-lg">
                <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white/70 mb-4">Technology</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-[1px] border border-white/8 bg-[#7c3aed]/10 px-3 py-1.5 text-xs text-[#d8b4fe] font-semibold uppercase tracking-[0.1em]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
