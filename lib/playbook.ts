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
    detail: "Sponsor a slot at AI Tinkerers, AICamp, or an AWS Gen AI Loft session — borrowed audience, low setup cost.",
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
      "Host 20–40 agent builders at your office or a co-working space for a hands-on session — laptops open, live coding, TAs roaming.",
    example:
      'e.g. "Give your agent a memory that survives restarts" — build a stateful agent against HydraDB live, ship a working demo by the end of the night.',
  },
  {
    id: "meetup-slot",
    mode: "in-person",
    title: "Sponsor a slot at an existing meetup",
    effort: "low",
    cadenceFit: "Easiest second in-person slot most months",
    description:
      "Don't run the room — rent 15–20 minutes of it. Bring a demo, not a pitch, to a meetup that already has the audience assembled.",
    example:
      "A 15-minute lightning talk at AI Tinkerers SF or AICamp on a debugging story from a real customer integration.",
  },
  {
    id: "hackathon-bounty",
    mode: "in-person",
    title: "Hackathon sponsor table + bounty",
    effort: "high",
    cadenceFit: "Quarterly, timed to AGI House / lablab.ai / summit hackathons",
    description:
      "Sponsor a challenge track with a prize, staff a table with 1–2 engineers for live support, and require the winning entry to actually use your product.",
    example:
      "\"Best agent with durable memory\" bounty at an AGI House hackathon — judged live, winner demos on your blog next week.",
  },
  {
    id: "founder-dinner",
    mode: "in-person",
    title: "Small technical dinner",
    effort: "low",
    cadenceFit: "Good relationship-depth swap-in when a build night doesn't fit",
    description:
      "10–15 people, invite-only, no slides. Structured discussion prompts about what's actually breaking in their agent stacks.",
    example:
      'A "State & memory in production agents" dinner with 12 engineering leads from companies already building on your platform.',
  },
  {
    id: "conference-talk",
    mode: "in-person",
    title: "Speak or sponsor a booth at a major conference",
    effort: "high",
    cadenceFit: "1–2x/quarter, not a monthly slot",
    description:
      "Apply to speak at Ray Summit, AI Infra Summit, or The AI Conference — reach is much larger than a meetup but lead time is 2–3 months.",
    example:
      "A submitted CFP for AI Infra Summit (Sep 15–17) on agent state/memory patterns at scale.",
  },
  {
    id: "office-hours",
    mode: "online",
    title: "Live office hours",
    effort: "low",
    cadenceFit: "Owned monthly (or biweekly) anchor",
    description:
      "Recurring live Q&A on Discord/YouTube with an engineer on call — bring real questions, debug live, no deck.",
    example: '"Ask the HydraDB team anything" — 30 minutes, same time every month, recorded and clipped afterward.',
  },
  {
    id: "deep-dive-webinar",
    mode: "online",
    title: "Technical deep-dive webinar",
    effort: "medium",
    cadenceFit: "Monthly content anchor",
    description:
      "A recorded or live walkthrough of one pattern, done properly — architecture diagram, real code, real tradeoffs.",
    example: '"Agent memory architecture: what actually needs to persist, and what doesn\'t" — 40-minute deep dive + Q&A.',
  },
  {
    id: "async-challenge",
    mode: "online",
    title: "Async build challenge",
    effort: "medium",
    cadenceFit: "Good virtual stand-in for a hackathon, ~quarterly",
    description:
      "A themed weekend challenge — submissions via GitHub/Discord over 3–5 days, judged async, winners announced on a livestream.",
    example: '"Build the fastest agent recall loop" weekend challenge, judged by response latency + correctness.',
  },
  {
    id: "ama-spaces",
    mode: "online",
    title: "X Spaces / Discord AMA",
    effort: "low",
    cadenceFit: "Easiest second online slot most months",
    description:
      "Bring a customer or partner who's shipped something real and let the audience ask them anything for 30 minutes.",
    example: "An X Spaces with a startup's founding engineer on migrating their agent's memory layer to HydraDB in production.",
  },
  {
    id: "interview-series",
    mode: "online",
    title: "Practitioner interview series",
    effort: "medium",
    cadenceFit: "Evergreen — batch-record several, release monthly",
    description:
      "Short recorded conversations with people actually building agents — publish as a YouTube/podcast series with lasting SEO value.",
    example: '"How we built it" — a 20-minute recorded conversation with an agent-builder customer, released monthly.',
  },
];
