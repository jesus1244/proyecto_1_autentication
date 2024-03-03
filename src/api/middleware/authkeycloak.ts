import { Request, Response, NextFunction, RequestHandler, Router } from 'express'
import jwt from 'jsonwebtoken';

const router = Router()
const config = process.env;

const verifyToken :RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.decode(token, { complete: true });
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};
router.use('/', verifyToken)

export default router