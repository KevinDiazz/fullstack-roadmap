/* Objetivo del proyecto
Construir una pequeña aplicación que gestione usuarios.
 */
import { users } from "./models.js";
import { renderUser } from "./functions.js";
import "./events.js";
const app = document.querySelector("#app");
console.log(app);
renderUser(users);
