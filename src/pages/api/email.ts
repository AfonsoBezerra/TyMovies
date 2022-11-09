import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log('email send');
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.TRANSPORTER_EMAIL,
      pass: process.env.TRANSPORTER_PASSWORD,
    },
  });
  const info = await transporter.sendMail({
    from: req.body.email,
    to: process.env.TRANSPORTER_EMAIL,
    replyTo: req.body.email,
    subject: req.body.subject,
    text: req.body.mensage,
    html: req.body.mensage,
  });
  res.send(info);
}
