import dotenv from 'dotenv';
dotenv.config();

export const environment = {

    port: process.env.PORT,
    db_url: process.env.DB_URL
}