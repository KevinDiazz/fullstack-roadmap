/* Objetivo:
Ser capaz de consumir APIs REST desde TypeScript,
tipar correctamente las respuestas, manejar errores
y procesar datos asíncronos utilizando async/await.
*/
interface ProductApi {
  id: number;
  title: string;
  price: number;
  category: string;
  stock: number;
  rating: number;
}
interface NewProductApi {
  title: string;
  price: number;
  category: string;
  stock: number;
  rating: number;
}
interface DeleteProductApi {
  title: string;
  price: number;
  category: string;
  stock: number;
  rating: number;
  isDeleted: boolean;
  deletedOn: Date;
}
interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];

  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;

  difficulty: string;
  cuisine: string;

  caloriesPerServing: number;

  tags: string[];

  userId: number;

  image: string;

  rating: number;
  reviewCount: number;

  mealType: string[];
}
interface ResponseApi {
  products: ProductApi[];
  total: number;
  skip: number;
  limit: number;
}
interface ResponseApiRecipes {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
}

function productByCategories(
  category: string,
  product: ResponseApi,
): ProductApi[] {
  return product.products.filter((prod) => prod.category === category);
}
function topRatedRecipes(
  minRating: number,
  recipes: ResponseApiRecipes,
): Recipe[] {
  return recipes.recipes
    .filter((recipe) => recipe.rating > minRating)
    .sort((a, b) => b.rating - a.rating);
}
async function getProducts(): Promise<ResponseApi> {
  const product = await fetch(
    "https://dummyjson.com/products?limit=30&&select=title,price,category,stock,rating",
  );
  if (!product.ok) {
    throw new Error(`HTTT ${product.status}`);
  }
  return (await product.json()) as ResponseApi;
}
async function getRecipes(): Promise<ResponseApiRecipes> {
  const response = await fetch("https://dummyjson.com/recipes?limit=20");
  if (!response.ok) {
    throw new Error(`HTTT ${response.status}`);
  }
  return (await response.json()) as ResponseApiRecipes;
}

async function addProduct(product: NewProductApi): Promise<NewProductApi> {
  const newProduct: NewProductApi = {
    title: "iphone 13",
    price: 544,
    category: "Electronic",
    stock: 20,
    rating: 4.3,
  };
  const response = await fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProduct),
  });
  if (!response.ok) {
    throw new Error(`HTTT ${response.status}`);
  }
  return (await response.json()) as NewProductApi;
}
async function updateProduct(
  updateProduct: NewProductApi,
  id: number,
): Promise<ProductApi> {
  const response = await fetch(`https://dummyjson.com/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateProduct),
  });
  if (!response.ok) {
    throw new Error(`HTTT ${response.status}`);
  }
  return (await response.json()) as ProductApi;
}

async function deleteProduct(id: number): Promise<DeleteProductApi> {
  const response = await fetch(`https://dummyjson.com/products/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`HTTT ${response.status}`);
  }
  return (await response.json()) as DeleteProductApi;
}

async function mainApi(): Promise<void> {
  try {
    const [products, recipes] = await Promise.all([
      getProducts(),
      getRecipes(),
    ]);
    console.log(productByCategories("beauty", products));
    console.log(topRatedRecipes(4.5, recipes));
  } catch (e) {
    console.log(e);
  }
}
mainApi();
