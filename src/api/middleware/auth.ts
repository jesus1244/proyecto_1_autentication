import { Request, Response, NextFunction, RequestHandler, Router } from 'express'
import jwkToPem from 'jwk-to-pem';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { cognitoRegion, cognitoUserPoolId } from '../../config';
import { AuthFailureError } from '../../helpers/api.response';
import schema from './schema'
import validator, { ValidationSource } from './validator'

const router = Router()

let pems: { [key: string]: any } = {}

const setUp = async () => {
  const URL = `https://cognito-idp.${cognitoRegion}.amazonaws.com/${cognitoUserPoolId}/.well-known/jwks.json`;
  try {
    const { data, status }: any = await axios(URL);

    if (status !== 200) throw 'request not successful';

    const { keys } = data;
    for (let i = 0; i < keys.length; i++) {
      const key_id = keys[i].kid;
      const modulus = keys[i].n;
      const exponent = keys[i].e;
      const key_type = keys[i].kty;
      const jwk = { kty: key_type, n: modulus, e: exponent };
      const pem = jwkToPem(jwk);
      pems[key_id] = pem;
    }

  } catch (error) {
    console.log(error)
    console.log('Error! Unable to download JWKs');
  }
}

setUp()

const auth: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.get('Authorization') as string
    const [, token] = authHeader.split(' ')

    let decodedJwt: any = jwt.decode(token, { complete: true });

    if (decodedJwt === null) return AuthFailureError(res, 'Not a valid JWT token');

    let kid = decodedJwt.header.kid;
    let pem = pems[kid];

    jwt.verify(token, pem);
    next()
  } catch (error: any) {
    if (String(error).includes('invalid token')) return AuthFailureError(res, 'Token is not valid')
    if (String(error).includes('jwt expired')) return AuthFailureError(res, 'Token is expired')
    return AuthFailureError(res, error.message)
  }
}

router.use('/', validator(schema.headers, ValidationSource.HEADER), auth)

export default router