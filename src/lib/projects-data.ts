import { Globe, Smartphone, type LucideIcon } from "lucide-react";
import codespiritLogo from "@/assets/logo-codespirit.png";
import expertkaroLogo from "@/assets/logo-expertkaro.jpg";
import vithopiaLogo from "@/assets/logo-vithopia.jpeg";
import accesswayLogo from "@/assets/logo-accessway.png";

export type ProjectLink = { label: string; href: string; icon: LucideIcon };

export type ProjectPalette = {
  from: string;
  via: string;
  to: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  logo: string;
  stats?: { label: string; value: string }[];
  points: string[];
  tech: string[];
  links: ProjectLink[];
  palette: ProjectPalette;
};

function createMonogramLogo(name: string, colors: ProjectPalette) {
  const initials = name
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-label="${name}">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${colors.from}" />
          <stop offset="50%" stop-color="${colors.via}" />
          <stop offset="100%" stop-color="${colors.to}" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" rx="128" fill="url(#g)" />
      <rect x="56" y="56" width="400" height="400" rx="104" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" />
      <circle cx="256" cy="196" r="96" fill="rgba(255,255,255,0.14)" />
      <text x="256" y="292" text-anchor="middle" font-family="Space Grotesk, Arial, sans-serif" font-size="110" font-weight="700" fill="#ffffff">${initials}</text>
      <text x="256" y="360" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="26" font-weight="500" fill="rgba(255,255,255,0.82)">${name}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const newProjectPalette = (from: string, via: string, to: string): ProjectPalette => ({ from, via, to });

export const projects: Project[] = [
  {
    slug: "codespirit",
    name: "CodeSpirit",
    tagline: "Event & Hackathon SaaS — Web + Mobile",
    summary:
      "A scalable event and hackathon platform that keeps organizers, judges, and participants in one place with QR check-ins, real-time chat, profiles, and payment flows.",
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
    palette: newProjectPalette("#0f172a", "#1d4ed8", "#14b8a6"),
  },
  {
    slug: "expertkaro",
    name: "ExpertKaro",
    tagline: "Expert Consultation Platform — Web + Mobile",
    summary:
      "A consultation marketplace that connects users with verified doctors, lawyers, and mentors through secure chat, video calls, role-based access, and integrated payments.",
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
    palette: newProjectPalette("#111827", "#7c3aed", "#ec4899"),
  },
  {
    slug: "vithopia",
    name: "Vithopia",
    tagline: "Web Agency + Internal SaaS Suite",
    summary:
      "A web agency platform paired with an internal operations suite for project tracking, meetings, lead generation, and everyday delivery workflow automation.",
    logo: vithopiaLogo,
    points: [
      "Full web agency platform with an internal admin suite powering day-to-day operations.",
      "SaaS modules for meetings, project management, lead generation, and end-to-end workflow automation.",
    ],
    tech: ["React.js", "Node.js", "TypeScript", "MongoDB", "Tailwind CSS", "Azure"],
    links: [{ label: "vithopia.com", href: "https://vithopia.com", icon: Globe }],
    palette: newProjectPalette("#0f172a", "#0ea5e9", "#22c55e"),
  },
  {
    slug: "accessway",
    name: "AccessWay",
    tagline: "AI Assistant for People with Disabilities",
    summary:
      "An accessibility-first assistant that helps people with disabilities complete everyday tasks using voice, vision, and conversational AI in a single adaptive experience.",
    logo: accesswayLogo,
    points: [
      "AI-powered accessibility assistant — helps people with disabilities navigate daily tasks via voice and adaptive interfaces.",
      "Integrates speech, vision, and conversational AI into a single accessible experience.",
    ],
    tech: ["React.js", "AI / LLMs", "Speech APIs", "Node.js", "TypeScript"],
    links: [{ label: "accessway.xyz", href: "https://accessway.xyz", icon: Globe }],
    palette: newProjectPalette("#111827", "#f97316", "#facc15"),
  },
  {
    slug: "crowd-safety-management",
    name: "Crowd Safety Management",
    tagline: "AI Crowd Monitoring and Emergency Response",
    summary:
      "An AI-powered crowd operations platform that watches live density, surfaces risk alerts, and helps security teams respond faster during festivals, events, and high-traffic public spaces.",
    logo: createMonogramLogo("Crowd Safety Management", newProjectPalette("#0f172a", "#0284c7", "#22c55e")),
    points: [
      "Uses computer vision and predictive analytics to detect crowd spikes, bottlenecks, and possible safety threats before they escalate.",
      "Designed to support venue operators with real-time alerts, event oversight, and emergency response coordination.",
    ],
    tech: ["MERN", "Machine Learning", "Tailwind", "Computer Vision", "Predictive Analytics"],
    links: [{ label: "Live Demo", href: "https://safecrowd.vercel.app/", icon: Globe }],
    palette: newProjectPalette("#020617", "#0369a1", "#22c55e"),
  },
  {
    slug: "anonymously-group-chat",
    name: "Anonymously Group Chat",
    tagline: "Privacy-First Anonymous Rooms",
    summary:
      "A realtime anonymous chat platform where users can talk securely without exposing their identity, while the system keeps room activity fast, responsive, and privacy focused.",
    logo: createMonogramLogo("Anonymously Group Chat", newProjectPalette("#111827", "#16a34a", "#06b6d4")),
    points: [
      "Built for anonymous room-based conversations with realtime presence, message updates, and lightweight sign-in safeguards.",
      "Keeps the user experience simple while still supporting privacy, authentication, and secure data handling behind the scenes.",
    ],
    tech: ["MERN", "Socket.io", "JWT", "Realtime Chat", "Privacy"],
    links: [{ label: "Live Demo", href: "https://unknown-chats.web.app/", icon: Globe }],
    palette: newProjectPalette("#111827", "#2563eb", "#14b8a6"),
  },
  {
    slug: "progress-mantra-classes",
    name: "Progress Mantra Classes",
    tagline: "Online Education Platform",
    summary:
      "A focused learning platform that offers courses, study materials, and live classes to help students build skills and prepare for competitive exams.",
    logo: createMonogramLogo("Progress Mantra Classes", newProjectPalette("#312e81", "#2563eb", "#f59e0b")),
    points: [
      "Combines course discovery, educational content, and live classroom support into one student-friendly experience.",
      "Designed to make the learning journey smoother with a clean interface and easy access to study resources.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Education Platform"],
    links: [{ label: "Live Demo", href: "https://shivam-13.netlify.app/", icon: Globe }],
    palette: newProjectPalette("#1e1b4b", "#2563eb", "#f59e0b"),
  },
  {
    slug: "anonymous-video-call-chat",
    name: "Anonymous Video Call & Chat",
    tagline: "Encrypted Anonymous Calls",
    summary:
      "A secure anonymous video and chat platform that pairs realtime communication with encryption and privacy controls so users can connect without revealing identity.",
    logo: createMonogramLogo("Anonymous Video Call & Chat", newProjectPalette("#111827", "#db2777", "#8b5cf6")),
    points: [
      "Built to combine anonymous messaging and low-latency video calling in a single privacy-oriented experience.",
      "Uses realtime signaling and a streamlined interface so users can move from chat into video without friction.",
    ],
    tech: ["MERN", "WebRTC", "Tailwind", "Realtime Video", "Chat"],
    links: [{ label: "Live Demo", href: "https://vitalsyncs.web.app/", icon: Globe }],
    palette: newProjectPalette("#190f2e", "#db2777", "#7c3aed"),
  },
  {
    slug: "burnout-buddy",
    name: "Burnout Buddy",
    tagline: "Mental Health and Mood Tracking",
    summary:
      "A mobile-first mental health companion that tracks mood, suggests coping strategies, and uses AI-driven guidance to help users manage stress and burnout more consistently.",
    logo: createMonogramLogo("Burnout Buddy", newProjectPalette("#111827", "#ef4444", "#f59e0b")),
    points: [
      "Built for daily check-ins, mood tracking, and personalized stress-management guidance that feels lightweight enough to use consistently.",
      "Designed around mobile usage patterns so users can get support and insight without a complicated setup.",
    ],
    tech: ["React Native", "MERN", "MongoDB", "AI Guidance", "Mobile"],
    links: [{ label: "Live Demo", href: "https://burnoutbuddy.vercel.app/", icon: Globe }],
    palette: newProjectPalette("#1f2937", "#ef4444", "#f59e0b"),
  },
  {
    slug: "food-waste-management",
    name: "Food Waste Management",
    tagline: "Food Redistribution Network",
    summary:
      "A redistribution platform that helps restaurants, event organizers, and NGOs move surplus food into the right hands quickly while reducing waste and supporting communities.",
    logo: createMonogramLogo("Food Waste Management", newProjectPalette("#0f172a", "#16a34a", "#eab308")),
    points: [
      "Connects donors and receivers with a workflow that makes excess-food collection and redistribution easier to coordinate.",
      "Focuses on reducing waste while adding visibility to logistics, supply matching, and community impact.",
    ],
    tech: ["MERN", "Tailwind", "PostgreSQL", "Operations", "Redistribution"],
    links: [{ label: "Live Demo", href: "https://foodgrant.vercel.app/", icon: Globe }],
    palette: newProjectPalette("#052e16", "#16a34a", "#eab308"),
  },
  {
    slug: "face-expression-detection",
    name: "Face Expression Detection",
    tagline: "Emotion Recognition with AI",
    summary:
      "A computer-vision tool that detects facial expressions in realtime and turns emotion signals into a usable interface for analysis, feedback, and wellbeing insights.",
    logo: createMonogramLogo("Face Expression Detection", newProjectPalette("#0f172a", "#0ea5e9", "#8b5cf6")),
    points: [
      "Uses TensorFlow-powered facial analysis to classify expressions and surface emotional context from visual input.",
      "Built to support experimentation with computer vision, model inference, and AI-driven user experiences.",
    ],
    tech: ["TensorFlow", "React", "Python", "Computer Vision", "AI"],
    links: [{ label: "Live Demo", href: "https://faceexpresssions.web.app/", icon: Globe }],
    palette: newProjectPalette("#0f172a", "#0ea5e9", "#8b5cf6"),
  },
];

export const featuredProjectSlugs = [
  "codespirit",
  "crowd-safety-management",
  "expertkaro",
  "anonymous-video-call-chat",
  "accessway",
] as const;

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
