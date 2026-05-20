import shivam from "@/assets/shivam.png";
import { Github, Linkedin, Mail, ArrowDown, FileText } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-4">
      <div className="mx-auto max-w-6xl grid md:grid-cols-[1fr_auto] gap-12 items-center w-full">
        <div className="space-y-8">
          <div className="rounded-[2px] border border-white/15 bg-white/8 px-4 py-1.5 inline-flex items-center gap-2 text-xs text-white/85">
            <span className="size-2 rounded-[1px] bg-blue-500 animate-pulse" />
            Available for opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">
            Shivam <span className="text-primary">Tiwari</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Software Engineer building scalable platforms for millions. From OTT micro-drama
            apps to event SaaS architected for 1M+ concurrent users — I ship products end-to-end.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-[2px] border border-white/15 bg-white/8 hover:bg-white/12 px-6 py-3 font-semibold uppercase tracking-[0.2em] text-white/85 transition-colors inline-flex items-center gap-2"
            >
              View Projects <ArrowDown className="size-4" />
            </a>
            <a
              href="/Shivam_Tiwari_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[2px] border border-white/10 bg-white/5 hover:bg-white/8 px-6 py-3 font-semibold uppercase tracking-[0.15em] text-white/80 inline-flex items-center gap-2 transition-colors"
            >
              <FileText className="size-4" /> Download Resume
            </a>
          </div>
          <div className="flex items-center gap-4 pt-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="rounded-[2px] border border-white/10 bg-white/5 hover:bg-white/8 size-11 grid place-items-center transition-colors" aria-label="GitHub">
              <Github className="size-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="rounded-[2px] border border-white/10 bg-white/5 hover:bg-white/8 size-11 grid place-items-center transition-colors" aria-label="LinkedIn">
              <Linkedin className="size-5" />
            </a>
            <a href="mailto:shivamtiwari28189@gmail.com" className="rounded-[2px] border border-white/10 bg-white/5 hover:bg-white/8 size-11 grid place-items-center transition-colors" aria-label="Email">
              <Mail className="size-5" />
            </a>
          </div>
        </div>

        <div className="relative justify-self-center md:justify-self-end">
          <div className="absolute -inset-6 rounded-3xl bg-primary/20 blur-3xl" />
          <div className="relative border border-white/10 rounded-[2px] bg-white/3 p-3 shadow-lg">
            <img
              src={shivam}
              alt="Shivam Tiwari"
              className="size-64 md:size-80 rounded-[2px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
