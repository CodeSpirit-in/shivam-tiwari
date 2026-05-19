import shivam from "@/assets/shivam.png";
import { Github, Linkedin, Mail, ArrowDown, FileText } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-4">
      <div className="mx-auto max-w-6xl grid md:grid-cols-[1fr_auto] gap-12 items-center w-full">
        <div className="space-y-8">
          <div className="glass rounded-full px-4 py-1.5 inline-flex items-center gap-2 text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            Available for opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">
            Shivam <span className="text-gradient-yellow">Tiwari</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Software Engineer building scalable platforms for millions. From OTT micro-drama
            apps to event SaaS architected for 1M+ concurrent users — I ship products end-to-end.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="glass-yellow rounded-xl px-6 py-3 font-medium text-primary hover:scale-105 transition-transform inline-flex items-center gap-2"
            >
              View Projects <ArrowDown className="size-4" />
            </a>
            <a
              href="/Shivam_Tiwari_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl px-6 py-3 font-medium hover:bg-white/10 transition-colors inline-flex items-center gap-2"
            >
              <FileText className="size-4" /> Download Resume
            </a>
          </div>
          <div className="flex items-center gap-4 pt-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="glass size-11 rounded-xl grid place-items-center hover:text-primary transition-colors" aria-label="GitHub">
              <Github className="size-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="glass size-11 rounded-xl grid place-items-center hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="size-5" />
            </a>
            <a href="mailto:shivamtiwari28189@gmail.com" className="glass size-11 rounded-xl grid place-items-center hover:text-primary transition-colors" aria-label="Email">
              <Mail className="size-5" />
            </a>
          </div>
        </div>

        <div className="relative justify-self-center md:justify-self-end">
          <div className="absolute -inset-6 rounded-3xl bg-primary/20 blur-3xl" />
          <div className="relative glass-strong rounded-3xl p-3">
            <img
              src={shivam}
              alt="Shivam Tiwari"
              className="size-64 md:size-80 rounded-2xl object-cover"
            />
            <div className="absolute -bottom-4 -left-4 glass-yellow rounded-2xl px-4 py-3">
              <div className="text-2xl font-bold text-primary">15M+</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Organic reach</div>
            </div>
            <div className="absolute -top-4 -right-4 glass-yellow rounded-2xl px-4 py-3">
              <div className="text-2xl font-bold text-primary">1M+</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Concurrent users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
