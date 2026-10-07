import express from 'express';
import { healthRouter } from './routes/health';
import { conversationRouter } from './routes/conversation';

export const app = express();

app.get('/', (_req, res) => {
  res.json({
    name: 'GETE AI Assistant API',
    status: 'online',
    service: 'assistant-api'
  });
});

app.use('/health', healthRouter);
app.use('/api/conversation', conversationRouter);
