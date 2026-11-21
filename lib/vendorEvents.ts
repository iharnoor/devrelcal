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
 * AssemblyAI. Re-researched 2026-11-21 (~08:05 PST) against each vendor's own events page.
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
        id: "deepgram-reinvent-aim382-voice-agent-breakout",
        name: "End-to-end voice agents with AWS & Deepgram (AIM382-S)",
        dateLabel: "Nov 30, 11:30am–12:30pm PT",
        sortDate: "2026-11-30",
        format: "in-person",
        location: "Wynn/Encore, AIM382-S, Las Vegas, NV",
        description:
          "AWS re:Invent silent breakout (AIM382-S) on deepgram.com/events/aws-reinvent — Sr. Developer Advocate Ed Charbeneau builds an end-to-end voice agent live on Deepgram Voice Agent API + Amazon Bedrock (barge-in, sub-second responses, SageMaker VPC path). Same re:Invent Monday as owned AssemblyAI Topgolf Voice AI Happy Hour (evening); strongest Deepgram hands-on builder education signal at re:Invent ahead of Speak Easy Dec 1. Follows the Nov 18 SageMaker VPC webinar (→ pastEvents2026).",
        status: "confirmed",
        sourceUrl: "https://deepgram.com/events/aws-reinvent",
        sourceLabel: "deepgram.com",
        topics: ["voice-agents", "stt", "streaming"],
      },
      {
        id: "deepgram-speak-easy-reinvent-krisp-twilio",
        name: "Deepgram Speak Easy | Co-hosted by Krisp & Twilio",
        dateLabel: "Dec 1, 6–9pm PT",
        sortDate: "2026-12-01",
        format: "in-person",
        location: "Allē Lounge on 66, 111 Resorts World Ave, Las Vegas, NV",
        description:
          "Approval-gated AWS re:Invent speakeasy lounge co-hosted by Deepgram, Krisp, and Twilio — password from Deepgram booth #1652 or Twilio booth #1962. Cocktail / skyline room for voice engineers, founders, and AI leaders (not a hands-on workshop). Strongest near-term Deepgram×Twilio co-distribution signal at re:Invent after Speak '26; day before Twilio London builder meetup and two days before Deepgram HealthTech London.",
        status: "confirmed",
        sourceUrl: "https://luma.com/reinvent-speak-easy",
        sourceLabel: "luma.com",
        topics: ["voice-agents"],
      },
      {
        id: "deepgram-reinvent-startup-plaza-demos",
        name: "Deepgram hands-on demos @ AWS Startup Plaza",
        dateLabel: "Dec 2, 11:30am–3pm PT + Dec 3, 8am–12pm PT",
        sortDate: "2026-12-02",
        format: "in-person",
        location: "Caesars Forum, Upper Plaza, Las Vegas, NV",
        description:
          "NEW 2026-11-19 on deepgram.com/events/aws-reinvent agenda: Deepgram voice experts run hands-on demos at AWS Startup Plaza during re:Invent — Wed Dec 2 11:30am–3pm PT and Thu Dec 3 8am–12pm PT (Caesars Forum Upper Plaza). Complements AIM382-S breakout + booth #1652 + Speak Easy for in-person builder touchpoints between Deepgram Speak Easy (Dec 1) and HealthTech London (Dec 3).",
        status: "confirmed",
        sourceUrl: "https://deepgram.com/events/aws-reinvent",
        sourceLabel: "deepgram.com",
        topics: ["voice-agents", "stt"],
      },
      {
        id: "deepgram-voice-ai-healthtech-london-dec3",
        name: "Voice AI in HealthTech: The Future of Ambient Intelligence",
        dateLabel: "Dec 3, 6–8:30pm GMT",
        sortDate: "2026-12-03",
        format: "in-person",
        location: "London, United Kingdom (exact venue on registration)",
        description:
          "Deepgram London industry session on ambient voice technology in healthcare — HealthTech builders plus NHS/clinical/digital leaders on pilots→scale, clinical safety, privacy/governance, and EHR workflow integration. DATE CORRECTION 2026-10-23: live event/get (fimimqjw) is now Dec 3 18:00–20:30 UTC / 6–8:30pm GMT (was listed 4–8pm GMT / 16:00–20:00 UTC). Continues Deepgram’s London Voice AI programme after summer 2026 sessions — ambient-clinical STT / healthcare vertical mindshare (operator + product room more than a pure hackathon).",
        status: "confirmed",
        sourceUrl: "https://luma.com/fimimqjw",
        sourceLabel: "luma.com",
        topics: ["stt", "streaming", "audio-intel"],
      },
    ],
    watchNote:
      "Re-checked 2026-11-21 (PST): Speak '26 + VapiCon + VexoHacks + Deepgram×Vapi SF phone workshop (deepgram-2jm5) + SageMaker VPC webinar Nov 18 + Bolna Symphony Nov 20 remain in pastEvents2026. Deepgram Luma cal-qHEDltsO0Gr0WtD still 2 rooms (Speak Easy Dec 1 + HealthTech London Dec 3). AIM382-S + Startup Plaza hands-on demos Dec 2–3 still on deepgram.com/events/aws-reinvent. deepgram.com/events also lists HLTH / AI+ Care / Evolve Manila / Health Agents Forum Nashville — skip trade-show / far-future rows. workshops.deepgram.com self-paced Voice Agent workshop is evergreen content (not a dated event). Cartesia Super Car-tesia + ElevenLabs re:Invent booth same Dec 1 window as Speak Easy; NEW Agora × Cartesia × PingCAP Voice AI Mixer Dec 2 evening stacks vs Deepgram Startup Plaza same day; Cartesia also has NeurIPS Sydney After Hours Dec 8 (same day as Managed Agents webinar). Adjacent: Rime Prism S2S Dec 5 (9q4bvnmt) + pyannoteAI speaker-intel webinar Dec 1. Beyond the Cloud still HTTP 404. Skip GRAM JAM + year traps.",
  },
  {
    id: "cartesia",
    company: "Cartesia",
    category: "TTS / real-time voice models",
    homepageUrl: "https://luma.com/cartesia",
    events: [
      {
        id: "cartesia-reinvent-super-car-tesia",
        name: "Re:Invent Super Car-tesia",
        dateLabel: "Dec 1, 9:30am–12pm PT",
        sortDate: "2026-12-01",
        format: "in-person",
        location: "Las Vegas, NV (closed track; exact venue on approval)",
        description:
          "NEW 2026-11-06 on Cartesia Luma cal-EeDJt2cPbgGca1W: approval-gated AWS re:Invent morning supercar track experience for CEOs/CTOs/Heads of Product & Engineering — five laps plus live Cartesia realtime voice demos. Same calendar day as Deepgram Speak Easy evening (Krisp × Twilio); executive hospitality / voice-AI mindshare room more than a builder workshop (luma.com/dztqp1c4; event/get ends 12pm PT while body copy says 1pm — trust event/get).",
        status: "confirmed",
        sourceUrl: "https://luma.com/dztqp1c4",
        sourceLabel: "luma.com",
        topics: ["tts", "voice-agents"],
      },
      {
        id: "cartesia-agora-voice-ai-mixer-reinvent",
        name: "Voice AI Mixer | AWS re:Invent 2026 — Cartesia co-host with Agora × PingCAP",
        dateLabel: "Dec 2, 8–10pm PT",
        sortDate: "2026-12-02",
        format: "in-person",
        location: "Las Vegas, NV (exact venue on approval)",
        description:
          "NEW 2026-11-21 on Agora Luma cal-wYHDiuJD5JdAolS (hosts Agora + Cartesia Events + TiDB/PingCAP; AWS support): approval-gated re:Invent evening Voice AI networking mixer — drinks/food hospitality for voice-agent builders and cloud leaders. Same calendar day as Deepgram Startup Plaza demos; day after Super Car-tesia / Deepgram Speak Easy / ElevenLabs booth window. Competitive Cartesia×Agora co-distribution signal at re:Invent (luma.com/voice-ai-mixer-awsreinvent; event/get Dec 2 8–10pm PT).",
        status: "confirmed",
        sourceUrl: "https://luma.com/voice-ai-mixer-awsreinvent",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "tts"],
      },
      {
        id: "cartesia-neurips-after-hours-sydney",
        name: "Cartesia x NeurIPS: After Hours",
        dateLabel: "Dec 8, 8pm–12am AEDT",
        sortDate: "2026-12-08",
        format: "in-person",
        location: "Darling Harbour / near ICC Sydney, Sydney, Australia (exact venue on approval)",
        description:
          "NEW 2026-11-20 on Cartesia Luma cal-EeDJt2cPbgGca1W: approval-gated NeurIPS Sydney rooftop after-hours with Cartesia research (H-net / Mamba) plus frontier-lab researchers — drinks/bites hospitality framed around realtime voice AI. Same calendar day as Cartesia Managed Agents webinar (94y4it1j, 10–11am PT); competitive NeurIPS research/voice mindshare room more than a hands-on workshop (luma.com/cartesia-jic4).",
        status: "confirmed",
        sourceUrl: "https://luma.com/cartesia-jic4",
        sourceLabel: "luma.com",
        topics: ["tts", "voice-agents"],
      },
      {
        id: "cartesia-managed-agents-webinar",
        name: "[Webinar] Introducing Managed Agents — Cartesia",
        dateLabel: "Dec 8, 10–11am PT",
        sortDate: "2026-12-08",
        format: "virtual",
        description:
          "Cartesia product webinar launching Managed Agents — packaging STT/LLM/TTS, latency, interruptions, and turn-taking so teams ship voice agents without assembling the stack. Live zero-to-conversation demo plus early builder use cases. DATE CORRECTION 2026-11-17: live event/get (94y4it1j) + Cartesia cal-EeDJt2cPbgGca1W moved this from Nov 17 9:30–10:30am PT to Dec 8 18:00–19:00 UTC / 10–11am PT (prior 2026-11-10 correction had been Nov 17; earlier Nov 10 listing also obsolete). Same Dec 8 as NEW Cartesia × NeurIPS Sydney After Hours.",
        status: "confirmed",
        sourceUrl: "https://luma.com/94y4it1j",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "tts", "streaming"],
      },
    ],
    watchNote:
      "Re-checked 2026-11-21: Cartesia Luma cal-EeDJt2cPbgGca1W still 3 owned rooms — Super Car-tesia Dec 1 morning (dztqp1c4) + NeurIPS Sydney After Hours Dec 8 (cartesia-jic4) + Managed Agents webinar Dec 8 10–11am PT (94y4it1j). NEW co-host: Agora Voice AI Mixer re:Invent Dec 2 evening (voice-ai-mixer-awsreinvent — tracked here + under Agora). Coffee CARTesia NYC (0960vqe8) still skip if resurfaced (voiceaispace mislabels as Multimodal Research Panel). First Look Multimodal (xrj6gzm2) + VapiCon + Bolna Symphony remain in pastEvents2026. Skip Agent’s Table (srbdv0c2) + Agent Soundcheck karaoke. Same Dec 1 window still stacks vs ElevenLabs re:Invent booth 2030 + Deepgram Speak Easy + pyannoteAI speaker-intel webinar.",
  },
  {
    id: "elevenlabs",
    company: "ElevenLabs",
    category: "TTS / conversational agents / Scribe STT",
    homepageUrl: "https://elevenlabs.io/events",
    events: [
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
      {
        id: "elevenlabs-reinvent-2026-booth-meetings",
        name: "Meet with ElevenLabs at re:Invent 2026",
        dateLabel: "Dec 1–3",
        sortDate: "2026-12-01",
        format: "in-person",
        location: "The Venetian, Las Vegas | Booth 2030",
        description:
          "ElevenLabs AWS re:Invent presence Dec 1–3 at The Venetian booth 2030 — scheduled 1:1 meetings on voice agents / customer-support voice / production audio. Same re:Invent window as owned AssemblyAI Topgolf Nov 30, Cartesia Super Car-tesia Dec 1 morning, and Deepgram Speak Easy Dec 1 evening — competitive Las Vegas distribution spend cluster.",
        status: "confirmed",
        sourceUrl: "https://elevenlabs.io/events/reinvent-2026",
        sourceLabel: "elevenlabs.io",
        topics: ["voice-agents", "tts"],
      },
      {
        id: "elevenlabs-antler-sf-after-dark-v2-building-with-voice",
        name: "Antler SF After Dark V2: Building with Voice — ElevenLabs engineers",
        dateLabel: "Dec 3, 5:30–10pm PT",
        sortDate: "2026-12-03",
        format: "in-person",
        location: "Antler SF office, San Francisco (China Basin; exact address on approval)",
        description:
          "Antler SF after-hours voice build session with ElevenLabs engineers for demos and office hours — operators/builders prototype voice agents in an open workspace. Same calendar day as Deepgram HealthTech London; strongest near-term Bay Area ElevenLabs hands-on distribution signal after Summit NYC / VapiCon week (luma.com/antlerus-fd0t on Antler US cal-TVpiEZu23bsIljH as of 2026-11-05).",
        status: "confirmed",
        sourceUrl: "https://luma.com/antlerus-fd0t",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "tts"],
      },
    ],
    watchNote:
      "Re-checked 2026-11-21: Summit NYC (Nov 11) + VapiCon + OpenRouter × ElevenLabs In Production SF (wvw8xwsi) + ElevenAgents Hackathon London (Nov 17–18) remain in pastEvents2026. elevenlabs.io/events/elevenagents-hackathon-london still HTTP 200 (ended); Build Series slugs still 404 — do not add. Chatbot Summit Amsterdam partner page still 200 (elevenlabs.io/events/chatbot-summit-amsterdam still 404 — keep partner URL). Antler SF After Dark V2 Dec 3 (antlerus-fd0t) + re:Invent booth meetings Dec 1–3 (elevenlabs.io/events/reinvent-2026). Skip Seoul meetup (eleven-zf2d) + ElevenCreative After Hours SF/LA (laafterhours weather-moved to Nov 20) / Bhopal + LATAM / Adopt AI Paris (Dec 3–4 Grand Palais booth T60) / Raise / Adweek / Finovate / Customer Impact Summit. Dec 1–3 re:Invent booth vs Deepgram Speak Easy / Cartesia Super Car-tesia / Agora×Cartesia mixer Dec 2 / owned Topgolf; Dec 3 Antler SF vs Deepgram HealthTech London; adjacent Bay Area Dec 5 Rime Prism S2S (9q4bvnmt).",
  },
  {
    id: "vapi",
    company: "Vapi",
    category: "Voice-agent platform",
    homepageUrl: "https://www.vapicon.ai/",
    events: [
      {
        id: "vapi-ai-summit-nyc-after-hours",
        name: "THE AI SUMMIT — After hours (Vapi × LangChain)",
        dateLabel: "Dec 9, 6–8:30pm ET",
        sortDate: "2026-12-09",
        format: "in-person",
        location: "Nittis Italian Restaurant, 523 9th Ave, New York, NY",
        description:
          "Vapi-hosted AI Summit New York after-hours at Nittis — drinks plus short talks from Vapi and LangChain on agent harness/evals/feedback loops with realtime voice-agent production themes. SLUG/TITLE REFRESH 2026-10-30: prior Voice AI Builders Social listing (luma.com/vapi-pjzk) now HTTP 404; live room on cal-9jzVoVZclDCewDU is luma.com/ai-summit-ny-after-hours (same venue/day). Same NYC evening as Agora Scaling Voice AI (agora-ai-summit-nyc; prior 1bf4kv8i 404) — competitive NYC distribution double-stack after VapiCon SF.",
        status: "confirmed",
        sourceUrl: "https://luma.com/ai-summit-ny-after-hours",
        sourceLabel: "luma.com",
        topics: ["voice-agents"],
      },
    ],
    watchNote:
      "Re-checked 2026-11-21: VapiCon 2026 (vapi-9sdp) + Deepgram × Vapi phone workshop SF (deepgram-2jm5) remain in pastEvents2026. Vapi Luma cal-9jzVoVZclDCewDU still only THE AI SUMMIT After hours NYC Dec 9 (same evening as Agora Scaling Voice AI agora-ai-summit-nyc); healthcare dinner / Nov 17 rooms still dropped. Vapi Events now also listed as co-host on owned AssemblyAI Topgolf m6gcrmm7 Nov 30. Skip VapiCon afterparty.",
  },
  {
    id: "regal",
    company: "Regal AI",
    category: "Contact-center / Voice AI platform",
    homepageUrl: "https://www.regal.ai/",
    events: [],
    watchNote:
      "Re-checked 2026-11-15: Regal Rise (Sep 17 NYC/virtual) already pruned. No new dated public Regal events found — watch for a Bay Area follow-on vs AssemblyAI phone-agent builders.",
  },
  {
    id: "twilio",
    company: "Twilio",
    category: "Communications / Conversational Intelligence",
    homepageUrl: "https://www.twilio.com/",
    events: [
      {
        id: "twilio-conversations-ai-era-london-dec",
        name: "Conversations in the AI era | Builder Community Meetup | London",
        dateLabel: "Dec 2",
        sortDate: "2026-12-02",
        format: "in-person",
        location: "London, United Kingdom",
        description:
          "Twilio London calendar meetup on conversations in the AI era (chat/voice/messaging builders). HOST REFRESH 2026-11-20: live event/get hosts are now Speechmatics + Voice AI Space (still on Twilio London cal-hoJOad2gnCAn32t) — strongest near-term Speechmatics×Twilio London co-distribution signal after Better Every Call? DATE CORRECTION 2026-10-22: moved from Dec 3 to Dec 2 (luma.com/9xwcwwxz).",
        status: "confirmed",
        sourceUrl: "https://luma.com/9xwcwwxz",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "streaming"],
      },
    ],
    watchNote:
      "Twilio UK Luma calendar cal-hoJOad2gnCAn32t (2026-11-21): next dated room still London Dec 2 (9xwcwwxz) with Speechmatics + Voice AI Space hosts; cal forward room London Feb 2 2027 (v17jb62l) — watch, do not invent US rows. Deepgram Speak Easy re:Invent Dec 1 still co-hosted by Krisp & Twilio (booth #1962 — tracked under Deepgram); owned AssemblyAI Topgolf Nov 30 + Deepgram AIM382-S breakout precede that lounge; Cartesia Super Car-tesia + ElevenLabs booth 2030 same Dec 1 window; Agora×Cartesia mixer Dec 2 evening same day as Twilio London. Deepgram HealthTech London Dec 3 still day-after Twilio London Dec 2 (same day as Antler × ElevenLabs SF After Dark). Watch twilio.com for US/Bay Area Assemble dates.",
  },
  {
    id: "agora",
    company: "Agora",
    category: "Realtime voice / video / conversational AI",
    homepageUrl: "https://www.agora.io/",
    events: [
      {
        id: "agora-cartesia-voice-ai-mixer-reinvent",
        name: "Voice AI Mixer | AWS re:Invent 2026 — Agora × Cartesia × PingCAP",
        dateLabel: "Dec 2, 8–10pm PT",
        sortDate: "2026-12-02",
        format: "in-person",
        location: "Las Vegas, NV (exact venue on approval)",
        description:
          "NEW 2026-11-21 on Agora Luma cal-wYHDiuJD5JdAolS: approval-gated re:Invent evening Voice AI networking mixer co-hosted by Agora, Cartesia, and PingCAP/TiDB (AWS support) — drinks/food hospitality for voice-agent builders, founders, and cloud leaders (agenda is social networking, not talks/demos). Same calendar day as Deepgram Startup Plaza demos + Twilio×Speechmatics London; sits between Deepgram Speak Easy (Dec 1) and Deepgram HealthTech London / Antler×ElevenLabs SF (Dec 3). Strongest near-term Agora×Cartesia co-distribution signal at re:Invent (luma.com/voice-ai-mixer-awsreinvent; event/get Dec 2 8–10pm PT).",
        status: "confirmed",
        sourceUrl: "https://luma.com/voice-ai-mixer-awsreinvent",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "streaming"],
      },
      {
        id: "agora-scaling-voice-ai-nyc-dec9",
        name: "From Prototype to Production: Scaling Voice AI — Agora (NYC)",
        dateLabel: "Dec 9, 6–9pm ET",
        sortDate: "2026-12-09",
        format: "in-person",
        location: "New York, NY (Manhattan; exact venue on registration)",
        description:
          "Agora Scaling Voice AI evening during AI Summit New York — talks/panel on shipping intelligent voice agents, AI avatars, realtime translation, and multimodal experiences from prototype to production. SLUG REFRESH 2026-11-11: live room on Agora Luma cal-wYHDiuJD5JdAolS is luma.com/agora-ai-summit-nyc (prior 1bf4kv8i now HTTP 404). Same calendar evening as Vapi × LangChain AI Summit after hours (ai-summit-ny-after-hours); follow-on to Agora Lisbon Nov 10 (wqg33o39 → pastEvents2026) and NYC Gemini workshop Nov 17 (→ pastEvents2026).",
        status: "confirmed",
        sourceUrl: "https://luma.com/agora-ai-summit-nyc",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "streaming"],
      },
    ],
    watchNote:
      "Re-checked 2026-11-21: cal-wYHDiuJD5JdAolS now 3 rooms — NEW Voice AI Mixer re:Invent Dec 2 (voice-ai-mixer-awsreinvent; Cartesia + PingCAP co-hosts) + NYC Scaling Voice AI Dec 9 (agora-ai-summit-nyc) + Physical AI Hackathon Malaysia Nov 28 (wui8rm7g — skip). Lisbon Scaling Voice AI (wqg33o39) + NYC Gemini Voice AI Workshop (voiceai-workshop-nyc-nov17) remain in pastEvents2026. Watch agora.io + Luma for the next SF realtime voice-agent builder night.",
  },
  {
    id: "signalwire",
    company: "SignalWire",
    category: "Communications / Voice-agent platform",
    homepageUrl: "https://signalwire.com/resources/events",
    events: [],
    watchNote:
      "Re-checked 2026-11-15: VoiceAI LIVE! at Fall '26 VON Atlanta (Oct 13–15) pruned after Pacific end — VON kept in pastEvents2026. Palo Alto Build AI Voice Agents workshop (Oct 6) remains past. signalwire.com/resources/events still highlights ClueCon 2026 (past) — no new dated city workshops. Watch for the next SF/Bay Area production voice-agent workshop.",
  },
  {
    id: "livekit",
    company: "LiveKit",
    category: "Realtime voice/video agents",
    homepageUrl: "https://livekit.io/",
    events: [],
    watchNote:
      "Re-checked 2026-11-21: Luma cal-G3PEa5PrYXwKXx6 still empty (Colorado Robotics Meetup livekit-gwss ended Nov 19 — still skip retrospectively). Past Audio Layer × LiveKit (audio-layer-ai-coustics-livekit, Mar 11) and 2025 the-audio-layer year trap stay skip/past. SF Tech Week co-host Solving 'voice' as an interface (Oct 7) remains in pastEvents2026. livekit.io/events still 404. No new dated LiveKit-owned voice rooms — surfaces via partner nights; VapiCon now past. LiveKit sponsors Voice AI Day mixers (still skipped — no talks/demos).",
  },
  {
    id: "retell",
    company: "Retell AI",
    category: "Voice-agent platform",
    homepageUrl: "https://www.retellai.com/",
    events: [],
    watchNote:
      "Re-checked 2026-11-15: retellai.com/events Upcoming still empty (past TCPA / GoHighLevel workshops only). Typically appears at voice-agent conferences (VapiCon-class rooms) rather than running a dated Luma series. Check LinkedIn / retellai.com/blog.",
  },
  {
    id: "bland",
    company: "Bland AI",
    category: "Voice-agent platform",
    homepageUrl: "https://www.bland.ai/",
    events: [],
    watchNote:
      "No public dated Jul–Dec 2026 developer events found on bland.ai as of 2026-11-15. Watch bland.ai and partner pages around contact-center / phone-agent summits.",
  },
  {
    id: "pipecat-daily",
    company: "Pipecat / Daily",
    category: "Voice-agent framework / WebRTC",
    homepageUrl: "https://pipecat.ai/",
    events: [],
    watchNote:
      "pipecat.ai/events still shows no upcoming dated public meetups as of 2026-11-21; Daily Luma cal-9UmQbmvz8qvnCK3 empty. Adjacent: Deepgram×AWS SageMaker VPC webinar Nov 18 (→ pastEvents2026) referenced the AWS Guidance Pipecat-on-ECS voice-agent path; AIM382-S re:Invent Nov 30 continues that Deepgram×AWS builder thread. Past: Deepgram × Daily Flux TTS on Pipecat webinar (Sep 29) + Pipecat London CX session (Oct 1, prkbq50k). Daily/Pipecat CEO was on Speak '26 and VapiCon (both → pastEvents2026). Watch Speechmatics / LiveKit / Deepgram calendars and daily.co changelog.",
  },
  {
    id: "speechmatics",
    company: "Speechmatics",
    category: "STT / speaker-aware transcription",
    homepageUrl: "https://www.speechmatics.com/community",
    events: [],
    watchNote:
      "Re-checked 2026-11-21: Better Every Call? (c0iiab0e, Nov 5 London with Roark) remains in pastEvents2026. Speechmatics Luma cal-ZYr28XXq5fyMAym empty — Women in Tech (xqndyvrv) no longer listed (still skip if resurfaced). Speechmatics remains a named host on Twilio London builder meetup Dec 2 (9xwcwwxz — tracked under Twilio). HLTH Las Vegas Nov 15–18 past — still skipped. No owned dated developer rooms currently confirmed — watch for the next London improvement-loop / Tuner-style builder night.",
  },
  {
    id: "gladia",
    company: "Gladia",
    category: "STT / audio intelligence",
    homepageUrl: "https://gladia.io/",
    events: [],
    watchNote:
      "Re-checked 2026-11-15: Paris Voice AI Meetup with pyannoteAI × Modal (Oct 14, paris-voice-ai) remains pruned. No new dated Gladia public rooms — direct STT competitor with EU residency positioning; watch gladia.io and @gladiaio for the next EU builder night. Adjacent EU signal: Voice Mitte Berlin Nov 5 (ai-coustics × telli) → pastEvents2026 for series recurrence.",
  },
  {
    id: "soniox",
    company: "Soniox",
    category: "STT / real-time transcription",
    homepageUrl: "https://www.soniox.com/",
    events: [],
    watchNote:
      "No owned dated Jul–Dec 2026 events on soniox.com as of 2026-11-15. Competitive signal: Soniox CEO Klemen Simonic was on the VapiCon 2026 builder-track panel “Building Voice Models for Real Conversations” (Nov 12, with Deepgram CPO / Fish Audio / pyannoteAI — VapiCon → pastEvents2026). Real-time STT competitor — watch soniox.com and LinkedIn for workshop / launch announcements.",
  },
  {
    id: "rev-ai",
    company: "Rev AI",
    category: "STT / asynchronous transcription",
    homepageUrl: "https://www.rev.ai/",
    events: [],
    watchNote:
      "No public dated Jul–Dec 2026 developer events found on rev.ai as of 2026-11-15. Check rev.com/blog and partner conference booths.",
  },
  {
    id: "hume",
    company: "Hume AI",
    category: "Empathic TTS / voice",
    homepageUrl: "https://www.hume.ai",
    events: [],
    watchNote:
      "No dedicated public events calendar found at research time (2026-11-15). Hume sponsored/judged AGI House Voice AI Hackathon (Sep 19, now pastEvents2026) — competitive TTS/empathic-voice mindshare at AGI House. Otherwise shows up as a speaker/sponsor at voice-agent conferences rather than running its own dated series. Check hume.ai and @hume_ai.",
  },
  {
    id: "smallest-ai",
    company: "Smallest AI",
    category: "TTS / STT / speech-to-speech",
    homepageUrl: "https://luma.com/smallest.ai",
    events: [],
    watchNote:
      "Luma calendar cal-xZRPdTa3UcyyNJE empty as of 2026-11-15. Past 2026 Bay Area pattern: Beyond Text research talks (Jun 8, Menlo Park), Voice AI Goes Global multilingual panel (Jun 15), CCW Las Vegas steakhouse afterhours with Telnyx (Jun 24), Voice AI HackSprint 2.0 (Mar 14, SF). Re-check weekly — they run SF/Menlo Park builder nights in bursts. Adjacent Bay Area S2S signal: Rime Prism hackathon Dec 5 (9q4bvnmt — tracked in events.ts).",
  },
  {
    id: "google-cloud-speech",
    company: "Google Cloud Speech / Gemini Live",
    category: "Cloud STT / realtime voice",
    homepageUrl: "https://cloud.google.com/speech-to-text",
    events: [],
    watchNote:
      "Re-checked 2026-11-21: Gemini Audio | At Night (Sep 24) + Agora × Google DeepMind Gemini Voice AI Workshop NYC (voiceai-workshop-nyc-nov17) remain in pastEvents2026. No new dated Google Cloud Speech / Gemini Live Bay Area builder rooms on DeepMind Luma cal-7Q5A70Bz5Idxopu (Gemini 4 NYC Hackathon / BIG BERLIN HACK / Physical AI Hack / JustBuildLah / AI Engineer Europe 2027 skipped as non-speech or generic rooms). Adjacent SF signal: EliseAI × OpenAI GPT‑Live‑1 panel Nov 17 (2cbcy58l → pastEvents2026) was OpenAI realtime-voice mindshare. Watch Google Cloud events and Gemini Live launch webinars for follow-ons.",
  },
  {
    id: "azure-ai-speech",
    company: "Microsoft Azure AI Speech",
    category: "Cloud STT / TTS",
    homepageUrl: "https://azure.microsoft.com/en-us/products/ai-services/ai-speech",
    events: [],
    watchNote:
      "Re-checked 2026-11-15: Model Mondays Voice Agents Upgraded (Oct 12) remains pruned. Watch Microsoft Reactor SF / Model Mondays for the next Azure Speech / Foundry voice-agent education hour.",
  },
  {
    id: "aws-transcribe",
    company: "AWS Transcribe / Bedrock",
    category: "Cloud STT / contact-center AI",
    homepageUrl: "https://aws.amazon.com/transcribe/",
    events: [],
    watchNote:
      "No Transcribe-owned dated Jul–Dec 2026 events confirmed as of 2026-11-21. Adjacent Deepgram×AWS builder education: SageMaker VPC webinar Nov 18 (→ pastEvents2026) + AIM382-S re:Invent breakout Nov 30 + Startup Plaza demos Dec 2–3 (tracked under Deepgram). Multi-Model Hackathon + AGNTCon + Snowflake multimodal + Do Not Disturb Phone Use + Speech to Ship remain in pastEvents2026. Adjacent Bay Area: Rime Prism S2S Dec 5 (9q4bvnmt) + pyannoteAI speaker-intel webinar Dec 1 + Antler×ElevenLabs Dec 3. Adjacent re:Invent: owned Topgolf Nov 30 (m6gcrmm7) + Deepgram Speak Easy Dec 1 + Cartesia Super Car-tesia Dec 1 + ElevenLabs booth 2030 Dec 1–3 + NEW Agora×Cartesia×PingCAP Voice AI Mixer Dec 2. Watch AWS Gen AI Loft SF for Amazon Connect / contact-center voice sessions. Skip Women in AI Beyond the Prompt creative-tools salon Dec 7 (5i8fnr3e — aggregator/trymimetic copy falsely describes voice-agent architecture; live title is creative-tools salon) + stale Deepgram×Daily Jul 2025 year trap.",
  },
];
