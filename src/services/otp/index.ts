// import { GetOTP, OtpGenerated, OtpVerified, ValidateOtp } from "../../interfaces/otp.interface";
// // import { redisModel } from "../../models";
// import { sendEmailOtp } from "../../templates/sendEmailOtp";
// import { sendSMSOtp } from "../../templates/sendSMSOTP";
// import sendMail from "../sendMail";
// import sendSMS from "../sendSMS";

// const OTPService = {
//   getOTP: async ({ registerName = '', name, numberCode = '+57',  number , email, timeLife = 300 }: GetOTP) => {
//     let seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
//     const otpViabilidad = await redisModel.getRedis(registerName)
//     const bodyOtpViabilidad: OtpGenerated[] = otpViabilidad ? [...otpViabilidad] : []

//     bodyOtpViabilidad.push({
//       code: seq,
//       email,
//       time: new Date().toString(),
//       timeLife
//     });

//     const reqRedis = await redisModel.setRedis(registerName, bodyOtpViabilidad)

//     if (reqRedis === 'OK') {
//       const template = sendEmailOtp(name, seq)
//       const res =  await sendMail({ to: email, subject: 'Codigo de verificación', html: template })
//       // console.log('res => ', res)
//       // if(number){
//       //   const templateSMS = sendSMSOtp(seq)
//       //   const numberDestiny = numberCode + number 
//       //   sendSMS({ template:templateSMS, number: numberDestiny})
//       // }
//       return { success: true, message: 'OTP generado con exito.', data: seq }
//     }

//     return { success: false, message: 'Ha ocurrido un error al generar OTP.' }
//   },
//   validateOTP: async ({ originRegisterName = '', registerName = '', code }: ValidateOtp) => {
//     try {
//       const otpViabilidad: OtpGenerated[] = await redisModel.getRedis(originRegisterName)
//       const validateOtp: OtpGenerated = otpViabilidad[otpViabilidad.length - 1]
//       // console.log('validateOtp => ', originRegisterName)
//       // console.log('validateOtp => ', validateOtp)
//       const dateOrigen = new Date(validateOtp.time).getTime() + (validateOtp.timeLife * 1000)

//       const dateValidate = new Date().getTime()

//       if (dateOrigen <= dateValidate) return { success: false, message: 'Ha caducadoe el OTP' }

//       if (code !== validateOtp.code) return { success: false, message: 'OTP invalido' }

//       const otpVerifiedViabilidad: OtpVerified[] = await redisModel.getRedis(registerName)
//       // console.log('registerName => ',otpVerifiedViabilidad)
//       const bodyOtpViabilidad: OtpVerified[] = otpVerifiedViabilidad ? [...otpVerifiedViabilidad] : []

//       bodyOtpViabilidad.push({
//         code: validateOtp.code,
//         email: validateOtp.email,
//         time: new Date().toString()
//       });

//       const reqRedis = await redisModel.setRedis(registerName, bodyOtpViabilidad)

//       if (reqRedis === 'OK') return { success: true, message: 'OTP valido' }

//       return { success: false, message: 'Ha caducadoe el OTP' }
//     } catch (error: any) {
//       return { success: false, message: error.message }
//     }
//   }
// }

// export default OTPService