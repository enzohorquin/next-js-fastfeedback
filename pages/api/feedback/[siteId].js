// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAllFeedback } from '@/lib/db-admin';

export default async (req, res) => {
    const { feedback, error } = await getAllFeedback(siteId);

    if (error) {
        res.status(500).json({ error });
    }

    res.status(200).json({ feedback });
};