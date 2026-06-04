/* Objetivo del proyecto
Construir una pequeña aplicación que gestione usuarios.
-----------------------------------------------
requisitos del ejercicio:
Render dinámico
Event Delegation
Delete user
Active/Inactive
createElement
appendChild
classList
dataset
Tipado TS
Re-renderizado
 */
import { users } from "./models.js";
import { renderUser } from "./functions.js";
import "./events.js";
const app = document.querySelector("#app") as HTMLDivElement;
console.log(app);
renderUser(users);
