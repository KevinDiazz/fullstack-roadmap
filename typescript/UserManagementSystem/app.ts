/* Objetivo:
Construir una pequeña aplicación TypeScript para gestionar usuarios y roles.*/
import { usersSystem } from "./model";
import {
  getActiveUsers,
  findUserByEmail,
  getFirtsItem,
  createResponse,
  getProperty,
  updateUser,
  changeUserStatus,
  printUserInfo,
  getUserDictionary,
} from "./generics";

console.log(usersSystem);
console.log(getActiveUsers(usersSystem));
console.log(findUserByEmail(usersSystem, "juan@gmail.com"));
console.log(getFirtsItem(usersSystem));
console.log(createResponse(usersSystem[1]));
console.log(getProperty(usersSystem[1], "name"));
console.log(getProperty(usersSystem[1], "name"));
console.log(updateUser(usersSystem[0], { email: "Kevinnuevo@gmail.com" }));
console.log(changeUserStatus(usersSystem[0], "banned"));
console.log(printUserInfo(usersSystem[3]));
console.log(getUserDictionary(usersSystem));
