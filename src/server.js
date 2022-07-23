import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import { dbUrl, port, logLevel } from './config';

const app = express();
app.use(morgan(logLevel));

export const connect = async () => {
  console.log('Connecting to mongo...');
  await mongoose.connect(dbUrl);
  console.log('Successfully connected to mongo');
};

export const start = async () => {
  console.log('Starting server...');
  await app.listen(port);
  console.log(`Listening on port ${port}...`);
};

export default app;
