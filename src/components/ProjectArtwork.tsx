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
      <div className="absolute -left-10 top-10 size-40 rounded-full bg-white/15 blur-3xl" />
      <div className="absolute -right-12 bottom-0 size-52 rounded-full bg-black/20 blur-3xl" />

      <div className="relative flex h-full flex-col p-5 md:p-7 text-white">
        <div className="flex items-center justify-between gap-4 text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-white/80">
          <span className="truncate">{project.tagline}</span>
          <span className="truncate">{project.tech[0] ?? "Portfolio"}</span>
        </div>

        <div className="flex flex-1 items-center justify-center py-6">
          <div className="w-full max-w-[320px] rounded-[1.8rem] border border-white/20 bg-white/10 p-4 md:p-5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.28)]">
            <div className="mx-auto size-24 md:size-28 overflow-hidden rounded-full bg-white/10 p-3 shadow-lg shadow-black/20">
              <img
                src={project.logo}
                alt={`${project.name} logo`}
                className="size-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="mt-4 text-center min-w-0">
              <div className="truncate text-base md:text-lg font-bold">{project.name}</div>
              <div className="mt-1 text-xs text-white/75 line-clamp-2">{project.summary}</div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              <div className="rounded-2xl border border-white/15 bg-black/10 px-3 py-2">
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/65">Build</div>
                <div className="mt-1 text-xs font-medium text-white">End-to-end</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-black/10 px-3 py-2">
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/65">Stack</div>
                <div className="mt-1 text-xs font-medium text-white">{project.tech[0] ?? "Modern"}</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-black/10 px-3 py-2">
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/65">Focus</div>
                <div className="mt-1 text-xs font-medium text-white">Realtime</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/85">
            {getBadgeText(project)}
          </span>
          {project.stats?.[0] && (
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/85">
              {project.stats[0].value} {project.stats[0].label}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
