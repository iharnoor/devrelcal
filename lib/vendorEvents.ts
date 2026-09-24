import type { Topic } from "./topics";

export type VendorEventFormat = "in-person" | "virtual" | "hybrid";
export type VendorEventStatus = "confirmed" | "check-source";

export interface VendorEvent {
  id: string;
  name: string;
  dateLabel: string;
  sortDate: string;
  format: VendorEventFormat;
  location?: string;
  description: string;
  status: VendorEventStatus;
  sourceUrl: string;
  sourceLabel: string;
  /** STT / TTS / streaming / voice-agent relevance — AssemblyAI competitive or inspiration fit. */
  topics?: Topic[];
}

export interface VendorGroup {
  id: string;
  company: string;
  category: string;
  homepageUrl: string;
  events: VendorEvent[];
  /** Shown when a company has no confirmed dated events in the research window. */
  watchNote?: string;
}

/**
 * Speech / voice-AI vendor events — competitive & partnership tracking for
 * AssemblyAI. Re-researched 2026-09-24 (Pacific morning) against each vendor's own events page.
 * These are companies that compete or overlap on STT, TTS, streaming audio, or
 * voice-agent platforms — not the Bay Area builder calendar (see events.ts).
 */
export const vendorGroups: VendorGroup[] = [
  {
    id: "deepgram",
    company: "Deepgram",
    category: "STT / TTS / Voice Agent API",
    homepageUrl: "https://luma.com/deepgram",
    events: [
      {
        id: "deepgram-flux-tts-pipecat-webinar",
        name: "Voice Agents Built for the Conversation — Flux TTS on Pipecat (Deepgram × Daily)",
        dateLabel: "Sep 29, 10:00am PT",
        sortDate: "2026-09-29",
        format: "virtual",
        description:
          "Live technical webinar with Deepgram TTS PM Jeff Liu and Daily/Pipecat CEO Kwindla Kramer — Flux TTS in a Pipecat pipeline, interruption/turn-lifecycle demos, and reference code for real-time voice agents. Direct Deepgram×Pipecat developer education play ahead of the Oct 1 London Customer Interaction evening.",
        status: "confirmed",
        sourceUrl:
          "https://deepgram.com/webinars/voice-agents-built-for-the-conversation",
        sourceLabel: "deepgram.com/webinars",
        topics: ["tts", "voice-agents", "streaming"],
      },
      {
        id: "deepgram-london-customer-interaction",
        name: "Voice AI: Shaping the Next Frontier of Customer Interaction",
        dateLabel: "Oct 1, 6:00–8:30pm BST",
        sortDate: "2026-10-01",
        format: "in-person",
        location: "London, United Kingdom (venue on registration)",
        description:
          "Deepgram × Pipecat × frog (Capgemini Invent) London evening on Voice AI for customer interaction — fireside with Deepgram VP Eng Kris Efland plus enterprise CX/engineering leaders on voice-first design, conversational apps, and adoption at scale. On Deepgram Luma cal-qHEDltsO0Gr0WtD (luma.com/prkbq50k); Pipecat co-host is a strong EU framework-distribution signal.",
        status: "confirmed",
        sourceUrl: "https://luma.com/prkbq50k",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "stt", "streaming"],
      },
      {
        id: "deepgram-vapi-phone-voice-agent-workshop-sf",
        name: "Build Your First Phone Voice Agent — Deepgram × Vapi Workshop",
        dateLabel: "Oct 14, 6–9pm PT",
        sortDate: "2026-10-14",
        format: "in-person",
        location: "Deepgram SF Collab Hub, 505 Howard St Suite 100, San Francisco",
        description:
          "Deepgram × Vapi hands-on evening at Deepgram’s SoMa collab hub — guided build of a phone voice agent that answers real calls, with both vendors’ developer advocates unblocking attendees. New on Deepgram Luma cal-qHEDltsO0Gr0WtD + Vapi calendar (luma.com/deepgram-2jm5) as of 2026-09-23; strongest near-term Bay Area Deepgram×Vapi developer-education signal ahead of Speak '26 / VapiCon.",
        status: "confirmed",
        sourceUrl: "https://luma.com/deepgram-2jm5",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "stt", "streaming"],
      },
      {
        id: "deepgram-speak-26",
        name: "Deepgram Speak '26",
        dateLabel: "Oct 29, 8am–6pm PT",
        sortDate: "2026-10-29",
        format: "in-person",
        location: "The Aviary, 135 Fourth St Ste 4000, San Francisco",
        description:
          "Deepgram’s flagship one-day SF voice-AI conference — keynotes/firesides plus builder conversation (explicitly not a sales pitch day). Highest-signal Deepgram mindshare play of the window; registration open on deepgram.com/speak as of 2026-09-02.",
        status: "confirmed",
        sourceUrl: "https://deepgram.com/speak",
        sourceLabel: "deepgram.com/speak",
        topics: ["stt", "voice-agents", "streaming", "tts"],
      },
      {
        id: "deepgram-vapi-web-summit-mixer",
        name: "Vapi × Deepgram: Web Summit Mixer",
        dateLabel: "Nov 2",
        sortDate: "2026-11-02",
        format: "in-person",
        location: "Lisboa, Portugal (Web Summit week)",
        description:
          "Vapi × Deepgram mixer during Web Summit Lisbon — another EU Deepgram×Vapi co-branded room after the Sep 22 Barcelona sunset drinks (now past). Competitive ecosystem distribution signal heading into VapiCon week. Listed luma.com/vapi-t98x as of 2026-09-02.",
        status: "confirmed",
        sourceUrl: "https://luma.com/vapi-t98x",
        sourceLabel: "luma.com",
        topics: ["voice-agents"],
      },
    ],
    watchNote:
      "Re-checked 2026-09-24: Deepgram Luma cal-qHEDltsO0Gr0WtD lists Oct 1 London (prkbq50k) + Oct 14 SF phone voice-agent workshop with Vapi (deepgram-2jm5, Deepgram SF Collab Hub) — also on Vapi cal. Flux TTS × Pipecat webinar with Daily (Sep 29) still live on deepgram.com/webinars/voice-agents-built-for-the-conversation. Same London evening still has owned AssemblyAI London Voice AI Meetup (k74g72a0) plus Speechmatics × Tuner (pyhvutqe). deepgram.com/speak still live for Speak '26 (Oct 29, The Aviary SF). Web Summit Mixer (Nov 2, vapi-t98x) still confirmed. deepgram.com/events 404s. Deepgram remains diamond sponsor at VapiCon (Nov 11–12). Skip stale AWS GenAI Loft Deepgram×Daily workshop page (Jul 2025 year trap) and Deepgram×Nytro sales-enablement webinar (Oct 19 — not a developer room).",
  },
  {
    id: "cartesia",
    company: "Cartesia",
    category: "TTS / real-time voice models",
    homepageUrl: "https://luma.com/cartesia",
    events: [
      {
        id: "cartesia-voice-ai-operators-london",
        name: "Voice AI × Operators — London",
        dateLabel: "Sep 30, 7:00–9:30pm BST",
        sortDate: "2026-09-30",
        format: "in-person",
        location: "Soho, London, United Kingdom (exact venue on approval)",
        description:
          "Cartesia-hosted curated London dinner for voice-AI operators, builders, and researchers — approval-required, limited seats. Competitive EU distribution signal the night before the London STT three-way (Deepgram×Pipecat, Speechmatics×Tuner, owned AssemblyAI Build Night). Listed on Cartesia Luma cal-EeDJt2cPbgGca1W (luma.com/42d8c7mu) as of 2026-09-22.",
        status: "confirmed",
        sourceUrl: "https://luma.com/42d8c7mu",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "tts"],
      },
    ],
    watchNote:
      "Re-checked 2026-09-24: Cartesia Luma cal-EeDJt2cPbgGca1W still lists Voice AI × Operators — London (Sep 30, 42d8c7mu) plus Drinks Around The Fire: Cartesia × Lorikeet (Oct 20 evening PT / Oct 21 UTC, bz8x2v1s — still skipped as social mixer). Cartesia CEO remains on the VapiCon speaker list.",
  },
  {
    id: "elevenlabs",
    company: "ElevenLabs",
    category: "TTS / conversational agents / Scribe STT",
    homepageUrl: "https://elevenlabs.io/events",
    events: [
      {
        id: "elevenlabs-summit-bengaluru",
        name: "ElevenLabs Summit — Bengaluru",
        dateLabel: "Oct 6",
        sortDate: "2026-10-06",
        format: "in-person",
        location: "Bengaluru, India",
        description:
          "Flagship ElevenLabs Summit stop — builders, researchers, and executives on conversational / voice-agent systems. Listed on elevenlabs.io/events/elevenlabs-summit as of 2026-08-25.",
        status: "confirmed",
        sourceUrl: "https://elevenlabs.io/summit/bengaluru",
        sourceLabel: "elevenlabs.io",
        topics: ["tts", "voice-agents", "stt"],
      },
      {
        id: "elevenlabs-summit-new-york",
        name: "ElevenLabs Summit — New York",
        dateLabel: "Nov 11",
        sortDate: "2026-11-11",
        format: "in-person",
        location: "New York, NY",
        description:
          "ElevenLabs Summit NYC — same week as VapiCon in SF. Competitive calendar conflict for voice-agent DevRel coverage; listed on elevenlabs.io/events/elevenlabs-summit as of 2026-08-25.",
        status: "confirmed",
        sourceUrl: "https://elevenlabs.io/summit/new-york",
        sourceLabel: "elevenlabs.io",
        topics: ["tts", "voice-agents", "stt"],
      },
      {
        id: "elevenlabs-startup-grant-demo-day",
        name: "ElevenLabs Startup Grant Demo Day",
        dateLabel: "Oct 21",
        sortDate: "2026-10-21",
        format: "virtual",
        description:
          "Live pitches from 11 founders in the ElevenLabs Startup Grant program — real voice-AI products, cash prizes ($33k/$22k/$11k), and winners pitch again at the 11/11 Summit NYC. Window into the voice-agent startup cohort ElevenLabs is cultivating.",
        status: "confirmed",
        sourceUrl: "https://elevenlabs.io/webinars/elevenlabs-startup-grant-demo-day",
        sourceLabel: "elevenlabs.io",
        topics: ["tts", "voice-agents"],
      },
      {
        id: "elevenlabs-chatbot-summit-amsterdam",
        name: "ElevenLabs @ Chatbot Summit Amsterdam",
        dateLabel: "Nov 26",
        sortDate: "2026-11-26",
        format: "in-person",
        location: "Mövenpick Hotel Amsterdam City Centre",
        description:
          "ElevenLabs GTM keynote “From Chat to Voice” (Leander Zapheriou) at Chatbot Summit Amsterdam, Nov 25–26. Voice-agent deployment talk aimed at CX / conversational-AI practitioners.",
        status: "confirmed",
        sourceUrl: "https://www.chatbotsummit.com/amsterdam-2026-partners/elevenlabs",
        sourceLabel: "chatbotsummit.com",
        topics: ["tts", "voice-agents"],
      },
    ],
    watchNote:
      "Re-checked 2026-09-24: Summit Bengaluru (Oct 6), Startup Grant Demo Day (Oct 21), Summit NYC (Nov 11), Chatbot Summit Amsterdam (Nov 26) still confirmed (elevenlabs.io/events 200). “ElevenLabs at Advertising Week New York” (Oct 7) still skipped as marketing/ad-week, not a developer room. No new SF Summit date for 2026. Deepgram Speak (Oct 29 SF) remains the competitive same-market calendar day two weeks before ElevenLabs NYC Summit / VapiCon week.",
  },
  {
    id: "vapi",
    company: "Vapi",
    category: "Voice-agent platform",
    homepageUrl: "https://www.vapicon.ai/",
    events: [],
    watchNote:
      "Re-checked 2026-09-24: Vapi Luma calendar cal-9jzVoVZclDCewDU — Sep 23 HumanX Amsterdam after-hours (d7jixwna) + AI Summit BCN executive dinner (3dqkgw6r) pruned after Pacific day. Remaining: early-stage sales dinner (Sep 24/25, skipped), Fleet Week yacht (Oct 8, skipped), Deepgram × Vapi phone voice-agent workshop SF (Oct 14, deepgram-2jm5 — tracked under Deepgram + main calendar), Vapi×Deepgram Web Summit Mixer (Nov 2, Lisbon — tracked under Deepgram), VapiCon 2026 (Nov 11–12, Fort Mason SF — Deepgram diamond sponsor; Cartesia CEO on speaker list). Skip builders-sep26 (2025 Voice AI Builders Meetup slug trap).",
  },
  {
    id: "regal",
    company: "Regal AI",
    category: "Contact-center / Voice AI platform",
    homepageUrl: "https://www.regal.ai/",
    events: [],
    watchNote:
      "Re-checked 2026-09-24: Regal Rise (Sep 17 NYC/virtual) already pruned. No new dated public Regal events found — watch for a Bay Area follow-on vs AssemblyAI phone-agent builders.",
  },
  {
    id: "twilio",
    company: "Twilio",
    category: "Communications / Conversational Intelligence",
    homepageUrl: "https://www.twilio.com/",
    events: [
      {
        id: "twilio-conversations-ai-era-london",
        name: "Conversations in the AI era | Builder Community Meetup | London",
        dateLabel: "Oct 14",
        sortDate: "2026-10-14",
        format: "in-person",
        location: "London, United Kingdom",
        description:
          "Twilio UK builder community meetup on conversations in the AI era — adjacent developer room for teams wiring voice/chat agents on Twilio’s communications stack. Listed on Twilio UK Luma calendar as of 2026-09-12.",
        status: "confirmed",
        sourceUrl: "https://luma.com/d14cpj24",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "streaming"],
      },
      {
        id: "twilio-assemble-london",
        name: "Twilio Assemble London: The Future of Comms + AI",
        dateLabel: "Nov 3",
        sortDate: "2026-11-03",
        format: "in-person",
        location: "CodeNode, 10 South Pl, London EC2M 7EB, UK",
        description:
          "Twilio UK developer evening on AI + communications — Conversational Intelligence, Claude Code skills, and the Ola platform for next-gen customer experiences. Date corrected 2026-09-10 via event/get (was listed Nov 19; Luma 7z0fyqec is Nov 3).",
        status: "confirmed",
        sourceUrl: "https://luma.com/7z0fyqec",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "audio-intel", "streaming"],
      },
      {
        id: "twilio-conversations-ai-era-manchester",
        name: "Conversations in the AI era | Builder Community Meetup | Manchester",
        dateLabel: "Nov 4",
        sortDate: "2026-11-04",
        format: "in-person",
        location: "Colony King Street — Manchester Co-working & Office Space, 76 King St, Manchester M2 4NH, UK",
        description:
          "Twilio UK builder community meetup in Manchester on conversations in the AI era — same series as the Oct 14 London room; adjacent developer audience for teams wiring voice/chat agents on Twilio’s stack. Listed on Twilio UK Luma calendar as of 2026-09-13.",
        status: "confirmed",
        sourceUrl: "https://luma.com/401md669",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "streaming"],
      },
      {
        id: "twilio-conversations-ai-era-london-dec",
        name: "Conversations in the AI era | Builder Community Meetup | London",
        dateLabel: "Dec 3",
        sortDate: "2026-12-03",
        format: "in-person",
        location: "London, United Kingdom",
        description:
          "Twilio UK builder community meetup (London December edition) on conversations in the AI era — continuing the Oct 14 London / Nov 4 Manchester series for communications + AI agent builders. Listed on Twilio UK Luma calendar as of 2026-09-13.",
        status: "confirmed",
        sourceUrl: "https://luma.com/9xwcwwxz",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "streaming"],
      },
    ],
    watchNote:
      "Twilio UK Luma calendar cal-hoJOad2gnCAn32t (2026-09-24) still surfaces Conversations in the AI era London (Oct 14, d14cpj24), Assemble London Nov 3 (7z0fyqec), Manchester builder meetup Nov 4 (401md669), London December edition Dec 3 (9xwcwwxz). Twilio Dev User Group London (Sep 17) already pruned. Twilio Programmable Voice also appears on Decagon Dialogues (Oct 1 SF) agenda — tracked on main calendar. SIGNAL San Francisco 2026 is past. Watch twilio.com and Assemble announcements for US/Bay Area dates.",
  },
  {
    id: "agora",
    company: "Agora",
    category: "Realtime voice / video / conversational AI",
    homepageUrl: "https://www.agora.io/",
    events: [
      {
        id: "agora-voice-ai-workshop-nyc-sep30",
        name: "NYC Workshop: Build Voice AI Agents in Minutes",
        dateLabel: "Sep 30, 5:30–8:00pm ET",
        sortDate: "2026-09-30",
        format: "in-person",
        location: "New York, NY (exact venue on registration)",
        description:
          "Agora × Hermes hands-on NYC workshop to ship a working Voice AI agent quickly — competitive NYC voice-agent builder room vs AssemblyAI’s recent NYC meetup cadence. Replaces delisted qb1bk73c; listed on Agora Luma cal-wYHDiuJD5JdAolS (luma.com/cba2mvse) as of 2026-09-24.",
        status: "confirmed",
        sourceUrl: "https://luma.com/cba2mvse",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "streaming"],
      },
      {
        id: "agora-voice-ai-workshop-nyc-oct12",
        name: "Voice AI Workshop — NYC",
        dateLabel: "Oct 12, 9:00pm–12:00am ET",
        sortDate: "2026-10-12",
        format: "in-person",
        location: "New York, NY (exact venue on registration)",
        description:
          "Second Agora NYC Voice AI Workshop on cal-wYHDiuJD5JdAolS (luma.com/b59sk0v6) — evening builder session for teams shipping realtime voice agents on Agora’s stack. Same NYC competitive cadence as the Sep 30 Hermes co-hosted workshop.",
        status: "confirmed",
        sourceUrl: "https://luma.com/b59sk0v6",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "streaming"],
      },
    ],
    watchNote:
      "Re-checked 2026-09-24: prior Voice AI Workshop NYC (Oct 8, qb1bk73c) 404/delisted — replaced by Sep 30 (cba2mvse, Agora × Hermes) + Oct 12 evening ET (b59sk0v6). Beyond the Prototype London (Oct 8, cjumnkfs) and Empathy & Scale (Oct 13, SF, p3a07b3r) still listed — skipped as vertical/exec. Re-check agora.io and luma.com/agoraio for Bay Area builder nights.",
  },
  {
    id: "signalwire",
    company: "SignalWire",
    category: "Communications / Voice-agent platform",
    homepageUrl: "https://signalwire.com/resources/events",
    events: [
      {
        id: "signalwire-sf-voice-agent-workshop",
        name: "AI Developer Workshop — Build AI Voice Agents (SF)",
        dateLabel: "Sep 30, 5:30–8:30pm PT",
        sortDate: "2026-09-30",
        format: "in-person",
        location: "Emergence Capital, Pier 5, The Embarcadero #102, San Francisco",
        description:
          "Hands-on SignalWire evening for engineers shipping production voice agents — call-scoped state, tool calling, interruptions/turn-taking, and per-turn observability. Direct programmable-voice / phone-agent mindshare play vs AssemblyAI and Twilio in SF; also tracked on the main Bay Area calendar.",
        status: "confirmed",
        sourceUrl: "https://www.aicamp.ai/event/eventdetails/W2026093017",
        sourceLabel: "aicamp.ai",
        topics: ["voice-agents", "streaming"],
      },
      {
        id: "signalwire-palo-alto-voice-agent-workshop",
        name: "AI Developer Workshop — Build AI Voice Agents (Palo Alto)",
        dateLabel: "Oct 6, 3:00–5:00pm PT",
        sortDate: "2026-10-06",
        format: "in-person",
        location: "Prosperity 7 Ventures, 700 Emerson St, Palo Alto",
        description:
          "Peninsula follow-on to the Sep 30 SF SignalWire workshop — same production voice-agent curriculum at Prosperity 7 Ventures during Tech Week week. Competitive Bay Area builder distribution next to Twilio’s UK conversation series and Deepgram’s Oct 29 Speak.",
        status: "confirmed",
        sourceUrl: "https://www.aicamp.ai/event/eventdetails/W2026100615",
        sourceLabel: "aicamp.ai",
        topics: ["voice-agents", "streaming"],
      },
    ],
    watchNote:
      "Re-checked 2026-09-24: SignalWire events + AICamp still list SF Sep 30 (W2026093017) and Palo Alto Oct 6 (W2026100615) as the near-term Bay Area builder rooms; Chicago Jun 24 workshop is past. Watch signalwire.com/resources/events for further city stops.",
  },
  {
    id: "livekit",
    company: "LiveKit",
    category: "Realtime voice/video agents",
    homepageUrl: "https://livekit.io/",
    events: [],
    watchNote:
      "No dedicated public events page (livekit.io/events 404 as of 2026-09-24). LiveKit co-hosted AssemblyAI’s NYC Voice AI Meetup Sep 1 (pastEvents2026). LiveKit GM Robotics was on the panel for The Audio Layer 3.0: Voice x Robotics (Sep 15, pastEvents2026). Surfaces via Luma user LiveKit_Events and partner hackathons — re-check weekly around voice-agent forums.",
  },
  {
    id: "retell",
    company: "Retell AI",
    category: "Voice-agent platform",
    homepageUrl: "https://www.retellai.com/",
    events: [],
    watchNote:
      "No public dated Jul–Dec 2026 developer events found on retellai.com/events as of 2026-09-24 (webinars grid empty). Typically appears at voice-agent conferences (VapiCon-class rooms) rather than running a dated Luma series. Check LinkedIn / retellai.com/blog.",
  },
  {
    id: "bland",
    company: "Bland AI",
    category: "Voice-agent platform",
    homepageUrl: "https://www.bland.ai/",
    events: [],
    watchNote:
      "No public dated Jul–Dec 2026 developer events found on bland.ai as of 2026-08-27. Watch bland.ai and partner pages around contact-center / phone-agent summits.",
  },
  {
    id: "pipecat-daily",
    company: "Pipecat / Daily",
    category: "Voice-agent framework / WebRTC",
    homepageUrl: "https://pipecat.ai/",
    events: [],
    watchNote:
      "pipecat.ai and daily.co/blog still show no owned dated public meetups as of 2026-09-24. Competitive signal: Deepgram × Daily Flux TTS on Pipecat webinar (Sep 29 — tracked under Deepgram); Pipecat remains named co-host on Voice AI: Shaping the Next Frontier of Customer Interaction (Oct 1 London, luma.com/prkbq50k — tracked under Deepgram); same London evening as Speechmatics × Tuner (pyhvutqe) and owned AssemblyAI London Voice AI Meetup (k74g72a0). Pipecat often co-appears with Speechmatics / LiveKit / Deepgram builder nights — watch those calendars and daily.co changelog.",
  },
  {
    id: "speechmatics",
    company: "Speechmatics",
    category: "STT / speaker-aware transcription",
    homepageUrl: "https://www.speechmatics.com/community",
    events: [
      {
        id: "speechmatics-tuner-london-voice-ai",
        name: "Speechmatics x Tuner London Voice AI Meetup",
        dateLabel: "Oct 1, 6:00–8:30pm BST",
        sortDate: "2026-10-01",
        format: "in-person",
        location:
          "Speechmatics London, 6th Floor, Classic House, 174-180 Martha's Buildings, Old St, London EC1V 9BP, UK",
        description:
          "Speechmatics × Tuner London builder evening on production Voice AI failure modes — panel on why voice now, demos, and do’s/don’ts for agents that survive real users at volume. Same London evening as Deepgram × Pipecat Customer Interaction (prkbq50k) — direct EU STT/voice-agent mindshare conflict. Confirmed luma.com/pyhvutqe (cal-ZYr28XXq5fyMAym) as of 2026-09-14.",
        status: "confirmed",
        sourceUrl: "https://luma.com/pyhvutqe",
        sourceLabel: "luma.com",
        topics: ["stt", "voice-agents", "streaming"],
      },
    ],
    watchNote:
      "Re-checked 2026-09-24: Speechmatics × Tuner London Voice AI Meetup (Oct 1, pyhvutqe) still on Luma cal-ZYr28XXq5fyMAym. Same night as Deepgram×Pipecat London and owned AssemblyAI London Voice AI Meetup (k74g72a0). They host London builder nights (often at Old Street HQ, sometimes with Pipecat / LiveKit / Voice AI Space). Check luma.com/user/Speechmatics and speechmatics.com/community.",
  },
  {
    id: "gladia",
    company: "Gladia",
    category: "STT / audio intelligence",
    homepageUrl: "https://gladia.io/",
    events: [
      {
        id: "gladia-paris-voice-ai-meetup",
        name: "Voice AI Meetup — pyannoteAI × Gladia × Modal",
        dateLabel: "Oct 14",
        sortDate: "2026-10-14",
        format: "in-person",
        location: "Paris, France (exact venue on registration)",
        description:
          "Paris engineering evening on production voice AI stacks — diarization (pyannoteAI), transcription (Gladia), and inference (Modal). Direct STT competitor mindshare play in EU; approval/waitlist on luma.com/paris-voice-ai as of 2026-09-12.",
        status: "confirmed",
        sourceUrl: "https://luma.com/paris-voice-ai",
        sourceLabel: "luma.com",
        topics: ["stt", "voice-agents", "audio-intel"],
      },
    ],
    watchNote:
      "Re-checked 2026-09-24: Paris Voice AI Meetup with pyannoteAI × Modal (Oct 14, paris-voice-ai) still live — same calendar day as Deepgram × Vapi SF phone-agent workshop (deepgram-2jm5). Direct STT competitor with EU residency positioning — also check gladia.io and @gladiaio. Modal’s Runtime by Modal (Oct 1 SF) is on the main calendar as adjacent infra room.",
  },
  {
    id: "soniox",
    company: "Soniox",
    category: "STT / real-time transcription",
    homepageUrl: "https://www.soniox.com/",
    events: [],
    watchNote:
      "No public dated Jul–Dec 2026 events found on soniox.com as of 2026-08-27. Real-time STT competitor — watch soniox.com and LinkedIn for workshop / launch announcements.",
  },
  {
    id: "rev-ai",
    company: "Rev AI",
    category: "STT / asynchronous transcription",
    homepageUrl: "https://www.rev.ai/",
    events: [],
    watchNote:
      "No public dated Jul–Dec 2026 developer events found on rev.ai as of 2026-08-27. Check rev.com/blog and partner conference booths.",
  },
  {
    id: "hume",
    company: "Hume AI",
    category: "Empathic TTS / voice",
    homepageUrl: "https://www.hume.ai",
    events: [],
    watchNote:
      "No dedicated public events calendar found at research time (2026-09-24). Hume sponsored/judged AGI House Voice AI Hackathon (Sep 19, now pastEvents2026) and was listed on The AI Debates Hackathon (Luma aidebates 404/delisted Sep 20) — competitive TTS/empathic-voice mindshare at AGI House. Otherwise shows up as a speaker/sponsor at voice-agent conferences rather than running its own dated series. Check hume.ai and @hume_ai.",
  },
  {
    id: "smallest-ai",
    company: "Smallest AI",
    category: "TTS / STT / speech-to-speech",
    homepageUrl: "https://luma.com/smallest.ai",
    events: [],
    watchNote:
      "Luma calendar cal-xZRPdTa3UcyyNJE empty as of 2026-09-12 — The Direct Line Mumbai (Sep 8, e0vcvxo9) pruned after Pacific day passed. Past 2026 Bay Area pattern: Beyond Text research talks (Jun 8, Menlo Park), Voice AI Goes Global multilingual panel (Jun 15), CCW Las Vegas steakhouse afterhours with Telnyx (Jun 24), Voice AI HackSprint 2.0 (Mar 14, SF). Re-check weekly — they run SF/Menlo Park builder nights in bursts.",
  },
  {
    id: "google-cloud-speech",
    company: "Google Cloud Speech / Gemini Live",
    category: "Cloud STT / realtime voice",
    homepageUrl: "https://cloud.google.com/speech-to-text",
    events: [
      {
        id: "google-gemini-audio-at-night",
        name: "Gemini Audio | At Night",
        dateLabel: "Sep 24, evening PT",
        sortDate: "2026-09-24",
        format: "in-person",
        location: "The Pearl, 601 19th St, San Francisco, CA 94107",
        description:
          "Google DeepMind / Gemini Audio evening at The Pearl (Dogpatch) — developer-facing Gemini audio/voice session listed on the DeepMind Luma calendar (cal-7Q5A70Bz5Idxopu) with RSVP via rsvp.withgoogle.com. Direct Google speech/audio competitive mindshare the same evening as AssemblyAI’s owned SF dictation Build Night.",
        status: "confirmed",
        sourceUrl: "https://rsvp.withgoogle.com/events/gemini-audio-at-night",
        sourceLabel: "rsvp.withgoogle.com",
        topics: ["stt", "tts", "audio-intel", "streaming"],
      },
    ],
    watchNote:
      "Re-checked 2026-09-24: Gemini Audio | At Night (Sep 24, The Pearl SF) still on DeepMind Luma calendar (cal-7Q5A70Bz5Idxopu) with RSVP via rsvp.withgoogle.com — prune after Pacific day ends. Also tracked on the main Bay Area calendar. Watch Google Cloud events and Gemini Live launch webinars for follow-ons.",
  },
  {
    id: "azure-ai-speech",
    company: "Microsoft Azure AI Speech",
    category: "Cloud STT / TTS",
    homepageUrl: "https://azure.microsoft.com/en-us/products/ai-services/ai-speech",
    events: [],
    watchNote:
      "No Azure AI Speech-specific dated Jul–Dec 2026 events confirmed as of 2026-09-24. Llama Lounge 26 (Sep 10, Microsoft MV) pruned earlier — was a borrowed Microsoft campus room, not an Azure Speech product event. Watch Microsoft Reactor SF.",
  },
  {
    id: "aws-transcribe",
    company: "AWS Transcribe / Bedrock",
    category: "Cloud STT / contact-center AI",
    homepageUrl: "https://aws.amazon.com/transcribe/",
    events: [],
    watchNote:
      "No Transcribe-specific dated Jul–Dec 2026 events confirmed as of 2026-09-24. Healthcare AI Hackathon (Sep 26) and Multi-Model Hackathon (Oct 23, luma.com/beta-79jb) at AWS Builder Loft are on the main calendar — ambient-scribe / multimodal-audio teams are the STT pitch. Watch AWS Gen AI Loft SF for Amazon Connect / contact-center voice sessions. Skip stale aws.amazon.com enterprise real-time voice-agents workshop page (Deepgram×Daily — Jul 2025 year trap).",
  },
];
