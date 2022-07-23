import dotenv from 'dotenv';

dotenv.config();

export const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017';
export const port = process.env.PORT || 3000;
export const logLevel = process.env.LOG_LEVEL || 'dev';
