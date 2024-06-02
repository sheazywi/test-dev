import { connectToDatabase } from '@/mongo';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { db, client } = await connectToDatabase();

        const collection = db.collection('subscriptions');

        const { email } = req.body;

        if (!email) {
            res.status(400).json({ message: 'Email is required' });
            await client.close();
            return;
        }

        try {
            await collection.insertOne({ email });
            res.status(200).json({ message: 'Subscription successful' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'An error occurred while subscribing' });
        } finally {
            await client.close();
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}