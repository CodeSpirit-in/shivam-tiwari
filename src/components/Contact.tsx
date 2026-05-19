import { Section } from "./Section";
import { Mail, Phone, Github, Linkedin, FileText } from "lucide-react";

const items = [
  { icon: Mail, label: "Email", value: "shivamtiwari28189@gmail.com", href: "mailto:shivamtiwari28189@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 7065273202", href: "tel:+917065273202" },
  { icon: Github, label: "GitHub", value: "github.com/shivam", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/shivam", href: "https://linkedin.com" },
];

export function Contact() {
  return (
    <Section id="contact" eyebrow="Get in touch" title="Let's build something.">
      <div className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,oklch(0.88_0.18_95/0.15),transparent_60%)]" />
        <div className="relative grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              Got an idea? <span className="text-gradient-yellow">Let's talk.</span>
            </h3>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Open to collaborations, full-time roles, and interesting product problems.
              The faster way to reach me is email.
            </p>
            <a
              href="/Shivam_Tiwari_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-yellow rounded-xl px-6 py-3 font-medium text-primary inline-flex items-center gap-2 mt-6 hover:scale-105 transition-transform"
            >
              <FileText className="size-4" /> View Full Resume
            </a>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {items.map((i) => (
              <a
                key={i.label}
                href={i.href}
                target={i.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glass rounded-2xl p-4 hover:bg-white/10 transition-colors flex items-center gap-3"
              >
                <div className="glass-yellow size-10 rounded-xl grid place-items-center shrink-0">
                  <i.icon className="size-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{i.label}</div>
                  <div className="text-sm font-medium truncate">{i.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <footer className="mt-16 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Shivam Tiwari. Crafted with care.
      </footer>
    </Section>
  );
}
