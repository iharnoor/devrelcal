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
 * AssemblyAI. Re-researched 2026-10-21 (~09:00 PT) against each vendor's own events page.
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
      "Re-checked 2026-10-21: Deepgram Luma cal-qHEDltsO0Gr0WtD still lists deepgram-2jm5 (Nov 17 PT) + Voice AI in HealthTech London Dec 3 (fimimqjw). deepgram.com/speak still 200 for Speak '26 (Oct 29 daytime). Coverage conflict: AssemblyAI owned Text-to-Screech TTS launch (assemb-42oc) same evening Oct 29 5–8pm PT — owned Voice hackathon week (msrwwjby) Oct 27–Nov 7. Web Summit Mixer still Nov 9 (vapi-t98x); same Lisbon week as Agora Scaling Voice AI (wqg33o39, Nov 10) and Cartesia S2S First Look SF (xrj6gzm2, Nov 10). Bolna Symphony 2026 (Nov 20) names Deepgram as partner. Deepgram remains diamond sponsor at VapiCon (Nov 11–12). Deepgram Sr. DevRel Sam Gutentag confirmed on Voice Agents Forum (Nov 5) speaker roster. Same-day phone-agent education conflict Nov 17: Deepgram×Vapi SF in-person vs ElevenLabs ElevenAgents “Go Live” webinar. Skip Jul 2025 AWS GenAI Loft year trap and past Plivo×Deepgram×Inworld dihiwe4q (Apr 2026).",
  },
  {
    id: "cartesia",
    company: "Cartesia",
    category: "TTS / real-time voice models",
    homepageUrl: "https://luma.com/cartesia",
    events: [
      {
        id: "cartesia-speech-to-speech-first-look-sf",
        name: "Speech-to-Speech: A First Look with Cartesia in SF",
        dateLabel: "Nov 10, 6:30–9pm PT",
        sortDate: "2026-11-10",
        format: "in-person",
        location: "San Francisco, CA (exact venue on registration)",
        description:
          "Cartesia invite-gated SF evening — exclusive preview of Cartesia’s Speech-to-Speech model for builders/founders before production access, with product/process discussion. Strongest near-term Cartesia Bay Area product-education signal; same calendar day as Agora Lisbon Scaling Voice AI and AI Engineer Code Summit week (luma.com/xrj6gzm2 on cal-EeDJt2cPbgGca1W as of 2026-10-21).",
        status: "confirmed",
        sourceUrl: "https://luma.com/xrj6gzm2",
        sourceLabel: "luma.com",
        topics: ["tts", "voice-agents", "streaming"],
      },
    ],
    watchNote:
      "Re-checked 2026-10-21: Cartesia Luma cal-EeDJt2cPbgGca1W NEW dated room — Speech-to-Speech First Look SF (xrj6gzm2, Nov 10). Still skipping social/dinner rooms: Cartesia × Lorikeet drinks (bz8x2v1s, Oct 28), The Agent’s Table Managed Agents dinner (srbdv0c2, Nov 4 Copra), Speech-to-Speech Panel & Dinner with Sierra guest (0960vqe8, Nov 11). Cartesia also named partner at Bolna Symphony 2026 (Nov 20 Bengaluru — tracked under Deepgram). Cartesia CEO remains on the VapiCon speaker list.",
  },
  {
    id: "elevenlabs",
    company: "ElevenLabs",
    category: "TTS / conversational agents / Scribe STT",
    homepageUrl: "https://elevenlabs.io/events",
    events: [
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
        id: "elevenlabs-agents-build-series-take-action",
        name: "The ElevenAgents Build Series: Agents That Take Action",
        dateLabel: "Nov 10",
        sortDate: "2026-11-10",
        format: "virtual",
        description:
          "ElevenLabs virtual builder session (Session 2 of ElevenAgents Build Series) — connect a voice agent to tools/webhooks, verify callers, and run multi-step account actions (lookup, refund, delivery changes) live. Developer education room the day before Summit NYC / VapiCon week (elevenlabs.io webinars as of 2026-10-19).",
        status: "confirmed",
        sourceUrl:
          "https://elevenlabs.io/webinars/the-elevenagents-build-series-agents-that-take-action",
        sourceLabel: "elevenlabs.io",
        topics: ["voice-agents", "tts"],
      },
      {
        id: "elevenlabs-summit-new-york",
        name: "ElevenLabs Summit — New York",
        dateLabel: "Nov 11",
        sortDate: "2026-11-11",
        format: "in-person",
        location: "New York, NY",
        description:
          "ElevenLabs Summit NYC — same week as VapiCon in SF. Competitive calendar conflict for voice-agent DevRel coverage; listed on elevenlabs.io/summit/new-york as of 2026-10-19 (NVIDIA Jensen Huang on speaker roster).",
        status: "confirmed",
        sourceUrl: "https://elevenlabs.io/summit/new-york",
        sourceLabel: "elevenlabs.io",
        topics: ["tts", "voice-agents", "stt"],
      },
      {
        id: "elevenlabs-live-workshop-ai-booking-agent-travel",
        name: "Live workshop: Build an AI booking agent for travel",
        dateLabel: "Nov 11",
        sortDate: "2026-11-11",
        format: "virtual",
        description:
          "ElevenLabs virtual workshop introducing ElevenBooking / ElevenAgents — live demo of a multilingual voice booking concierge that takes action in booking systems mid-conversation. Same calendar day as Summit NYC (in-person) and VapiCon SF — parallel virtual voice-agent builder education track (elevenlabs.io webinars as of 2026-10-19).",
        status: "confirmed",
        sourceUrl:
          "https://elevenlabs.io/webinars/live-workshop-build-an-ai-booking-agent-for-travel",
        sourceLabel: "elevenlabs.io",
        topics: ["voice-agents", "tts"],
      },
      {
        id: "elevenlabs-agents-build-series-go-live",
        name: "The ElevenAgents Build Series: Go Live and Improve",
        dateLabel: "Nov 17",
        sortDate: "2026-11-17",
        format: "virtual",
        description:
          "Final ElevenAgents Build Series session — deploy a voice agent to a phone line or website, gradual rollout, live-call evals/monitoring, and turning production failures into tested fixes. Same calendar day as Deepgram × Vapi SF phone-agent workshop — virtual vs in-person phone voice-agent education conflict (elevenlabs.io webinars as of 2026-10-19).",
        status: "confirmed",
        sourceUrl:
          "https://elevenlabs.io/webinars/the-elevenagents-build-series-go-live-and-improve",
        sourceLabel: "elevenlabs.io",
        topics: ["voice-agents", "tts", "streaming"],
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
      "Re-checked 2026-10-21: Startup Grant Demo Day still today (Oct 21), ElevenAgents Build Series (Nov 10 Take Action + Nov 17 Go Live), Summit NYC (Nov 11), travel booking workshop (Nov 11 virtual, same day as Summit), Chatbot Summit Amsterdam (Nov 26) URLs still 200. Skip Nov 24 French CX GTM webinar. elevenlabs.io/events still surfaces Advertising Week NYC / FinovateFall / Raise Paris / Customer Impact Summit — skipped as marketing/booth rooms. No new SF Summit date for 2026. Oct 29 stacks Deepgram Speak (day) + AssemblyAI Text-to-Screech TTS launch (evening) in SF; Nov 10 stacks Cartesia S2S SF + ElevenAgents Take Action webinar; Nov 17 stacks Deepgram×Vapi SF phone workshop vs ElevenLabs Go Live webinar. AssemblyAI owned TTS hackathon week (msrwwjby, Oct 27–Nov 7) remains the near-term TTS mindshare counter-move vs ElevenLabs cohort.",
  },
  {
    id: "vapi",
    company: "Vapi",
    category: "Voice-agent platform",
    homepageUrl: "https://www.vapicon.ai/",
    events: [],
    watchNote:
      "Re-checked 2026-10-21: Vapi Luma calendar cal-9jzVoVZclDCewDU — Voice Agents Forum (Nov 5), Vapi×Deepgram Web Summit Mixer (Nov 9, Lisbon — tracked under Deepgram; same week as Agora Lisbon Scaling Voice AI Nov 10 + Cartesia S2S SF Nov 10), VapiCon 2026 (Nov 11–12, Fort Mason SF), Deepgram × Vapi phone voice-agent workshop SF still Nov 17 (deepgram-2jm5), VapiCon afterparty Nov 12 (skipped as social). Fall '26 VON Atlanta (Vapi invited) → pastEvents2026 after Pacific Oct 15. Skip builders-sep26 / vapi-l8kw yacht (past).",
  },
  {
    id: "regal",
    company: "Regal AI",
    category: "Contact-center / Voice AI platform",
    homepageUrl: "https://www.regal.ai/",
    events: [],
    watchNote:
      "Re-checked 2026-10-21: Regal Rise (Sep 17 NYC/virtual) already pruned. No new dated public Regal events found — watch for a Bay Area follow-on vs AssemblyAI phone-agent builders.",
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
      "Twilio UK Luma calendar cal-hoJOad2gnCAn32t (2026-10-21): Assemble London Nov 3 (7z0fyqec) + Manchester Nov 4 (401md669) + London Dec 3 (9xwcwwxz) all on cal items. Deepgram’s HealthTech London (Dec 3, fimimqjw) lands the same calendar day as Twilio’s Dec 3 London builder meetup — EU voice/comms mindshare cluster. Same Nov 5 London evening window as Speechmatics × Roark (c0iiab0e) vs Voice Agents Forum SF. Twilio Field CTO Andy O’Dower remains on Deepgram Speak '26 (Oct 29). Watch twilio.com and Assemble announcements for US/Bay Area dates.",
  },
  {
    id: "agora",
    company: "Agora",
    category: "Realtime voice / video / conversational AI",
    homepageUrl: "https://www.agora.io/",
    events: [
      {
        id: "agora-scaling-voice-ai-lisbon-nov10",
        name: "From Prototype to Production: Scaling Voice AI — Agora (Lisbon)",
        dateLabel: "Nov 10, 6:30–9:30pm WET",
        sortDate: "2026-11-10",
        format: "in-person",
        location: "Bairro Alto, Lisbon, Portugal",
        description:
          "Agora Convo AI World evening in Lisbon during Web Summit week — tech talks, panels, and demos on taking voice / conversational / realtime AI from prototype to production (agents, avatars, translation, multimodal). Day after Vapi×Deepgram Web Summit Mixer (Nov 9); same calendar day as Cartesia S2S First Look SF; same week as AI Engineer Code Summit SF / VapiCon — EU realtime voice-agent mindshare cluster (luma.com/wqg33o39 on Agora cal-wYHDiuJD5JdAolS as of 2026-10-21).",
        status: "confirmed",
        sourceUrl: "https://luma.com/wqg33o39",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "streaming"],
      },
    ],
    watchNote:
      "Re-checked 2026-10-21: cal-wYHDiuJD5JdAolS still lists From Prototype to Production: Scaling Voice AI (wqg33o39, Nov 10 Lisbon) — follow-on to the Oct 6 SF Tech Week edition (past). Empathy & Scale Oct 13 past; NYC Voice AI Workshop b59sk0v6 still 404. Watch agora.io + Luma for the next SF/NYC realtime voice-agent builder night.",
  },
  {
    id: "signalwire",
    company: "SignalWire",
    category: "Communications / Voice-agent platform",
    homepageUrl: "https://signalwire.com/resources/events",
    events: [],
    watchNote:
      "Re-checked 2026-10-21: VoiceAI LIVE! at Fall '26 VON Atlanta (Oct 13–15) pruned after Pacific end — VON kept in pastEvents2026. Palo Alto Build AI Voice Agents workshop (Oct 6) remains past. signalwire.com/resources/events still highlights ClueCon 2026 (past) — no new dated city workshops. Watch for the next SF/Bay Area production voice-agent workshop.",
  },
  {
    id: "livekit",
    company: "LiveKit",
    category: "Realtime voice/video agents",
    homepageUrl: "https://livekit.io/",
    events: [],
    watchNote:
      "Re-checked 2026-10-21: SF Tech Week co-host Solving 'voice' as an interface (Oct 7) remains in pastEvents2026 (Luma norm3pxo still 404). livekit.io/events still 404. No new dated LiveKit-owned rooms — surfaces via partner nights; re-check weekly around Voice Agents Forum / VapiCon.",
  },
  {
    id: "retell",
    company: "Retell AI",
    category: "Voice-agent platform",
    homepageUrl: "https://www.retellai.com/",
    events: [],
    watchNote:
      "Re-checked 2026-10-21: retellai.com/events Upcoming still empty (past TCPA Jul 22 / GHL Mar 2025 workshops only — not dated upcoming). Typically appears at voice-agent conferences (VapiCon-class rooms) rather than running a dated Luma series. Check LinkedIn / retellai.com/blog.",
  },
  {
    id: "bland",
    company: "Bland AI",
    category: "Voice-agent platform",
    homepageUrl: "https://www.bland.ai/",
    events: [],
    watchNote:
      "No public dated Jul–Dec 2026 developer events found on bland.ai as of 2026-10-21. Watch bland.ai and partner pages around contact-center / phone-agent summits.",
  },
  {
    id: "pipecat-daily",
    company: "Pipecat / Daily",
    category: "Voice-agent framework / WebRTC",
    homepageUrl: "https://pipecat.ai/",
    events: [],
    watchNote:
      "pipecat.ai/events still shows no upcoming dated public meetups as of 2026-10-21. Competitive signal: Deepgram × Daily Flux TTS on Pipecat webinar (Sep 29) is past; Pipecat co-hosted Voice AI: Shaping the Next Frontier of Customer Interaction (Oct 1 London, luma.com/prkbq50k — now past). Daily/Pipecat CEO Kwindla Kramer is on Deepgram Speak '26 (Oct 29) and VapiCon builder track. Pipecat often co-appears with Speechmatics / LiveKit / Deepgram builder nights — watch those calendars and daily.co changelog.",
  },
  {
    id: "speechmatics",
    company: "Speechmatics",
    category: "STT / speaker-aware transcription",
    homepageUrl: "https://www.speechmatics.com/community",
    events: [
      {
        id: "speechmatics-roark-voice-ai-improvement-loop-london",
        name: "Better Every Call? Building the Voice AI Improvement Loop — Speechmatics × Roark",
        dateLabel: "Nov 5, 6:30–9:00pm GMT",
        sortDate: "2026-11-05",
        format: "in-person",
        location: "London, United Kingdom (exact venue on registration)",
        description:
          "Speechmatics × Roark London engineering evening on the production voice-agent improvement loop — observing live calls, attributing failures across STT/latency/turn-taking/tools, measuring quality, and safely shipping changes. Continues Speechmatics’ London voice-agent cadence after the Oct 1 Tuner night; same calendar day as Voice Agents Forum SF (coverage conflict). NEW on Speechmatics Luma cal-ZYr28XXq5fyMAym as of 2026-10-13 (c0iiab0e).",
        status: "confirmed",
        sourceUrl: "https://luma.com/c0iiab0e",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "stt", "streaming"],
      },
    ],
    watchNote:
      "Re-checked 2026-10-21: Speechmatics Luma cal-ZYr28XXq5fyMAym still lists Better Every Call? (c0iiab0e, Nov 5 London with Roark) + What Did Your Agent Learn This Week? Voice AI Leaders Dinner (59dy3crh, Nov 10 SF Embarcadero — skipped as invite-only leaders dinner, not a developer room). speechmatics.com/events also lists HLTH Las Vegas Nov 15–18 (healthcare trade show — skipped as booth/operator room). c0iiab0e remains the strongest near-term Speechmatics developer mindshare after past Oct 1 Tuner + Tech Week LiveKit/Aqua (pastEvents2026).",
  },
  {
    id: "gladia",
    company: "Gladia",
    category: "STT / audio intelligence",
    homepageUrl: "https://gladia.io/",
    events: [],
    watchNote:
      "Re-checked 2026-10-21: Paris Voice AI Meetup with pyannoteAI × Modal (Oct 14, paris-voice-ai) remains pruned. No new dated Gladia public rooms — direct STT competitor with EU residency positioning; watch gladia.io and @gladiaio for the next EU builder night.",
  },
  {
    id: "soniox",
    company: "Soniox",
    category: "STT / real-time transcription",
    homepageUrl: "https://www.soniox.com/",
    events: [],
    watchNote:
      "No owned dated Jul–Dec 2026 events on soniox.com as of 2026-10-21. Competitive signal: Soniox CEO Klemen Simonic is on the VapiCon 2026 builder-track panel “Building Voice Models for Real Conversations” (Nov 12, with Deepgram CPO / Fish Audio / pyannoteAI). Real-time STT competitor — watch soniox.com and LinkedIn for workshop / launch announcements.",
  },
  {
    id: "rev-ai",
    company: "Rev AI",
    category: "STT / asynchronous transcription",
    homepageUrl: "https://www.rev.ai/",
    events: [],
    watchNote:
      "No public dated Jul–Dec 2026 developer events found on rev.ai as of 2026-10-21. Check rev.com/blog and partner conference booths.",
  },
  {
    id: "hume",
    company: "Hume AI",
    category: "Empathic TTS / voice",
    homepageUrl: "https://www.hume.ai",
    events: [],
    watchNote:
      "No dedicated public events calendar found at research time (2026-10-21). Hume sponsored/judged AGI House Voice AI Hackathon (Sep 19, now pastEvents2026) — competitive TTS/empathic-voice mindshare at AGI House. Otherwise shows up as a speaker/sponsor at voice-agent conferences rather than running its own dated series. Check hume.ai and @hume_ai.",
  },
  {
    id: "smallest-ai",
    company: "Smallest AI",
    category: "TTS / STT / speech-to-speech",
    homepageUrl: "https://luma.com/smallest.ai",
    events: [],
    watchNote:
      "Luma calendar cal-xZRPdTa3UcyyNJE empty as of 2026-10-21. Past 2026 Bay Area pattern: Beyond Text research talks (Jun 8, Menlo Park), Voice AI Goes Global multilingual panel (Jun 15), CCW Las Vegas steakhouse afterhours with Telnyx (Jun 24), Voice AI HackSprint 2.0 (Mar 14, SF). Re-check weekly — they run SF/Menlo Park builder nights in bursts.",
  },
  {
    id: "google-cloud-speech",
    company: "Google Cloud Speech / Gemini Live",
    category: "Cloud STT / realtime voice",
    homepageUrl: "https://cloud.google.com/speech-to-text",
    events: [],
    watchNote:
      "Re-checked 2026-10-21: Gemini Audio | At Night (Sep 24) remains in pastEvents2026. No new dated Google Cloud Speech / Gemini Live Bay Area builder rooms on DeepMind Luma cal-7Q5A70Bz5Idxopu (Encode London / Gemma Hardware Hackathon / Bench Summit not speech-specific; Gemini 4 Argon SF Hackathon Oct 25 + Founder Briefing Nov 4 skipped as generic frontier LLM / non-developer). Watch Google Cloud events and Gemini Live launch webinars for follow-ons.",
  },
  {
    id: "azure-ai-speech",
    company: "Microsoft Azure AI Speech",
    category: "Cloud STT / TTS",
    homepageUrl: "https://azure.microsoft.com/en-us/products/ai-services/ai-speech",
    events: [],
    watchNote:
      "Re-checked 2026-10-21: Model Mondays Voice Agents Upgraded (Oct 12) remains pruned. Watch Microsoft Reactor SF / Model Mondays for the next Azure Speech / Foundry voice-agent education hour.",
  },
  {
    id: "aws-transcribe",
    company: "AWS Transcribe / Bedrock",
    category: "Cloud STT / contact-center AI",
    homepageUrl: "https://aws.amazon.com/transcribe/",
    events: [],
    watchNote:
      "No Transcribe-specific dated Jul–Dec 2026 events confirmed as of 2026-10-21. Multi-Model Hackathon (Oct 23, luma.com/beta-79jb — Beta Fund × AWS × OpenAI) at AWS Builder Loft remains on the main calendar; Multi-Modal Education Hackathon @ Snowflake (Nov 13, beta-3ue5) adds a Voice & Audio Tutors track — multimodal-audio teams are the STT pitch. Same week as AGNTCon + MCPCon NA (Oct 22–23 San Jose) on the main calendar. Watch AWS Gen AI Loft SF for Amazon Connect / contact-center voice sessions. Skip stale Deepgram×Daily Jul 2025 year trap.",
  },
];
