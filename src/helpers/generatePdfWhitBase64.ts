import fs from 'fs'
const mkdirp = require('mkdirp');

function generatePdfWhithBase64 (base64: string, destiny: string, name: string) {
  return new Promise(async function (resolve, reject) {
    const PATH_TO_SAVE = `${__dirname}/public/${destiny}`
    const base64Data = base64.replace(/^data:application\/pdf;base64,/, "");
    await mkdirp(PATH_TO_SAVE);
    fs.writeFile(`${PATH_TO_SAVE}/${name}.pdf`, base64Data, 'base64', function (err: any) {
      if (!err) {
        resolve(PATH_TO_SAVE)
      }
      reject(err);
    });
  })
}

export default generatePdfWhithBase64