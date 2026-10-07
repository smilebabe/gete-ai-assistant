import express from 'express';
import cors from 'cors';
import { app } from './app';

const port = Number(process.env.PORT || 4000);

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`GETE AI Assistant API listening on http://localhost:${port}`);
});
