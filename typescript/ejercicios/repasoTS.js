"use strict";
let user1 = {
    id: 2,
    name: "Kevin",
    email: "1@email.com",
    age: 30,
    active: true,
    role: "admin",
};
let user2 = {
    id: 2,
    name: "Juan",
    email: "2@email.com",
    age: 49,
    active: true,
    role: "user",
};
let user3 = {
    id: 2,
    name: "Maria",
    email: "1@email.com",
    age: 20,
    active: false,
    role: "user",
};
let user4 = {
    id: 2,
    name: "Nerea",
    email: "1@email.com",
    age: 30,
    active: true,
    role: "admin",
};
function getNombres(...nombres) {
    return nombres;
}
let arrayNombres = getNombres(user1.name, user2.name, user3.name, user4.name);
let arrayUsers = [user1, user2, user3, user4];
let usersActive = arrayUsers.filter((a) => a.active);
let admins = [];
admins = arrayUsers.reduce((acc, user) => {
    if (user.role == "admin") {
        acc.push(user.name);
    }
    return acc;
}, []);
let product1 = {
    id: 1,
    name: "laptop",
    price: 340,
    stock: 20,
    category: "tech",
};
let product2 = {
    id: 2,
    name: "sombrero",
    price: 10,
    stock: 30,
    category: "clothes",
};
let product3 = {
    id: 3,
    name: "mouse",
    price: 25,
    stock: 10,
    category: "tech",
};
let product4 = {
    id: 4,
    name: "Aprende a programar",
    price: 28,
    stock: 50,
    category: "books",
};
let product5 = {
    id: 5,
    name: "monitor",
    price: 130,
    stock: 90,
    category: "tech",
};
let allProducts = [product1, product2, product3, product4, product5];
let namesProducts = allProducts.map((a) => a.name);
console.log(namesProducts);
let maxstack = allProducts.filter((a) => a.stock > 20);
let totalPrice = function (products) {
    return products.reduce((acc, num) => {
        return acc + num.price;
    }, 0);
};
let expensiveProducto = allProducts.reduce((acc, product) => acc.price < product.price ? product : acc);
let orderAsc = allProducts.sort((a, b) => a.price - b.price);
console.log(orderAsc);
let order1 = {
    id: 1,
    customer: "kevin",
    total: 10,
    status: "paid",
    createdAt: new Date(2026, 5, 29),
};
let order2 = {
    id: 2,
    customer: "juan",
    total: 80,
    status: "pending",
    createdAt: new Date(2026, 5, 30),
};
let order3 = {
    id: 3,
    customer: "nerea",
    total: 30,
    status: "shipped",
    createdAt: new Date(2026, 4, 29),
};
let order4 = {
    id: 4,
    customer: "maria",
    total: 40,
    status: "paid",
    createdAt: new Date(2026, 5, 10),
};
let order5 = {
    id: 5,
    customer: "emilio",
    total: 35,
    status: "cancelled",
    createdAt: new Date(2026, 2, 2),
};
let ordersArr = [order1, order2, order3, order4, order5];
let paidOrders = ordersArr.filter((order) => order.status == "paid");
let totalPaidOrders = paidOrders.reduce((acc, order) => acc + order.total, 0);
let haveCancelled = ordersArr.some((order) => order.status == "cancelled");
let allShipped = ordersArr.every((order) => order.status == "shipped");
let groupByStatus = ordersArr.reduce((acc, order) => {
    if (!acc[order.status]) {
        acc[order.status] = [];
        acc[order.status].push(order);
        return acc;
    }
    else {
        acc[order.status].push(order);
        return acc;
    }
}, {});
let post1 = {
    id: 1,
    title: "Typescript el lenguaje mas usado en frontend",
    likes: 40,
    comments: [{ id: 22, message: "Yo tambien lo uso", username: "Juan" }],
    author: "Kevin",
};
let post2 = {
    id: 1,
    title: "Java es el lenguaje mas demandado en España",
    likes: 80,
    comments: [
        { id: 27, message: "Hay muchas ofertas de Java", username: "Rosa" },
    ],
    author: "Pepe",
};
let post3 = {
    id: 1,
    title: "Java Spring se usa mucho es empresas",
    likes: 120,
    comments: [{ id: 27, message: "Mi empresa usa Spring!", username: "Pepito" }],
    author: "Marta",
};
let postArr = [post1, post2, post3];
let totalLikes = postArr.reduce((acc, post) => {
    return acc + post.likes;
}, 0);
let mostLikePost = postArr.reduce((acc, post) => {
    if (post.likes > acc) {
        acc = post.likes;
        return acc;
    }
    return acc;
}, 0);
let totalComments = postArr.reduce((acc, post) => {
    return acc + post.comments.length;
}, 0);
let allTitles = postArr.reduce((acc, post) => {
    acc.push(post.title);
    return acc;
}, []);
let filterByLikes = postArr.filter((post) => post.likes > 80);
let empleado1 = {
    id: 1,
    name: "kevin",
    departament: "frontend",
    salary: 1400,
    active: true,
    skill: ["typescript", "css", "html"],
};
let empleado2 = {
    id: 2,
    name: "Juan",
    departament: "backend",
    salary: 1800,
    active: true,
    skill: ["java", "spring"],
};
let empleado3 = {
    id: 3,
    name: "Nerea",
    departament: "design",
    salary: 1900,
    active: true,
    skill: ["figma", "UX", "UI"],
};
let empleado4 = {
    id: 4,
    name: "Maria",
    departament: "marketing",
    salary: 1300,
    active: false,
    skill: ["ventas", "funnels", "kpi"],
};
let empleado5 = {
    id: 5,
    name: "Emilio",
    departament: "frontend",
    salary: 1600,
    active: true,
    skill: ["typescript", "css", "html"],
};
let empleado6 = {
    id: 6,
    name: "Pepe",
    departament: "frontend",
    salary: 2000,
    active: true,
    skill: ["typescript", "Angular"],
};
let employeeArr = [
    empleado1,
    empleado2,
    empleado3,
    empleado4,
    empleado5,
    empleado6,
];
let activeEmpleyees = employeeArr.filter((employee) => employee.active);
let costSalary = employeeArr.reduce((acc, employee) => {
    return acc + employee.salary;
}, 0);
let highSalary = employeeArr.reduce((acc, employee) => {
    if (acc < employee.salary) {
        acc = employee.salary;
        return acc;
    }
    return acc;
}, 0);
let skills = employeeArr.reduce((acc, employee) => {
    employee.skill.forEach((e) => {
        acc.add(e);
    });
    return acc;
}, new Set());
let groupByDepartament = employeeArr.reduce((acc, employee) => {
    if (!acc[employee.departament]) {
        acc[employee.departament] = [];
        acc[employee.departament].push(employee);
        return acc;
    }
    acc[employee.departament].push(employee);
    return acc;
}, {});
let salaryDesc = employeeArr.sort((a, b) => b.salary - a.salary);
