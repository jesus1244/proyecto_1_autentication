import { createTransport } from 'nodemailer';
import {
  mailAwsHost,
  mailAwsPort,
  mailAwsUser,
  mailAwsPass,
  mailAwsFrom
} from '../../config';
import { MailInterface, MailOptions, MailtrapTransporter } from '../../interfaces/mail.interface';

const sendMail = async ({ to, subject, html, file }: MailInterface) => {
  const transporter = createTransport({
    host: mailAwsHost,
    port: mailAwsPort,
    secure: true,
    auth: {
      user: mailAwsUser,
      pass: mailAwsPass
    }
  } as MailtrapTransporter);

  const mailOptions: MailOptions = {
    from: mailAwsFrom,
    to,
    subject,
    html
  };

  if (file !== undefined) {
    if (file.isBase64) {
      mailOptions.attachments = file?.files?.map((otherFiles: any) => {
        return {
          filename: otherFiles.name + ".pdf",
          content: otherFiles.file,
          encoding: 'base64'
        }
      })
    } else {
      mailOptions.attachments = [{
        filename: file.name + ".pdf",
        path: file.path,
        contentType: 'application/pdf'
      }]
    }

  }

  const res = await transporter.sendMail(mailOptions);
  return res;
}

export default sendMail