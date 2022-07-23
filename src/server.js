import express from 'express';
import mongoose from 'mongoose';

const app = express();

export const connect = async () => {
  console.log('Connecting to mongo...');
  await mongoose.connect('mongodb://localhost:27017');
  console.log('Successfully connected to mongo');
};

export const start = async () => {
  console.log('Starting server...');
  await app.listen(3000);
  console.log('Listening on port 3000...');
};

export default app;
