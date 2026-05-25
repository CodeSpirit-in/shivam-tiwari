import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export const route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shivam Tiwari — Software Engineer & Product Builder" },
      { name: "description", content: "Software Engineer building scalable platforms — OTT, SaaS, and mobile apps for millions of users. View portfolio, experience, and projects." },
      { property: "og:title", content: "Shivam Tiwari — Software Engineer" },
      { property: "og:description", content: "Portfolio of Shivam Tiwari — Software Engineer building scalable platforms for millions." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
