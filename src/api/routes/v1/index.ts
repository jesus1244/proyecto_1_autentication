import { Router } from 'express'

import test from './test'
import auth from './auth'
// import authMiddle from './../../middleware/auth';
import swagger from './swagger'
import verifyToken from './../../middleware/authkeycloak'
import admin from './auth/admin'
// import otp from './otp'

const router = Router({ caseSensitive: true })


// router.use('/test', authMiddle, test)
router.use('/swagger', swagger)
router.use('/test',  test)
// router.use('/otp', otp)
router.use('/', auth)
router.use('/',verifyToken, admin)

export default router