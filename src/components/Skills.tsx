import { Section } from "./Section";
import { Code2, Layout, Server, Database, Cloud, Shield, Users } from "lucide-react";

const groups = [
  { icon: Code2, title: "Languages", items: ["JavaScript", "TypeScript", "Python", "C++", "C", "Java", "SQL", "HTML", "CSS"] },
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
