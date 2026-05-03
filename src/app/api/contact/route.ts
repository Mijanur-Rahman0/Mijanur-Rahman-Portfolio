import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Here you would typically use a service like Resend, Mailgun, or Nodemailer
    // Example with Web3Forms (server-side to hide your key)
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        name,
        email,
        subject,
        message,
        from_name: "Portfolio Contact Form"
      })
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({ success: true, message: "Message sent successfully!" });
    } else {
      return NextResponse.json({ success: false, message: result.message }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
