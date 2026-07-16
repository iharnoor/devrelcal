export type Topic = "rag" | "vector-db" | "graphrag" | "agent-memory";

export const TOPIC_LABEL: Record<Topic, string> = {
  rag: "RAG",
  "vector-db": "Vector DB",
  graphrag: "GraphRAG",
  "agent-memory": "Agent Memory",
};

/** Any event carrying one of these topics is a HydraDB pitch/inspiration fit. */
export const PITCH_TOPICS: Topic[] = ["rag", "vector-db", "graphrag", "agent-memory"];

export function hasPitchTopic(topics: Topic[] | undefined): boolean {
  return !!topics && topics.some((t) => PITCH_TOPICS.includes(t));
}
