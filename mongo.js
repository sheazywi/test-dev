import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

let cachedDb = null;

export async function connectToDatabase() {
    if (cachedDb) {
        return cachedDb;
    }

    const client = await MongoClient.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = await client.db();

    cachedDb = { db, client };

    return cachedDb;
}