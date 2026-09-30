import { NextApiRequest, NextApiResponse } from 'next';

import { getAllFaqsByCampFaq } from '~/libs/sanity';
import { CampFaqSanityKey } from '~/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { campFaqSanityKey } = req.query;

    if (!campFaqSanityKey) {
      res.status(400).json({ error: 'campFaqSanityKey is required' });
    }

    if (Array.isArray(campFaqSanityKey)) {
      res
        .status(400)
        .json({ error: 'campFaqSanityKey must be a single value' });
    }

    if (
      Object.values(CampFaqSanityKey).includes(
        campFaqSanityKey as CampFaqSanityKey
      ) === false
    ) {
      res.status(400).json({ error: 'Invalid campFaqSanityKey' });
    }

    const courses = await getAllFaqsByCampFaq(
      campFaqSanityKey as CampFaqSanityKey
    );

    res.json(courses);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
