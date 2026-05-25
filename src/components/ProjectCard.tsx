import { ExternalLink } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { route as ProjectRoute } from "@/routes/project.$slug";
import type { Project } from "@/lib/projects-data";

export function ProjectCard({
  p,
  featured = false,
  index = 0,
}: {
  p: Project;
  featured?: boolean;
  index?: number;
}) {
  const isDark = featured || index !== 0;
  const panelClass = isDark
    ? "bg-[#171717] text-[#f7f2e8] border-[#2a2a2a]"
    : "bg-[#f3ecdb] text-[#141414] border-[#262626]";
  const mutedTextClass = isDark ? "text-white/70" : "text-black/60";
  const chipClass = isDark
    ? "border border-white/15 bg-white/5 text-white/85"
    : "border border-black/10 bg-white/30 text-black/80";
  const badgeClass = isDark
    ? "border border-white/15 bg-white/8 text-white/75"
    : "border border-black/10 bg-white/55 text-black/70";
  const accentBarClass = isDark ? "bg-[#7c3aed] text-[#171717]" : "bg-[#5b21b6] text-[#f7f2e8]";
  const logoRingClass = isDark ? "bg-white/6 border-white/10" : "bg-white/75 border-black/10";
  const rawPath = ProjectRoute.path.replace("$slug", p.slug);
  const projectPath = rawPath.startsWith("/") ? rawPath : `/${rawPath}`;

  return (
    <article
      className={`rounded-[2px] border shadow-[0_8px_0_rgba(0,0,0,0.08)] transition-transform duration-200 hover:-translate-y-1 ${panelClass} ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="relative p-5 md:p-6 flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <Link
            to={projectPath}
            className="min-w-0 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <div className={`text-xs md:text-sm uppercase tracking-[0.28em] ${mutedTextClass}`}>
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="mt-3 flex items-center gap-3">
              <h3 className="text-3xl md:text-4xl font-black uppercase leading-[0.95] tracking-tight">
                {p.name}
              </h3>
            </div>
            <div className={`mt-3 text-[11px] md:text-xs uppercase tracking-[0.34em] ${mutedTextClass}`}>
              {p.tagline}
            </div>
          </Link>

          <div className={`size-14 md:size-16 shrink-0 overflow-hidden rounded-[2px] border p-2 ${logoRingClass}`}>
            <img src={p.logo} alt={`${p.name} logo`} className="size-full rounded-[2px] object-contain" loading="lazy" />
          </div>
        </div>

        <p className={`mt-6 max-w-3xl text-sm md:text-[15px] leading-7 ${mutedTextClass}`}>
          {p.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {(p.tags ?? p.tech.slice(0, 4)).map((t) => (
            <span key={t} className={`rounded-[2px] px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] ${chipClass}`}>
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6 grid gap-3 md:grid-cols-[1fr_auto] items-end">
          <div className={`rounded-[2px] px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] ${accentBarClass}`}>
            {p.stats?.[0] ? `${p.stats[0].value} · ${p.stats[0].label}` : p.links[0]?.label ?? "Live Project"}
          </div>

          <div className="flex flex-wrap gap-2 justify-start md:justify-end">
            <Link
              to={projectPath}
              className={`rounded-[2px] px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] border ${badgeClass} hover:opacity-80 transition-opacity`}
            >
              Details
            </Link>
            {p.links.slice(0, 1).map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-[2px] px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] border inline-flex items-center gap-2 ${badgeClass} hover:opacity-80 transition-opacity`}
              >
                <l.icon className="size-3.5" />
                <span>{l.label}</span>
                <ExternalLink className="size-3 opacity-70" />
              </a>
            ))}
          </div>
        </div>

        <div className={`absolute left-4 bottom-4 size-2 rounded-full ${isDark ? "bg-white/30" : "bg-black/20"}`} />
      </div>
    </article>
  );
}
