import express, { Request, Response, Application, NextFunction } from 'express'
import colors from 'colors'
import cors from 'cors'
import { BadRequestError, NotFoundError, PayloadTooLargeError } from '../helpers/api.response'
import { api, corsUrl } from '../config'
import routesV1 from '../api/routes/v1'
import Logger from '../helpers/logger'
import { ERROR_HANDLERS } from '../interfaces/server.interfaces'

export default (): Application => {
    const app = express()

    // Enable Cross Origin Resource Sharing to all origins by default
    // app.use(cors({ origin: corsUrl, optionsSuccessStatus: 200 }))
    app.use(cors())
    app.set('trust proxy', true);

    // validate status
    app.get('/api/auth/keycloak', (_req, res) => {
        res.status(200).end()
    })

    // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
    // It shows the real origin IP in the heroku or Cloudwatch logs
    app.enable('trust proxy')

    // Middleware that transforms the raw string of req.body into json
    app.use(express.json({ limit: '50mb' }))
    app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }))

    

    // Load API route
    app.use('/api/auth/keycloak', routesV1)

    // catch 404 and forward to error handler
    app.use((_req: Request, res: Response) => NotFoundError(res))

    // error handlers
    app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
        console.log('error =>', err)
        if (err !== undefined) {
            switch (err.type) {
                case ERROR_HANDLERS.SYNTAX_ERROR:
                    BadRequestError(res, 'SyntaxError')
                    break
                case ERROR_HANDLERS.PAYLOAD_TOO_LARGE:
                    PayloadTooLargeError(res)
                    break
                default:
                    BadRequestError(res)
                    Logger.error(colors.red('error handlers'), err)
                    break
            }
            return
        }
        next()
    })

    return app
}