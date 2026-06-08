/* Objetivo : Usar Interface, tipados , arrays, generics, typeof, extends, Records , Partials , etc...
 */
interface UserBasic {
  readonly id: number;
  name: string;
  email: string;
  isActive: boolean;
  avatar?: string;
}

let userBasic1: UserBasic = {
  id: 1,
  name: "Kevin",
  email: "Kevin@gmail.com",
  isActive: true,
  avatar: "foto",
};
let userBasic2: UserBasic = {
  id: 2,
  name: "Nerea",
  email: "Nerea@gmail.com",
  isActive: true,
};
let userBasic3: UserBasic = {
  id: 3,
  name: "Juan",
  email: "Juan@gmail.com",
  isActive: false,
  avatar: "foto-Juan",
};

interface ProductBasic {
  id: number;
  title: string;
  price: number;
  stock: number;
}
let productBasic1: ProductBasic = { id: 1, title: "Tv", price: 200, stock: 10 };
let productBasic2: ProductBasic = {
  id: 2,
  title: "Movil",
  price: 250,
  stock: 20,
};
let productBasic3: ProductBasic = {
  id: 3,
  title: "Bateria Portatil",
  price: 40,
  stock: 30,
};
const arrProductBasic: ProductBasic[] = [
  productBasic1,
  productBasic2,
  productBasic3,
];

type Role = "admin" | "userBasic" | "moderator";

let rol: Role = "admin";

function getFullName(name: string, surname: string): string {
  return name + " " + surname;
}
getFullName("Kevin", "Diaz");
function calculateTotal(price: number, quantity: number): number {
  return quantity * price;
}
calculateTotal(10, 2);

function isAdult(age: number): boolean {
  return age >= 18;
}
isAdult(20);

const arrUserBasics: UserBasic[] = [userBasic1, userBasic2, userBasic3];
function getUserBasicNames(userBasics: UserBasic[]): string[] {
  return userBasics.map((userBasic) => userBasic.name);
}
getUserBasicNames(arrUserBasics);

function findUserBasicById(
  userBasics: UserBasic[],
  id: number,
): UserBasic | undefined {
  return userBasics.find((userBasic) => userBasic.id === id);
}
findUserBasicById(arrUserBasics, 2);

type Status = "pending" | "completed" | "cancelled";
interface Task {
  autor: UserBasic;
  status: Status;
}

function getIdText(id: string | number): string {
  if (typeof id === "string") {
    return id.toLocaleUpperCase();
  } else {
    return `${id} es un number`;
  }
}
const value = getIdText(3);
console.log(value);

const sistemUserBasic: Record<Role, string> = {
  admin: "Kevin",
  userBasic: "Juan",
  moderator: "Nerea",
};

const puntuaciones: Record<string, number> = { kevin: 2, juan: 3, nerea: 5 };

function identity<T>(value: T): T {
  return value;
}
identity("kevin");

function getFirstItem<T>(value: T[]): T {
  console.log(value[0]);
  return value[0];
}
getFirstItem(arrUserBasics);

interface ApiResponse<T> {
  success: boolean;
  data: T;
}
function getDataMockApi<T>(value: T): ApiResponse<T> {
  console.log({ success: true, data: value });
  return { success: true, data: value };
}
getDataMockApi(arrUserBasics);
getDataMockApi(arrProductBasic);

interface VipUserBasic extends UserBasic {
  vip: boolean;
}
const userBasicVip: VipUserBasic = {
  id: 4,
  name: "Diego",
  email: "diego@gmail.com",
  isActive: true,
  vip: true,
};

interface Discount extends ProductBasic {
  discount: number;
}
const productBasicWithDiscount: Discount = {
  discount: 15,
  id: 5,
  title: "Moto",
  price: 2000,
  stock: 20,
};

function updateUserBasic(userBasic: UserBasic, changes: Partial<UserBasic>) {
  return { ...userBasic, ...changes };
}
const userBasicUpdated: UserBasic = updateUserBasic(userBasic1, {
  name: "Kevin Diaz",
});
console.log(userBasicUpdated);
export {};