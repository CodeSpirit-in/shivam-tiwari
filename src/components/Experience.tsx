import { Section } from "./Section";
import microkahaniLogo from "@/assets/logo-microkahani.png";
import tbsLogo from "@/assets/logo-tbs.png";
import zeberLogo from "@/assets/logo-zeber.png";
import superkalamLogo from "@/assets/unnamed (2).png";
import heyhomiLogo from "@/assets/logo-heyhomi.svg";
import accesswayLogo from "@/assets/logo-accessway.png";
import codespiritLogo from "@/assets/logo-codespirit.png";
import expertkaroLogo from "@/assets/logo-expertkaro.jpg";
import learnprepLogo from "@/assets/logo-learnprep.jpg";
import vithopiaLogo from "@/assets/logo-vithopia.jpeg";
import brollLogo from "@/assets/logo-broll.png";

type ExperienceItem = {
  role: string;
  company: string;
  logo?: string;
  date: string;
  tagline: string;
  badge?: string;
  href?: string;
  points: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Software Engineering Intern",
    company: "SuperKalam",
    logo: superkalamLogo,
    date: "Aug 2026 – Sep 2026",
    tagline: "AI-powered UPSC preparation platform",
    badge: "Y Combinator · YC 23",
    href: "https://superkalam.com",
    points: [
      "Worked on an AI mentor platform for UPSC aspirants, covering doubt resolution, answer evaluation, and MCQ practice workflows.",
      "Contributed to product features in a fast-paced, YC-backed startup environment through a focused one-month engineering internship.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "HeyHomi",
    logo: heyhomiLogo,
    date: "Aug 2026 – Sep 2026",
    tagline: "AI maths tutor for CBSE students (Classes 6–10)",
    badge: "Y Combinator · YC 23",
    href: "https://heyhomi.in",
    points: [
      "Contributed to an AI maths tutoring product that checks handwritten solutions step by step and explains mistakes.",
      "Collaborated with the founding team to ship improvements to the learning experience for school students.",
    ],
  },
  {
    role: "Founding Software Engineer",
    company: "MicroKahani Pvt Ltd",
    logo: microkahaniLogo,
    date: "Nov 2025",
    tagline: "Short-form video platform — Web + Mobile",
    href: "/project/microkahani",
    points: [
      "Designed and shipped an OTT micro-drama platform that reached 15M+ organic views, supported by analytics pipelines that tracked user behaviour and content performance.",
      "Led a development team to deliver the platform end-to-end, coordinating backend, mobile, and infrastructure work.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "The Bookshelves",
    logo: tbsLogo,
    date: "Jun 2025",
    tagline: "Student-driven startup",
    points: [
      "Led and collaborated with the engineering team to design and build backend services for the platform.",
      "Developed peer-to-peer engagement features and presented product demos to stakeholders.",
    ],
  },
  {
    role: "Project Lead",
    company: "Zeber",
    logo: zeberLogo,
    date: "Jan 2023",
    tagline: "Community-focused platform",
    points: [
      "Led the technical team in designing core product features and the overall platform architecture.",
      "Managed development workflows, ran technical demos, and drove community-focused initiatives.",
    ],
  },
];

const founderProjects: ExperienceItem[] = [
  {
    role: "Co-founder & COO",
    company: "Broll",
    logo: brollLogo,
    date: "2026 – Present",
    tagline: "AI-powered video editing platform",
    href: "https://trybroll.com",
    points: [
      "Co-founded Broll, an AI-powered video editing platform built to make creator workflows faster and simpler.",
      "Own product operations and execution from product direction and design through to reliable production releases.",
    ],
  },
  {
    role: "Founder",
    company: "LearnPrep",
    logo: learnprepLogo,
    date: "Aug 2026",
    tagline: "Exam preparation platform — Web + Android",
    href: "https://www.learnprep.in",
    points: [
      "Founded and shipped LearnPrep as a student-focused preparation platform across web and Android.",
      "Built a consistent learning experience for practice, revision, and progress tracking across devices.",
    ],
  },
  {
    role: "Founder & CEO",
    company: "CodeSpirit",
    logo: codespiritLogo,
    date: "2024",
    tagline: "Community platform · 12k+ students",
    href: "https://codespirit.in",
    points: [
      "Founded and led CodeSpirit, building a community ecosystem serving 12k+ students through web and mobile products.",
      "Designed the platform architecture, growth systems, and end-to-end product experience from idea to production.",
    ],
  },
  {
    role: "Founder",
    company: "ExpertKaro",
    logo: expertkaroLogo,
    date: "Nov 2025",
    tagline: "Real-time expert consultation platform",
    href: "https://expertkaro.com",
    points: [
      "Founded and built a secure consultation platform with real-time audio/video sessions, chat, wallet payments, and multi-role access.",
      "Connected React Native and web experiences with Agora, WebSockets, JWT authentication, social login, and reliable notifications.",
    ],
  },
  {
    role: "Founder & Technical Lead",
    company: "Vithopia",
    logo: vithopiaLogo,
    date: "2025",
    tagline: "AI-powered digital ecosystem & automation platform",
    href: "https://vithopia.com",
    points: [
      "Led the technical direction for a large-scale digital ecosystem with AI workflow automation, creator systems, and operations dashboards.",
      "Built modular services, real-time WebSocket tracking, payment flows, and scalable data systems for the product.",
    ],
  },
  {
    role: "Co-founder",
    company: "AccessWay",
    logo: accesswayLogo,
    date: "2025",
    tagline: "AI-powered accessibility navigation",
    href: "https://accessway.xyz",
    points: [
      "Built an accessibility-first navigation product with AI-generated routes, voice guidance, and real-time obstacle alerts.",
      "Designed a high-visibility, inclusive experience across vision, audio, and haptic modes with smart wearable integration.",
    ],
  },
];

function ExperienceTimeline({ items, showDemo = false }: { items: ExperienceItem[]; showDemo?: boolean }) {
  return (
    <div className="relative">
      <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />

      <div className="space-y-8">
        {items.map((exp) => (
          <div key={`${exp.company}-${exp.role}`} className="relative pl-12 md:pl-16">
            <div className="absolute left-0 md:left-2 top-8 size-8 rounded-full bg-slate-950 border border-[#a855f7]/30 shadow-[0_0_24px_rgba(167,139,250,0.35)] grid place-items-center">
              <div className="size-3 rounded-full bg-[#a855f7] shadow-[0_0_18px_rgba(167,139,250,0.6)]" />
            </div>

            <div className="glass rounded-[2px] p-7 md:p-9 hover:bg-white/[0.07] transition-colors">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                <div className="flex items-start gap-4">
                  {exp.logo ? (
                    <img src={exp.logo} alt={`${exp.company} logo`} className="h-12 w-auto max-w-32 object-contain" loading="lazy" />
                  ) : (
                    <div className="size-12 rounded-[2px] border border-white/15 bg-white/8 grid place-items-center text-lg font-bold text-primary">
                      {exp.company[0]}
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <div className="text-primary font-medium mt-1">
                      {exp.href ? (
                        <a href={exp.href} target="_blank" rel="noopener noreferrer" className="hover:underline">{exp.company}</a>
                      ) : (
                        exp.company
                      )}
                      {exp.badge && (
                        <span className="ml-2 rounded-[2px] border border-orange-400/40 bg-orange-500/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-orange-300 align-middle">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{exp.tagline}</div>
                  </div>
                </div>
                <div className="rounded-[2px] border border-white/15 bg-white/8 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.12em] text-white/80">
                  {exp.date}
                </div>
              </div>
              <ul className="mt-5 space-y-3">
                {exp.points.map((p, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                    <span className="mt-2 size-1.5 rounded-full bg-[#a855f7] shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              {showDemo && exp.href && (
                <a
                  href={exp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 mr-auto inline-flex rounded-[2px] border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary hover:bg-primary/20 transition-colors"
                >
                  View Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Career"
      title={<>Experience <span className="text-primary">&</span> Achievements.</>}
    >
      <ExperienceTimeline items={experiences} />
    </Section>
  );
}

export function FounderProjects() {
  return (
    <Section
      id="founder-projects"
      eyebrow="Products I founded"
      title={<>Building <span className="text-primary">&</span> leading products.</>}
    >
      <ExperienceTimeline items={founderProjects} showDemo />
    </Section>
  );
}
