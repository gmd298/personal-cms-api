import dotenv from 'dotenv';

dotenv.config();

export const dbUrl = process.env.DB_URL || 'mongodb://127.0.0.1:27017';
export const port = process.env.PORT || 3000;
export const logLevel = process.env.LOG_LEVEL || 'dev';
export const jwtSecret = process.env.JWT_SECRET || '12345678';
export const corsHost = process.env.cors || 'http://localhost:3001';
