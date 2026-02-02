export const SANDBOX_TIMEOUT_MS = 300_000; // 5 minutes in milliseconds

// Resolution boundaries for performance optimization
// The sandbox will run at full resolution, but screenshots sent to the LLM API
// will be scaled down to these dimensions to reduce bandwidth and tokens.
export const MAX_RESOLUTION_WIDTH = 1024;
export const MAX_RESOLUTION_HEIGHT = 768;
export const MIN_RESOLUTION_WIDTH = 640;
export const MIN_RESOLUTION_HEIGHT = 480;

// Default resolution used when none is specified
// NOTE: This should be within the max/min bounds defined above,
// otherwise it will be scaled automatically
export const DEFAULT_RESOLUTION: [number, number] = [1024, 720];

// Model ID configuration
// These can be overridden via environment variables
export const DEFAULT_OPENAI_MODEL_ID = "computer-use-preview";
export const DEFAULT_ANTHROPIC_MODEL_ID = "claude-3-7-sonnet-latest";

export const getOpenAIModelId = () =>
  process.env.OPENAI_MODEL_ID?.trim() || DEFAULT_OPENAI_MODEL_ID;

export const getAnthropicModelId = () =>
  process.env.ANTHROPIC_MODEL_ID?.trim() || DEFAULT_ANTHROPIC_MODEL_ID;
