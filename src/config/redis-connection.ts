// import Logger from '../helpers/logger';
// import colors from "colors";
// import { createClient } from 'redis';
// import { redisUri } from '.';


// export const clientRedis = createClient({ url: redisUri })

// const connectToRedis = async () => {
//   const connect = () => {
//     clientRedis.connect().then(() => {
//       return Logger.info(colors.bold.green(`Successfully connected to Redis`));
//     }).catch((error :any) => {
//       Logger.error(colors.red('Error connecting to database: Redis'), error)
//       return process.exit(1);
//     });
//   };
//   connect();
//   clientRedis.on('error', (err:any) => {
//     console.log('Error ' + err);
//     connect()
//   });
// };

// export default connectToRedis