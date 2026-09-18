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
  /** STT / TTS / streaming / voice-agent / audio-intel relevance — AssemblyAI pitch or inspiration fit. */
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
 * Confirmed research date: 2026-09-18. Dates and venues sourced from
 * organizer domains — see sourceUrl on each event.
 */
const scrapedEvents: CalEvent[] = [
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
      "OpenAI's flagship developer conference — technical sessions, hands-on demos, workshops. Keynote livestreamed. Realtime / voice-agent API sessions are the pitch-fit rooms if they repeat the 2025 pattern.",
    sourceUrl: "https://openai.com/index/devday-2026/",
    sourceLabel: "openai.com",
    topics: ["voice-agents", "streaming"],
    topicNote:
      "Pitch fit only if the agenda includes Realtime, speech, or voice-agent sessions — confirm closer to the date.",
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
      "Vendor-neutral technical conference on AGI, LLMs, agentic AI, and infra. ~5,500 attendees, 120+ speakers. Voice-agent builders show up; speech tracks are not guaranteed.",
    sourceUrl: "https://aiconference.com/",
    sourceLabel: "aiconference.com",
    topics: ["voice-agents"],
    topicNote:
      "Broad agentic-AI conference — check the agenda for speech/voice tracks before treating it as a dedicated STT room.",
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
  // Sourced live from Luma's San Francisco Bay Area discover feed, refreshed
  // 2026-09-18 (UTC afternoon / Pacific morning).
  // (api.luma.com/discover, place discplace-BDj7GNbGlsF7Cka), filtered to
  // AI / voice-agent-relevant listings. 63 discover entries across 3 pages.
  // Pruned after Pacific Sep 17: AI Infra Summit + hackathon → pastEvents2026;
  // StepAudio 3 Launch → pastEvents2026; Coval Voice AI Happy Hour deleted.
  // CRITICAL: Ship a Voice Agent (leverage-0gfk) rescheduled via event/get from
  // Sep 17 → Oct 25 (1–4pm PT) — updated in place, not pruned.
  // Prior keepers re-verified: AGI House voice weekend, TrueFoundry Agent
  // Harness, Claude Fable 5.1 Build Day, Agent Arena, STACKED (e2b-0e34 /
  // QzLbxtUc4CDGNbx), AI Native Summit, Runtime by Modal, SF Tech Week Agent
  // Day, Agentic + AI Observability (Agentic_AI_10-13).
  // NEW: Gemini Audio | At Night (Sep 24, The Pearl SF — DeepMind calendar /
  // rsvp.withgoogle.com); Decagon Dialogues (Oct 1, CJM SF — dedicated
  // Decagon Voice research + Twilio programmable-voice session + agent
  // hackathon). Owned SF Build Night (xwnkujzr) + London Build Night
  // (k74g72a0) remain in directSubmissions.
  // Skipped: Real-Time Video Agents (vastsf), SF Frontier Hackathon,
  // Demo Night @ WorkOS, Company Brain Hackathon, SF Systems multimodal
  // coding, Cartesia×Lorikeet drinks, Vapi Fleet Week yacht / sales dinner,
  // year traps (lsjiq8kf 2025, builders-sep26 / n36erqbu 2025). Voice AI
  // Summit London (voiceaisummit, Nov 18) stays watch-only — venue TBA.
  {
    id: "luma-claude-build-day-sf",
    name: "San Francisco | Claude Fable 5.1 Build Day",
    category: "hackathon",
    status: "confirmed",
    dateLabel: "Sep 19, 9am–4pm PT",
    sortDate: "2026-09-19",
    month: "2026-09",
    location: "590 Howard St, San Francisco, CA 94105",
    description:
      "Anthropic Claude Community build day in SF — hands-on day shipping with Claude Fable 5.1 alongside local builders. Strong agent-builder room the same calendar day as the AGI House Voice AI Hackathon and The Agent Harness Hackathon (TrueFoundry); voice is a plausible use case but not the stated theme.",
    sourceUrl: "https://luma.com/claudesanfranciscobuildday",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-truefoundry-agent-harness-hackathon",
    name: "The Agent Harness Hackathon",
    category: "hackathon",
    status: "confirmed",
    dateLabel: "Sep 19, 9:30am–8pm PT",
    sortDate: "2026-09-19",
    month: "2026-09",
    location: "3120 Scott Blvd, Santa Clara",
    description:
      "Full-day TrueFoundry × HackerSquad hackathon on production agent harnesses — model routing, MCP tool access, observability, evals, guardrails, and deployment. Strong agent-infra builder room; voice is a plausible use case but not the stated theme.",
    sourceUrl:
      "https://luma.com/truefoundry-agent-harness-hackathon-sep19-2026",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-agi-house-voice-ai-hackathon",
    name: "Voice AI Hackathon: SambaNova + General Compute + Infinity + Hume",
    category: "hackathon",
    status: "confirmed",
    dateLabel: "Sep 19, 10am–8:30pm PT",
    sortDate: "2026-09-19",
    month: "2026-09",
    location: "AGI House SF, 170 St. Germain Ave, San Francisco",
    description:
      "AGI House Saturday voice-agent hackathon on SambaNova SN50 inference with Hume voice/emotion models — keynotes from SambaNova/Infinity/General Compute/Hume, then a full-day build sprint with free compute/voice credits. Same calendar day as TrueFoundry Agent Harness (South Bay) and the day before AI Debates at the same house.",
    sourceUrl: "https://luma.com/voiceaihackathon",
    sourceLabel: "luma.com",
    topics: ["voice-agents", "stt", "tts", "streaming"],
  },
  {
    id: "luma-agi-house-ai-debates-hackathon",
    name: "The AI Debates Hackathon",
    category: "hackathon",
    status: "confirmed",
    dateLabel: "Sep 20",
    sortDate: "2026-09-20",
    month: "2026-09",
    location: "AGI House SF, 170 St. Germain Ave, San Francisco",
    description:
      "AGI House Saturday hackathon (rescheduled from Sep 5) — build a voice agent that debates AI ethics/risk live, then compete in public forum rounds judged by humans. Sponsors include Hume for spoken replies; SambaNova / General Compute on inference. Direct STT/streaming pitch: every team needs ears for the live debate loop.",
    sourceUrl: "https://luma.com/aidebates",
    sourceLabel: "luma.com",
    topics: ["voice-agents", "stt", "streaming"],
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
  {
    id: "gemini-audio-at-night-sf",
    name: "Gemini Audio | At Night",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Sep 24, evening PT",
    sortDate: "2026-09-24",
    month: "2026-09",
    location: "The Pearl, 601 19th St, San Francisco, CA 94107",
    description:
      "Google DeepMind / Gemini Audio evening at The Pearl (Dogpatch) — developer-facing Gemini audio/voice session. Highest-signal Google speech/audio room this window; same calendar evening as AssemblyAI’s owned SF dictation Build Night.",
    sourceUrl: "https://rsvp.withgoogle.com/events/gemini-audio-at-night",
    sourceLabel: "rsvp.withgoogle.com",
    topics: ["stt", "tts", "audio-intel", "streaming"],
    topicNote:
      "Gemini Audio product evening — treat as Google Cloud Speech / Gemini Live competitive mindshare; confirm agenda emphasis (STT vs TTS vs Live) closer to the date.",
  },
  {
    id: "luma-healthcare-ai-hackathon",
    name: "Healthcare AI Hackathon",
    category: "hackathon",
    status: "confirmed",
    dateLabel: "Sep 26",
    sortDate: "2026-09-26",
    month: "2026-09",
    location: "AWS Builder Loft, 525 Market St, San Francisco",
    description:
      "One-day healthcare AI build day with OpenAI, AWS, and health/VC partners — engineers and clinicians ship product prototypes; cash prizes for top teams. Medical transcription / ambient-scribe teams are the STT pitch.",
    sourceUrl: "https://luma.com/e9z9vuxz",
    sourceLabel: "luma.com",
    topics: ["stt", "audio-intel"],
    topicNote:
      "Pitch fit if teams are capturing clinical audio — confirm tracks closer to the date; not every healthcare prototype needs speech.",
  },
  {
    id: "cv-agent-arena-hackathon",
    name: "The Agent Arena Hackathon",
    category: "hackathon",
    status: "confirmed",
    dateLabel: "Sep 26–27",
    sortDate: "2026-09-26",
    endDate: "2026-09-27",
    month: "2026-09",
    location: "San Francisco (exact venue on approval)",
    description:
      "Two-day in-person Vultr × Cerebral Valley hackathon on production agent infrastructure — VM backends, serverless inference, and the compute layer autonomous agents run on; $10k+ cash/credits. Strong agent-infra builder room the same weekend as the AWS Loft Healthcare AI Hackathon; voice is a plausible use case but not the stated theme.",
    sourceUrl: "https://cerebralvalley.ai/e/vultr-the-agent-arena",
    sourceLabel: "cerebralvalley.ai",
  },
  {
    id: "luma-stacked-e2b-fireworks-braintrust",
    name: "STACKED: Sandboxes, Inference, & Observability",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Sep 30, 6:00–8:30pm PT",
    sortDate: "2026-09-30",
    month: "2026-09",
    location: "San Francisco, CA (SoMa; exact venue on registration)",
    description:
      "E2B × Fireworks AI × Braintrust evening on production agent infrastructure — sandboxes for untrusted agent code, low-latency inference for agent loops, and evals/observability. Strong agent-builder attendance the night before Runtime by Modal; voice is a plausible use case but not the stated theme.",
    sourceUrl: "https://luma.com/e2b-0e34",
    sourceLabel: "luma.com",
  },
  // Sourced from Eventbrite's SF Bay Area search (2026-07-17), filtered from
  // several hundred loosely-keyword-matched results down to genuine
  // voice-agent / speech-AI relevance — Eventbrite's own search is much noisier
  // than Luma's for this audience (heavy false-positive rate on words like
  // "voice" matching unrelated events, plus templated paid-training-course spam).
  // Agentic AI workshop (Aug 18) pruned after Pacific day passed (2026-08-20).
  {
    id: "decagon-dialogues-2026",
    name: "Decagon Dialogues 2026",
    category: "conference",
    status: "confirmed",
    dateLabel: "Oct 1",
    sortDate: "2026-10-01",
    month: "2026-10",
    location: "Contemporary Jewish Museum, San Francisco",
    description:
      "Decagon’s flagship SF customer-support / conversational-AI conference — keynotes, CX operator tracks, a hands-on agent hackathon, plus a dedicated “Inside the research behind Decagon Voice” session and a Twilio Programmable Voice joint talk on production-ready voice agents. Highest-signal contact-center voice room the same day as Runtime by Modal and the London three-way STT night.",
    sourceUrl: "https://decagon.ai/decagon-dialogues-2026",
    sourceLabel: "decagon.ai",
    topics: ["voice-agents", "stt", "streaming"],
    topicNote:
      "Agenda has explicit Decagon Voice research + Twilio programmable-voice production session — not every track is voice; pitch the voice/agent rooms.",
  },
  {
    id: "luma-runtime-by-modal",
    name: "Runtime by Modal",
    category: "conference",
    status: "confirmed",
    dateLabel: "Oct 1, 8:30am–6:30pm PT",
    sortDate: "2026-10-01",
    month: "2026-10",
    location: "The Midway, 900 Marin St, San Francisco, CA 94124",
    description:
      "Modal’s full-day SF conference on AI runtime infrastructure — inference, training, and batch workloads for builders shipping production AI systems. Strong infra/agent-builder attendance; Gladia co-appears with Modal on the Oct 14 Paris Voice AI Meetup, so this room overlaps the voice-infra developer graph even though the agenda is not voice-specific.",
    sourceUrl: "https://luma.com/runtime-by-modal",
    sourceLabel: "luma.com",
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
    description: '"The Data Streaming + Agent Infra Conference" — real-time data pipelines feeding agent systems. Streaming audio/STT is a possible overlap, not the headline.',
    sourceUrl: "https://www.eventbrite.com/e/data-streaming-summit-2026-the-data-streaming-agent-infra-conference-tickets-1990614661037",
    sourceLabel: "eventbrite.com",
    topics: ["streaming"],
    topicNote: "Data-streaming infra for agents — check the agenda for speech/audio tracks before pitching.",
  },
  {
    id: "luma-ai-native-summit-techweek",
    name: "AI Native Summit — SF TechWeek 2026",
    category: "conference",
    status: "confirmed",
    dateLabel: "Oct 9–10",
    sortDate: "2026-10-09",
    endDate: "2026-10-10",
    month: "2026-10",
    location: "847 Howard St, San Francisco",
    description:
      "Two-day a16z Tech Week builder summit — technical talks, hands-on build labs, and AINative Hack Champion finals for engineers/founders shipping AI-native systems. Strong agent-builder attendance inside Tech Week; not a dedicated voice room.",
    sourceUrl: "https://luma.com/3t95uj7s",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-sf-tech-week-agent-day",
    name: "SF Tech Week Agent Day",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Oct 9, 12–6pm PT",
    sortDate: "2026-10-09",
    month: "2026-10",
    location: "135 Constitution Dr, Menlo Park",
    description:
      "OSS4AI / r/AI_Agents Tech Week afternoon in Menlo Park — tech talks (incl. AI search), ~10 demos, and parallel workshops for agent builders. Same calendar day as AI Native Summit in SF; strong agent-developer adjacency, not a dedicated voice room.",
    sourceUrl: "https://luma.com/7wn8tsf7",
    sourceLabel: "luma.com",
  },
  {
    id: "luma-agentic-ai-observability-meetup-sf",
    name: "Agentic + AI Observability Meetup SF",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Oct 13, 5–8pm PT",
    sortDate: "2026-10-13",
    month: "2026-10",
    location: "San Francisco (Financial District; exact venue on registration)",
    description:
      "SF evening on agentic systems and AI observability — developer meetup for teams instrumenting, evaluating, and operating production agents. Strong agent-infra adjacency after Tech Week; voice is a plausible use case but not the stated theme.",
    sourceUrl: "https://luma.com/Agentic_AI_10-13",
    sourceLabel: "luma.com",
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
  {
    id: "luma-multi-model-hackathon-aws-loft",
    name: "Multi-Model Hackathon @ AWS Builders Loft",
    category: "hackathon",
    status: "confirmed",
    dateLabel: "Oct 23, 9am–6:30pm PT",
    sortDate: "2026-10-23",
    month: "2026-10",
    location: "AWS Builder Loft, 525 Market St, San Francisco",
    description:
      "One-day multimodal hackathon (Beta University) at AWS Builder Loft — ship products that combine text, image, video, audio, and voice; multi-modal agents that can see, hear, and act are an explicit track.",
    sourceUrl: "https://luma.com/beta-79jb",
    sourceLabel: "luma.com",
    topics: ["stt", "audio-intel"],
    topicNote:
      "Pitch fit for teams using speech/audio as a modality — not a dedicated voice-agent hackathon; confirm tracks closer to the date.",
  },
  {
    id: "luma-ship-voice-agent-workshop",
    name: "Ship a Voice Agent: A Hands-On Build Workshop",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Oct 25, 1–4pm PT",
    sortDate: "2026-10-25",
    month: "2026-10",
    location: "San Francisco (exact venue on registration)",
    description:
      "Afternoon hands-on workshop (Leverage / Nir Naamani) — build a working voice agent end-to-end (speech in → model → structured data out), including latency, interruptions, and state. Approval-required; small room. Rescheduled from Sep 17 to Oct 25 per live Luma event/get (leverage-0gfk) as of 2026-09-18 — still the highest-signal dedicated Bay Area voice-agent build workshop this window.",
    sourceUrl: "https://luma.com/leverage-0gfk",
    sourceLabel: "luma.com",
    topics: ["voice-agents", "stt", "streaming"],
  },
];

/**
 * Hand-added events that the automated refresh WON'T reliably surface on its
 * own. Two kinds live here:
 *   1. Private / invite-only / token-gated events (e.g. a Luma `?tk=…` link) —
 *      never on any public feed, so structurally undiscoverable.
 *   2. Public startup events that the daily scrape's voice-agent relevance
 *      filter would drop as false negatives — founder mixers, afterparties,
 *      picnics, investor cocktails. These read as "social," not "voice AI,"
 *      to a keyword scrape but are rooms where voice-agent founders actually
 *      gather (goal: voice-agent builder attention).
 *   3. Flagship voice-AI conferences and owned AssemblyAI events the generic
 *      Bay Area scrape can miss (Voice Agents Forum, VapiCon, NYC meetup).
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
  // Voice-agent keepers added 2026-08-24: owned NYC meetup + two flagship
  // Bay Area voice conferences the generic Luma scrape can miss.
  // 2026-08-25: Voice Agents Forum date corrected to Nov 5 (was Sep 16) per
  // live Luma event/get for voiceagentssf.
  // 2026-08-28: owned online AssemblyAI × lablab Voice Agent Hackathon (Sep 1–30).
  // 2026-09-02: pruned owned NYC Voice AI Meetup (Sep 1) after Pacific day → pastEvents2026.
  // 2026-09-11: owned Build Night — Create Your Own Dictation App (Sep 24 SF).
  // 2026-09-16: owned London Build Night dictation (Oct 1, k74g72a0) —
  // AssemblyAI × Encode Club; same London evening as Deepgram×Pipecat /
  // Speechmatics×Tuner.
  {
    id: "assemblyai-build-night-dictation-sep24",
    name: "AssemblyAI — Build Night: Create Your Own Dictation App",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Sep 24, 5–8pm PT",
    sortDate: "2026-09-24",
    month: "2026-09",
    location: "San Francisco, CA (exact venue on registration)",
    description:
      "Owned AssemblyAI SF build night — hands-on evening building a dictation app as speech becomes a default input modality. Highest-signal owned Bay Area STT builder room this window alongside the online Voice Agent Hackathon.",
    sourceUrl: "https://luma.com/xwnkujzr",
    sourceLabel: "luma.com",
    topics: ["stt", "audio-intel"],
  },
  {
    id: "assemblyai-build-night-dictation-london-oct1",
    name: "AssemblyAI — Build Night: Create Your Own Dictation App (London)",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Oct 1, 6–9pm BST",
    sortDate: "2026-10-01",
    month: "2026-10",
    location: "London, United Kingdom (exact venue on registration)",
    description:
      "Owned AssemblyAI × Encode Club London build night — hands-on dictation-app workshop for speech-as-input builders. Same London evening as Deepgram × Pipecat Customer Interaction and Speechmatics × Tuner Voice AI Meetup — direct EU STT mindshare night.",
    sourceUrl: "https://luma.com/k74g72a0",
    sourceLabel: "luma.com",
    topics: ["stt", "audio-intel"],
  },
  {
    id: "assemblyai-voice-agent-hackathon-lablab-sep",
    name: "AssemblyAI — Voice Agent Hackathon (lablab.ai)",
    category: "hackathon",
    status: "confirmed",
    dateLabel: "Sep 1–30",
    sortDate: "2026-09-01",
    endDate: "2026-09-30",
    month: "2026-09",
    location: "Online (lablab.ai)",
    description:
      "Owned month-long online voice-agent hackathon with lablab.ai — every project builds on AssemblyAI; $10k prize pool ($5k cash + $5k credits). Registration stays open through the build window.",
    sourceUrl:
      "https://lablab.ai/ai-hackathons/assemblyai-voice-agent-hackathon",
    sourceLabel: "lablab.ai",
    topics: ["voice-agents", "stt", "streaming"],
  },
  {
    id: "voice-agents-forum-2026",
    name: "Voice Agents Forum",
    category: "conference",
    status: "confirmed",
    dateLabel: "Nov 5",
    sortDate: "2026-11-05",
    month: "2026-11",
    location: "Digital Jungle SF, 972 Mission St, San Francisco",
    description:
      "One-day AAIF Community forum for teams shipping voice agents in production — latency, turn-taking, barge-in, evaluation, observability, human handoff. Highest-signal Bay Area room the week before VapiCon (Luma lists Nov 5, 9am–5:30pm PT as of 2026-08-25).",
    sourceUrl: "https://luma.com/voiceagentssf",
    sourceLabel: "luma.com",
    topics: ["voice-agents", "stt", "streaming"],
  },
  {
    id: "vapicon-2026",
    name: "VapiCon 2026 — The Frontier Voice AI Summit",
    category: "conference",
    status: "confirmed",
    dateLabel: "Nov 11–12",
    sortDate: "2026-11-11",
    endDate: "2026-11-12",
    month: "2026-11",
    location: "Festival Pavilion, Fort Mason, San Francisco",
    description:
      "The dedicated voice-AI summit — ~1,200 builders, product leaders, and operators. Deepgram is a diamond sponsor; Cartesia’s CEO is on the speaker list; AssemblyAI’s Dylan Fox is on the hosted-voices lineup. Parallel builder + business tracks.",
    sourceUrl: "https://www.vapicon.ai/",
    sourceLabel: "vapicon.ai",
    topics: ["voice-agents", "stt", "tts", "streaming"],
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
    cadence:
      "Monthly — Sep 12 Agents Everywhere global hackathon has passed; watch sf.aitinkerers.org for the next demo night",
    location: "San Francisco",
    description:
      "Hands-on demo nights for engineers/founders building AI agents, voice agents, and coding agents. Recurring borrowed audience for an STT lightning talk.",
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
      "GenAI/LLM infra deep dives. Recent sessions covered agent evals and real-time voice AI — a regular borrowed room for streaming-STT talks.",
    sourceUrl: "https://www.aicamp.ai/event/events",
    sourceLabel: "aicamp.ai",
  },
  {
    id: "sfbay-ai",
    name: "SF AI (sfbay-ai)",
    category: "meetup",
    cadence: "Monthly",
    location: "San Francisco",
    description: "General AI/LLM/agentic-AI talks and workshops — scan each month’s agenda for speech/voice sessions.",
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
    description:
      "Agent-focused business and networking series — useful when the month’s theme tilts toward voice/CX agents.",
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
      "Hands-on agent-building sessions (Bedrock, AgentCore, LangGraph); has hosted Gen AI Developer Day and Agents of Impact Summit. Watch for Amazon Connect / contact-center voice sessions.",
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
      "80+ build-a-thons hosted historically (Lovable, Perplexity emerged from these); runs multiple/week with partners like OpenAI. Attendance is merit-based/invite-only. Sep 19 Voice AI Hackathon + Sep 20 The AI Debates Hackathon is a back-to-back voice-agent weekend — highest-signal AGI House cluster this window.",
    sourceUrl: "https://luma.com/agi-house",
    sourceLabel: "luma.com/agi-house",
    watchNote:
      "Re-checked 2026-09-18: public Luma calendar cal-Lv1pgYv5ITFR4tC now lists Voice AI Hackathon (Sep 19, voiceaihackathon), AI Debates (Sep 20, aidebates), and Energy Optimization of GPUs (Sep 22 PT, gpuenergyoptimization). Sep 19–20 remains the back-to-back AGI House voice weekend.",
  },
  {
    id: "lablab-ai-hackathons",
    name: "lablab.ai hackathon calendar",
    category: "hackathon",
    cadence: "Continuous, themed hackathons",
    location: "Hybrid — online + occasional Bay Area on-site",
    description:
      "Runs continuous themed hackathons (recent: ExecuTorch/Qualcomm x Meta on-site in SF). Currently hosting the owned AssemblyAI Voice Agent Hackathon online Sep 1–30 — tracked in directSubmissions.",
    sourceUrl: "https://lablab.ai/ai-hackathons",
    sourceLabel: "lablab.ai",
  },
  {
    id: "anthropic-build-days",
    name: "Anthropic-sponsored build days",
    category: "hackathon",
    cadence: "Periodic — next dated slot: Sep 19 San Francisco | Claude Fable 5.1 Build Day (tracked in scheduledEvents)",
    location: "San Francisco",
    description:
      'Periodic in-person builder days (e.g. "Claude Opus 4.8 Build Day," ~300 founders). Check anthropic.com/events for the next one.',
    sourceUrl: "https://www.anthropic.com/events",
    sourceLabel: "anthropic.com",
  },
  {
    id: "voice-ai-space",
    name: "Voice AI Space",
    category: "meetup",
    cadence: "Global mixers + city meetups — no single locked cadence",
    location: "San Francisco / NYC / London / remote",
    description:
      "Community calendar dedicated to voice AI (voiceaispace.com/events). SF mixers, Vapi-hosted Voice AI Live sessions, and competitor dinners surface here first — check weekly.",
    sourceUrl: "https://www.voiceaispace.com/events",
    sourceLabel: "voiceaispace.com",
    watchNote:
      "Re-checked 2026-09-18: StepAudio 3 Launch + Coval Happy Hour pruned after Pacific Sep 16; Ship a Voice Agent (leverage-0gfk) rescheduled to Oct 25 (not pruned). NEW: Gemini Audio | At Night (Sep 24, The Pearl — rsvp.withgoogle.com/events/gemini-audio-at-night) + Decagon Dialogues (Oct 1, CJM SF — Decagon Voice research + Twilio programmable-voice session). Owned SF Build Night (xwnkujzr, Sep 24) + London Build Night (k74g72a0, Oct 1 — Encode Club; same night as Deepgram×Pipecat prkbq50k + Speechmatics×Tuner pyhvutqe). Still upcoming: Sep 19–20 AGI House voice weekend, Oct 13 Agentic + AI Observability SF, Oct 14 Gladia×pyannoteAI×Modal Paris, Oct 29 Deepgram Speak SF, Nov 5 Voice Agents Forum, Nov 11 VapiCon, Nov 18 Voice AI Summit London (voiceaisummit — venue still TBA). Do not trust voiceaispace’s Sep 16 date for Voice Agents Forum — Luma voiceagentssf is Nov 5. Skip Cartesia×Lorikeet drinks (bz8x2v1s), builders-sep26 / lsjiq8kf year traps, Agora Empathy dinner. Owned AssemblyAI × lablab hackathon Sep 1–30 still in directSubmissions.",
  },
];

export const pastEvents2026: PastEvent[] = [
  {
    id: "stepaudio-3-launch-meetup-sep-2026",
    name: "Voice AI Meetup: StepAudio 3 Launch ft. PLAUD, Cresta, Coval & SGLang",
    dateLabel: "Sep 16",
    location: "San Francisco (SoMa)",
    note: "StepFun StepAudio 3 launch evening with PLAUD/Cresta/Coval/SGLang — kept for likely Bay Area voice-builder series recurrence",
  },
  {
    id: "ai-infra-summit-2026",
    name: "AI Infra Summit 2026",
    dateLabel: "Sep 15–17",
    location: "Santa Clara Convention Center",
    note: "Infra-focused AI conference + hybrid hackathon — kept for likely annual recurrence / Bay Area infra-builder monitoring",
  },
  {
    id: "audio-layer-voice-x-robotics-sep-2026",
    name: "The Audio Layer 3.0: Voice x Robotics",
    dateLabel: "Sep 15",
    location: "Tavus office, 35 Stillman St, San Francisco",
    note: "ai-coustics × Tavus voice×robotics evening (LiveKit GM Robotics on panel) — kept for likely Audio Layer series recurrence / Bay Area voice-builder monitoring",
  },
  {
    id: "assemblyai-nyc-voice-ai-meetup-sep-2026",
    name: "NYC Voice AI Meetup: Build Smarter Voice Agents",
    dateLabel: "Sep 1",
    location: "New York, NY (AssemblyAI × LiveKit)",
    note: "Owned AssemblyAI × LiveKit NYC voice-agent meetup — kept for cadence / likely recurrence planning",
  },
  {
    id: "guava-voice-ai-hackathon-sf-2026",
    name: "Guava Voice AI Hackathon: Build Night SF",
    dateLabel: "Aug 29",
    location: "House of AI, 40 Boardman Pl, San Francisco",
    note: "One-evening voice-agent hackathon (Guava) — kept for likely recurrence / Bay Area voice-builder monitoring",
  },
  {
    id: "ray-summit-2026",
    name: "Ray Summit 2026",
    dateLabel: "Aug 24–26",
    location: "San Francisco",
    note: "Anyscale distributed-AI / Ray conference — kept for annual Bay Area recurrence reference",
  },
  {
    id: "modcon-2026",
    name: "ModCon 2026: Compute Unlocked",
    dateLabel: "Aug 18",
    location: "Grand Hyatt San Francisco",
    note: "Modular developer conference on AI compute — kept for annual Bay Area recurrence reference",
  },
  {
    id: "cerebras-supernova-2026",
    name: "Cerebras SUPERNOVA 2026",
    dateLabel: "Aug 18",
    location: "The Midway, San Francisco",
    note: "Cerebras flagship inference/developer event — kept for annual Bay Area recurrence reference",
  },
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

export const researchDate = "2026-09-16";
