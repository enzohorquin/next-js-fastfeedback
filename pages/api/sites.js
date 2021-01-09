// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from '@/lib/firebase-admin';

export default async (_, res) => {

  try {
    const snapshot = await db.collection('sites').get();
    const sites = [];

    snapshot.forEach((doc) => {
      sites.push({ id: doc.id, ...doc.data() });
    });

    res.status(200).json({ sites });
  }
  catch (error) {
    console.log(error);
    res.status(401).json({ sites: [] });
  }

};