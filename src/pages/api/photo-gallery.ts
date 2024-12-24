import { NextApiRequest, NextApiResponse } from 'next';

import { getAllPhotosByCampType } from '~/libs/sanity';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { campType } = req.query;

  if (!campType) {
    return res.status(400).json({ error: 'Missing campType' });
  }

  try {
    const courses = await getAllPhotosByCampType(campType as string);

    res.json(courses);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
