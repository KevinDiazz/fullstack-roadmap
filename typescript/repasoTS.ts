/* Exercise 1 — Users Dataset
Objetivo : Usar Interface, tipados , arrays
1 - Obtén array solo con nombres.
2 - Filtra usuarios activos.
3 - Obtén admins.
*/
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  active: boolean;
  role: "admin" | "user";
}
let user1: User = {
  id: 2,
  name: "Kevin",
  email: "1@email.com",
  age: 30,
  active: true,
  role: "admin",
};
let user2: User = {
  id: 2,
  name: "Juan",
  email: "2@email.com",
  age: 49,
  active: true,
  role: "user",
};
let user3: User = {
  id: 2,
  name: "Maria",
  email: "1@email.com",
  age: 20,
  active: false,
  role: "user",
};
let user4: User = {
  id: 2,
  name: "Nerea",
  email: "1@email.com",
  age: 30,
  active: true,
  role: "admin",
};

function getNombres(...nombres: string[]) {
  return nombres;
}
let arrayNombres = getNombres(user1.name, user2.name, user3.name, user4.name);
let arrayUsers: User[] = [user1, user2, user3, user4];
let usersActive = arrayUsers.filter((a) => a.active);
let admins: string[] = [];
admins = arrayUsers.reduce((acc, user) => {
  if (user.role == "admin") {
    acc.push(user.name);
  }
  return acc;
}, [] as string[]);

/* Exercise 2 — Products
Objetivo : Usar Interface, tipados , arrays
1 - Obtener nombres de productos.
2 - Filtrar productos con stock > 0.
3 - Calcular precio total de TODOS los productos.
4- encontrar producto más caro
5 - ordenar por precio ASC
*/

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: "tech" | "clothes" | "books";
}
let product1: Product = {
  id: 1,
  name: "laptop",
  price: 340,
  stock: 20,
  category: "tech",
};
let product2: Product = {
  id: 2,
  name: "sombrero",
  price: 10,
  stock: 30,
  category: "clothes",
};
let product3: Product = {
  id: 3,
  name: "mouse",
  price: 25,
  stock: 10,
  category: "tech",
};
let product4: Product = {
  id: 4,
  name: "Aprende a programar",
  price: 28,
  stock: 50,
  category: "books",
};
let product5: Product = {
  id: 5,
  name: "monitor",
  price: 130,
  stock: 90,
  category: "tech",
};

let allProducts: Product[] = [product1, product2, product3, product4, product5];
let namesProducts = allProducts.map((a) => a.name);
console.log(namesProducts);
let maxstack = allProducts.filter((a) => a.stock > 20);
let totalPrice = function (products:Product[]): number {
    return products.reduce((acc:number,num:Product)=>{
        return acc + num.price;
    },0)
};
let expensiveProducto=allProducts.reduce((acc,product)=>
acc.price<product.price? product:acc
);
let orderAsc=allProducts.sort((a,b)=>a.price-b.price);
console.log(orderAsc);