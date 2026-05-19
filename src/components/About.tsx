import { Section } from "./Section";
import { GraduationCap } from "lucide-react";

export function About() {
  return (
    <Section id="about" eyebrow="Who I am" title="Building since fifteen.">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 glass rounded-3xl p-8 md:p-10">
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            Some people build for scale. Some for funding. I started at{" "}
            <span className="text-foreground font-medium">15</span> for something simpler — the
            look on someone's face when a problem they'd carried too long finally wasn't theirs
            anymore.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mt-4">
            That look is still the only metric that matters.
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
