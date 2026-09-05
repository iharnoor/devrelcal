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
 * AssemblyAI. Re-researched 2026-09-05 (Pacific morning) against each vendor's own events page.
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
        id: "deepgram-london-voice-ai-exchange",
        name: "London Voice AI Exchange",
        dateLabel: "Sep 10",
        sortDate: "2026-09-10",
        format: "in-person",
        location: "London, United Kingdom",
        description:
          "Deepgram London meetup — “Built to transcribe, asked to converse: what voice agents demand from the models underneath them.” Fireside with Nick Kaimakis (Deepgram STT product lead) and Christian Creenan (E.ON), then drinks. Listed luma.com/ipv5amb9 as of 2026-08-25.",
        status: "confirmed",
        sourceUrl: "https://luma.com/ipv5amb9",
        sourceLabel: "luma.com",
        topics: ["stt", "voice-agents", "streaming"],
      },
      {
        id: "deepgram-hatch-designing-for-voices",
        name: "Designing for Voices: The Future of User Interfaces (Hatch Conference)",
        dateLabel: "Sep 18",
        sortDate: "2026-09-18",
        format: "hybrid",
        location: "Berlin, Germany (Hatch Conference) + online stream",
        description:
          "Full-day Hatch Conference workshop led by Deepgram Staff Product Designer Ingrid — theory-to-build session where attendees ship a small voice-enabled project on Deepgram Voice APIs (Berlin onsite + online pass for Sep 18). Competitive designer/developer mindshare play in Europe.",
        status: "confirmed",
        sourceUrl:
          "https://www.hatchconference.com/workshops/designing-for-voices-the-future-of-user-interfaces",
        sourceLabel: "hatchconference.com",
        topics: ["stt", "voice-agents", "streaming"],
      },
      {
        id: "deepgram-vapi-bcn-sunset-drinks",
        name: "Voice AI Builders || Drinks Sunset Sessions, BCN edition — by Vapi & Deepgram",
        dateLabel: "Sep 22, evening CEST",
        sortDate: "2026-09-22",
        format: "in-person",
        location: "AZUL Rooftop | Barceloneta, Barcelona, Spain",
        description:
          "Vapi × Deepgram rooftop mixer during AI Summit Barcelona week — voice-AI builders networking (no decks). Same EU week as Deepgram’s AI Summit BCN silver-partner talk and Vapi’s Sep 23 BCN dinner / HumanX Amsterdam after-hours. Listed luma.com/aisummit-w7qr as of 2026-09-01.",
        status: "confirmed",
        sourceUrl: "https://luma.com/aisummit-w7qr",
        sourceLabel: "luma.com",
        topics: ["voice-agents"],
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
          "Vapi × Deepgram mixer during Web Summit Lisbon — another EU Deepgram×Vapi co-branded room after the Sep 22 Barcelona sunset drinks. Competitive ecosystem distribution signal heading into VapiCon week. Listed luma.com/vapi-t98x as of 2026-09-02.",
        status: "confirmed",
        sourceUrl: "https://luma.com/vapi-t98x",
        sourceLabel: "luma.com",
        topics: ["voice-agents"],
      },
    ],
    watchNote:
      "Re-checked 2026-09-05: Genesys Xperience lounge (Sep 2, Las Vegas) remains past. Luma cal-qHEDltsO0Gr0WtD still shows only London Voice AI Exchange (Sep 10). deepgram.com/speak still live for Speak '26 (Oct 29, The Aviary SF). Vapi×Deepgram BCN sunset drinks (Sep 22, luma.com/aisummit-w7qr) + Web Summit Mixer (Nov 2, Lisbon, luma.com/vapi-t98x) still confirmed. Hatch Designing for Voices (Sep 18) still live. deepgram.com/events 404s; workshops.deepgram.com undated lab guides only. Deepgram remains silver sponsor at AI Summit Barcelona (Sep 22–23, speaking Tue Sep 22 on AI Voice Agents: From Pilot to Production) and diamond sponsor at VapiCon (Nov 11–12).",
  },
  {
    id: "cartesia",
    company: "Cartesia",
    category: "TTS / real-time voice models",
    homepageUrl: "https://luma.com/cartesia",
    events: [
      {
        id: "cartesia-field-notes-voice-ai-india",
        name: "[Webinar] Field Notes: Voice AI in India",
        dateLabel: "Sep 9, 9:30pm PT",
        sortDate: "2026-09-09",
        format: "virtual",
        description:
          "Cartesia webinar on building multilingual voice agents for the Indian market — opportunity sizing and agents that work across Indian languages. Listed on Cartesia Luma calendar cal-EeDJt2cPbgGca1W (luma.com/qyt0fc3o) as of 2026-09-01.",
        status: "confirmed",
        sourceUrl: "https://luma.com/qyt0fc3o",
        sourceLabel: "luma.com/cartesia",
        topics: ["tts", "voice-agents", "stt"],
      },
      {
        id: "cartesia-farm-to-table-sep",
        name: "Farm to Table with Cartesia",
        dateLabel: "Sep 10, 6:30pm PT",
        sortDate: "2026-09-10",
        format: "in-person",
        location: "San Francisco, CA",
        description:
          "Cartesia HQ dinner for people building in voice AI — seasonal farm-to-table meal. Confirmed on luma.com/qiv3xhu6 / Cartesia calendar cal-EeDJt2cPbgGca1W as of 2026-09-04 (date flipped Sep 10 ↔ Sep 11 across recent scrapes — event/get currently Sep 10).",
        status: "confirmed",
        sourceUrl: "https://luma.com/qiv3xhu6",
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
      "Re-checked 2026-09-05: Cartesia Luma calendar (cal-EeDJt2cPbgGca1W) still lists Field Notes: Voice AI in India webinar Sep 9 (qyt0fc3o) and Farm to Table Sep 10 6:30pm PT (qiv3xhu6) — event/get still Sep 10. Maven AI Builders Summit session with Cartesia DevRel still listed Sep 10 8pm EDT. Cartesia CEO remains on the VapiCon speaker list.",
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
          "ElevenLabs booth at Finovate Fall (Sep 9–11, 2026) — voice-agent / conversational-AI presence aimed at fintech CX buyers.",
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
      "Re-checked 2026-09-05: ElevenLabs events page still lists Finovate Fall (Sep 9–11 NYC), Summit Bengaluru (Oct 6), and Summit NYC (Nov 11). Startup Grant Demo Day webinar Oct 21 still confirmed. Chatbot Summit Amsterdam (Nov 26) still confirmed. No new SF Summit date. Deepgram Speak (Oct 29 SF) remains the competitive same-market calendar day two weeks before ElevenLabs NYC Summit / VapiCon week.",
  },
  {
    id: "vapi",
    company: "Vapi",
    category: "Voice-agent platform",
    homepageUrl: "https://www.vapicon.ai/",
    events: [
      {
        id: "vapi-humanx-amsterdam-after-hours",
        name: "Voice AI after hours | HumanX Amsterdam",
        dateLabel: "Sep 23, evening CEST",
        sortDate: "2026-09-23",
        format: "in-person",
        location: "Amsterdam, Netherlands (HumanX week)",
        description:
          "Vapi-hosted voice-AI after-hours during HumanX Amsterdam — same day as the Barcelona AI Summit dinner, so EU DevRel coverage is split across two cities. Confirmed on luma.com/d7jixwna as of 2026-09-04 (title shortened from “Enterprise voice AI after hours”).",
        status: "confirmed",
        sourceUrl: "https://luma.com/d7jixwna",
        sourceLabel: "luma.com",
        topics: ["voice-agents"],
      },
      {
        id: "vapi-ai-summit-bcn-dinner",
        name: "AI Summit BCN: Voice AI executive dinner",
        dateLabel: "Sep 23",
        sortDate: "2026-09-23",
        format: "in-person",
        location: "Barcelona, Spain",
        description:
          "Vapi-organized voice-AI executive dinner during AI Summit BCN — listed on luma.com/3dqkgw6r / Vapi calendar as of 2026-08-25.",
        status: "confirmed",
        sourceUrl: "https://luma.com/3dqkgw6r",
        sourceLabel: "luma.com",
        topics: ["voice-agents"],
      },
    ],
    watchNote:
      "Re-checked 2026-09-05: Vapi Luma calendar cal-9jzVoVZclDCewDU lists BCN executive dinner (Sep 23), early-stage sales dinner (Sep 25, skipped), Fleet Week yacht (Oct 8, skipped), Vapi×Deepgram Web Summit Mixer (Nov 2, Lisbon — tracked under Deepgram), and VapiCon (Nov 11). HumanX Amsterdam after-hours (Sep 23, luma.com/d7jixwna) still live via event/get even when calendar listing is sparse. VapiCon 2026 (Nov 11–12, Fort Mason SF) remains on the main calendar — Deepgram diamond sponsor; Cartesia CEO on the speaker list.",
  },
  {
    id: "regal",
    company: "Regal AI",
    category: "Contact-center / Voice AI platform",
    homepageUrl: "https://www.regal.ai/",
    events: [
      {
        id: "regal-rise-2026",
        name: "Regal Rise",
        dateLabel: "Sep 17, 11am–3pm ET",
        sortDate: "2026-09-17",
        format: "hybrid",
        location: "New York, NY + virtual",
        description:
          "Regal’s contact-center Voice AI customer day — brand stories, live product sessions, and operator conversations on how AI agents and Voice AI are reshaping CX. NYC in-person or virtual; competitive window into phone-agent / contact-center buyer and builder mindshare. Confirmed luma.com/regal-rise-2026 as of 2026-09-05.",
        status: "confirmed",
        sourceUrl: "https://luma.com/regal-rise-2026",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "stt", "streaming"],
      },
    ],
    watchNote:
      "Re-checked 2026-09-05: Regal Rise (Sep 17 NYC/virtual) is the dated public event on regal.ai/events. Adjacent contact-center Voice AI competitive signal vs AssemblyAI phone-agent builders — watch for a Bay Area follow-on.",
  },
  {
    id: "twilio",
    company: "Twilio",
    category: "Communications / Conversational Intelligence",
    homepageUrl: "https://www.twilio.com/",
    events: [
      {
        id: "twilio-assemble-london",
        name: "Twilio Assemble London: The Future of Comms + AI",
        dateLabel: "Nov 19",
        sortDate: "2026-11-19",
        format: "in-person",
        location: "London, UK",
        description:
          "Twilio UK developer evening on AI + communications — Conversational Intelligence, Claude Code skills, and the Ola platform for next-gen customer experiences. Listed luma.com/7z0fyqec as of 2026-08-25.",
        status: "confirmed",
        sourceUrl: "https://luma.com/7z0fyqec",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "audio-intel", "streaming"],
      },
    ],
    watchNote:
      "Twilio UK Luma calendar (2026-09-02) also surfaces Ryan Britnell’s Conversations-in-the-AI-era / coffee cowork meetups (Manchester Sep 3 & Nov 4, London Oct 14 & Dec 3) plus Twilio Dev User Group London (Sep 17, luma.com/f6jbqbec) — community builder rooms adjacent to Twilio, not Twilio-owned product nights except Assemble. SIGNAL San Francisco 2026 is past (on-demand on signal.twilio.com/2026; 2027 interest form live). Watch twilio.com and Assemble announcements for US/Bay Area dates.",
  },
  {
    id: "agora",
    company: "Agora",
    category: "Realtime voice / video / conversational AI",
    homepageUrl: "https://www.agora.io/",
    events: [],
    watchNote:
      "Physical AI Night @ IFA Berlin (luma.com/23djl2ti) returned 404 on event/get as of 2026-08-30 — removed from dated list. Agora Luma calendar cal-wYHDiuJD5JdAolS as of 2026-09-02 still lists Empathy & Scale (Oct 13, SF) — invite-only behavioral-health product-leadership dinner; skipped as exec/vertical, not a developer voice room. Re-check agora.io and luma.com/agoraio for builder nights.",
  },
  {
    id: "livekit",
    company: "LiveKit",
    category: "Realtime voice/video agents",
    homepageUrl: "https://livekit.io/",
    events: [],
    watchNote:
      "No dedicated public events page (livekit.io/events 404 as of 2026-09-05). LiveKit co-hosted AssemblyAI’s NYC Voice AI Meetup Sep 1 (now in pastEvents2026). Competitive signal: LiveKit GM Robotics (David Chen) is on the panel for The Audio Layer 3.0: Voice x Robotics (Sep 15, luma.com/uxmg18ib, Tavus SF — tracked on main calendar). Surfaces via Luma user LiveKit_Events and partner hackathons — re-check weekly around voice-agent forums.",
  },
  {
    id: "retell",
    company: "Retell AI",
    category: "Voice-agent platform",
    homepageUrl: "https://www.retellai.com/",
    events: [],
    watchNote:
      "No public dated Jul–Dec 2026 events found on retellai.com as of 2026-08-27. Typically appears at voice-agent conferences (VapiCon-class rooms) rather than running a dated Luma series. Check LinkedIn / retellai.com/blog.",
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
      "pipecat.ai and daily.co/blog showed no dated Jul–Dec 2026 public meetups as of 2026-08-27. Pipecat often co-appears with Speechmatics / LiveKit builder nights — watch those calendars and daily.co changelog for workshop announcements.",
  },
  {
    id: "speechmatics",
    company: "Speechmatics",
    category: "STT / speaker-aware transcription",
    homepageUrl: "https://www.speechmatics.com/community",
    events: [],
    watchNote:
      "No confirmed dated Jul–Dec 2026 events on speechmatics.com/community as of 2026-08-27. They host London builder nights (often at Old Street HQ, sometimes with Pipecat / LiveKit / Voice AI Space). Check luma.com/user/Speechmatics. Aug 20 Voice AI Call mixer night has passed.",
  },
  {
    id: "gladia",
    company: "Gladia",
    category: "STT / audio intelligence",
    homepageUrl: "https://gladia.io/",
    events: [],
    watchNote:
      "No public dated Jul–Dec 2026 events found after RAISE Summit Paris (Jul 8–9). Surfaces events via LinkedIn and Luma rather than a dedicated calendar. Direct STT competitor with EU residency positioning — check gladia.io and @gladiaio.",
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
      "No dedicated public events calendar found at research time (2026-09-02). Hume is a named sponsor/judge on AGI House Voice AI Hackathon (Sep 19, luma.com/voiceaihackathon) and The AI Debates Hackathon (Sep 20, luma.com/aidebates) — competitive TTS/empathic-voice mindshare across a back-to-back AGI House voice weekend. Otherwise shows up as a speaker/sponsor at voice-agent conferences rather than running its own dated series. Check hume.ai and @hume_ai.",
  },
  {
    id: "smallest-ai",
    company: "Smallest AI",
    category: "TTS / STT / speech-to-speech",
    homepageUrl: "https://luma.com/smallest.ai",
    events: [
      {
        id: "smallest-direct-line-mumbai",
        name: "The Direct Line by Smallest.ai & Alohaa.ai",
        dateLabel: "Sep 8, afternoon IST",
        sortDate: "2026-09-08",
        format: "in-person",
        location: "Olive Café & Bar, BKC, Mumbai, India",
        description:
          "Smallest.ai × Alohaa.ai Mumbai meetup on phone-call voice AI for Indian businesses (orders, collections, support) — competitive voice-agent mindshare in India, not a Bay Area room.",
        status: "confirmed",
        sourceUrl: "https://luma.com/e0vcvxo9",
        sourceLabel: "luma.com/smallest.ai",
        topics: ["voice-agents", "tts", "stt"],
      },
    ],
    watchNote:
      "Luma calendar cal-xZRPdTa3UcyyNJE (2026-09-02) lists The Direct Line Mumbai (Sep 8) as the only dated upcoming entry. Past 2026 Bay Area pattern: Beyond Text research talks (Jun 8, Menlo Park), Voice AI Goes Global multilingual panel (Jun 15), CCW Las Vegas steakhouse afterhours with Telnyx (Jun 24), Voice AI HackSprint 2.0 (Mar 14, SF). Re-check weekly — they run SF/Menlo Park builder nights in bursts.",
  },
  {
    id: "google-cloud-speech",
    company: "Google Cloud Speech / Gemini Live",
    category: "Cloud STT / realtime voice",
    homepageUrl: "https://cloud.google.com/speech-to-text",
    events: [],
    watchNote:
      "No Google-hosted dated speech/voice developer events isolated for Jul–Dec 2026 as of 2026-08-27 beyond general Cloud / Gemini sessions. Watch Google Cloud events and Gemini Live launch webinars; Open Model Hack (Gradient × DeepMind, Sep 12) is on the main calendar as adjacent open-model room.",
  },
  {
    id: "azure-ai-speech",
    company: "Microsoft Azure AI Speech",
    category: "Cloud STT / TTS",
    homepageUrl: "https://azure.microsoft.com/en-us/products/ai-services/ai-speech",
    events: [],
    watchNote:
      "No Azure AI Speech-specific dated Jul–Dec 2026 events confirmed as of 2026-09-05. Llama Lounge 26 (Sep 10, Microsoft MV) is on the main calendar as a borrowed Microsoft campus room, not an Azure Speech product event. Watch Microsoft Reactor SF.",
  },
  {
    id: "aws-transcribe",
    company: "AWS Transcribe / Bedrock",
    category: "Cloud STT / contact-center AI",
    homepageUrl: "https://aws.amazon.com/transcribe/",
    events: [],
    watchNote:
      "No Transcribe-specific dated Jul–Dec 2026 events confirmed as of 2026-09-02. Healthcare AI Hackathon (Sep 26) and Multi-Model Hackathon (Oct 23, luma.com/beta-79jb) at AWS Builder Loft are on the main calendar — ambient-scribe / multimodal-audio teams are the STT pitch. Watch AWS Gen AI Loft SF for Amazon Connect / contact-center voice sessions.",
  },
];
