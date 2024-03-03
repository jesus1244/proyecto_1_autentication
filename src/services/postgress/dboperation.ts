// import { Client } from 'pg';
// import { pgDatabase, pgHost, pgPass, pgUser } from '../../config';


// import Logger from '../../helpers/logger';
// import colors from "colors";
// //#region postgress
// // Configura los parámetros de conexión
// const connectionConfig = {
// user: pgUser,
// host: pgHost,
// database: pgDatabase,
// password: pgPass,
// port: 5432, // Puerto por defecto para PostgreSQL
// };

// // Crea una instancia del cliente
// const client = new Client(connectionConfig);

// export async function connectDB()
// {
//     // Conecta con la base de datos
//     await client.connect();
//     Logger.info(colors.bold.green('✨✨✨ Conectado a la base de datos de postgress ✨✨✨'))
// }

// export async function getAll() {
//     const queryvalidator = `SELECT *
// 	FROM public.students;`
//     try {
//         const result = await client.query(queryvalidator);
//         return result.rows;
//     } catch (error: any) {
//         console.log(error)
//         return;
//     }
// }
// // Función para realizar una consulta
// export async function insertStudents(params: any) {
//   const query = `INSERT INTO public.students(identification, name, lastname, email, birthdate, date_register) VALUES ('${params.username}', '${params.name}', '${params.lastname}', '${params.email}', '${params.birthdate}', '${params.dateISO}');`

//   try {
//     const result = await client.query(query);
//     return result;
// } catch (error: any) {
//     console.log(error)
//     return;
// }
// }
// export async function disconnectDB()
// {
//     // Cierra la conexión
//     await client.end();
// }
// connectDB();
// //#endregion