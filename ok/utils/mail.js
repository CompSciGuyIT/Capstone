const nodeMailer = require('nodemailer')
const adminEmail = process.env.ADMIN_EMAIL
const adminPassword = process.env.ADMIN_PASS
const mailHost = 'smtp.gmail.com'
const mailPort = 587

const sendMail = async (to, subject, htmlContent) => {
  const transporter = nodeMailer.createTransport({
    host: mailHost,
    port: mailPort,
    secure: false,
    auth: {
      user: adminEmail,
      pass: adminPassword
    }
  })

  const options = {
    from: adminEmail,
    to: to,
    subject: subject,
    html: htmlContent
  }

  return await transporter.sendMail(options)
}

module.exports = {
  sendMail: sendMail
}