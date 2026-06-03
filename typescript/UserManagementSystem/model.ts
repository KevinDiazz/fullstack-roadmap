import { AdminUserSystem, UserSystem } from "./interfaces";
let userUserSistema1: AdminUserSystem = {
  id: 1,
  name: "Kevin",
  email: "kevin@gmail.com",
  createdAt: new Date(),
  isActive: true,
  role: "admin",
  permissions: ["All"],
  status: "active",
};
let userUserSistema2: UserSystem = {
  id: 2,
  name: "Nerea",
  email: "nerea@gmail.com",
  createdAt: new Date(),
  isActive: true,
  role: "moderator",
  status: "active",
};
let userUserSistema3: UserSystem = {
  id: 3,
  name: "Juan",
  email: "juan@gmail.com",
  createdAt: new Date(),
  isActive: true,
  role: "userSystem",
  status: "active",
};

let userUserSistema4: UserSystem = {
  id: 4,
  name: "Monica",
  email: "monica@gmail.com",
  createdAt: new Date(),
  isActive: false,
  role: "userSystem",
  status: "active",
};

export const usersSystem: UserSystem[] = [
  userUserSistema1,
  userUserSistema2,
  userUserSistema3,
  userUserSistema4,
];

//Crear Recors
