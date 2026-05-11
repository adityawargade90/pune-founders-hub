// Mock data for BPT — replace with real hooks/services later

export type MilestoneType =
  | "LAUNCHED"
  | "FIRST_CUSTOMER"
  | "REVENUE"
  | "FUNDRAISE"
  | "HIRE"
  | "PIVOT"
  | "LESSON"
  | "AMA";

export const milestoneMeta: Record<MilestoneType, { label: string; emoji: string; tone: string }> = {
  LAUNCHED: { label: "Launched", emoji: "🚀", tone: "bg-brand-soft text-brand" },
  FIRST_CUSTOMER: { label: "First Customer", emoji: "🎉", tone: "bg-mint/15 text-mint" },
  REVENUE: { label: "Revenue", emoji: "💰", tone: "bg-amber/15 text-amber" },
  FUNDRAISE: { label: "Fundraise", emoji: "💎", tone: "bg-violet/15 text-violet" },
  HIRE: { label: "Hire", emoji: "🤝", tone: "bg-sky/15 text-sky" },
  PIVOT: { label: "Pivot", emoji: "🔄", tone: "bg-pink/15 text-pink" },
  LESSON: { label: "Lesson", emoji: "💡", tone: "bg-amber/15 text-amber" },
  AMA: { label: "AMA", emoji: "💬", tone: "bg-brand-soft text-brand" },
};

export const mockUser = {
  id: "u1",
  name: "Aarav Mehta",
  handle: "aarav",
  avatarColor: "#7c3aed",
  bio: "Building HealthSync — patient records for clinics. Pune local.",
  role: "Founder",
  domain: "HealthTech",
  city: "Pune",
};

export const mockPosts = [
  {
    id: "p1",
    type: "FIRST_CUSTOMER" as MilestoneType,
    author: { name: "Priya Joshi", handle: "priya", color: "#ec4899", role: "CEO @ FinNest" },
    content:
      "We closed our first paying customer today — a Kothrud-based CA firm. 6 months of cold outreach finally paid off. Pune founders, never give up. 🙏",
    createdAt: "2h ago",
    reactions: { celebrate: 42, relate: 18, tellMore: 7 },
    comments: 12,
  },
  {
    id: "p2",
    type: "LAUNCHED" as MilestoneType,
    author: { name: "Rohan Kale", handle: "rohan", color: "#10b981", role: "Founder @ Stackly" },
    content:
      "Stackly is LIVE on Product Hunt today! It's our no-code workflow builder for Indian SMBs. Would love your support 🚀",
    createdAt: "5h ago",
    reactions: { celebrate: 128, relate: 22, tellMore: 14 },
    comments: 34,
  },
  {
    id: "p3",
    type: "LESSON" as MilestoneType,
    author: { name: "Sneha Iyer", handle: "sneha", color: "#f59e0b", role: "Co-founder @ Lumen" },
    content:
      "Lesson from this week: hire slow, fire fast. We onboarded an engineer who looked great on paper but didn't ship. Painful but necessary call.",
    createdAt: "1d ago",
    reactions: { celebrate: 8, relate: 86, tellMore: 19 },
    comments: 28,
  },
  {
    id: "p4",
    type: "REVENUE" as MilestoneType,
    author: { name: "Vikram Shah", handle: "vikram", color: "#06b6d4", role: "Founder @ MealMate" },
    content: "₹5L MRR this month! 🥳 12 months ago we had ₹0. Thank you Pune community for early feedback.",
    createdAt: "1d ago",
    reactions: { celebrate: 210, relate: 16, tellMore: 22 },
    comments: 41,
  },
];

export const mockSpaces = [
  { id: "healthtech", name: "HealthTech", icon: "🩺", members: 234, color: "pink", desc: "Building the future of healthcare in India." },
  { id: "fintech", name: "FinTech", icon: "💸", members: 180, color: "mint", desc: "Payments, lending, and financial infrastructure." },
  { id: "aiml", name: "AI / ML", icon: "🧠", members: 312, color: "violet", desc: "Applied AI for Indian use-cases." },
  { id: "saas", name: "SaaS", icon: "⚙️", members: 420, color: "amber", desc: "B2B SaaS for global and Indian markets." },
  { id: "edtech", name: "EdTech", icon: "📚", members: 156, color: "sky", desc: "Reimagining education in Bharat." },
  { id: "d2c", name: "D2C", icon: "🛍️", members: 198, color: "pink", desc: "Direct-to-consumer brands from Pune." },
  { id: "climate", name: "Climate", icon: "🌱", members: 88, color: "mint", desc: "Sustainability and climate-tech." },
  { id: "devtools", name: "Dev Tools", icon: "🛠️", members: 142, color: "violet", desc: "Tools for developers, by developers." },
];

export const mockBoard = [
  {
    id: "b1",
    title: "Looking for technical co-founder",
    author: "Ananya Rao",
    role: "Founder seeking CTO",
    domain: "HealthTech",
    type: "co-founder",
    description: "Solo non-tech founder. Have 3 LOIs from clinics. Need a hands-on tech lead with backend + ML experience.",
    skills: ["Node.js", "Python", "ML"],
    posted: "2d ago",
  },
  {
    id: "b2",
    title: "Frontend dev for early-stage FinTech",
    author: "Karan Patel",
    role: "CEO @ FinNest",
    domain: "FinTech",
    type: "hire",
    description: "Looking for a React engineer to join us full-time. Pre-seed funded. Equity + market salary.",
    skills: ["React", "TypeScript", "TailwindCSS"],
    posted: "3d ago",
  },
  {
    id: "b3",
    title: "Designer for SaaS dashboard",
    author: "Meera Desai",
    role: "Founder @ FlowOps",
    domain: "SaaS",
    type: "freelance",
    description: "Need a Pune-based product designer for 4-6 week engagement. Dashboard + design system.",
    skills: ["Figma", "Product Design"],
    posted: "5d ago",
  },
  {
    id: "b4",
    title: "Beta testers for AI writing assistant",
    author: "Tanvi Sharma",
    role: "Founder @ Inkly",
    domain: "AI / ML",
    type: "beta",
    description: "Looking for 20 Pune founders to test our AI assistant. Free Pro access for 6 months.",
    skills: ["Feedback", "Content"],
    posted: "1w ago",
  },
];

export const mockEvents = [
  {
    id: "e1",
    title: "Founder Connect Meetup #3",
    date: "Sat, 25 May 2025",
    time: "5:00 PM",
    venue: "WeWork Vimaan Nagar, Pune",
    desc: "Casual evening of founder stories, demos, and chai. Limited to 40 founders.",
    going: 28,
    color: "brand",
  },
  {
    id: "e2",
    title: "Build in Public — Open Mic",
    date: "Wed, 5 Jun 2025",
    time: "7:00 PM",
    venue: "91springboard, Baner",
    desc: "5-min lightning talks from Pune builders. Sign up to speak.",
    going: 18,
    color: "mint",
  },
  {
    id: "e3",
    title: "FinTech Roundtable",
    date: "Sat, 15 Jun 2025",
    time: "11:00 AM",
    venue: "Online + IISER Pune",
    desc: "Closed-door discussion with 12 FinTech founders. RBI updates + GTM playbooks.",
    going: 12,
    color: "amber",
  },
];

export const mockThreads = [
  { id: "t1", name: "Priya Joshi", last: "Yeah, let's grab coffee next week!", time: "12m", unread: 2, color: "#ec4899" },
  { id: "t2", name: "Rohan Kale", last: "Sent the deck — let me know.", time: "2h", unread: 0, color: "#10b981" },
  { id: "t3", name: "Sneha Iyer", last: "Thanks for the intro 🙏", time: "1d", unread: 0, color: "#f59e0b" },
  { id: "t4", name: "Vikram Shah", last: "Can you share that hiring framework?", time: "3d", unread: 1, color: "#06b6d4" },
];
