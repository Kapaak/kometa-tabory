import { NextApiRequest, NextApiResponse } from 'next';

import sgMail from '@sendgrid/mail';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, ...props } = req.body;

  sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY ?? '');

  const msg = {
    to: email,
    from: 'info@primestak-brno.cz',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    template_id: 'd-8cab7a2e32be48cda3c3138c79d9c2a1',
    dynamic_template_data: props,
  };

  try {
    const email = await sgMail.send(msg);
    return res.send({ data: email, email });
  } catch (error) {
    console.error(error);
    return res.send({ message: error, email });
  }
};

export default handler;
