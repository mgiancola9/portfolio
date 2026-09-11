export const site = {
  name: "Michael Giancola",
  // One line that has to work for software, forward-deployed, and ML recruiters at once.
  tagline: "I build systems that ship to real users.",
  intro:
    "Mechatronics Engineering & Management at McMaster, graduating April 2027. Most recently an ML engineer intern on Shopify's Merchant Risk team, where I rebuilt fraud-model monitoring and cut a pipeline's compute cost from $40K to $3K a year. On the side I co-founded a proptech startup that automates roofing lead generation end to end — trained Meta ad campaigns bring homeowners in, a satellite roof estimate qualifies them, and verified leads route straight to subscribed contractors in their service area.",
  location: "Toronto / Richmond Hill, ON",
  email: "mgiancola9@gmail.com",
  phone: "(647) 919-6419",
  github: "https://github.com/mgiancola9",
  linkedin: "https://www.linkedin.com/in/michael-justin-giancola",
  resume: "/michael-giancola-resume.pdf",
  url: "https://michaelgiancola.com",
};

export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  href?: string;
  bullets: string[];
};

export const experience: Role[] = [
  {
    company: "Shopify",
    title: "Machine Learning Engineer Intern — Merchant Risk",
    period: "May 2026 – Aug 2026",
    location: "Toronto, ON",
    bullets: [
      "Owned monitoring for a real-time, transaction-level fraud model; rebuilt its dashboard into the team's primary diagnostic surface, used to triage multiple production incidents.",
      "Re-architected the core pre-auth feature pipeline as an incremental dbt model, replacing a full 50-column Airflow reprocess and cutting compute cost from $40K to $3K per year.",
      "Built batch monitoring and a dbt model for the card-cashing fraud detection model, reducing training/serving feature skew across key features.",
    ],
  },
  {
    company: "GTA Roofing Estimates",
    title: "Co-Founder",
    period: "Sept 2025 – Present",
    location: "Toronto, ON (Remote)",
    href: "https://gtaroofingestimates.ca",
    bullets: [
      "Co-founded a registered Canadian corporation automating roofing lead generation end to end — trained Meta ad campaigns to satellite-measured homeowner to service-area-matched contractor — generating 100+ leads at 80% phone-qualified conversion for contractors on paid monthly subscriptions.",
      "Designed the backend end-to-end: Supabase Postgres with row-level security, Twilio SMS verification, and n8n orchestration routing verified leads in real time.",
      "Architected the submission-to-live-lead pipeline to run unattended at scale, with zero manual intervention on routing.",
    ],
  },
  {
    company: "RBC",
    title: "Technical Systems Analyst — Data & AI",
    period: "May 2025 – Aug 2025",
    location: "Toronto, ON",
    bullets: [
      "Supported development of RBC's enterprise-wide Safe AI Adoption Platform, enabling responsible onboarding of 500+ AI model and LLM use cases across all lines of business.",
      "Automated the disaster recovery planning process using autonomous AI agents, driven by a fetched database schema of running applications and their repository architecture context.",
    ],
  },
  {
    company: "RBC",
    title: "Software Developer Intern — DevOps",
    period: "May 2024 – Apr 2025",
    location: "Toronto, ON",
    bullets: [
      "Migrated new acquisitions onto RBC's internal platforms, scaling microservices to accelerate delivery for 4,000+ developers.",
      "Built a scheduled OpenShift service parsing employee credentials from Elasticsearch to measure GitHub Copilot activity, reclaiming inactive licenses via the Chorus API and cutting costs by $50K/month.",
      "Developed a full-stack app surfacing hosts, processes, and services per application from Dynatrace for real-time monitoring.",
    ],
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "TypeScript / JavaScript", "SQL", "C++", "C", "Bash", "R", "Verilog"] },
  { group: "ML & Data", items: ["PyTorch", "TensorFlow", "scikit-learn", "pandas", "dbt", "Airflow", "PostgreSQL", "MySQL", "FlinkSQL"] },
  { group: "Web & Infra", items: ["React", "Next.js", "Supabase", "Docker", "GitHub Actions", "OpenShift", "Vercel"] },
  { group: "Hardware", items: ["STM32", "Microcontroller Interfacing", "ASIC Design", "Multisim", "MATLAB"] },
];

export const education = {
  school: "McMaster University",
  degree: "B.Eng Mechatronics Engineering & Management",
  period: "Expected April 2027",
  detail: "GPA 3.8 · Enactus McMaster · Men's Varsity Soccer (2021)",
};
