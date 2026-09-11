export type Category = "product" | "ml" | "embedded" | "opensource";

export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  role?: string;
  period?: string;
  category: Category;
  tags: string[];
  links: ProjectLink[];
  featured?: boolean;
  /** Drop a file in public/projects/ and point here, e.g. "/projects/trayce.png". */
  image?: string;
  imageAlt?: string;
  /** Case-study body. Kept short on purpose — recruiters skim. */
  problem: string;
  approach: string[];
  result: string;
};

export const CATEGORY_LABELS: Record<Category, string> = {
  product: "Product",
  ml: "ML & Data",
  embedded: "Embedded",
  opensource: "Open Source",
};

export const projects: Project[] = [
  {
    slug: "gta-roofing-estimates",
    image: "/projects/gta-roofing-estimates.png",
    imageAlt: "The GTA Roofing Estimates instant-quote flow",
    title: "GTA Roofing Estimates",
    tagline:
      "Satellite-measured roof estimates for Toronto-area homeowners. 100+ leads generated at an 80% phone-qualified conversion rate.",
    role: "Co-Founder",
    period: "Sept 2025 – Present",
    category: "product",
    tags: ["Next.js 15", "Supabase", "Google Solar API", "Twilio", "n8n", "PostgreSQL"],
    links: [
      { label: "Live site", href: "https://gtaroofingestimates.ca" },
      { label: "GitHub", href: "https://github.com/mgiancola9/gta-roofing-estimates" },
    ],
    featured: true,
    problem:
      "Roofing quotes in the GTA are guesswork. Homeowners sit through multiple in-person visits to get wildly different numbers, and contractors burn time quoting leads that were never going to convert.",
    approach: [
      "Measured roof area, pitch, and facet count directly from satellite imagery via the Google Solar API, so an estimate needs nothing but an address.",
      "Built a transparent pricing model on top of the measurements — squares, waste allowance scaled to roof complexity, material cost bands, and pitch and location multipliers.",
      "Designed the backend end-to-end: Supabase Postgres with row-level security on lead data, Twilio SMS verification to confirm real homeowners, and n8n orchestration routing verified leads to contractor partners in real time.",
      "Architected the full submission-to-live-lead pipeline to run unattended, with no manual intervention on routing.",
    ],
    result:
      "A live proptech product serving the Greater Toronto Area. 100+ leads generated with 80% converting to phone-qualified opportunities, delivering estimates in about 60 seconds instead of days.",
  },
  {
    slug: "trayce",
    image: "/projects/trayce.png",
    imageAlt: "The Trayce hospital food-delivery dashboard",
    title: "Trayce",
    tagline:
      "A dashboard helping hospitals optimize patient food delivery and cut waste. 3rd place at the Enactus × Canadian Tire Environmental Sustainability Challenge, 2025.",
    period: "2025",
    category: "product",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Data Visualization"],
    links: [{ label: "GitHub", href: "https://github.com/mgiancola9/trayce-dashboard" }],
    featured: true,
    problem:
      "Hospital food service runs on fixed schedules that ignore what patients actually eat. Trays go out late, come back untouched, and the resulting waste is both an environmental cost and a patient-care problem.",
    approach: [
      "Built an operations dashboard giving food-service staff a single view of delivery timing and consumption patterns across wards.",
      "Surfaced the waste and routing signals that were previously buried in paper logs, so schedules could be adjusted against real demand.",
    ],
    result:
      "Placed 3rd in the 2025 Enactus Canadian Tire Environmental Sustainability Challenge, competing nationally on measurable environmental impact.",
  },
  {
    slug: "nhl-props-model",
    image: "/projects/nhl-props-model.png",
    imageAlt: "The NHL props model's +EV board",
    title: "NHL Player Props Model",
    tagline:
      "End-to-end pipeline that ingests NHL and advanced-analytics data, predicts player props with calibrated gradient-boosted models, and flags +EV positions against live sportsbook and prediction-market prices.",
    category: "ml",
    tags: ["Python", "XGBoost", "DuckDB", "scikit-learn", "Kelly Criterion", "pandas"],
    links: [],
    featured: true,
    problem:
      "Sportsbook player-prop lines are softer than game lines, but finding the soft ones requires a probability estimate good enough to trust against a price — and a raw classifier score is not a probability. Edges only show up if the model is calibrated and the pipeline can run against live markets before lines move.",
    approach: [
      "Built a DuckDB feature warehouse ingesting the NHL API (schedules, per-game skater and goalie logs, shift charts) alongside MoneyPuck advanced analytics (xG, Corsi, Fenwick, danger-zone and on-ice splits).",
      "Trained separate XGBoost classifiers for goals, assists, and points, each paired with a dedicated probability calibrator, plus a standalone regressor for shots on goal.",
      "Layered in situational signals the season averages miss — scraped confirmed lineups, shift-level usage, and a playoff adjustment.",
      "Priced model probabilities against live DraftKings and FanDuel odds to compute expected value per play, sized positions by Kelly fraction, and bucketed plays into variance tiers.",
      "Wrote a grading and PnL harness that settles each logged play against the real box score, so every recommendation is scored after the fact instead of being taken on faith.",
    ],
    result:
      "A working research loop: data lands, models retrain, plays get priced against live markets, and results are graded automatically against box scores. The grading harness is the point — it makes every recommendation falsifiable rather than something to argue about after the fact.",
  },
  {
    slug: "nfl-predictions",
    image: "/projects/nfl-predictions.png",
    imageAlt: "NFL model evaluation output",
    title: "NFL Predictions Model",
    tagline:
      "Machine-learning models predicting NFL game outcomes from historical team metrics and betting market data, 2020–2025.",
    category: "ml",
    tags: ["Python", "XGBoost", "scikit-learn", "pandas"],
    links: [{ label: "GitHub", href: "https://github.com/mgiancola9/nfl-predictions" }],
    featured: true,
    problem:
      "Betting markets are efficient enough that naive models lose money. The question is whether team-level performance metrics carry signal the closing line has not already absorbed.",
    approach: [
      "Assembled six seasons of team performance metrics and betting market data into a single modelling dataset.",
      "Trained gradient-boosted tree models (XGBoost) on game outcomes, using the betting line as both a feature and a benchmark to beat.",
    ],
    result:
      "A reproducible pipeline for evaluating predictive signal against the market baseline across the 2020–2025 seasons.",
  },
  {
    slug: "finos-git-proxy",
    title: "finos/git-proxy",
    tagline:
      "Contributed fixes merged upstream into FINOS git-proxy, the Fintech Open Source Foundation's tool for governing pushes to public repositories.",
    role: "Contributor",
    period: "April 2025",
    category: "opensource",
    tags: ["TypeScript", "Open Source", "FINOS", "Cypress"],
    links: [
      { label: "Merged commits", href: "https://github.com/finos/git-proxy/commits?author=mgiancola9" },
      { label: "Project", href: "https://github.com/finos/git-proxy" },
    ],
    problem:
      "git-proxy sits between developers and public git remotes so regulated institutions can review what leaves the building. Working with it inside RBC surfaced two defects worth fixing upstream rather than patching locally.",
    approach: [
      "Fixed a readFileSync directory issue breaking the Cypress test suite, and removed the unused import behind it.",
      "Added a TLS configuration object so the proxy could operate behind enterprise certificate interception.",
    ],
    result:
      "Both commits merged into the upstream FINOS repository, landing through maintainer review rather than staying in an internal fork.",
  },
  {
    slug: "microcontroller-casino",
    image: "/projects/microcontroller-casino.png",
    imageAlt: "The STM32 casino build on the bench",
    title: "Microcontroller Casino",
    tagline:
      "Blackjack and Roulette running on bare-metal STM32, built from the circuit up.",
    category: "embedded",
    tags: ["C++", "STM32", "Embedded Systems", "Circuit Design"],
    links: [{ label: "GitHub", href: "https://github.com/mgiancola9/Casino_Project" }],
    problem:
      "Implementing playable casino games on a microcontroller means fitting game state, input handling, and display output into a bare-metal environment with no operating system underneath.",
    approach: [
      "Wrote the game logic in C++ against the STM32 peripheral interfaces directly.",
      "Designed and breadboarded the supporting circuitry for input and display.",
    ],
    result:
      "Two fully playable games running on hardware, covering the full path from schematic to firmware.",
  },
  {
    slug: "circuits-design",
    title: "Circuits Design Project",
    tagline:
      "Analog and digital circuit design and simulation in Multisim.",
    category: "embedded",
    tags: ["Multisim", "Electronic Circuits", "Digital Circuit Design"],
    links: [],
    problem:
      "Designing circuits that meet a specification on paper is straightforward; validating that they hold up under simulated real-world conditions is where designs usually fail.",
    approach: [
      "Designed and simulated analog and digital circuits in Multisim against target specifications.",
    ],
    result:
      "Verified designs meeting specification under simulation.",
  },
];

export const featured = projects.filter((p) => p.featured);
export const bySlug = (slug: string) => projects.find((p) => p.slug === slug);
