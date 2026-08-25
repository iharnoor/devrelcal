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
 * AssemblyAI. Researched 2026-08-24 against each vendor's own events page.
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
        id: "deepgram-genesys-xperience-lounge",
        name: "The Real-Time Lounge @ Genesys Xperience",
        dateLabel: "Sep 1–3",
        sortDate: "2026-09-01",
        format: "in-person",
        location: "Wynn Las Vegas, Las Vegas, NV",
        description:
          "Deepgram-hosted lounge at Genesys Xperience (Sep 1–3) — contact-center and real-time voice-agent buyers; listed on luma.com/deepgram as of 2026-08-24.",
        status: "confirmed",
        sourceUrl: "https://luma.com/deepgram",
        sourceLabel: "luma.com/deepgram",
        topics: ["stt", "voice-agents", "streaming"],
      },
      {
        id: "deepgram-london-voice-ai-exchange",
        name: "London Voice AI Exchange",
        dateLabel: "Sep 10",
        sortDate: "2026-09-10",
        format: "in-person",
        location: "London, United Kingdom",
        description:
          "Deepgram London meetup — “Built to transcribe, asked to converse: what voice agents demand from the models underneath them.” Fireside with Nick Kaimakis (Deepgram STT product lead) and Christian Creenan (E.ON), then drinks. Listed luma.com/ipv5amb9 as of 2026-08-24.",
        status: "confirmed",
        sourceUrl: "https://luma.com/ipv5amb9",
        sourceLabel: "luma.com",
        topics: ["stt", "voice-agents", "streaming"],
      },
    ],
    watchNote:
      "Re-checked luma.com/deepgram and luma.com/user/Deepgram_events (2026-08-24). Ship It: Flux TTS Edition (SoMa) and Founders’ Studio: Builders Night (SoMa, ~Aug 20) have passed. Recurring SoMa build nights are the pattern to watch — re-read luma.com/deepgram weekly. Flux TTS free-build promo runs through Sep 12.",
  },
  {
    id: "cartesia",
    company: "Cartesia",
    category: "TTS / real-time voice models",
    homepageUrl: "https://luma.com/cartesia",
    events: [
      {
        id: "cartesia-vapi-voice-ai-live",
        name: "Voice AI Live: Multilingual Voice Agents with Cartesia",
        dateLabel: "Sep 2, 10:30am PT",
        sortDate: "2026-09-02",
        format: "virtual",
        description:
          "Vapi-organized Voice AI Live session on multilingual voice agents featuring Cartesia — listed on voiceaispace.com/events as of 2026-08-24 (location TBD; treat as virtual until venue locks).",
        status: "check-source",
        sourceUrl: "https://www.voiceaispace.com/events",
        sourceLabel: "voiceaispace.com",
        topics: ["tts", "voice-agents"],
      },
      {
        id: "cartesia-farm-to-table-sep",
        name: "Farm to Table with Cartesia",
        dateLabel: "Sep 10, 6:30pm PT",
        sortDate: "2026-09-10",
        format: "in-person",
        location: "San Francisco, CA",
        description:
          "Cartesia HQ dinner for people building in voice AI — seasonal farm-to-table meal, listed Sep 10 on voiceaispace.com/events as of 2026-08-24. An earlier Aug 19 edition already ran.",
        status: "check-source",
        sourceUrl: "https://luma.com/cartesia",
        sourceLabel: "luma.com/cartesia",
        topics: ["tts", "voice-agents"],
      },
      {
        id: "cartesia-maven-state-of-the-art",
        name: "AI Voice Agents and The State of The Art w/ Cartesia",
        dateLabel: "Sep 10, 8:00pm",
        sortDate: "2026-09-10",
        format: "virtual",
        description:
          "60-minute AI Builders Summit session with Cartesia DevRel (Zubin Pratap) and product (Ashcon Partovi) — playground walkthrough from voice cloning through real-time generation, then open Q&A.",
        status: "confirmed",
        sourceUrl:
          "https://maven.com/p/274ff6/ai-voice-agents-and-the-state-of-the-art-w-cartesia",
        sourceLabel: "maven.com",
        topics: ["tts", "voice-agents", "streaming"],
      },
    ],
    watchNote:
      "luma.com/cartesia also lists Bengaluru socials (Naru Night, Vinyl and Whiskey Night) without locked public dates as of 2026-08-24 — confirm on the calendar before planning around them. Aug 19 Farm to Table SF and Aug 20 Gurugram whiskey tasting have passed.",
  },
  {
    id: "elevenlabs",
    company: "ElevenLabs",
    category: "TTS / conversational agents / Scribe STT",
    homepageUrl: "https://elevenlabs.io/events",
    events: [
      {
        id: "elevenlabs-finovate-fall",
        name: "ElevenLabs at Finovate Fall",
        dateLabel: "Sep 9–11",
        sortDate: "2026-09-09",
        format: "in-person",
        location: "New York, NY — booth 408, near the ConnectMe Lounge",
        description:
          "ElevenLabs booth at Finovate Fall — voice-agent / conversational-AI presence aimed at fintech CX buyers.",
        status: "confirmed",
        sourceUrl: "https://elevenlabs.io/events/elevenlabs-at-finovate-copy",
        sourceLabel: "elevenlabs.io",
        topics: ["tts", "voice-agents"],
      },
      {
        id: "elevenlabs-summit-bengaluru",
        name: "ElevenLabs Summit — Bengaluru",
        dateLabel: "Oct 6",
        sortDate: "2026-10-06",
        format: "in-person",
        location: "Bengaluru, India",
        description:
          "Flagship ElevenLabs Summit stop — builders, researchers, and executives on conversational / voice-agent systems. Listed on elevenlabs.io/events/elevenlabs-summit as of 2026-08-24.",
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
          "ElevenLabs Summit NYC — same week as VapiCon in SF. Competitive calendar conflict for voice-agent DevRel coverage; listed on elevenlabs.io/events/elevenlabs-summit as of 2026-08-24.",
        status: "confirmed",
        sourceUrl: "https://elevenlabs.io/summit/new-york",
        sourceLabel: "elevenlabs.io",
        topics: ["tts", "voice-agents", "stt"],
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
      "RAISE Paris booth (Jul 8–9) has passed. No upcoming webinars listed on elevenlabs.io/webinars as of 2026-08-24 (“stay tuned”). SF Summit last ran Nov 11, 2025 — watch for a 2026 SF date on elevenlabs.io/events/elevenlabs-summit.",
  },
  {
    id: "smallest-ai",
    company: "Smallest AI",
    category: "TTS / STT / speech-to-speech",
    homepageUrl: "https://luma.com/smallest.ai",
    events: [],
    watchNote:
      "luma.com/smallest.ai showed no dated upcoming events at research time (2026-08-24). Past 2026 pattern: Beyond Text research talks (Jun 8, Menlo Park), Voice AI Goes Global multilingual panel (Jun 15), CCW Las Vegas steakhouse afterhours with Telnyx (Jun 24), Voice AI HackSprint 2.0 (Mar 14, SF). Re-check luma.com/smallest.ai and smallest.ai weekly — they run SF/Menlo Park builder nights in bursts.",
  },
  {
    id: "gladia",
    company: "Gladia",
    category: "STT / audio intelligence",
    homepageUrl: "https://gladia.io/",
    events: [],
    watchNote:
      "No public dated Jul–Dec 2026 events found after RAISE Summit Paris (Jul 8–9, booth S5) and the Jul 9 Vercel/Modal/Poolside meetup. Surfaces events via LinkedIn and luma rather than a dedicated calendar. Direct STT competitor with EU residency positioning — check gladia.io and @gladiaio.",
  },
  {
    id: "speechmatics",
    company: "Speechmatics",
    category: "STT / speaker-aware transcription",
    homepageUrl: "https://www.speechmatics.com/community",
    events: [],
    watchNote:
      "No confirmed dated Jul–Dec 2026 events on speechmatics.com/community as of 2026-08-24. They host London builder nights (often at Old Street HQ, sometimes with Pipecat / LiveKit / Voice AI Space). Check luma.com/user/Speechmatics. Aug 20 Voice AI Space mixer night has passed.",
  },
  {
    id: "hume",
    company: "Hume AI",
    category: "Empathic TTS / voice",
    homepageUrl: "https://www.hume.ai",
    events: [],
    watchNote:
      "No dedicated public events calendar found at research time (2026-08-24). Hume shows up as a speaker/sponsor at voice-agent conferences (VapiCon 2025 lineup included CEO Alan Cowen) rather than running its own dated series. Check hume.ai and @hume_ai.",
  },
  {
    id: "vapi",
    company: "Vapi",
    category: "Voice-agent platform",
    homepageUrl: "https://www.vapicon.ai/",
    events: [
      {
        id: "vapi-ai-summit-bcn-dinner",
        name: "AI Summit BCN: Voice AI executive dinner",
        dateLabel: "Sep 23",
        sortDate: "2026-09-23",
        format: "in-person",
        location: "Barcelona, Spain",
        description:
          "Vapi-organized voice-AI executive dinner during AI Summit BCN — listed on voiceaispace.com/events as of 2026-08-24.",
        status: "confirmed",
        sourceUrl: "https://www.voiceaispace.com/events",
        sourceLabel: "voiceaispace.com",
        topics: ["voice-agents"],
      },
    ],
    watchNote:
      "VapiCon 2026 (Nov 11–12, Fort Mason SF) is tracked on the main calendar, not here — Deepgram is a diamond sponsor and Cartesia’s CEO is on the speaker list. Voice AI Live: Multilingual Voice Agents with Cartesia (Sep 2) is listed under Cartesia. Vapi is a platform customers often evaluate alongside AssemblyAI STT rather than a direct STT competitor.",
  },
];
