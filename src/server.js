import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import logger from './config/logger';
import { dbUrl, port, logLevel } from './config';

const app = express();
app.use(morgan(logLevel));

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
