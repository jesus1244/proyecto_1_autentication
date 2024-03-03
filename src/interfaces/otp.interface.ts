export interface GetOTP {
  registerName?: string;
  name: string;
  email: string;
  numberCode: string;
  timeLife?: number;
  number: string;
}

export interface OtpGenerated {
  code: string;
  email: string;
  time: string;
  timeLife: number;
}

export interface ValidateOtp {
  originRegisterName?: string;
  registerName?: string;
  code: string;
}

export interface OtpVerified {
  code: string;
  email: string;
  time: string;
}