import { Router } from 'express';

export const healthRouter = Router();

healthRouter.get('/', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'assistant-api',
    message: 'GETE AI Assistant backend is running'
  });
});
