import express from 'express';
import mongoose from 'mongoose';

const app = express();

export const connect = async () => {
  console.log('Connecting to mongo...');
  await mongoose.connect('mongodb://localhost:27017');
  console.log('Successfully connected to mongo');
};

export const start = () => {

};

export default app;
