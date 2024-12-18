import { NextResponse } from 'next/server'
import { google } from 'googleapis'
import nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'http://localhost:3000/oauth2callback'
)

const createTransporter = async () => {
  try {
    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN
    })

    const accessToken = await oauth2Client.getAccessToken()

    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.SMTP_USER,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        accessToken: accessToken.token
      }
    } as SMTPTransport.Options)
  } catch (error) {
    console.error('Transporter creation error:', error)
    throw new Error('メール送信の準備中にエラーが発生しました')
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    const transporter = await createTransporter()

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `[お問い合わせ] ${name}様より`,
      text: `
名前: ${name}
メールアドレス: ${email}

メッセージ:
${message}
      `
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'メッセージの送信に失敗しました。' },
      { status: 500 }
    )
  }
} 