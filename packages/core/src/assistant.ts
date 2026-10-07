import type { AssistantMessage, UserContext } from './types';

export class Assistant {
  private readonly context: UserContext;

  constructor(context: UserContext) {
    this.context = context;
  }

  respond(message: string): AssistantMessage {
    return {
      role: 'assistant',
      content: `Hello! I received your message: "${message}" in ${this.context.language}.`,
      timestamp: new Date().toISOString()
    };
  }
}
