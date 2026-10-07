import { Router } from 'express';

export const conversationRouter = Router();

conversationRouter.post('/', (req, res) => {
  const { message = '', language = 'en', channel = 'web' } = req.body ?? {};

  if (!message.trim()) {
    return res.status(400).json({
      ok: false,
      error: 'Message is required.'
    });
  }

  const responseMessage = buildAssistantReply(message, language, channel);

  return res.json({
    ok: true,
    response: responseMessage,
    metadata: {
      language,
      channel,
      timestamp: new Date().toISOString()
    }
  });
});

function buildAssistantReply(message: string, language: string, channel: string) {
  const normalizedMessage = message.toLowerCase();

  if (normalizedMessage.includes('wallet') || normalizedMessage.includes('balance')) {
    return 'Your wallet balance is currently available. I can help you check transactions, transfer funds, or review recent activity.';
  }

  if (normalizedMessage.includes('bill') || normalizedMessage.includes('payment')) {
    return 'I can help you pay a bill or review upcoming payments. Please tell me the bill type and amount.';
  }

  if (normalizedMessage.includes('property') || normalizedMessage.includes('house')) {
    return 'I can help you search for property listings, review details, or schedule a viewing.';
  }

  if (normalizedMessage.includes('help')) {
    return 'I can assist with payments, wallet actions, property search, jobs, and general information. What do you need help with?';
  }

  return `Thanks for your message in ${language}. I’m here to help through the ${channel} channel. Tell me what you need, and I’ll guide you.`;
}
