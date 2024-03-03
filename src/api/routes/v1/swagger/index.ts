import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import {deployURL, environment, port} from '../../../../config'

const router = Router({ caseSensitive: true })

const swaggerExtention= environment == 'dev'?'*.ts' : '*.js'
const swaggerFolder= environment == 'dev'?'src' : 'dist'

console.log('swagger extention: ',swaggerExtention)
console.log('swagger folder: ', swaggerFolder)

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Authetication micro services',
        description:'_if you want to know the server is up, you can look [this](https://creditodigital-qa.turespaldo.co//api/bff/status). `status > 200 if it is up`_',
        version: '1.0.0',
      },
      servers: [
        {
          url: deployURL,
          description: 'deplay dev'
        },
        {
          url: `http://localhost:${port}`,
          description: 'local'
        },
      
      ]
    },
    //src/api/routes/v1/auth/*.ts
    
    apis: [`${swaggerFolder}/api/routes/v1/auth/${swaggerExtention}`, `${swaggerFolder}/api/routes/v1/otp/${swaggerExtention}`], // files containing annotations as above
  };
  
const openapiSpecification = swaggerJsdoc(options);

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(openapiSpecification));

export default router