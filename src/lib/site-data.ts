import heroWorkspace from "@/assets/hero-workspace.jpg";
import abstractTech from "@/assets/abstract-tech.jpg";
import projectDashboard from "@/assets/project-dashboard.jpg";
import projectAi from "@/assets/project-ai.jpg";
import projectCrm from "@/assets/project-crm.jpg";
import projectBooking from "@/assets/project-booking.jpg";
import teamCollab from "@/assets/team-collab.jpg";
import developer from "@/assets/developer.jpg";
import office from "@/assets/office.jpg";
import indRetail from "@/assets/ind-retail.jpg";
import indHealth from "@/assets/ind-health.jpg";
import indFinance from "@/assets/ind-finance.jpg";

export const images = {
  heroWorkspace,
  abstractTech,
  projectDashboard,
  projectAi,
  projectCrm,
  projectBooking,
  teamCollab,
  developer,
  office,
  indRetail,
  indHealth,
  indFinance,
};

export const navLinks = [
  { label: "Home", href: "/#top" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Industries", href: "/#industries" },
  { label: "Insights", href: "/#insights" },
];

export const capabilities = [
  { label: "Software Development", icon: "Code2" },
  { label: "AI Solutions", icon: "Sparkles" },
  { label: "Business Systems", icon: "Building2" },
  { label: "Automation", icon: "Workflow" },
  { label: "Analytics", icon: "BarChart3" },
  { label: "Digital Experiences", icon: "Palette" },
];

export const pillars = [
  {
    title: "Strategy",
    description: "Understand the business before building.",
    icon: "Compass",
  },
  {
    title: "Design",
    description: "Create intuitive digital experiences.",
    icon: "PenTool",
  },
  {
    title: "Technology",
    description: "Build scalable and reliable systems.",
    icon: "Cpu",
  },
];

export const services = [
  {
    title: "Custom Software",
    description: "Business-specific applications and platforms.",
    icon: "Code2",
    image: images.developer,
    featured: true,
  },
  {
    title: "Web Development",
    description: "Modern websites and web applications.",
    icon: "Globe",
  },
  {
    title: "Business Systems",
    description: "CRM, management, operations, and workflow platforms.",
    icon: "Building2",
    image: images.projectCrm,
  },
  {
    title: "AI Solutions",
    description: "AI assistants, intelligent automation, and data-driven systems.",
    icon: "Sparkles",
    image: images.projectAi,
    featured: true,
  },
  {
    title: "Analytics",
    description: "Dashboards, reporting, and business intelligence.",
    icon: "BarChart3",
  },
  {
    title: "Automation",
    description: "Streamline repetitive business processes.",
    icon: "Workflow",
  },
  {
    title: "UI/UX Design",
    description: "Modern and intuitive digital experiences.",
    icon: "PenTool",
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud-based applications and infrastructure.",
    icon: "Cloud",
  },
] as const;

export const projects = [
  {
    name: "Business Management Platform",
    category: "Platform",
    description:
      "A single operational hub bringing projects, people, and reporting into one connected workspace.",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: images.projectDashboard,
    alt: "Business management dashboard with revenue charts and KPI cards on a laptop",
  },
  {
    name: "AI Business Assistant",
    category: "AI",
    description:
      "A conversational assistant that answers operational questions and drafts work from internal data.",
    tech: ["AI", "TypeScript", "Serverless"],
    image: images.projectAi,
    alt: "AI assistant chat interface with conversation and sidebar navigation",
  },
  {
    name: "Analytics Dashboard",
    category: "Data",
    description:
      "Live KPI reporting that turns scattered spreadsheets into decisions leadership can act on.",
    tech: ["Analytics", "APIs", "Cloud"],
    image: images.projectDashboard,
    alt: "Analytics dashboard showing charts, growth curves and key metrics",
  },
  {
    name: "Customer Management Platform",
    category: "CRM",
    description:
      "Pipeline, contacts, and follow-ups in one place so teams never lose track of a customer.",
    tech: ["React", "Supabase", "Automation"],
    image: images.projectCrm,
    alt: "Customer relationship management interface listing customers and deal metrics",
  },
  {
    name: "Inventory Management System",
    category: "Operations",
    description:
      "Real-time stock visibility with reorder signals across locations and suppliers.",
    tech: ["Node.js", "PostgreSQL", "APIs"],
    image: images.projectDashboard,
    alt: "Inventory and stock management interface with product tables",
  },
  {
    name: "Booking Platform",
    category: "Mobile",
    description:
      "Appointment scheduling with reminders, availability rules, and mobile-first booking.",
    tech: ["React", "Serverless", "Cloud"],
    image: images.projectBooking,
    alt: "Mobile appointment booking application shown on a smartphone",
  },
];

export const industries = [
  { name: "Retail", description: "Commerce, stock, and store operations.", image: images.indRetail },
  { name: "Healthcare", description: "Patient flow and clinical admin tools.", image: images.indHealth },
  { name: "Education", description: "Learning, enrolment, and reporting systems.", image: images.office },
  { name: "Finance", description: "Data-heavy reporting and compliance workflows.", image: images.indFinance },
  { name: "Hospitality", description: "Bookings, service, and guest experience.", image: images.projectBooking },
  { name: "Professional Services", description: "Client delivery and project visibility.", image: images.teamCollab },
  { name: "Logistics", description: "Movement, tracking, and route operations.", image: images.abstractTech },
  { name: "Startups", description: "From first prototype to scalable product.", image: images.developer },
];

export const techStack = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "APIs", "Serverless"] },
  { group: "Database", items: ["PostgreSQL", "Supabase"] },
  { group: "AI & Data", items: ["AI", "Machine Learning", "Analytics", "Automation"] },
  { group: "Cloud", items: ["Cloud deployment", "Scalable infrastructure", "API integrations"] },
];

export const differentiators = [
  { title: "Business First", description: "Technology starts with understanding the problem.", icon: "Target" },
  { title: "Modern Technology", description: "Use current and scalable technologies.", icon: "Cpu" },
  { title: "Custom Solutions", description: "Build around specific requirements.", icon: "Puzzle" },
  { title: "Intelligent Automation", description: "Reduce repetitive processes.", icon: "Workflow" },
  { title: "Data Driven", description: "Turn information into useful insights.", icon: "BarChart3" },
  { title: "Scalable", description: "Solutions designed for future growth.", icon: "TrendingUp" },
];

export const processSteps = [
  { no: "01", title: "Discover", description: "Map the problem, users, and constraints." },
  { no: "02", title: "Strategize", description: "Agree scope, priorities, and success measures." },
  { no: "03", title: "Design", description: "Shape flows and interfaces people understand." },
  { no: "04", title: "Build", description: "Engineer in short, reviewable increments." },
  { no: "05", title: "Test", description: "Validate quality, performance, and edge cases." },
  { no: "06", title: "Launch", description: "Release with monitoring and a rollback plan." },
  { no: "07", title: "Scale", description: "Extend as usage and business needs grow." },
];

export const metrics = [
  { value: 40, suffix: "%", label: "Potential reduction in repetitive processes" },
  { value: 3, suffix: "×", label: "Faster access to business information" },
  { value: 24, suffix: "/7", label: "Digital availability" },
  { value: 360, suffix: "°", label: "Business visibility" },
];

export const testimonials = [
  {
    quote:
      "They started with our operations, not with the technology. The system we ended up with matches how the team actually works.",
    name: "Client Name",
    role: "Operations Director",
    company: "Company Placeholder",
  },
  {
    quote:
      "Reporting that used to take a full day is now available the moment we need it. The difference in decision speed is real.",
    name: "Client Name",
    role: "Managing Director",
    company: "Company Placeholder",
  },
  {
    quote:
      "Clear communication throughout, and a product our customers find genuinely easy to use.",
    name: "Client Name",
    role: "Head of Product",
    company: "Company Placeholder",
  },
];

export const insights = [
  {
    category: "AI",
    title: "How AI Is Changing Business Operations",
    excerpt:
      "Where intelligent systems genuinely remove work, and where they simply add noise.",
    image: images.projectAi,
  },
  {
    category: "Data",
    title: "Why Modern Businesses Need Better Data Visibility",
    excerpt:
      "Scattered spreadsheets hide the numbers that should drive weekly decisions.",
    image: images.projectDashboard,
  },
  {
    category: "Design",
    title: "Designing Digital Products People Actually Enjoy Using",
    excerpt: "Adoption is a design outcome long before it is a training problem.",
    image: images.teamCollab,
  },
];

export const galleryItems = [
  { src: images.projectDashboard, alt: "Analytics dashboard product mockup", span: "tall" },
  { src: images.teamCollab, alt: "Design team reviewing wireframes in a meeting", span: "wide" },
  { src: images.projectAi, alt: "AI assistant interface mockup", span: "normal" },
  { src: images.office, alt: "Modern glass-walled office meeting space", span: "normal" },
  { src: images.projectCrm, alt: "Customer management platform interface", span: "wide" },
  { src: images.developer, alt: "Developer writing code on multiple monitors", span: "tall" },
  { src: images.projectBooking, alt: "Mobile booking application interface", span: "normal" },
  { src: images.abstractTech, alt: "Abstract digital network visual", span: "normal" },
];

export const contactInfo = {
  email: "hello@techsolutions.example",
  phone: "+1 (000) 000-0000",
  address: "Suite 200, Innovation House, Your City",
  hours: [
    { day: "Monday – Friday", time: "9:00 – 18:00" },
    { day: "Saturday", time: "By appointment" },
    { day: "Sunday", time: "Closed" },
  ],
};
