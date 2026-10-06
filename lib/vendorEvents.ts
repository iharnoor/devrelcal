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
 * AssemblyAI. Re-researched 2026-10-06 (Pacific morning) against each vendor's own events page.
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
        id: "deepgram-vonage-voice-ai-in-the-wild-techweek",
        name: "Voice AI in the Wild: Demos & Lunch with Vonage + Deepgram — SF Tech Week",
        dateLabel: "Oct 6, 11am–2pm PT",
        sortDate: "2026-10-06",
        format: "in-person",
        location: "Deepgram SF Collab Hub, 505 Howard St #100, San Francisco",
        description:
          "a16z SF Tech Week midday at Deepgram’s SoMa hub co-hosted with Vonage — live demos of Vonage Voice API + Deepgram speech intelligence (AI voice agents / real-time transcription), lunch, and developer networking. Missed Deepgram Luma cal-qHEDltsO0Gr0WtD; surfaced via voiceaispace → Partiful (Gp49nL2GPStlf9AlRpms) as of 2026-09-29. Deepgram×telco distribution play the same Tech Week day as Agora Prototype→Production and SignalWire Palo Alto.",
        status: "confirmed",
        sourceUrl: "https://partiful.com/e/Gp49nL2GPStlf9AlRpms",
        sourceLabel: "partiful.com",
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
      "Re-checked 2026-10-06: Deepgram Luma cal-qHEDltsO0Gr0WtD now lists deepgram-2jm5 (Nov 17 PT / UTC Nov 18 02:00) PLUS NEW Voice AI in HealthTech London Dec 3 (fimimqjw). Vonage×Deepgram Voice AI in the Wild lunch (Oct 6, Partiful Gp49nL2GPStlf9AlRpms) still live today — missed Luma cal. deepgram.com/speak still live for Speak '26 (Oct 29). Web Summit Mixer still Nov 9 (vapi-t98x). Bolna Symphony 2026 (Nov 20 Bengaluru) names Deepgram as partner. Deepgram remains diamond sponsor at VapiCon (Nov 11–12). Skip stale AWS GenAI Loft Deepgram×Daily workshop page (Jul 2025 year trap) and Deepgram×Nytro sales-enablement webinar (Oct 19 — not a developer room).",
  },
  {
    id: "cartesia",
    company: "Cartesia",
    category: "TTS / real-time voice models",
    homepageUrl: "https://luma.com/cartesia",
    events: [
      {
        id: "cartesia-coffee-cartesia-techweek",
        name: "Coffee CARTesia — SF Tech Week",
        dateLabel: "Oct 7, 8:30am–12:30pm PT",
        sortDate: "2026-10-07",
        format: "in-person",
        location: "Financial District, San Francisco (exact venue on registration)",
        description:
          "Cartesia Tech Week morning activation — order coffee with Cartesia voice models, hear Sonic in action, and meet the TTS team. Surfaced via voiceaispace → Partiful SlhNY5IAaMN0BKSJ3WiA (not on Cartesia Luma cal-EeDJt2cPbgGca1W). Competitive Bay Area TTS mindshare the same Tech Week morning ahead of owned AssemblyAI Furby hardware hackathon / Speechmatics×LiveKit×Aqua evening conflict later that day.",
        status: "confirmed",
        sourceUrl: "https://partiful.com/e/SlhNY5IAaMN0BKSJ3WiA",
        sourceLabel: "partiful.com",
        topics: ["tts", "voice-agents"],
      },
      {
        id: "cartesia-voices-in-the-room-coval-techweek",
        name: "Voices in the Room: Fireside Chat + Cocktails with Coval & Cartesia — SF Tech Week",
        dateLabel: "Oct 8, 6:30pm PT",
        sortDate: "2026-10-08",
        format: "in-person",
        location: "Coval HQ, San Francisco",
        description:
          "Coval × Cartesia Tech Week evening fireside + cocktails at Coval HQ — voice-AI evals (Coval) meeting realtime TTS (Cartesia). Surfaced via voiceaispace → Partiful xn5Zxz9za7u4vEsGd5cf as of 2026-10-01 (not on Cartesia Luma cal). Tracked here not on main Bay Area cal (cocktail / fireside format); competitive TTS + voice-agent-evals ecosystem signal mid–Tech Week.",
        status: "confirmed",
        sourceUrl: "https://partiful.com/e/xn5Zxz9za7u4vEsGd5cf",
        sourceLabel: "partiful.com",
        topics: ["tts", "voice-agents"],
      },
    ],
    watchNote:
      "Re-checked 2026-10-06: Cartesia Luma cal-EeDJt2cPbgGca1W still lists Drinks Around The Fire: Cartesia × Lorikeet (bz8x2v1s — still skipped as social mixer). Coffee CARTesia SF Tech Week (Oct 7 AM, Partiful SlhNY5IAaMN0BKSJ3WiA) + Voices in the Room Coval×Cartesia (Oct 8, Partiful xn5Zxz9za7u4vEsGd5cf) still tracked here. Cartesia also named partner at Bolna Symphony 2026 (Nov 20 Bengaluru — tracked under Deepgram). Cartesia CEO remains on the VapiCon speaker list.",
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
      "Re-checked 2026-10-06: Summit Bengaluru (Oct 6 — still today IST), Startup Grant Demo Day (Oct 21), Summit NYC (Nov 11), Chatbot Summit Amsterdam (Nov 26) URLs still 200. elevenlabs.io/events still surfaces Advertising Week NYC (Oct 7 — skipped as marketing/ad-week). No new SF Summit date for 2026. Deepgram Speak (Oct 29 SF) remains the competitive same-market calendar day two weeks before ElevenLabs NYC Summit / VapiCon week; Bolna Symphony (Nov 20) is separate India ecosystem competition.",
  },
  {
    id: "vapi",
    company: "Vapi",
    category: "Voice-agent platform",
    homepageUrl: "https://www.vapicon.ai/",
    events: [],
    watchNote:
      "Re-checked 2026-10-06: Vapi Luma calendar cal-9jzVoVZclDCewDU — Fleet Week yacht (Oct 8, skipped), Voice Agents Forum (Nov 5, also on main calendar), Vapi×Deepgram Web Summit Mixer (Nov 9, Lisbon — tracked under Deepgram), VapiCon 2026 (Nov 11–12, Fort Mason SF — Deepgram diamond sponsor; Cartesia CEO on speaker list; Vapi CEO also on Deepgram Speak '26 roster), Deepgram × Vapi phone voice-agent workshop SF still Nov 17 (deepgram-2jm5; tracked under Deepgram + main calendar). Vapi also invited on Fall '26 VON Atlanta VoiceAI LIVE! (Oct 13 — tracked on main calendar + SignalWire). Skip builders-sep26 (2025 Voice AI Builders Meetup slug trap).",
  },
  {
    id: "regal",
    company: "Regal AI",
    category: "Contact-center / Voice AI platform",
    homepageUrl: "https://www.regal.ai/",
    events: [],
    watchNote:
      "Re-checked 2026-10-06: Regal Rise (Sep 17 NYC/virtual) already pruned. No new dated public Regal events found — watch for a Bay Area follow-on vs AssemblyAI phone-agent builders.",
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
      "Twilio UK Luma calendar cal-hoJOad2gnCAn32t (2026-10-06) still surfaces Conversations in the AI era London (Oct 14, d14cpj24), Manchester builder meetup Nov 4 (401md669), London December edition Dec 3 (9xwcwwxz); Assemble London Nov 3 (7z0fyqec) still confirmed via event/get. Note: Deepgram’s new HealthTech London (Dec 3, fimimqjw) lands the same calendar day as Twilio’s Dec 3 London builder meetup — EU voice/comms mindshare cluster. Skipped Conversational AI Dinner #SFTechWeek (Oct 6, Partiful OVizOLTyzEPiGZYVwf6C — Bluejay-hosted dinner). Twilio Field CTO Andy O’Dower remains on Deepgram Speak '26 (Oct 29). Watch twilio.com and Assemble announcements for US/Bay Area dates.",
  },
  {
    id: "agora",
    company: "Agora",
    category: "Realtime voice / video / conversational AI",
    homepageUrl: "https://www.agora.io/",
    events: [
      {
        id: "agora-prototype-to-production-voice-ai-techweek",
        name: "From Prototype to Production: Scaling Voice AI — SF Tech Week",
        dateLabel: "Oct 6, 5:30–8:30pm PT",
        sortDate: "2026-10-06",
        format: "in-person",
        location: "814 Mission St, San Francisco",
        description:
          "Agora Convo AI World SF Tech Week evening — panels/live demos on shipping production voice, conversational, and realtime AI (voice agents, avatars, multimodal) with OpenAI/Autodesk/MiniMax/Bluejay speakers. Missed Agora Luma cal-wYHDiuJD5JdAolS; Partiful IL3sKweGcfohlDRJGFkk via voiceaispace (venue 814 Mission St confirmed 2026-10-01). Same 5:30–8:30pm PT window as Ship an AI Voice Agent Workshop; same Tech Week day as Vonage×Deepgram lunch and SignalWire Palo Alto.",
        status: "confirmed",
        sourceUrl: "https://partiful.com/e/IL3sKweGcfohlDRJGFkk",
        sourceLabel: "partiful.com",
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
          "Agora NYC Voice AI Workshop on cal-wYHDiuJD5JdAolS (luma.com/b59sk0v6) — evening builder session for teams shipping realtime voice agents on Agora’s stack. Continues the NYC competitive cadence after the Sep 30 Hermes co-hosted workshop (now past).",
        status: "confirmed",
        sourceUrl: "https://luma.com/b59sk0v6",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "streaming"],
      },
    ],
    watchNote:
      "Re-checked 2026-10-06: Oct 12 evening ET (b59sk0v6) still on Agora Luma cal-wYHDiuJD5JdAolS. From Prototype to Production SF Tech Week (Oct 6, Partiful IL3sKweGcfohlDRJGFkk @ 814 Mission St) still live today — missed Luma cal. Building Next-Gen Learning Experiences (Oct 8) and Empathy & Scale (Oct 13, SF) still listed — skipped as vertical/exec.",
  },
  {
    id: "signalwire",
    company: "SignalWire",
    category: "Communications / Voice-agent platform",
    homepageUrl: "https://signalwire.com/resources/events",
    events: [
      {
        id: "signalwire-palo-alto-voice-agent-workshop",
        name: "AI Developer Workshop — Build AI Voice Agents (Palo Alto)",
        dateLabel: "Oct 6, 3:00–5:00pm PT",
        sortDate: "2026-10-06",
        format: "in-person",
        location: "Prosperity 7 Ventures, 700 Emerson St, Palo Alto",
        description:
          "Peninsula follow-on to the Sep 30 SF SignalWire workshop (now past) — same production voice-agent curriculum at Prosperity 7 Ventures during Tech Week week. Competitive Bay Area builder distribution next to Twilio’s UK conversation series and Deepgram’s Oct 29 Speak.",
        status: "confirmed",
        sourceUrl: "https://www.aicamp.ai/event/eventdetails/W2026100615",
        sourceLabel: "aicamp.ai",
        topics: ["voice-agents", "streaming"],
      },
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
      "Re-checked 2026-10-06: Palo Alto Oct 6 (W2026100615 / Luma 721o28bd) still live today + VoiceAI LIVE! at Fall '26 VON Atlanta Oct 13–15 still live. Watch signalwire.com/resources/events for further city stops.",
  },
  {
    id: "livekit",
    company: "LiveKit",
    category: "Realtime voice/video agents",
    homepageUrl: "https://livekit.io/",
    events: [
      {
        id: "livekit-solving-voice-as-interface-techweek",
        name: "Solving 'voice' as an interface — SF Tech Week (Aqua × Speechmatics × LiveKit)",
        dateLabel: "Oct 7, 5:30–8:30pm PT",
        sortDate: "2026-10-07",
        format: "in-person",
        location: "San Francisco, CA (exact venue on registration)",
        description:
          "LiveKit co-hosts with Aqua Voice and Speechmatics an SF Tech Week engineering evening on turn detection, diarization, endpointing, interruptions, and latency — then drinks/food. Strong realtime-infra distribution signal the same night as owned AssemblyAI Furby voice-agent hackathon (Partiful Qfb44oJOo4cYvr64J7Kw via voiceaispace as of 2026-09-29; Luma norm3pxo 404’d).",
        status: "confirmed",
        sourceUrl: "https://partiful.com/e/Qfb44oJOo4cYvr64J7Kw",
        sourceLabel: "partiful.com",
        topics: ["streaming", "voice-agents", "stt"],
      },
    ],
    watchNote:
      "Re-checked 2026-10-06: SF Tech Week co-host Solving 'voice' as an interface (Oct 7, Partiful Qfb44oJOo4cYvr64J7Kw) with Speechmatics + Aqua still live (Luma norm3pxo still 404). livekit.io/events still 404. Surfaces via partner nights — re-check weekly around voice-agent forums.",
  },
  {
    id: "retell",
    company: "Retell AI",
    category: "Voice-agent platform",
    homepageUrl: "https://www.retellai.com/",
    events: [],
    watchNote:
      "No public dated Jul–Dec 2026 developer events found on retellai.com/events as of 2026-10-06 (Upcoming Webinars empty; on-demand TCPA webinar only). Typically appears at voice-agent conferences (VapiCon-class rooms) rather than running a dated Luma series. Check LinkedIn / retellai.com/blog.",
  },
  {
    id: "bland",
    company: "Bland AI",
    category: "Voice-agent platform",
    homepageUrl: "https://www.bland.ai/",
    events: [],
    watchNote:
      "No public dated Jul–Dec 2026 developer events found on bland.ai as of 2026-10-06. Watch bland.ai and partner pages around contact-center / phone-agent summits.",
  },
  {
    id: "pipecat-daily",
    company: "Pipecat / Daily",
    category: "Voice-agent framework / WebRTC",
    homepageUrl: "https://pipecat.ai/",
    events: [],
    watchNote:
      "pipecat.ai and daily.co/blog still show no owned dated public meetups as of 2026-10-06. Competitive signal: Deepgram × Daily Flux TTS on Pipecat webinar (Sep 29) is past; Pipecat co-hosted Voice AI: Shaping the Next Frontier of Customer Interaction (Oct 1 London, luma.com/prkbq50k — now past with Deepgram cal). Daily/Pipecat CEO Kwindla Kramer is on Deepgram Speak '26 (Oct 29). Pipecat often co-appears with Speechmatics / LiveKit / Deepgram builder nights — watch those calendars and daily.co changelog.",
  },
  {
    id: "speechmatics",
    company: "Speechmatics",
    category: "STT / speaker-aware transcription",
    homepageUrl: "https://www.speechmatics.com/community",
    events: [
      {
        id: "speechmatics-solving-voice-as-interface-techweek",
        name: "Solving 'voice' as an interface — SF Tech Week (Aqua × Speechmatics × LiveKit)",
        dateLabel: "Oct 7, 5:30–8:30pm PT",
        sortDate: "2026-10-07",
        format: "in-person",
        location: "San Francisco, CA (exact venue on registration)",
        description:
          "Speechmatics co-hosts with Aqua Voice and LiveKit an SF Tech Week engineering evening on turn detection, diarization, endpointing, interruptions, and latency. Missed Speechmatics Luma cal-ZYr28XXq5fyMAym (now empty after London Oct 1 pruned); Partiful Qfb44oJOo4cYvr64J7Kw via voiceaispace. Same night as owned AssemblyAI Furby voice-agent hackathon — direct Bay Area STT mindshare conflict during Tech Week.",
        status: "confirmed",
        sourceUrl: "https://partiful.com/e/Qfb44oJOo4cYvr64J7Kw",
        sourceLabel: "partiful.com",
        topics: ["stt", "voice-agents", "streaming"],
      },
    ],
    watchNote:
      "Re-checked 2026-10-06: Speechmatics Luma cal-ZYr28XXq5fyMAym still empty. Solving 'voice' as an interface SF Tech Week (Oct 7, Partiful) with LiveKit + Aqua still live — missed Luma cal. Check luma.com/user/Speechmatics and speechmatics.com/community.",
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
      "Re-checked 2026-10-06: Paris Voice AI Meetup with pyannoteAI × Modal (Oct 14, paris-voice-ai) still live. Direct STT competitor with EU residency positioning — also check gladia.io and @gladiaio.",
  },
  {
    id: "soniox",
    company: "Soniox",
    category: "STT / real-time transcription",
    homepageUrl: "https://www.soniox.com/",
    events: [],
    watchNote:
      "No public dated Jul–Dec 2026 events found on soniox.com as of 2026-10-06. Real-time STT competitor — watch soniox.com and LinkedIn for workshop / launch announcements.",
  },
  {
    id: "rev-ai",
    company: "Rev AI",
    category: "STT / asynchronous transcription",
    homepageUrl: "https://www.rev.ai/",
    events: [],
    watchNote:
      "No public dated Jul–Dec 2026 developer events found on rev.ai as of 2026-10-06. Check rev.com/blog and partner conference booths.",
  },
  {
    id: "hume",
    company: "Hume AI",
    category: "Empathic TTS / voice",
    homepageUrl: "https://www.hume.ai",
    events: [],
    watchNote:
      "No dedicated public events calendar found at research time (2026-10-06). Hume sponsored/judged AGI House Voice AI Hackathon (Sep 19, now pastEvents2026) — competitive TTS/empathic-voice mindshare at AGI House. Otherwise shows up as a speaker/sponsor at voice-agent conferences rather than running its own dated series. Check hume.ai and @hume_ai.",
  },
  {
    id: "smallest-ai",
    company: "Smallest AI",
    category: "TTS / STT / speech-to-speech",
    homepageUrl: "https://luma.com/smallest.ai",
    events: [],
    watchNote:
      "Luma calendar cal-xZRPdTa3UcyyNJE empty as of 2026-10-06. Past 2026 Bay Area pattern: Beyond Text research talks (Jun 8, Menlo Park), Voice AI Goes Global multilingual panel (Jun 15), CCW Las Vegas steakhouse afterhours with Telnyx (Jun 24), Voice AI HackSprint 2.0 (Mar 14, SF). Re-check weekly — they run SF/Menlo Park builder nights in bursts.",
  },
  {
    id: "google-cloud-speech",
    company: "Google Cloud Speech / Gemini Live",
    category: "Cloud STT / realtime voice",
    homepageUrl: "https://cloud.google.com/speech-to-text",
    events: [],
    watchNote:
      "Re-checked 2026-10-06: Gemini Audio | At Night (Sep 24) remains in pastEvents2026. No new dated Google Cloud Speech / Gemini Live Bay Area builder rooms on DeepMind Luma cal-7Q5A70Bz5Idxopu (Google for Startups × DeepMind Tech Week panel/happy hour Oct 6–7 skipped as generic founder mixer; Cerebral Valley Google DeepMind AI Hackathon Oct 16 is Korea — skip). Watch Google Cloud events and Gemini Live launch webinars for follow-ons.",
  },
  {
    id: "azure-ai-speech",
    company: "Microsoft Azure AI Speech",
    category: "Cloud STT / TTS",
    homepageUrl: "https://azure.microsoft.com/en-us/products/ai-services/ai-speech",
    events: [],
    watchNote:
      "No Azure AI Speech-specific dated Jul–Dec 2026 events confirmed as of 2026-10-06. Watch Microsoft Reactor SF.",
  },
  {
    id: "aws-transcribe",
    company: "AWS Transcribe / Bedrock",
    category: "Cloud STT / contact-center AI",
    homepageUrl: "https://aws.amazon.com/transcribe/",
    events: [],
    watchNote:
      "No Transcribe-specific dated Jul–Dec 2026 events confirmed as of 2026-10-06. Multi-Model Hackathon (Oct 23, luma.com/beta-79jb — Beta Fund × AWS × OpenAI) at AWS Builder Loft remains on the main calendar — multimodal-audio teams are the STT pitch. Skip Universal Hackathon AWS Loft Oct 19 (generic AI-workforce / Masky.ai). Watch AWS Gen AI Loft SF for Amazon Connect / contact-center voice sessions. Skip stale aws.amazon.com enterprise real-time voice-agents workshop page (Deepgram×Daily — Jul 2025 year trap).",
  },
];
