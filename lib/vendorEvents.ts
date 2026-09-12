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
 * AssemblyAI. Re-researched 2026-09-12 (Pacific morning) against each vendor's own events page.
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
        id: "deepgram-guess-whos-talking",
        name: "Guess Who's Talking",
        dateLabel: "Sep 14, 6:00–8:30pm PT",
        sortDate: "2026-09-14",
        format: "in-person",
        location: "San Francisco, CA (SoMa; Deepgram new event space — venue on registration)",
        description:
          "Deepgram Bay Area community night at their new SF event space — meet Community Engineer Dana and ship a hands-on agent-with-avatar workshop (feedback shapes the public version). Highest-signal new Deepgram SF builder room before Speak '26; competitive local mindshare play.",
        status: "confirmed",
        sourceUrl: "https://luma.com/deepgram-xyix",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "stt", "streaming"],
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
        id: "deepgram-london-customer-interaction",
        name: "Voice AI: Shaping the Next Frontier of Customer Interaction",
        dateLabel: "Oct 1, 6:00–8:30pm BST",
        sortDate: "2026-10-01",
        format: "in-person",
        location: "London, United Kingdom (venue on registration)",
        description:
          "Deepgram × Pipecat × frog (Capgemini Invent) London evening on Voice AI for customer interaction — fireside with Deepgram VP Eng Kris Efland plus enterprise CX/engineering leaders on voice-first design, conversational apps, and adoption at scale. New on Deepgram Luma cal-qHEDltsO0Gr0WtD (luma.com/prkbq50k) as of 2026-09-07; Pipecat co-host is a strong EU framework-distribution signal after the Sep 10 London Voice AI Exchange.",
        status: "confirmed",
        sourceUrl: "https://luma.com/prkbq50k",
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
          "Vapi × Deepgram mixer during Web Summit Lisbon — another EU Deepgram×Vapi co-branded room after the Sep 22 Barcelona sunset drinks. Competitive ecosystem distribution signal heading into VapiCon week. Listed luma.com/vapi-t98x as of 2026-09-02.",
        status: "confirmed",
        sourceUrl: "https://luma.com/vapi-t98x",
        sourceLabel: "luma.com",
        topics: ["voice-agents"],
      },
    ],
    watchNote:
      "Re-checked 2026-09-12: London Voice AI Exchange (Sep 10) pruned after day passed. Luma cal-qHEDltsO0Gr0WtD still lists Guess Who's Talking (Sep 14 SF, deepgram-xyix) and Voice AI: Shaping the Next Frontier of Customer Interaction (Oct 1 London, prkbq50k — Deepgram × Pipecat × frog). deepgram.com/speak still live for Speak '26 (Oct 29, The Aviary SF). Vapi×Deepgram BCN sunset drinks (Sep 22) + Web Summit Mixer (Nov 2) still confirmed. Hatch Designing for Voices (Sep 18) still live. deepgram.com/events 404s. Deepgram remains silver sponsor at AI Summit Barcelona (Sep 22–23) and diamond sponsor at VapiCon (Nov 11–12).",
  },
  {
    id: "cartesia",
    company: "Cartesia",
    category: "TTS / real-time voice models",
    homepageUrl: "https://luma.com/cartesia",
    events: [
      {
        id: "cartesia-field-notes-india-sep16",
        name: "[Webinar] Field Notes: Voice AI in India",
        dateLabel: "Sep 16, 9:30–10:30pm PT",
        sortDate: "2026-09-16",
        format: "virtual",
        description:
          "Cartesia webinar on building voice agents for the India market — multilingual coverage across Indian languages, market context, and production lessons for teams shipping voice AI there. Re-listed on Cartesia Luma cal-EeDJt2cPbgGca1W (qyt0fc3o) as of 2026-09-12 after Farm to Table cleared.",
        status: "confirmed",
        sourceUrl: "https://luma.com/qyt0fc3o",
        sourceLabel: "luma.com/cartesia",
        topics: ["tts", "voice-agents"],
      },
    ],
    watchNote:
      "Re-checked 2026-09-12: Field Notes: Voice AI in India webinar (Sep 16, qyt0fc3o) still live. NEW Luma listing Drinks Around The Fire: Cartesia × Lorikeet (Sep 30 evening PT / Oct 1 UTC, bz8x2v1s) — skipped as social mixer (no builder agenda). Cartesia CEO remains on the VapiCon speaker list.",
  },
  {
    id: "elevenlabs",
    company: "ElevenLabs",
    category: "TTS / conversational agents / Scribe STT",
    homepageUrl: "https://elevenlabs.io/events",
    events: [
      {
        id: "elevenlabs-demand-spikes-workshop",
        name: "Live Workshop: Handling Demand Spikes Without Adding Headcount",
        dateLabel: "Sep 22",
        sortDate: "2026-09-22",
        format: "virtual",
        description:
          "ElevenLabs live workshop on voice agents for support demand spikes — end-to-end high-volume support demo, multilingual mid-call language switching, telephony handoff, and pre-peak stress testing / containment measurement. Competitive CX voice-agent education play vs AssemblyAI phone-agent builders.",
        status: "confirmed",
        sourceUrl:
          "https://elevenlabs.io/webinars/live-workshop-handling-demand-spikes-without-adding-headcount",
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
      "Re-checked 2026-09-12: Finovate Fall (Sep 9–11 NYC) pruned after the conference ended. Live Workshop: Handling Demand Spikes (Sep 22) still on elevenlabs.io/webinars. Summit Bengaluru (Oct 6), Startup Grant Demo Day (Oct 21), Summit NYC (Nov 11), Chatbot Summit Amsterdam (Nov 26) still confirmed. No new SF Summit date. Deepgram Speak (Oct 29 SF) remains the competitive same-market calendar day two weeks before ElevenLabs NYC Summit / VapiCon week.",
  },
  {
    id: "vapi",
    company: "Vapi",
    category: "Voice-agent platform",
    homepageUrl: "https://www.vapicon.ai/",
    events: [
      {
        id: "vapi-behind-the-feature",
        name: "Behind the feature: building in the age of AI",
        dateLabel: "Sep 22, 10:00–11:00am PT",
        sortDate: "2026-09-22",
        format: "virtual",
        description:
          "Vapi product deep-dive for voice-agent developers — walks through Simulations, AI testers, and model-catalog picks for teams shipping production phone agents. Competitive signal into how Vapi educates the 750k-developer claim base.",
        status: "confirmed",
        sourceUrl: "https://luma.com/ofrq557i",
        sourceLabel: "luma.com",
        topics: ["voice-agents"],
      },
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
      "Re-checked 2026-09-12: Vapi Luma calendar cal-9jzVoVZclDCewDU still lists Behind the feature (Sep 22, ofrq557i), BCN executive dinner (Sep 23), early-stage sales dinner (Sep 24, skipped), Fleet Week yacht (Oct 8, skipped), Vapi×Deepgram Web Summit Mixer (Nov 2, Lisbon — tracked under Deepgram), and VapiCon (Nov 11). HumanX Amsterdam after-hours (Sep 23, d7jixwna) still live. VapiCon 2026 (Nov 11–12, Fort Mason SF) remains on the main calendar — Deepgram diamond sponsor; Cartesia CEO on the speaker list. Skip builders-sep26 (2025 Voice AI Builders Meetup slug trap).",
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
          "Regal’s contact-center Voice AI customer day — brand stories, live product sessions, and operator conversations on how AI agents and Voice AI are reshaping CX. NYC in-person or virtual; competitive window into phone-agent / contact-center buyer and builder mindshare. Confirmed luma.com/regal-rise-2026 as of 2026-09-06.",
        status: "confirmed",
        sourceUrl: "https://luma.com/regal-rise-2026",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "stt", "streaming"],
      },
    ],
    watchNote:
      "Re-checked 2026-09-12: Regal Rise (Sep 17 NYC/virtual) is still the dated public event (luma.com/regal-rise-2026). Adjacent contact-center Voice AI competitive signal vs AssemblyAI phone-agent builders — watch for a Bay Area follow-on.",
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
    ],
    watchNote:
      "Twilio UK Luma calendar (2026-09-12) surfaces Conversations in the AI era London (Oct 14, d14cpj24), Assemble London Nov 3 (7z0fyqec), plus coffee cowork meetups and Twilio Dev User Group London (Sep 17, f6jbqbec) — community builder rooms adjacent to Twilio. SIGNAL San Francisco 2026 is past (on-demand on signal.twilio.com/2026; 2027 interest form live). Watch twilio.com and Assemble announcements for US/Bay Area dates.",
  },
  {
    id: "agora",
    company: "Agora",
    category: "Realtime voice / video / conversational AI",
    homepageUrl: "https://www.agora.io/",
    events: [
      {
        id: "agora-ai-toys-tokyo",
        name: "AI Toys Come Alive! — Realtime Voice AI × Interactive Entertainment",
        dateLabel: "Sep 17, 5–9pm JST",
        sortDate: "2026-09-17",
        format: "in-person",
        location: "Tokyo, Japan (near JR Kanda Station; invite-only)",
        description:
          "Agora × AWS Tokyo evening on realtime voice AI / conversational AI for AI toys and interactive entertainment — talks, live demos, networking. Competitive Agora realtime-voice mindshare in Japan, not a Bay Area room.",
        status: "confirmed",
        sourceUrl: "https://luma.com/nts51f1c",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "streaming"],
      },
      {
        id: "agora-voice-ai-workshop-nyc",
        name: "Voice AI Workshop — NYC (Build Voice AI Agents in Minutes)",
        dateLabel: "Oct 8",
        sortDate: "2026-10-08",
        format: "in-person",
        location: "New York, NY (Manhattan; exact venue on registration)",
        description:
          "Hands-on Agora workshop to ship a working Voice AI agent with Agent Studio + Agora CLI — configure behavior/voice/models, initialize a local starter, and move from idea to functional agent. Strong competitive NYC voice-agent builder room vs AssemblyAI’s recent NYC meetup cadence.",
        status: "confirmed",
        sourceUrl: "https://luma.com/qb1bk73c",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "streaming"],
      },
    ],
    watchNote:
      "Re-checked 2026-09-12: Agora Luma calendar cal-wYHDiuJD5JdAolS still lists AI Toys Tokyo (Sep 17, nts51f1c) + Voice AI Workshop NYC (Oct 8, qb1bk73c). Empathy & Scale (Oct 13, SF) still listed — invite-only behavioral-health product-leadership dinner; skipped as exec/vertical. Re-check agora.io and luma.com/agoraio for Bay Area builder nights.",
  },
  {
    id: "livekit",
    company: "LiveKit",
    category: "Realtime voice/video agents",
    homepageUrl: "https://livekit.io/",
    events: [],
    watchNote:
      "No dedicated public events page (livekit.io/events 404 as of 2026-09-12). LiveKit co-hosted AssemblyAI’s NYC Voice AI Meetup Sep 1 (now in pastEvents2026). Competitive signal: LiveKit GM Robotics (David Chen) is on the panel for The Audio Layer 3.0: Voice x Robotics (Sep 15, luma.com/uxmg18ib, Tavus SF — tracked on main calendar). Surfaces via Luma user LiveKit_Events and partner hackathons — re-check weekly around voice-agent forums.",
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
      "pipecat.ai and daily.co/blog still show no owned dated public meetups as of 2026-09-12. Competitive signal: Pipecat is a named co-host (with Deepgram + frog/Capgemini Invent) on Voice AI: Shaping the Next Frontier of Customer Interaction (Oct 1 London, luma.com/prkbq50k — tracked under Deepgram). Pipecat often co-appears with Speechmatics / LiveKit / Deepgram builder nights — watch those calendars and daily.co changelog.",
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
      "Re-checked 2026-09-12: NEW Paris Voice AI Meetup with pyannoteAI × Modal (Oct 14, paris-voice-ai) — first dated Gladia public room since RAISE Summit Paris (Jul 8–9). Direct STT competitor with EU residency positioning — also check gladia.io and @gladiaio.",
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
    events: [],
    watchNote:
      "Luma calendar cal-xZRPdTa3UcyyNJE empty as of 2026-09-12 — The Direct Line Mumbai (Sep 8, e0vcvxo9) pruned after Pacific day passed. Past 2026 Bay Area pattern: Beyond Text research talks (Jun 8, Menlo Park), Voice AI Goes Global multilingual panel (Jun 15), CCW Las Vegas steakhouse afterhours with Telnyx (Jun 24), Voice AI HackSprint 2.0 (Mar 14, SF). Re-check weekly — they run SF/Menlo Park builder nights in bursts.",
  },
  {
    id: "google-cloud-speech",
    company: "Google Cloud Speech / Gemini Live",
    category: "Cloud STT / realtime voice",
    homepageUrl: "https://cloud.google.com/speech-to-text",
    events: [],
    watchNote:
      "No Google-hosted dated speech/voice developer events isolated for Jul–Dec 2026 as of 2026-09-12 beyond general Cloud / Gemini sessions. Watch Google Cloud events and Gemini Live launch webinars; Open Model Hack (Gradient × DeepMind, Sep 12) is on the main calendar as adjacent open-model room.",
  },
  {
    id: "azure-ai-speech",
    company: "Microsoft Azure AI Speech",
    category: "Cloud STT / TTS",
    homepageUrl: "https://azure.microsoft.com/en-us/products/ai-services/ai-speech",
    events: [],
    watchNote:
      "No Azure AI Speech-specific dated Jul–Dec 2026 events confirmed as of 2026-09-12. Llama Lounge 26 (Sep 10, Microsoft MV) pruned after Pacific day passed — was a borrowed Microsoft campus room, not an Azure Speech product event. Watch Microsoft Reactor SF.",
  },
  {
    id: "aws-transcribe",
    company: "AWS Transcribe / Bedrock",
    category: "Cloud STT / contact-center AI",
    homepageUrl: "https://aws.amazon.com/transcribe/",
    events: [],
    watchNote:
      "No Transcribe-specific dated Jul–Dec 2026 events confirmed as of 2026-09-12. Healthcare AI Hackathon (Sep 26) and Multi-Model Hackathon (Oct 23, luma.com/beta-79jb) at AWS Builder Loft are on the main calendar — ambient-scribe / multimodal-audio teams are the STT pitch. Watch AWS Gen AI Loft SF for Amazon Connect / contact-center voice sessions.",
  },
];
