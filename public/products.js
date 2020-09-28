function generateHtml (productsFetch) {
    let elementsHtml;
            
    productsFetch.products.map(product => 
        elementsHtml += 
        `<li class="product">
            <div class="product">
                <h1 class="product-title">${product.name}</h1>
                <p class="product-description">${product.description}</p>
            </div>
        </li>`
    )
            
    const productsWithoutUndefined = elementsHtml.replace("undefined", "");

    return productsWithoutUndefined;
}

export async function fetchProducts (number) {
    const response = await fetch(`http://localhost:8080/product/${number}`);
    return response.json();
}

export  async function renderProducts (listProducts, number) {
    const productsFetch = await fetchProducts(number);
    const productsHtml = generateHtml(productsFetch);

    listProducts.innerHTML = productsHtml;
}
