export type Effort = "low" | "medium" | "high";
export type EventMode = "in-person" | "online";

export interface CadenceSlot {
  week: string;
  mode: EventMode;
  label: string;
  detail: string;
}

export interface IdeaCard {
  id: string;
  mode: EventMode;
  title: string;
  effort: Effort;
  cadenceFit: string;
  description: string;
  example: string;
}

/** A default weekly rhythm that lands on 2 in-person + 2 online per month. */
export const cadenceTemplate: CadenceSlot[] = [
  {
    week: "Week 1",
    mode: "online",
    label: "Office hours",
    detail: "Low-lift recurring anchor — keeps a monthly touchpoint even in a busy week.",
  },
  {
    week: "Week 2",
    mode: "in-person",
    label: "Ride an existing meetup",
    detail:
      "Sponsor a slot at AI Tinkerers, AICamp, Voice AI Space, or an AWS Gen AI Loft session — borrowed audience of people already shipping voice.",
  },
  {
    week: "Week 3",
    mode: "in-person",
    label: "Owned build night or dinner",
    detail: "Your own room, your own agenda — the highest-signal slot of the month.",
  },
  {
    week: "Week 4",
    mode: "online",
    label: "Deep-dive or AMA",
    detail: "Content that outlives the event — publish the recording as evergreen material.",
  },
];

export const ideaBank: IdeaCard[] = [
  {
    id: "build-night",
    mode: "in-person",
    title: "Build night / workshop",
    effort: "medium",
    cadenceFit: "Owned monthly anchor",
    description:
      "Host 20–40 voice-agent builders at your office or a co-working space for a hands-on session — laptops open, live mics, TAs roaming.",
    example:
      'e.g. "Make the agent actually hear the caller" — wire Universal-3.5 Pro Realtime into a LiveKit or Pipecat loop, ship a working listen-think-speak demo by the end of the night.',
  },
  {
    id: "meetup-slot",
    mode: "in-person",
    title: "Sponsor a slot at an existing meetup",
    effort: "low",
    cadenceFit: "Easiest second in-person slot most months",
    description:
      "Don't run the room — rent 15–20 minutes of it. Bring a demo, not a pitch, to a meetup that already has voice-agent builders assembled.",
    example:
      "A 15-minute lightning talk at AI Tinkerers SF or AICamp on a production WER/interruption story from a real customer integration.",
  },
  {
    id: "hackathon-bounty",
    mode: "in-person",
    title: "Hackathon sponsor table + bounty",
    effort: "high",
    cadenceFit: "Quarterly, timed to AGI House / VapiCon / Voice Agents Forum",
    description:
      "Sponsor a challenge track with a prize, staff a table with 1–2 engineers for live support, and require the winning entry to actually use streaming STT.",
    example:
      '"Best voice agent that handles barge-in" bounty at an AGI House or VapiCon hack day — judged live, winner demos on the AssemblyAI blog next week.',
  },
  {
    id: "founder-dinner",
    mode: "in-person",
    title: "Small technical dinner",
    effort: "low",
    cadenceFit: "Good relationship-depth swap-in when a build night doesn't fit",
    description:
      "10–15 people, invite-only, no slides. Structured discussion prompts about what's actually breaking in their voice stacks.",
    example:
      'A "Latency budgets in production voice agents" dinner with 12 engineering leads from companies already building on streaming STT.',
  },
  {
    id: "conference-talk",
    mode: "in-person",
    title: "Speak or sponsor a booth at a major conference",
    effort: "high",
    cadenceFit: "1–2x/quarter, not a monthly slot",
    description:
      "Apply to speak at Voice Agents Forum, VapiCon, or The AI Conference — reach is much larger than a meetup but lead time is 2–3 months.",
    example:
      "A submitted CFP for VapiCon (Nov 11–12) on streaming STT patterns that survive noisy calls, accents, and mid-sentence code-switching.",
  },
  {
    id: "office-hours",
    mode: "online",
    title: "Live office hours",
    effort: "low",
    cadenceFit: "Owned monthly (or biweekly) anchor",
    description:
      "Recurring live Q&A on Discord/YouTube with an engineer on call — bring real questions, debug live, no deck.",
    example:
      '"Ask the AssemblyAI voice-agents team anything" — 30 minutes, same time every month, recorded and clipped afterward.',
  },
  {
    id: "deep-dive-webinar",
    mode: "online",
    title: "Technical deep-dive webinar",
    effort: "medium",
    cadenceFit: "Monthly content anchor",
    description:
      "A recorded or live walkthrough of one pattern, done properly — architecture diagram, real code, real tradeoffs.",
    example:
      '"Turn-taking, barge-in, and endpointing: what the STT layer owes the rest of the voice-agent stack" — 40-minute deep dive + Q&A.',
  },
  {
    id: "async-challenge",
    mode: "online",
    title: "Async build challenge",
    effort: "medium",
    cadenceFit: "Good virtual stand-in for a hackathon, ~quarterly",
    description:
      "A themed weekend challenge — submissions via GitHub/Discord over 3–5 days, judged async, winners announced on a livestream.",
    example:
      '"Build the tightest listen-think-speak loop" weekend challenge, judged by time-to-first-audio + interruption handling.',
  },
  {
    id: "ama-spaces",
    mode: "online",
    title: "X Spaces / Discord AMA",
    effort: "low",
    cadenceFit: "Easiest second online slot most months",
    description:
      "Bring a customer or partner who's shipped something real and let the audience ask them anything for 30 minutes.",
    example:
      "An X Spaces with a startup's founding engineer on swapping their voice agent's STT layer to Universal-3.5 Pro Realtime in production.",
  },
  {
    id: "interview-series",
    mode: "online",
    title: "Practitioner interview series",
    effort: "medium",
    cadenceFit: "Evergreen — batch-record several, release monthly",
    description:
      "Short recorded conversations with people actually shipping voice agents — publish as a YouTube/podcast series with lasting SEO value.",
    example:
      '"How we built it" — a 20-minute recorded conversation with a voice-agent customer, released monthly.',
  },
];
