import type { Project } from "@/lib/projects-data";
import { cn } from "@/lib/utils";

function getBadgeText(project: Project) {
  return project.tech.slice(0, 2).join(" · ");
}

export function ProjectArtwork({
  project,
  className,
  compact = false,
}: {
  project: Project;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl",
        compact ? "aspect-[16/10]" : "aspect-[16/9]",
        className,
      )}
      style={{
        backgroundImage: `linear-gradient(135deg, ${project.palette.from} 0%, ${project.palette.via} 52%, ${project.palette.to} 100%)`,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.18),transparent_36%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative h-full w-full text-white">
        <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
          {project.screenshot ? (
            <img src={project.screenshot} alt={`${project.name} preview`} className="h-full w-full object-cover" loading="lazy" />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-slate-950/90">
              <div className="flex items-center gap-4 p-4">
                <div className="size-24 md:size-28 overflow-hidden rounded-[2px] bg-white/10 p-3">
                  <img src={project.logo} alt={`${project.name} logo`} className="size-full object-contain" loading="lazy" />
                </div>
                <div className="min-w-0">
                  <div className="truncate text-base md:text-lg font-bold">{project.name}</div>
                  <div className="mt-1 text-xs text-white/70">{project.tagline}</div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="relative z-10 flex h-full flex-col justify-between rounded-[2rem] bg-black/0 p-5 md:p-7">
          <div className="flex items-center justify-between gap-4 text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-white/90">
            <span className="truncate">{project.tagline}</span>
            <span className="truncate">{project.tech[0] ?? "Portfolio"}</span>
          </div>

          <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/90">
                {getBadgeText(project)}
              </span>
              {project.stats?.[0] && (
                <span className="rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/90">
                  {project.stats[0].value} {project.stats[0].label}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-black/50 px-3 py-2 backdrop-blur-sm">
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/65">Build</div>
                <div className="mt-1 text-xs font-medium text-white">End-to-end</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-black/50 px-3 py-2 backdrop-blur-sm">
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/65">Stack</div>
                <div className="mt-1 text-xs font-medium text-white">{project.tech[0] ?? "Modern"}</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-black/50 px-3 py-2 backdrop-blur-sm">
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/65">Focus</div>
                <div className="mt-1 text-xs font-medium text-white">Realtime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
