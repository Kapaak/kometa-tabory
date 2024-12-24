import { NextApiRequest, NextApiResponse } from 'next';

import { getAllTestimonialsByCampType } from '~/libs/sanity';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { campType } = req.query;

  if (!campType) {
    return res.status(400).json({ error: 'Missing campType' });
  }

  try {
    const courses = await getAllTestimonialsByCampType(campType as string);

    res.json(courses);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
