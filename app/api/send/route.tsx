import { NextApiRequest, NextApiResponse } from 'next';
import {NextResponse} from 'next/server'
//import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await resend.emails.send({
    from: 'Andrew <onboarding@resend.dev>',
    to: ['andrew.ag618@gmail.com'],
    subject: 'Hello world',
    react: <>
    <p>Email</p>
    </>
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};