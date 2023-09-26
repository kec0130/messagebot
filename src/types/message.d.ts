export interface PromptParams {
  relation: string;
  name?: string;
  reason: string;
  manner: string;
}

export interface IMessage {
  from: 'bot' | 'user';
  content: string;
}
