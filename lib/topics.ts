export type Topic = "stt" | "tts" | "voice-agents" | "streaming" | "audio-intel";

export const TOPIC_LABEL: Record<Topic, string> = {
  stt: "STT",
  tts: "TTS",
  "voice-agents": "Voice Agents",
  streaming: "Streaming",
  "audio-intel": "Audio Intel",
};

/**
 * Pitch/inspiration fit for AssemblyAI DevRel — rooms where speech-to-text,
 * streaming transcription, audio intelligence, or production voice agents are
 * the actual subject, not a side mention.
 */
export const PITCH_TOPICS: Topic[] = ["stt", "voice-agents", "streaming", "audio-intel"];

export function hasPitchTopic(topics: Topic[] | undefined): boolean {
  return !!topics && topics.some((t) => PITCH_TOPICS.includes(t));
}
