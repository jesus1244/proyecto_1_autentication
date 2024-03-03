export interface MailInterface {
  to: string | string[];
  subject: string;
  html: string;
  file?: FileInterface
}

export interface SMSInterface {
  template: string;
  number: string;
}


export interface FileInterface {
  name: string;
  isBase64: boolean;
  path?: string;
  files?: [{
    name: string,
    isBase64: boolean;
    file?: string
  }]
}

export interface MailtrapTransporter {
  host: string;
}

export interface MailOptions {
  from: string;
  to: string | string[];
  subject: string;
  html: string;
  attachments?: any
}