import { useState } from "react";
import { Section } from "./Section";
import { Mail, Phone, Github, Linkedin, FileText, Send, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

// 🔧 Replace this with your Formspree endpoint: https://formspree.io/f/<your-id>
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";

const socials = [
  { icon: Mail, label: "Email", value: "shivamtiwari28189@gmail.com", href: "mailto:shivamtiwari28189@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 7065273202", href: "tel:+917065273202" },
  { icon: Github, label: "GitHub", value: "github.com/shivam", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/shivam", href: "https://linkedin.com" },
];

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || name.length > 100) return toast.error("Please enter a valid name");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return toast.error("Please enter a valid email");
    if (!message || message.length > 2000) return toast.error("Please enter a message (max 2000 chars)");

    setLoading(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSent(true);
      form.reset();
      toast.success("Message sent! I'll get back to you soon.");
    } catch {
      toast.error("Something went wrong. Please email me directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section id="contact" eyebrow="Get in touch" title="Let's build something.">
      <div className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,oklch(0.88_0.18_95/0.15),transparent_60%)]" />

        <div className="relative grid lg:grid-cols-2 gap-10 items-start">
          {/* Left intro */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              Got an idea? <span className="text-gradient-yellow">Let's talk.</span>
            </h3>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Open to collaborations, full-time roles, and interesting product
              problems. Drop a message below or reach me directly.
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

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 space-y-4">
            <div>
              <label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={100}
                placeholder="Your name"
                className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 placeholder:text-muted-foreground/60"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={255}
                placeholder="you@example.com"
                className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 placeholder:text-muted-foreground/60"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea
                id="message"
                name="message"
                required
                maxLength={2000}
                rows={5}
                placeholder="Tell me about your project, role, or idea…"
                className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 placeholder:text-muted-foreground/60 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading || sent}
              className="glass-yellow rounded-xl px-6 py-3 font-medium text-primary w-full inline-flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:hover:scale-100"
            >
              {loading ? (
                <><Loader2 className="size-4 animate-spin" /> Sending…</>
              ) : sent ? (
                <><CheckCircle2 className="size-4" /> Sent</>
              ) : (
                <><Send className="size-4" /> Send Message</>
              )}
            </button>
          </form>
        </div>

        {/* Social links — at the bottom */}
        <div className="relative mt-12 pt-8 border-t border-white/10">
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
            Or reach me directly
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {socials.map((i) => (
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
