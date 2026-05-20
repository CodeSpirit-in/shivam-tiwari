import { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-24 px-4 scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">{eyebrow}</div>
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
