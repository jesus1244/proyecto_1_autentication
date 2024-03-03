import dotenv from 'dotenv'

dotenv.config()

// Mapper for environment variables
export const environment = process.env.NODE_ENV ?? ''
export const port = process.env.PORT ?? ''
export const name = process.env.NAME_API ?? ''
export const deployURL = process.env.URL_DEPLOY ?? ''
export const deployFront = process.env.DEPLOY_FRONT ?? 'https://www.google.com'


// configuracion de keycloak
export const keycloakRealm = process.env.KEYCLOK_REALM ?? ''
export const keycloakHost = process.env.KEYCLOKHOST ??''
export const keycloakCli = process.env.KEYCLOKCLI ?? ''
export const keycloakCliScopes = process.env.KEYCLOKCLISCOPE ?? 'sign-in-scope'
export const keycloakUsername = process.env.KEYCLOKUSERNAME ?? ''
export const keycloakPassword = process.env.KEYCLOKPASSWORD ?? ''
export const keycloakStudentRole = process.env.KEYCLOKSTUDENTROLE ?? '70c3deab-79d5-4861-97cf-23431689fb2b'
export const keycloak_port = process.env.KEYCLOK_PORT

// Configuración cognito
export const cognitoClientId = process.env.COGNITO_CLIENT_ID ?? ''
export const cognitoClientSecret = process.env.COGNITO_SECRET ?? ''
export const cognitoUserPoolId = process.env.COGNITO_USER_POOL_ID ?? ''
export const cognitoRegion = process.env.COGNITO_AWS_REGION ?? ''

// Configuración admin aws-sdk
export const accessKeyId = process.env.ACCESS_KEY_ID ?? ''
export const secretAccessKey = process.env.SECRET_ACCESS_KEY ?? ''

// Configuración SendEmail
export const mailAwsHost = process.env.MAIL_AWS_HOST ?? ''
export const mailAwsPort = process.env.MAIL_AWS_PORT ?? ''
export const mailAwsUser = process.env.MAIL_AWS_USER ?? ''
export const mailAwsPass = process.env.MAIL_AWS_PASS ?? ''
export const mailAwsFrom = process.env.MAIL_AWS_FROM ?? ''

// sms
export const urlApiSMS = process.env.URL_API_SMS ?? ''

// Configuración redis
const redisUser = process.env.REDIS_USER ?? ''
const redisPass = process.env.REDIS_PASSWORD ?? ''
const redisHost = process.env.REDIS_HOST ?? ''
const redisPort = process.env.REDIS_PORT ?? ''
export const redisUri = `redis://${encodeURIComponent(redisUser || '')}:${encodeURIComponent(redisPass || '')}@${redisHost}:${redisPort}`

// Configuración Postgres
export const pgUser = process.env.PG_USER ?? ''
export const pgPass = process.env.PG_PASSWORD ?? ''
export const pgHost = process.env.PG_HOST ?? ''
export const pgPort = process.env.PG_PORT ?? ''
export const pgDatabase = process.env.PG_DB ?? ''
export const pgUri = `postgres://${encodeURIComponent(pgUser || '')}:${encodeURIComponent(pgPass || '')}@${pgHost}:${pgPort}/${pgDatabase}`

export const corsUrl = process.env.CORS_URL ?? ''

export const api = { prefix: '/api/bff' }