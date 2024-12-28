import { NextApiRequest, NextApiResponse } from 'next';

import {
  getAllTestimonials,
  getAllTestimonialsByCampType,
} from '~/libs/sanity';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { campType } = req.query;

  try {
    if (campType === undefined || campType === null) {
      const courses = await getAllTestimonials();

      return res.json(courses);
    }

    const courses = await getAllTestimonialsByCampType(campType as string);

    res.json(courses);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
