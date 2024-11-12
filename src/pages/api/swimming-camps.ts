import { NextApiRequest, NextApiResponse } from 'next';

import { getAllSwimmingCamps } from '~/libs/sanity';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const courses = await getAllSwimmingCamps();

    res.json(courses);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
