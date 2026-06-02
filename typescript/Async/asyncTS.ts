/* Objetivo:
Ser capaz de consumir APIs REST desde TypeScript,
tipar correctamente las respuestas, manejar errores
y procesar datos asíncronos utilizando async/await.
*/
interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
interface Todos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
async function getUser(): Promise<UserData[]> {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!users.ok) {
    throw new Error(`HTTP ${users.status}`);
  }

  return (await users.json()) as UserData[];
}
async function getTodos(): Promise<Todos[]> {
  const todos = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!todos.ok) {
    throw new Error(`HTTP ${todos.status}`);
  }
  return (await todos.json()) as Todos[];
}

async function main(): Promise<void> {
  try {
    const users = await getUser();
    const todos = await getTodos();
    const todoCompleted = todos.filter((todo) => todo.completed);
    const todoinCompleted = todos.filter((todo) => !todo.completed);
    const userByCompanyName = users.filter(
      (user) => user.company.name == "Romaguera-Jacobson",
    );
  } catch (e) {
    console.log(e);
  }
}

async function getUsersName(): Promise<string[]> {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!users.ok) {
    throw new Error(`HTTP ${users.status}`);
  }
  const userData = (await users.json()) as UserData[];
  const usersArr: string[] = [];
  userData.forEach((user) => usersArr.push(user.name));

  return usersArr;
}

async function main2(): Promise<void> {
  try {
    const usersName = await getUsersName();
    console.log(usersName);
  } catch (e) {
    console.log(e);
  }
}

async function getTodosTotal(): Promise<number> {
  const todos = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!todos.ok) {
    throw new Error(`HTTP ${todos.status}`);
  }
  const todoData = (await todos.json()) as Todos[];
  const todoComplete: number = todoData.filter((todo) => todo.completed).length;
  return todoComplete;
}
async function main3(): Promise<void> {
  try {
    const todosTotalCompleted = await getTodosTotal();
    console.log(todosTotalCompleted);
  } catch (e) {
    console.log(e);
  }
}
main3();
