import nodemailer from 'nodemailer'

export const sendGmail = async (to: string, subject: string, html: string, from: string = 'info@grupdesuport.com') => {
  //const accessToken = await oAuth2Client.getAccessToken()
  let emailSended: boolean = false

  try {
    // Configura el transporte
    const transporter = await nodemailer.createTransport({
      service: 'gmail',
      auth: {
        //type: 'OAuth2',
        user: 'info@grupdesuport.com',
        pass: import.meta.env.GOOGLE_PASS,
        //clientId: import.meta.env.GOOGLE_CLIENT_ID,
        //clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
        //refreshToken: import.meta.env.GOOGLE_REFRESH_TOKEN,
        //accessToken,
      },
    })

    await transporter.sendMail({
      from,
      to,
      subject,
      html,
    })

    emailSended = true
  } catch (err) {
    console.error(err)
  } finally {
    return emailSended
  }
}
