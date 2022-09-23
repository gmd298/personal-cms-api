import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import logger from './config/logger';
import v1Router from './v1';
import { dbUrl, port, logLevel } from './config';

const app = express();
app.use(morgan(logLevel));
app.use(express.json());
app.use('/v1', v1Router);
app.use(cors({
  origin: 'http://localhost:3001',
}));

export const connect = async () => {
  logger.info('Connecting to mongo...');
  await mongoose.connect(dbUrl);
  logger.success('Successfully connected to mongo');
};

export const start = async () => {
  logger.info('Starting server...');
  await app.listen(port);
  logger.success(`Listening on port ${port}...`);
};

export default app;
