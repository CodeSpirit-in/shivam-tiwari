import { useState } from "react";
import { Section } from "./Section";
import { Mail, Phone, Github, Linkedin, FileText, Send, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

// 🔧 Replace this with your Formspree endpoint: https://formspree.io/f/<your-id>
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrgnrbrg";

const socials = [
  { icon: Mail, label: "Email", value: "shivamtiwari28189@gmail.com", href: "mailto:shivamtiwari28189@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 7065273202", href: "tel:+917065273202" },
  { icon: Github, label: "GitHub", value: "github.com/progressmantraclasses", href: "https://github.com/progressmantraclasses" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/shivamtiwari13", href: "https://linkedin.com/in/shivamtiwari13" },
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
      <div className="rounded-[2px] border border-white/10 bg-[#1a1a1a] p-8 md:p-12 relative overflow-hidden shadow-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.06),transparent_60%)]" />

        <div className="relative grid lg:grid-cols-2 gap-10 items-start">
          {/* Left intro */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              Got an idea? <span className="text-primary">Let's talk.</span>
            </h3>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Open to collaborations, full-time roles, and interesting product
              problems. Drop a message below or reach me directly.
            </p>
            <a
              href="/Shivam_Tiwari_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[2px] border border-white/15 bg-white/8 hover:bg-white/12 px-6 py-3 font-semibold uppercase tracking-[0.16em] text-white/85 inline-flex items-center gap-2 mt-6 transition-colors"
            >
              <FileText className="size-4" /> View Resume
            </a>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="rounded-[2px] border border-white/10 bg-[#0f0f0f] p-6 space-y-4 shadow-lg">
            <div>
              <label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={100}
                placeholder="Your name"
                className="mt-2 w-full bg-white/3 border border-white/8 rounded-[2px] px-4 py-3 text-sm text-white/90 focus:outline-none focus:ring-2 focus:ring-white/20 placeholder:text-white/40"
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
                className="mt-2 w-full bg-white/3 border border-white/8 rounded-[2px] px-4 py-3 text-sm text-white/90 focus:outline-none focus:ring-2 focus:ring-white/20 placeholder:text-white/40"
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
                className="mt-2 w-full bg-white/3 border border-white/8 rounded-[2px] px-4 py-3 text-sm text-white/90 focus:outline-none focus:ring-2 focus:ring-white/20 placeholder:text-white/40 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading || sent}
              className="rounded-[2px] border border-white/15 bg-white/8 hover:bg-white/12 px-6 py-3 font-semibold w-full uppercase tracking-[0.16em] text-white/85 inline-flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:hover:bg-white/8"
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
        <div className="relative mt-12 pt-8 border-t border-white/8">
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
                className="rounded-[2px] border border-white/10 bg-white/4 hover:bg-white/8 transition-colors flex items-center gap-3 p-4"
              >
                <div className="size-10 rounded-[2px] bg-white/8 border border-white/12 grid place-items-center shrink-0">
                  <i.icon className="size-5 text-white/80" />
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
