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
 * Confirmed research date: 2026-10-30. Dates and venues sourced from
 * organizer domains — see sourceUrl on each event.
 */
const scrapedEvents: CalEvent[] = [
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
  // 2026-10-30 (~09:00 PT / 16:00 UTC).
  // (api.luma.com/discover, place discplace-BDj7GNbGlsF7Cka), filtered to
  // AI / voice-agent-relevant listings. 57 discover entries across 3 pages.
  // Pruned Speak '26 + owned Text-to-Screech (both Oct 29) → pastEvents2026 after
  // Pacific end. NEW Bay Area add: Coval × Cloudflare production Voice AI fireside
  // (iq4hna2x, Nov 3 5:30–8pm PT). SANE Oct 30 still live today; msrwwjby
  // Oct 27–Nov 7 still live via event/get (AssemblyAI cal items empty). Vapi
  // Dec 9 NYC slug vapi-pjzk → 404; replaced by ai-summit-ny-after-hours on
  // Vapi cal (vendorEvents). Skipped low-signal: Night Hack / Cafe Compute /
  // Fireworks×MS×NVIDIA / Mistral Make SF Better / Braintrust evals / After
  // Tokens / Stripe Build Day / Wispr Flow / Backprop / DNAForge / She Builds /
  // EliseAI rooms. Still skip Cartesia Agent's Table (srbdv0c2) + NYC Multimodal
  // Research Panel (0960vqe8) + Speechmatics 59dy3crh + Vapi healthcare dinner
  // vapi-2wdx. Year traps: 3zsy5yq2 Nov 2025, dihiwe4q Apr 2026, ch986w6u Feb
  // 2026. Re-verified deepgram-2jm5 Nov 17 PST (Luma open; Meetup also open),
  // Voice Agents Forum Nov 5, VapiCon Nov 11–12, Cartesia 94y4it1j Nov 3 +
  // xrj6gzm2 Nov 10, Agora Lisbon Nov 10 + NYC Nov 17, fimimqjw Dec 3 6–8:30pm
  // GMT. AGI House / LiveKit / Daily / Smallest cals empty. ElevenAgents
  // Hackathon London Nov 17–18 still 200; Build Series slugs still HTTP 404.
  {
    id: "coval-cloudflare-production-voice-ai-sf",
    name: "Building Voice AI That Holds Up in Production: Coval × Cloudflare",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Nov 3, 5:30–8pm PT",
    sortDate: "2026-11-03",
    month: "2026-11",
    location: "Cloudflare SF, 101 Townsend St, San Francisco",
    description:
      "Coval × Cloudflare SF evening on production voice-agent reliability — latency sources, conversation state, pre-launch testing, and human-review triggers — with Coval CEO Brooke Hopkins and Cloudflare Voice AI PM Korinne Alpers. Same calendar day as Cartesia Managed Agents webinar and Rasa NYC; strong Bay Area voice-eval / production-ops DevRel room the week before Voice Agents Forum (luma.com/iq4hna2x as of 2026-10-30).",
    sourceUrl: "https://luma.com/iq4hna2x",
    sourceLabel: "luma.com",
    topics: ["voice-agents", "streaming"],
    topicNote:
      "Dedicated production voice-agent reliability fireside (eval + realtime stack) — not a generic agent-tooling mixer.",
  },
  {
    id: "rasa-agent-factory-voice-masterclass-nyc",
    name: "Build an Agent Factory with OpenAI’s Agents API and Rasa Mantle",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Nov 3, 3–6pm ET",
    sortDate: "2026-11-03",
    month: "2026-11",
    location: "The Assembly, 2 Park Ave, New York, NY",
    description:
      "Rasa-hosted NYC workshop — start from a working customer-service voice agent on Rasa Mantle, then use OpenAI’s Agents API to investigate failures, propose fixes, and re-run evals in a small “agent factory” loop. Hands-on CX / voice-agent engineering room the week before VapiCon (luma.com/56nl6dpz title refresh as of 2026-10-20).",
    sourceUrl: "https://luma.com/56nl6dpz",
    sourceLabel: "luma.com",
    topics: ["voice-agents"],
    topicNote:
      "Dedicated customer-service voice-agent build/test workshop on Rasa — CX voice-agent DevRel room, not an STT benchmark session.",
  },
  {
    id: "sane-2026-speech-audio-northeast",
    name: "SANE 2026 — Speech and Audio in the Northeast",
    category: "conference",
    status: "confirmed",
    dateLabel: "Oct 30",
    sortDate: "2026-10-30",
    month: "2026-10",
    location: "Thomas Tull Concert Hall (MIT W18), 201 Amherst St, Cambridge, MA",
    description:
      "One-day Northeast speech/audio research workshop at MIT — invited talks from academic and industry speech labs (IBM, Google, Johns Hopkins, Northwestern, etc.). Highest-signal East Coast ASR / audio-ML research room in this window; adjacent to DCASE/AIR workshop week (saneworkshop.org + voiceaispace as of 2026-10-04).",
    sourceUrl: "https://www.saneworkshop.org/sane2026/",
    sourceLabel: "saneworkshop.org",
    topics: ["stt", "audio-intel"],
    topicNote:
      "Academic speech/audio research day — STT / audio-intel researcher audience, not a voice-agent product summit.",
  },
  {
    id: "ai-engineer-code-summit-2026",
    name: "AI Engineer Code Summit 2026",
    category: "conference",
    status: "confirmed",
    dateLabel: "Nov 10–12",
    sortDate: "2026-11-10",
    endDate: "2026-11-12",
    month: "2026-11",
    location: "Hilton San Francisco Union Square, San Francisco",
    description:
      "AI Engineer’s code/engineering conference for practitioners shipping AI systems — same SF week as VapiCon (Nov 11–12). Strong agent-builder attendance and calendar-conflict room for DevRel coverage planning; agenda is not voice-specific.",
    sourceUrl: "https://ai.engineer/code/2026",
    sourceLabel: "ai.engineer",
  },
  {
    id: "multimodal-ai-education-hackathon-snowflake-2026",
    name: "Multi-Modal AI for Education Hackathon @ Snowflake — Beta Fund × Epic",
    category: "hackathon",
    status: "confirmed",
    dateLabel: "Nov 13, 9am–5:30pm PT",
    sortDate: "2026-11-13",
    month: "2026-11",
    location: "Snowflake Silicon Valley AI Hub, Menlo Park, CA",
    description:
      "One-day Beta Fund × Epic multimodal education hackathon at Snowflake’s Menlo Park AI hub — explicit Voice & Audio Tutors track plus realtime multimodal tutor/agent tracks. Day after VapiCon; strong STT / audio-intel pitch room for builders shipping listen-and-respond learning tools (luma.com/beta-3ue5 as of 2026-10-13).",
    sourceUrl: "https://luma.com/beta-3ue5",
    sourceLabel: "luma.com",
    topics: ["stt", "audio-intel"],
    topicNote:
      "Voice & Audio Tutors is an explicit track — speech/audio modality pitch, not a dedicated phone voice-agent hackathon.",
  },
  {
    id: "cartesia-multimodal-research-first-look-sf",
    name: "First Look: Multimodal Research with Cartesia",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Nov 10, 6:30–9pm PT",
    sortDate: "2026-11-10",
    month: "2026-11",
    location: "San Francisco, CA (Marina District; exact venue on registration)",
    description:
      "Cartesia invite-gated SF evening first look at multimodal research for voice/conversational builders — product preview plus discussion during AI Engineer Code Summit week. Same Luma room as the prior Speech-to-Speech First Look listing (luma.com/xrj6gzm2); title refreshed on cal-EeDJt2cPbgGca1W as of 2026-10-22. Same calendar day as Agora Lisbon Scaling Voice AI.",
    sourceUrl: "https://luma.com/xrj6gzm2",
    sourceLabel: "luma.com",
    topics: ["tts", "voice-agents", "audio-intel"],
    topicNote:
      "Cartesia multimodal / voice-model first-look evening — TTS and audio-modality mindshare, not an STT benchmark session.",
  },
  {
    id: "deepgram-vapi-phone-voice-agent-workshop-sf",
    name: "Build Your First Phone Voice Agent — Deepgram × Vapi Workshop",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Nov 17, 6–9pm PT",
    sortDate: "2026-11-17",
    month: "2026-11",
    location: "Deepgram SF Collab Hub, 505 Howard St Suite 100, San Francisco",
    description:
      "Deepgram × Vapi hands-on evening at Deepgram’s SoMa collab hub — guided build of a phone voice agent that answers real calls, with both vendors’ developer advocates unblocking attendees. DATE CORRECTION 2026-10-04: live event/get + Deepgram cal-qHEDltsO0Gr0WtD + Vapi cal + voiceaispace moved this from Nov 18 to Nov 17 (week after VapiCon); still the highest-signal Bay Area Deepgram×Vapi developer-education room.",
    sourceUrl: "https://luma.com/deepgram-2jm5",
    sourceLabel: "luma.com",
    topics: ["voice-agents", "stt", "streaming"],
    topicNote:
      "Dedicated phone voice-agent build night co-hosted by Deepgram and Vapi — direct STT + voice-agent platform mindshare vs AssemblyAI builders.",
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
  // 2026-09-25: owned SF Voice AI Meetup (xwnkujzr, Sep 24) → pastEvents2026
  // after Pacific day.
  // 2026-09-29: owned Hardware hackathon — Furby voice agent (w9e4qgol, Oct 7)
  // surfaced on AssemblyAI Luma cal-R9IQUb53FUrolUF (missed discover).
  // 2026-09-30: owned AssemblyAI × lablab Voice Agent Hackathon (Sep 1–30)
  // → pastEvents2026 after endDate 8am PT passed.
  // 2026-10-02: London Build Night (k74g72a0) → pastEvents2026 after BST
  // Oct 1; Furby (w9e4qgol) was sole upcoming owned room on
  // AssemblyAI cal-R9IQUb53FUrolUF.
  // 2026-10-08: Furby (w9e4qgol) → pastEvents2026 after Pacific Oct 7;
  // AssemblyAI cal-R9IQUb53FUrolUF was empty until Text-to-Screech appeared.
  // 2026-10-14: NEW owned Text-to-Screech Haunted TTS Launch (assemb-42oc,
  // Oct 29 5–8pm PT) on AssemblyAI cal — same day as Deepgram Speak '26.
  // 2026-10-16: NEW owned Voice hackathon week — Hack into speech (msrwwjby,
  // Discord) on AssemblyAI cal — TTS API hackathon + live kickoff.
  // 2026-10-20: DATE CORRECTION — event/get moved msrwwjby to Oct 27–Nov 7
  // (was Oct 16–24; Luma body copy still stale).
  // 2026-10-30: Text-to-Screech (assemb-42oc) → pastEvents2026 after Pacific
  // Oct 29 end; Speak '26 also → pastEvents2026. msrwwjby still sole upcoming
  // owned room (cal items empty; event/get live through Nov 7).
  {
    id: "assemblyai-voice-hackathon-week-hack-into-speech-oct2026",
    name: "Voice hackathon week: Hack into speech",
    category: "hackathon",
    status: "confirmed",
    dateLabel: "Oct 27–Nov 7",
    sortDate: "2026-10-27",
    endDate: "2026-11-07",
    month: "2026-10",
    location: "Online (Discord)",
    description:
      "Owned AssemblyAI online voice hackathon focused on the new Text-to-Speech API — live kickoff build of a working TTS app with Voice AI engineers, then teams of 1–4 ship voice agents / audio products ($2k prize pool). DATE CORRECTION 2026-10-20: live event/get (msrwwjby) is now Oct 27 7pm–Nov 7 11am PT on AssemblyAI cal-R9IQUb53FUrolUF (was Oct 16–24; Luma body copy still shows stale Oct 15–23 — trust event/get).",
    sourceUrl: "https://luma.com/msrwwjby",
    sourceLabel: "luma.com",
    topics: ["tts", "voice-agents"],
    topicNote:
      "Owned AssemblyAI TTS hackathon week — primary pitch is new TTS API for voice products; not an STT benchmark room.",
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
      "One-day AAIF Community forum for teams shipping voice agents in production — latency, turn-taking, barge-in, evaluation, observability, human handoff. Confirmed speakers include Deepgram Sr. DevRel Sam Gutentag plus Moonshine AI, AudioShake, Coval, Fish Audio, Phonely, Delphi, and ServiceNow. Highest-signal Bay Area room the week before VapiCon (Luma lists Nov 5, 9am–5:30pm PT as of 2026-10-19).",
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
      "80+ build-a-thons hosted historically (Lovable, Perplexity emerged from these); runs multiple/week with partners like OpenAI. Attendance is merit-based/invite-only. Sep 19 Voice AI Hackathon (Hume-sponsored) just passed — watch for the next AGI House voice-agent weekend.",
    sourceUrl: "https://luma.com/agi-house",
    sourceLabel: "luma.com/agi-house",
    watchNote:
      "Re-checked 2026-10-30: public Luma calendar cal-Lv1pgYv5ITFR4tC still empty (no dated upcoming items). Voice AI Hackathon (Sep 19) + AI Debates (aidebates delist) remain in pastEvents2026 for voice-format recurrence watch; no new AGI House voice/agent rooms surfaced this pass.",
  },
  {
    id: "lablab-ai-hackathons",
    name: "lablab.ai hackathon calendar",
    category: "hackathon",
    cadence: "Continuous, themed hackathons",
    location: "Hybrid — online + occasional Bay Area on-site",
    description:
      "Runs continuous themed hackathons (recent: ExecuTorch/Qualcomm x Meta on-site in SF). Owned AssemblyAI Voice Agent Hackathon (Sep 1–30) ended — in pastEvents2026; watch lablab.ai for the next voice-agent theme.",
    sourceUrl: "https://lablab.ai/ai-hackathons",
    sourceLabel: "lablab.ai",
  },
  {
    id: "anthropic-build-days",
    name: "Anthropic-sponsored build days",
    category: "hackathon",
    cadence: "Periodic — Sep 19 San Francisco | Claude Fable 5.1 Build Day has passed; watch anthropic.com/events for the next one",
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
      "Re-checked 2026-10-30: Discover 57/3 pages. NEW: Coval × Cloudflare production Voice AI (iq4hna2x, Nov 3 5:30–8pm PT). Speak '26 + Text-to-Screech → pastEvents2026 after Pacific Oct 29. Still live today: SANE Oct 30 + owned TTS hackathon week Oct 27–Nov 7 (msrwwjby event/get live; AssemblyAI cal items empty). Ahead: Coval×Cloudflare + Cartesia Managed Agents webinar Nov 3 9:30–10:30am PT + Rasa NYC, Voice Agents Forum Nov 5 (Deepgram DevRel on roster), Speechmatics × Roark London Nov 5 (c0iiab0e), Vapi×Deepgram mixer Nov 9, Agora Lisbon + Cartesia Multimodal First Look SF + AI Engineer Code Summit Nov 10–12, VapiCon Nov 11–12, Multi-Modal Education Hackathon Snowflake Nov 13, Deepgram×Vapi phone workshop Nov 17 (Luma open; Meetup also open) + Agora Voice AI Workshop NYC Nov 17 + ElevenAgents Hackathon London Nov 17–18, Bolna Symphony Nov 20, Twilio London Dec 2 + Deepgram HealthTech London Dec 3, Vapi × LangChain AI Summit NYC after-hours Dec 9 (ai-summit-ny-after-hours; replaced 404'd vapi-pjzk). Skip Speechmatics leaders dinner 59dy3crh / Cartesia Agent's Table / NYC Multimodal Research Panel 0960vqe8 / Vapi healthcare dinner vapi-2wdx / EliseAI rooms / Wispr Flow / After Tokens / ElevenAgents Build Series (still HTTP 404) / year traps (dihiwe4q Apr, ch986w6u Feb, 3zsy5yq2 Nov 2025). Beyond the Cloud webinar page still 404. Do not trust voiceaispace Sep 16 date for Voice Agents Forum — Luma voiceagentssf is Nov 5.",
  },
];

export const pastEvents2026: PastEvent[] = [
  {
    id: "deepgram-speak-26",
    name: "Deepgram Speak '26",
    dateLabel: "Oct 29",
    location: "The Aviary, 135 Fourth St Ste 4000, San Francisco",
    note: "Deepgram flagship one-day SF voice-AI conference (deepgram.com/speak) with Vapi/Daily-Pipecat/Twilio/Cresta/Sierra/Coval/AWS on roster — kept for annual competitive ecosystem-map / Speak recurrence watch; same calendar day as owned Text-to-Screech",
  },
  {
    id: "assemblyai-text-to-screech-tts-launch-oct29-2026",
    name: "Text-to-Screech: Haunted TTS Launch Event",
    dateLabel: "Oct 29",
    location: "San Francisco, CA (Financial District)",
    note: "Owned AssemblyAI TTS launch evening (luma.com/assemb-42oc) same day as Deepgram Speak '26 — kept for owned Bay Area TTS launch cadence / recurrence planning",
  },
  {
    id: "cartesia-voice-ai-models-to-real-world-sf",
    name: "Voice AI: From Models to Real-World Experiences — Cartesia × Lorikeet × Speak",
    dateLabel: "Oct 28",
    location: "San Francisco, CA (Mission District / Cartesia HQ)",
    note: "Cartesia-hosted SF Voice AI product fireside (luma.com/bz8x2v1s; Cartesia/Lorikeet/Speak) the night before Speak '26 / Text-to-Screech — kept for Bay Area competitive voice-product fireside / partner-night recurrence watch",
  },
  {
    id: "open-source-ai-week-2026",
    name: "Open Source AI Week",
    dateLabel: "Oct 16–25",
    location: "Bay Area, CA",
    note: "Linux Foundation open-source AI week umbrella (PyTorch NA + AGNTCon/MCPCon flagships already past) — kept for annual Bay Area open-source AI week / infra-builder recurrence watch",
  },
  {
    id: "luma-ship-voice-agent-workshop",
    name: "Ship a Voice Agent: A Hands-On Build Workshop",
    dateLabel: "Oct 25",
    location: "San Francisco, CA",
    note: "Leverage / Nir Naamani afternoon voice-agent build workshop (luma.com/leverage-0gfk) — kept for Bay Area dedicated voice-agent workshop format / recurrence watch",
  },
  {
    id: "agntcon-mcpcon-north-america-2026",
    name: "AGNTCon + MCPCon North America: The AI Agents Conference",
    dateLabel: "Oct 22–23",
    location: "San Jose McEnery Convention Center, San Jose, CA",
    note: "Linux Foundation / Agentic AI Foundation two-day San Jose agentic engineering conference (~3,500) — kept for annual Bay Area agent-infra / MCP builder recurrence watch",
  },
  {
    id: "luma-multi-model-hackathon-aws-loft",
    name: "Beta Fund × AWS × OpenAI Multi-Model Hackathon",
    dateLabel: "Oct 23",
    location: "AWS Builder Loft, 525 Market St, San Francisco",
    note: "One-day multimodal hackathon at AWS Builder Loft (audio/voice modalities in scope) — kept for AWS Loft multimodal-build cadence / STT pitch recurrence watch",
  },
  {
    id: "pytorch-conference-north-america-2026",
    name: "PyTorch Conference North America 2026",
    dateLabel: "Oct 20–21",
    location: "San Jose Convention Center, San Jose, CA",
    note: "Linux Foundation / PyTorch Foundation two-day North America open-source AI systems conference — kept for annual Bay Area infra-builder recurrence / Open Source AI Week adjacency watch",
  },
  {
    id: "mitai-conference-age-of-agency-2026",
    name: "MITAI Conference 2026: Age of Agency",
    dateLabel: "Oct 17",
    location: "Computer History Museum, 1401 N Shoreline Blvd, Mountain View",
    note: "10th annual MIT Alumni Startups AI conference (Age of Agency; Sierra co-founder Bret Taylor on roster) — kept for annual Bay Area applied-agent / CX-adjacent recurrence watch",
  },
  {
    id: "von-voice-conversations-atlanta-2026",
    name: "Fall '26 Voice and Conversations on the Net (VON)",
    dateLabel: "Oct 13–15",
    location: "Sandy Springs Performing Arts Center, Atlanta, GA",
    note: "Jeff Pulver AI-communications / VoiceAI LIVE! conference (SignalWire confirmed; Vapi invited) — kept for annual contact-center / voice-agent industry recurrence watch",
  },
  {
    id: "open-intelligence-summit-sf-2026",
    name: "Open Intelligence Summit",
    dateLabel: "Oct 12–13",
    location: "The Midway, 900 Marin St, San Francisco",
    note: "DigitalOcean open-weights / open-infra summit (workshop day + digita-ghqh evening) — kept for annual Bay Area open-infra / agent-memory builder recurrence watch",
  },
  {
    id: "a16z-tech-week-2026",
    name: "a16z Tech Week",
    dateLabel: "Oct 5–11",
    location: "San Francisco (citywide)",
    note: "Citywide Tech Week ecosystem (tech-week.com) — kept for annual SF builder-week recurrence / voice-side-event monitoring",
  },
  {
    id: "outdoor-voice-coding-hackathon-techweek-2026",
    name: "touch ./GRASS — Outdoor Voice Coding Hackathon (SF Tech Week)",
    dateLabel: "Oct 11",
    location: "Stanford University, Palo Alto",
    note: "Openbase × Maritime × Sundai Club voice-first outdoor coding-agent hackathon (Partiful 9LIzPkFXp0xQpzjqryNJ) — kept for Tech Week / speech-input coding-agent format recurrence",
  },
  {
    id: "ai-native-summit-sf-techweek-2026",
    name: "AI Native Summit — SF TechWeek 2026",
    dateLabel: "Oct 9",
    location: "847 Howard St, San Francisco",
    note: "a16z Tech Week builder summit (luma.com/3t95uj7s) — technical talks, build labs, hack finals; kept for Tech Week / AI-native builder summit recurrence watch",
  },
  {
    id: "voice-research-club-sf-techweek-2026",
    name: "Voice Research Club at SF Tech Week — Meta Muse TTS + NVIDIA Nemotron 3 Diarization",
    dateLabel: "Oct 8",
    location: "San Francisco, CA",
    note: "Voice Arena × Frontier Research Club paper night (luma.com/yd93ae7y) — Meta Muse TTS + NVIDIA Nemotron 3 Diarization; kept for Bay Area speech-research series / Voice Arena recurrence watch",
  },
  {
    id: "cresta-voice-mode-on-hackathon-techweek-2026",
    name: "Agent Hackathon: Voice Mode On — Cresta × Anthropic (SF Tech Week)",
    dateLabel: "Oct 7",
    location: "San Francisco, CA (SoMa)",
    note: "Cresta × Anthropic phone voice-agent hackathon (Partiful bq3rFJ5Lfqyjtryj5v9I) — kept for contact-center / enterprise voice-agent competitive cadence and likely Tech Week recurrence",
  },
  {
    id: "assemblyai-hardware-hackathon-furby-voice-agent-oct7-2026",
    name: "Hardware hackathon: turn a vintage toy into a voice agent",
    dateLabel: "Oct 7",
    location: "San Francisco, CA (AssemblyAI)",
    note: "Owned AssemblyAI Furby hardware voice-agent hackathon (luma.com/w9e4qgol) — kept for owned Bay Area cadence / recurrence planning",
  },
  {
    id: "solving-voice-as-interface-techweek-2026",
    name: "Solving 'voice' as an interface — SF Tech Week (Aqua × Speechmatics × LiveKit)",
    dateLabel: "Oct 7",
    location: "San Francisco, CA",
    note: "Speechmatics × LiveKit × Aqua Tech Week STT/realtime engineering evening (Partiful Qfb44oJOo4cYvr64J7Kw) — kept for Bay Area STT competitive mindshare / likely partner-night recurrence",
  },
  {
    id: "conversational-ai-gaming-hackathon-techweek-2026",
    name: "Conversational AI × Gaming Hackathon — SF Tech Week",
    dateLabel: "Oct 7",
    location: "Stonestown, San Francisco",
    note: "Full-day conversational/voice-agent gaming hackathon (Partiful W25eAHOwujJeD9lJKTat) — kept for Tech Week voice-build format recurrence",
  },
  {
    id: "data-streaming-summit-2026",
    name: "Data Streaming Summit 2026",
    dateLabel: "Oct 7",
    location: "Hotel Nikko San Francisco",
    note: "Data Streaming + Agent Infra conference — kept for annual Bay Area agent-infra recurrence / streaming-audio adjacency watch",
  },
  {
    id: "the-ai-conference-2026",
    name: "The AI Conference 2026",
    dateLabel: "Sep 29–Oct 1",
    location: "Pier 48, San Francisco",
    note: "Vendor-neutral AGI/LLM/agentic conference (~5,500) — kept for annual Bay Area recurrence / voice-agent attendance monitoring",
  },
  {
    id: "decagon-dialogues-2026",
    name: "Decagon Dialogues 2026",
    dateLabel: "Oct 1",
    location: "Contemporary Jewish Museum, San Francisco",
    note: "Decagon flagship CX / conversational-AI conference with Decagon Voice research + Twilio Programmable Voice sessions — kept for annual contact-center voice room recurrence",
  },
  {
    id: "runtime-by-modal-2026",
    name: "Runtime by Modal",
    dateLabel: "Oct 1",
    location: "The Midway, San Francisco",
    note: "Modal full-day AI runtime infra conference — kept for annual Bay Area infra-builder recurrence / Gladia×Modal voice-infra adjacency",
  },
  {
    id: "assemblyai-london-voice-ai-meetup-oct1-2026",
    name: "London Voice AI Meetup: Build your own voice app",
    dateLabel: "Oct 1",
    location: "London, United Kingdom (AssemblyAI × Encode Club)",
    note: "Owned AssemblyAI × Encode Club London dictation / voice-input meetup (luma.com/k74g72a0) — same evening as Deepgram×Pipecat + Speechmatics×Tuner; kept for owned EU cadence / recurrence planning",
  },
  {
    id: "openai-devday-2026",
    name: "OpenAI DevDay 2026",
    dateLabel: "Sep 29",
    location: "Fort Mason, San Francisco",
    note: "OpenAI flagship developer conference — kept for annual recurrence / Realtime + voice-agent API session monitoring",
  },
  {
    id: "assemblyai-voice-agent-hackathon-lablab-sep-2026",
    name: "AssemblyAI — Voice Agent Hackathon (lablab.ai)",
    dateLabel: "Sep 1–30",
    location: "Online (lablab.ai)",
    note: "Owned month-long online voice-agent hackathon with lablab.ai ($10k prize pool) — kept for owned hackathon cadence / likely recurrence planning",
  },
  {
    id: "cv-agent-arena-hackathon-sep-2026",
    name: "The Agent Arena Hackathon",
    dateLabel: "Sep 26–27",
    location: "San Francisco (Vultr × Cerebral Valley)",
    note: "Two-day Vultr × Cerebral Valley production agent-infra hackathon — kept for likely Cerebral Valley agent-hack recurrence / Bay Area agent-builder monitoring",
  },
  {
    id: "healthcare-ai-hackathon-aws-loft-sep-2026",
    name: "Healthcare AI Hackathon",
    dateLabel: "Sep 26",
    location: "AWS Builder Loft, 525 Market St, San Francisco",
    note: "OpenAI × AWS healthcare AI build day — kept for ambient-scribe / clinical-audio STT pitch recurrence at AWS Builder Loft",
  },
  {
    id: "assemblyai-sf-voice-ai-meetup-sep24-2026",
    name: "SF Voice AI Meetup: Build your own voice app",
    dateLabel: "Sep 24",
    location: "San Francisco, CA (AssemblyAI)",
    note: "Owned AssemblyAI SF Voice AI Meetup (dictation / voice-input build night, luma.com/xwnkujzr) — kept for owned Bay Area cadence / recurrence planning",
  },
  {
    id: "gemini-audio-at-night-sf-sep-2026",
    name: "Gemini Audio | At Night",
    dateLabel: "Sep 24",
    location: "The Pearl, 601 19th St, San Francisco",
    note: "Google DeepMind / Gemini Audio developer evening — kept for Google Cloud Speech / Gemini Live competitive mindshare and likely Gemini audio series recurrence",
  },
  {
    id: "agi-house-voice-ai-hackathon-sep-2026",
    name: "Voice AI Hackathon: SambaNova + General Compute + Infinity + Hume",
    dateLabel: "Sep 19",
    location: "AGI House SF, 170 St. Germain Ave, San Francisco",
    note: "AGI House voice-agent hackathon (Hume-sponsored) — kept for likely AGI House voice-weekend recurrence / Bay Area voice-builder monitoring",
  },
  {
    id: "agi-house-ai-debates-hackathon-sep-2026",
    name: "The AI Debates Hackathon",
    dateLabel: "Sep 20 (tracked; Luma delisted)",
    location: "AGI House SF, 170 St. Germain Ave, San Francisco",
    note: "Voice-debate agent hackathon format (Hume/SambaNova sponsors) — Luma aidebates 404 as of 2026-09-20 after Sep 5→Sep 20 reschedule tracking; kept for AGI House voice-format recurrence watch",
  },
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

export const researchDate = "2026-10-30";
