"use strict";
async function getUser() {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!users.ok) {
        throw new Error(`HTTP ${users.status}`);
    }
    return (await users.json());
}
async function getTodos() {
    const todos = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!todos.ok) {
        throw new Error(`HTTP ${todos.status}`);
    }
    return (await todos.json());
}
async function main() {
    try {
        const users = await getUser();
        const todos = await getTodos();
        const todoCompleted = todos.filter((todo) => todo.completed);
        const todoinCompleted = todos.filter((todo) => !todo.completed);
        const userByCompanyName = users.filter((user) => user.company.name == "Romaguera-Jacobson");
    }
    catch (e) {
        console.log(e);
    }
}
async function getUsersName() {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!users.ok) {
        throw new Error(`HTTP ${users.status}`);
    }
    const userData = (await users.json());
    const usersArr = [];
    userData.forEach((user) => usersArr.push(user.name));
    return usersArr;
}
async function main2() {
    try {
        const usersName = await getUsersName();
        console.log(usersName);
    }
    catch (e) {
        console.log(e);
    }
}
async function getTodosTotal() {
    const todos = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!todos.ok) {
        throw new Error(`HTTP ${todos.status}`);
    }
    const todoData = (await todos.json());
    const todoComplete = todoData.filter((todo) => todo.completed).length;
    return todoComplete;
}
async function main3() {
    try {
        const todosTotalCompleted = await getTodosTotal();
        console.log(todosTotalCompleted);
    }
    catch (e) {
        console.log(e);
    }
}
main3();
