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
 * AssemblyAI. Re-researched 2026-10-10 (Pacific morning) against each vendor's own events page.
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
        id: "deepgram-speak-26",
        name: "Deepgram Speak '26",
        dateLabel: "Oct 29, 8am–6pm PT",
        sortDate: "2026-10-29",
        format: "in-person",
        location: "The Aviary, 135 Fourth St Ste 4000, San Francisco",
        description:
          "Deepgram’s flagship one-day SF voice-AI conference — keynotes/firesides plus builder conversation (explicitly not a sales pitch day). Live speaker roster on deepgram.com/speak as of 2026-09-29 includes Deepgram leadership plus Vapi (Jordan Dearsley), Daily/Pipecat (Kwindla Kramer), Twilio Field CTO, Cresta, Sierra, Coval, RingCentral, AWS, and Qualcomm — strongest single-day competitive ecosystem map of the window. Registration still open (~500 seats).",
        status: "confirmed",
        sourceUrl: "https://deepgram.com/speak",
        sourceLabel: "deepgram.com/speak",
        topics: ["stt", "voice-agents", "streaming", "tts"],
      },
      {
        id: "deepgram-vapi-web-summit-mixer",
        name: "Vapi × Deepgram: Web Summit Mixer",
        dateLabel: "Nov 9",
        sortDate: "2026-11-09",
        format: "in-person",
        location: "Lisboa, Portugal (Web Summit week)",
        description:
          "Vapi × Deepgram mixer during Web Summit Lisbon (Nov 9–12) — another EU Deepgram×Vapi co-branded room after the Sep 22 Barcelona sunset drinks (now past). Competitive ecosystem distribution signal the same week as VapiCon SF. Date corrected 2026-09-26 via Luma event/get + Vapi cal-9jzVoVZclDCewDU (was listed Nov 2; luma.com/vapi-t98x is Nov 9 PT / Web Summit opening day).",
        status: "confirmed",
        sourceUrl: "https://luma.com/vapi-t98x",
        sourceLabel: "luma.com",
        topics: ["voice-agents"],
      },
      {
        id: "deepgram-vapi-phone-voice-agent-workshop-sf",
        name: "Build Your First Phone Voice Agent — Deepgram × Vapi Workshop",
        dateLabel: "Nov 17, 6–9pm PT",
        sortDate: "2026-11-17",
        format: "in-person",
        location: "Deepgram SF Collab Hub, 505 Howard St Suite 100, San Francisco",
        description:
          "Deepgram × Vapi hands-on evening at Deepgram’s SoMa collab hub — guided build of a phone voice agent that answers real calls, with both vendors’ developer advocates unblocking attendees. DATE CORRECTION 2026-10-04: live event/get + Deepgram cal-qHEDltsO0Gr0WtD + Vapi cal + voiceaispace moved this from Nov 18 to Nov 17 (week after VapiCon; earlier Oct 14 listing also obsolete); still the strongest near-term Bay Area Deepgram×Vapi developer-education signal after Speak '26.",
        status: "confirmed",
        sourceUrl: "https://luma.com/deepgram-2jm5",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "stt", "streaming"],
      },
      {
        id: "deepgram-bolna-symphony-bengaluru-2026",
        name: "Symphony 2026: India's Voice AI Ecosystem (Bolna) — Deepgram partner",
        dateLabel: "Nov 20",
        sortDate: "2026-11-20",
        format: "in-person",
        location: "The Lalit Ashok, Bengaluru, India",
        description:
          "Bolna-hosted India Voice AI ecosystem conference (~1,000 attendees, 42+ speakers, 3 stages). Deepgram is a named ensemble/partner alongside Cartesia, Google Cloud, OpenAI, and Plivo — competitive India developer/operator mindshare after ElevenLabs Summit Bengaluru (Oct 6). Confirmed bolna.ai/symphony + voiceaispace as of 2026-10-02.",
        status: "confirmed",
        sourceUrl: "https://bolna.ai/symphony",
        sourceLabel: "bolna.ai/symphony",
        topics: ["voice-agents", "stt"],
      },
      {
        id: "deepgram-voice-ai-healthtech-london-dec3",
        name: "Voice AI in HealthTech: The Future of Ambient Intelligence",
        dateLabel: "Dec 3, 4–8pm GMT",
        sortDate: "2026-12-03",
        format: "in-person",
        location: "London, United Kingdom (exact venue on registration)",
        description:
          "Deepgram London industry session on ambient voice technology in healthcare — HealthTech builders plus NHS/clinical/digital leaders on pilots→scale, clinical safety, privacy/governance, and EHR workflow integration; drinks/networking after. NEW on Deepgram Luma cal-qHEDltsO0Gr0WtD as of 2026-10-06 (fimimqjw; Europe/London 16:00–20:00 UTC). Continues Deepgram’s London Voice AI programme after summer 2026 sessions — ambient-clinical STT / healthcare vertical mindshare (operator + product room more than a pure hackathon).",
        status: "confirmed",
        sourceUrl: "https://luma.com/fimimqjw",
        sourceLabel: "luma.com",
        topics: ["stt", "streaming", "audio-intel"],
      },
    ],
    watchNote:
      "Re-checked 2026-10-10: Deepgram Luma cal-qHEDltsO0Gr0WtD still lists deepgram-2jm5 (Nov 17 PT / UTC Nov 18 02:00) + Voice AI in HealthTech London Dec 3 (fimimqjw). deepgram.com/speak still live for Speak '26 (Oct 29) — builder + executive tracks, 40+ speakers. Web Summit Mixer still Nov 9 (vapi-t98x). Bolna Symphony 2026 (Nov 20 Bengaluru) names Deepgram as partner. Deepgram remains diamond sponsor at VapiCon (Nov 11–12). workshops.deepgram.com/uc-berkeley-2026 is curriculum for the already-past Jun 20–21 Berkeley AI Hackathon (pastEvents2026) — not a new dated room. Skip stale AWS GenAI Loft Deepgram×Daily workshop page (Jul 2025 year trap) and Deepgram×Nytro sales-enablement webinar (Oct 19 — not a developer room).",
  },
  {
    id: "cartesia",
    company: "Cartesia",
    category: "TTS / real-time voice models",
    homepageUrl: "https://luma.com/cartesia",
    events: [],
    watchNote:
      "Re-checked 2026-10-10: Cartesia Luma cal-EeDJt2cPbgGca1W still lists Drinks Around The Fire: Cartesia × Lorikeet (bz8x2v1s — still skipped as social mixer). Voices in the Room Coval×Cartesia remains past. Cartesia also named partner at Bolna Symphony 2026 (Nov 20 Bengaluru — tracked under Deepgram). Cartesia CEO remains on the VapiCon speaker list.",
  },
  {
    id: "elevenlabs",
    company: "ElevenLabs",
    category: "TTS / conversational agents / Scribe STT",
    homepageUrl: "https://elevenlabs.io/events",
    events: [
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
      "Re-checked 2026-10-10: Startup Grant Demo Day (Oct 21), Summit NYC (Nov 11), Chatbot Summit Amsterdam (Nov 26) URLs still 200. elevenlabs.io/events still surfaces Advertising Week NYC / FinovateFall / Raise Paris / Customer Impact Summit — skipped as marketing/booth rooms. No new SF Summit date for 2026. Deepgram Speak (Oct 29 SF) remains the competitive same-market calendar day two weeks before ElevenLabs NYC Summit / VapiCon week; Bolna Symphony (Nov 20) is separate India ecosystem competition.",
  },
  {
    id: "vapi",
    company: "Vapi",
    category: "Voice-agent platform",
    homepageUrl: "https://www.vapicon.ai/",
    events: [],
    watchNote:
      "Re-checked 2026-10-10: Vapi Luma calendar cal-9jzVoVZclDCewDU — Voice Agents Forum (Nov 5, also on main calendar), Vapi×Deepgram Web Summit Mixer (Nov 9, Lisbon — tracked under Deepgram), VapiCon 2026 (Nov 11–12, Fort Mason SF — Deepgram diamond sponsor; Cartesia CEO on speaker list; Vapi CEO also on Deepgram Speak '26 roster), Deepgram × Vapi phone voice-agent workshop SF still Nov 17 (deepgram-2jm5; tracked under Deepgram + main calendar), VapiCon afterparty Nov 12 (skipped as social). Vapi also invited on Fall '26 VON Atlanta VoiceAI LIVE! (Oct 13 — tracked on main calendar + SignalWire). Skip builders-sep26 (2025 Voice AI Builders Meetup slug trap).",
  },
  {
    id: "regal",
    company: "Regal AI",
    category: "Contact-center / Voice AI platform",
    homepageUrl: "https://www.regal.ai/",
    events: [],
    watchNote:
      "Re-checked 2026-10-10: Regal Rise (Sep 17 NYC/virtual) already pruned. No new dated public Regal events found — watch for a Bay Area follow-on vs AssemblyAI phone-agent builders.",
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
      "Twilio UK Luma calendar cal-hoJOad2gnCAn32t (2026-10-10) still surfaces Conversations in the AI era London (Oct 14, d14cpj24), Manchester builder meetup Nov 4 (401md669), London December edition Dec 3 (9xwcwwxz); Assemble London Nov 3 (7z0fyqec) still confirmed via event/get (not on cal items this pass). Note: Deepgram’s HealthTech London (Dec 3, fimimqjw) lands the same calendar day as Twilio’s Dec 3 London builder meetup — EU voice/comms mindshare cluster. Twilio Field CTO Andy O’Dower remains on Deepgram Speak '26 (Oct 29). Watch twilio.com and Assemble announcements for US/Bay Area dates.",
  },
  {
    id: "agora",
    company: "Agora",
    category: "Realtime voice / video / conversational AI",
    homepageUrl: "https://www.agora.io/",
    events: [
      {
        id: "agora-voice-ai-workshop-nyc-oct12",
        name: "Voice AI Workshop — NYC",
        dateLabel: "Oct 12, 9:00pm–12:00am ET",
        sortDate: "2026-10-12",
        format: "in-person",
        location: "New York, NY (exact venue on registration)",
        description:
          "Agora NYC Voice AI Workshop on cal-wYHDiuJD5JdAolS (luma.com/b59sk0v6) — evening builder session for teams shipping realtime voice agents on Agora’s stack. Continues the NYC competitive cadence after the Sep 30 Hermes co-hosted workshop (now past). Note: voiceaispace mis-dates this as Oct 8 — trust Luma event/get (Oct 12 ET / UTC Oct 13 01:00).",
        status: "confirmed",
        sourceUrl: "https://luma.com/b59sk0v6",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "streaming"],
      },
    ],
    watchNote:
      "Re-checked 2026-10-10: Oct 12 evening ET Voice AI Workshop (b59sk0v6) still confirmed via event/get (calendar get-items no longer lists it — keep until event/get fails). Empathy & Scale (Oct 13, SF) still on cal — skipped as vertical/exec. Do not trust voiceaispace’s Oct 8 date for the NYC workshop.",
  },
  {
    id: "signalwire",
    company: "SignalWire",
    category: "Communications / Voice-agent platform",
    homepageUrl: "https://signalwire.com/resources/events",
    events: [
      {
        id: "signalwire-von-atlanta-voiceai-live",
        name: "SignalWire @ Fall '26 VON — VoiceAI LIVE!",
        dateLabel: "Oct 13–15",
        sortDate: "2026-10-13",
        format: "in-person",
        location: "Sandy Springs Performing Arts Center, Atlanta, GA",
        description:
          "SignalWire is a confirmed VoiceAI LIVE! presenter at Jeff Pulver’s Fall '26 Voice and Conversations on the Net (Atlanta) — demo-stage mindshare next to Vapi (invited), SoundHound, Dialpad, and other contact-center / phone-agent vendors. Same week as Agora Empathy SF (skipped) and Agentic Observability SF; tracked on main calendar as von-voice-conversations-atlanta-2026.",
        status: "confirmed",
        sourceUrl: "https://www.vonevolution.com/f26-agenda",
        sourceLabel: "vonevolution.com",
        topics: ["voice-agents", "streaming"],
      },
    ],
    watchNote:
      "Re-checked 2026-10-10: VoiceAI LIVE! at Fall '26 VON Atlanta Oct 13–15 still live. Palo Alto Build AI Voice Agents workshop (Oct 6) is past. Watch signalwire.com/resources/events for further city stops.",
  },
  {
    id: "livekit",
    company: "LiveKit",
    category: "Realtime voice/video agents",
    homepageUrl: "https://livekit.io/",
    events: [],
    watchNote:
      "Re-checked 2026-10-10: SF Tech Week co-host Solving 'voice' as an interface (Oct 7) remains in pastEvents2026 (Luma norm3pxo still 404). livekit.io/events still 404. No new dated LiveKit-owned rooms — surfaces via partner nights; re-check weekly around Voice Agents Forum / VapiCon.",
  },
  {
    id: "retell",
    company: "Retell AI",
    category: "Voice-agent platform",
    homepageUrl: "https://www.retellai.com/",
    events: [],
    watchNote:
      "No public dated Jul–Dec 2026 developer events found on retellai.com/events as of 2026-10-10 (Upcoming Webinars empty; on-demand TCPA webinar only). Typically appears at voice-agent conferences (VapiCon-class rooms) rather than running a dated Luma series. Check LinkedIn / retellai.com/blog.",
  },
  {
    id: "bland",
    company: "Bland AI",
    category: "Voice-agent platform",
    homepageUrl: "https://www.bland.ai/",
    events: [],
    watchNote:
      "No public dated Jul–Dec 2026 developer events found on bland.ai as of 2026-10-10. Watch bland.ai and partner pages around contact-center / phone-agent summits.",
  },
  {
    id: "pipecat-daily",
    company: "Pipecat / Daily",
    category: "Voice-agent framework / WebRTC",
    homepageUrl: "https://pipecat.ai/",
    events: [],
    watchNote:
      "pipecat.ai and daily.co/blog still show no owned dated public meetups as of 2026-10-10. Competitive signal: Deepgram × Daily Flux TTS on Pipecat webinar (Sep 29) is past; Pipecat co-hosted Voice AI: Shaping the Next Frontier of Customer Interaction (Oct 1 London, luma.com/prkbq50k — now past). Daily/Pipecat CEO Kwindla Kramer is on Deepgram Speak '26 (Oct 29). Pipecat often co-appears with Speechmatics / LiveKit / Deepgram builder nights — watch those calendars and daily.co changelog.",
  },
  {
    id: "speechmatics",
    company: "Speechmatics",
    category: "STT / speaker-aware transcription",
    homepageUrl: "https://www.speechmatics.com/community",
    events: [],
    watchNote:
      "Re-checked 2026-10-10: Speechmatics Luma cal-ZYr28XXq5fyMAym still empty. Solving 'voice' as an interface SF Tech Week (Oct 7) remains in pastEvents2026. Check luma.com/user/Speechmatics and speechmatics.com/community for the next partner night.",
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
          "Paris engineering evening on production voice AI stacks — diarization (pyannoteAI), transcription (Gladia), and inference (Modal). Direct STT competitor mindshare play in EU; approval/waitlist on luma.com/paris-voice-ai.",
        status: "confirmed",
        sourceUrl: "https://luma.com/paris-voice-ai",
        sourceLabel: "luma.com",
        topics: ["stt", "voice-agents", "audio-intel"],
      },
    ],
    watchNote:
      "Re-checked 2026-10-10: Paris Voice AI Meetup with pyannoteAI × Modal (Oct 14, paris-voice-ai) still live. Direct STT competitor with EU residency positioning — also check gladia.io and @gladiaio.",
  },
  {
    id: "soniox",
    company: "Soniox",
    category: "STT / real-time transcription",
    homepageUrl: "https://www.soniox.com/",
    events: [],
    watchNote:
      "No public dated Jul–Dec 2026 events found on soniox.com as of 2026-10-10. Real-time STT competitor — watch soniox.com and LinkedIn for workshop / launch announcements.",
  },
  {
    id: "rev-ai",
    company: "Rev AI",
    category: "STT / asynchronous transcription",
    homepageUrl: "https://www.rev.ai/",
    events: [],
    watchNote:
      "No public dated Jul–Dec 2026 developer events found on rev.ai as of 2026-10-10. Check rev.com/blog and partner conference booths.",
  },
  {
    id: "hume",
    company: "Hume AI",
    category: "Empathic TTS / voice",
    homepageUrl: "https://www.hume.ai",
    events: [],
    watchNote:
      "No dedicated public events calendar found at research time (2026-10-10). Hume sponsored/judged AGI House Voice AI Hackathon (Sep 19, now pastEvents2026) — competitive TTS/empathic-voice mindshare at AGI House. Otherwise shows up as a speaker/sponsor at voice-agent conferences rather than running its own dated series. Check hume.ai and @hume_ai.",
  },
  {
    id: "smallest-ai",
    company: "Smallest AI",
    category: "TTS / STT / speech-to-speech",
    homepageUrl: "https://luma.com/smallest.ai",
    events: [],
    watchNote:
      "Luma calendar cal-xZRPdTa3UcyyNJE empty as of 2026-10-10. Past 2026 Bay Area pattern: Beyond Text research talks (Jun 8, Menlo Park), Voice AI Goes Global multilingual panel (Jun 15), CCW Las Vegas steakhouse afterhours with Telnyx (Jun 24), Voice AI HackSprint 2.0 (Mar 14, SF). Re-check weekly — they run SF/Menlo Park builder nights in bursts.",
  },
  {
    id: "google-cloud-speech",
    company: "Google Cloud Speech / Gemini Live",
    category: "Cloud STT / realtime voice",
    homepageUrl: "https://cloud.google.com/speech-to-text",
    events: [],
    watchNote:
      "Re-checked 2026-10-10: Gemini Audio | At Night (Sep 24) remains in pastEvents2026. No new dated Google Cloud Speech / Gemini Live Bay Area builder rooms on DeepMind Luma cal-7Q5A70Bz5Idxopu (Cerebral Valley Google DeepMind AI Hackathon Oct 16 is Korea — skip; Encode London / Gemma Hardware Hackathon not speech-specific). Watch Google Cloud events and Gemini Live launch webinars for follow-ons.",
  },
  {
    id: "azure-ai-speech",
    company: "Microsoft Azure AI Speech",
    category: "Cloud STT / TTS",
    homepageUrl: "https://azure.microsoft.com/en-us/products/ai-services/ai-speech",
    events: [
      {
        id: "azure-voice-agents-upgraded-foundry-oct12",
        name: "Voice Agents Upgraded: New Speech Models and Agent Experience In Foundry",
        dateLabel: "Oct 12, 10:30–11:30am PT",
        sortDate: "2026-10-12",
        format: "virtual",
        location: "Online (Microsoft Reactor / Model Mondays)",
        description:
          "Microsoft Reactor Model Mondays virtual session — live Foundry playground demo building/testing/monitoring a voice agent, plus Azure Speech STT/TTS/speech-to-speech updates including new MAI models. Direct Azure AI Speech competitive developer education signal (surfaced via Microsoft Reactor SF Meetup 316405690 + developer.microsoft.com/reactor/events/27565 as of 2026-10-09).",
        status: "confirmed",
        sourceUrl: "https://developer.microsoft.com/en-us/reactor/events/27565/",
        sourceLabel: "developer.microsoft.com",
        topics: ["voice-agents", "stt", "tts", "streaming"],
      },
    ],
    watchNote:
      "Re-checked 2026-10-10: Model Mondays Voice Agents Upgraded (Oct 12, 5:30–6:30pm UTC / 10:30am PT, event 27565) still live — same session mirrored on Reactor NYC/London Meetup listings. Watch Microsoft Reactor SF for further Azure Speech / Foundry voice sessions.",
  },
  {
    id: "aws-transcribe",
    company: "AWS Transcribe / Bedrock",
    category: "Cloud STT / contact-center AI",
    homepageUrl: "https://aws.amazon.com/transcribe/",
    events: [],
    watchNote:
      "No Transcribe-specific dated Jul–Dec 2026 events confirmed as of 2026-10-10. Multi-Model Hackathon (Oct 23, luma.com/beta-79jb — Beta Fund × AWS × OpenAI) at AWS Builder Loft remains on the main calendar — multimodal-audio teams are the STT pitch. Skip Universal Hackathon AWS Loft Oct 19 (generic AI-workforce / Masky.ai). Watch AWS Gen AI Loft SF for Amazon Connect / contact-center voice sessions. Skip stale aws.amazon.com enterprise real-time voice-agents workshop page (Deepgram×Daily — Jul 2025 year trap).",
  },
];
