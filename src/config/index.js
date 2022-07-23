import dotenv from 'dotenv';

dotenv.config();

export const dbUrl = process.env.DB_URL;
export const port = process.env.PORT;
