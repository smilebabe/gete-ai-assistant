export type Language = 'am' | 'en' | 'or' | 'ti' | 'so';

export interface AssistantMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface UserContext {
  language: Language;
  preferredName?: string;
  country?: string;
  channel?: 'web' | 'voice' | 'sms' | 'ussd';
}
