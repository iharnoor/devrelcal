import type { Topic } from "./topics";

export type EventCategory = "conference" | "meetup" | "hackathon";
export type EventStatus = "confirmed" | "tentative";

export interface CalEvent {
  id: string;
  name: string;
  category: EventCategory;
  status: EventStatus;
  dateLabel: string;
  /** ISO date used for sorting inside a month bucket. */
  sortDate: string;
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
 * Confirmed research date: 2026-07-19. Dates and venues sourced from
 * organizer domains — see sourceUrl on each event.
 */
export const scheduledEvents: CalEvent[] = [
  {
    id: "agi-summit-2026",
    name: "AGI Summit 2026",
    category: "conference",
    status: "confirmed",
    dateLabel: "Jul 18–19",
    sortDate: "2026-07-18",
    month: "2026-07",
    location: "Palace of Fine Arts, San Francisco",
    description:
      '"The Rise of Agentic Intelligence" — 200+ speakers, tracks on agent orchestration, autonomous workflows, and vibe coding.',
    sourceUrl: "https://agisummit.ai/",
    sourceLabel: "agisummit.ai",
  },
  {
    id: "yc-startup-school-2026",
    name: "YC Startup School 2026",
    category: "conference",
    status: "confirmed",
    dateLabel: "Jul 25–26",
    sortDate: "2026-07-25",
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
  // daily through 2026-07-19.
  // (api.luma.com/discover, place discplace-BDj7GNbGlsF7Cka), filtered to
  // AI/agent-relevant listings. This feed only surfaces ~6 weeks out, so
  // coverage here runs through late August — re-scrape luma.com/sf for
  // anything past that.
  {
    id: "luma-cafe-cursor-sf-startups",
    name: "Cafe Cursor San Francisco: Startup Edition",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 20",
    sortDate: "2026-07-20",
    month: "2026-07",
    location: "San Francisco",
    description:
      "Cursor community coworking session aimed at startup builders using AI coding tools.",
    sourceUrl: "https://luma.com/cafe-cursor-sf-startups",
    sourceLabel: "luma.com",
  },
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
    id: "luma-escaping-flatland-sf",
    name: "Escaping Flatland — SF Meetup",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Jul 18",
    sortDate: "2026-07-18",
    month: "2026-07",
    location: "San Francisco",
    description:
      "In-person meetup tied to the Escaping Flatland AI writing series — builders discussing interfaces and model behavior.",
    sourceUrl: "https://luma.com/7saxebo3",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-deeplearning-voice-hackathon",
    name: "DeepLearning.AI Voice AI Hackathon: The Complete Trip",
    category: "hackathon",
    status: "confirmed",
    dateLabel: "Jul 18",
    sortDate: "2026-07-18",
    month: "2026-07",
    location: "Mountain View, CA",
    description: "DeepLearning.AI-hosted hackathon on voice AI, powered by Sabre and Vocal Bridge.",
    sourceUrl: "https://luma.com/fmypremp",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-stanford-deepmind-hackathon",
    name: "Stanford x DeepMind Hackathon",
    category: "hackathon",
    status: "confirmed",
    dateLabel: "Jul 19",
    sortDate: "2026-07-19",
    month: "2026-07",
    location: "Stanford, CA",
    description: 'Student-run hackathon co-hosted with DeepMind — "Build. Ship. Win," seed-funding prize track.',
    sourceUrl: "https://luma.com/e51fygtm",
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
    sourceUrl: "https://luma.com/f28a739d",
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
      "Checked directly (2026-07-19): public Luma calendar cal-Lv1pgYv5ITFR4tC (\"Ascension — by AGI House SF\" / luma.com/agi-house) still returns zero upcoming items via the calendar API. Dated hackathons appear to be announced last-minute to their community rather than published in advance — re-check luma.com/agi-house close to when you need one.",
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

export const researchDate = "2026-07-19";
