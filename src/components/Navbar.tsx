import { Link } from "@tanstack/react-router";

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4">
      <div className="mx-auto max-w-5xl glass rounded-2xl px-5 py-3 flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-lg tracking-tight">
          Shivam<span className="text-gradient-yellow">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
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
          className="glass-yellow rounded-xl px-4 py-2 text-sm font-medium text-primary hover:scale-105 transition-transform"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
