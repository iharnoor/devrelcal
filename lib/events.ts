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
}

export interface PastEvent {
  id: string;
  name: string;
  dateLabel: string;
  location: string;
  note?: string;
}

/**
 * Confirmed research date: 2026-07-16. Dates and venues sourced from
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
    location: "Bay Area",
    description:
      "80+ build-a-thons hosted historically (Lovable, Perplexity emerged from these); runs multiple/week with partners like OpenAI on agent-framework themes.",
    sourceUrl: "https://agihouse.ai/",
    sourceLabel: "agihouse.ai",
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

export const researchDate = "2026-07-16";
