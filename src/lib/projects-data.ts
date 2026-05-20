import { Globe, Smartphone, type LucideIcon } from "lucide-react";
import codespiritLogo from "@/assets/logo-codespirit.png";
import expertkaroLogo from "@/assets/logo-expertkaro.jpg";
import vithopiaLogo from "@/assets/logo-vithopia.jpeg";
import accesswayLogo from "@/assets/logo-accessway.png";

export type ProjectLink = { label: string; href: string; icon: LucideIcon };

export type Project = {
  name: string;
  tagline: string;
  logo: string;
  stats?: { label: string; value: string }[];
  points: string[];
  tech: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    name: "CodeSpirit",
    tagline: "Event & Hackathon SaaS — Web + Mobile",
    logo: codespiritLogo,
    stats: [
      { label: "Active Users", value: "1000+" },
      { label: "Scales to", value: "1M+" },
    ],
    points: [
      "Scalable multi-role platform for events, hackathons, QR check-ins, social profiles, and real-time chat — architected for 1M+ concurrent users.",
      "Full system designed end-to-end: backend, mobile app, web dashboard. Currently scaled to 1000+ active users.",
    ],
    tech: ["React.js", "TypeScript", "React Native", "Node.js", "Socket.io", "MongoDB", "Redis", "Razorpay", "Azure"],
    links: [
      { label: "codespirit.in", href: "https://codespirit.in", icon: Globe },
      { label: "Android App", href: "https://play.google.com/store/apps/details?id=com.codespirit.app&hl=en_IN", icon: Smartphone },
    ],
  },
  {
    name: "ExpertKaro",
    tagline: "Expert Consultation Platform — Web + Mobile",
    logo: expertkaroLogo,
    points: [
      "Multi-role platform connecting users with doctors, lawyers, and mentors via real-time chat and video calls.",
      "Profile verification, role-based access control, Cashfree payments, and Cloudinary media management.",
    ],
    tech: ["React Native", "TypeScript", "Node.js", "JWT", "FCM", "Cashfree", "Redis", "MongoDB", "Cloudinary", "Azure"],
    links: [
      { label: "expertkaro.com", href: "https://expertkaro.com", icon: Globe },
      { label: "Android App", href: "https://play.google.com/store/apps/details?id=com.expertkaro.app&hl=en_IN", icon: Smartphone },
    ],
  },
  {
    name: "Vithopia",
    tagline: "Web Agency + Internal SaaS Suite",
    logo: vithopiaLogo,
    points: [
      "Full web agency platform with an internal admin suite powering day-to-day operations.",
      "SaaS modules for meetings, project management, lead generation, and end-to-end workflow automation.",
    ],
    tech: ["React.js", "Node.js", "TypeScript", "MongoDB", "Tailwind CSS", "Azure"],
    links: [{ label: "vithopia.com", href: "https://vithopia.com", icon: Globe }],
  },
  {
    name: "AccessWay",
    tagline: "AI Assistant for People with Disabilities",
    logo: accesswayLogo,
    points: [
      "AI-powered accessibility assistant — helps people with disabilities navigate daily tasks via voice and adaptive interfaces.",
      "Integrates speech, vision, and conversational AI into a single accessible experience.",
    ],
    tech: ["React.js", "AI / LLMs", "Speech APIs", "Node.js", "TypeScript"],
    links: [{ label: "accessway.xyz", href: "https://accessway.xyz", icon: Globe }],
  },
];
