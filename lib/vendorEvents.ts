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
 * AssemblyAI. Re-researched 2026-11-04 (~08:00 PST) against each vendor's own events page.
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
        id: "deepgram-vapi-web-summit-mixer",
        name: "Web Summit Kick Off with Vapi and Deepgram",
        dateLabel: "Nov 9",
        sortDate: "2026-11-09",
        format: "in-person",
        location: "Lisboa, Portugal (Web Summit week)",
        description:
          "Vapi × Deepgram Web Summit Lisbon kickoff (Nov 9–12 week) — another EU Deepgram×Vapi co-branded room after the Sep 22 Barcelona sunset drinks (now past). Competitive ecosystem distribution signal the same week as VapiCon SF. TITLE REFRESH 2026-11-01: Luma event/get now titles luma.com/vapi-t98x “Web Summit Kick Off with Vapi and Deepgram” (was “Vapi × Deepgram: Web Summit Mixer”); still Nov 9 via event/get + Vapi cal-9jzVoVZclDCewDU.",
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
        id: "deepgram-speak-easy-reinvent-krisp-twilio",
        name: "Deepgram Speak Easy | Co-hosted by Krisp & Twilio",
        dateLabel: "Dec 1, 6–9pm PT",
        sortDate: "2026-12-01",
        format: "in-person",
        location: "Allē Lounge on 66, 111 Resorts World Ave, Las Vegas, NV",
        description:
          "NEW 2026-11-03 on Deepgram Luma cal-qHEDltsO0Gr0WtD: approval-gated AWS re:Invent speakeasy lounge co-hosted by Deepgram, Krisp, and Twilio — password from Deepgram booth #1652 or Twilio booth #1962. Cocktail / skyline room for voice engineers, founders, and AI leaders (not a hands-on workshop). Strongest near-term Deepgram×Twilio co-distribution signal at re:Invent after Speak '26; day before Twilio London builder meetup and two days before Deepgram HealthTech London.",
        status: "confirmed",
        sourceUrl: "https://luma.com/reinvent-speak-easy",
        sourceLabel: "luma.com",
        topics: ["voice-agents"],
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
      "Re-checked 2026-11-04: Speak '26 remains in pastEvents2026 (deepgram.com/speak still HTTP 200 as archive). Deepgram Luma cal-qHEDltsO0Gr0WtD still lists Voice Agents Forum (Nov 5) + deepgram-2jm5 (Nov 17 6–9pm PST) + Speak Easy re:Invent (reinvent-speak-easy, Dec 1 6–9pm PT with Krisp & Twilio) + HealthTech London Dec 3 (fimimqjw). NEW adjacency: Side Quest Hotline Vapi Hackathon Nov 9 (buildclub-lugq — tracked in events.ts / Vapi) names Deepgram as speech-AI + Nintendo Switch prize partner the same evening as Vapi×Deepgram Lisbon kickoff. Owned AssemblyAI re:Invent Topgolf happy hour (m6gcrmm7, Nov 30) now lands the night before Speak Easy — competitive re:Invent distribution stack. Owned Voice hackathon week (msrwwjby) still live through Nov 7 11am PT. Web Summit Kick Off still Nov 9 (vapi-t98x). Bolna Symphony Nov 20 partner; VapiCon diamond sponsor; Sam Gutentag on Voice Agents Forum Nov 5. Beyond the Cloud still HTTP 404. Skip GRAM JAM + year traps.",
  },
  {
    id: "cartesia",
    company: "Cartesia",
    category: "TTS / real-time voice models",
    homepageUrl: "https://luma.com/cartesia",
    events: [
      {
        id: "cartesia-managed-agents-webinar",
        name: "[Webinar] Introducing Managed Agents — Cartesia",
        dateLabel: "Nov 10, 9:30–10:30am PT",
        sortDate: "2026-11-10",
        format: "virtual",
        description:
          "Cartesia product webinar launching Managed Agents — packaging STT/LLM/TTS, latency, interruptions, and turn-taking so teams ship voice agents without assembling the stack. Live zero-to-conversation demo plus early builder use cases. DATE CORRECTION 2026-10-31: live event/get (94y4it1j) is now Nov 10 17:30–18:30 UTC / 9:30–10:30am PT (was listed Nov 3; prior 2026-10-27 pass had corrected only the clock from 3:30–4:30pm PT). Same calendar morning as Agora Lisbon Scaling Voice AI and Cartesia Multimodal First Look SF evening.",
        status: "confirmed",
        sourceUrl: "https://luma.com/94y4it1j",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "tts", "streaming"],
      },
      {
        id: "cartesia-multimodal-research-first-look-sf",
        name: "First Look: Multimodal Research with Cartesia",
        dateLabel: "Nov 10, 6:30–9pm PT",
        sortDate: "2026-11-10",
        format: "in-person",
        location: "San Francisco, CA (Marina District; exact venue on registration)",
        description:
          "Cartesia invite-gated SF evening first look at multimodal research for voice/conversational builders. Same Luma slug as the prior Speech-to-Speech First Look listing (xrj6gzm2) — title refreshed on cal-EeDJt2cPbgGca1W as of 2026-10-22. Same calendar day as Cartesia Managed Agents webinar (now Nov 10) + Agora Lisbon Scaling Voice AI and AI Engineer Code Summit week.",
        status: "confirmed",
        sourceUrl: "https://luma.com/xrj6gzm2",
        sourceLabel: "luma.com",
        topics: ["tts", "voice-agents", "audio-intel"],
      },
    ],
    watchNote:
      "Re-checked 2026-11-04: Cartesia Luma cal-EeDJt2cPbgGca1W — Managed Agents webinar still Nov 10 9:30–10:30am PT (94y4it1j) + Coffee CARTesia NYC still on cal (0960vqe8, Nov 12 — skip; voiceaispace mislabels as Multimodal Research Panel). First Look Multimodal (xrj6gzm2, Nov 10) still absent from cal items but event/get live — keep. Still skip Agent’s Table (srbdv0c2). Cartesia founding engineer still on Decagon × Accel Nov 9 (j3ddfdsw). Bolna Symphony Nov 20 partner; Cartesia CEO on VapiCon; Samith Venkatesh on Voice Agents Forum Nov 5.",
  },
  {
    id: "elevenlabs",
    company: "ElevenLabs",
    category: "TTS / conversational agents / Scribe STT",
    homepageUrl: "https://elevenlabs.io/events",
    events: [
      {
        id: "elevenlabs-v4-v4-turbo-whats-new-live-demos",
        name: "Eleven v4 & v4 Turbo: What’s New and Live Demos",
        dateLabel: "Nov 5",
        sortDate: "2026-11-05",
        format: "virtual",
        description:
          "Mandarin-language ElevenLabs product session on Eleven v4 / v4 Turbo expressiveness, naturalness, and low latency for production voice agents — plus live demos of a multi-turn customer-service agent and an outbound calling agent. Same calendar day as Voice Agents Forum SF / Speechmatics × Roark London (elevenlabs.io webinars as of 2026-10-22).",
        status: "confirmed",
        sourceUrl: "https://elevenlabs.io/webinars/eleven-v4-v4-turbo-whats-new-and-live-demos",
        sourceLabel: "elevenlabs.io",
        topics: ["tts", "voice-agents", "streaming"],
      },
      {
        id: "elevenlabs-ai-tinkerers-singapore-voice-build",
        name: "Build with ElevenLabs: Voice AI & Creative Agents — AI Tinkerers Singapore",
        dateLabel: "Nov 10, 5:30–9pm SGT",
        sortDate: "2026-11-10",
        format: "in-person",
        location: "Grab HQ @ one-north, 3 Media Close, Singapore",
        description:
          "NEW 2026-11-04: AI Tinkerers Singapore × ElevenLabs ambassador hands-on evening at Grab HQ — Track 1 builds a conversational ElevenAgents voice agent; Track 2 ships a short ElevenCreative audio piece. Same calendar day as Cartesia Managed Agents webinar / Multimodal First Look SF and Agora Lisbon Scaling Voice AI; strongest near-term APAC ElevenLabs builder-education signal before Summit NYC / VapiCon week (luma.com/olv1aat3 + singapore.aitinkerers.org).",
        status: "confirmed",
        sourceUrl: "https://luma.com/olv1aat3",
        sourceLabel: "luma.com",
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
          "ElevenLabs Summit NYC — same week as VapiCon in SF. Competitive calendar conflict for voice-agent DevRel coverage; listed on elevenlabs.io/summit/new-york as of 2026-10-22 (NVIDIA Jensen Huang on speaker roster).",
        status: "confirmed",
        sourceUrl: "https://elevenlabs.io/summit/new-york",
        sourceLabel: "elevenlabs.io",
        topics: ["tts", "voice-agents", "stt"],
      },
      {
        id: "elevenlabs-live-demo-ai-agents-bookings-commerce",
        name: "Live demo: AI agents for bookings, commerce, retail and marketplaces",
        dateLabel: "Nov 11",
        sortDate: "2026-11-11",
        format: "virtual",
        description:
          "ElevenLabs virtual live demo / platform walkthrough of ElevenBooking on ElevenAgents — multilingual voice booking/commerce agent that searches, confirms, and handles mid-conversation plan changes. Same calendar day as Summit NYC (in-person) and VapiCon SF; replaces the prior travel-booking workshop URL which 404s as of 2026-10-22.",
        status: "confirmed",
        sourceUrl:
          "https://elevenlabs.io/webinars/ai-agents-for-bookings-commerce-retail-and-marketplaces",
        sourceLabel: "elevenlabs.io",
        topics: ["voice-agents", "tts"],
      },
      {
        id: "elevenlabs-elevenagents-hackathon-london",
        name: "ElevenAgents Hackathon London",
        dateLabel: "Nov 17–18",
        sortDate: "2026-11-17",
        format: "in-person",
        location: "The Bike Shed, 384 Old Street, Shoreditch, London EC1V 9LT",
        description:
          "ElevenLabs’ first partner + customer ElevenAgents hackathon — two days under the Shoreditch railway arches (~120 seats). Day 1 (Nov 17) partner sales/enablement; Day 2 (Nov 18) shared live agent build, partner vs customer tracks, then showcase demos on real calls / ElevenAgents widget. Strongest near-term ElevenLabs EU voice-agent builder mindshare; same week as Deepgram×Vapi SF phone workshop (Nov 17) and Bolna Symphony (Nov 20). Confirmed elevenlabs.io/events/elevenagents-hackathon-london HTTP 200 as of 2026-10-28.",
        status: "confirmed",
        sourceUrl: "https://elevenlabs.io/events/elevenagents-hackathon-london",
        sourceLabel: "elevenlabs.io",
        topics: ["voice-agents", "tts"],
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
      "Re-checked 2026-11-04: ElevenAgents Hackathon London (Nov 17–18) still HTTP 200. Nov 5 v4 Mandarin + Nov 11 bookings/commerce URLs still 200; Build Series slugs still 404 — do not add. Summit NYC (Nov 11) + Chatbot Summit Amsterdam (Nov 26) still 200. NEW: AI Tinkerers Singapore × ElevenLabs voice build Nov 10 (olv1aat3). Still sponsor of VexoHacks Nov 14 (chgfm6ec). Skip Seoul meetup + ElevenCreative After Hours SF (sfafterhours) + LA after hours. Nov 5 stacks Voice Agents Forum vs v4 webinar; Nov 10 stacks Singapore build vs Cartesia/Agora; Nov 11 Summit NYC vs VapiCon; Nov 17 London hackathon vs Deepgram×Vapi SF + Agora NYC. Owned TTS hackathon week (msrwwjby) still live through Nov 7.",
  },
  {
    id: "vapi",
    company: "Vapi",
    category: "Voice-agent platform",
    homepageUrl: "https://www.vapicon.ai/",
    events: [
      {
        id: "vapi-side-quest-hotline-hackathon-sf",
        name: "Side Quest Hotline Vapi Hackathon",
        dateLabel: "Nov 9, 5–9pm PT",
        sortDate: "2026-11-09",
        format: "in-person",
        location: "Vapi HQ, 150 Spear St, San Francisco",
        description:
          "NEW 2026-11-04 on Vapi Luma cal-9jzVoVZclDCewDU: Build Club × Vapi curated three-hour voice-agent hackathon at Vapi HQ (~80 builders, approval-gated) — ship/demo a live agent with Deepgram as named speech-AI + prize partner (plus Exa / Manus / TypeSafe credits). Same calendar evening as Decagon × Accel research night and Vapi×Deepgram Lisbon Web Summit kickoff; night-before-VapiCon-week competitive Bay Area hack signal (luma.com/buildclub-lugq).",
        status: "confirmed",
        sourceUrl: "https://luma.com/buildclub-lugq",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "stt"],
      },
      {
        id: "vapi-ai-summit-nyc-after-hours",
        name: "THE AI SUMMIT — After hours (Vapi × LangChain)",
        dateLabel: "Dec 9, 6–8:30pm ET",
        sortDate: "2026-12-09",
        format: "in-person",
        location: "Nittis Italian Restaurant, 523 9th Ave, New York, NY",
        description:
          "Vapi-hosted AI Summit New York after-hours at Nittis — drinks plus short talks from Vapi and LangChain on agent harness/evals/feedback loops with realtime voice-agent production themes. SLUG/TITLE REFRESH 2026-10-30: prior Voice AI Builders Social listing (luma.com/vapi-pjzk) now HTTP 404; live room on cal-9jzVoVZclDCewDU is luma.com/ai-summit-ny-after-hours (same venue/day). Competitive NYC distribution signal after VapiCon SF.",
        status: "confirmed",
        sourceUrl: "https://luma.com/ai-summit-ny-after-hours",
        sourceLabel: "luma.com",
        topics: ["voice-agents"],
      },
    ],
    watchNote:
      "Re-checked 2026-11-04: Vapi Luma cal-9jzVoVZclDCewDU — Voice Agents Forum (Nov 5), NEW Side Quest Hotline Hackathon Nov 9 (buildclub-lugq), Web Summit Kick Off with Vapi and Deepgram (Nov 9 Lisbon — tracked under Deepgram), VapiCon 2026 (Nov 11–12 / vapi-9sdp), Deepgram × Vapi phone workshop SF Nov 17 (deepgram-2jm5), THE AI SUMMIT After hours NYC Dec 9. Skip VapiCon afterparty (vapicon26-afterparty) + healthcare dinner (vapi-2wdx). Fall '26 VON → pastEvents2026.",
  },
  {
    id: "regal",
    company: "Regal AI",
    category: "Contact-center / Voice AI platform",
    homepageUrl: "https://www.regal.ai/",
    events: [],
    watchNote:
      "Re-checked 2026-11-04: Regal Rise (Sep 17 NYC/virtual) already pruned. No new dated public Regal events found — watch for a Bay Area follow-on vs AssemblyAI phone-agent builders.",
  },
  {
    id: "twilio",
    company: "Twilio",
    category: "Communications / Conversational Intelligence",
    homepageUrl: "https://www.twilio.com/",
    events: [
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
        dateLabel: "Dec 2",
        sortDate: "2026-12-02",
        format: "in-person",
        location: "London, United Kingdom",
        description:
          "Twilio UK builder community meetup (London December edition) on conversations in the AI era — continuing the Oct 14 London / Nov 4 Manchester series for communications + AI agent builders. DATE CORRECTION 2026-10-22: live event/get + Twilio UK cal-hoJOad2gnCAn32t moved this from Dec 3 to Dec 2 (luma.com/9xwcwwxz).",
        status: "confirmed",
        sourceUrl: "https://luma.com/9xwcwwxz",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "streaming"],
      },
    ],
    watchNote:
      "Twilio UK Luma calendar cal-hoJOad2gnCAn32t (2026-11-04): Assemble London Nov 3 (7z0fyqec) pruned after end; Manchester Nov 4 (401md669) still live today via event/get (ends ~1pm PT) + London Dec 2 (9xwcwwxz). Deepgram Speak Easy re:Invent Dec 1 still co-hosted by Krisp & Twilio (booth #1962 — tracked under Deepgram); owned AssemblyAI Topgolf Nov 30 now precedes that lounge. Deepgram HealthTech London Dec 3 still day-after Twilio London Dec 2. Watch twilio.com for US/Bay Area Assemble dates.",
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
          "Agora Convo AI World evening in Lisbon during Web Summit week — tech talks, panels, and demos on taking voice / conversational / realtime AI from prototype to production (agents, avatars, translation, multimodal). Day after Vapi×Deepgram Web Summit Mixer (Nov 9); same calendar day as Cartesia Multimodal Research First Look SF; same week as AI Engineer Code Summit SF / VapiCon — EU realtime voice-agent mindshare cluster (luma.com/wqg33o39 on Agora cal-wYHDiuJD5JdAolS as of 2026-10-22).",
        status: "confirmed",
        sourceUrl: "https://luma.com/wqg33o39",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "streaming"],
      },
      {
        id: "agora-voice-ai-workshop-nyc-nov17",
        name: "Voice AI Workshop — NYC (Agora Agent Studio)",
        dateLabel: "Nov 17, 5:30–8:30pm ET",
        sortDate: "2026-11-17",
        format: "in-person",
        location: "New York, NY (Manhattan; exact venue on registration)",
        description:
          "Agora hands-on NYC workshop — build and test a voice AI agent in minutes with Agent Studio + Agora CLI (configure behavior/voice/models, initialize a starter project, move from idea toward a working agent). NEW on Agora Luma cal-wYHDiuJD5JdAolS as of 2026-10-29 (luma.com/voiceai-workshop-nyc-nov17; event/get 22:30–01:30 UTC = 5:30–8:30pm ET). Same calendar day as Deepgram×Vapi SF phone workshop and ElevenAgents Hackathon London Day 1 — US East Coast Agora realtime voice-agent education signal.",
        status: "confirmed",
        sourceUrl: "https://luma.com/voiceai-workshop-nyc-nov17",
        sourceLabel: "luma.com",
        topics: ["voice-agents", "streaming"],
      },
    ],
    watchNote:
      "Re-checked 2026-11-04: cal-wYHDiuJD5JdAolS lists From Prototype to Production: Scaling Voice AI (wqg33o39, Nov 10 Lisbon) + Voice AI Workshop NYC (voiceai-workshop-nyc-nov17, Nov 17 5:30–8:30pm ET via event/get). Empathy & Scale Oct 13 past; old NYC slug b59sk0v6 still 404 (replaced by voiceai-workshop-nyc-nov17). Watch agora.io + Luma for the next SF realtime voice-agent builder night.",
  },
  {
    id: "signalwire",
    company: "SignalWire",
    category: "Communications / Voice-agent platform",
    homepageUrl: "https://signalwire.com/resources/events",
    events: [],
    watchNote:
      "Re-checked 2026-11-04: VoiceAI LIVE! at Fall '26 VON Atlanta (Oct 13–15) pruned after Pacific end — VON kept in pastEvents2026. Palo Alto Build AI Voice Agents workshop (Oct 6) remains past. signalwire.com/resources/events still highlights ClueCon 2026 (past) — no new dated city workshops. Watch for the next SF/Bay Area production voice-agent workshop.",
  },
  {
    id: "livekit",
    company: "LiveKit",
    category: "Realtime voice/video agents",
    homepageUrl: "https://livekit.io/",
    events: [],
    watchNote:
      "Re-checked 2026-11-04: Luma cal-G3PEa5PrYXwKXx6 empty. SF Tech Week co-host Solving 'voice' as an interface (Oct 7) remains in pastEvents2026. livekit.io/events still 404. No new dated LiveKit-owned rooms — surfaces via partner nights; re-check weekly around Voice Agents Forum / VapiCon.",
  },
  {
    id: "retell",
    company: "Retell AI",
    category: "Voice-agent platform",
    homepageUrl: "https://www.retellai.com/",
    events: [],
    watchNote:
      "Re-checked 2026-11-04: retellai.com/events Upcoming still empty. Typically appears at voice-agent conferences (VapiCon-class rooms) rather than running a dated Luma series. Check LinkedIn / retellai.com/blog.",
  },
  {
    id: "bland",
    company: "Bland AI",
    category: "Voice-agent platform",
    homepageUrl: "https://www.bland.ai/",
    events: [],
    watchNote:
      "No public dated Jul–Dec 2026 developer events found on bland.ai as of 2026-11-04. Watch bland.ai and partner pages around contact-center / phone-agent summits.",
  },
  {
    id: "pipecat-daily",
    company: "Pipecat / Daily",
    category: "Voice-agent framework / WebRTC",
    homepageUrl: "https://pipecat.ai/",
    events: [],
    watchNote:
      "pipecat.ai/events still shows no upcoming dated public meetups as of 2026-11-04; Daily Luma cal-9UmQbmvz8qvnCK3 empty. Competitive signal: Deepgram × Daily Flux TTS on Pipecat webinar (Sep 29) is past; Pipecat co-hosted Voice AI: Shaping the Next Frontier of Customer Interaction (Oct 1 London, luma.com/prkbq50k — now past). Daily/Pipecat CEO Kwindla Kramer was on Deepgram Speak '26 (Oct 29 → pastEvents2026) and remains on VapiCon builder track. Pipecat often co-appears with Speechmatics / LiveKit / Deepgram builder nights — watch those calendars and daily.co changelog.",
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
      "Re-checked 2026-11-04: Speechmatics Luma cal-ZYr28XXq5fyMAym still lists Better Every Call? (c0iiab0e, Nov 5 London with Roark) + What Did Your Agent Learn This Week? Voice AI Leaders Dinner (59dy3crh, Nov 10 SF Embarcadero — skipped as invite-only leaders dinner, not a developer room). speechmatics.com/events also lists HLTH Las Vegas Nov 15–18 (healthcare trade show — skipped as booth/operator room). c0iiab0e remains the strongest near-term Speechmatics developer mindshare after past Oct 1 Tuner + Tech Week LiveKit/Aqua (pastEvents2026).",
  },
  {
    id: "gladia",
    company: "Gladia",
    category: "STT / audio intelligence",
    homepageUrl: "https://gladia.io/",
    events: [],
    watchNote:
      "Re-checked 2026-11-04: Paris Voice AI Meetup with pyannoteAI × Modal (Oct 14, paris-voice-ai) remains pruned. No new dated Gladia public rooms — direct STT competitor with EU residency positioning; watch gladia.io and @gladiaio for the next EU builder night. Adjacent EU signal: Voice Mitte Berlin Nov 5 (ai-coustics × telli — tracked in events.ts).",
  },
  {
    id: "soniox",
    company: "Soniox",
    category: "STT / real-time transcription",
    homepageUrl: "https://www.soniox.com/",
    events: [],
    watchNote:
      "No owned dated Jul–Dec 2026 events on soniox.com as of 2026-11-04. Competitive signal: Soniox CEO Klemen Simonic is on the VapiCon 2026 builder-track panel “Building Voice Models for Real Conversations” (Nov 12, with Deepgram CPO / Fish Audio / pyannoteAI). Real-time STT competitor — watch soniox.com and LinkedIn for workshop / launch announcements.",
  },
  {
    id: "rev-ai",
    company: "Rev AI",
    category: "STT / asynchronous transcription",
    homepageUrl: "https://www.rev.ai/",
    events: [],
    watchNote:
      "No public dated Jul–Dec 2026 developer events found on rev.ai as of 2026-11-04. Check rev.com/blog and partner conference booths.",
  },
  {
    id: "hume",
    company: "Hume AI",
    category: "Empathic TTS / voice",
    homepageUrl: "https://www.hume.ai",
    events: [],
    watchNote:
      "No dedicated public events calendar found at research time (2026-11-04). Hume sponsored/judged AGI House Voice AI Hackathon (Sep 19, now pastEvents2026) — competitive TTS/empathic-voice mindshare at AGI House. Otherwise shows up as a speaker/sponsor at voice-agent conferences rather than running its own dated series. Check hume.ai and @hume_ai.",
  },
  {
    id: "smallest-ai",
    company: "Smallest AI",
    category: "TTS / STT / speech-to-speech",
    homepageUrl: "https://luma.com/smallest.ai",
    events: [],
    watchNote:
      "Luma calendar cal-xZRPdTa3UcyyNJE empty as of 2026-11-04. Past 2026 Bay Area pattern: Beyond Text research talks (Jun 8, Menlo Park), Voice AI Goes Global multilingual panel (Jun 15), CCW Las Vegas steakhouse afterhours with Telnyx (Jun 24), Voice AI HackSprint 2.0 (Mar 14, SF). Re-check weekly — they run SF/Menlo Park builder nights in bursts.",
  },
  {
    id: "google-cloud-speech",
    company: "Google Cloud Speech / Gemini Live",
    category: "Cloud STT / realtime voice",
    homepageUrl: "https://cloud.google.com/speech-to-text",
    events: [],
    watchNote:
      "Re-checked 2026-11-04: Gemini Audio | At Night (Sep 24) remains in pastEvents2026. No new dated Google Cloud Speech / Gemini Live Bay Area builder rooms on DeepMind Luma cal-7Q5A70Bz5Idxopu (Scaling Startups / Founder Briefing Nov 4 / Built in London / Miami Build Night / GTM Hackathon / Gemini 4 NYC Hackathon skipped as non-speech or generic founder rooms). Watch Google Cloud events and Gemini Live launch webinars for follow-ons.",
  },
  {
    id: "azure-ai-speech",
    company: "Microsoft Azure AI Speech",
    category: "Cloud STT / TTS",
    homepageUrl: "https://azure.microsoft.com/en-us/products/ai-services/ai-speech",
    events: [],
    watchNote:
      "Re-checked 2026-11-04: Model Mondays Voice Agents Upgraded (Oct 12) remains pruned. Watch Microsoft Reactor SF / Model Mondays for the next Azure Speech / Foundry voice-agent education hour.",
  },
  {
    id: "aws-transcribe",
    company: "AWS Transcribe / Bedrock",
    category: "Cloud STT / contact-center AI",
    homepageUrl: "https://aws.amazon.com/transcribe/",
    events: [],
    watchNote:
      "No Transcribe-specific dated Jul–Dec 2026 events confirmed as of 2026-11-04. Multi-Model Hackathon (Oct 23, luma.com/beta-79jb) and AGNTCon + MCPCon NA (Oct 22–23) moved to pastEvents2026 after Pacific end. Multi-Modal Education Hackathon @ Snowflake (Nov 13, beta-3ue5) still adds a Voice & Audio Tutors track — multimodal-audio teams are the near-term STT pitch. Adjacent re:Invent signals: owned AssemblyAI Topgolf Voice AI Happy Hour Nov 30 (m6gcrmm7 — events.ts) + Deepgram Speak Easy Dec 1 (reinvent-speak-easy; Deepgram×Krisp×Twilio lounge — tracked under Deepgram). Watch AWS Gen AI Loft SF for Amazon Connect / contact-center voice sessions. Skip stale Deepgram×Daily Jul 2025 year trap.",
  },
];
