"use strict";
let userBasic1 = {
    id: 1,
    name: "Kevin",
    email: "Kevin@gmail.com",
    isActive: true,
    avatar: "foto",
};
let userBasic2 = {
    id: 2,
    name: "Nerea",
    email: "Nerea@gmail.com",
    isActive: true,
};
let userBasic3 = {
    id: 3,
    name: "Juan",
    email: "Juan@gmail.com",
    isActive: false,
    avatar: "foto-Juan",
};
let productBasic1 = { id: 1, title: "Tv", price: 200, stock: 10 };
let productBasic2 = {
    id: 2,
    title: "Movil",
    price: 250,
    stock: 20,
};
let productBasic3 = {
    id: 3,
    title: "Bateria Portatil",
    price: 40,
    stock: 30,
};
const arrProductBasic = [
    productBasic1,
    productBasic2,
    productBasic3,
];
let rol = "admin";
function getFullName(name, surname) {
    return name + " " + surname;
}
getFullName("Kevin", "Diaz");
function calculateTotal(price, quantity) {
    return quantity * price;
}
calculateTotal(10, 2);
function isAdult(age) {
    return age >= 18;
}
isAdult(20);
const arrUserBasics = [userBasic1, userBasic2, userBasic3];
function getUserBasicNames(userBasics) {
    return userBasics.map((userBasic) => userBasic.name);
}
getUserBasicNames(arrUserBasics);
function findUserBasicById(userBasics, id) {
    return userBasics.find((userBasic) => userBasic.id === id);
}
findUserBasicById(arrUserBasics, 2);
function getIdText(id) {
    if (typeof id === "string") {
        return id.toLocaleUpperCase();
    }
    else {
        return `${id} es un number`;
    }
}
const value = getIdText(3);
console.log(value);
const sistemUserBasic = {
    admin: "Kevin",
    userBasic: "Juan",
    moderator: "Nerea",
};
const puntuaciones = { kevin: 2, juan: 3, nerea: 5 };
function identity(value) {
    return value;
}
identity("kevin");
function getFirstItem(value) {
    console.log(value[0]);
    return value[0];
}
getFirstItem(arrUserBasics);
function getDataMockApi(value) {
    console.log({ success: true, data: value });
    return { success: true, data: value };
}
getDataMockApi(arrUserBasics);
getDataMockApi(arrProductBasic);
const userBasicVip = {
    id: 4,
    name: "Diego",
    email: "diego@gmail.com",
    isActive: true,
    vip: true,
};
const productBasicWithDiscount = {
    discount: 15,
    id: 5,
    title: "Moto",
    price: 2000,
    stock: 20,
};
function updateUserBasic(userBasic, changes) {
    return { ...userBasic, ...changes };
}
const userBasicUpdated = updateUserBasic(userBasic1, {
    name: "Kevin Diaz",
});
console.log(userBasicUpdated);
