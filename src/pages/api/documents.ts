import { NextApiRequest, NextApiResponse } from 'next';

import { getAllDocuments, getDocumentByType } from '~/libs/sanity';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { documentType } = req.query;

  try {
    if (documentType === undefined || documentType === null) {
      const documents = await getAllDocuments();

      return res.json(documents);
    }

    const document = await getDocumentByType(documentType as string);

    res.json(document);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
