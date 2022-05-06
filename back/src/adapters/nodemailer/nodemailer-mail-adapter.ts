import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "6ef7bdc06b8dd1",
    pass: "4a48ab0655fcc7"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({body,subject}: SendMailData) {
    await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Guilherme Lourenço <guilhermelourenco49@gmail.com>',
    subject,
    html: body
  })
  }
}