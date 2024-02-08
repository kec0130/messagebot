export interface PromptParams {
  relation: string;
  name?: string;
  reason: string;
  manner: string;
  maxLength?: number;
}

export interface IMessage {
  from: 'bot' | 'user';
  content: string;
  chunkId?: number;
  fadeIn?: boolean;
  delay?: number;
}
