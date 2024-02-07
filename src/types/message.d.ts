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
  copyId?: string;
  fadeIn?: boolean;
  delay?: number;
}
