"use strict";
function productByCategories(category, product) {
    return product.products.filter((prod) => prod.category === category);
}
function topRatedRecipes(minRating, recipes) {
    return recipes.recipes
        .filter((recipe) => recipe.rating > minRating)
        .sort((a, b) => b.rating - a.rating);
}
async function getProducts() {
    const product = await fetch("https://dummyjson.com/products?limit=30&&select=title,price,category,stock,rating");
    if (!product.ok) {
        throw new Error(`HTTT ${product.status}`);
    }
    return (await product.json());
}
async function getRecipes() {
    const response = await fetch("https://dummyjson.com/recipes?limit=20");
    if (!response.ok) {
        throw new Error(`HTTT ${response.status}`);
    }
    return (await response.json());
}
async function addProduct(product) {
    const newProduct = {
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
    return (await response.json());
}
async function updateProduct(updateProduct, id) {
    const response = await fetch(`https://dummyjson.com/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateProduct),
    });
    if (!response.ok) {
        throw new Error(`HTTT ${response.status}`);
    }
    return (await response.json());
}
async function deleteProduct(id) {
    const response = await fetch(`https://dummyjson.com/products/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error(`HTTT ${response.status}`);
    }
    return (await response.json());
}
async function mainApi() {
    try {
        const [products, recipes] = await Promise.all([
            getProducts(),
            getRecipes(),
        ]);
        console.log(productByCategories("beauty", products));
        console.log(topRatedRecipes(4.5, recipes));
    }
    catch (e) {
        console.log(e);
    }
}
mainApi();
