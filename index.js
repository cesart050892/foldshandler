/**
 * @fileoverview    Buscador de subcarpetas para Discord.JS
 * @version         1.0.3
 * @author          Cesar Augusto Tapia<cesart050892@gmail.com>
 * @copyright       https:www.github.com/cesart050892
 *
 * History
 * v1.1 – Primera versión escrita por Cesar Augusto Tapia @cesart050892
 */

const fs = require("fs");

/**
 * Funcion para Discord.JS - Subcarpetas
 * @github cesart050892
 * @param {string} root Dirección de la carpeta a analizar
 * @descriptor Lectura de todos los archivos de todas las subcarpetas
 */
module.exports = function (root) {
  let folders = fs.readdirSync(`${root}`);
  let path = [];
  let obj = [];
  for (const folder of folders) {
    let vfiles = fs.statSync(`${root}/${folder}`);
    if (vfiles.isDirectory()) {
      const files = fs.readdirSync(`${root}/${folder}`);
      for (const file of files) {
        path.push({
          name: `${file.substr(0, file.length - 3)}`,
          folder: `${folder}`,
          relative: `${root}/${folder}/${file}`,
        });
      }
    }
  }
  for (const specific of path) {
    obj.push(require("../../" + specific.relative));
  }
  // return { path: path, instance: obj }
  return obj;
};