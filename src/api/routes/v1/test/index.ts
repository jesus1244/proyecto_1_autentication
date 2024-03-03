import { Request, Response, Router, RequestHandler } from 'express'

import { SuccessOkResponse, InternalError } from '../../../../helpers/api.response'
import schema from './schema'
import { testService } from "../../../../services";
import { prueba } from '../../../../helpers/prueba';

const router = Router()

const test: RequestHandler = async (req: Request, res: Response) => {
  try {
    SuccessOkResponse(res, 'Test successfully', { success: true, test: req.body.test })
  } catch {
    InternalError(res)
  }
}

router.get('/', test)
router.post('/', test)

export default router