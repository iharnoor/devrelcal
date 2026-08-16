import type { Topic } from "./topics";

export type EventCategory = "conference" | "meetup" | "hackathon";
export type EventStatus = "confirmed" | "tentative";

export interface CalEvent {
  id: string;
  name: string;
  category: EventCategory;
  status: EventStatus;
  dateLabel: string;
  /** ISO date used for sorting inside a month bucket — the event's start date. */
  sortDate: string;
  /** ISO date the event ends, for multi-day events. Defaults to sortDate when omitted. */
  endDate?: string;
  /** "YYYY-MM" bucket this event is grouped under. */
  month: string;
  location: string;
  description: string;
  sourceUrl: string;
  sourceLabel: string;
  note?: string;
  /** RAG / vector-DB / GraphRAG / agent-memory relevance — HydraDB pitch or inspiration fit. */
  topics?: Topic[];
  topicNote?: string;
}

export interface RecurringSeries {
  id: string;
  name: string;
  category: EventCategory;
  cadence: string;
  location: string;
  description: string;
  sourceUrl: string;
  sourceLabel: string;
  watchNote?: string;
}

export interface PastEvent {
  id: string;
  name: string;
  dateLabel: string;
  location: string;
  note?: string;
}

/**
 * Confirmed research date: 2026-08-16. Dates and venues sourced from
 * organizer domains — see sourceUrl on each event.
 */
const scrapedEvents: CalEvent[] = [
  {
    id: "ray-summit-2026",
    name: "Ray Summit 2026",
    category: "conference",
    status: "confirmed",
    dateLabel: "Aug 24–26",
    sortDate: "2026-08-24",
    endDate: "2026-08-26",
    month: "2026-08",
    location: "San Francisco",
    description:
      "Anyscale's distributed-AI conference — training day Aug 24, keynotes/breakouts Aug 25–26. Heavy focus on training foundation models and LLM/RL workloads on Ray.",
    sourceUrl: "https://www.anyscale.com/ray-summit/2026",
    sourceLabel: "anyscale.com",
  },
  {
    id: "ai-infra-summit-2026",
    name: "AI Infra Summit 2026",
    category: "conference",
    status: "confirmed",
    dateLabel: "Sep 15–17",
    sortDate: "2026-09-15",
    endDate: "2026-09-17",
    month: "2026-09",
    location: "Santa Clara Convention Center",
    description:
      "Infra-focused AI conference with an attached hybrid hackathon (online heats + on-site finals).",
    sourceUrl: "https://www.ai-infra-summit.com/",
    sourceLabel: "ai-infra-summit.com",
    topics: ["rag", "vector-db"],
    topicNote:
      "General AI infra conference — retrieval/vector infra is likely one track among compute/inference/networking, not the core focus. Confirm the agenda closer to the date before pitching.",
  },
  {
    id: "openai-devday-2026",
    name: "OpenAI DevDay 2026",
    category: "conference",
    status: "confirmed",
    dateLabel: "Sep 29",
    sortDate: "2026-09-29",
    month: "2026-09",
    location: "Fort Mason, San Francisco",
    description:
      "OpenAI's flagship developer conference — technical sessions, hands-on demos, workshops. Keynote livestreamed.",
    sourceUrl: "https://openai.com/index/devday-2026/",
    sourceLabel: "openai.com",
  },
  {
    id: "the-ai-conference-2026",
    name: "The AI Conference 2026",
    category: "conference",
    status: "confirmed",
    dateLabel: "Sep 29–Oct 1",
    sortDate: "2026-09-29",
    endDate: "2026-10-01",
    month: "2026-09",
    location: "Pier 48, San Francisco",
    description:
      "Vendor-neutral technical conference on AGI, LLMs, agentic AI, and infra. ~5,500 attendees, 120+ speakers.",
    sourceUrl: "https://aiconference.com/",
    sourceLabel: "aiconference.com",
  },
  {
    id: "a16z-tech-week-2026",
    name: "a16z Tech Week",
    category: "conference",
    status: "confirmed",
    dateLabel: "Oct 5–11",
    sortDate: "2026-10-05",
    endDate: "2026-10-11",
    month: "2026-10",
    location: "San Francisco (citywide)",
    description:
      "Not a single venue — an ecosystem of independently-hosted pitch nights, workshops, hackathons, founder dinners, and themed meetups across SF for a week.",
    sourceUrl: "https://www.tech-week.com/",
    sourceLabel: "tech-week.com",
  },
  {
    id: "open-source-ai-week-2026",
    name: "Open Source AI Week",
    category: "conference",
    status: "tentative",
    dateLabel: "Oct (exact dates TBA)",
    sortDate: "2026-10-18",
    month: "2026-10",
    location: "Bay Area (inaugural 2025 edition was SF)",
    description:
      "Linux Foundation / PyTorch event — inaugural edition ran Oct 18–26, 2025. No 2026 dates published yet; included here as an inferred annual recurrence, not a confirmed booking.",
    sourceUrl: "https://events.linuxfoundation.org/open-source-ai-week/",
    sourceLabel: "events.linuxfoundation.org",
    note: "Unconfirmed — check source before adding to your own calendar",
  },
  {
    id: "cerebral-valley-summit-2026",
    name: "Cerebral Valley AI Summit — San Francisco",
    category: "conference",
    status: "tentative",
    dateLabel: "Nov 12",
    sortDate: "2026-11-12",
    month: "2026-11",
    location: "San Francisco (invite-only; venue TBA)",
    description:
      "Invite-only summit with on-stage conversations featuring CEOs from Anthropic, xAI, Vercel, Replit, and top VCs.",
    sourceUrl: "https://www.cerebralvalley.com/",
    sourceLabel: "cerebralvalley.com",
    note: "Invite-only; exact venue not yet published",
  },
  {
    id: "ai-infra-summit-hackathon-2026",
    name: "AI Infra Summit Hackathon",
    category: "hackathon",
    status: "confirmed",
    dateLabel: "Sep 15–17",
    sortDate: "2026-09-15",
    endDate: "2026-09-17",
    month: "2026-09",
    location: "Santa Clara Convention Center (hybrid)",
    description:
      "Runs alongside AI Infra Summit — online heats with on-site finals at the summit venue.",
    sourceUrl: "https://lablab.ai/ai-hackathons/ai-infra-summit-hackathon",
    sourceLabel: "lablab.ai",
  },
  // Sourced live from Luma's San Francisco Bay Area discover feed, refreshed
  // daily through 2026-08-16.
  // (api.luma.com/discover, place discplace-BDj7GNbGlsF7Cka), filtered to
  // AI/agent-relevant listings. This feed only surfaces ~6 weeks out, so
  // coverage here runs through mid-October — re-scrape luma.com/sf for
  // anything past that. Added The AI Dev Stack (Aug 18), Durable AI: Agent
  // Context is Everything (Aug 26), and Open Source AI Summit SF (Aug 28).
  // Still skipping Physical AI Sprint / Rally / Embodied AI Night, Claude
  // Science Demo Night, Grok Bot build nights, Who Will Own The Intelligence
  // Layer mixer, Salt Bread Maxxing, AI Infra Kebab, Lumafield, CorpGov,
  // WorkOS Demo Night (not AI-framed), etc.
  {
    id: "luma-moonlight-gemini-hack",
    name: "Moonlighting with Gemini + Exa — 3 Hour Hack",
    category: "hackathon",
    status: "confirmed",
    dateLabel: "Aug 17",
    sortDate: "2026-08-17",
    month: "2026-08",
    location: "WorkOS, 660 Market St, San Francisco",
    description:
      "Invite-only Build Club evening hack lab with Gemini and Exa — three hours for AI engineers and technical founders to ship a side project (credits, food, and cash prizes for top finishes).",
    sourceUrl: "https://luma.com/buildclub-ua0n",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-modcon-2026",
    name: "ModCon 2026: Compute Unlocked",
    category: "conference",
    status: "confirmed",
    dateLabel: "Aug 18",
    sortDate: "2026-08-18",
    month: "2026-08",
    location: "Grand Hyatt San Francisco",
    description:
      "Modular's developer conference on AI compute — compilers, accelerators, and building on Modular's stack (~300 attendees).",
    sourceUrl: "https://luma.com/modcon",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-cerebras-supernova-2026",
    name: "Cerebras SUPERNOVA 2026",
    category: "conference",
    status: "confirmed",
    dateLabel: "Aug 18",
    sortDate: "2026-08-18",
    month: "2026-08",
    location: "The Midway, 900 Marin St, San Francisco",
    description:
      "Cerebras flagship event for developers, founders, and infra partners — demos and talks around high-throughput AI inference.",
    sourceUrl: "https://luma.com/cerebrassupernova26",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-skyrl-meetup",
    name: "SkyRL Meetup",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Aug 18",
    sortDate: "2026-08-18",
    month: "2026-08",
    location: "San Francisco (Yerba Buena)",
    description:
      "UC Berkeley Sky Lab / Anyscale meetup on SkyRL — open-source agentic reinforcement learning for training and adapting foundation-model agents.",
    sourceUrl: "https://luma.com/y4ahouh6",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-ai-dev-stack",
    name: "The AI Dev Stack: Beyond Code w/ Antimetal, Fireworks, Braintrust & Browserbase",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Aug 18",
    sortDate: "2026-08-18",
    month: "2026-08",
    location: "San Francisco (Union Square)",
    description:
      "Lightning talks and demos from Antimetal, Fireworks, Braintrust, and Browserbase on the AI development stack beyond coding agents — triage, evals, inference, and browser automation.",
    sourceUrl: "https://luma.com/ai-dev-stack",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-sf-database-meetup-aug",
    name: "The SF Database Meetup — August",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Aug 19",
    sortDate: "2026-08-19",
    month: "2026-08",
    location: "PlanetScale, 108 Natoma St, San Francisco",
    description:
      "PlanetScale-hosted lightning talks on data systems — including giving agents SQL, document stores on SQL, and Postgres analytics rewrites.",
    sourceUrl: "https://luma.com/fxqt8zra",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-claude-code-workshop-sf-aug20",
    name: "Claude Code Workshop — San Francisco",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Aug 20",
    sortDate: "2026-08-20",
    month: "2026-08",
    location: "San Francisco",
    description:
      "Hands-on workshop (with Provectus) on orchestrating coding agents with Claude Code — ship something during the session.",
    sourceUrl: "https://luma.com/claude-code-workshop-sf-aug-20",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-open-models-production-agents",
    name: "Open Models, Production Agents: The New Economics of AI-Native Engineering",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Aug 20",
    sortDate: "2026-08-20",
    month: "2026-08",
    location: "San Francisco",
    description:
      "Evening on open models vs closed coding agents for production software engineering — cost/quality tradeoffs with models like Kimi, GLM, and MiniMax.",
    sourceUrl: "https://luma.com/o9tv62y5",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-agents-changing-web-parag",
    name: "Agents Are Changing the Web with Parag Agrawal",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Aug 20",
    sortDate: "2026-08-20",
    month: "2026-08",
    location: "Baseten Clubhouse, San Francisco",
    description:
      "Baseten Heavyweights fireside with Parag Agrawal (Parallel; formerly Twitter CEO/CTO) on how agents are changing the web.",
    sourceUrl: "https://luma.com/sy0mt1m4",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-mistral-vibe-hackathon",
    name: "Mistral Vibe Hackathon",
    category: "hackathon",
    status: "confirmed",
    dateLabel: "Aug 22",
    sortDate: "2026-08-22",
    month: "2026-08",
    location: "San Francisco (venue shared with selected participants)",
    description:
      "One-day Mistral-hosted hackathon (8:30am–8pm) — application-reviewed teams of 1–4; Mistral credits for top finishes.",
    sourceUrl: "https://luma.com/mistral-summer-vibe-hackathon-sf",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-vllm-nvidia-dynamo-meetup",
    name: "vLLM × NVIDIA Dynamo Meetup",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Aug 24",
    sortDate: "2026-08-24",
    month: "2026-08",
    location: "Convene, 100 Stockton / 40 O'Farrell St, San Francisco",
    description:
      "Evening tech talks from the vLLM community and NVIDIA Dynamo on serving LLMs at scale — inference optimization and distributed serving during vLLM conference week.",
    sourceUrl: "https://luma.com/r8o604o0",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-bay-area-dspy-meetup",
    name: "Bay Area DSPy Meetup",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Aug 26",
    sortDate: "2026-08-26",
    month: "2026-08",
    location: "San Francisco",
    description:
      "Quarterly DSPy community meetup — lightning talks on DSPy/GEPA features and optimization tricks for structured LLM programs.",
    sourceUrl: "https://luma.com/61qrnbs7",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-frontier-research-club-agents-prod",
    name: "Bay Area Frontier Research Club #19 — Agents in Production",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Aug 26",
    sortDate: "2026-08-26",
    month: "2026-08",
    location: "Menlo Park, CA",
    description:
      "UC Berkeley researchers present Measuring Agents in Production (ICML 2026 oral), then a fireside on self-improving agents — concrete notes on how production agent systems are built, evaluated, and operated.",
    sourceUrl: "https://luma.com/cx2f0q8r",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-durable-ai-agent-context",
    name: "Durable AI: Agent Context is Everything",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Aug 26",
    sortDate: "2026-08-26",
    month: "2026-08",
    location: "San Francisco",
    description:
      "Temporal-hosted Durable AI meetup on production agent context — talks/demos on giving agents fresh history and fast retrieval (speakers include Retriever AI, Neo4j, PromptQL, and others).",
    sourceUrl: "https://luma.com/durable-ai-august",
    sourceLabel: "luma.com",
    topics: ["agent-memory", "rag"],
  },
  {
    id: "luma-step-sf-festival",
    name: "Step SF 2026: The AI & Tech Startup Festival",
    category: "conference",
    status: "confirmed",
    dateLabel: "Aug 27",
    sortDate: "2026-08-27",
    month: "2026-08",
    location: "900 Marin St, San Francisco",
    description: "Multi-track AI and tech startup festival.",
    sourceUrl: "https://luma.com/StepSF26",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-demo-night-postman-supabase-vercel",
    name: "Demo Night SF: Ship AI Apps with Anthropic + Postman + Supabase + Vercel",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Aug 27",
    sortDate: "2026-08-27",
    month: "2026-08",
    location: "CANOPY Jackson Square, 595 Pacific Ave, San Francisco",
    description:
      "Postman Agents and APIs developer meetup — live demos shipping AI apps with Anthropic, Postman, Supabase, and Vercel.",
    sourceUrl: "https://luma.com/august-SF-supabase-vercel-postman",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-open-source-ai-summit-sf",
    name: "Open Source AI Summit SF",
    category: "conference",
    status: "confirmed",
    dateLabel: "Aug 28",
    sortDate: "2026-08-28",
    month: "2026-08",
    location: "House by Edge & Node, San Francisco",
    description:
      "Buildplanet / NEAR AI half-day seminar on open-source AI frontier work — confirmed speakers include Matt White (PyTorch), Illia Polosukhin (NEAR), and Lukasz Kaiser.",
    sourceUrl: "https://luma.com/buildp-c5h9",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-agentic-ai-night-governance",
    name: "Agentic + AI Night: Multi-Agent Governance and Security",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Sep 1",
    sortDate: "2026-09-01",
    month: "2026-09",
    location: "Terra Gallery, 511 Harrison St, San Francisco",
    description:
      "Multi-track SF meetup on multi-agent governance, security, and observability — coordinating agents (Claude Code, Codex, custom) via the Omnigent meta-harness.",
    sourceUrl: "https://luma.com/agenticaiobsnightsf-9-1",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-agi-house-ai-debates-hackathon",
    name: "The AI Debates Hackathon",
    category: "hackathon",
    status: "confirmed",
    dateLabel: "Sep 5",
    sortDate: "2026-09-05",
    month: "2026-09",
    location: "AGI House SF, 170 St. Germain Ave, San Francisco",
    description:
      "AGI House Saturday hackathon — build a voice agent that debates AI ethics/risk live, then compete in public forum rounds judged by humans.",
    sourceUrl: "https://luma.com/aidebates",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-llama-lounge-26",
    name: "Llama Lounge 26: The AI Startup Event Series @ Microsoft",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Sep 10",
    sortDate: "2026-09-10",
    month: "2026-09",
    location: "Microsoft, 1045 La Avenida St, Mountain View",
    description:
      "AI startup demo-floor evening at Microsoft MV — founders, investors, and corporate AI buyers; registration approval required.",
    sourceUrl: "https://luma.com/llamalounge26",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-open-model-hack",
    name: "Open Model Hack — Gradient × Google DeepMind",
    category: "hackathon",
    status: "confirmed",
    dateLabel: "Sep 12",
    sortDate: "2026-09-12",
    month: "2026-09",
    location: "San Francisco",
    description:
      "Day hack with Gradient and Google DeepMind for engineers and founders building with the latest open models — inference, fine-tuning, and production performance comparisons.",
    sourceUrl: "https://luma.com/openmodelhack",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-agi-house-gpu-energy-agents",
    name: "Energy Optimization of GPUs through Self-Improving Agents",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Sep 22",
    sortDate: "2026-09-22",
    month: "2026-09",
    location: "AGI House SF, 170 St. Germain Ave, San Francisco",
    description:
      "AGI House evening on self-improving agents that tune inference serving for lower energy per request — Traversaal / energy.traversaal.ai architecture deep dive.",
    sourceUrl: "https://luma.com/gpuenergyoptimization",
    sourceLabel: "luma.com",
  },
  // Sourced from Eventbrite's SF Bay Area search (2026-07-17), filtered from
  // several hundred loosely-keyword-matched results down to genuine
  // agent-builder relevance — Eventbrite's own search is much noisier than
  // Luma's for this audience (heavy false-positive rate on words like "rag"
  // matching unrelated events, plus templated paid-training-course spam).
  {
    id: "eventbrite-agentic-ai-workshop",
    name: "Make Agentic AI Work for You — San Francisco",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Aug 18",
    sortDate: "2026-08-18",
    month: "2026-08",
    location: "San Francisco (venue TBD)",
    description: "Workshop on applying agentic AI patterns in practice.",
    sourceUrl: "https://www.eventbrite.com/e/make-agentic-ai-work-for-you-san-francisco-tickets-1993595661289",
    sourceLabel: "eventbrite.com",
  },
  {
    id: "eventbrite-data-streaming-summit",
    name: "Data Streaming Summit 2026",
    category: "conference",
    status: "confirmed",
    dateLabel: "Oct 7",
    sortDate: "2026-10-07",
    month: "2026-10",
    location: "Hotel Nikko San Francisco",
    description: '"The Data Streaming + Agent Infra Conference" — real-time data pipelines feeding agent systems.',
    sourceUrl: "https://www.eventbrite.com/e/data-streaming-summit-2026-the-data-streaming-agent-infra-conference-tickets-1990614661037",
    sourceLabel: "eventbrite.com",
    topics: ["agent-memory"],
    topicNote: "Data-streaming infra for agents, not retrieval-specific — check the agenda for RAG/vector tracks before pitching.",
  },
  {
    id: "eventbrite-zero-trust-ai",
    name: "Zero Trust for AI: Securing Models, Data, and Autonomous Agents",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Oct 22",
    sortDate: "2026-10-22",
    month: "2026-10",
    location: "Cloudflare, San Francisco",
    description: "Security-focused meetup on protecting AI models, data, and autonomous agents.",
    sourceUrl: "https://www.eventbrite.com/e/zero-trust-for-ai-securing-models-data-and-autonomous-agents-tickets-1991035587038",
    sourceLabel: "eventbrite.com",
  },
];

/**
 * Hand-added events that the automated refresh WON'T reliably surface on its
 * own. Two kinds live here:
 *   1. Private / invite-only / token-gated events (e.g. a Luma `?tk=…` link) —
 *      never on any public feed, so structurally undiscoverable.
 *   2. Public startup events that the daily scrape's AI/agent relevance filter
 *      would drop as false negatives — founder mixers, afterparties, picnics,
 *      investor cocktails. These read as "social," not "AI," to a keyword scrape
 *      but are exactly the startup rooms we want (goal: startup attention).
 *
 * IMPORTANT for the refresh job: this array is off-limits. Rewrite the scraped
 * blocks in `scrapedEvents` all you want, but leave these entries in place —
 * re-scraping will never reproduce them. Store the base event URL WITHOUT any
 * personal access token, since this list ships to a public site.
 */
export const directSubmissions: CalEvent[] = [
  // ── YC AI Startup School 2026 week (Jul 23–27) ──────────────────────────
  // Main event → pastEvents2026; Jul 23–27 side-events (including Founder
  // Rooftop Gala) pruned through 2026-07-28 Pacific once their dates passed.
  // No new invite-only keepers added 2026-08-16.
];

/**
 * The full calendar the app renders: everything the refresh scrapes, plus the
 * hand-added invite-only events it can never reach. Downstream code should keep
 * consuming this — the split above is only about what the cron may overwrite.
 */
export const scheduledEvents: CalEvent[] = [...scrapedEvents, ...directSubmissions];

/**
 * Ongoing hosts/series with no single locked-in forward date as of the
 * research date. Check each source close to the month you're planning.
 */
export const recurringSeries: RecurringSeries[] = [
  {
    id: "ai-tinkerers-sf",
    name: "AI Tinkerers — San Francisco",
    category: "meetup",
    cadence: "Monthly — next builder/RAG demo night TBA (homepage still lists Aug 26 SF GTM Engineering Demo Night w/ Attio — skipped as GTM/revenue)",
    location: "San Francisco",
    description:
      "Hands-on demo nights for engineers/founders building AI agents, RAG, voice, and coding agents.",
    sourceUrl: "https://sf.aitinkerers.org/",
    sourceLabel: "sf.aitinkerers.org",
  },
  {
    id: "ai-tinkerers-palo-alto",
    name: "AI Tinkerers — Palo Alto",
    category: "meetup",
    cadence: "Monthly",
    location: "Palo Alto",
    description: "Same demo-night format as the SF chapter, Peninsula-focused.",
    sourceUrl: "https://palo-alto.aitinkerers.org/",
    sourceLabel: "palo-alto.aitinkerers.org",
  },
  {
    id: "aicamp-sf",
    name: "AICamp — San Francisco",
    category: "meetup",
    cadence: "Monthly, hundreds of attendees",
    location: "SOMA / Mission Bay",
    description:
      "GenAI/LLM infra deep dives. Recent sessions covered LlamaIndex, agent evals, and real-time voice AI.",
    sourceUrl: "https://www.aicamp.ai/event/events",
    sourceLabel: "aicamp.ai",
  },
  {
    id: "sfbay-ai",
    name: "SF AI (sfbay-ai)",
    category: "meetup",
    cadence: "Monthly",
    location: "San Francisco",
    description: "General AI/LLM/agentic-AI talks and workshops.",
    sourceUrl: "https://www.meetup.com/sfbay-ai/",
    sourceLabel: "meetup.com/sfbay-ai",
  },
  {
    id: "sf-ai-llms-ml-developers",
    name: "SF AI/LLMs/ML Developers Group",
    category: "meetup",
    cadence: "Periodic full-day events",
    location: "San Francisco",
    description:
      'Ran an "Agents of Impact" full-day event — keynotes, architecture deep dives, and hands-on labs.',
    sourceUrl: "https://www.meetup.com/san-francisco-ai-llms/",
    sourceLabel: "meetup.com/san-francisco-ai-llms",
  },
  {
    id: "mlops-community-sf",
    name: "MLOps Community — San Francisco / Bay Area",
    category: "meetup",
    cadence: "Periodic mini-summits",
    location: "Bay Area",
    description:
      "ML/LLMOps engineering community; talks on autonomous systems and GenAI in production.",
    sourceUrl: "https://mlops.community/events/category/san-francisco/",
    sourceLabel: "mlops.community",
  },
  {
    id: "ai-automation-agents-founders",
    name: "AI, Automation & Agents — Founders and Builders",
    category: "meetup",
    cadence: "Biweekly",
    location: "Varies",
    description:
      "For founders/consultants/agency operators building AI workflows and agents; breaks into topic subgroups.",
    sourceUrl: "https://luma.com/u8fr1urm",
    sourceLabel: "luma.com",
  },
  {
    id: "ai-agents-for-business",
    name: "AI Agents for Business",
    category: "meetup",
    cadence: "Weekly mixers (Palo Alto) · monthly panels (SF)",
    location: "Palo Alto / San Francisco",
    description: "Agent-focused business and networking series.",
    sourceUrl: "https://luma.com/0fcptipy",
    sourceLabel: "luma.com",
  },
  {
    id: "aws-gen-ai-loft-sf",
    name: "AWS Gen AI Loft — San Francisco",
    category: "meetup",
    cadence: "Recurring — multiple sessions/month",
    location: "525 Market St, San Francisco",
    description:
      "Hands-on agent-building sessions (Bedrock, AgentCore, LangGraph); has hosted Gen AI Developer Day and Agents of Impact Summit.",
    sourceUrl:
      "https://aws.amazon.com/startups/lp/aws-gen-ai-loft-san-francisco",
    sourceLabel: "aws.amazon.com",
  },
  {
    id: "agi-house",
    name: "AGI House hackathons",
    category: "hackathon",
    cadence: "Very high frequency — reportedly up to 5 events/week",
    location: "Hillsborough, CA (their one physical house) + Bay Area partner venues",
    description:
      "80+ build-a-thons hosted historically (Lovable, Perplexity emerged from these); runs multiple/week with partners like OpenAI on agent-framework themes. Attendance is merit-based/invite-only, not open registration.",
    sourceUrl: "https://luma.com/agi-house",
    sourceLabel: "luma.com/agi-house",
    watchNote:
      "Checked directly (2026-08-16): public Luma calendar cal-Lv1pgYv5ITFR4tC (\"Ascension — by AGI House SF\" / luma.com/agi-house) still lists Sep 5 The AI Debates Hackathon (luma.com/aidebates) and Sep 22 Energy Optimization of GPUs through Self-Improving Agents (luma.com/gpuenergyoptimization) — both tracked in scheduledEvents. Still sparse advance dating overall — re-check luma.com/agi-house close to when you need one.",
  },
  {
    id: "lablab-ai-hackathons",
    name: "lablab.ai hackathon calendar",
    category: "hackathon",
    cadence: "Continuous, themed hackathons",
    location: "Hybrid — online + occasional Bay Area on-site",
    description:
      "Runs continuous themed hackathons (recent: ExecuTorch/Qualcomm x Meta on-site in SF). Check for the next Bay Area on-site date.",
    sourceUrl: "https://lablab.ai/ai-hackathons",
    sourceLabel: "lablab.ai",
  },
  {
    id: "anthropic-build-days",
    name: "Anthropic-sponsored build days",
    category: "hackathon",
    cadence: "Periodic — no fixed cadence",
    location: "San Francisco",
    description:
      'Periodic in-person builder days (e.g. "Claude Opus 4.8 Build Day," ~300 founders). Check anthropic.com/events for the next one.',
    sourceUrl: "https://www.anthropic.com/events",
    sourceLabel: "anthropic.com",
  },
];

export const pastEvents2026: PastEvent[] = [
  {
    id: "agentic-ai-summit-2026",
    name: "Agentic AI Summit",
    dateLabel: "Aug 1",
    location: "Berkeley, CA",
    note: "Agentic-AI systems summit — kept for annual Bay Area recurrence reference",
  },
  {
    id: "yc-startup-school-2026",
    name: "YC Startup School 2026",
    dateLabel: "Jul 25–26",
    location: "San Francisco",
    note: "Flagship YC builder event — heavily AI-weighted; annual recurrence reference",
  },
  {
    id: "agi-summit-2026",
    name: "AGI Summit 2026",
    dateLabel: "Jul 18–19",
    location: "Palace of Fine Arts, San Francisco",
  },
  {
    id: "open-sauce-2026",
    name: "Open Sauce 2026",
    dateLabel: "Jul 17–19",
    location: "San Mateo County Event Center",
    note: "Maker/creator festival — not AI-agent specific; kept for annual Bay Area recurrence reference",
  },
  {
    id: "ai-engineer-worlds-fair-2026",
    name: "AI Engineer World's Fair 2026 (+ hackathon)",
    dateLabel: "Jun 27–Jul 2",
    location: "Moscone West, San Francisco",
  },
  {
    id: "berkeley-ai-hackathon-2026",
    name: "UC Berkeley AI Hackathon 2026",
    dateLabel: "Jun 20–21",
    location: "MLK Student Union, UC Berkeley",
  },
  {
    id: "databricks-summit-2026",
    name: "Databricks Data + AI Summit 2026",
    dateLabel: "Jun 15–18",
    location: "Moscone Center",
  },
  {
    id: "code-with-claude-2026",
    name: "Anthropic — Code with Claude",
    dateLabel: "May 6–7",
    location: "San Francisco",
  },
  {
    id: "langchain-interrupt-2026",
    name: "LangChain Interrupt",
    dateLabel: "May 13–14",
    location: "The Midway, San Francisco",
    note: "Fall edition moved to NYC/London — no Bay Area date in this window",
  },
  {
    id: "data-council-2026",
    name: "Data Council / AI Council 2026",
    dateLabel: "May 12–14",
    location: "SF Marriott Marquis",
  },
  {
    id: "ai-devsummit-2026",
    name: "AI DevSummit",
    dateLabel: "May 27–28",
    location: "South SF Conference Center",
  },
  {
    id: "nvidia-gtc-2026",
    name: "NVIDIA GTC 2026",
    dateLabel: "Mar 16–19",
    location: "San Jose",
    note: "Next Bay Area edition not until spring 2027",
  },
  {
    id: "treehacks-2026",
    name: "TreeHacks (Stanford)",
    dateLabel: "Feb 13–15",
    location: "Stanford",
    note: "General collegiate hackathon, not agent-specific",
  },
];

export const researchDate = "2026-08-16";
