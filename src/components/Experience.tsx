import { Section } from "./Section";

const experiences = [
  {
    role: "Software Engineer",
    company: "MicroKahani Pvt Ltd",
    date: "Nov 2025",
    tagline: "Short-Form Video Platform — Web + Mobile",
    points: [
      "Designed OTT micro-drama platform that achieved 15M+ organic reach by building analytics pipelines, tracking high-traffic user behavior, optimizing content performance, and enabling data-driven growth decisions across distribution and playback systems.",
      "Led and managed a development team to build the platform end-to-end, coordinating backend, mobile, and infrastructure.",
    ],
  },
  {
    role: "Software Developer",
    company: "The Bookshelves",
    date: "Jun 2025",
    tagline: "Student-driven startup",
    points: [
      "Led and collaborated with the development team to design and build backend services for a student-driven startup.",
      "Developed peer-to-peer engagement features and coordinated product demonstrations with the team.",
    ],
  },
  {
    role: "Project Lead",
    company: "Zeber",
    date: "Jan 2023",
    tagline: "Community-focused platform",
    points: [
      "Led the technical team to design and develop core product features and platform architecture.",
      "Managed development workflows, organized technical demos, and drove community-focused initiatives.",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've built.">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.company} className="relative pl-12 md:pl-16">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-2 top-8 size-8 rounded-full glass-yellow grid place-items-center ring-4 ring-background">
                <div className="size-2.5 rounded-full bg-primary" />
              </div>

              <div className="glass rounded-3xl p-8 md:p-10 hover:bg-white/[0.07] transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <div className="text-primary font-medium mt-1">{exp.company}</div>
                    <div className="text-sm text-muted-foreground mt-1">{exp.tagline}</div>
                  </div>
                  <div className="glass-yellow rounded-full px-4 py-1.5 text-sm font-medium text-primary">
                    {exp.date}
                  </div>
                </div>
                <ul className="mt-5 space-y-3">
                  {exp.points.map((p, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                      <span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
