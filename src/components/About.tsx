import { Section } from "./Section";
import { GraduationCap } from "lucide-react";

export function About() {
  return (
    <Section id="about" eyebrow="Who I am" title="Building things that get used.">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 glass rounded-3xl p-8 md:p-10 space-y-5">
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            Software Engineer building real, scalable products like{" "}
            <span className="text-foreground font-medium">CodeSpirit</span>,{" "}
            <span className="text-foreground font-medium">ExpertKaro</span>, and{" "}
            <span className="text-foreground font-medium">Microkahani</span> —
            platforms already used by thousands of users in production.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            I've built systems end-to-end — from backend architecture to
            deployment — focused on performance, reliability, and real user impact.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            I like building things that don't just exist as ideas, but actually
            get used, break under real load, and still keep running.
          </p>
        </div>
        <div className="glass rounded-3xl p-8 space-y-4">
          <div className="glass-yellow size-12 rounded-2xl grid place-items-center">
            <GraduationCap className="size-6 text-primary" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Education</div>
            <div className="font-semibold mt-1 leading-snug">
              B.Tech, Information Technology
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Maharaja Agrasen Institute of Technology, Delhi
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
