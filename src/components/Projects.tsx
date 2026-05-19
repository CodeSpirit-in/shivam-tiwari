import { Section } from "./Section";
import { Globe, Smartphone, ExternalLink } from "lucide-react";

type Link = { label: string; href: string; icon: typeof Globe };

const projects: Array<{
  name: string;
  tagline: string;
  points: string[];
  tech: string[];
  links: Link[];
}> = [
  {
    name: "CodeSpirit",
    tagline: "Event & Hackathon SaaS — Web + Mobile",
    points: [
      "Built scalable multi-role platform for events, hackathons, QR check-ins, social profiles, and real-time chat; architected for 1M+ concurrent users.",
      "Designed full system — backend, mobile app, web dashboard. Scaled the platform to 1000+ active users.",
    ],
    tech: ["React.js", "TypeScript", "React Native", "Node.js", "Socket.io", "MongoDB", "Redis", "Razorpay", "Azure"],
    links: [
      { label: "codespirit.in", href: "https://codespirit.in", icon: Globe },
      { label: "Android App", href: "https://play.google.com/store/apps/details?id=com.codespirit.app&hl=en_IN", icon: Smartphone },
    ],
  },
  {
    name: "ExpertKaro",
    tagline: "Expert Consultation Platform — Web + Mobile",
    points: [
      "Developed multi-role platform connecting users with doctors, lawyers, mentors via real-time chat and video call.",
      "Implemented profile verification, role-based access control, Cashfree payments, and Cloudinary media management.",
    ],
    tech: ["React Native", "TypeScript", "Node.js", "JWT", "FCM", "Cashfree", "Redis", "MongoDB", "Cloudinary", "Azure"],
    links: [
      { label: "expertkaro.com", href: "https://expertkaro.com", icon: Globe },
      { label: "Android App", href: "https://play.google.com/store/apps/details?id=com.expertkaro.app&hl=en_IN", icon: Smartphone },
    ],
  },
  {
    name: "Vithopia",
    tagline: "Web Agency + Internal SaaS Suite",
    points: [
      "Delivered a full web agency platform along with an internal admin suite powering the agency's day-to-day operations.",
      "Built SaaS modules for meetings, project management, lead generation, and end-to-end agency workflow automation.",
    ],
    tech: ["React.js", "Node.js", "TypeScript", "MongoDB", "Tailwind CSS", "Azure"],
    links: [
      { label: "vithopia.com", href: "https://vithopia.com", icon: Globe },
    ],
  },
  {
    name: "AccessWay",
    tagline: "AI Assistant for People with Disabilities",
    points: [
      "Building an AI-powered assistant focused on accessibility — designed to help people with disabilities navigate daily tasks with voice and adaptive interfaces.",
      "Integrates speech, vision, and conversational AI into a single, accessible interface.",
    ],
    tech: ["React.js", "AI / LLMs", "Speech APIs", "Node.js", "TypeScript"],
    links: [
      { label: "accessway.xyz", href: "https://accessway.xyz", icon: Globe },
    ],
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Products" title="Things I've shipped.">
      <div className="grid lg:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article key={p.name} className="glass rounded-3xl p-8 md:p-10 flex flex-col relative overflow-hidden group">
            <div className="absolute -top-20 -right-20 size-40 rounded-full bg-primary/20 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex flex-col h-full">
              <div>
                <h3 className="text-3xl font-bold">{p.name}</h3>
                <div className="text-sm text-muted-foreground mt-1">{p.tagline}</div>
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
              <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/10">
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
        ))}
      </div>
    </Section>
  );
}
