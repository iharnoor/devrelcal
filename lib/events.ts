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
 * Confirmed research date: 2026-10-02. Dates and venues sourced from
 * organizer domains — see sourceUrl on each event.
 */
const scrapedEvents: CalEvent[] = [
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
      "Linux Foundation / PyTorch event — inaugural edition ran Oct 18–26, 2025. 2026 hub dates still TBA on the LF page, but Open Weight Debate Night (luma.com/592fcwx2, Oct 19 evening PT) confirms a Bay Area 2026 edition is running — treat as tentative until the official schedule posts.",
    sourceUrl: "https://events.linuxfoundation.org/open-source-ai-week/",
    sourceLabel: "events.linuxfoundation.org",
    note: "Tentative — Debate Night Oct 19 confirms activity; check LF schedule before calendaring the full week",
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
  // 2026-10-02 (UTC afternoon / Pacific morning).
  // (api.luma.com/discover, place discplace-BDj7GNbGlsF7Cka), filtered to
  // AI / voice-agent-relevant listings. 66 discover entries across 3 pages.
  // Pruned after Pacific day Oct 1: The AI Conference, Decagon Dialogues,
  // Runtime by Modal, London three-way (Deepgram×Pipecat / Speechmatics×Tuner
  // / owned AssemblyAI k74g72a0). Ship an AI Voice Agent Workshop now also
  // mirrored on Luma leverage-pjc9 (Modulate × Tavily × Plivo; same Oct 6
  // 5:30pm PT as Partiful 7O725PQ56Ki4P8gHKyiM). NEW competitor: Bolna
  // Symphony 2026 (Nov 20 Bengaluru — Deepgram + Cartesia named partners;
  // vendorEvents). Re-verified: AGI House GPU Oct 3, Vonage×Deepgram lunch
  // Oct 6, Ship workshop + Agora Prototype→Production Oct 6, SignalWire
  // Palo Alto Oct 6, Coffee CARTesia Oct 7 AM (vendor), Furby + Product
  // Leadership + Solving voice + Wire workflow Oct 7 eve, Conversational
  // AI × Gaming day Oct 7, Voices in the Room Coval×Cartesia Oct 8 (vendor),
  // Outdoor Voice Coding Oct 11 Stanford, Deepgram×Vapi Oct 14, Ship a
  // Voice Agent Oct 25 (leverage-0gfk), Speak '26 Oct 29, VON Atlanta
  // Oct 13–15, AI Engineer Code Summit Nov 10–12, Vapi×Deepgram mixer
  // Nov 9. Skipped: Claude Connected Agents, Haunted Agent Horror Night,
  // SF Tech Week AI Demo Night, Supabase Select / hackathon, novita-oas6,
  // Company Brain, OpenTogether, MITAI Age of Agency, Conversational AI
  // Dinner Bluejay, Cartesia×Lorikeet, Vapi yacht, Voice AI Dinner London,
  // ElevenLabs AdWeek NYC, luma.com/voiceagents + lsjiq8kf + ai-coding-hack
  // + builders-sep26 (2025 year traps).
  {
    id: "luma-agi-house-gpu-energy-agents",
    name: "Can AI Agents Make GPUs More Energy Efficient?",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Oct 3, 4–6pm PT",
    sortDate: "2026-10-03",
    month: "2026-10",
    location: "AGI House SF, 170 St. Germain Ave, San Francisco",
    description:
      "AGI House evening on self-improving agents that tune inference serving for lower energy per request — Traversaal / energy.traversaal.ai architecture deep dive. Rescheduled from Sep 22 to Oct 3; Luma title refreshed and end time confirmed 4–6pm PT via live event/get (gpuenergyoptimization) as of 2026-09-29.",
    sourceUrl: "https://luma.com/gpuenergyoptimization",
    sourceLabel: "luma.com",
  },
  {
    id: "vonage-deepgram-voice-ai-in-the-wild-techweek",
    name: "Voice AI in the Wild: Demos & Lunch with Vonage + Deepgram",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Oct 6, 11am–2pm PT",
    sortDate: "2026-10-06",
    month: "2026-10",
    location: "Deepgram SF Collab Hub, 505 Howard St #100, San Francisco",
    description:
      "a16z SF Tech Week midday at Deepgram’s SoMa hub — Vonage × Deepgram live demos of Voice API + speech intelligence (AI voice agents and real-time transcription), lunch, and open networking for developers/founders evaluating voice infra. Same calendar day as SignalWire Palo Alto, Ship an AI Voice Agent Workshop, and Agora’s Prototype→Production evening; strongest Deepgram×telco distribution signal of Tech Week (Partiful via voiceaispace).",
    sourceUrl: "https://partiful.com/e/Gp49nL2GPStlf9AlRpms",
    sourceLabel: "partiful.com",
    topics: ["voice-agents", "stt", "streaming"],
    topicNote:
      "Explicit Vonage Voice API + Deepgram STT/agent demos — direct competitive mindshare for phone/voice-agent builders during Tech Week.",
  },
  {
    id: "ship-ai-voice-agent-workshop-techweek",
    name: "Ship an AI Voice Agent Workshop — SF Tech Week",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Oct 6, 5:30–8:30pm PT",
    sortDate: "2026-10-06",
    month: "2026-10",
    location: "Inner Mission, San Francisco (exact venue on registration)",
    description:
      "SF Tech Week hands-on evening — crash course then build sprint where attendees bring their own voice-agent stack, add realtime guardrails (fraud/hallucinations/compliance), and have the agent answer a live phone call in front of judges. Mentors/API credits from Modulate, Tavily, and Plivo (Luma mirror luma.com/leverage-pjc9, same host/time as Partiful). Same 5:30–8:30pm PT window as Agora Prototype→Production; strong phone-agent builder room the same day as Vonage×Deepgram lunch and SignalWire Palo Alto.",
    sourceUrl: "https://partiful.com/e/7O725PQ56Ki4P8gHKyiM",
    sourceLabel: "partiful.com",
    topics: ["voice-agents", "streaming"],
    topicNote:
      "Dedicated live phone-call voice-agent build workshop — high-signal Tech Week room for AssemblyAI phone/voice-agent DevRel; stack-agnostic (bring your own).",
  },
  {
    id: "agora-prototype-to-production-voice-ai-techweek",
    name: "From Prototype to Production: Scaling Voice AI — SF Tech Week",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Oct 6, 5:30–8:30pm PT",
    sortDate: "2026-10-06",
    month: "2026-10",
    location: "814 Mission St, San Francisco",
    description:
      "Agora Convo AI World evening during a16z SF Tech Week — panels and live demos on shipping production voice/conversational/realtime AI (voice agents, avatars, multimodal) with speakers from OpenAI, Autodesk, MiniMax, Bluejay, HammingAI, and thymia. Same 5:30–8:30pm PT window as Ship an AI Voice Agent Workshop; Bay Area competitive realtime-voice builder room (Partiful venue confirmed 814 Mission St as of 2026-10-01).",
    sourceUrl: "https://partiful.com/e/IL3sKweGcfohlDRJGFkk",
    sourceLabel: "partiful.com",
    topics: ["voice-agents", "streaming"],
    topicNote:
      "Agora-hosted production voice / conversational AI evening — realtime platform mindshare vs AssemblyAI voice-agent builders; not an STT-vendor room.",
  },
  {
    id: "conversational-ai-gaming-hackathon-techweek",
    name: "Conversational AI × Gaming Hackathon — SF Tech Week",
    category: "hackathon",
    status: "confirmed",
    dateLabel: "Oct 7, 10am–5pm PT",
    sortDate: "2026-10-07",
    month: "2026-10",
    location: "Stonestown, San Francisco (exact venue on registration)",
    description:
      "Full-day SF Tech Week hackathon (Cartorga × Mano Games) building games that talk back — voice-agent NPCs, conversational tutors, and AI werewolf-style tables; 9–5 build with 5pm demos/judging. Daytime Tech Week voice-agent build room ahead of the evening Furby / Solving voice / Product Leadership conflict cluster (Partiful W25eAHOwujJeD9lJKTat as of 2026-10-01).",
    sourceUrl: "https://partiful.com/e/W25eAHOwujJeD9lJKTat",
    sourceLabel: "partiful.com",
    topics: ["voice-agents"],
    topicNote:
      "Dedicated conversational/voice-agent hackathon — gaming framing, but the build surface is voice agents holding real conversations.",
  },
  {
    id: "voice-ai-product-leadership-panel-techweek",
    name: "Voice AI Product Leadership Panel — SF Tech Week",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Oct 7, 5:30–8:30pm PT",
    sortDate: "2026-10-07",
    month: "2026-10",
    location: "575 Market St 4th Floor, San Francisco",
    description:
      "SF Tech Week panel of Voice AI product leaders and founders — Asurion, Upstart, Rime, AudioShake, moderated by Coval’s CEO. Same evening as owned AssemblyAI hardware voice-agent hackathon, Speechmatics×LiveKit×Aqua engineering night, and Wire a Voice Agent Into a Real Workflow; stronger product/operator room than a hands-on build workshop (Partiful via voiceaispace).",
    sourceUrl: "https://partiful.com/e/qRX76YKI93J2I6sQ0mbN",
    sourceLabel: "partiful.com",
    topics: ["voice-agents"],
    topicNote:
      "Voice-AI product/operator panel (Rime/AudioShake/Coval) — ecosystem relationship room, not a dedicated STT engineering workshop.",
  },
  {
    id: "solving-voice-as-interface-techweek",
    name: "Solving 'voice' as an interface — SF Tech Week",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Oct 7, 5:30–8:30pm PT",
    sortDate: "2026-10-07",
    month: "2026-10",
    location: "San Francisco, CA (exact venue on registration)",
    description:
      "Aqua Voice × Speechmatics × LiveKit engineering evening on hard voice-interface problems — turn detection, diarization, endpointing, interruptions, and latency — then drinks/food. Highest-signal Tech Week STT/realtime engineering room the same night as owned AssemblyAI Furby voice-agent hackathon and the Voice AI Product Leadership Panel (Partiful via voiceaispace; Luma norm3pxo 404’d).",
    sourceUrl: "https://partiful.com/e/Qfb44oJOo4cYvr64J7Kw",
    sourceLabel: "partiful.com",
    topics: ["stt", "voice-agents", "streaming"],
    topicNote:
      "Dedicated engineering talks on turn-taking/diarization/endpointing from Speechmatics + LiveKit + Aqua — direct STT/realtime competitive mindshare.",
  },
  {
    id: "wire-voice-agent-real-workflow-techweek",
    name: "Wire a Voice Agent Into a Real Workflow — SF Tech Week",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Oct 7, 6:00–7:30pm PT",
    sortDate: "2026-10-07",
    month: "2026-10",
    location: "530 Hampshire St, San Francisco",
    description:
      "SF Tech Week working session (CallOlive) on production voice-agent deployment seams — phone numbers/trunking, ERP writebacks, human note-review gates, and rollback — dissected via a real will-call desk example. Same evening cluster as Furby / Solving voice / Product Leadership; more ops/systems than STT engineering (Partiful LqXEYtmayKc22xp5sATo as of 2026-10-01).",
    sourceUrl: "https://partiful.com/e/LqXEYtmayKc22xp5sATo",
    sourceLabel: "partiful.com",
    topics: ["voice-agents"],
    topicNote:
      "Production phone-agent workflow / systems-integration room — useful for contact-center voice deployment conversations, not a model/STT workshop.",
  },
  {
    id: "outdoor-voice-coding-hackathon-techweek",
    name: "touch ./GRASS — Outdoor Voice Coding Hackathon (SF Tech Week)",
    category: "hackathon",
    status: "confirmed",
    dateLabel: "Oct 11, 9:45am–6:30pm PT",
    sortDate: "2026-10-11",
    month: "2026-10",
    location: "Stanford University, Palo Alto",
    description:
      "Openbase × Maritime × Sundai Club full-day outdoor Tech Week hackathon at Stanford — build by directing coding agents from your phone by voice (speech-to-speech preferred), then demo. Strong speech-input / voice-agent builder room closing Tech Week weekend (Partiful 9LIzPkFXp0xQpzjqryNJ as of 2026-10-01).",
    sourceUrl: "https://partiful.com/e/9LIzPkFXp0xQpzjqryNJ",
    sourceLabel: "partiful.com",
    topics: ["voice-agents", "stt"],
    topicNote:
      "Voice-first coding-agent hackathon — STT/speech-to-speech is the interaction surface; not a phone-agent or ASR-benchmark room.",
  },
  {
    id: "von-voice-conversations-atlanta-2026",
    name: "Fall '26 Voice and Conversations on the Net (VON)",
    category: "conference",
    status: "confirmed",
    dateLabel: "Oct 13–15",
    sortDate: "2026-10-13",
    endDate: "2026-10-15",
    month: "2026-10",
    location: "Sandy Springs Performing Arts Center, Atlanta, GA",
    description:
      "Jeff Pulver’s AI-communications industry conference — Oct 13 pre-conference pairs the vCon Summit with VoiceAI LIVE! demo stages (SignalWire confirmed; Vapi invited), then Oct 14–15 main program on carriers, voice-AI platforms, and enterprise deployments. Highest-signal non–Bay Area contact-center / voice-agent industry room this window (surfaced via voiceaispace + vonevolution.com).",
    sourceUrl: "https://www.vonevolution.com/",
    sourceLabel: "vonevolution.com",
    topics: ["voice-agents", "streaming", "stt"],
    topicNote:
      "VoiceAI LIVE! and main conference are production voice / CX rooms — not every vCon standards track is an STT pitch; prioritize demo and deployment sessions.",
  },
  // Sourced from Eventbrite's SF Bay Area search (2026-07-17), filtered from
  // several hundred loosely-keyword-matched results down to genuine
  // voice-agent / speech-AI relevance — Eventbrite's own search is much noisier
  // than Luma's for this audience (heavy false-positive rate on words like
  // "voice" matching unrelated events, plus templated paid-training-course spam).
  // Agentic AI workshop (Aug 18) pruned after Pacific day passed (2026-08-20).
  // 2026-10-02: Decagon Dialogues + Runtime by Modal → pastEvents2026 after
  // Pacific Oct 1.
  {
    id: "signalwire-voice-agent-workshop-palo-alto",
    name: "AI Developer Workshop — Build AI Voice Agents (SignalWire Palo Alto)",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Oct 6, 3:00–5:00pm PT",
    sortDate: "2026-10-06",
    month: "2026-10",
    location: "Prosperity 7 Ventures, 700 Emerson St, Palo Alto",
    description:
      "Peninsula follow-on to SignalWire’s Sep 30 SF voice-agent workshop — same hands-on production patterns (call-scoped state, tool calling, interruptions, per-turn observability) at Prosperity 7 Ventures. Strong Peninsula voice-agent builder room during a16z Tech Week week.",
    sourceUrl: "https://www.aicamp.ai/event/eventdetails/W2026100615",
    sourceLabel: "aicamp.ai",
    topics: ["voice-agents", "streaming"],
    topicNote:
      "Dedicated production voice-agent workshop — competitive SignalWire mindshare for Peninsula phone/voice-agent engineers.",
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
    name: "Beta Fund × AWS × OpenAI Multi-Model Hackathon",
    category: "hackathon",
    status: "confirmed",
    dateLabel: "Oct 23, 9am–6:30pm PT",
    sortDate: "2026-10-23",
    month: "2026-10",
    location: "AWS Builder Loft, 525 Market St, San Francisco",
    description:
      "One-day multimodal hackathon at AWS Builder Loft (Luma title refreshed to Beta Fund × AWS × OpenAI as of 2026-10-01) — ship products that combine text, image, video, audio, and voice; multi-modal agents that can see, hear, and act are an explicit track.",
    sourceUrl: "https://luma.com/beta-79jb",
    sourceLabel: "luma.com",
    topics: ["stt", "audio-intel"],
    topicNote:
      "Pitch fit for teams using speech/audio as a modality — not a dedicated voice-agent hackathon; confirm tracks closer to the date.",
  },
  {
    id: "deepgram-vapi-phone-voice-agent-workshop-sf",
    name: "Build Your First Phone Voice Agent — Deepgram × Vapi Workshop",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Oct 14, 6–9pm PT",
    sortDate: "2026-10-14",
    month: "2026-10",
    location: "Deepgram SF Collab Hub, 505 Howard St Suite 100, San Francisco",
    description:
      "Deepgram × Vapi hands-on evening at Deepgram’s SoMa collab hub — guided build of a phone voice agent that answers real calls, with both vendors’ developer advocates unblocking attendees. Highest-signal Bay Area competitive voice-agent workshop this window (missed discover; on Deepgram cal-qHEDltsO0Gr0WtD + Vapi cal as luma.com/deepgram-2jm5).",
    sourceUrl: "https://luma.com/deepgram-2jm5",
    sourceLabel: "luma.com",
    topics: ["voice-agents", "stt", "streaming"],
    topicNote:
      "Dedicated phone voice-agent build night co-hosted by Deepgram and Vapi — direct STT + voice-agent platform mindshare vs AssemblyAI builders.",
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
      "Afternoon hands-on workshop (Leverage / Nir Naamani) — build a working voice agent end-to-end (speech in → model → structured data out), including latency, interruptions, and state. Approval-required; small room. Rescheduled from Sep 17 to Oct 25 per live Luma event/get (leverage-0gfk) — still a top dedicated Bay Area voice-agent build workshop alongside the Oct 14 Deepgram × Vapi phone-agent night and the Oct 6 Tech Week Ship an AI Voice Agent Workshop.",
    sourceUrl: "https://luma.com/leverage-0gfk",
    sourceLabel: "luma.com",
    topics: ["voice-agents", "stt", "streaming"],
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
  // Oct 1; Furby (w9e4qgol) still sole upcoming owned room on
  // AssemblyAI cal-R9IQUb53FUrolUF.
  {
    id: "assemblyai-hardware-hackathon-furby-voice-agent-oct7",
    name: "Hardware hackathon: turn a vintage toy into a voice agent",
    category: "hackathon",
    status: "confirmed",
    dateLabel: "Oct 7, 5–8pm PT",
    sortDate: "2026-10-07",
    month: "2026-10",
    location: "San Francisco, CA (Northern Waterfront; exact venue on registration)",
    description:
      "Owned AssemblyAI hands-on evening — build a realtime voice agent with AssemblyAI’s Voice Agent API, install it in a Furby with a mini computer, and take the hardware home. Same Tech Week evening as Speechmatics×LiveKit×Aqua “Solving voice as an interface” and the Voice AI Product Leadership Panel — direct calendar conflict for Bay Area voice builders (luma.com/w9e4qgol on cal-R9IQUb53FUrolUF as of 2026-10-02).",
    sourceUrl: "https://luma.com/w9e4qgol",
    sourceLabel: "luma.com",
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
      "80+ build-a-thons hosted historically (Lovable, Perplexity emerged from these); runs multiple/week with partners like OpenAI. Attendance is merit-based/invite-only. Sep 19 Voice AI Hackathon (Hume-sponsored) just passed — watch for the next AGI House voice-agent weekend.",
    sourceUrl: "https://luma.com/agi-house",
    sourceLabel: "luma.com/agi-house",
    watchNote:
      "Re-checked 2026-10-02: public Luma calendar cal-Lv1pgYv5ITFR4tC still only lists Can AI Agents Make GPUs More Energy Efficient? — Oct 3 PT (gpuenergyoptimization; 4–6pm PT). Voice AI Hackathon (Sep 19) + AI Debates (aidebates delist) remain in pastEvents2026 for voice-format recurrence watch.",
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
      "Re-checked 2026-10-02: Discover feed now 66/3 pages (+3 vs 10-01). No new high-signal Bay Area discover adds — skipped Claude Connected Agents, Haunted Agent Horror Night, SF Tech Week AI Demo Night, Supabase Select/hackathon, novita-oas6, Company Brain, OpenTogether, MITAI Age of Agency. Ship an AI Voice Agent Workshop confirmed as Luma leverage-pjc9 (Modulate×Tavily×Plivo) matching Partiful 7O725PQ56Ki4P8gHKyiM. Tech Week still: Vonage×Deepgram lunch Oct 6, Agora Prototype→Production Oct 6 (814 Mission St), SignalWire Palo Alto Oct 6, Coffee CARTesia Oct 7 AM (vendor), Furby + Product Leadership + Solving voice + Wire workflow Oct 7 eve, Conversational AI × Gaming day Oct 7, Outdoor Voice Coding Oct 11 Stanford, Voices in the Room Coval×Cartesia Oct 8 (vendor). Pruned Oct 1: The AI Conference + Decagon Dialogues + Runtime by Modal + London three-way (Deepgram×Pipecat / Speechmatics×Tuner / owned AssemblyAI). Deepgram × Vapi Oct 14, Ship a Voice Agent Oct 25 (leverage-0gfk), Speak '26 Oct 29, VON Atlanta Oct 13–15, Vapi×Deepgram mixer Nov 9, Voice Agents Forum Nov 5, VapiCon Nov 11–12, AI Engineer Code Summit Nov 10–12 still live. NEW vendor: Bolna Symphony 2026 (Nov 20 Bengaluru — Deepgram + Cartesia partners). Open Source AI Week Debate Night (592fcwx2, Oct 19) confirms 2026 Bay Area edition activity. Skip Conversational AI Dinner Bluejay, Cartesia×Lorikeet, Vapi yacht, Voice AI Dinner London, AdWeek ElevenLabs NYC, luma.com/voiceagents + lsjiq8kf + ai-coding-hack + builders-sep26 (2025 year traps). Do not trust voiceaispace’s Sep 16 date for Voice Agents Forum — Luma voiceagentssf is Nov 5.",
  },
];

export const pastEvents2026: PastEvent[] = [
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

export const researchDate = "2026-10-02";
