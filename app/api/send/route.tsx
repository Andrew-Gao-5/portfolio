import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const { email, subject, message } = await req.json();

    if (![email, subject, message].every(
      (value) => typeof value === 'string' && value.trim().length > 0
    )) {
      return NextResponse.json(
        { error: 'Please fill in all fields.' },
        { status: 400 }
      );
    }

const apiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.FROM_EMAIL;

if (!apiKey || !fromEmail) {
  return NextResponse.json(
    { error: 'The contact form is temporarily unavailable. Please email me directly.' },
    { status: 500 }
  );
}

const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ['andrew.ag618@gmail.com'],
      replyTo: email,
      subject: subject,
      text: `New message from: ${email}\n\n${message}`,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: 'Unable to send email.' },
      { status: 500 }
    );
  }
}