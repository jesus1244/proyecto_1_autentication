// import { Request, Response, Router, RequestHandler } from 'express'
// import { SuccessOkResponse, InternalError, BadRequestError } from '../../../../helpers/api.response'
// import { ResponseService } from '../../../../interfaces/server.interfaces';
// // import { OTPService } from "../../../../services";
// import { keyCloakServices } from '../../../../services/keycloak';
// import schema from './schema'

// const router = Router()

// // const genereteCode: RequestHandler = async (req: Request, res: Response) => {
// //   try {
// //     const body = req.body
// //     const { error } = schema.genereteCode.validate(body)
// //     if (error) return BadRequestError(res, error.details[0].message)
    
// //     const result: any = await keyCloakServices.adminGetUser(body.username)
// //     if(result.error ) return BadRequestError(res, result.message) 
// //     const registerName = `${body.registerName || 'otp_credentials'}_${body.username}`
// //     //console.log(result)
// //     const param = {
// //       registerName,
// //       name: result.firstName,
// //       email: result.email,
// //       number: result.attributes.phone_number ? result.attributes.phone_number[0]: null,
// //       numberCode: body.numberCode,
// //       timeLife: body.timeLife
// //     }
// //     const otp: ResponseService = await OTPService.getOTP(param);
    
// //     return otp.success
// //       ? SuccessOkResponse(res, otp.message, { otpCode: otp.data }) 
// //       : BadRequestError(res, result.message)
// //   } catch (error) {
// //     console.log(error + "error")
// //     return InternalError(res)
// //   }
// // }

// const validateCode: RequestHandler = async (req: Request, res: Response) => {
//   try {
//     const body = req.body
//     const { error } = schema.validateCode.validate(body)
//     if (error) return BadRequestError(res, error.details[0].message)
//     const registerName = `${body.registerName || 'otp_verified_credentials'}_${body.username}`
//     const originRegisterName = `${body.originRegisterName || 'otp_credentials'}_${body.username}`
//     const param = {
//       registerName,
//       originRegisterName,
//       code: body.code,
//     }
//     const validate: ResponseService = await OTPService.validateOTP(param);
    
//     if (!validate.success) return BadRequestError(res, validate.message)
    
//     const result: any = await keyCloakServices.adminUpdateAttributesUserOTP(body.username, body.password)
//     if (result.err){
//       return BadRequestError(res,result.err)
//     }
//     return SuccessOkResponse(res,"verify")
//   } catch (error: any) {
//     console.log('error => ', error)
//     InternalError(res)
//   }
// }



 
//  //-------------------------------forgot-password
//  /**
//   * @openapi
//   * /api/auth/keycloak/otp/forgot-password:
//   *  post:
//   *    tags:
//   *      - otp
//   *    summary: List a group of role
//   *    description: Get user or admins in a list with options
//   *    requestBody:
//   *      description: List atrributes of users 
//   *      content:
//   *        application/json:
//   *          schema:
//   *            type: object
//   *            properties:
//   *              username:
//   *                type: string
//   *                example: "cabiver"
//   *                
//   *      required: true
//   *    responses:
//   *      '200':
//   *        description: Successfull peticion
//   *        content:
//   *          application/json:
//   *            schema:
//   *              type: object
//   *              properties:
//   *                success:
//   *                  type: boolean
//   *                  example: true
//   *                message:
//   *                  type: string
//   *                  example: "List users successfully"
//   *                StatusCode:
//   *                  type: string
//   *                  example: 20000
//   */
// router.post('/forgot-password', genereteCode)

// //-------------------------------/confirm-password
//  /**
//   * @openapi
//   * /api/auth/keycloak/otp/confirm-password:
//   *  post:
//   *    tags:
//   *      - otp
//   *    summary: List a group of role
//   *    description: Get user or admins in a list with options
//   *    requestBody:
//   *      description: List atrributes of users 
//   *      content:
//   *        application/json:
//   *          schema:
//   *            type: object
//   *            properties:
//   *              username: 
//   *                type: string 
//   *                example:  1001818723
//   *              password:
//   *                type: string
//   *                example: password
//   *              code:
//   *                type: string
//   *                example: ''
//   *                
//   *      required: true
//   *    responses:
//   *      '200':
//   *        description: Successfull peticion
//   *        content:
//   *          application/json:
//   *            schema:
//   *              type: object
//   *              properties:
//   *                success:
//   *                  type: boolean
//   *                  example: true
//   *                message:
//   *                  type: string
//   *                  example: "List users successfully"
//   *                StatusCode:
//   *                  type: string
//   *                  example: 20000
//   */
// router.post('/confirm-password', validateCode)

// export default router