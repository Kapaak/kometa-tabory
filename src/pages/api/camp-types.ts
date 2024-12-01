import { NextApiRequest, NextApiResponse } from 'next';

import { getAllCampTypes } from '~/libs/sanity';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const campTypes = await getAllCampTypes();

    res.json(campTypes);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
