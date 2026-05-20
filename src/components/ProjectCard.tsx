import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/projects-data";

export function ProjectCard({ p, featured = false }: { p: Project; featured?: boolean }) {
  return (
    <article
      className={`glass rounded-3xl p-7 md:p-8 flex flex-col relative overflow-hidden group hover:bg-white/[0.07] transition-colors ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="absolute -top-24 -right-24 size-56 rounded-full bg-primary/25 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
      <div className="relative flex flex-col h-full">
        <div className="flex items-start gap-4">
          <div className="glass size-14 rounded-2xl grid place-items-center overflow-hidden shrink-0 p-1.5">
            <img src={p.logo} alt={`${p.name} logo`} className="size-full object-contain rounded-xl" loading="lazy" />
          </div>
          <div className="min-w-0">
            <h3 className="text-2xl font-bold leading-tight">{p.name}</h3>
            <div className="text-sm text-muted-foreground mt-1">{p.tagline}</div>
          </div>
        </div>

        {p.stats && (
          <div className="grid grid-cols-2 gap-3 mt-5">
            {p.stats.map((s) => (
              <div key={s.label} className="glass-yellow rounded-2xl p-3 text-center">
                <div className="text-xl md:text-2xl font-bold text-gradient-yellow">{s.value}</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        )}

        <ul className="mt-5 space-y-2.5">
          {p.points.map((pt, i) => (
            <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed text-sm">
              <span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" />
              <span>{pt}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span key={t} className="glass rounded-full px-2.5 py-1 text-[11px] text-muted-foreground">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-white/10">
          {p.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-yellow rounded-xl px-3 py-2 text-xs font-medium text-primary inline-flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <l.icon className="size-3.5" />
              {l.label}
              <ExternalLink className="size-3 opacity-60" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
