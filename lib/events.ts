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
 * Confirmed research date: 2026-11-25. Dates and venues sourced from
 * organizer domains — see sourceUrl on each event.
 */
const scrapedEvents: CalEvent[] = [
  // Sourced live from Luma's San Francisco Bay Area discover feed, refreshed
  // 2026-11-25 (~08:00 PST / 16:00 UTC). (api.luma.com/discover, place
  // discplace-BDj7GNbGlsF7Cka), filtered to AI / voice-agent-relevant
  // listings. 47 discover entries across 2 pages. No new Bay Area
  // voice/speech rooms via discover (Antler After Dark already tracked).
  // NEW via Meetup + Hacker Dojo cal-gb38HjVUndfwrwb (missed discover):
  // Bay Area Voice AI Happy Hour Dec 3 ASR architecture / word-timestamps
  // (kvy4s2rk; Meetup 317548418). PRUNED Rasa Paris Founding Builders
  // (rasa-w23d) → pastEvents2026 after CET Nov 24 9pm / 20:00 UTC end.
  // AGI House cal-Lv1pgYv5ITFR4tC still only Peptides Nov 29 — skip.
  // dana Collab Hub still Open Mic / Level Up / Women in Robotics / Call
  // Santa + Physical AI Lab Jan 2027 (kkgr2uqe — still skip). Rime Prism
  // (9q4bvnmt) still Luma 404. Year traps: the-audio-layer + Rime×Rasa
  // a05j8jv0 are 2025. Skipped: Voice Researchers Poker Night (the-r68t) /
  // Voice AI Day mixers / Telnyx / HLTH / Cartesia Agent's Table + Coffee
  // CARTesia + Agent Soundcheck / Speechmatics Women in Tech (xqndyvrv
  // still 404) / Vapi dinner+afterparty / LiveKit Colorado / Murf Falcon
  // India (5f4d2nvf 404) / Sierra Summit / Wispr SPC / Vertical Agent /
  // NANDA HAL / ElevenCreative SF+LA / CTOs Pitch / Cashfree×Sarvam /
  // Antler Superbloom Launch Party / Agentic Code Review Demo Night /
  // AI Infrastructure Night (z4b3wb9d) / Agent Wars / Great Business Bake
  // Off / EliseAI Building with Jev (ach582pi) / Durable Agents Hack Day
  // Diagrid (sf-2pgv) / Women in AI Beyond the Prompt (5i8fnr3e) / Agora
  // Physical AI Malaysia / later Olewave series placeholders without a
  // confirmed dated ASR agenda (h28m10v5 Dec 17+ — watch via recurring).
  {
    id: "antler-sf-after-dark-v2-building-with-voice",
    name: "Antler SF After Dark V2: Building with Voice",
    category: "hackathon",
    status: "confirmed",
    dateLabel: "Dec 3, 5:30–10pm PT",
    sortDate: "2026-12-03",
    month: "2026-12",
    location: "Antler SF office, San Francisco (China Basin; exact address on approval)",
    description:
      "Antler US after-hours SF voice build session — open workspace for operators and builders prototyping voice agents, with ElevenLabs engineers on demos and office hours. Same calendar day as Deepgram HealthTech London; strongest near-term Bay Area ElevenLabs builder-education signal after VapiCon week (luma.com/antlerus-fd0t on Antler US cal-TVpiEZu23bsIljH as of 2026-11-05).",
    sourceUrl: "https://luma.com/antlerus-fd0t",
    sourceLabel: "luma.com",
    note: "Registration requires approval",
    topics: ["voice-agents", "tts"],
    topicNote:
      "Dedicated voice-agent prototype evening with ElevenLabs engineers on site — TTS / voice-product mindshare, not a generic founder mixer.",
  },
  {
    id: "bay-area-voice-ai-happy-hour-asr-architecture-dec2026",
    name: "Bay Area Voice AI Happy Hour — In-House ASR Architecture & Word Timestamps",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Dec 3, 6:30–8:30pm PT",
    sortDate: "2026-12-03",
    month: "2026-12",
    location: "Hacker Dojo, 3200 Patrick Henry Dr #250, Santa Clara, CA (hybrid + YouTube/Bilibili)",
    description:
      "Olewave / Hacker Dojo biweekly South Bay speech-engineering meetup — tech share on building in-house ASR architecture plus a FA-Bench / Olign paper deep dive on accurate ASR word- and phone-level timestamps. NEW 2026-11-25 via Meetup (317548418) + Luma kvy4s2rk on Hacker Dojo cal-gb38HjVUndfwrwb (missed Bay Area discover); strongest near-term Bay Area pure-ASR engineering room this window, same calendar evening as Antler × ElevenLabs After Dark in SF.",
    sourceUrl: "https://luma.com/kvy4s2rk",
    sourceLabel: "luma.com",
    note: "Also listed on Meetup as event 317548418; $10 onsite food chip-in (students free)",
    topics: ["stt", "audio-intel"],
    topicNote:
      "Hands-on ASR architecture talk plus word/phone-level alignment benchmark deep dive — direct STT / speech-alignment DevRel room, not a phone voice-agent platform session.",
  },
  {
    id: "pyannoteai-speaker-intelligence-voice-ai-labs-webinar-dec2026",
    name: "From raw recordings to training-ready clips: speaker intelligence for Voice AI labs",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Dec 1, 5–5:35pm CET / 8–8:35am PT",
    sortDate: "2026-12-01",
    month: "2026-12",
    location: "Online (Livestorm)",
    description:
      "pyannoteAI DevRel webinar on speaker intelligence for STT/TTS/S2S training pipelines — diarization, overlap detection, and voiceprints to turn multi-speaker recordings into clean single-speaker clips, with a Precision-3 live demo. NEW 2026-11-19 via voiceaispace + livestorm (app.livestorm.co/pyannote-ai/voice-ai-training-data; Dec 1 17:00 CET confirmed — missed Bay Area discover).",
    sourceUrl: "https://app.livestorm.co/pyannote-ai/voice-ai-training-data",
    sourceLabel: "livestorm.co",
    topics: ["audio-intel", "stt"],
    topicNote:
      "Speaker diarization / overlap / voiceprint pipeline for training-data hygiene — audio-intel + STT data-quality room, not a phone voice-agent platform session.",
  },
  {
    id: "deepgram-open-mic-demo-night-sf-dec2026",
    name: "Open Mic: Demo Night with Deepgram",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Dec 1, 6–9pm PT",
    sortDate: "2026-12-01",
    month: "2026-12",
    location: "Deepgram SF Collab Hub, 505 Howard St Suite 100, San Francisco",
    description:
      "Deepgram SF Collab Hub open-mic demo night — live voice-AI demos (realtime avatars, voice games, phone dictation, accessibility tools, robots/gadgets/voice agents) plus an open stage for builders shipping on Deepgram. Co-hosted by dana + Sahar Mor (Bond AI) + Deepgram Events. NEW 2026-11-22 via Deepgram_events hosting list (luma.com/rknv0ow1; missed Bay Area discover); same PT evening as Deepgram Speak Easy Vegas — strongest near-term Bay Area Deepgram builder-mindshare room while re:Invent hospitality runs in Las Vegas.",
    sourceUrl: "https://luma.com/rknv0ow1",
    sourceLabel: "luma.com",
    topics: ["voice-agents", "stt", "streaming"],
    topicNote:
      "Hands-on Deepgram voice-product demo + open-mic builder night at the SoMa hub — direct STT / voice-agent mindshare, not a generic AI mixer.",
  },
  {
    id: "deepgram-vapi-level-up-phone-agent-sf-dec2026",
    name: "Level Up Your Phone Agent — Deepgram × Vapi × n8n",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Dec 8, 6–9pm PT",
    sortDate: "2026-12-08",
    month: "2026-12",
    location: "Deepgram SF Collab Hub, 505 Howard St Suite 100, San Francisco",
    description:
      "Deepgram SF Collab Hub hands-on phone-agent build night co-hosted by dana + Vitali Korezki with Deepgram, Vapi, and n8n — three paced stations from first phone agent through Vapi tools/function calling (calendar/Sheets/Slack) into n8n app workflows. NEW 2026-11-23 via dana Collab Hub hosting list (luma.com/8230c4ud; missed Bay Area discover); explicit follow-on to Nov 17 Deepgram × Vapi “Build Your First Phone Voice Agent” (→ pastEvents2026). Same calendar day as Cartesia Managed Agents webinar + NeurIPS After Hours — strongest near-term Bay Area Deepgram×Vapi phone-agent education signal after Open Mic Dec 1.",
    sourceUrl: "https://luma.com/8230c4ud",
    sourceLabel: "luma.com",
    topics: ["voice-agents", "stt", "streaming"],
    topicNote:
      "Hands-on Deepgram × Vapi phone-agent workshop with tool-calling / n8n workflow stations — direct phone voice-agent DevRel room, not a generic AI mixer.",
  },
  {
    id: "deepgram-women-in-robotics-talking-robot-sf-dec2026",
    name: "Women in Robotics × Deepgram — Talking Cardboard Robot",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Dec 15, 6–8:30pm PT",
    sortDate: "2026-12-15",
    month: "2026-12",
    location: "Deepgram SF Collab Hub, 505 Howard St Suite 100, San Francisco",
    description:
      "Women in Robotics × Deepgram Collab Hub build night — attendees assemble a talking cardboard robot on Deepgram voice stack and get a first look at the Physical AI Lab kicking off in January. NEW 2026-11-24 via dana Collab Hub hosting list (luma.com/xzsffrdw; missed Bay Area discover); Deepgram SoMa physical-AI + speech mindshare room after Level Up Phone Agent Dec 8.",
    sourceUrl: "https://luma.com/xzsffrdw",
    sourceLabel: "luma.com",
    topics: ["voice-agents"],
    topicNote:
      "Hands-on talking-robot build on Deepgram at the Collab Hub — speech-enabled robotics / voice-product mindshare, not a pure ASR benchmark session.",
  },
  {
    id: "deepgram-call-santa-phone-line-sf-dec2026",
    name: "Call Santa: Build a Santa Phone Line for Your Kids",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Dec 16, 6–7:30pm PT",
    sortDate: "2026-12-16",
    month: "2026-12",
    location: "Deepgram SF Collab Hub, 505 Howard St Suite 100, San Francisco",
    description:
      "Deepgram SF Collab Hub holiday phone-agent build night hosted by dana — ship a real dialable phone number kids can call to talk to Santa. NEW 2026-11-24 via dana Collab Hub hosting list (luma.com/rbaf0352; missed Bay Area discover); seasonal follow-on to Dec 8 Level Up Phone Agent / Nov 17 Deepgram × Vapi phone workshop — strongest near-term post–re:Invent Bay Area phone voice-agent education signal at the hub.",
    sourceUrl: "https://luma.com/rbaf0352",
    sourceLabel: "luma.com",
    topics: ["voice-agents", "stt", "streaming"],
    topicNote:
      "Hands-on phone voice-agent workshop (live dial-in number) at Deepgram Collab Hub — direct phone-agent DevRel room, not a generic holiday mixer.",
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
  // 2026-10-31: SANE → pastEvents2026 after Pacific Oct 30; msrwwjby still
  // sole upcoming owned room through Nov 7.
  // 2026-11-01: msrwwjby still sole upcoming owned room (cal items empty;
  // event/get live through Nov 7 11am PT); no new AssemblyAI Luma rooms.
  // 2026-11-02: msrwwjby still sole upcoming owned room through Nov 7;
  // no new AssemblyAI Luma rooms; Decagon × Accel + Voice Mitte added via
  // voiceaispace (not on AssemblyAI cal).
  // 2026-11-03: msrwwjby still sole upcoming owned room through Nov 7
  // 11am PT (cal items empty; event/get live); VexoHacks added to scraped
  // (ElevenLabs-sponsored Voice track at YC — not AssemblyAI-owned).
  // 2026-11-04: AssemblyAI cal-R9IQUb53FUrolUF now lists NEW owned
  // re:Invent Voice AI Happy Hour @ Topgolf (m6gcrmm7, Nov 30 6–9pm PT);
  // msrwwjby still live via event/get through Nov 7 11am PT. Side Quest
  // Vapi Hackathon (buildclub-lugq) added to scraped — not owned.
  // 2026-11-05: msrwwjby + m6gcrmm7 still live; Antler SF After Dark V2
  // (antlerus-fd0t, Dec 3) added to scraped — ElevenLabs co-build, not owned.
  // 2026-11-06: Voice Agents Forum (voiceagentssf) → pastEvents2026 after
  // Pacific Nov 5; NEW owned Build Night Parallel × AssemblyAI (5b3cjgix,
  // Nov 17 5:30–8:30pm PT) on AssemblyAI cal-R9IQUb53FUrolUF alongside
  // m6gcrmm7; msrwwjby still live via event/get through Nov 7 11am PT.
  // 2026-11-07: msrwwjby + 5b3cjgix + m6gcrmm7 still live (msrwwjby through
  // Nov 7 11am PT via event/get; cal items show only 5b3cjgix + m6gcrmm7).
  // EliseAI × OpenAI GPT‑Live‑1 (2cbcy58l) added to scraped — not owned.
  // 2026-11-08: msrwwjby ended Nov 7 11am PT → pastEvents2026; AssemblyAI
  // cal still lists 5b3cjgix + m6gcrmm7 only. Speech to Ship (1netrne6)
  // added to scraped — not owned.
  // 2026-11-10: Nov 9 Side Quest (buildclub-lugq) + Decagon × Accel
  // (j3ddfdsw) → pastEvents2026 after Pacific end; AssemblyAI cal still
  // 5b3cjgix + m6gcrmm7. NEW Rime Prism S2S hackathon (9q4bvnmt, Dec 5)
  // added to scraped — not owned.
  // 2026-11-11: Cartesia Multimodal First Look (xrj6gzm2) + Agora Lisbon
  // Scaling Voice AI (wqg33o39) → pastEvents2026 after Pacific Nov 10 end;
  // AssemblyAI cal still 5b3cjgix + m6gcrmm7. Agora NYC Scaling slug →
  // agora-ai-summit-nyc. Voice AI Day SF Dec 10 skipped (mixer).
  // 2026-11-12: ElevenLabs Summit NYC (Nov 11) → pastEvents2026 after
  // Pacific end; VapiCon Day 2 + AI Engineer Code Summit + Cerebral Valley
  // still live that day; AssemblyAI cal still 5b3cjgix + m6gcrmm7.
  // 2026-11-13: VapiCon + AI Engineer Code Summit + Cerebral Valley →
  // pastEvents2026 after Pacific Nov 12 end; NEW Do Not Disturb Phone Use
  // hackathon (advrricd) added to scraped; AssemblyAI cal still 5b3cjgix
  // + m6gcrmm7.
  // 2026-11-14: Do Not Disturb Phone Use (advrricd) + Snowflake multimodal
  // (beta-3ue5) → pastEvents2026 after Pacific Nov 13 end; VexoHacks still
  // live today; AssemblyAI cal still 5b3cjgix + m6gcrmm7; no new owned rooms.
  // 2026-11-15: VexoHacks (chgfm6ec) → pastEvents2026 after Pacific Nov 14
  // end; AssemblyAI cal still 5b3cjgix + m6gcrmm7; no new owned rooms.
  // 2026-11-16: no data changes; discover 65/3.
  // 2026-11-17: Cartesia Managed Agents DATE CORRECTION → Dec 8; NEW
  // Deepgram SageMaker VPC webinar Nov 18 (vendorEvents); Nov 17 stack
  // still live that morning.
  // 2026-11-18: Nov 17 SF QUINT → pastEvents2026 after Pacific end
  // (5b3cjgix + wvw8xwsi + deepgram-2jm5 + 2cbcy58l); AssemblyAI cal now
  // only m6gcrmm7; Deepgram SageMaker VPC webinar still live that day.
  // 2026-11-19: SageMaker VPC webinar + ElevenAgents London → pastEvents2026
  // after Pacific Nov 18 end; NEW pyannoteAI speaker-intel webinar Dec 1
  // added to scraped; AssemblyAI cal still only m6gcrmm7.
  // 2026-11-20: no new owned AssemblyAI rooms (cal still only m6gcrmm7);
  // NEW Cartesia × NeurIPS Sydney After Hours (cartesia-jic4) → vendorEvents;
  // Speech to Ship + Bolna still live Pacific morning; discover 36/2.
  // 2026-11-21: Speech to Ship + Bolna → pastEvents2026 after Pacific Nov 20
  // end; NEW Agora × Cartesia × PingCAP Voice AI Mixer re:Invent Dec 2
  // (voice-ai-mixer-awsreinvent) → vendorEvents; AssemblyAI cal still only
  // m6gcrmm7 (hosts now AssemblyAI + Vapi Events); discover 37/2.
  // 2026-11-22: NEW Deepgram Open Mic Demo Night SF Dec 1 (rknv0ow1) →
  // scraped + vendorEvents (missed discover; Deepgram_events hosting list);
  // AssemblyAI cal still only m6gcrmm7; discover 41/2; no prune.
  // 2026-11-23: NEW Level Up Your Phone Agent Dec 8 (8230c4ud) → scraped +
  // Deepgram/Vapi vendorEvents (dana Collab Hub hosting; Deepgram × Vapi ×
  // n8n follow-on to Nov 17 phone workshop); AssemblyAI cal still only
  // m6gcrmm7; discover 39/2; no prune (Pacific Nov 23).
  // 2026-11-24: NEW Women in Robotics × Deepgram Dec 15 (xzsffrdw) + Call
  // Santa phone-line Dec 16 (rbaf0352) → scraped + Deepgram vendorEvents
  // (dana Collab Hub); REMOVED Rime Prism (9q4bvnmt) Luma 404 cancelled;
  // AssemblyAI cal still only m6gcrmm7; discover 41/2; Rasa still live CET.
  // 2026-11-25: Rasa Paris (rasa-w23d) → pastEvents2026 after CET Nov 24
  // end; NEW Bay Area Voice AI Happy Hour ASR meetup Dec 3 (kvy4s2rk) →
  // scraped; AssemblyAI cal still only m6gcrmm7; discover 47/2.
  {
    id: "assemblyai-reinvent-voice-ai-happy-hour-topgolf-2026",
    name: "re:Invent Voice AI Happy Hour @ Topgolf",
    category: "meetup",
    status: "confirmed",
    dateLabel: "Nov 30, 6–9pm PT",
    sortDate: "2026-11-30",
    month: "2026-11",
    location: "Topgolf Las Vegas at MGM Grand — Level 2 Birdie Lounge",
    description:
      "Owned AssemblyAI re:Invent Voice AI happy hour at Topgolf Las Vegas — drinks and informal networking with teams building voice products during AWS re:Invent week. Night before Deepgram Speak Easy (Krisp × Twilio lounge, Dec 1); strongest owned re:Invent distribution counter-move this window (luma.com/m6gcrmm7 on AssemblyAI cal-R9IQUb53FUrolUF as of 2026-11-04; hosts AssemblyAI + Vapi Events as of 2026-11-21).",
    sourceUrl: "https://luma.com/m6gcrmm7",
    sourceLabel: "luma.com",
    note: "Registration requires approval; limited capacity",
    topics: ["voice-agents"],
    topicNote:
      "Owned AssemblyAI Voice AI builder networking room at re:Invent — social format, but direct owned distribution vs Deepgram Speak Easy the following night.",
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
      "Re-checked 2026-11-25: public Luma calendar cal-Lv1pgYv5ITFR4tC still lists only SF × MIT Hack Day: Peptides (Nov 29) — skipped (not voice/agent DevRel). Voice AI Hackathon (Sep 19) + AI Debates (aidebates still 404) remain in pastEvents2026 for voice-format recurrence watch; no new AGI House voice rooms this pass.",
  },
  {
    id: "bay-area-voice-ai-happy-hours",
    name: "Bay Area Voice AI Happy Hours — Tech Share and Paper Reading",
    category: "meetup",
    cadence: "Every other Thursday, 6:30–8:30pm PT (Hacker Dojo + livestream)",
    location: "Hacker Dojo, Santa Clara, CA (hybrid)",
    description:
      "Olewave-hosted South Bay speech/audio engineering series — ASR, TTS, and full-duplex paper readings plus practitioner tech shares. Dec 3 session (kvy4s2rk) is the dated ASR architecture / word-timestamps room in scrapedEvents; later placeholders on Hacker Dojo cal-gb38HjVUndfwrwb (Dec 17, Dec 31, Jan+) stay watch-only until agendas confirm.",
    sourceUrl: "https://www.meetup.com/bay-area-voice-ai-happy-hours/",
    sourceLabel: "meetup.com",
    watchNote:
      "Added 2026-11-25. Luma series also on Hacker Dojo cal-gb38HjVUndfwrwb (kvy4s2rk Dec 3 confirmed ASR agenda; h28m10v5 Dec 17 / 9l4oz604 Dec 31 / 62azy38k Jan 14 / e1lujrgl Jan 28 are generic placeholders). Prefer Meetup + event/get before promoting a later date into scrapedEvents.",
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
      "Re-checked 2026-11-25 (PST): Discover 47/2 pages. No new Bay Area voice/speech rooms via discover; NEW Bay Area Voice AI Happy Hour ASR meetup Dec 3 (kvy4s2rk → scraped; Meetup 317548418 / Hacker Dojo cal). Rasa Paris → pastEvents2026. Speechmatics still co-hosts Twilio London Dec 2 (9xwcwwxz); xqndyvrv Women in Tech still 404; Murf Masterclass 5f4d2nvf still 404; Rime Prism 9q4bvnmt still 404 (voiceaispace stale). Voice AI Day SF Dec 10 + global VAD city mixers still skipped (no talks/demos). Ahead: owned Topgolf Nov 30 + Deepgram AIM382-S Nov 30 + Cartesia Super Car-tesia Dec 1 morning + pyannoteAI webinar Dec 1 8am PT + Deepgram Open Mic SF Dec 1 evening + Deepgram Speak Easy Dec 1 evening + ElevenLabs re:Invent booth Dec 1–3 + Deepgram Startup Plaza Dec 2–3 + Agora×Cartesia mixer Dec 2 + Twilio×Speechmatics London Dec 2 + Deepgram HealthTech Dec 3 + Antler After Dark Dec 3 + Olewave ASR Happy Hour Dec 3 + Level Up Phone Agent Dec 8 + Cartesia NeurIPS After Hours + Managed Agents Dec 8 + NYC Dec 9 double-stack (Agora Scaling + Vapi×LangChain) + Deepgram Collab Hub Dec 15–16. Skip Telnyx / HLTH / Cartesia Agent's Table + Coffee CARTesia + Agent Soundcheck karaoke / ElevenCreative After Hours / Voice Researchers Poker Night (the-r68t) / Vapi dinner+afterparty / LiveKit Colorado / Murf Falcon India / Sierra Summit / Wispr SPC / Vertical Agent Meetup / NANDA HAL / ElevenLabs LATAM + Seoul / Adopt AI Paris / Voice Connect Dubai / Cashfree×Sarvam / What to Build What to Trust (5ie1odh0) / Women in AI Beyond the Prompt (5i8fnr3e) / Agent Wars / EliseAI Building with Jev (ach582pi) / Durable Agents Hack Day Diagrid (sf-2pgv) / Antler Superbloom Launch Party / AI Infrastructure Night / Agentic Code Review Demo Night / Physical AI Lab Jan 2027 (kkgr2uqe) / the-audio-layer + a05j8jv0 2025 year traps. Beyond the Cloud still 404.",
  },
];

export const pastEvents2026: PastEvent[] = [
  {
    id: "rasa-founding-builders-voice-agent-hackathon-paris",
    name: "Rasa Founding Builders — Voice Agent Hackathon (Paris)",
    dateLabel: "Nov 24",
    location: "Paris, France",
    note: "Rasa invite-gated one-day Founding Builders voice-agent hackathon (luma.com/rasa-w23d; ended Nov 24 9pm CET / 20:00 UTC) — kept for CX / enterprise voice-agent builder-hackathon recurrence watch after Nov 3 NYC workshop",
  },
  {
    id: "speech-to-ship-hackathon-sf-nov2026",
    name: "Speech to Ship Hackathon: Speak It, Build It, Ship It.",
    dateLabel: "Nov 20",
    location: "Emergent HQ, San Francisco",
    note: "Willow × Emergent × You.com SF speech-first app hackathon (luma.com/1netrne6; ended Nov 20 8pm PT) — kept for Bay Area dictation-STT / speech-input hackathon recurrence watch",
  },
  {
    id: "bolna-symphony-india-voice-ai-ecosystem-2026",
    name: "Symphony 2026: India's Voice AI Ecosystem (Bolna)",
    dateLabel: "Nov 20",
    location: "The Lalit Ashok, Bengaluru, India",
    note: "Bolna India Voice AI ecosystem conference (~1,000; Deepgram/Cartesia/Google Cloud/OpenAI/Plivo partners; bolna.ai/symphony) — ended Nov 20; kept for India voice-AI developer/operator conference + Deepgram partner-distribution recurrence watch",
  },
  {
    id: "deepgram-sagemaker-vpc-voice-agent-webinar-nov18",
    name: "A voice agent that sounds human and stays in your VPC — Deepgram × AWS",
    dateLabel: "Nov 18",
    location: "Online (Deepgram × AWS webinar)",
    note: "Deepgram-led SageMaker VPC voice-agent webinar with AWS (Think-Live + Flux STT/TTS; Pipecat-on-ECS guidance) — ended Nov 18 12pm PT; kept for Deepgram×AWS builder-education / re:Invent AIM382-S follow-on recurrence watch",
  },
  {
    id: "elevenlabs-elevenagents-hackathon-london-nov2026",
    name: "ElevenAgents Hackathon London",
    dateLabel: "Nov 17–18",
    location: "The Bike Shed, Shoreditch, London",
    note: "ElevenLabs first partner + customer ElevenAgents hackathon (~120 seats; Day 2 live agent build) — ended Nov 18; kept for EU ElevenAgents hackathon / Certified Partner cadence recurrence watch",
  },
  {
    id: "assemblyai-parallel-build-night-voice-agent-sf-nov2026",
    name: "Build Night: Parallel × AssemblyAI",
    dateLabel: "Nov 17",
    location: "San Francisco, CA",
    note: "Owned AssemblyAI × Parallel SF realtime voice-agent build night (luma.com/5b3cjgix; ended Nov 17 8:30pm PT) — same evening as Deepgram×Vapi / OpenRouter×ElevenLabs / EliseAI×OpenAI Nov 17 QUINT — kept for owned Bay Area Voice Agent API build-night cadence / competitive-stack recurrence watch",
  },
  {
    id: "deepgram-vapi-phone-voice-agent-workshop-sf",
    name: "Build Your First Phone Voice Agent — Deepgram × Vapi Workshop",
    dateLabel: "Nov 17",
    location: "Deepgram SF Collab Hub, 505 Howard St Suite 100, San Francisco",
    note: "Deepgram × Vapi hands-on phone voice-agent workshop at Deepgram SoMa hub (luma.com/deepgram-2jm5; ended Nov 17 9pm PT) — strongest near-term Bay Area Deepgram×Vapi developer-education signal after Speak '26 / VapiCon — kept for Deepgram×Vapi co-distribution / phone-agent workshop recurrence watch",
  },
  {
    id: "openrouter-elevenlabs-in-production-sf",
    name: "In Production: OpenRouter × ElevenLabs",
    dateLabel: "Nov 17",
    location: "San Francisco, CA",
    note: "OpenRouter × ElevenLabs production voice/audio showcase (luma.com/wvw8xwsi; ended Nov 17 8pm PT) during Nov 17 SF QUINT — kept for ElevenLabs Bay Area TTS / voice-product shipping-room recurrence watch",
  },
  {
    id: "eliseai-openai-gpt-live-1-voice-agents-sf",
    name: "Inside GPT‑Live‑1: Building Voice Agents with EliseAI and OpenAI",
    dateLabel: "Nov 17",
    location: "San Francisco, CA (China Basin)",
    note: "EliseAI × OpenAI full-duplex GPT‑Live‑1 production voice-agent panel (luma.com/2cbcy58l; ended Nov 17 9pm PT) — kept for OpenAI realtime-voice / full-duplex engineering-room recurrence watch",
  },
  {
    id: "agora-voice-ai-workshop-nyc-nov17",
    name: "Agora × Google DeepMind: Gemini Voice AI Workshop | NYC",
    dateLabel: "Nov 17",
    location: "New York, NY",
    note: "Agora × Google DeepMind Gemini Voice AI Workshop NYC (luma.com/voiceai-workshop-nyc-nov17; ended Nov 17 8:30pm ET) — kept for Agora × Gemini Live realtime voice-agent workshop series recurrence watch ahead of NYC Scaling Dec 9",
  },
  {
    id: "vexohacks-ai-wearables-hackathon-yc-sf",
    name: "VexoHacks: An AI Wearables Hackathon",
    dateLabel: "Nov 14",
    location: "Y Combinator, San Francisco",
    note: "One-day Vexo wearables hackathon at YC with explicit Voice / Vision / Ambient tracks + ElevenLabs sponsorship (luma.com/chgfm6ec; ended Nov 14 9pm PT) — kept for Bay Area wearable-voice / speech-input hackathon recurrence watch",
  },
  {
    id: "do-not-disturb-phone-use-hackathon-sf-nov2026",
    name: "Do Not Disturb Hackathon x Phone Use",
    dateLabel: "Nov 13",
    location: "San Francisco, CA (Mid-Market)",
    note: "Exit 1 × Bond AI / Phone Use one-day phone-agent hackathon with ElevenLabs prize credits (luma.com/advrricd; ended Nov 13 7:30pm PT) — kept for Bay Area phone-use / voice-agent hackathon recurrence watch after VapiCon week",
  },
  {
    id: "multimodal-ai-education-hackathon-snowflake-2026",
    name: "Multi-Modal AI for Education Hackathon @ Snowflake — Beta Fund × Epic",
    dateLabel: "Nov 13",
    location: "Snowflake Silicon Valley AI Hub, Menlo Park, CA",
    note: "Beta Fund × Epic multimodal education hackathon with explicit Voice & Audio Tutors track (luma.com/beta-3ue5; ended Nov 13 5:30pm PT) — kept for Bay Area multimodal-audio / STT education-hack recurrence watch",
  },
  {
    id: "vapicon-2026",
    name: "VapiCon 2026 — The Frontier Voice AI Summit",
    dateLabel: "Nov 11–12",
    location: "Festival Pavilion, Fort Mason, San Francisco",
    note: "Dedicated voice-AI summit (~1,200; Deepgram diamond sponsor; Cartesia CEO + AssemblyAI Dylan Fox on roster; luma.com/vapi-9sdp ended Nov 12 5pm PT) — kept for annual flagship Bay Area voice-agent conference recurrence watch",
  },
  {
    id: "ai-engineer-code-summit-2026",
    name: "AI Engineer Code Summit 2026",
    dateLabel: "Nov 10–12",
    location: "Hilton San Francisco Union Square, San Francisco",
    note: "AI Engineer code/engineering conference same SF week as VapiCon (ai.engineer/code/2026) — kept for annual Bay Area agent-builder conference recurrence / calendar-conflict watch",
  },
  {
    id: "cerebral-valley-summit-2026",
    name: "Cerebral Valley AI Summit — San Francisco",
    dateLabel: "Nov 12",
    location: "San Francisco (invite-only)",
    note: "Invite-only Cerebral Valley AI Summit during VapiCon / AI Engineer Code Summit week (cerebralvalley.com) — kept for annual SF invite-only builder-summit recurrence watch",
  },
  {
    id: "elevenlabs-summit-new-york-2026",
    name: "ElevenLabs Summit — New York",
    dateLabel: "Nov 11",
    location: "Lincoln Center, New York, NY",
    note: "ElevenLabs flagship NYC summit (elevenlabs.io/summit/new-york; Interaction Engine / ElevenAgents Memory+Routines / Scribe v3 announcements) — kept for annual Summit hub recurrence watch vs VapiCon SF week competitive coverage",
  },
  {
    id: "cartesia-multimodal-research-first-look-sf",
    name: "First Look: Multimodal Research with Cartesia",
    dateLabel: "Nov 10",
    location: "San Francisco, CA (Marina District)",
    note: "Cartesia invite-gated SF multimodal / voice-model first-look evening (luma.com/xrj6gzm2) during AI Engineer Code Summit week — kept for Bay Area Cartesia product-preview / TTS mindshare recurrence watch",
  },
  {
    id: "agora-scaling-voice-ai-lisbon-nov10",
    name: "From Prototype to Production: Scaling Voice AI — Agora (Lisbon)",
    dateLabel: "Nov 10",
    location: "Bairro Alto, Lisbon, Portugal",
    note: "Agora Convo AI World Lisbon Scaling Voice AI evening during Web Summit week (luma.com/wqg33o39) — kept for Agora Scaling Voice AI series recurrence watch ahead of NYC Dec 9 (agora-ai-summit-nyc)",
  },
  {
    id: "vapi-side-quest-hotline-hackathon-sf",
    name: "Side Quest Hotline Vapi Hackathon",
    dateLabel: "Nov 9",
    location: "Vapi HQ, 150 Spear St, San Francisco",
    note: "Build Club × Vapi voice-agent hackathon with Deepgram as speech-AI / prize partner (luma.com/buildclub-lugq) — kept for Bay Area competitive voice-hack / Deepgram×Vapi co-distribution recurrence watch ahead of VapiCon week",
  },
  {
    id: "decagon-accel-voice-audio-research-night-sf",
    name: "Voice & Audio Research Night by Decagon × Accel",
    dateLabel: "Nov 9",
    location: "Decagon HQ, San Francisco (Yerba Buena)",
    note: "Decagon × Accel SF speech/voice-model research evening with Meta + Cartesia (luma.com/j3ddfdsw) — kept for Bay Area speech-research / contact-center voice partner-night recurrence watch",
  },
  {
    id: "assemblyai-voice-hackathon-week-hack-into-speech-oct2026",
    name: "Voice hackathon week: Hack into speech",
    dateLabel: "Oct 27–Nov 7",
    location: "Online (Discord)",
    note: "Owned AssemblyAI TTS / voice-product hackathon week (luma.com/msrwwjby; ended Nov 7 11am PT) — kept for owned online TTS hackathon cadence / recurrence planning",
  },
  {
    id: "voice-agents-forum-2026",
    name: "Voice Agents Forum",
    dateLabel: "Nov 5",
    location: "Digital Jungle SF, 972 Mission St, San Francisco",
    note: "AAIF Community one-day production voice-agent forum (luma.com/voiceagentssf) with Deepgram DevRel + Cartesia / LiveKit / Coval / Telnyx on roster — kept for annual Bay Area flagship voice-agent conference recurrence watch ahead of VapiCon week",
  },
  {
    id: "voice-mitte-1-berlin-voice-ai-production",
    name: "Voice Mitte 1.0: Voice AI in production — ai-coustics × telli (Berlin)",
    dateLabel: "Nov 5",
    location: "Berlin, Germany",
    note: "First Voice Mitte monthly Berlin voice/audio builder evening (luma.com/th6h5ufn) — kept for EU voice-agent meetup-series recurrence watch",
  },
  {
    id: "gradium-coval-speakeasy-voice-agents-paris",
    name: "Speakeasy: Voice agents, after hours — Gradium × Coval",
    dateLabel: "Nov 5",
    location: "Paris, France",
    note: "Gradium × Coval Paris voice-agent build/eval evening (luma.com/wszf3b7v) — kept for EU voice-agent partner-night recurrence watch",
  },
  {
    id: "speechmatics-roark-voice-ai-improvement-loop-london",
    name: "Better Every Call? Building the Voice AI Improvement Loop — Speechmatics × Roark",
    dateLabel: "Nov 5",
    location: "London, United Kingdom",
    note: "Speechmatics × Roark London production voice-agent improvement-loop evening (luma.com/c0iiab0e) — kept for Speechmatics London builder-night cadence / STT competitive recurrence watch",
  },
  {
    id: "coval-cloudflare-production-voice-ai-sf",
    name: "Building Voice AI That Holds Up in Production: Coval × Cloudflare",
    dateLabel: "Nov 3",
    location: "Cloudflare SF, 101 Townsend St, San Francisco",
    note: "Coval × Cloudflare production voice-agent reliability evening (luma.com/iq4hna2x) — kept for Bay Area voice-eval / production-ops partner-night recurrence watch",
  },
  {
    id: "rasa-agent-factory-voice-masterclass-nyc",
    name: "Build an Agent Factory with OpenAI’s Agents API and Rasa Mantle",
    dateLabel: "Nov 3",
    location: "The Assembly, 2 Park Ave, New York, NY",
    note: "Rasa NYC customer-service voice-agent workshop (luma.com/56nl6dpz) — kept for CX voice-agent / Rasa Mantle builder-workshop recurrence watch ahead of Paris Founding Builders Nov 24",
  },
  {
    id: "sane-2026-speech-audio-northeast",
    name: "SANE 2026 — Speech and Audio in the Northeast",
    dateLabel: "Oct 30",
    location: "Thomas Tull Concert Hall (MIT W18), 201 Amherst St, Cambridge, MA",
    note: "One-day MIT Northeast speech/audio research workshop (saneworkshop.org/sane2026) — kept for annual East Coast ASR / audio-ML research recurrence watch",
  },
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

export const researchDate = "2026-11-25";
