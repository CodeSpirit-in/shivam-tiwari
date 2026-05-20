import { Link } from "@tanstack/react-router";
import shivam from "@/assets/shivam.png";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-8 inset-x-0 z-50 px-4">
      <div className="mx-auto max-w-5xl rounded-[2px] border border-white/8 bg-white/3 px-4 py-2.5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="size-10 rounded-[2px] overflow-hidden bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
            <img src={shivam} alt="Shivam Tiwari" className="size-full rounded-[2px] object-cover" />
          </div>
          <span className="hidden sm:inline font-display font-bold text-base tracking-tight">
            Shivam<span className="text-primary">.</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="/Shivam_Tiwari_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[2px] border border-white/15 bg-white/8 hover:bg-white/12 px-4 py-2 text-sm font-semibold uppercase tracking-[0.15em] text-white/85 transition-colors"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
