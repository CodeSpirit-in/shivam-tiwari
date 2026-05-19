import { Section } from "./Section";

const projects = [
  {
    name: "CodeSpirit",
    tagline: "Event & Hackathon SaaS — Web + Mobile",
    points: [
      "Built scalable multi-role platform for events, hackathons, QR check-ins, social profiles, and real-time chat; architected for 1M+ concurrent users.",
      "Designed full system — backend, mobile app, web dashboard. Scaled the platform to 1000+ active users.",
    ],
    tech: ["React.js", "TypeScript", "React Native", "Expo CLI", "Node.js", "Express.js", "Socket.io", "MongoDB", "Redis", "JWT", "Razorpay", "Azure", "FCM", "SMTP"],
    stat: { value: "1M+", label: "Concurrent users" },
  },
  {
    name: "ExpertKaro",
    tagline: "Expert Consultation Platform — Web + Mobile",
    points: [
      "Developed multi-role platform connecting users with doctors, lawyers, mentors via real-time chat and video call.",
      "Implemented profile verification, role-based access control, Cashfree payments, and Cloudinary media management.",
    ],
    tech: ["React Native", "TypeScript", "Node.js", "JWT", "FCM", "Cashfree", "Redis", "MongoDB", "Cloudinary", "Azure"],
    stat: { value: "Multi-role", label: "RBAC + Video" },
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Products" title="Things I've shipped.">
      <div className="grid lg:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article key={p.name} className="glass rounded-3xl p-8 md:p-10 flex flex-col relative overflow-hidden group">
            <div className="absolute -top-20 -right-20 size-40 rounded-full bg-primary/20 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h3 className="text-3xl font-bold">{p.name}</h3>
                  <div className="text-sm text-muted-foreground mt-1">{p.tagline}</div>
                </div>
                <div className="glass-yellow rounded-2xl px-3 py-2 text-right shrink-0">
                  <div className="text-lg font-bold text-primary leading-none">{p.stat.value}</div>
                  <div className="text-[9px] uppercase tracking-wider text-muted-foreground mt-1">{p.stat.label}</div>
                </div>
              </div>
              <ul className="mt-5 space-y-3">
                {p.points.map((pt, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed text-sm">
                    <span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="glass rounded-full px-3 py-1 text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
