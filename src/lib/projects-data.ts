import { Globe, Smartphone, type LucideIcon } from "lucide-react";
import codespiritLogo from "@/assets/logo-codespirit.png";
import expertkaroLogo from "@/assets/logo-expertkaro.jpg";
import microkahaniLogo from "@/assets/logo-microkahani.png";
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
  screenshot?: string;
  stats?: { label: string; value: string }[];
  points: string[];
  details?: string[];
  problem?: string;
  solution?: string;
  architecture?: string[];
  contributions?: string[];
  tech: string[];
  tags?: string[];
  production?: boolean;
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
    tagline: "Full-Stack Scalable Community Platform",
    summary:
      "A modern community platform with mobile apps, a web experience, and a dedicated admin panel built for high-volume events, referrals, and real-time engagement.",
    logo: codespiritLogo,
    stats: [
      { label: "1000+ Active Users", value: "Website + App's + Dashboard" },
      { label: "Designed For", value: "Millions" },
    ],
    problem:
      "Community apps often fail under load, lack event-driven architecture, and struggle to deliver seamless mobile experiences across chat, notifications, and payments.",
    solution:
      "Built CodeSpirit as a modular ecosystem with React Native mobile apps, a responsive web app, and an admin panel for operational control.",
    points: [
      "Designed a modular service architecture with event-driven Pub/Sub for real-time chat, notifications, and invite workflows.",
      "Implemented universal invite links, deep linking, and multi-level referrals for viral growth and seamless mobile onboarding.",
    ],
    details: [
      "Delivered React Native Android/iOS mobile apps with a complementary web app and admin dashboard for event operations.",
      "Built MongoDB schemas with indexes and aggregation pipelines for high-performance feeds, search, and relationships.",
      "Implemented JWT auth, OTP login, email/password access, and OAuth social sign-in for flexible onboarding.",
      "Integrated Razorpay payments with webhooks, Cloudinary media storage, Firebase FCM, and Notifee for production-grade notifications.",
    ],
    architecture: [
      "Backend services separated into auth, messaging, payments, and media modules for independent scaling.",
      "Realtime systems built with WebSockets and a Pub/Sub event bus to decouple live chat, presence, and notifications.",
      "Redis caching layer for session data, feed precomputation, and rate-limited workflows.",
      "Cloud-ready deployment design with mobile app stores, CDN media delivery, and server-side performance tuning.",
    ],
    contributions: [
      "Led the full-stack platform architecture for community events, admin control, and referral growth systems.",
      "Built production-ready FCM notification handling using React Native Notifee for foreground/background flows.",
      "Scaled database access with MongoDB indexing and query optimization across event streams and user search.",
      "Designed and launched secure Razorpay payment flows with wallet reconciliation and transaction audit logging.",
    ],
    tech: [
      "React Native",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "WebSockets",
      "Firebase FCM",
      "React Native Notifee",
      "Cloudinary",
      "Razorpay",
      "JWT",
      "OAuth",
    ],
    tags: ["App", "Website", "Production"],
    production: true,
    links: [
      { label: "Web App", href: "https://codespirit.in", icon: Globe },
      { label: "Admin Panel", href: "https://codespirit.in/admin", icon: Globe },
      { label: "Android App", href: "https://play.google.com/store/apps/details?id=com.codespirit.app&hl=en_IN", icon: Smartphone },
    ],
    screenshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3u9mlPoXJ6BHPJd1DHi5HaFsUGoeifmEfQ&s",
    palette: newProjectPalette("#0f172a", "#1d4ed8", "#14b8a6"),
  },
  {
    slug: "expertkaro",
    name: "ExpertKaro",
    tagline: "Real-time Expert Consultation Platform",
    summary:
      "A secure consultation platform offering mobile and web access to experts with video, chat, wallet payments, and multi-role authorization.",
    logo: expertkaroLogo,
    stats: [
      { label: "Website", value: "App" },
      { label: "Media Services", value: "Audio + Video" },
    ],
    problem:
      "Standard expert consultation apps struggle with low-latency media, secure multi-role access, and notifications that work reliably in foreground and background.",
    solution:
      "Built ExpertKaro with React Native, a companion web app, Agora media, WebSockets, and Notifee for a secure, cross-platform consultation experience.",
    points: [
      "Implemented Agora SDK video/audio calls for low-latency expert sessions and session-level access control.",
      "Built multi-role authorization for mentors and users along with social login, JWT auth, and secure media upload via ImageKit.",
    ],
    details: [
      "Delivered a React Native mobile app plus a companion web app backed by a Node.js/Express consultation platform.",
      "Built a secure wallet system with Cashfree integration, transaction flows, and balance tracking.",
      "Implemented FCM and Notifee for advanced foreground/background notification handling and scheduled alerts.",
      "Designed referral tracking and deep linking for shareable mentor invites and onboarding flows.",
    ],
    architecture: [
      "Realtime chat and call signaling through WebSockets, with Agora managing media sessions securely.",
      "Separated authorization, payment, and media upload services for compliance and scalability.",
      "ImageKit integration for optimized image delivery in mentor profiles and documentation flows.",
      "Wallet and transaction service built with audit logs, settlement routines, and refund handling.",
    ],
    contributions: [
      "Led the secure consultation architecture and mentor/user access control design.",
      "Built call notification flows using React Native Notifee to improve reliability in production.",
      "Integrated Cashfree wallet payments with backend reconciliation and in-app transaction history.",
      "Designed deep links for onboarding, referral sharing, and session resumption across devices.",
    ],
    tech: [
      "React Native",
      "React",
      "Node.js",
      "Express",
      "WebSockets",
      "Agora",
      "Firebase FCM",
      "React Native Notifee",
      "Cashfree",
      "ImageKit",
      "MongoDB",
      "JWT",
      "OAuth",
    ],
    tags: ["App", "Website"],
    production: true,
    links: [
     
      { label: "Android App", href: "https://play.google.com/store/apps/details?id=com.expertkaro.app&hl=en_IN", icon: Smartphone },
       { label: "Web App", href: "https://expertkaro.com", icon: Globe },
    ],
    screenshot: "https://iili.io/qzfFNfe.png",
    palette: newProjectPalette("#111827", "#7c3aed", "#ec4899"),
  },
  {
    slug: "microkahani",
    name: "MicroKahani",
    tagline: "Media & Storytelling Platform — Contributor",
    summary:
      "A scalable contributor-driven media platform with adaptive video streaming, monetization, analytics, and cloud-native media processing.",
    logo: microkahaniLogo,
    stats: [
      { label: "Admin Dashboard", value: "Website + App" },
      { label: "Cloud Delivery", value: "GCP, Azure, Cloudflare" },
    ],
    problem:
      "Video storytelling apps often fail to scale due to heavy media pipelines, slow uploads, and weak CDN integration for adaptive playback.",
    solution:
      "Built MicroKahani with a cloud-first transcoding pipeline, HLS adaptive streaming, analytics, and mobile delivery optimized for contributors.",
    points: [
      "Designed a fast onboarding experience with phone OTP and Google login for creators and viewers.",
      "Integrated monetization, analytics, and notification flows to support a modern storytelling platform.",
    ],
    details: [
      "Built end-to-end video processing using FFmpeg for multi-bitrate HLS output and cloud storage distribution.",
      "Integrated Google AdMob and Cashfree for monetization across creator and viewer workflows.",
      "Added Firebase FCM for engagement notifications and Google Analytics for usage insights.",
      "Optimized media delivery using Cloudflare R2 CDN and multi-cloud storage architecture.",
      "Supported both Android and iOS contributor experiences to widen platform reach.",
    ],
    architecture: [
      "Audio/video ingestion pipeline with FFmpeg transcoding to adaptive HLS segments.",
      "Cloud storage and CDN distribution on GCP, Azure, and Cloudflare R2 for global delivery.",
      "Notification and analytics services built as independent modules for reliable scaling.",
      "Performance improvements through codec optimization and bitrate profiles for mobile playback.",
    ],
    contributions: [
      "Helped architect the video processing pipeline and adaptive streaming delivery model.",
      "Built contributor authentication flows and monetization integration using AdMob and Cashfree.",
      "Worked on analytics dashboards and engagement tracking for creators and platform admins.",
      "Improved media upload and playback performance for mobile-first storytelling experiences.",
    ],
    tech: [
      "React Native",
      "Firebase FCM",
      "Google AdMob",
      "Cashfree",
      "FFmpeg",
      "HLS",
      "GCP",
      "Azure",
      "Cloudflare R2",
      "Google Analytics",
    ],
    tags: ["App", "Website"],
    production: true,
    links: [
      { label: "Android App", href: "https://play.google.com/store/apps/details?id=com.microkahani=en_IN", icon: Smartphone },
    ],
    screenshot: "https://iili.io/CJfY16B.png",
    palette: newProjectPalette("#111827", "#0284c7", "#0ea5e9"),
  },
  {
    slug: "accessway",
    name: "AccessWay",
    tagline: "AI-Powered Accessibility Navigation",
    summary:
      "An AI-driven assistive navigation platform for people with disabilities, combining voice guidance, smart hardware integration, indoor/outdoor routing, and community data.",
    logo: accesswayLogo,
    stats: [
      { label: "Website + App", value: "" },
      { label: "Assistive Modes", value: "Vision, Audio, Haptics" },
    ],
    problem:
      "Mainstream navigation apps ignore accessibility constraints like elevator outages, inaccessible paths, and indoor wayfinding for users with disabilities.",
    solution:
      "Built AccessWay to deliver AI-powered accessible routing, real-time obstacle alerts, smart glasses support, and personalized navigation modes.",
    points: [
      "Delivered an accessible mobile-first app with personalized accessibility profiles and AI-generated accessible routes.",
      "Built smart wearable integration for hands-free obstacle detection, audio guidance, and haptic alerts.",
    ],
    details: [
      "Built adaptive route generation for visual, hearing, mobility, and cognitive support needs.",
      "Integrated Azure AI Vision, Maps, Cognitive Services, and IoT for hardware and environment awareness.",
      "Designed WCAG-friendly UI and mobile flows for accessible route discovery, navigation, and hazard reporting.",
      "Launched community-driven accessibility reporting so users can contribute live data on ramps, elevators, and obstacles.",
    ],
    architecture: [
      "AI-assisted routing engine powered by Azure Maps and Azure Machine Learning.",
      "Smart glasses integration via Azure IoT for real-time obstacle detection and AR waypoint guidance.",
      "Multi-modal notifications using Firebase FCM, Notifee, audio, and haptic channels.",
      "Shared accessibility data model for crowdsourced route updates and environment conditions.",
    ],
    contributions: [
      "Designed the accessibility-first product experience and inclusive route personalization.",
      "Implemented AI-powered assistive navigation, smart hardware communication, and emergency alerts.",
      "Built production-grade FCM/Notifee notification handling and deep-linking for accessible route sharing.",
      "Helped define the platform’s support for visual impairment, mobility, hearing, and neurodivergent user modes.",
    ],
    tech: [
      "React Native",
      "Node.js",
      "Firebase FCM",
      "React Native Notifee",
      "Azure AI",
      "Azure Maps",
      "Azure Cognitive Services",
      "Azure IoT",
      "Cloudflare CDN",
      "JWT",
      "OAuth",
    ],
    tags: ["App", "Website", "AI"],
    production: true,
    links: [
      { label: "Website", href: "https://accessway.xyz", icon: Globe },
      { label: "Android App", href: "https://play.google.com/store/apps/details?id=com.accessway.app&hl=en_IN", icon: Smartphone },
    ],
    screenshot: "https://iili.io/qzfTEts.png",
    palette: newProjectPalette("#111827", "#f97316", "#facc15"),
  },
  {
    slug: "vithopia",
    name: "Vithopia",
    tagline: "AI-Powered Digital Ecosystem & Automation Platform",
    summary:
      "A large-scale digital ecosystem combining AI workflow automation, creator systems, payment flows, and operational dashboards for modern teams.",
    logo: vithopiaLogo,
    stats: [
      { label: "Website", value: "" },
      { label: "Systems", value: "Realtime Operations" },
    ],
    problem:
      "Complex digital ecosystems need better orchestration, shared workflows, and scalable real-time dashboards to keep teams aligned.",
    solution:
      "Built Vithopia with modular microservice patterns, real-time WebSocket tracking, AI workflow orchestration, and centralized operations management.",
    points: [
      "Delivered a unified platform for task orchestration, creator management, payment flows, and team operations.",
      "Built scalable AI and automation systems designed for real-time workflow execution and shared digital infrastructure.",
    ],
    details: [
      "Built user and creator modules with team management, task orchestration, and operation dashboards.",
      "Designed payment and affiliate infrastructure with Stripe wallet flows and revenue tracking.",
      "Introduced real-time workflow execution tracking with WebSockets and stateful operations monitoring.",
      "Optimized backend API performance with MongoDB, Redis caching, and modular service separation.",
    ],
    architecture: [
      "Modular backend architecture separating auth, workflow, payment, analytics, and AI services.",
      "Real-time event handling with WebSockets for live dashboard updates and notifications.",
      "AI automation integration for task execution, recommendations, and process orchestration.",
      "Cloudflare CDN and optimized asset delivery for web and mobile interfaces.",
    ],
    contributions: [
      "Developed scalable workflow and automation modules for user, team, and creator operations.",
      "Built real-time dashboards and operational flows for tracking execution and status.",
      "Improved API efficiency and backend performance for concurrent users and automation pipelines.",
      "Led integrations for notifications, payments, AI services, and deep linking across the ecosystem.",
    ],
    tech: [
      "React.js",
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "WebSockets",
      "Stripe",
      "Firebase FCM",
      "React Native Notifee",
      "Cloudflare CDN",
      "AI",
    ],
    tags: ["Website", "AI"],
    production: true,
    links: [{ label: "Website", href: "https://vithopia.com", icon: Globe }],
    screenshot: "https://iili.io/C9IVScu.png",
    palette: newProjectPalette("#0f172a", "#0ea5e9", "#22c55e"),
  },
  {
    slug: "elite-founders",
    name: "Elite Founders",
    tagline: "Community Platform for Founders & Builders",
    summary:
      "A website and community destination where founders, builders, and community leaders meet, share resources, and connect in one curated space.",

    logo: createMonogramLogo("Elite Founders", newProjectPalette("#0d0f1e", "#7c3aed", "#34d399")),
    points: [
      "Designed for founders, builders, and community owners to meet and collaborate in one dedicated hub.",
      "Features community discovery, founder profiles, and a polished website for introducing the network.",
    ],
    tech: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "Web"],
    links: [{ label: "elite-founders.vercel.app", href: "https://elite-founders.vercel.app/", icon: Globe }],
    screenshot: "https://iili.io/C91F0Nt.png",
    palette: newProjectPalette("#050816", "#7c3aed", "#38bdf8"),
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
    screenshot: "https://iili.io/C9Ig2pI.png",
    palette: newProjectPalette("#1f2937", "#ef4444", "#f59e0b"),
  },
  {
    slug: "anonymously-group-chat",
    name: "Anonymous Group Chat",
    tagline: "Privacy-First Anonymous Rooms",
    summary:
      "A realtime anonymous chat platform where users can talk securely without exposing their identity, while the system keeps room activity fast, responsive, and privacy focused.",
    logo: createMonogramLogo("Anonymous Group Chat", newProjectPalette("#111827", "#16a34a", "#06b6d4")),
    points: [
      "Built for anonymous room-based conversations with realtime presence, message updates, and lightweight sign-in safeguards.",
      "Keeps the user experience simple while still supporting privacy, authentication, and secure data handling behind the scenes.",
    ],
    tech: ["MERN", "Socket.io", "JWT", "Realtime Chat", "Privacy"],
    links: [{ label: "Live Demo", href: "https://unknown-chats.web.app/", icon: Globe }],
    screenshot: "https://iili.io/C9INDlI.png",
    palette: newProjectPalette("#0f172a", "#16a34a", "#06b6d4"),
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
    screenshot: "https://iili.io/C9Iv9OF.png",
    palette: newProjectPalette("#190f2e", "#db2777", "#7c3aed"),
  },
  {
    slug: "st-blogs",
    name: "ST Blogs",
    tagline: "Secure Blogging Platform with Auth",
    summary:
      "A blog platform with CRUD APIs, authentication, authorization, social login, JWT security, OTP support, forgot-password flows, and a polished writing experience.",
    logo: createMonogramLogo("ST Blogs", newProjectPalette("#111827", "#2563eb", "#8b5cf6")),
    points: [
      "Full CRUD blogging experience with role-based access and secure API flows.",
      "Authentication includes JWT, social login, OTP, and password recovery for modern security needs.",
    ],
    tech: ["React.js", "Node.js", "JWT", "OAuth", "CMS"],
    links: [{ label: "st-blogs.vercel.app", href: "https://st-blogs.vercel.app/", icon: Globe }],
    screenshot: "https://iili.io/C91CmSj.png",
    palette: newProjectPalette("#0f172a", "#2563eb", "#8b5cf6"),
  },
  {
    slug: "krishi-sarthi",
    name: "Krishi Sarthi",
    tagline: "AI Crop Forecasting & Farmer Assistant",
    summary:
      "An AI-powered React Native app for weather forecasting, crop prediction, treatment guidance, and multi-language voice/text assistance tailored for farmers.",
    logo: createMonogramLogo("Krishi Sarthi", newProjectPalette("#0f172a", "#22c55e", "#84cc16")),
    points: [
      "Provides weather forecasting, crop prediction, and treatment recommendations using AI and agriculture data.",
      "Supports multilingual voice command, chat, and image-based farming guidance to help farmers make decisions.",
    ],
    tech: ["React Native", "AI", "Voice", "Multilanguage", "Mobile"],
    links: [
      { label: "GitHub Repo", href: "https://github.com/progressmantraclasses/krishi-sarthi", icon: Globe },
      { label: "Demo Video", href: "https://youtu.be/OMAUh22sfTs", icon: Globe },
    ],
    screenshot: createMonogramLogo("Krishi Sarthi", newProjectPalette("#0f172a", "#22c55e", "#84cc16")),
    palette: newProjectPalette("#0f172a", "#22c55e", "#84cc16"),
  },
  {
    slug: "react-native-fcm-news",
    name: "React Native FCM News App",
    tagline: "Push Notifications for React Native",
    summary:
      "A news application with backend and admin panel for delivering push notifications through Expo, React Native FCM, and a Node.js API.",
    logo: createMonogramLogo("RN FCM News", newProjectPalette("#0f172a", "#2563eb", "#0ea5e9")),
    points: [
      "Admin panel and backend APIs for sending push notifications to React Native users.",
      "Built using Expo FCM, Node.js, and a news feed experience with real-time alert delivery.",
    ],
    tech: ["React Native", "Node.js", "FCM", "Expo", "Push Notifications"],
    links: [{ label: "GitHub Repo", href: "https://github.com/progressmantraclasses/reactnativefcm", icon: Globe }],
    screenshot: createMonogramLogo("RN FCM News", newProjectPalette("#0f172a", "#2563eb", "#0ea5e9")),
    palette: newProjectPalette("#0f172a", "#2563eb", "#0ea5e9"),
  },
  {
    slug: "careerwill",
    name: "CareerWill",
    tagline: "AI-driven Career Courses & Assistants",
    summary:
      "An AI-powered multi-lingual course platform with voice-enabled agents and personalized learning tracks for competitive exam preparation.",
    logo: createMonogramLogo("CareerWill", newProjectPalette("#0b1220", "#7c3aed", "#8b5cf6")),
    points: [
      "Multi-lingual voice-enabled assistants for learning with mic and speech interaction.",
      "Scalable course delivery and assessment flows built for exam preparation and continuous learning.",
    ],
    tech: ["React.js", "Node.js", "AI", "Speech APIs", "Multi-language"],
    links: [{ label: "career-will.vercel.app", href: "https://career-will.vercel.app/", icon: Globe }],
    screenshot: "https://iili.io/C9IP6Ol.png",
    palette: newProjectPalette("#07122a", "#6d28d9", "#a855f7"),
  },
  {
    slug: "adarpan",
    name: "Adarpan",
    tagline: "Gift Sharing & Doorstep Delivery",
    summary:
      "A gift-sharing ecommerce platform that lets users send presents to friends with live payment flows, shipping tracking, and a smooth add-to-cart experience.",
    logo: createMonogramLogo("Adarpan", newProjectPalette("#6d28d9", "#8b5cf6", "#ec4899")),
    points: [
      "Gift sharing platform for sending surprise deliveries to friends with easy cart management and checkout.",
      "Built with ecommerce workflows, live payments, and shipping support for streamlined door-step gifting.",
    ],
    tech: ["React.js", "TypeScript", "Node.js", "Stripe", "Ecommerce", "Shipping"],
    links: [{ label: "adarpan.com", href: "https://adarpan.com", icon: Globe }],
    screenshot: "https://iili.io/C91NydX.png",
    palette: newProjectPalette("#0f172a", "#7c3aed", "#f472b6"),
  },
  {
    slug: "vigilant-ai",
    name: "Vigilant AI",
    tagline: "AI Crime Detection & Response",
    summary:
      "An AI system that detects fights, theft, and vandalism from CCTV and mobile recordings, sends alerts, suggests safer routes, and supports emergency response.",
    logo: createMonogramLogo("Vigilant AI", newProjectPalette("#050816", "#e11d48", "#7c3aed")),
    points: [
      "Detects violence, theft, and vandalism in video feeds and sends real-time alerts to security teams.",
      "Offers route suggestions, panic alerts, legal assistance chatbot, and decentralized incident reporting.",
    ],
    tech: ["AI", "Computer Vision", "Security", "Realtime Alerts", "Blockchain"],
    links: [{ label: "vigilantai.vercel.app", href: "https://vigilantai.vercel.app/", icon: Globe }],
    screenshot: "https://iili.io/C91AaBp.png",
    palette: newProjectPalette("#020617", "#9d174d", "#7c3aed"),
  },
  {
    slug: "savra",
    name: "Savra",
    tagline: "AI PPT Presentation Generator",
    summary:
      "An AI-powered presentation builder that creates PPT-style slides from prompts, so users can generate professional pitch decks and demo presentations instantly.",
    logo: createMonogramLogo("Savra", newProjectPalette("#0f172a", "#f472b6", "#8b5cf6")),
    points: [
      "Generate PPT presentations with AI-driven content and ready-to-present slide layouts.",
      "Designed for pitch decks, demos, and shareable presentations powered by AI automation.",
    ],
    tech: ["AI", "React.js", "Presentation", "Automation", "Web"],
    links: [
      { label: "savra-blond.vercel.app", href: "https://savra-blond.vercel.app/", icon: Globe },
      { label: "GitHub Repo", href: "https://github.com/progressmantraclasses/savra", icon: Globe },
    ],
    screenshot: "https://iili.io/C91HPBR.png",
    palette: newProjectPalette("#0f172a", "#ec4899", "#8b5cf6"),
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
    screenshot: "https://iili.io/C9IwaEB.png",
    palette: newProjectPalette("#020617", "#0369a1", "#22c55e"),
  },
  {
    slug: "repo-ai",
    name: "Repo AI",
    tagline: "Smart Delhi Traffic & Pollution Control",
    summary:
      "An AI platform for intelligent traffic and pollution control in Delhi, using data-driven insights and automated response recommendations.",
    logo: createMonogramLogo("Repo AI", newProjectPalette("#08111a", "#22c55e", "#14b8a6")),
    points: [
      "Smart traffic and pollution monitoring for urban operations and public safety.",
      "Designed to give authorities real-time insights and control for cleaner, safer city streets.",
    ],
    tech: ["AI", "Data", "Traffic", "Pollution", "Smart City"],
    links: [{ label: "repo-ai-alpha.vercel.app", href: "https://repo-ai-alpha.vercel.app/", icon: Globe }],
    screenshot: "https://iili.io/C91xxnI.png",
    palette: newProjectPalette("#07122a", "#0284c7", "#22c55e"),
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
    screenshot: "https://iili.io/C9ISeVa.png",
    palette: newProjectPalette("#1e1b4b", "#2563eb", "#f59e0b"),
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
    screenshot: "https://iili.io/C9Ir8Kb.png",
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
    screenshot: "https://iili.io/C9I6BCF.png",
    palette: newProjectPalette("#0f172a", "#0ea5e9", "#8b5cf6"),
  },
];

export const featuredProjectSlugs = [
  "codespirit",
  "expertkaro",
  "microkahani",
  "accessway",
  "vithopia",
] as const;

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
