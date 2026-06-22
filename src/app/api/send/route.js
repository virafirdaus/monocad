import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  const { email } = await req.json()

  try {
    const { data, error } = await resend.emails.send({
      from: 'MonoCAD <onboarding@resend.dev>',
      to: ['firdausvira23@gmail.com'],
      subject: 'New contact from MonoCAD',
      html: `<p>New email submission: <strong>${email}</strong></p>`,
    })

    if (error) return Response.json({ error }, { status: 500 })
    return Response.json({ success: true })

  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}