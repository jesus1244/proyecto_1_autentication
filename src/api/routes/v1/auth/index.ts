
import { Request, Response, Router, RequestHandler } from 'express'
import { deployFront, keycloakStudentRole } from '../../../../config'

import { SuccessOkResponse, InternalError, BadRequestError, AuthFailureError, ForbiddenResponse, dinamicResponse } from '../../../../helpers/api.response'
// import cognitoService from '../../../../services/cognito'
import { keyCloakServices } from '../../../../services/keycloak'
import { getCredentialAdmin } from '../../../../services/keycloak/adminMachine'
// import { insertStudents } from '../../../../services/postgress/dboperation'

const router = Router()


// const verify = async (req: Request, res: Response) => {
//   try {
//     const { username, code } = req.body;
//     const result: any = await cognitoService.confirmSignUp(username, code)
//     result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'Verify successfully', result)
//   } catch (error) {
//     InternalError(res)
//   }
// }

const changeAttributes: RequestHandler = async (req: Request, res: Response) => {

  try {
    const { accessToken, attributes, email, firstName, lastName } = req.body;
    const result: any = await keyCloakServices.changeAttributes(accessToken, attributes, email, firstName, lastName);
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'Attributes changed successfully', result)
  } catch(e) {
    console.log('internal server error'+e )
    InternalError(res)
  }
}

const changeAttributes2: RequestHandler = async (req: Request, res: Response) => {

  try {
    const { username, attributes, email, firstName, lastName } = req.body;

    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;

    const result: any = await keyCloakServices.updateAttributesUser2(username, attributes, token, email, firstName, lastName);
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'Attributes changed successfully', result)
  } catch(e) {
    console.log('internal server error'+e )
    InternalError(res)
  }
}

const changePassword: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { accessToken, newPassword, oldPassword  } = req.body;
    const result: any = await keyCloakServices.changePassword(accessToken, newPassword, oldPassword);
    return dinamicResponse(res, 'change Password', result, result.code)
  } catch(e) {
    console.log('internal server error'+e )
    InternalError(res)
  }
}

const signIn: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body
    const result: any = await keyCloakServices.signInUser(username, password)
    if(result?.error?.error_description) return dinamicResponse(res, "confirme el correo", null, result.code);
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'Sign in successfully', result.data)
  
  } catch (e){
    console.log('internal server error: '+e )
    InternalError(res)
  }
}

// const forgotPassword: RequestHandler = async (req: Request, res: Response) => {
//   try {
//     const { username } = req.body
//     const result: any = await cognitoService.forgotPassword(username)
//     result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'Password reset code', result)
//   } catch {
//     InternalError(res)
//   }
// }

// const confirmPassword: RequestHandler = async (req: Request, res: Response) => {
//   try {
//     const { username, password, code } = req.body;
//     const result: any = await cognitoService.confirmNewPassword(username, password, code)
//     result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'Confirmed password', result)
//   } catch {
//     InternalError(res)
//   }
// }

const getUser: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { accessToken } = req.body;
    const result: any = await keyCloakServices.getUserToken(accessToken);
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'User obtained successfully', result.data)
  } catch(e) {
    console.log('internal server error'+e )
    InternalError(res)
  }
}


const getUserAllInfo: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { accessToken, skip ,limit } = req.body;
    const result: any = await keyCloakServices.getUserTokenAllInfo(accessToken, skip ,limit);
    return dinamicResponse(res, 'User obtained successfully', result, result.code)
  } catch(e) {
    console.log('internal server error'+e )
    InternalError(res)
  }
}
const refreshToken: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { refreshToken } = req.body;
    const result: any = await keyCloakServices.refreshToken(refreshToken);
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'Refresh token', result)
  } catch(e) {
    console.log('internal server error'+e )
    InternalError(res)
  }
}

const revokeToken: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { refreshToken } = req.body;
    const result: any = await keyCloakServices.revokeToken(refreshToken);
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'Refresh token', result)
  } catch(e) {
    console.log('internal server error'+e )
    InternalError(res)
  }
}


const register: RequestHandler = async (req: Request, res: Response) => {
  try {
    let { username, name , family_name = "guess", password, enable, email, birthdate } = req.body;

    const Credentials: any = await getCredentialAdmin();
    const token= `Bearer ${Credentials.data.access_token}`
    let userAttributes =  {
      typePerson: "student",
      birthdate: birthdate
    }
    if(!name){
      name = username;
    }
    let userTemp = await keyCloakServices.getUser(username, token);
    if(userTemp.data) return BadRequestError(res, "el usuario existe");
    const result: any = await keyCloakServices.signUpUser(username,name,family_name, password, email, false, userAttributes, token)
    const usernew = await keyCloakServices.getUser(username, token);
    console.log(usernew.data[0].id)
    const arrayUser = [usernew.data[0].id];
    const asingToGroup: any = await keyCloakServices.adminAddToGroup(arrayUser, keycloakStudentRole, token);
    
    let date = new Date();
    let dateISO = date.toISOString();

    console.log('dateISO', dateISO)

    // let student = insertStudents({ username, name, lastname: family_name, email, birthdate, dateISO });

    return dinamicResponse(res, result?.error?? 'register success', asingToGroup, result.code == 200? 201: result.code);
  } catch(e) {
    console.log('internal server error'+e )
    InternalError(res)
  }
}


const confirmEmail: RequestHandler = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const Credentials: any = await getCredentialAdmin();
    const token= `Bearer ${Credentials.data.access_token}`
    const result: any = await keyCloakServices.confirmEmail(id, token)
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    res.redirect(deployFront);
  } catch(e) {
    console.log('internal server error'+e )
    InternalError(res)
  }
}



//-------------------------------schemes shared

/**
 * @swagger
 * /api/auth/keycloak/change-attributes-admin:
 *  put:
 *    tags:
 *      - AUTH
 *    summary: Enable user
 *    description: After creating a user/admin, you need to enable it for it to work
 *    security:
 *      - BearerAuth: []
 *    requestBody:
 *      description: Token needed to access this route, which you can obtain upon signing in
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              attributes:
 *                type: object
 *                properties:
 *                  phone_number:
 *                    type: string
 *                    example: "456456456"
 *                  phoneCorporative:
 *                    type: string
 *                    example: "456456456"
 *                  address:
 *                    type: string
 *                    example: "123 Main St"
 *              username:
 *                type: string
 *                example: "john_doe"
 *              email:
 *                type: string
 *                example: "john@example.com"
 *              firstName:
 *                type: string
 *                example: "John"
 *              lastName:
 *                type: string
 *                example: "Doe"
 *    responses:
 *      '200':
 *        description: Successful request
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                message:
 *                  type: string
 *                  example: "User Enabled"
 *                StatusCode:
 *                  type: string
 *                  example: "20000"
 */
router.put('/change-attributes-admin', changeAttributes2);


/** 
 * @openapi
 * /api/auth/keycloak/change-attributes:
 *  put:
 *    tags:
 *      - AUTH
 *    summary: Enable user
 *    description: after creater a user/admin, you need to enable for working
 *    requestBody:
 *      description: the token to recive this route you can take it un signin
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              accessToken:
 *                 type: string
 *                 example: 'eyJraWQiOiJYWk5kWE1rbHV4UWhJcHdhanZYQWhTMHBEd3Jxb3R3VDhuXC9MVjkyNDJKdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhY2UwYjAzYy0xYTA3LTRmY2QtOGE3OC1lNGE0ZTJlYTBlZjkiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV8wRFF6aUw2VGgiLCJjbGllbnRfaWQiOiIyazAwMHEycnA5NjEzYW5zNnJxYzJnbW9hNiIsIm9yaWdpbl9qdGkiOiJkMmFiN2EzMC04ZmQ3LTQ5ZWQtODY3OS03MTFkNWJhMTVlZmUiLCJldmVudF9pZCI6ImY3ZWYwMmU3LWZhMTEtNDRkMC1hYTVlLWYyN2MxMmU5NDEzMyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NzAxMDE0NDgsImV4cCI6MTY3MDEwNTA0OCwiaWF0IjoxNjcwMTAxNDQ4LCJqdGkiOiIyZmI0ZTI5MS0xNmMyLTQ1YzgtYjkyNy00YzBmYmI5ODIxMjkiLCJ1c2VybmFtZSI6IjEyMzQwOTcyMDYifQ.mq1AHVua8YfGgSosAHIsApilOnYN4U-eLi9Uj3GGjIUGRUybW4yaqjQAEVqmCHBZo5EbBoebj2V6B1QJp204m1pVMdQiCgCiQDTuCvytLIWvIJhMfri41LlnHOk3nsL0X7y6gFDSVQFzHHdR5orxyzN70tIxFfdU6uTzfaSei3zcEIkptVU4-PzEs5yKcesTY-AFbI3suyCIaGm0nNp3nnUZN7GdGNq9ypyK08NCO_rUHJFpkFdF2v1GksPT3Ra-T4ZkJ9lEbEu4_UCjvWQZbFgEcMgaYALtYkQ74Uy1VzAtpn7yPndnJWqMH8yGv3wRwGBUda0yNjPUHty7sp7mqg'
 *              attributes:
 *                type: object
 *                properties:
 *                  phone_number: 
 *                    type: string
 *                    example: "456456456" 
 *                  phoneCorporative: 
 *                    type: string
 *                    example: "456456456" 
 *                  addres: 
 *                    type: string
 *                    example: "calle si se"
 * 
 *      required: true
 *    responses:
 *      '200':
 *        description: Successful peticion
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                message:
 *                  type: string
 *                  example: "User Enable"
 *                StatusCode:
 *                  type: string
 *                  example: 20000
 * 
 */
router.put('/change-attributes', changeAttributes);

/**
 * @openapi
 * /api/auth/keycloak/change-password:
 *   post:
 *     tags:
 *       - AUTH
 *     summary: Change password route
 *     description: Change user's password in Keycloak using the access token
 *     requestBody:
 *       description: Access token, old password, and new password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               accessToken:
 *                 type: string
 *                 example: 'eyJraWQiOiJYWk5kWE1rbHV4UWhJcHdhanZYQWhTMHBEd3Jxb3R3VDhuXC9MVjkyNDJKdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhY2UwYjAzYy0xYTA3LTRmY2QtOGE3OC1lNGE0ZTJlYTBlZjkiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV8wRFF6aUw2VGgiLCJjbGllbnRfaWQiOiIyazAwMHEycnA5NjEzYW5zNnJxYzJnbW9hNiIsIm9yaWdpbl9qdGkiOiJkMmFiN2EzMC04ZmQ3LTQ5ZWQtODY3OS03MTFkNWJhMTVlZmUiLCJldmVudF9pZCI6ImY3ZWYwMmU3LWZhMTEtNDRkMC1hYTVlLWYyN2MxMmU5NDEzMyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NzAxMDE0NDgsImV4cCI6MTY3MDEwNTA0OCwiaWF0IjoxNjcwMTAxNDQ4LCJqdGkiOiIyZmI0ZTI5MS0xNmMyLTQ1YzgtYjkyNy00YzBmYmI5ODIxMjkiLCJ1c2VybmFtZSI6IjEyMzQwOTcyMDYifQ.mq1AHVua8YfGgSosAHIsApilOnYN4U-eLi9Uj3GGjIUGRUybW4yaqjQAEVqmCHBZo5EbBoebj2V6B1QJp204m1pVMdQiCgCiQDTuCvytLIWvIJhMfri41LlnHOk3nsL0X7y6gFDSVQFzHHdR5orxyzN70tIxFfdU6uTzfaSei3zcEIkptVU4-PzEs5yKcesTY-AFbI3suyCIaGm0nNp3nnUZN7GdGNq9ypyK08NCO_rUHJFpkFdF2v1GksPT3Ra-T4ZkJ9lEbEu4_UCjvWQZbFgEcMgaYALtYkQ74Uy1VzAtpn7yPndnJWqMH8yGv3wRwGBUda0yNjPUHty7sp7mqg'
 *               newPassword:
 *                 type: string
 *                 example: 'newpassword456'
 *     responses:
 *       '200':
 *         description: Password changed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: 'Password changed successfully'
 *                 data:
 *                   type: object
 *                   properties:
 *                     // Include any properties or types relevant to the response data
 *       '401':
 *         description: Authorization failure
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: string
 *                   example: '40101'
 *                 message:
 *                   type: string
 *                   example: 'Authentication failure'
 *       '403':
 *         description: Forbidden access
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: string
 *                   example: '40301'
 *                 message:
 *                   type: string
 *                   example: 'Access forbidden'
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 statusCode:
 *                   type: string
 *                   example: '40001'
 *                 message:
 *                   type: string
 *                   example: 'Invalid request'
 */
router.post('/change-password', changePassword);
/**
 * @openapi
 * components:
 *   schemas:
 *     singup:
 *       type: object
 *       properties:
 *         username: 
 *           type: string
 *           example: '10018187238'
 *         password: 
 *           type: string
 *           example: 'dCwfbx3!M17M'
 *         userAttributes:
 *           type: array
 *           example: '[{"Name": "email","Value": "example@gmail.com"}, {"Name": "phone_number","Value": "+573045715763"}, {"Name": "gender","Value": "male"}, {"Name": "birthdate","Value": "02-03-2002"}, {"Name": "name","Value": "luigi bros"}, {"Name": "family_name","Value": "mario"}, {"Name": "profile","Value": "1"}, {"Name": "custom:adviser_code","Value": "006"}, {"Name": "custom:adviser_id","Value": "206"}, {"Name": "custom:advise_document","Value": "1052957192"}, {"Name": "picture","Value": "https://pbs.twimg.com/profile_images/1569374895456272384/sxGNulEa_400x400.jpg"}]'
 *     login:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: true
 *         message:
 *           type: string
 *           example: "Sign in successfully"
 *         StatusCode:
 *           type: string
 *           example: 20000
 *         data:
 *           type: object
 *           properties:
 *             ChallengeParameters:
 *               type: object
 *             AuthenticationResult:
 *               type: object
 *               properties:
 *                 AccessToken:
 *                   type: string
 *                   example:  "eyJraWQiOiJYWk5kWE1rbHV4UWhJcHdhanZYQWhTMHBEd3Jxb3R3VDhuXC9MVjkyNDJKdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhY2UwYjAzYy0xYTA3LTRmY2QtOGE3OC1lNGE0ZTJlYTBlZjkiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV8wRFF6aUw2VGgiLCJjbGllbnRfaWQiOiIyazAwMHEycnA5NjEzYW5zNnJxYzJnbW9hNiIsIm9yaWdpbl9qdGkiOiJkMmFiN2EzMC04ZmQ3LTQ5ZWQtODY3OS03MTFkNWJhMTVlZmUiLCJldmVudF9pZCI6ImY3ZWYwMmU3LWZhMTEtNDRkMC1hYTVlLWYyN2MxMmU5NDEzMyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NzAxMDE0NDgsImV4cCI6MTY3MDEwNTA0OCwiaWF0IjoxNjcwMTAxNDQ4LCJqdGkiOiIyZmI0ZTI5MS0xNmMyLTQ1YzgtYjkyNy00YzBmYmI5ODIxMjkiLCJ1c2VybmFtZSI6IjEyMzQwOTcyMDYifQ.mq1AHVua8YfGgSosAHIsApilOnYN4U-eLi9Uj3GGjIUGRUybW4yaqjQAEVqmCHBZo5EbBoebj2V6B1QJp204m1pVMdQiCgCiQDTuCvytLIWvIJhMfri41LlnHOk3nsL0X7y6gFDSVQFzHHdR5orxyzN70tIxFfdU6uTzfaSei3zcEIkptVU4-PzEs5yKcesTY-AFbI3suyCIaGm0nNp3nnUZN7GdGNq9ypyK08NCO_rUHJFpkFdF2v1GksPT3Ra-T4ZkJ9lEbEu4_UCjvWQZbFgEcMgaYALtYkQ74Uy1VzAtpn7yPndnJWqMH8yGv3wRwGBUda0yNjPUHty7sp7mqg"
 *                 ExpiresIn: 
 *                   type: integer
 *                   example: 3600
 *                 TokenType:
 *                   type: string
 *                   example: "Bearer"
 *                 RefreshToken:
 *                   type: string
 *                   example:  "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.OIgXS5jGWGOkrd0wU_uyV1H_b3rDeWXb3zWNvoZZRM-S51slbZKK49BHMP3krmBqZPABhuyGBiu04vpBfiCJZLodM_VlweUIe7Oyp5EmH5kLoaePGJimwQ2f2zPgZC-cfIEqdngMjgbHNZh9svLETBjuclsUbQKn5CdJoxh6DfET_2spGnmVEF2yeSzot5jet-cuXcHzLd98eijHS-lV8uGC0j8zVY6oaFZejYzBv6qjEWZo4noCglN4Qt-D63i6ouQKCBzlioLRzl6GEge4cec79Yy_J0Vtn8mf_UD4x7r-vnWq4dR1lbG2J664APy2UbWsBYaLqfdq8gbKIt0QhA.FMd8_kbthfEkAjVK.9S8UkrpHdbPZhQB3D7nyoVD0S45I8kz_aXshyT7HRyoDiKx_UU0egPlrp5pS_NFt6QNkJDlM72WKyC9Mu0hOZHOLkBMI7z3jThL-L53DWe_7XQuzQOoledEgpSQIODB1P72tjI-MtUzDYbeiMHTtjcoQ2KMC-AWxpkATv4IAsFCteWKfSCmUOlIlOEfNYbsGWcZzc43WV_3QAgrhX-5ca2zoFbMFFCOPdJQ750pfx_5IDarV8F4Hctr81pPksN7XCmHMFOWZslRVi8xRc3fqmwv_ZRZI08RDtrow3X23cSpgFjDqjO17hGYGLPntUeE2asQNNnkzOX3pETt20l1ORoMZW_0HYWzQpHuKsG3Hfm32JfLFIai0h3teohs_HF2GU3mHRaUQr0dF1SSTNv7AlWCfdg9nn-qKcbXjQoSN-1Y58cXh-HsmN_yc0KMjshJbsn1Us5Q5g6H5BthvkvIFbmfLt7uOMKXUX5QhZpW7rhhc_tLYDHQ0l7tPym3tfgw4uULJGKYqDBk43fhaFq7m_W_uyCPg389zuKOS7rpDeSUW-oZSn7PtoxmBgphPnM_vNxQqkYm3ncHTVvtMM2CYN1lrGtbGbcGVQxxXJ5xw6185zrph1LCJmUc71CzTS5Mw6ss1oVzQf-DzhVwQADemaTeqMUynpYnFIJPknIU6SquY2STD3_IE0RRjaI54b5lvTKdcKzFVMqQpFOt-DnOii8WWE1324Wd-zmNO40Ck4njI0pKrdcPukvb1FjHHv-A1QUbqlgLDz2qR2rvD2vkhz-f3t-p01gFlg3mT1ZKET3tvpDf8fVykWp0ALeYlknqCkwRe1W38wozYcu5hiLzOzhMoxkbdnX31ter3Z8iDVK1fK-jUBKQSrpnrBaV7-jqp0WvagqVCkBKgTSenuz4q3eZL-hKZtTEJsKeFsUzDvopKMi4NAJO5OtwTSQWXy61jjDbjEPQ7hx3P68_9C4ZMEz2-pdzKZLYZsD1nEDUXTlHwdwurQ7VupMbvBCyzmkxF7T0QdlKAlhl9MEvqoM0tkFEIPOPTz0MuiEMSqTLNcVPYEs-QtIpf61DUREGtxzYdMgNDq4oqEEKvUhBoXDNfbKzH5jos5D51vwr8TVysAhuancio4QiDQ2-X9BTGSo_qOCgX_MPZ_guay_53UJ9OK11CuMnMfqvHIXVOuCmJPAH9mxb_BhaYuU3Q7DnXaD5yLz6f5czTN98Kwm6RJ5KBxFKuaqrq7pDChaIcqJPMekEyN-h2ynDGaTOXT1InML9cVvxLVFmV8ugk.qWe513Vq_wgyx8lp36E8rQ"
 *                 IdToken:
 *                   type: string
 *                   example: "eyJraWQiOiJKQ3NsXC9DQlR4MEZoMWVHbGJCVjFDcXVcL1NXaCs0OEtkTStZemJYUEVJQjQ9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJhY2UwYjAzYy0xYTA3LTRmY2QtOGE3OC1lNGE0ZTJlYTBlZjkiLCJiaXJ0aGRhdGUiOiIyMi0xMS0xOTk5IiwiZ2VuZGVyIjoibWFsZSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xXzBEUXppTDZUaCIsImN1c3RvbTphZHZpc2VyX2NvZGUiOiIwMDciLCJhdXRoX3RpbWUiOjE2NzAxMDE0NDgsImV4cCI6MTY3MDEwNTA0OCwiaWF0IjoxNjcwMTAxNDQ4LCJqdGkiOiI3NGMzNzE1ZS04Zjc2LTRkNjUtOTU2Mi05ZGQ4ODY0MzFhNDUiLCJlbWFpbCI6Im1pY2hhZWwucm9kcmlndWV6QGltYWdpbmVtb3MuY28iLCJjdXN0b206YWR2aXNlcl9pZCI6Ijc4MDI4ODk1IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByb2ZpbGUiOiIxIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwiY29nbml0bzp1c2VybmFtZSI6IjEyMzQwOTcyMDYiLCJjdXN0b206YWR2aXNlX2RvY3VtZW50IjoiNzgwMjg4OTUiLCJwaWN0dXJlIjoiaHR0cHM6XC9cL2ltYWdlcy5wZXhlbHMuY29tXC9waG90b3NcLzk5NjY1NzBcL3BleGVscy1waG90by05OTY2NTcwLmpwZWc_YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyNjAmaD03NTAmZHByPTEiLCJvcmlnaW5fanRpIjoiZDJhYjdhMzAtOGZkNy00OWVkLTg2NzktNzExZDViYTE1ZWZlIiwiYXVkIjoiMmswMDBxMnJwOTYxM2FuczZycWMyZ21vYTYiLCJldmVudF9pZCI6ImY3ZWYwMmU3LWZhMTEtNDRkMC1hYTVlLWYyN2MxMmU5NDEzMyIsInRva2VuX3VzZSI6ImlkIiwibmFtZSI6Ik1pY2hhZWwiLCJwaG9uZV9udW1iZXIiOiIrNTczMDIyNzIxMTE3IiwiZmFtaWx5X25hbWUiOiJSb2RyaWd1ZXoifQ.NJqGvDyNjLNMi74CHOqW70qOgZiexADhhasUN4VzFw3f6gXV1CHDCAirIMo6Kb7j2Hca47GGIqdDdz52c2E9Lg130W5Fuw-rC-we3ZQs6xAWquJfNc37JL5CKeZbE2HmG2RnxhLPk4FK_PRid-0Fe9Bp2LqICGmp64V_bf0idrEGGO1r5_xlcRfBzquSbe5SEN87p3H-bPpQaehbcFeC_Nx6lsVGf0pgazn3nm2GJz6GHXcrM4-a2dnSu9Ya2uAXBuMWerHjOIk_4gA4ROsELp29ybXQoSqR0OEqIfYGqr2I_EpKuu0DKb09C6IOBThlCAqA23aCNbtNZMtl8VKwBA"
 *             
 * 
 * 
 * 
 */
 

//-------------------------------/verify
/**
 * @openapi
 * /api/auth/keycloak/verify:
 *  post:
 *   tags:
 *     - AUTH
 *   summary: verif your OTP form signup
 *   description: after when you create a user/admin, you will recive a email with a OTP code, this is the rute to verify that code
 *   requestBody:
 *     description: Data format to send
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             username: 
 *               type: string
 *               example: '10018187238'
 *             code: 
 *               type: string
 *               example: '757692'
 *     required: true
 *   responses:
 *     '200':
 *       description: Successful peticion
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               success:
 *                 type: boolean
 *                 example: true
 *               message:
 *                 type: string
 *                 example: "Verify successfully"
 *               StatusCode:
 *                 type: string
 *                 example: 20000
 *     '400':
 *       description: Failfull peticion
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               success:
 *                 type: boolean
 *                 example: false
 *               statusCode: 
 *                 type: string 
 *                 example: "40001"
 *               message:
 *                 type: string
 *                 example: "Invalid code provided, please request a code again."
 */
// router.post('/verify', verify)

//-------------------------------/signin
/**
 * @openapi
 * /api/auth/keycloak/signin:
 *  post:
 *    tags:
 *      - AUTH
 *    summary: login route
 *    description: after create and verify the OTP code, you need to login and you will recive token access
 *    requestBody:
 *      description: username and password for login 
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username: 
 *                type: string
 *                example: '10018187238'
 *              password: 
 *                type: string
 *                example: 'password12#'
 *      required: true
 *    responses:
 *      '200':
 *        description: Successful peticion
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                message:
 *                  type: string
 *                  example: "Sign in successfully"
 *                StatusCode:
 *                  type: string
 *                  example: 20000
 *                data:
 *                  type: object
 *                  properties:
 *                    ChallengeParameters:
 *                      type: object
 *                    AuthenticationResult:
 *                      type: object
 *                      properties:
 *                        AccessToken:
 *                          type: string
 *                          example:  "eyJraWQiOiJYWk5kWE1rbHV4UWhJcHdhanZYQWhTMHBEd3Jxb3R3VDhuXC9MVjkyNDJKdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhY2UwYjAzYy0xYTA3LTRmY2QtOGE3OC1lNGE0ZTJlYTBlZjkiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV8wRFF6aUw2VGgiLCJjbGllbnRfaWQiOiIyazAwMHEycnA5NjEzYW5zNnJxYzJnbW9hNiIsIm9yaWdpbl9qdGkiOiJkMmFiN2EzMC04ZmQ3LTQ5ZWQtODY3OS03MTFkNWJhMTVlZmUiLCJldmVudF9pZCI6ImY3ZWYwMmU3LWZhMTEtNDRkMC1hYTVlLWYyN2MxMmU5NDEzMyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NzAxMDE0NDgsImV4cCI6MTY3MDEwNTA0OCwiaWF0IjoxNjcwMTAxNDQ4LCJqdGkiOiIyZmI0ZTI5MS0xNmMyLTQ1YzgtYjkyNy00YzBmYmI5ODIxMjkiLCJ1c2VybmFtZSI6IjEyMzQwOTcyMDYifQ.mq1AHVua8YfGgSosAHIsApilOnYN4U-eLi9Uj3GGjIUGRUybW4yaqjQAEVqmCHBZo5EbBoebj2V6B1QJp204m1pVMdQiCgCiQDTuCvytLIWvIJhMfri41LlnHOk3nsL0X7y6gFDSVQFzHHdR5orxyzN70tIxFfdU6uTzfaSei3zcEIkptVU4-PzEs5yKcesTY-AFbI3suyCIaGm0nNp3nnUZN7GdGNq9ypyK08NCO_rUHJFpkFdF2v1GksPT3Ra-T4ZkJ9lEbEu4_UCjvWQZbFgEcMgaYALtYkQ74Uy1VzAtpn7yPndnJWqMH8yGv3wRwGBUda0yNjPUHty7sp7mqg"
 *                        ExpiresIn: 
 *                          type: integer
 *                          example: 3600
 *                        TokenType:
 *                          type: string
 *                          example: "Bearer"
 *                        RefreshToken:
 *                          type: string
 *                          example:  "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.OIgXS5jGWGOkrd0wU_uyV1H_b3rDeWXb3zWNvoZZRM-S51slbZKK49BHMP3krmBqZPABhuyGBiu04vpBfiCJZLodM_VlweUIe7Oyp5EmH5kLoaePGJimwQ2f2zPgZC-cfIEqdngMjgbHNZh9svLETBjuclsUbQKn5CdJoxh6DfET_2spGnmVEF2yeSzot5jet-cuXcHzLd98eijHS-lV8uGC0j8zVY6oaFZejYzBv6qjEWZo4noCglN4Qt-D63i6ouQKCBzlioLRzl6GEge4cec79Yy_J0Vtn8mf_UD4x7r-vnWq4dR1lbG2J664APy2UbWsBYaLqfdq8gbKIt0QhA.FMd8_kbthfEkAjVK.9S8UkrpHdbPZhQB3D7nyoVD0S45I8kz_aXshyT7HRyoDiKx_UU0egPlrp5pS_NFt6QNkJDlM72WKyC9Mu0hOZHOLkBMI7z3jThL-L53DWe_7XQuzQOoledEgpSQIODB1P72tjI-MtUzDYbeiMHTtjcoQ2KMC-AWxpkATv4IAsFCteWKfSCmUOlIlOEfNYbsGWcZzc43WV_3QAgrhX-5ca2zoFbMFFCOPdJQ750pfx_5IDarV8F4Hctr81pPksN7XCmHMFOWZslRVi8xRc3fqmwv_ZRZI08RDtrow3X23cSpgFjDqjO17hGYGLPntUeE2asQNNnkzOX3pETt20l1ORoMZW_0HYWzQpHuKsG3Hfm32JfLFIai0h3teohs_HF2GU3mHRaUQr0dF1SSTNv7AlWCfdg9nn-qKcbXjQoSN-1Y58cXh-HsmN_yc0KMjshJbsn1Us5Q5g6H5BthvkvIFbmfLt7uOMKXUX5QhZpW7rhhc_tLYDHQ0l7tPym3tfgw4uULJGKYqDBk43fhaFq7m_W_uyCPg389zuKOS7rpDeSUW-oZSn7PtoxmBgphPnM_vNxQqkYm3ncHTVvtMM2CYN1lrGtbGbcGVQxxXJ5xw6185zrph1LCJmUc71CzTS5Mw6ss1oVzQf-DzhVwQADemaTeqMUynpYnFIJPknIU6SquY2STD3_IE0RRjaI54b5lvTKdcKzFVMqQpFOt-DnOii8WWE1324Wd-zmNO40Ck4njI0pKrdcPukvb1FjHHv-A1QUbqlgLDz2qR2rvD2vkhz-f3t-p01gFlg3mT1ZKET3tvpDf8fVykWp0ALeYlknqCkwRe1W38wozYcu5hiLzOzhMoxkbdnX31ter3Z8iDVK1fK-jUBKQSrpnrBaV7-jqp0WvagqVCkBKgTSenuz4q3eZL-hKZtTEJsKeFsUzDvopKMi4NAJO5OtwTSQWXy61jjDbjEPQ7hx3P68_9C4ZMEz2-pdzKZLYZsD1nEDUXTlHwdwurQ7VupMbvBCyzmkxF7T0QdlKAlhl9MEvqoM0tkFEIPOPTz0MuiEMSqTLNcVPYEs-QtIpf61DUREGtxzYdMgNDq4oqEEKvUhBoXDNfbKzH5jos5D51vwr8TVysAhuancio4QiDQ2-X9BTGSo_qOCgX_MPZ_guay_53UJ9OK11CuMnMfqvHIXVOuCmJPAH9mxb_BhaYuU3Q7DnXaD5yLz6f5czTN98Kwm6RJ5KBxFKuaqrq7pDChaIcqJPMekEyN-h2ynDGaTOXT1InML9cVvxLVFmV8ugk.qWe513Vq_wgyx8lp36E8rQ"
 *                        IdToken:
 *                          type: string
 *                          example: "eyJraWQiOiJKQ3NsXC9DQlR4MEZoMWVHbGJCVjFDcXVcL1NXaCs0OEtkTStZemJYUEVJQjQ9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJhY2UwYjAzYy0xYTA3LTRmY2QtOGE3OC1lNGE0ZTJlYTBlZjkiLCJiaXJ0aGRhdGUiOiIyMi0xMS0xOTk5IiwiZ2VuZGVyIjoibWFsZSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xXzBEUXppTDZUaCIsImN1c3RvbTphZHZpc2VyX2NvZGUiOiIwMDciLCJhdXRoX3RpbWUiOjE2NzAxMDE0NDgsImV4cCI6MTY3MDEwNTA0OCwiaWF0IjoxNjcwMTAxNDQ4LCJqdGkiOiI3NGMzNzE1ZS04Zjc2LTRkNjUtOTU2Mi05ZGQ4ODY0MzFhNDUiLCJlbWFpbCI6Im1pY2hhZWwucm9kcmlndWV6QGltYWdpbmVtb3MuY28iLCJjdXN0b206YWR2aXNlcl9pZCI6Ijc4MDI4ODk1IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByb2ZpbGUiOiIxIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwiY29nbml0bzp1c2VybmFtZSI6IjEyMzQwOTcyMDYiLCJjdXN0b206YWR2aXNlX2RvY3VtZW50IjoiNzgwMjg4OTUiLCJwaWN0dXJlIjoiaHR0cHM6XC9cL2ltYWdlcy5wZXhlbHMuY29tXC9waG90b3NcLzk5NjY1NzBcL3BleGVscy1waG90by05OTY2NTcwLmpwZWc_YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyNjAmaD03NTAmZHByPTEiLCJvcmlnaW5fanRpIjoiZDJhYjdhMzAtOGZkNy00OWVkLTg2NzktNzExZDViYTE1ZWZlIiwiYXVkIjoiMmswMDBxMnJwOTYxM2FuczZycWMyZ21vYTYiLCJldmVudF9pZCI6ImY3ZWYwMmU3LWZhMTEtNDRkMC1hYTVlLWYyN2MxMmU5NDEzMyIsInRva2VuX3VzZSI6ImlkIiwibmFtZSI6Ik1pY2hhZWwiLCJwaG9uZV9udW1iZXIiOiIrNTczMDIyNzIxMTE3IiwiZmFtaWx5X25hbWUiOiJSb2RyaWd1ZXoifQ.NJqGvDyNjLNMi74CHOqW70qOgZiexADhhasUN4VzFw3f6gXV1CHDCAirIMo6Kb7j2Hca47GGIqdDdz52c2E9Lg130W5Fuw-rC-we3ZQs6xAWquJfNc37JL5CKeZbE2HmG2RnxhLPk4FK_PRid-0Fe9Bp2LqICGmp64V_bf0idrEGGO1r5_xlcRfBzquSbe5SEN87p3H-bPpQaehbcFeC_Nx6lsVGf0pgazn3nm2GJz6GHXcrM4-a2dnSu9Ya2uAXBuMWerHjOIk_4gA4ROsELp29ybXQoSqR0OEqIfYGqr2I_EpKuu0DKb09C6IOBThlCAqA23aCNbtNZMtl8VKwBA"
 *      '400':
 *        description: failfull operation
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: false
 *                statusCode: 
 *                  type: string 
 *                  example: "40001"
 *                message:
 *                  type: string
 *                  example: "Incorrect username or password."
 */
router.post('/signin', signIn)


//-------------------------------/get-user
/**
 * @openapi
 * /api/auth/keycloak/get-user:
 *  post:
 *    tags:
 *      - AUTH
 *    summary: Get information with token
 *    description: the token access valite can return information of the account
 *    requestBody:
 *      description: the token to recive this route you can take it un signin
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              accessToken: 
 *                type: string
 *                example: 'eyJraWQiOiJYWk5kWE1rbHV4UWhJcHdhanZYQWhTMHBEd3Jxb3R3VDhuXC9MVjkyNDJKdz0iLCJhbGciOiJSUzI1NiJ-2.eyJzdWIiOiJhY2UwYjAzYy0xYTA3LTRmY2QtOGE3OC1lNGE0ZTJlYTBlZjkiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV8wRFF6aUw2VGgiLCJjbGllbnRfaWQiOiIyazAwMHEycnA5NjEzYW5zNnJxYzJnbW9hNiIsIm9yaWdpbl9qdGkiOiIxOTgxZWQ0Zi0yOWJjLTQ3OTctYWZiNy1jMzIxMDFkMzE3N2IiLCJldmVudF9pZCI6IjQyNTZlN2Y5LTE4ZDktNGU5Zi1hMTUyLWZlOGI4MDhkMTQ0ZCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2Njk2NzMwODAsImV4cCI6MTY2OTY3NjY4MCwiaWF0IjoxNjY5NjczMDgwLCJqdGkiOiI5NmY2NDRhNS1hNDVjLTQxY2UtYmI0ZS04ZDFjMjliNTk0ODgiLCJ1c2VybmFtZSI6IjEyMzQwOTcyMDYifQ.r75N0FVEn8XUugQvL_gGZcLgUqlZN78bhopp9J48oSTBocpmn5PeyKAmtAYLmzHRxk6ElYGh9qCCrUoOVEXnHS2goAMuYcP8BuVoAw7zlVNOJ4wh6Z_4r4yhaABFYUfGokvS1Uz9VBiRg56JzgKHK2QLx_rryeTBtZg8TEYA6HjU-sJg-ibu9hUCsPegxg_kNzX483eso0u0fhvAFKmGNtr0aOCotvOzgj-VSYZOXo6_7L4Ndc0yyO0KkLRp7AmA3wKC8X_ivcOZiTskMYHYqGZO-h1n19FDAL4ZF2VVS5Bx9YgO4TDh1vI7lyGDzrSpBtdNu2AZEoy8gDxY8ptzRQ'
 *      required: true
 *    responses:
 *      '200':
 *        description: Successful peticion
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                message:
 *                  type: string
 *                  example: "Sign in successfully"
 *                StatusCode:
 *                  type: string
 *                  example: 20000
 *                data:
 *                  type: object
 *                  properties:
 *                    ChallengeParameters:
 *                      type: object
 *                    AuthenticationResult:
 *                      type: object
 *                      properties:
 *                        success:
 *                          type: boolean
 *                          example: true
 *                        message:
 *                          type: string
 *                          example: "User obtained successfully"
 *                        StatusCode:
 *                          type: string
 *                          exmaple: "20000"
 *                        data: 
 *                          type: object
 *                          properties:
 *                            Username:
 *                              type: string
 *                              example: "10018187238"
 *                            UserAttributes:
 *                              type: array
 *                              example: ' [{"Name": "custom:adviser_id","Value": "206"},{"Name": "sub","Value": "192076a8-09fe-46b6-8e03-87ffdff9c618"},{"Name": "birthdate","Value": "30-09-2002"},{"Name": "email_verified","Value": "true"},{"Name": "gender","Value": "male"},{"Name": "profile","Value": "1"},{"Name": "phone_number_verified","Value": "false"},{"Name": "picture","Value": "https://pbs.twimg.com/profile_images/1569374895456272384/sxGNulEa_400x400.jpg"},{"Name": "custom:advise_document","Value": "1052957192"},{"Name": "custom:adviser_code","Value": "006"},{"Name": "name","Value": "bros"},{"Name": "phone_number","Value": "+573045715763"},{"Name": "family_name","Value": "mario"},{"Name": "email","Value": "carlos.vergel@imaginemos.co"}]'
 *      '400':
 *        description: Successful operation
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: false
 *                statusCode: 
 *                  type: string 
 *                  example: "40001"
 *                message:
 *                  type: string
 *                  example: "Access Token has expired"
 */
router.post('/get-user', getUser)


//-------------------------------/get-user
/**
 * @openapi
 * /api/auth/keycloak/get-user-all-info:
 *  post:
 *    tags:
 *      - AUTH
 *    summary: Get information with token
 *    description: the token access valite can return information of the account
 *    requestBody:
 *      description: the token to recive this route you can take it un signin
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              accessToken: 
 *                type: string
 *                example: 'eyJraWQiOiJYWk5kWE1rbHV4UWhJcHdhanZYQWhTMHBEd3Jxb3R3VDhuXC9MVjkyNDJKdz0iLCJhbGciOiJSUzI1NiJ-2.eyJzdWIiOiJhY2UwYjAzYy0xYTA3LTRmY2QtOGE3OC1lNGE0ZTJlYTBlZjkiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV8wRFF6aUw2VGgiLCJjbGllbnRfaWQiOiIyazAwMHEycnA5NjEzYW5zNnJxYzJnbW9hNiIsIm9yaWdpbl9qdGkiOiIxOTgxZWQ0Zi0yOWJjLTQ3OTctYWZiNy1jMzIxMDFkMzE3N2IiLCJldmVudF9pZCI6IjQyNTZlN2Y5LTE4ZDktNGU5Zi1hMTUyLWZlOGI4MDhkMTQ0ZCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2Njk2NzMwODAsImV4cCI6MTY2OTY3NjY4MCwiaWF0IjoxNjY5NjczMDgwLCJqdGkiOiI5NmY2NDRhNS1hNDVjLTQxY2UtYmI0ZS04ZDFjMjliNTk0ODgiLCJ1c2VybmFtZSI6IjEyMzQwOTcyMDYifQ.r75N0FVEn8XUugQvL_gGZcLgUqlZN78bhopp9J48oSTBocpmn5PeyKAmtAYLmzHRxk6ElYGh9qCCrUoOVEXnHS2goAMuYcP8BuVoAw7zlVNOJ4wh6Z_4r4yhaABFYUfGokvS1Uz9VBiRg56JzgKHK2QLx_rryeTBtZg8TEYA6HjU-sJg-ibu9hUCsPegxg_kNzX483eso0u0fhvAFKmGNtr0aOCotvOzgj-VSYZOXo6_7L4Ndc0yyO0KkLRp7AmA3wKC8X_ivcOZiTskMYHYqGZO-h1n19FDAL4ZF2VVS5Bx9YgO4TDh1vI7lyGDzrSpBtdNu2AZEoy8gDxY8ptzRQ'
 *      required: true
 *    responses:
 *      '200':
 *        description: Successful peticion
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                message:
 *                  type: string
 *                  example: "Sign in successfully"
 *                StatusCode:
 *                  type: string
 *                  example: 20000
 *                data:
 *                  type: object
 *                  properties:
 *                    ChallengeParameters:
 *                      type: object
 *                    AuthenticationResult:
 *                      type: object
 *                      properties:
 *                        success:
 *                          type: boolean
 *                          example: true
 *                        message:
 *                          type: string
 *                          example: "User obtained successfully"
 *                        StatusCode:
 *                          type: string
 *                          exmaple: "20000"
 *                        data: 
 *                          type: object
 *                          properties:
 *                            Username:
 *                              type: string
 *                              example: "10018187238"
 *                            UserAttributes:
 *                              type: array
 *                              example: ' [{"Name": "custom:adviser_id","Value": "206"},{"Name": "sub","Value": "192076a8-09fe-46b6-8e03-87ffdff9c618"},{"Name": "birthdate","Value": "30-09-2002"},{"Name": "email_verified","Value": "true"},{"Name": "gender","Value": "male"},{"Name": "profile","Value": "1"},{"Name": "phone_number_verified","Value": "false"},{"Name": "picture","Value": "https://pbs.twimg.com/profile_images/1569374895456272384/sxGNulEa_400x400.jpg"},{"Name": "custom:advise_document","Value": "1052957192"},{"Name": "custom:adviser_code","Value": "006"},{"Name": "name","Value": "bros"},{"Name": "phone_number","Value": "+573045715763"},{"Name": "family_name","Value": "mario"},{"Name": "email","Value": "carlos.vergel@imaginemos.co"}]'
 *      '400':
 *        description: Successful operation
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: false
 *                statusCode: 
 *                  type: string 
 *                  example: "40001"
 *                message:
 *                  type: string
 *                  example: "Access Token has expired"
 */
router.post('/get-user-all-info', getUserAllInfo)

//-------------------------------/refresh-token
/**
 * @openapi
 * /api/auth/keycloak/refresh-token:
 *  post:
 *    tags:
 *      - AUTH
 *    summary: refresh token to access
 *    description: for security and other reassons you can 're-make' a token
 *    requestBody:
 *      description: the token to recive this route you can take it un signin
 *      content:
 *        application/json:
 *         schema:
 *          type: object
 *          properties:
 *            refreshToken: 
 *              type: string
 *              example:  'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.g67UNM0ZJb4warZpXIGR1K5FGFNCUzAJ7VAmhoHx3LVQnlSg6_aajqWsjSeOOatY2MFUkgSPY0qzltIaWa2LBQXYyhkosey-GL6LioYhXOiCCJZLKlHqL3ih0IC9leExBFwqT0SetLR6b0IfxaIOup9Jaa_0zHDWCsYU_6T-IhdQZ7OJNGNWKe2X02BNcbtpq_Y76mdbZzCLYKV_X0du1X35yGrGlCt0DQ2pfKAjblD46G2UFnuBoj4yx3hz6dGf25M3SCQv6nHOeuaDRnyEeGBBHII9nZbgC32StATy5gKGI0SoVPmN6qZVlkau0aPCMmgXF3unvREBW6c-n3hWww.50A3OvK3CyZXI9Yu.-Qp4yNxtclEkcN2BEHiRr8CgqB_GVDnJ1SG73qaN-vYXz8PvSd1MK89CjY9-9iw3_9pmLBk2lei8sAsdlJXvR4_nze5TZJs_XIVkRtvJcKXG8_oUILSddChoxDpNAjX3UwHgGkWnuajhnYnVsJPuq_HNS_RlPAB2g_J_Y8JLKGEg5KdZOA8zkNU5Z41qwPxeabMvRbVbMW03_7y3WKmo3JfIhDtn2iKm1Es_X_srHFieYv0aa7x_Nz-rDjC-qr9ppzC2a2jsfkxVG4ur66d7FP1pgKpDw20_KfUYOVaVxtaovzKAM6v9yMYk1BM5gcr0rgoGKFMqUPJryI6eDakyweyt7FjcJc2pGujm15jfyR_ISCqL8oPhAhCNGNQ0La_2ojjqjd1Xlh-xmgslm25tr4hj6L-IrpS5EbXWKvEMAT5cRs58CKTqH_VnaVLc9cXny92MKsRH1Jw2uhIyYZEZvdD_5AzSTiyMRL0_4XRUYGC86ZYKV6kn_TNmsYd2vLF8o-qYsQnP8ipmPLXAHj0OTd-zsPe03Lg0PUu0W1LLzCxtn1rh-AiXByTU-Xv7TovpcPFXx-8T2g7rVc42Ztu75fvzpFvE521APUj7e_igUyYDt8d3pQmL8ddTJYY081dWavIDUHr4PQYKB9WCz2Oph_nxX2x-U6bqomMIEEFIVC3AtGo6mHVQ7zikf1hKzNkjnLTULeCB8XE7GpK8oKvCN-ap3NWHYp9QQKbmqq7-LUT6DMi8k_Gtp4-MCFeE6DztTK6A8EXSkgiXxZf0Mw-I5ad8901_R66IGBCBKYIvE_LtX4AnxLmYOMJJzl59Tmz9GH_UskSu3zK7bYNIC4b4rU3ShjADLDBWHmQaG-XSimJJCI8fRLYOuvgoHeBeHX36VesUTJ5q_pg7JiEzrU-G12-L0SQgTpuWmCxeLf81NiWHKdCl5v423Uyb7OUeBB01EDh5f9BjHnw6Nn6w6rXsf69_VLAI1u0hqOZf30mAkrCQ0zIekxLHMvlJ0rnc-eSCT2jFW5qIBdWgfj166k3xIuhXC3PdIXPUfM_jMG9_l3sZnojHY8A-fwjqMPLBEbH0gh57IsEUt30kGHUd4fylzJ_vN5gZWt8iqxMHjY8pRJ3Q1q_8Jw7vuXywRGWHz7vZoXtw8UX-dYMeXcoyjX2psEgslglZO1ZKD0wAvWn6Pw4sfX3UQ3RKNo-sQlwiF1zDJKiOYvEHVJFvhnPDivmxkVphRYq7deUpK7G2tBrc55guBJAjmleMXTYKaIgtMMrFUFfWxUGKdnH9Ag.QYWKHxINqio1l4-YjNvf-w'
 *              
 *      required: true
 *    responses:
 *      '200':
 *       description: Successful peticion
 *       content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                message:
 *                  type: string
 *                  example: "Sign in successfully"
 *                StatusCode:
 *                  type: string
 *                  example: 20000
 *                data:
 *                  type: object
 *                  properties:
 *                    ChallengeParameters:
 *                      type: object
 *                    AuthenticationResult:
 *                      type: object
 *                      properties:
 *                        AccessToken:
 *                          type: string
 *                          example:  "eyJraWQiOiJYWk5kWE1rbHV4UWhJcHdhanZYQWhTMHBEd3Jxb3R3VDhuXC9MVjkyNDJKdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhY2UwYjAzYy0xYTA3LTRmY2QtOGE3OC1lNGE0ZTJlYTBlZjkiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV8wRFF6aUw2VGgiLCJjbGllbnRfaWQiOiIyazAwMHEycnA5NjEzYW5zNnJxYzJnbW9hNiIsIm9yaWdpbl9qdGkiOiJkMmFiN2EzMC04ZmQ3LTQ5ZWQtODY3OS03MTFkNWJhMTVlZmUiLCJldmVudF9pZCI6ImY3ZWYwMmU3LWZhMTEtNDRkMC1hYTVlLWYyN2MxMmU5NDEzMyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NzAxMDE0NDgsImV4cCI6MTY3MDEwNTA0OCwiaWF0IjoxNjcwMTAxNDQ4LCJqdGkiOiIyZmI0ZTI5MS0xNmMyLTQ1YzgtYjkyNy00YzBmYmI5ODIxMjkiLCJ1c2VybmFtZSI6IjEyMzQwOTcyMDYifQ.mq1AHVua8YfGgSosAHIsApilOnYN4U-eLi9Uj3GGjIUGRUybW4yaqjQAEVqmCHBZo5EbBoebj2V6B1QJp204m1pVMdQiCgCiQDTuCvytLIWvIJhMfri41LlnHOk3nsL0X7y6gFDSVQFzHHdR5orxyzN70tIxFfdU6uTzfaSei3zcEIkptVU4-PzEs5yKcesTY-AFbI3suyCIaGm0nNp3nnUZN7GdGNq9ypyK08NCO_rUHJFpkFdF2v1GksPT3Ra-T4ZkJ9lEbEu4_UCjvWQZbFgEcMgaYALtYkQ74Uy1VzAtpn7yPndnJWqMH8yGv3wRwGBUda0yNjPUHty7sp7mqg"
 *                        ExpiresIn: 
 *                          type: integer
 *                          example: 3600
 *                        TokenType:
 *                          type: string
 *                          example: "Bearer"
 *                        RefreshToken:
 *                          type: string
 *                          example:  "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.OIgXS5jGWGOkrd0wU_uyV1H_b3rDeWXb3zWNvoZZRM-S51slbZKK49BHMP3krmBqZPABhuyGBiu04vpBfiCJZLodM_VlweUIe7Oyp5EmH5kLoaePGJimwQ2f2zPgZC-cfIEqdngMjgbHNZh9svLETBjuclsUbQKn5CdJoxh6DfET_2spGnmVEF2yeSzot5jet-cuXcHzLd98eijHS-lV8uGC0j8zVY6oaFZejYzBv6qjEWZo4noCglN4Qt-D63i6ouQKCBzlioLRzl6GEge4cec79Yy_J0Vtn8mf_UD4x7r-vnWq4dR1lbG2J664APy2UbWsBYaLqfdq8gbKIt0QhA.FMd8_kbthfEkAjVK.9S8UkrpHdbPZhQB3D7nyoVD0S45I8kz_aXshyT7HRyoDiKx_UU0egPlrp5pS_NFt6QNkJDlM72WKyC9Mu0hOZHOLkBMI7z3jThL-L53DWe_7XQuzQOoledEgpSQIODB1P72tjI-MtUzDYbeiMHTtjcoQ2KMC-AWxpkATv4IAsFCteWKfSCmUOlIlOEfNYbsGWcZzc43WV_3QAgrhX-5ca2zoFbMFFCOPdJQ750pfx_5IDarV8F4Hctr81pPksN7XCmHMFOWZslRVi8xRc3fqmwv_ZRZI08RDtrow3X23cSpgFjDqjO17hGYGLPntUeE2asQNNnkzOX3pETt20l1ORoMZW_0HYWzQpHuKsG3Hfm32JfLFIai0h3teohs_HF2GU3mHRaUQr0dF1SSTNv7AlWCfdg9nn-qKcbXjQoSN-1Y58cXh-HsmN_yc0KMjshJbsn1Us5Q5g6H5BthvkvIFbmfLt7uOMKXUX5QhZpW7rhhc_tLYDHQ0l7tPym3tfgw4uULJGKYqDBk43fhaFq7m_W_uyCPg389zuKOS7rpDeSUW-oZSn7PtoxmBgphPnM_vNxQqkYm3ncHTVvtMM2CYN1lrGtbGbcGVQxxXJ5xw6185zrph1LCJmUc71CzTS5Mw6ss1oVzQf-DzhVwQADemaTeqMUynpYnFIJPknIU6SquY2STD3_IE0RRjaI54b5lvTKdcKzFVMqQpFOt-DnOii8WWE1324Wd-zmNO40Ck4njI0pKrdcPukvb1FjHHv-A1QUbqlgLDz2qR2rvD2vkhz-f3t-p01gFlg3mT1ZKET3tvpDf8fVykWp0ALeYlknqCkwRe1W38wozYcu5hiLzOzhMoxkbdnX31ter3Z8iDVK1fK-jUBKQSrpnrBaV7-jqp0WvagqVCkBKgTSenuz4q3eZL-hKZtTEJsKeFsUzDvopKMi4NAJO5OtwTSQWXy61jjDbjEPQ7hx3P68_9C4ZMEz2-pdzKZLYZsD1nEDUXTlHwdwurQ7VupMbvBCyzmkxF7T0QdlKAlhl9MEvqoM0tkFEIPOPTz0MuiEMSqTLNcVPYEs-QtIpf61DUREGtxzYdMgNDq4oqEEKvUhBoXDNfbKzH5jos5D51vwr8TVysAhuancio4QiDQ2-X9BTGSo_qOCgX_MPZ_guay_53UJ9OK11CuMnMfqvHIXVOuCmJPAH9mxb_BhaYuU3Q7DnXaD5yLz6f5czTN98Kwm6RJ5KBxFKuaqrq7pDChaIcqJPMekEyN-h2ynDGaTOXT1InML9cVvxLVFmV8ugk.qWe513Vq_wgyx8lp36E8rQ"
 *                        IdToken:
 *                          type: string
 *                          example: "eyJraWQiOiJKQ3NsXC9DQlR4MEZoMWVHbGJCVjFDcXVcL1NXaCs0OEtkTStZemJYUEVJQjQ9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJhY2UwYjAzYy0xYTA3LTRmY2QtOGE3OC1lNGE0ZTJlYTBlZjkiLCJiaXJ0aGRhdGUiOiIyMi0xMS0xOTk5IiwiZ2VuZGVyIjoibWFsZSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xXzBEUXppTDZUaCIsImN1c3RvbTphZHZpc2VyX2NvZGUiOiIwMDciLCJhdXRoX3RpbWUiOjE2NzAxMDE0NDgsImV4cCI6MTY3MDEwNTA0OCwiaWF0IjoxNjcwMTAxNDQ4LCJqdGkiOiI3NGMzNzE1ZS04Zjc2LTRkNjUtOTU2Mi05ZGQ4ODY0MzFhNDUiLCJlbWFpbCI6Im1pY2hhZWwucm9kcmlndWV6QGltYWdpbmVtb3MuY28iLCJjdXN0b206YWR2aXNlcl9pZCI6Ijc4MDI4ODk1IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByb2ZpbGUiOiIxIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwiY29nbml0bzp1c2VybmFtZSI6IjEyMzQwOTcyMDYiLCJjdXN0b206YWR2aXNlX2RvY3VtZW50IjoiNzgwMjg4OTUiLCJwaWN0dXJlIjoiaHR0cHM6XC9cL2ltYWdlcy5wZXhlbHMuY29tXC9waG90b3NcLzk5NjY1NzBcL3BleGVscy1waG90by05OTY2NTcwLmpwZWc_YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyNjAmaD03NTAmZHByPTEiLCJvcmlnaW5fanRpIjoiZDJhYjdhMzAtOGZkNy00OWVkLTg2NzktNzExZDViYTE1ZWZlIiwiYXVkIjoiMmswMDBxMnJwOTYxM2FuczZycWMyZ21vYTYiLCJldmVudF9pZCI6ImY3ZWYwMmU3LWZhMTEtNDRkMC1hYTVlLWYyN2MxMmU5NDEzMyIsInRva2VuX3VzZSI6ImlkIiwibmFtZSI6Ik1pY2hhZWwiLCJwaG9uZV9udW1iZXIiOiIrNTczMDIyNzIxMTE3IiwiZmFtaWx5X25hbWUiOiJSb2RyaWd1ZXoifQ.NJqGvDyNjLNMi74CHOqW70qOgZiexADhhasUN4VzFw3f6gXV1CHDCAirIMo6Kb7j2Hca47GGIqdDdz52c2E9Lg130W5Fuw-rC-we3ZQs6xAWquJfNc37JL5CKeZbE2HmG2RnxhLPk4FK_PRid-0Fe9Bp2LqICGmp64V_bf0idrEGGO1r5_xlcRfBzquSbe5SEN87p3H-bPpQaehbcFeC_Nx6lsVGf0pgazn3nm2GJz6GHXcrM4-a2dnSu9Ya2uAXBuMWerHjOIk_4gA4ROsELp29ybXQoSqR0OEqIfYGqr2I_EpKuu0DKb09C6IOBThlCAqA23aCNbtNZMtl8VKwBA"
 *             
 *      '400':
 *        description: Successful operation
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: false
 *                statusCode: 
 *                  type: string 
 *                  example: "40001"
 *                message:
 *                  type: string
 *                  example: "Invalid Refresh Token"
 */
router.post('/refresh-token', refreshToken)

//-------------------------------/revoke-token
/**
 * @openapi
 * /api/auth/keycloak/revoke-token:
 *  post:
 *    tags:
 *      - AUTH
 *    summary: Signout token
 *    description: for signout the account in all machines were you are logenin
 *    requestBody:
 *      description: the token to recive this route you can take it un signin
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              access_token: 
 *                type: string 
 *                example:  'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.mq0_XNOiH821tACnUf4-yZGnOCJVrvCUrtxNc926672MmyloKYiOGdZTLM608r_kk7_Lo7xh8iFFxlpwS3iBYEF7VV6g5-kuvh8aWpqKJKOrzhOeTMLCI5xTmvLu62ptk_zXYOM0sIadxBtTerJtLoXAE5bRUdGj024SrI59Rotc0AXmXK3UQc5rnJAgc7v94X7P9H3b5J_EXv1XP3tuEJjtopgJbVxEiMinFool6CqNCWTMNUiVhE5QMA2HuJdViA9aHViuquNWHzOQVOL-t2u5oKq-7lECM__eyFnXrTA-aAsky1aGYW3_wOw0-3qgDIr1ckp2fdRftItD-OeYrA.yXCL99hVtL6Zzf3l.6rKZxGv096vzOAxHk-prKQhsrBlJK50CqSZ3hCyPdBPNYoK9EVXRFucSTrxvW3XuzOB4yr4cMqQtJWDEV9LXJOmdUxkcIbtHUC5QTcZfYsMySNKDHLagjmofDBXibRNDS2mRnT1iatFEjRYruk4TuyJOIW2rFrrplGaut8-I7u3HrAPIGlY2xEOG9yttd8L2y13DEmhyE32LP_lHynBV8I-kgG084KxF0x6KyC4TTLUeNqcztiDDY2a-v01Ly7etDgqlLcNY6HGmaPwbpvqicTNT15lDR5rbILzn_S8snNtEBiJ0065CioxujX6JJCegWPWjkWYoHJD_UbM61nzjJyOStFikJWiybrSCTYTyuuJmX3qY7YwnK48jOdbwudcaHHLsp7iIa2j34SF4iSKY2I9cPRaJKzIe8Nbn-iH2L0fVQD7jtP_1XWiBVWBcnnsNPAQEyRF6upYDTGLNuDf5aYkvkoTtB-ke5VAiJBM98sOQ9K-FhvxgFRCqplmIAQ4e9hQo39NJPdJxwg-i8yAWNY8SXfCy-jyuTIZ2dZBkwjwZltNS04qA_fQGhHYWlCLYt0edleGP1XTQhSK9p1FEdFZ6lrHA5G5ErjJjU7VWcOe5LuMJ_Mxt2Bf5BI19PyxqmRtCVrMdrJJGTgeILNXCpte4px1e5kuOAE0ZwiE1K2hq7RI1Z-Pud5UgNqXWAWVNbcLLAkfATY9T8YM1nIfrw0dQiX-EiNfLEcoBwmKdxHl9zVW0-_mFjTGOINwvihCUcx8GP43ClA_giTQCNI9qz8huSzPJ0uNO9PgHvN15WJd25kPLvz3wjVr-CWXoWRSJlUEHuJV2BM3T8D7RNnLwojGYYvNTxt4074Z76KETtV76PATbYOehmuFwt26BtGcqXbl6mePtxiU1nWpv9HoC9-GAVph5g1iG4UQa1NeJDorTRaOazQrAXFvlCg5a1c79HIs6htGJzSCxRdgokeWufiHOOJV1u1SijK7F_y-ZqA-4PS6LyBjCFFG-feQt_GfMW9rAekiH8pwhjtLXvchFCJhXVrbSGkiv4meZ9t19xv4lMJXcJ7WUjWGOfE7n0TSOKIHt6rWz0JgiMjlC_C2h02upL4nOlaiBvnI_LaMIqPZYSOTpyWQVP2FXH1xg2BAJZr8YZPzctHcUXBSlk9pPcNci-E3e1RfweyLcfKeWBvDmLDh69u5ttFrlnKHrQEl8vPllYVDB33COdTD806nrW1hTg4TW1EAHyHrJW7Ri3hrtMcrKSnilWWDk6XVZv5jN4M1gzRCGi6wXzQ.QHOYnMkRuEcLU6oEqSLfhQ'
 *                
 *      required: true
 *    responses:
 *      '200':
 *        description: Successful peticion
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                message:
 *                  type: string
 *                  example: "token Revoked"
 *                StatusCode:
 *                  type: string
 *                  example: 20000
 */
router.post('/revoke-token', revokeToken)

/**
 * @openapi
 * /api/auth/keycloak/register:
 *  post:
 *    tags:
 *      - AUTH
 *    summary: Creates a new student.
 *    description: Update an existing pet by Id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: example@gmail.com
 *              username:
 *                type: string
 *                example: 10018187238
 *              password:
 *                type: string
 *                example: password12#
 *    responses:
 *      '200':
 *        description: Successful peticion
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                message:
 *                  type: string
 *                  example: "token Revoked"
 *                StatusCode:
 *                  type: string
 *                  example: 20000
 */
router.post('/register', register)


/**
 * @openapi
 * /api/auth/keycloak/confirmEmail/{id}:
 *  get:
 *    tags:
 *      - AUTH
 *    summary: Creates a new student.
 *    description: Update an existing pet by Id
 *    parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            example: jdfuhuisf-ruj8ubfda
 *            type: string
 *    responses:
 *      '200':
 *        description: Successful peticion
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                message:
 *                  type: string
 *                  example: "token Revoked"
 *                StatusCode:
 *                  type: string
 *                  example: 20000
 */
router.get('/confirmEmail/:id', confirmEmail)


export default router