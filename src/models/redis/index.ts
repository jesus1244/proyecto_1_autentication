// import { clientRedis } from '../../config/redis-connection';

// const redisModel = {
//   setRedis: async (key: string, value: object) => {
//     const resp = await clientRedis.set(key, JSON.stringify(value))
//     return resp
//   },
//   getRedis: async (key: string) => {
//     const data = await clientRedis.get(key)
//     return data ? JSON.parse(data) : ''
//   },
//   getAllRedis: async (key: string) => {
//     const resp = await clientRedis.keys(key)
//     const resParse = await resp
//     return resParse
//   },
//   deletedRedis: async (key: string) => {
//     const resp = await clientRedis.del(key)
//     return resp
//   }
// }

// export default redisModel