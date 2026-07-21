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
 * Confirmed research date: 2026-07-21. Dates and venues sourced from
 * organizer domains — see sourceUrl on each event.
 */
const scrapedEvents: CalEvent[] = [
  {
    id: "yc-startup-school-2026",
    name: "YC Startup School 2026",
    category: "conference",
    status: "confirmed",
    dateLabel: "Jul 25–26",
    sortDate: "2026-07-25",
    endDate: "2026-07-26",
    month: "2026-07",
    location: "San Francisco",
    description:
      "YC's flagship builder event — general startup-school format, heavily AI-weighted this cycle. Not agent-specific but dense with agent-building founders.",
    sourceUrl: "https://events.ycombinator.com/startup-school-2026",
    sourceLabel: "events.ycombinator.com",
  },
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
  {
    id: "openai-open-model-hackathon-2026",
    name: "OpenAI Open Model Hackathon",
    category: "hackathon",
    status: "tentative",
    dateLabel: "Registration Jul 9–21 · winners ~Aug 12",
    sortDate: "2026-07-21",
    month: "2026-07",
    location: "Format/venue unclear — appears Devpost-run",
    description:
      "Top prize includes passes to DevDay SF. Not confirmed as an in-person Bay Area event — verify before planning around it.",
    sourceUrl: "https://openai.devpost.com/rules",
    sourceLabel: "openai.devpost.com",
    note: "Venue unconfirmed — may not be in-person",
  },
  // Sourced live from Luma's San Francisco Bay Area discover feed, refreshed
  // daily through 2026-07-21.
  // (api.luma.com/discover, place discplace-BDj7GNbGlsF7Cka), filtered to
  // AI/agent-relevant listings. This feed only surfaces ~6 weeks out, so
  // coverage here runs through late August — re-scrape luma.com/sf for
  // anything past that.
  {
    id: "luma-foundry-live-demo-night",
    name: "Foundry Live Demo Night",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 21",
    sortDate: "2026-07-21",
    month: "2026-07",
    location: "GitHub, 88 Colin P Kelly Jr St, San Francisco",
    description:
      "Microsoft Foundry Live demo night at GitHub — product demos from builders on Azure AI Foundry.",
    sourceUrl: "https://luma.com/rp2vdq1g",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-vllm-crusoe-meetup",
    name: "vLLM x Crusoe Meetup: Production Open Source Inference",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 21",
    sortDate: "2026-07-21",
    month: "2026-07",
    location: "San Francisco",
    description: "Meetup on running open-source inference (vLLM) in production, co-hosted with Crusoe.",
    sourceUrl: "https://luma.com/n2ftxt1s",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-openai-build-week-meetup",
    name: "OpenAI Build Week Community Meetup — San Francisco",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 21",
    sortDate: "2026-07-21",
    month: "2026-07",
    location: "San Francisco",
    description: "Community meetup tied to OpenAI's Build Week.",
    sourceUrl: "https://luma.com/codex-meetup-convex-jul21-2026",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-deep-tech-startups-ai",
    name: "Deep Tech Startups in the Age of AI",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 22",
    sortDate: "2026-07-22",
    month: "2026-07",
    location: "450 Jane Stanford Way, Stanford",
    description: 'Talk series by VC firm Fifty Years — "From Foundation Models to Vertical Moats."',
    sourceUrl: "https://luma.com/50y-n282",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-dwarkesh-unplugged-workos",
    name: "Dwarkesh Unplugged, presented by WorkOS",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 22",
    sortDate: "2026-07-22",
    month: "2026-07",
    location: "SFJAZZ, 201 Franklin St, San Francisco",
    description:
      "Live conversation with Dwarkesh Patel (Dwarkesh Podcast), hosted by WorkOS at SFJAZZ — AI research and builder Q&A.",
    sourceUrl: "https://luma.com/dwarkesh-unplugged",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-omnigent-multi-agent-databricks",
    name: "Omnigent & Multi-Agent Coding Meetup @ Databricks SF",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 22",
    sortDate: "2026-07-22",
    month: "2026-07",
    location: "San Francisco",
    description: "Meetup on multi-agent coding systems, hosted at Databricks' SF office.",
    sourceUrl: "https://luma.com/omnigent_multi-agent_coding",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-forward-deployed-computer-use",
    name: "Forward Deployed: The State of Computer Use Agents",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 22",
    sortDate: "2026-07-22",
    month: "2026-07",
    location: "San Francisco",
    description:
      "Meetup on computer-use agents — where GUI/desktop automation agents stand in production.",
    sourceUrl: "https://luma.com/xfx7c4nw",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-openai-builder-lounge",
    name: "OpenAI Builder Lounge SF with Parallel",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 23",
    sortDate: "2026-07-23",
    month: "2026-07",
    location: "San Francisco",
    description: "OpenAI-affiliated builder lounge co-hosted with Parallel.",
    sourceUrl: "https://luma.com/openai-builderlounge-sf-july23-2026",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-ai-infra-builders-dstack",
    name: "AI Infra Builders Meetup with dstack, Crusoe, and SGLang",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 23",
    sortDate: "2026-07-23",
    month: "2026-07",
    location: "San Francisco",
    description:
      "Infra builders meetup co-hosted by dstack, Crusoe, and SGLang — open-source inference and GPU cloud tooling.",
    sourceUrl: "https://luma.com/rxsn0u0h",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-voice-ai-meetup-assemblyai",
    name: "Voice AI Meetup: Build Smarter Voice Agents",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 23",
    sortDate: "2026-07-23",
    month: "2026-07",
    location: "San Francisco",
    description:
      "AssemblyAI-hosted meetup on building voice agents — realtime speech-to-text demos and context-carryover patterns.",
    sourceUrl: "https://luma.com/m0thk5ai",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-ai-eng-leaders-dinner",
    name: "AI Engineering Leaders Dinner/Networking/Talks",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 23",
    sortDate: "2026-07-23",
    month: "2026-07",
    location: "1417 15th St, San Francisco",
    description: "Dinner and talks for AI engineering leaders.",
    sourceUrl: "https://luma.com/otzbqs4u",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-self-evolving-agents-hackathon",
    name: "Self-Evolving Agents Hackathon",
    category: "hackathon",
    status: "confirmed",
    dateLabel: "Jul 24",
    sortDate: "2026-07-24",
    month: "2026-07",
    location: "San Francisco",
    description: "Hackathon focused on agents that adapt/improve themselves over time.",
    sourceUrl: "https://luma.com/swarmhack",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-epoch-ai-trajectories-mixer",
    name: "Trajectories: Epoch AI Mixer",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 24",
    sortDate: "2026-07-24",
    month: "2026-07",
    location: "San Francisco",
    description:
      "Epoch AI community mixer for researchers and practitioners tracking AI capability trajectories.",
    sourceUrl: "https://luma.com/mtv0ajl9",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-robotics-physical-ai-summit",
    name: "Robotics × Physical AI Founder-Investor Summit",
    category: "conference",
    status: "confirmed",
    dateLabel: "Jul 26",
    sortDate: "2026-07-26",
    month: "2026-07",
    location: "Stanford, CA",
    description: "Founder/investor summit at the intersection of robotics and physical AI.",
    sourceUrl: "https://luma.com/u8j9b0a6",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-sim2real-gap",
    name: "Can We Close the Sim2Real Gap?",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 29",
    sortDate: "2026-07-29",
    month: "2026-07",
    location: "San Francisco",
    description:
      "Technical discussion on whether simulation, synthetic data, and world models can close the sim-to-real gap for physical AI.",
    sourceUrl: "https://luma.com/cazn88f7",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-startup-reality-ai-industries",
    name: "Startup Reality 202: AI in Industries",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 30",
    sortDate: "2026-07-30",
    month: "2026-07",
    location: "San Francisco",
    description: '"From Foundation Models to Vertical Moats" — applied-AI startup talk series.',
    sourceUrl: "https://luma.com/4g3wb753",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-auth0-stripe-hackathon",
    name: "Built Different: Auth0 x Stripe Hackathon",
    category: "hackathon",
    status: "confirmed",
    dateLabel: "Jul 30",
    sortDate: "2026-07-30",
    month: "2026-07",
    location: "Okta, 100 1st St, San Francisco",
    description:
      "In-person hackathon with Auth0 and Stripe on provisioning and managing services (including for agents) via Stripe Projects.",
    sourceUrl: "https://luma.com/builtdifferent-auth0-stripe",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-agentic-ai-summit",
    name: "Agentic AI Summit",
    category: "conference",
    status: "confirmed",
    dateLabel: "Aug 1",
    sortDate: "2026-08-01",
    month: "2026-08",
    location: "Berkeley, CA",
    description: "Summit dedicated to agentic AI systems and applications.",
    sourceUrl: "https://luma.com/agentic-ai-summit",
    topics: ["agent-memory"],
    topicNote:
      "Broad agentic-AI summit, not retrieval-specific — check the agenda for memory/retrieval tracks before pitching.",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-baseten-demo-night",
    name: "Built on Baseten | AI Demo Night",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Aug 4",
    sortDate: "2026-08-04",
    month: "2026-08",
    location: "San Francisco",
    description: "Demo night for products built on Baseten's inference infrastructure.",
    sourceUrl: "https://luma.com/b4y2veki",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-frontier-research-club-ai-bio",
    name: "Bay Area Frontier Research Club #16 — AI × Bio Track Launch",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Aug 5",
    sortDate: "2026-08-05",
    month: "2026-08",
    location: "Stanford University",
    description:
      "Curated AI research dinner/talk night launching an AI × bio track — short technical talks plus critique, not a general mixer.",
    sourceUrl: "https://luma.com/9hp5rxy8",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-workos-agent-night",
    name: "WorkOS Agent Night",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Aug 12",
    sortDate: "2026-08-12",
    month: "2026-08",
    location: "1300 Van Ness Ave, San Francisco",
    description: "WorkOS-hosted meetup for agent builders.",
    sourceUrl: "https://luma.com/agent-night",
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
  // The main event (Jul 25–26) is in `scrapedEvents`; this is the surrounding
  // constellation of founder/investor side-events — a dense startup magnet.
  // Curated from the community after-party directory (startupschoolafter.party,
  // read 2026-07-21). Dates/venues are single-sourced from that directory;
  // re-check the RSVP link before committing.
  {
    id: "yc-founders-investors-cocktails",
    name: "Founders & Investors Cocktail Hours",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 23",
    sortDate: "2026-07-23",
    month: "2026-07",
    location: "San Francisco (private location on RSVP)",
    description:
      "Founder–investor cocktail hours kicking off YC Startup School week, hosted by Alime × Bond AI.",
    sourceUrl: "https://luma.com/axd56nxv",
    sourceLabel: "luma.com",
  },
  {
    id: "yc-startup-school-hackathon",
    name: "YC Startup School Hackathon",
    category: "hackathon",
    status: "confirmed",
    dateLabel: "Jul 24",
    sortDate: "2026-07-24",
    month: "2026-07",
    location: "San Francisco",
    description:
      "All-day build sprint timed to YC Startup School, run by The Hackathon Company — founders and student builders shipping in a day.",
    sourceUrl: "https://luma.com/dpp4ulna",
    sourceLabel: "luma.com",
  },
  {
    id: "yc-startup-school-picnic-2026",
    name: "2nd Annual YC Startup School Picnic",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 24",
    sortDate: "2026-07-24",
    month: "2026-07",
    location: "Golden Gate Park, San Francisco",
    description:
      "Outdoor social capping YC Startup School — ~760 founders RSVP'd, food and merch, low-key founder networking. Hosted by Ethan Yip × Unicorner.",
    sourceUrl: "https://luma.com/6vko8q90",
    sourceLabel: "luma.com",
    note: "Public but social — the AI/agent scrape filter would skip it; kept here so it sticks.",
  },
  {
    id: "yc-emergence-capital-mixer",
    name: "Emergence Capital Mixer",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 24",
    sortDate: "2026-07-24",
    month: "2026-07",
    location: "Pier 5, Embarcadero, San Francisco",
    description: "Waterfront founder/investor mixer hosted by Emergence Capital during YC week.",
    sourceUrl: "https://luma.com/2ev1tu8a",
    sourceLabel: "luma.com",
  },
  {
    id: "yc-ef-game-night",
    name: "YC SUS Game Night @ EF",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 24",
    sortDate: "2026-07-24",
    month: "2026-07",
    location: "Rincon Hill, San Francisco",
    description: "Casual founder game night hosted by Entrepreneurs First during YC Startup School.",
    sourceUrl: "https://luma.com/0pl3rlxm",
    sourceLabel: "luma.com",
  },
  {
    id: "yc-night-hack-founders-inc",
    name: "Night Hack by Founders, Inc.",
    category: "hackathon",
    status: "confirmed",
    dateLabel: "Jul 24",
    sortDate: "2026-07-24",
    month: "2026-07",
    location: "Fort Mason, San Francisco",
    description: "Evening build-and-demo hack night at Founders, Inc.'s Fort Mason space.",
    sourceUrl: "https://luma.com/nighthack",
    sourceLabel: "luma.com",
  },
  {
    id: "yc-beta-fund-founder-investor-mixer",
    name: "Founder & Investor Mixer (Beta Fund × Rednote)",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 24",
    sortDate: "2026-07-24",
    month: "2026-07",
    location: "Downtown SF penthouse (address on RSVP)",
    description: "Penthouse founder/investor mixer hosted by Beta Fund × Rednote Venture.",
    sourceUrl: "https://luma.com/beta-ugt5",
    sourceLabel: "luma.com",
  },
  {
    id: "ship-2-prod-yc-yacht-gala",
    name: "Ship 2 Prod — YC AI Startup School Black-Tie Yacht Gala",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 24",
    sortDate: "2026-07-24",
    month: "2026-07",
    location: "Pier 40, Mission Bay, San Francisco (private yacht)",
    description:
      "Invite-only black-tie gala during YC's AI Startup School — ~150 hand-selected AI founders, engineers, and investors, with product demos and lightning pitches. Hosted by SCALE by GMI (GMI Cloud + NVIDIA), presented by Resonance; sponsors include Databricks, Soma Capital, and Red Bull. High-density startup crowd worth a presence at.",
    sourceUrl: "https://luma.com/ojidqyj8",
    sourceLabel: "luma.com",
    note: "Invite-only, token-gated Luma link — not on any public feed. 7–11 PM at Pier 40.",
  },
  {
    id: "yc-afterparty-moss-supabase-modal",
    name: "YC AI Startup School Afterparty (Moss × Supabase × Modal)",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 25",
    sortDate: "2026-07-25",
    month: "2026-07",
    location: "San Francisco",
    description:
      "One of the marquee Day-1 afterparties — food, drinks, and AI-builder networking, co-hosted by Moss, Supabase, Modal, and Render.",
    sourceUrl: "https://luma.com/m4ez9liu",
    sourceLabel: "luma.com",
  },
  {
    id: "yc-stripe-made-in-sf",
    name: "Stripe — Made in San Francisco",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 25",
    sortDate: "2026-07-25",
    month: "2026-07",
    location: "DrawBridge Presents, Embarcadero, San Francisco",
    description: "Stripe-hosted founder evening during YC Startup School.",
    sourceUrl: "https://luma.com/xggm2di5",
    sourceLabel: "luma.com",
    note: "Listed as sold out — track for awareness / next edition.",
  },
  {
    id: "yc-posthog-afterparty",
    name: "PostHog After Party (Day 1)",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 25",
    sortDate: "2026-07-25",
    month: "2026-07",
    location: "Dogpatch, San Francisco",
    description: "PostHog's YC Startup School Day-1 afterparty — builder crowd, casual networking.",
    sourceUrl: "https://luma.com/posthog-sus26",
    sourceLabel: "luma.com",
  },
  {
    id: "yc-respan-mongodb-composio-afterparty",
    name: "Respan × MongoDB × Composio Afterparty",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 25",
    sortDate: "2026-07-25",
    month: "2026-07",
    location: "Mission Rock Resort, Mission Bay, San Francisco",
    description: "Afterparty co-hosted by Respan, MongoDB, and Composio — infra/agent-adjacent founder crowd.",
    sourceUrl: "https://luma.com/2p9zbnzn",
    sourceLabel: "luma.com",
  },
  {
    id: "yc-tavus-afterparty",
    name: "Tavus Afterparty",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 25",
    sortDate: "2026-07-25",
    month: "2026-07",
    location: "Tavus HQ, 35 Stillman St, San Francisco",
    description: "Tavus-hosted YC Startup School afterparty at their SF headquarters.",
    sourceUrl: "https://luma.com/tavus-jv2v",
    sourceLabel: "luma.com",
  },
  {
    id: "yc-party-in-the-presidio",
    name: "Party in the Presidio",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 25",
    sortDate: "2026-07-25",
    month: "2026-07",
    location: "Presidio of San Francisco",
    description: "Outdoor founder party in the Presidio hosted by Adaptional.",
    sourceUrl: "https://luma.com/ispbsl3o",
    sourceLabel: "luma.com",
    note: "Waitlist as of listing.",
  },
  {
    id: "yc-google-deepmind-afterparty",
    name: "Google DeepMind Afterparty",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 26",
    sortDate: "2026-07-26",
    month: "2026-07",
    location: "The Pearl, 601 19th St, San Francisco",
    description:
      "Google DeepMind × Google Cloud Day-2 afterparty — music, food, and founder conversations. A top-tier room for startup + AI-builder reach.",
    sourceUrl: "https://rsvp.withgoogle.com/events/gdm-yc-sus-afterparty-2026",
    sourceLabel: "withgoogle.com",
  },
  {
    id: "yc-aws-afterparty",
    name: "AWS YC Startup School Afterparty",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 26",
    sortDate: "2026-07-26",
    month: "2026-07",
    location: "Exploratorium, Pier 15, San Francisco",
    description: "AWS-hosted Day-2 afterparty at the Exploratorium — large-scale founder networking.",
    sourceUrl: "https://awsycstartupschoolafterparty.splashthat.com/",
    sourceLabel: "splashthat.com",
  },
  {
    id: "yc-microsoft-afterparty",
    name: "Microsoft YC AI Startup School After Party",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 26",
    sortDate: "2026-07-26",
    month: "2026-07",
    location: "San Francisco",
    description: "Microsoft for Startups Day-2 afterparty for YC Startup School founders.",
    sourceUrl: "https://microsoftforstartups.eventbuilder.com/events/11f1376c3b274120be33071c025a25a9",
    sourceLabel: "eventbuilder.com",
    note: "Waitlist as of listing.",
  },
  {
    id: "yc-fondo-afterparty",
    name: "YC Startup School Afterparty @ Fondo",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 26",
    sortDate: "2026-07-26",
    month: "2026-07",
    location: "Union Square, San Francisco",
    description: "Fondo-hosted Day-2 afterparty in Union Square.",
    sourceUrl: "https://luma.com/fondo_yc_startup_school_afterparty",
    sourceLabel: "luma.com",
  },
  {
    id: "yc-founder-rooftop-gala",
    name: "Founder Rooftop Gala",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 27",
    sortDate: "2026-07-27",
    month: "2026-07",
    location: "San Francisco rooftop (address on RSVP)",
    description: "Post-Startup-School rooftop founder gala hosted by Vivian Cai × Plain.",
    sourceUrl: "https://luma.com/z9teb942",
    sourceLabel: "luma.com",
  },
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
    cadence: "Monthly (next confirmed: Aug 9, Founders Inc)",
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
      "Checked directly (2026-07-21): public Luma calendar cal-Lv1pgYv5ITFR4tC (\"Ascension — by AGI House SF\" / luma.com/agi-house) still returns zero upcoming items via the calendar API. Dated hackathons appear to be announced last-minute to their community rather than published in advance — re-check luma.com/agi-house close to when you need one.",
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

export const researchDate = "2026-07-21";
