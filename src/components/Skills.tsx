import { Section } from "./Section";
import { Layout, Server, Database, Cloud, Shield, Users } from "lucide-react";

const languages = [
  { name: "JavaScript", icon: "javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "typescript/typescript-original.svg" },
  { name: "Python", icon: "python/python-original.svg" },
  { name: "C++", icon: "cplusplus/cplusplus-original.svg" },
  { name: "C", icon: "c/c-original.svg" },
  { name: "Java", icon: "java/java-original.svg" },
  { name: "SQL", icon: "mysql/mysql-original.svg" },
  { name: "HTML", icon: "html5/html5-original.svg" },
  { name: "CSS", icon: "css3/css3-original.svg" },
];

const groups = [
  { icon: Layout, title: "Frontend", items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Responsive Design", "UI/UX", "React Native", "Expo CLI", "Flutter"] },
  { icon: Server, title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "GraphQL", "Microservices", "Server Architecture"] },
  { icon: Database, title: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis", "Query Optimization"] },
  { icon: Cloud, title: "Cloud & DevOps", items: ["Azure", "AWS", "Vercel", "Netlify", "Cloudflare R2 CDN", "Git", "Docker"] },
  { icon: Shield, title: "Auth & Payments", items: ["JWT", "OAuth", "WhatsApp OTP Auth", "Razorpay", "Cashfree", "SMTP", "FCM"] },
  { icon: Users, title: "Soft Skills", items: ["Leadership", "Team Management", "Problem Solving", "Communication", "Project Management"] },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Technologies" title="Tools of the trade.">
      {/* Languages — single row with logos */}
      <div className="glass rounded-3xl p-6 md:p-8 mb-6">
        <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Languages</div>
        <div className="flex flex-wrap items-center gap-3">
          {languages.map((l) => (
            <div
              key={l.name}
              className="glass rounded-xl px-3 py-2 flex items-center gap-2 hover:bg-white/[0.08] transition-colors"
            >
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${l.icon}`}
                alt={l.name}
                className="size-5"
                loading="lazy"
              />
              <span className="text-sm font-medium">{l.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g) => (
          <div key={g.title} className="glass rounded-3xl p-6 hover:bg-white/[0.07] transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="glass-yellow size-10 rounded-xl grid place-items-center">
                <g.icon className="size-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span key={i} className="glass rounded-lg px-3 py-1 text-xs text-muted-foreground">
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
